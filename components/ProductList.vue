<template>
    <div>
        <div v-if="loading" class="product-loader">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
            <span class="ml-2">Loading...</span>
        </div>
        <div v-else class="product-list">
          <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product" 
            @add-to-cart="addToCartEventHandler"/>
        </div>
    </div>
</template>
  
<script>
import ProductCard from '~/components/ProductCard.vue';
import { mapState, mapMutations } from 'vuex';

export default {
    props: {
        products: {
            type: Array,
            required: true,
        }
    },
    components: { ProductCard },
    computed: {
        ...mapState('products', ['loading'])
    },
    methods: {
        ...mapMutations('cart', ['addToCart']),
        ...mapMutations('products', ['reduceProductInventory']),
        addToCartEventHandler(product, amount) {
            this.addToCart({ item: product, quantity: amount })
            this.reduceProductInventory({ payload: product, quantity: amount })
        }
    }
};
</script>

<style lang="scss" scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 80%;
    margin: auto;
}
.product-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 100%;
}
</style>