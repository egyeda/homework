export default {
    state: () => ({
        cartItems: [],
    }),
    mutations: {
        addToCart(state, {item, quantity}) {
            let cartItem = state.cartItems.find(i => i.id === item.id)
            if (cartItem) {
                cartItem.quantity += Number(quantity)
            } else {
                state.cartItems.push({
                    ...item,
                    quantity,
                })
            }
        },
        removeFromCart(state, item) {
            state.cartItems.splice(state.cartItems.indexOf(item) - 1, 1)
        },
        clearCart(state) {
            state.cartItems = []
        },
    },
    actions: {
        addToCart({ commit }, {item, quantity}) {
            commit('addToCart', {item, quantity});
        },
        removeFromCart({ commit }, itemId) {
            commit('removeFromCart', itemId);
        },
        clearCart({ commit }) {
            commit('clearCart');
        },
    },
}