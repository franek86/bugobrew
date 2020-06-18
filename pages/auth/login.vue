<template>
    <div class="container">
        <v-form v-model="isValid">
            <v-text-field v-model="userInfo.identifier" type="email" :rules="[v => !!v || 'Username is required']" placeholder="Email"></v-text-field>
            <v-text-field v-model="userInfo.password " type="password" :rules="[v => !!v || 'Password is required']" placeholder="Password"></v-text-field>
            <v-btn class="btn--primary" @click.prevent="submitForm()" :disabled="!isValid">Login</v-btn>
        </v-form>
        
        
    </div>
</template>

<script>



export default {

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
                this.$router.push({name: 'Admin'}) 
           } catch(error){
               console.log(error.response.data.message);
           }
            
        }
    }
   
}
</script>

<style lang="sass" scoped>

</style>