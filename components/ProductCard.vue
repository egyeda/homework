<template>
    <div class="product">
        <img :src="product.img" :alt="product.name" class="product-image" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}</p>
        <v-btn>Add to cart</v-btn>
    </div>
</template>
<script>
export default{
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}

</script>

<style lang="scss">
.product {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    }
    
    .product-image {
    width: 100%;
    max-width: 200px;
    margin: 0 auto 10px;
    }
    
    .product-name {
    margin-bottom: 5px;
    font-size: 18px;
    }
    
    .product-price {
    font-size: 16px;
    }
</style>