<template>
    <header class="header">
        <div class="container">
            <div class="row">

                <div class="col-3">
                    <Logo />
                </div>

                 <div class="col-6">
                    <div class="header__nav">
                        <ul class="main__nav">
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/blogs">Blog</nuxt-link></li>
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
                 </div>
           
            </div>  
            
        </div>
       
    </header>
</template>

<script>

import Logo from "../components/Logo"

export default {
  components: {
      Logo
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