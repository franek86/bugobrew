<template>
    <div>
        <h1>{{product.Title}}</h1>
    </div>
</template>

<script>

import{mapState, mapActions} from 'vuex';

export default {
    computed:{
        ...mapState(['product'])
    },

    mounted(){
        this.fetchSingleProduct(this.$route.params.id);
    },

    methods:{
        ...mapActions(['fetchSingleProduct'])
    }
}
</script>

<style lang="scss" scoped>
    h1{
        color:pink;
    }
</style>