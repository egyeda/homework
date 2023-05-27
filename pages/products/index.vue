<template>
    <ProductList :products="products" />
</template>


<script>
import ProductList from '~/components/ProductList.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: { ProductList },
  computed: {
    ...mapState('products', ['products'])
  },
  async created(){
      await this.fetchProducts()
  },
  methods: {
    ...mapActions('products', ['fetchProducts'])
  }
}
</script>

<style lang="scss">
</style>