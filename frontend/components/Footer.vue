<template>
    <footer class="footer bg--third p-t-60 p-b-60">
        <div class="container">
            <div class="grid columns-l-4 columns-m-2">
                <div>
                    <Logo />
                </div>

                <div class="footer__col">
                    <nuxt-link to="">Home</nuxt-link>
                    <nuxt-link to="">Product</nuxt-link>
                    <nuxt-link to="">Blog</nuxt-link>
                    <nuxt-link to="">Contact</nuxt-link>
                </div>

                <div class="footer__col">
                    <nuxt-link to="">Shipping and fees</nuxt-link>
                    <nuxt-link to="">Privacy Policy</nuxt-link>
                    <nuxt-link to="">Terms of service</nuxt-link>
                    <nuxt-link to="">Payment and safety</nuxt-link>
                </div>

                <div>
                    <div class="footer__col flex flex--col m-b-30">
                        <label class="m-b-10" for="newsletter">The world’s a crazy place right now. Sign up to stay in touch.</label>
                        <input class="p-t-10 p-b-10" type="text" name="newsletter" id="">
                    </div>

                    <div class="footer__col flex flex--col">
                        social
                    </div>
                    
                </div>
            </div>
        </div>
        
    </footer>
</template>

<script>

import Logo from "../components/Logo"


export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss">
    .footer{
        color:$color-white;
        .footer__col{
            
            a{
                color: $color-white;
                display: block;
                line-height: 20px;
                padding-top:$padding-8;
                padding-bottom: $padding-8;

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
</style>