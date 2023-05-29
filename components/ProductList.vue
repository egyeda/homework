<template>
    <div>
        <Loader v-if="loading">
            Loading product list...
        </Loader>
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
import Loader from '~/components/Loader.vue';
import { mapState, mapMutations } from 'vuex';

export default {
    props: {
        products: {
            type: Array,
            required: true,
        }
    },
    components: { ProductCard, Loader },
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
}
</style>