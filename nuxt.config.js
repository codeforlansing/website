const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    title: 'Code for Lansing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Our volunteers make open sourced software solutions for Lansing nonprofits and civic groups.'
      },
      {
        property: 'og:description',
        content:
          'Our volunteers make open sourced software solutions for Lansing nonprofits and civic groups.'
      },
      { property: 'og:title', content: 'Code for Lansing' },
      { name: 'geo.region', content: 'US-MI' },
      { name: 'geo.placename', content: 'Greater Lansing' },
      { name: 'geo.position', content: '42.734552;-84.480615' },
      { name: 'ICBM', content: '42.734552, -84.480615' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://codeforlansing.org' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'Code for Lansing' },
      {
        property: 'og:image',
        content: 'https://codeforlansing.org/codeforlansing-banner.jpg'
      },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '640' },
      { property: 'og:image:height', content: '320' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon.ico?v=2' },
      { rel: 'image_src', type: 'image/png', href: '/favicon.ico?v=2' },
      { rel: 'icon', type: 'image/png', href: '/favicon.ico?v=2' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap'
      }
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
    '~/assets/scss/tailwind.scss',
    '~/assets/font-lansing-codes/font-lansing-codes.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/font-awesome' }, { src: '~/plugins/jsonp' }],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    // Set to true temporarily and `npm run build` to dissect bundle size
    analyze: false,

    postcss: {
      plugins: [require('tailwindcss')(tailwindJS), require('autoprefixer')]
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const vueRule = config.module.rules.find(
        rule => rule.loader === 'vue-loader'
      )
      vueRule.options.compilerOptions = {
        ...vueRule.options.compilerOptions,
        modules: [
          ...((vueRule.options.compilerOptions &&
            vueRule.options.compilerOptions.modules) ||
            []),
          { postTransformNode: staticClassHotfix }
        ]
      }

      function staticClassHotfix(el) {
        el.staticClass = el.staticClass && el.staticClass.replace(/\\\w\b/g, '')
        if (Array.isArray(el.children)) {
          el.children.map(staticClassHotfix)
        }
      }
    }
  }
}
