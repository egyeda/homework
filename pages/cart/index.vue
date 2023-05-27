<template>
    <section>
        <Cart />
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex' 
import Cart from '~/components/Cart.vue'

export default {
    computed: {
        ...mapState('cart', ['cartItems'])
    },
    components: { Cart },
}
</script>

<style scoped>
.total-price {
  text-align: right;
  margin-top: 10px;
}
</style>>