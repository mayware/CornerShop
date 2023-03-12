<template>
    <div class="content">
        <h2>Shopping Cart:</h2>
        <ul>
            <li v-for="(item, index) in cart" :key="index">
                {{ item.title }} - {{ item.price }}
            </li>
        </ul>
    </div>
</template>
  
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['cart'])
    }
}
</script>
  
<!-- <template>
    <div class="content">
        Shopping Cart: {{ cart }}
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['cart'])
    }
}


// export default {
//     data() {
//         return {}
//     },
//     // props: {
//     //     cart: Array,
//     //     addToCart: Function
//     // },
//     mounted() {
//         store.watch(() => this.$store.state.cart, (cart) => {
//             this.cart = cart
//         })
//     }
//     // methods: {
//     //     addToCart(product) {
//     //         this.cart.push(product);
//     //         this.$emit('cart-updated', this.cart);
//     //     }
//     // }
// }
</script>
<style>
.cart {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .5rem;
    border-radius: 5px;
    border: 1px solid #202020;
    background: #151515;
}

.cart-top {
    display: flex;
    justify-content: flex-start;
    padding: .5rem;
    width: 100%;
}

.cart-title {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #6c757d;
}

.cart-content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 5px;
    overflow-y: auto;
    max-height: 350px;
    width: 100%;
    padding: .5rem;
    background: #202020;
    border-radius: 5px;
}

.cart-item {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    width: 100%;
    padding: .5rem;
    background: #101010;
}

.cart-item-image {
    border: 1px solid #444;
    height: 100%;
    width: 105px;
}

.cart-item-dssc-price {
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 3px;
    grid-column: 2/ 5;
}

.cart-item-desc {
    display: flex;
    align-items: center;
    border: 1px solid #444;
    padding: 1rem;
    width: 100%;
}

.cart-item-price {
    display: flex;
    align-items: center;
    border: 1px solid #444;
    padding: 1rem;
    width: 100%;
}

.cart-item-remove-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    border: none;
    border-radius: 50%;
    font-size: 14px;
    font-weight: 700;
    background: none;
    color: #ced4da;
    cursor: pointer;
    transition: 200ms ease-in-out;
}

.cart-item-remove-btn:hover {
    color: #e63946;
    transition: 200ms ease-in-out;
}

.cart-checkout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .5rem;
    padding: .5rem;
}

.sub-total-title {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #6c757d;
}

.checkout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    background: #144272;
    color: #ced4da;
    cursor: pointer;
    transition: 200ms ease-in-out;
}

.checkout-btn:hover {
    background: #205295;
    transition: 200ms ease-in-out;
}
</style> -->