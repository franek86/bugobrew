<template>
    <div class="container ">
        <div>
            <h3 class="mt-2">Categories</h3>
            <div class="form-check" v-for="(category, index) in categories" :key="index">
                <input class="form-check-input" type="checkbox" :value="category.id" :id="'category-'+index" v-model="selected.categories">
                <label class="form-check-label" style="color:black;" :for="'category-' + index">
                {{ category.Category }}
                </label>
            </div>
        </div>
     

        <div class="product product grid columns-1 columns-m-2">
            <article class="product__cart" v-for="product in products" :key="product.id">   
                
                <div class="product__img">
                    <img :src="`http://localhost:1337${product.Single_image.url}`" alt="">
                </div>
                <h3 class="product__title">{{product.Title}}</h3>
                <div class="product__price">{{product.Regular_price}}</div>
                
            </article>
        </div>
       
    </div>
</template>

<script>

import axios from 'axios';
import qs from 'qs';

const baseURL = 'http://localhost:1337';

export default {
    
    data(){
        return{
            products:[],
            categories:[],
            selected:{
                categories:[]
            }
        }
    },

    watch:{
        selected:{
            handler: function(){
                this.loadCategories();
                this.loadProducts();
            },
            deep: true
        }
    },

    mounted(){
        this.loadCategories();
        this.loadProducts();
    },

    methods:{
        loadCategories: function () {
            axios.get(`${baseURL}/product-categories`)
                .then((response) => {
                    
                    this.categories = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        loadProducts: function () {
            axios.get(`${baseURL}/products`, {
                    params: {product_categories:this.selected.categories},
                    paramsSerializer: (params)=>{
                    return qs.stringify(params,{arrayFormat:'repeat'})
                    }
                })
                .then((response) => {
                    this.products = response.data
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

       


    }

   



}
</script>

<style lang="scss">

    .product{
        &__cart{
            box-shadow: 10px 10px 15px 0 rgba($color: #000000, $alpha: 0.05);
            margin-bottom:$margin-32;
            border-radius: .5em;
            cursor: pointer;
        }

        &__img{
            height: 320px;
            img{
                object-fit: contain;
                object-position: center;
                height: 100%;
            }
        }

        &__title{
            color:$color-grey;
            text-align: center;
        }

        &__price{
            font-size: 2rem;
            color:$color-black;
            font-weight: 600;
            text-align: center;
        }


    }
 

</style>