import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'

import type { App } from 'vue'

export function initializeApp (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
}
