export default {
    state: () => ({
        products: [],
        loading: false,
    }),
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        },
        reduceProductInventory(state, {payload, quantity}) {
            let product = state.products.find(p => p.id === payload.id)
            product.availableAmount -= quantity
        },
        setLoading(state, payload) {
            state.loading = payload
        },
    },
    actions: {
        async fetchProducts(context) {
            context.commit('setLoading', true)
            const res = await fetch('https://cas5-0-urlprotect.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2f63c10327716562671870f959.mockapi.io%2fproducts&umid=edab3d48-7a50-4ca6-b6c9-9362af456f60&auth=3bd1ed0ea25e030aebac2180cda48b2d7a1ccc30-bf53e959aa381ef3b79ace2237ee4d9545bb0e5b')
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            const products = await res.json()
            context.commit('setProducts', products)
            context.commit('setLoading', false)
        }
    },
}