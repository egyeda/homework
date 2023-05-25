<template>
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>
  
<script>
import ProductCard from '~/components/ProductCard.vue';

export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    components: { ProductCard }
};
</script>

<style lang="scss" scoped>
.product-list {
display: flex;
flex-wrap: wrap;
justify-content: center;
}

</style>