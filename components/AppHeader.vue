<template>
    <header class="header">
        <div class="container">
            <div class="row">

                <div class="col-3">
                    <Logo />
                </div>

                 <div class="col-9">
                    <div class="header__nav">
                        <ul class="main__nav">
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                        </ul>
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
  }
}

</script>

<style lang="scss">
    
</style>