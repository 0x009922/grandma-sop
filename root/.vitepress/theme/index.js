import 'virtual:windi.css'

import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import Demo from './components/Demo.vue'
import InlineIcon from './components/InlineIcon.vue'

export default {
    ...DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('Demo', Demo)
        app.component('InlineIcon', InlineIcon)
    },
}
