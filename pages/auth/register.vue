<template>
    <div class="h--vh">
        <div class="container">
            
                <div class="register__form">
                    <div class="error--message" v-if="error">
                        <p>{{error}}</p>
                    </div>

                    <div class="success--message" v-if="success">
                        <p>{{success}}</p>
                    </div>

                    <form class="form">

                        <h1 class="text--red m-b-25">Create account</h1>
                        <input class="form__input" v-model="username" type="name" placeholder="Username"  required>
                        <input class="form__input" v-model="email" type="email" placeholder="Email"  required>
                        <input class="form__input" v-model="password " type="password" placeholder="Password"  required>
                        <button class="btn--primary" @click.prevent="registerForm()">Registration</button>
                    </form>

                
                </div>
           
            
            
            
        </div>
    </div>
</template>

<script>



export default {

     middleware: 'guest',

    data(){
        return{
            error: false,
            success:false,
            showPassword: false,
            username:'',
            email:'',
            password:''
        }
    },

    methods:{
        async registerForm(){
            this.error = null;
            try{
                this.$axios.setToken(false);
                await this.$axios.post('http://localhost:1337/auth/local/register',{
                    username: this.username,
                    email: this.email,
                    password: this.password
                } );

                 /*this.success = `A confirmation link has been sent to your email account. \
                                Please click on the link to complete the registration process.`;*/

                
                this.$router.push({name: 'auth-login'})
            } catch(error){
                this.error = error.response.data.message[0].messages[0].message;
            }
            
        },
    },

    
   
}
</script>

<style lang="scss">
    .register__form{
        padding: $padding-32;
        border-radius: 3px;
        box-shadow: 0 0 10px rgba(0,0,0,0.25);
    }
</style>