import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import App2 from './nope.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faHeart)

createApp(App2)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
