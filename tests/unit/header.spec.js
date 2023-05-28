import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  })
  it('Renders', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('Is a Vue Instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('Main nuxt link exists', () => {
    expect(wrapper.find(".main-link").text()).toBe("Homework")
  })
})
