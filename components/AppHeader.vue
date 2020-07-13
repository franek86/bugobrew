<template>
    <header class="header">
       
            <div class="row">

                <div class="col-3">
                    <Logo />
                </div>

                 <div class="col-6">
                    <div class="header__nav" :class="{toggle__menu : openMenu}">
                        <ul class="main__nav">
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/blogs">Blog</nuxt-link></li>
                            <li><nuxt-link to="/about">About</nuxt-link></li>
                            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                        </ul>
                    </div>
                 </div>

                 <div class="col-3">
                     <div class="login__nav">
                         <div v-if="$auth.loggedIn">
                             <div class="login__nav_user">{{$auth.user.username}}</div>
                             <div class="logout" @click.prevent="logout">Logout</div>
                         </div>
                         
                         <div v-else>
                             <div><nuxt-link to="/auth/login">Login</nuxt-link></div>
                              <div><nuxt-link to="/auth/register">Register</nuxt-link></div>
                         </div>
                     </div>

                     <div class="hamburger__icon" @click="toggleMenu()">
                         <span></span>
                     </div>
                 </div>
           
            </div>  
            
       
    </header>
</template>

<script>

import Logo from "../components/Logo"

export default {

   data(){
       return{
        openMenu: false
       }
   },

  components: {
      Logo
  },
  
  methods:{
      toggleMenu(){
        
          if(this.openMenu){
              this.openMenu = false;
          } else {
              this.openMenu = true;
          }
      },

    async logout() {
        await this.$auth.logout();
    }
  }
  


}

</script>

<style lang="scss">
    .header__nav{
        transform: translateY(-100%);
        transition: all .4s ease-in-out;

        &.toggle__menu{
            transform: translateY(0%);
        }
    }

    .hamburger__icon{
        position: relative;
        display: flex;
        align-items: center;
        width: 6rem;
        height: 8rem;
        padding: 10px;
        background: $color-white;

        span,
        span:after,
        span:before{
            content: '';
            position: relative;
            display: block;
            height: 10px;
            width: 100%;
            border: 1px solid $color-primary;
           
        }

        span:after{
            top: -14px
        }

        span:before{
            top: 12px
        }
    }
</style>