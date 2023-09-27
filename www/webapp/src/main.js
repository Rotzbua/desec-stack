import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import "@fontsource/roboto/300.css" /* light */
import "@fontsource/roboto/400.css" /* regular */
import "@fontsource/roboto/400-italic.css" /* regular-italic */
import "@fontsource/roboto/500.css" /* medium */
import "@fontsource/roboto/700.css" /* bold */
import '@mdi/font/css/materialdesignicons.css'
import {createPinia} from "pinia";
import 'vuetify/styles'
import {createVuetify} from "vuetify";
// import {components, directives} from "vuetify/dist/vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    // icons: {
    //     iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    // },
    // theme: {
    //   themes: {
    //     light: {
    //       primary: colors.amber,
    //       secondary: colors.lightBlue.darken1,
    //       accent: colors.amber.accent4,
    //     },
    //   },
    // },
})


// Vue.config.productionTip = false
// Vue.use(Vuelidate)
// // `Pinia` replaces `vuex` as store.
// Vue.use(PiniaVuePlugin)
// const pinia = createPinia()
// // Must be after `pinia` initialisation to be accessible.
// Vue.use(VueRouter)

// new Vue({
//     router,
//     pinia,
//     vuetify,
//     render: h => h(App)
// }).$mount('#app')

const pinia = createPinia()

createApp(App)
    .use(vuetify)
    .use(pinia)
    .use(router)
    .mount('#app')
