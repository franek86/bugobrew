<template>
    <header class="header">
       
            <div class="grid header__grid align--center">

                <div>
                    <Logo />
                </div>

              
                 <div class="header__login">
                     <div class="login__nav">
                         <div v-if="isAuthenticated">
                             <div class="login__nav_user">{{loggedInUser.username}}</div>
                             <div v-if="isAdmin">{{isAdmin}}</div>
                             <div class="logout" @click.prevent="logout">Logout</div>
                         </div>
                         
                         <div v-if="!isAuthenticated">
                             <div class="btn--secondary"><nuxt-link to="/auth/login">Login</nuxt-link></div>
                         </div>
                     </div>

                   
                 </div>

                 
           
            </div>  
            
            <BurgerMenu />
            <Nav>
                <ul class="main__nav">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/products">Products</nuxt-link></li>
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

import { mapGetters } from 'vuex'

export default {

  components: {
      Logo,
      Nav,
      BurgerMenu
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser', 'isAdmin'])
  },
  
  methods:{
      
    async logout() {
        await this.$auth.logout();
    }
  }
  


}

</script>

<style lang="scss">
    .header__grid{
        grid-template-columns: 1fr 1fr 150px;
        height:100%;
    }

    .header__login{
        display: flex;
        justify-content: flex-end;
    }

    

</style>