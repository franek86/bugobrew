<template>
    <div class="container">
        <h1 class="text--red">Registration</h1>
        <form class="form">
            
            <input class="form__input" v-model="userInfo.username" type="name" placeholder="Username"  required>
           
            <input class="form__input" v-model="userInfo.email" type="email" placeholder="Email"  required>
            <input class="form__input" v-model="userInfo.password " type="password" placeholder="Password"  required>
            <input class="form__input" v-model="userInfo.passwordConfirm " type="password" placeholder="Confirm password"  required>
            <button class="btn--primary" @click.prevent="registerForm()">Registration</button>
        </form>
        
        
    </div>
</template>

<script>



export default {

    

    data(){
        return{
            isValid:true,
            showPassword: false,
            userInfo:{
                username:'',
                email:'',
                password:'',
                confirmPassword:''
            }
            
        }
    },

    methods:{
        async registerForm(){
            try{
                await this.$axios.post('http://localhost:1337/auth/local/register', this.userInfo );
                this.$auth.login({data: this.userInfo})
                this.$router.push({name: 'auth-login'})
            } catch(error){
                console.log(error.response.data.message);
            }
            
        },
    },

    
   
}
</script>

<style lang="scss">

</style>