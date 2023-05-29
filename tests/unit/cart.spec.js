import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Cart from '@/components/Cart.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Cart', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Cart, {
            localVue,
            propsData: {
                cartItems: [
                    {
                        id: 1,
                        name: 'Item 1',
                        price: 10,
                        quantity: 2,
                        img: 'item1.jpg'
                    },
                    {
                        id: 2,
                        name: 'Item 2',
                        price: 5,
                        quantity: 3,
                        img: 'item2.jpg'
                    }
                ]
            },
        });
    });

    it('renders', () => {
        expect(wrapper.exists()).toBe(true)
    })
});