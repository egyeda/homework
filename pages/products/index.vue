<template>
  <section>
    <h1>Products</h1> 
    <ProductList :products="products" />
  </section>
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
    if(!this.products || this.products.length === 0 ){ // so it wont refresh if we navigate back to this page
      await this.fetchProducts()
    }
  },
  methods: {
    ...mapActions('products', ['fetchProducts'])
  }
}
</script>