
<template>
  <div id="app">
    <TODOApp></TODOApp>
    <p>{{count}}</p>
  </div>





</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
<script>
  // Get rid of those pesky eslint errors for Materialize-css
import TODOApp from "./components/TODOApp/TODOApp";

  export default {

    computed: {
      count(){return "sss";}

    },
    mounted(){
      //M.AutoInit();
    },
    components:{
      TODOApp,
    }
  }
</script>