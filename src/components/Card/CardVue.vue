<template id = "CardVue" >
    <div>
        <md-button @click="decrr" class="md-fab">
            <md-icon>menu</md-icon>
        </md-button>
            <!-- Dropdown Trigger -->
            <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

            <!-- Dropdown Structure -->
            <ul id='dropdown1' class='dropdown-content'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">three</a></li>
                <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
            </ul>
    </div>
</template>

<script>

    import 'materialize-css'
    import 'materialize-css/sass/materialize.scss'
    import 'material-icons'


    import Vue from 'vue';
    import 'vue-material/dist/vue-material.min.css'
    import  {MdButton,MdIcon} from 'vue-material/dist/components'
    Vue.use(MdButton, { inject: false });
    Vue.use(MdIcon, { inject: false });

    export default {
        components:{

        },
        methods:{
           decrr(){
               this.$store.commit('countdecrement')
           }
        },
        name: 'CardVue',
        props: {
           text:String,//card text
           imgg:String,//image link
           link:String,
           TextLink:String,

        },
        mixins:{

        },
        mounted() {
            M.AutoInit();
        }
    };

</script>
