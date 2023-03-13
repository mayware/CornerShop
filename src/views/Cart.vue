<template>
    <div class="content">
        <div class="cart-block">
            <div class="cart-top">
                <span class="cart-title">Shopping cart</span>
            </div>
            <div class="cart-content">
                <div class="cart-item" v-for="(item, index) in cart" :key="index">
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
                <div class="cart-checkout">
                    <div class="sub-total-title">Subtotal:</div>
                    <div class="checkout-btn">Chekout</div>
                </div>
            </div>
        </div>
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
    background: #6c757d;
    border-radius: 5px;
}

.cart-item {
    grid-column: 1/5;
    display: flex;
    align-items: center;
    padding: .5rem;
    background: #101010;
}

.cart-item-image {
    border: 1px solid #444;
    height: 135px;
    width: 150px;
    margin-right: .5rem;
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
    grid-row: 1;
    grid-column: 5/7;
    padding: .5rem;
    height: 100%;
    margin-left: .5rem;
    background: #151515;
    border: 1px solid #000;
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
</style>