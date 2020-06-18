<template>
    <div class="container">
        <form>
            
            <input v-model="userInfo.username" type="name" placeholder="Username" required>
           
            <input v-model="userInfo.email" type="email" placeholder="Email" required>
            <input v-model="userInfo.password " type="password" placeholder="Password" required>
            <input v-model="userInfo.passwordConfirm " type="password" placeholder="Confirm password" :error="!validPassword()" required>
            <button class="btn--primary" @click.prevent="registerForm()">Registration</button>
        </form>
        
        
    </div>
</template>

<script>



export default {

    

    data(){
        return{
            errorMsg: null,
            showPassword: false,
            userInfo:{
                username:'',
                email:'',
                password:'',
                confirmPassword:''
            },
            
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

        validPassword(){
            this.userInfo.password == this.userInfo.confirmPassword
        }
    }
   
}
</script>

<style lang="sass" scoped>

</style>