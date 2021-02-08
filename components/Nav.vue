<template>
    <div>
        <div class="slide__menu" 
            @click="closeSlideMenu()" 
            :class="{'slide__menu_active' : isSlideMenuOpen}">

            <transition name="slide__menu">
                <nav if="isSlideMenuOpen" class="slide__menu_nav">
                    <slot></slot>
                </nav>
            </transition>
        </div>

        
    </div>
</template>

<script>
export default {
    /*data(){
        return{
            isSlideMenuOpen: false
        }
    },*/

    computed:{
        isSlideMenuOpen(){
            return this.$store.state.isNavOpen
        }
    },

    methods:{
        closeSlideMenu(){
            //this.isSlideMenuOpen = !this.isSlideMenuOpen
            this.$store.dispatch('getNavOpen');
        }
    }
}
</script>

<style lang="scss">
    .slide__menu-enter-active,
    .slide__menu-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide__menu-enter,
    .slide__menu-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in-out 0s
    }

    .slide__menu{
        position: fixed;
        top: 0;
        right: -55vw;
        background: $color-secondary;
        min-height: 100vh;
        width: 55vw;
        transition: right 1s ease-in-out;
        clip-path: polygon(11% 0, 100% 0%, 100% 100%, 0 100%);
        height: 100%;
        

        &.slide__menu_active{
            right: 0;
        }

        .slide__menu_nav{
            clip-path: polygon(11% 0, 100% 0%, 100% 100%, 0 100%);
            height: 100%;
        }
    }
</style>