
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/main.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios modul congiguration
  */
  axios:{
    baseURL:'http://localhost:1337'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/local', method: 'post', propertyName: 'jwt' },
          logout: false,
          user: { url: '/users/me', method: 'get', propertyName: false }
        },
        tokenRequired: true,
        tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      },
      tokenName: 'jwt'
    },
    redirect:{
      login:'/auth/login',
      home:'/Admin'
    }
  },

  

  styleResources:{
      scss: [
        'assets/scss/_variables.scss'
      ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
