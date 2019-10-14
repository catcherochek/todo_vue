<template>
   <p>Im a login view</p>
</template>

<script>
    export default {
      name: "login",
        methods: {
            isLogged: function () {
                return this.$store.state.isLogged;
            },
        },
      beforeRouteEnter:function(a,b,next){
         let treue = next(vm => {
              // put your logic here
              if (vm.isLogged() ) {
                  next('/');
              }else {next()}
          });
          console.log(treue);
      }
    }
</script>

<style scoped>

</style>