import 'virtual:windi.css'

import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import Demo from './components/Demo.vue'
import InlineIcon from './components/InlineIcon.vue'
import HorCenter from './components/HorCenter.vue'
import Tag from './components/Tag.vue'

export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('Demo', Demo)
        app.component('InlineIcon', InlineIcon)
        app.component('HorCenter', HorCenter)
        app.component('Tag', Tag)
    },
}
