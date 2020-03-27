
module.exports = {
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
			{ rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Mukta:400,500,700&display=swap&subset=latin-ext'},
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
		'@/assets/scss/main.scss'
	],
  /*
  ** Plugins to load before mounting the App
  */
	plugins: [
		{ src: "~/plugins/googleChart.js" }
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
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
	],
  /*
  ** Build configuration
  */
	build: {
    /*
    ** You can extend webpack config here
    */
		extend(config, ctx) {
		}
	}
}
