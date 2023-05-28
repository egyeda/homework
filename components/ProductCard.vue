<template>
    <div class="product">
        <div  class="product-image">
            <img :src="product.img" :alt="product.name" />
        </div>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
        <p class="product-available-amount">
            Available amount: {{ product.availableAmount }}
            <br>
            Minimum order amount: {{ product.minOrderAmount }}
        </p>
        <p class="product-min-amount">
        </p>
        <v-form ref="addToCartForm" lazy-validation class="add-to-cart">
            <v-text-field
                v-model="amount"
                class="px-5"
                hide-details="auto"
                label="Amount"
                dense
                :rules="[quantityValidation]"
                :mask="quantityMaskPattern"
                type="number"
                />
            <v-btn
                :disabled="!(product.availableAmount > 0)"
                color="primary"
                @click="addToCartPressed">
                Add to cart
            </v-btn>
        </v-form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import formatterMixin from '~/mixins/formatterMixin'

export default{
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    mixins: [formatterMixin],
    data: () => ({
        amount: 1,
        quantityMaskPattern: /[0-9]/g,
    }),
    created() {
        this.amount = this.product.minOrderAmount
    },
    computed: {
        quantityValidation() {
            return (value) => {
                if (!value) return 'Please specify an amount'
                if (value > this.product.availableAmount) {
                    return `Available amount is ${this.product.availableAmount}`
                }
                if (value < this.product.minOrderAmount) {
                    return `Minimum order amount is ${this.product.minOrderAmount}`
                }
                return true
            }
        }
    },
    methods: {
        ...mapMutations('cart', ['addToCart']),
        ...mapMutations('products', ['reduceProductInventory']),
        addToCartPressed(){
            if (this.$refs.addToCartForm.validate()) {
                this.addToCart({ item: this.product, quantity: this.amount })
                this.reduceProductInventory({ payload: this.product, quantity: this.amount })
            }
        }
    }
}

</script>

<style lang="scss" scoped>
@import "~@/assets/variables.scss";
.product {
    width: 100%;
    max-width: 300px;
    height: 450px;
    margin: 1rem;
    text-align: center;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}
.product-image {
    width: 100%;
    max-width: 200px;
    height: 220px;
    margin: 0 auto 1rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.product-name {
    margin-bottom: 5px;
    font-size: 18px;
    color: $color-primary;
}
.product-price {
    font-size: 16px;
    font-weight: bold;
}
.add-to-cart{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    .v-btn {
        width: 50%;
    }
}
</style>