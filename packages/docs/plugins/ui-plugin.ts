// @ts-nocheck

import Vue from 'vue'
import { ColorThemePlugin } from '../../ui/src/services/ColorThemePlugin'
import { getContext } from '../../ui/src/components/context-test/context-provide/context'
import { ContextPlugin } from '../../ui/src/components/context-test/context-provide/ContextPlugin'
import { DropdownPopperPlugin } from '../../ui/src/components/vuestic-components/va-dropdown/dropdown-popover-subplugin.js'
import ColorHelpersPlugin from '../../ui/src/components/vuestic-utilities/color-helpers-plugin'

if (!process.env.VUE_APP_DEMO_NO_THEME_PLUGIN) {
  Vue.use(ColorThemePlugin)
}
Vue.use(DropdownPopperPlugin)
Vue.use(ContextPlugin, getContext())
Vue.use(ColorHelpersPlugin)