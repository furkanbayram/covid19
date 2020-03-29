
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
			{ rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Abel|Aclonica|Acme|Allerta+Stencil|Do+Hyeon|Exo+2|Josefin+Sans|Lekton|Monda|Orbitron|Yanone+Kaffeesatz&display=swap'},
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		],
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
		{ src: "~/plugins/googleChart.js", ssr: false },
		{ src: "~/plugins/apexChart.js", ssr: false },

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
