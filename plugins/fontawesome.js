import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faLinkedin, faGithubSquare, faBars, faXmark, faAngleDown, faAngleUp)

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})