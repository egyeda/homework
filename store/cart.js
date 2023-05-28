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
    },
    actions: {
        addToCart({ commit }, {item, quantity}) {
            commit('addToCart', {item, quantity});
        },
    },
}