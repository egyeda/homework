<template>
    <section>
        <h1>Cart</h1>
        <Cart />
    </section>
</template>

<script>
import { mapState } from 'vuex' 
import Cart from '~/components/Cart.vue'

export default {
    computed: {
        ...mapState('cart', ['cartItems'])
    },
    components: { Cart },
}
</script>

<style scoped>
</style>>