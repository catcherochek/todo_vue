<template>
   <!-- позиционирование блока  md-alignment-bottom-center-->
   <form  novalidate class="md-layout md-alignment-bottom-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
         <md-card-header>
            <div class="md-title">user login form</div>

         </md-card-header>

         <md-card-content>
          <md-field :class="getValidationClass('email')">
               <label for="email">Email</label>
               <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
               <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
               <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>
            <md-field :class="getValidationClass('password')">
               <label for="email">Password</label>
               <md-input type="password" name="pwd" id="password" v-model="form.password" :disabled="sending" />
               <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
               <span class="md-error" v-else-if="!$v.form.email.email">Invalid password</span>
            </md-field>
         </md-card-content>



         <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
         </md-card-actions>
      </md-card>


   </form>
</template>

<script>


   import VueMaterial from 'vue-material'
   import 'vue-material/dist/vue-material.min.css'
   import Vue from 'vue'
   Vue.use(VueMaterial,{inject:false});
   import { validationMixin } from 'vuelidate'
   import {
      required,
      email,
      minLength,
      maxLength
   } from 'vuelidate/lib/validators'


   export default {
      mixins:[validationMixin],
      name: "login",
      validations: {
         form: {
            password: {
               required,
               minLength: minLength(3)
            },
            lastName: {
               required,
               minLength: minLength(3)
            },
            age: {
               required,
               maxLength: maxLength(3)
            },
            gender: {
               required
            },
            email: {
               required,
               email
            }
         }
      },
      methods: {
            isLogged: function () {
                return this.$store.state.isLogged;
            },
            getValidationClass (fieldName) {
               const field = this.$v.form[fieldName]

               if (field) {
                  return {
                     'md-invalid': field.$invalid && field.$dirty
                  }
               }
            },

            validateUser () {
               this.$el.setAttribute('sending',true);
               this.$v.$touch()

               if (!this.$v.$invalid) {
                  this.saveUser()
               }
            }
      },
      beforeRouteEnter:function(a,b,next){
         let treue = next(vm => {
              // put your logic here
              if (vm.isLogged() ) {
                  next('/');
              }else {next()}
          });
          console.log(treue);
      },

      data: () => ({
         form: {
            password: null,
            lastName: null,
            gender: null,
            age: null,
            email: null,
         },
         userSaved: false,
         sending: false,
         lastUser: null
      }),

   }
</script>

<style scoped lang="scss">
   @import "~vue-material/dist/theme/engine"; // Import the theme engine

   @include md-register-theme("default", (
   primary: md-get-palette-color(green, A200), // The primary color of your application
   accent: md-get-palette-color(yellow, A200) // The accent or secondary color

   ));

   @import "~vue-material/dist/theme/all"; // Apply the theme
</style>