<template>
  <div class="page-container TODOApp">
     <md-app md-mode="reveal">
         <md-app-toolbar class="md-primary">
              <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                   <md-icon>menu</md-icon>
              </md-button>
              <span class="md-title">TODOList/PleaseLogin/</span>
         </md-app-toolbar>

         <md-app-drawer :md-active.sync="menuVisible">
                        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

                        <md-list>
                            <md-list-item>

                                <md-icon>verified_user</md-icon>
                                <md-button @click="first = true" class=" md-raised md-dense md-primary">Login</md-button>

                            </md-list-item>

                            <md-list-item>
                                <md-icon>exit_to_app</md-icon>
                                <span class="md-list-item-text">Logout</span>
                            </md-list-item>

                            <md-list-item>
                                <md-icon>supervised_user_circle</md-icon>
                                <span class="md-list-item-text">create user</span>
                            </md-list-item>


                            <md-list-item>
                                <md-icon>note_add</md-icon>
                                <span class="md-list-item-text">Add Task</span>
                            </md-list-item>
                        </md-list>
                    </md-app-drawer>

         <md-app-content>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
                    </md-app-content>
     </md-app>
  </div>




</template>
<style lang="scss" scoped>
    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme("default", (
            primary: md-get-palette-color(green, A200), // The primary color of your application
            accent: md-get-palette-color(yellow, A200) // The accent or secondary color
    ));

    @import "~vue-material/dist/theme/all"; // Apply the theme

    .md-app {

        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>
<script>

    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.min.css'


    import Vue from 'vue'
    Vue.use(VueMaterial,{inject:false});
    export default {
        name:'TODOApp',
        props: {
        },
        data: () => ({
            menuVisible: false
        })
    };
</script>
