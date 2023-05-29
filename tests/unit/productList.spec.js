import ProductList from '@/components/ProductList.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
const localVue = createLocalVue()

localVue.use(Vuex)
describe('ProductList.vue', () => {
    const testProducts = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            availableAmount: 10,
        },
        {
            id: 2,
            name: 'Product 2',  
            price: 200,
            availableAmount: 20,
        },
    ]

    let store;
    let wrapper;
    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                products: {
                    namespaced: true,
                    state: {
                        products: testProducts
                    }
                }
            }
        })
        wrapper = shallowMount(ProductList, {
            store,
            localVue,
            propsData: {
                products: testProducts
            }
        })
    })

    it('renders', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('renders a proudct list', () => {
        expect(wrapper.find('.product-list').exists()).toBe(true)
    })
})
