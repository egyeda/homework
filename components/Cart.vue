<template>
    <div class="pa-3">
        <div v-if="!cartItems || cartItems.length <= 0"> 
            <v-alert type="info">Your cart is empty</v-alert>
        </div>
        <v-card class="mb-3" v-for="item in cartItems" :key="item.id" data-testid="cart-item">
            <v-row no-gutters>
            <v-col align="center" justify="center" cols="6" sm="4">
                <v-img class="ma-1" contain height="200" width="250" :src="item.img" :alt="item.name"></v-img>
            </v-col>
            <v-col cols="6" sm="8">
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>
                    <div>Unit Price: {{ formatPrice(item.price) }}</div>
                    <div>Quantity: {{ item.quantity }} pcs</div>
                    <div class="product-price">Price: {{ formatPrice(item.price * item.quantity) }}</div>
                </v-card-text>
            </v-col>
            </v-row>
        </v-card>
    
        <div v-if="cartItems && cartItems.length > 0" class="total-price">
            <span>Total Price: {{ formatPrice(total) }}</span>
        </div>
    </div>
</template>

<script>

import formatterMixin from '~/mixins/formatterMixin'

export default {
    props: {
        cartItems: {
            type: Array,
            required: true,
        }
    },
    mixins: [formatterMixin],
    computed: {
        total() {
            return this.cartItems.reduce((acc, item) => {
                return acc + item.price * item.quantity
            }, 0)
        }
    },
}
</script>

<style scoped>
.total-price {
  text-align: right;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 20px;
  font-weight: bold;
}
.product-price{
    font-size: 16px;
    font-weight: bold;
    margin-top: 0.5rem;
}
</style>