export default {
    state: () => ({
        cart: [],
    }),
    mutations: {
        add(state, item) {
            state.cart.push(item)
        }
    },
    getters: {
        cart(state) {
            return state.cart
        }
    },
}