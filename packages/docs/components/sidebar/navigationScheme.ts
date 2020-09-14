import { NavigationScheme } from './NavigationRoutes'

export const navigationScheme: NavigationScheme = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'styles',
      displayName: 'menu.styles',
      meta: {
        iconClass: 'vuestic-iconset-image',
      },
      disabled: true,
      children: [
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
      ],
    },
    {
      name: 'ui',
      displayName: 'menu.uiElements',
      meta: {
        iconClass: 'vuestic-iconset-ui-elements',
      },
      disabled: true,
      children: [
        {
          category: 'menu.categories.view',
          name: 'avatar',
          displayName: 'menu.avatar',
        },
        {
          name: 'button',
          displayName: 'menu.button',
        },
        {
          name: 'icon',
          displayName: 'menu.icon',
        },
        {
          name: 'image',
          displayName: 'menu.image',
        },
        {
          name: 'tag',
          displayName: 'menu.tag',
        },
        {
          name: 'alert',
          displayName: 'menu.alert',
        },
        {
          name: 'modal',
          displayName: 'menu.modal',
        },
        {
          category: 'menu.categories.form',
          name: 'form',
          displayName: 'menu.form',
        },
        {
          name: 'switch',
          displayName: 'menu.switch',
        },
        {
          name: 'slider',
          displayName: 'menu.slider',
        },
        {
          name: 'checkbox',
          displayName: 'menu.checkbox',
        },
        {
          name: 'radio',
          displayName: 'menu.radio',
        },
        {
          name: 'option-list',
          displayName: 'menu.optionList',
        },
        {
          name: 'input',
          displayName: 'menu.input',
        },
        {
          name: 'select',
          displayName: 'menu.select',
        },
        {
          name: 'rating',
          displayName: 'menu.rating',
        },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          category: 'menu.categories.layout',
          name: 'card',
          displayName: 'menu.card',
        },
        {
          name: 'divider',
          displayName: 'menu.divider',
        },
        {
          name: 'list',
          displayName: 'menu.list',
        },
        {
          name: 'expand',
          displayName: 'menu.expand',
        },
        {
          name: 'expand-group',
          displayName: 'menu.expandGroup',
        },
        {
          category: 'menu.categories.navigation',
          name: 'pagination',
          displayName: 'menu.pagination',
        },
        {
          name: 'tabs',
          displayName: 'menu.tabs',
        },
        {
          name: 'breadcrumbs',
          displayName: 'menu.breadcrumbs',
        },
        {
          name: 'badge',
          displayName: 'menu.badge',
        },
        {
          name: 'progress-bar',
          displayName: 'menu.progressBar',
        },
        {
          name: 'progress-circle',
          displayName: 'menu.progressCircle',
        },
        {
          category: 'menu.categories.other',
          name: 'affix',
          displayName: 'menu.affix',
        },
        {
          name: 'hover',
          displayName: 'menu.hover',
        },
        {
          name: 'infinite-scroll',
          displayName: 'menu.infiniteScroll',
        },
      ],
    },
  ],
}