<template>
    <div class="pa-3">
        <h2 class="p-3">Your Cart</h2>
        <v-card class="mb-3" v-for="item in cartItems" :key="item.id">
            <v-row no-gutters>
            <v-col align="center" justify="center" cols="6" sm="4">
                <v-img contain height="200" width="250" :src="item.img" :alt="item.name"></v-img>
            </v-col>
            <v-col cols="6" sm="8">
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-text>
                    <div>Price: {{ formatPrice(item.price) }}</div>
                    <div>Quantity: {{ item.quantity }} pcs</div>
                </v-card-text>
                <v-card-actions align="end" justify="end" >
                    <v-btn @click="removeFromCart(item.id)" color="error">Remove</v-btn>
                </v-card-actions>
            </v-col>
            </v-row>
        </v-card>
        <div>
            <v-btn @click="clearCart" color="error">Clear Cart</v-btn>
        </div>
    
        <div class="total-price">
            <span>Total Price: {{ formatPrice(total) }}</span>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import formatterMixin from '~/mixins/formatterMixin'

export default {
    mixins: [formatterMixin],
    computed: {
        ...mapState('cart', ['cartItems']),
        total() {
            return this.cartItems.reduce((acc, item) => {
                return acc + item.price * item.quantity
            }, 0)
        }
    },
    methods: {
        ...mapActions('cart', ['removeFromCart', 'clearCart'])
    }
}
</script>

<style scoped>
.total-price {
  text-align: right;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>