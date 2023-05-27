export default {
    methods: {
        formatPrice(value) {
            return value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            })
        },
    },
}