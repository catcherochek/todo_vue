<template>
    <div class="about">
        <h1>This is an about page</h1>
        <CardVue></CardVue>
    </div>

</template>
<script>
    import CardVue from '@/components/Card/CardVue'
    export default {
        name:'about',
        components: {
            CardVue
        },
        mounted() {
            // M.AutoInit();
        }
    }
</script>