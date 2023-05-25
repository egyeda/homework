<template>
    <div>
        <ProductList :products="products" />
    </div>
</template>


<script>
import ProductList from '~/components/ProductList.vue';

export default {
  data() {
    return {
        productsUrl: 'https://cas5-0-urlprotect.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2f63c10327716562671870f959.mockapi.io%2fproducts&umid=edab3d48-7a50-4ca6-b6c9-9362af456f60&auth=3bd1ed0ea25e030aebac2180cda48b2d7a1ccc30-bf53e959aa381ef3b79ace2237ee4d9545bb0e5b',
        products: []
    };
  },
  components: { ProductList },
  created(){
      this.$axios.get(this.productsUrl)
      .then((response) => {
          this.products = response.data;
      })
      .catch((error) => {
          console.log(error);
      });
  },
}
</script>

<style lang="scss">
    .products {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .product {
        margin: 0 10px;
        text-decoration: none;
    }
</style>