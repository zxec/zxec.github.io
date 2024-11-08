import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        primary: '#F07300',
        'primary-lighten-1': '#F07300CC',
        'primary-lighten-2': '#F0730099',
        'primary-lighten-3': '#F0730066',
        'primary-lighten-4': '#F0730033',
        'primary-lighten-5': '#F073001A',
        'primary-lighten-6': '#F073000A',
        secondary: '#414141',
        'secondary-lighten-1': '#414141CC',
        'secondary-lighten-2': '#41414199',
        'secondary-lighten-3': '#41414166',
        'secondary-lighten-4': '#41414133',
        'secondary-lighten-5': '#4141411A',
        'secondary-lighten-6': '#4444440A',
        success: '#05B384',
        'success-lighten-1': '#05B384CC',
        'success-lighten-2': '#05B38499',
        'success-lighten-3': '#05B38466',
        'success-lighten-4': '#05B38433',
        'success-lighten-5': '#05B3841A',
        'success-lighten-6': '#05B3840A',
        error: '#E53E3E',
        'error-lighten-1': '#E53E3ECC',
        'error-lighten-2': '#E53E3E99',
        'error-lighten-3': '#E53E3E66',
        'error-lighten-4': '#E53E3E33',
        'error-lighten-5': '#E53E3E1A',
        'error-lighten-6': '#E53E3E0A',
        info: '#2196F3',
        warning: '#FB8C00',
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme
            },
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
