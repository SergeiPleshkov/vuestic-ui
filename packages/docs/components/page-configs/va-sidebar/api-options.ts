import { ManualApiOptions } from 'vuestic-ui/src/services/api-docs/ManualApiOptions'

export default {
  props: {
    minimized: {
      local: true,
    },
    hoverable: {
      local: true,
    },
    position: {
      local: true,
    },
    width: {
      local: true,
    },
    minimizedWidth: {
      local: true,
    },
  },
  events: {
    click: {
      types: 'Event',
    },
  },
} as ManualApiOptions
