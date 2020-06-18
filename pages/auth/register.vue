<template>
    <div class="container">
        <v-form>
            
            <v-text-field v-model="userInfo.username" type="name" placeholder="Username" :rules="username" required></v-text-field>
           
            <v-text-field v-model="userInfo.email" type="email" placeholder="Email" :rules="emailRules" required></v-text-field>
            <v-text-field v-model="userInfo.password " type="password" placeholder="Password" :rules="passwordRules" error-count="5" required></v-text-field>
            <v-text-field v-model="userInfo.passwordConfirm " type="password" placeholder="Confirm password" :rules="confirmPasswordRules" required></v-text-field>
            <v-btn class="btn--primary" @click.prevent="registerForm()">Registration</v-btn>
        </v-form>
        
        
    </div>
</template>

<script>



export default {

    

    data(){
        return{

            showPassword: false,
            userInfo:{
                username:'',
                email:'',
                password:'',
                confirmPassword:''
            },

            username:[
                v => !!v || 'Username is required',
            ],

            emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 5) || 'Password must have 5+ characters',
                v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
                v => /(?=.*\d)/.test(v) || 'Must have one number',
                v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
            ],

            confirmPasswordRules:[
                confirmation => confirmation === this.userInfo.password || 'Passwords must match'
            ]
            
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

<style lang="sass" scoped>

</style>