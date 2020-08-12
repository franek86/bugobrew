<template>
  <div class="main">
    <AppHeader />
    <div class="main__container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader"
import Footer from "@/components/Footer"

export default {
  components:{
    AppHeader,
    Footer
  }
}

</script>

<style lang="scss">

  .main{
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    &__container{
      flex:1;
    }
  }

  
</style>
