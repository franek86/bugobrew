<template>
    <header class="header">
       
            <div class="grid columns-2">

                <div>
                    <Logo />
                </div>

              
                 <div>
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

                   
                 </div>

                 
           
            </div>  
            
            <BurgerMenu />
            <Nav>
                <ul class="main__nav">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/blogs">Blog</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                </ul>
            </Nav>
    </header>
</template>

<script>

import Logo from "../components/Logo"
import Nav from "../components/Nav"
import BurgerMenu from "../components/BurgerMenu"

export default {

   data(){
       return{
        
       }
   },

  components: {
      Logo,
      Nav,
      BurgerMenu
  },
  
  methods:{
      
    async logout() {
        await this.$auth.logout();
    }
  }
  


}

</script>

<style lang="scss">
   

</style>