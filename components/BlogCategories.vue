<template>
    <div>
        <div class="category__lists m-t-35">
            <div class="category__lists_item" v-for="category in blogCategoriesList" :key="category.id">
                <input type="checkbox" :id="category.id" :value="category.Category" >
                <label :for="category">{{category.Category}}</label>
            </div>

            
            
        </div>
    </div>
</template>

<script>

export default {

   
    props:{
       blogCategoriesList:{
           type: Array,
           default: () => []
       }
    }
    
}
</script>

<style lang="scss">

.category__lists{
    display: flex;
    justify-content: space-between;


    &_item{
        background-color: $color-black;
        padding: $padding-8 $padding-16;
        cursor: pointer;
        transition: background-color .25s ease-in-out;

        &:hover{
            background-color: $color-primary;
        }
    }

    &_name{
        
        font-weight: bold;
    }
}
  
</style>