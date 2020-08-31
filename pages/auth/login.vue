<template>
    <div class="h--vh">
        <div class="container">
        
            <form class="form">
                <h1 class="text--red m-b-25">
                    Login
                </h1>
                <input class="form__input" v-model="userInfo.identifier" type="email"  placeholder="Email">
                <input class="form__input" v-model="userInfo.password " type="password"  placeholder="Password">
                <button class="btn--primary" @click.prevent="submitForm()">Login</button>
            </form>
            
            <div>
              <p>Don't have an account?
              <nuxt-link to="/auth/register">Register</nuxt-link></p>
            </div>
            <div>
                 <p><nuxt-link to="/auth/forgot-password">Forgot Password?</nuxt-link></p>
            </div>
           
    </div>
    </div>
</template>

<script>


export default {
     middleware: 'guest',

    data(){
        return{
            isValid: true,
            showPassword: false,
            userInfo:{
                identifier:'',
                password:''
            }
        }
    },

    methods:{
    
        async submitForm(){
           try{
                await this.$auth.loginWith('local', { data: this.userInfo });
                this.$router.push({name: 'admin'}) 
           } catch(error){
               console.log(error.response.data.message);
           }
            
        }
    }
   
}
</script>

<style lang="scss">
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 90vw;
        margin: 0 auto;

        @media (min-width: $breakpoint-tablet){
            max-width: 70vw;
        }

        @media (min-width: $breakpoint-xl-desktop){
            max-width: 40vw;
        }

        &__input{
            padding: $padding-16;
            display: block;
            width: 100%;
            margin-bottom: $margin-16;                                           
        }
    }
</style>