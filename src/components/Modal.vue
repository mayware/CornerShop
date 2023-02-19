<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <div class="modal-inner">
                <div class="modal-content-top">
                    <div class="modal-top-left">
                        <div class="modal-item-img">
                            <img class="item-img" :src="`${selected.image}`" alt="item-image">
                        </div>
                    </div>
                    <div class="modal-top-right">
                        <div class="modal-item-title">
                            {{ selected.title }}
                        </div>
                        <div class="modal-item-desc">
                            {{ selected.description }}
                        </div>
                    </div>
                </div>
                <div class="modal-content-bottom">
                    <div class="modal-btn-group">
                        <div class="modal-item-sale">
                            {{ selected.sale }}
                        </div>
                        <div class="modal-item-price-add-btn">
                            <div class="modal-item-price">
                                {{ selected.price }}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            itemQnt: 1,
        }
    },
    props: ["selected"],
    methods: {
        closeModal() {
            this.$emit("close");
        },
        addQnt() {
            if (this.itemQnt < 10) {
                this.itemQnt++;
            }
        },
        subQnt() {
            if (this.itemQnt > 1) {
                this.itemQnt--;
            }
        },
    },
}
</script>
<style scoped>
.backdrop {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    padding-top: 100px;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 100;
}

.modal {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 475px;
    padding: .5rem;
    margin: 100px auto;
    background: #202020;
    color: #f8f8f8;
    border-radius: 5px;
}

.modal-inner {
    background: #101010;
    border-radius: 5px;
    width: 100%;
    padding: .5rem;
}

.modal-content-top {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.modal-item-img {
    height: 215px;
    width: 225px;
    margin-right: .5rem;
}

.modal-top-right {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 5px;
}

.modal-item-title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fb5607;
    font-size: 20px;
    font-weight: 700;
    background: #151515;
    border-radius: 5px;
}

.modal-item-desc {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: justify;
    padding: .5rem;
    background: #151515;
    font-size: 15px;
    font-weight: 700;
    color: #adb5bd;
    border-radius: 5px;
}

.modal-content-bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: .5rem;
    border-radius: 5px;
}

.modal-btn-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.modal-quantity-box {
    display: flex;
    align-items: center;
}

.modal-qnt-label {
    display: flex;
    align-items: flex-start;
    width: 100%;
}

.modal-qnt-label-text {
    font-size: 16px;
    font-weight: 700;
    color: #adb5bd;
}

.modal-qnt-btns {
    display: flex;
    align-items: center;
}

.modal-qnt-field {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 60px;
    background: #202020;
    font-size: 16px;
    font-weight: 700;
    color: #ced4da;
    cursor: not-allowed;
    border: none;
}

.modal-qnt-field:focus {
    outline: none;
}

.modal-item-sale {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    padding: .5rem;
    border-radius: 5px;
    color: #ffc300;
}

.modal-item-price {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    padding: .7rem .5rem .7rem .5rem;
    background: #202020;
    border-radius: 5px;
    color: #379237;
    margin-right: .3rem;
}

.modal-item-price-add-btn {
    display: flex;
    align-items: center;
}

.modal-add-item-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 45px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #ced4da;
    background: #144272;
    cursor: pointer;
    transition: 200ms ease-in-out;
}

.modal-subtract-item-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 45px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #ced4da;
    background: #144272;
    cursor: pointer;
    transition: 200ms ease-in-out;
}

.modal-add-item-btn:hover,
.modal-subtract-item-btn:hover {
    background: #205295;
    transition: 200ms ease-in-out;
}

.modal-add-item-btn:disabled,
.modal-subtract-item-btn:disabled {
    background-color: #343434;
    color: #101010;
}

.modal-add-item-btn:disabled:hover,
.modal-subtract-item-btn:disabled:hover {
    background-color: none;
}

.modal-add-to-cart-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    font-size: 16px;
    font-weight: 700;
    border: none;
    background: #003566;
    color: #ced4da;
    cursor: pointer;
    border-radius: 5px;
    transition: 200ms ease-in-out;
}

.modal-add-to-cart-btn:hover {
    background: #ffb703;
    color: #000;
    transition: 200ms ease-in-out;
}

.modal-btn-icon {
    margin-right: .5rem;
}
</style>