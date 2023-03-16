<template>
    <div class="content">
        <div class="cart-block">
            <div class="cart-top">
                <span class="cart-title">Shopping cart</span>
            </div>
            <div class="cart-content">
                <div class="cart-item" v-for="(item, index) in cart" :key="index">
                    <div class="cart-img-desc">
                        <div class="cart-item-image">
                            <img class="cart-item-img" :src="`${item.image}`" alt="item-image">
                        </div>
                        <div class="cart-item-desc-price">
                            <div class="cart-item-title">
                                {{ item.title }}
                            </div>
                            <div class="cart-item-desc">
                                {{ item.description }}
                            </div>
                            <div class="cart-item-price">
                                {{ item.price }}
                            </div>
                        </div>
                    </div>
                    <button class="remove-item-btn" @click="removeItem(index)">
                        <span class="material-symbols-outlined">delete_forever</span>
                    </button>
                </div>
                <div class="cart-checkout">
                    <div class="sub-total-title">Subtotal:
                        <span class="subtotal-dollar-sign">$</span>
                        <span class="subtotal-result"> {{ subtotal }}</span>
                    </div>
                    <div class="checkout-btn" @click="clearCart()">Chekout</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState(['cart']),
        subtotal() {
            return this.cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0)
        },
    },
    methods: {
        ...mapActions(['removeFromCart']),
        removeItem(index) {
            this.removeFromCart(index)
        },
        clearCart() {
            for (let i = this.cart.length - 1; i >= 0; i--) {
                this.removeFromCart(i)
            }
        }
    }
}
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
    padding: 1rem;
    width: 100%;
}

.cart-title {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #6c757d;
}

.card-block {
    display: flex;
    align-items: center;
}

.cart-content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 10px;
    overflow-y: auto;
    max-height: 450px;
    width: 100%;
    padding: .5rem;
    background: #343a40;
}

.cart-item {
    grid-column: 1/5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin-right: .5rem;
    padding: .5rem;
    background: #101010;
}

.cart-img-desc {
    display: flex;
    align-items: center;
}

.cart-item-image {
    height: 135px;
    width: 150px;
    border: 2px solid #202020;
    border-radius: 5px;
    margin-right: 1rem;
}

.cart-item-img {
    height: 100%;
    width: 100%;
}

.cart-item-desc-price {
    display: flex;
    flex-direction: column;
    text-align: start;
    max-width: 450px;
    height: 100%;
}

.cart-item-title {
    text-align: start;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: .5rem;
    color: #fb5607;
}

.cart-item-desc {
    text-align: start;
    font-size: 16px;
    font-weight: 500;
    color: #ced4da;
    margin-bottom: .5rem;
}

.cart-item-price {
    display: flex;
    align-items: center;
    text-align: start;
    font-size: 16px;
    font-weight: 700;
    color: #06d6a0;
}

.remove-item-btn {
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

.remove-item-btn:hover {
    color: #e63946;
    transition: 200ms ease-in-out;
}

.cart-checkout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    grid-row: 1;
    grid-column: 5/7;
    padding: .5rem;
    border-radius: 5px;
    background: #151515;
    border: 1px solid #000;
}

.sub-total-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #6c757d;
}

.subtotal-dollar-sign {
    margin-left: .5rem;
    font-size: 16px;
    font-weight: 700;
    color: #06d6a0;
}

.subtotal-result {
    font-size: 16px;
    font-weight: 700;
    color: #ced4da;
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
</style>