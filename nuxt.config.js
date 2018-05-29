module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-starter-template',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt starter template'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
   ** CSS configuration
   */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
   ** Modules configuration
   */
  modules: [
    '@nuxtjs/axios', ['bootstrap-vue/nuxt', {
      css: true
    }, ],
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Plugin configuration
   */
  plugins: ['~/plugins/vue-highlightjs']
}
