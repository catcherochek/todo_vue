<template>
   <div id = "home">
   <p>sdfsdfasad</p>
   <p>sdfsdfasad</p>
   <p>sdfsdfasad</p>
   <p>sdfsdfasad</p>
   <p>sdfsdfasad</p>
   <p>sdfsdfasad</p>
   <p>sdfsdfasad</p>
   <p>sdfsdfasad</p>
      <md-button @click="incc">nsljknvlk</md-button>
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
   </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  mounted(){
   // M.AutoInit();

  },
   methods: {
      incc() {
         this.$store.commit('countincrement');
      }
   }
}
</script>
