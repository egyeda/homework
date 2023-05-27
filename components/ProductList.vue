<template>
    <section>
        <div v-if="loading" class="product-loader">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
            <span class="ml-2">Loading...</span>
        </div>
        <div v-else class="product-list">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </section>
</template>
  
<script>
import ProductCard from '~/components/ProductCard.vue';
import { mapState } from 'vuex';

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