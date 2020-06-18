<template>
    <div class="container">
        <form>
            <input v-model="userInfo.identifier" type="email" placeholder="Email">
            <input v-model="userInfo.password " type="password" placeholder="Password">
            <button class="btn--primary" @click.prevent="submitForm()">Login</button>
        </form>
        
        
    </div>
</template>

<script>



export default {

    data(){
        return{
            vaild: false,
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