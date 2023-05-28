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
    it('displays the product names', () => {
    const productNames = wrapper.findAll('.product-name')
    productNames.wrappers.forEach((product, index) => {
        expect(product.text()).toBe(testProducts[index].name)
    })
    })
    it('displays the product prices', () => {
    const productPrices = wrapper.findAll('.product-price')
    productPrices.wrappers.forEach((product, index) => {
        expect(product.text()).toBe(testProducts[index].price.toString())
    })
    })
    it('displays the product availability', () => {
    const productAvailability = wrapper.findAll('.product-availability')
    productAvailability.wrappers.forEach((product, index) => {
        expect(product.text()).toBe(testProducts[index].availableAmount.toString())
    })
    })
})
