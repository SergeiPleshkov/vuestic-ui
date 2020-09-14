import { mount } from '@vue/test-utils'

import VaAppBar from '../VaAppBar.vue'

describe('VaAppBar', () => {
  it('should render without an error', () => {
    const wrapper = mount(VaAppBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})