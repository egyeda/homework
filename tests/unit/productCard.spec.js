import ProductCard from '@/components/ProductCard.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
const localVue = createLocalVue()

localVue.use(Vuex)
describe('ProductCard.vue', () => {
    let store;
    let wrapper;
    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                cart: {
                    namespaced: true,
                    state: {
                        cartItems: []
                    },
                    actions: {
                        addToCart: jest.fn()
                    },
                }
            }
        })
        wrapper = shallowMount(ProductCard, {
            propsData: {
                product: {
                    id: 1,
                    name: 'Product 1',
                    price: 100,
                    availableAmount: 10,
                    amount: 1,
                }
            }
        })
    })

    it('renders', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('renders a proudct', () => {
        expect(wrapper.find('.product').exists()).toBe(true)
    })
})