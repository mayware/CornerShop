<template>
    <div class="content">
        <div class="cart">
            <div class="cart-top">
                <span class="cart-title">Shopping cart</span>
            </div>
            <div class="cart-content">
                <div class="cart-item">
                    <div class="cart-item-image"></div>
                    <div class="cart-item-dssc-price">
                        <div class="cart-item-desc"></div>
                        <div class="cart-item-price"></div>
                    </div>
                    <button class="cart-item-remove-btn">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
            <div class="cart-checkout">
                <div class="sub-total">
                    <span class="sub-total-title">Subtotal:</span>
                    <span class="sub-total-value"></span>
                </div>
                <button class="checkout-btn">Go to checkout</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['added'],
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
    max-height: 250px;
    width: 100%;
    padding: .5rem;
    background: #202020;
    border-radius: 5px;
}

.cart-item {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    width: 100%;
    max-height: 100px;
    padding: .5rem;
    background: #101010;
}

.cart-item-image {
    border: 1px solid #444;
    padding: 1rem;
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
    border: 1px solid #444;
    padding: 1rem;
    width: 100%;
}

.cart-item-price {
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
</style>