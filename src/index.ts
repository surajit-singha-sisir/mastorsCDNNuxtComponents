import { defineNuxtModule } from '@nuxt/kit'
import MyButton from './components/MyButton.vue'

// Export components
export { MyButton }

// Export Nuxt module
export default defineNuxtModule({
    meta: {
        name: 'mastorsCDNUI',
        configKey: 'ui'
    },
    setup(options, nuxt) {
        nuxt.hook('components:dirs', (dirs) => {
            dirs.push({
                path: '~/node_modules/mastorsCDNUI/dist/components',
                prefix: 'ui'
            })
        })
    }
})