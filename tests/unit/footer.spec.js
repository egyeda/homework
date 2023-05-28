import Footer from '@/components/Footer.vue'
import { shallowMount } from '@vue/test-utils'

describe('Footer.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Footer)
    })
    it('renders', () => {
        expect(wrapper.exists()).toBe(true)
    })
    }
)