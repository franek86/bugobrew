const URL = "http://localhost:1337";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Bugobrew | independent craft brewery",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: process.env.npm_package_description || "",
      },
      {
        hid: "og:locale",
        name: "og:locale",
        content: "en_EU",
      },
      {
        hid: "og:url",
        name: "og:url",
        content: process.env.BASE_URL || "http://localhost:3000",
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website",
      },
      {
        hid: "og:image",
        name: "og:image",
        content:
          "https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/filter.js" },
    { src: "~/plugins/pagination.js" },
    { src: "~/plugins/localStorage.js", ssr: false },
    { src: "~/plugins/toasted.js", ssr: false },
    { src: "~/plugins/vuelidate.js" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth", "@nuxtjs/style-resources"],
  /*
   ** Axios modul congiguration
   */

  axios: {
    proxy: true,
    baseURL: URL,
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `${URL}/auth/local`,
            method: "post",
            propertyName: "jwt",
          },
          logout: false,
          user: {
            url: `${URL}/users/me`,
            method: "get",
            propertyName: false,
          },
        },
        tokenRequired: true,
        tokenType: "bearer",
        // globalToken: true,
        // autoFetchUser: true
      },
      tokenName: "jwt",
    },
    redirect: {
      login: "/auth/login",
      home: false,
    },
  },

  styleResources: {
    scss: ["assets/scss/_variables.scss"],
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
