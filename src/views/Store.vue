<template>
    <div class="content">
        <div class="modal-box" v-if="showModal">
            <Modal @close="toggleModal">
                <template v-slot:links>
                    <div class="modal-content-top">
                        <div class="modal-top-left">
                            <div class="modal-item-img">
                                <img class="item-img" :src="`${selectedItem.image}`" alt="item-image">
                            </div>
                        </div>
                        <div class="modal-top-right">
                            <div class="modal-item-title">
                                {{ selectedItem.title }}
                            </div>
                            <div class="modal-item-desc">
                                {{ selectedItem.description }}
                            </div>
                        </div>
                    </div>
                    <div class="modal-content-bottom">
                        <div class="modal-qnt-label">
                            <span class="modal-qnt-label-text">Quantity:</span>
                        </div>
                        <div class="modal-btn-group">
                            <div class="modal-quantity-box">
                                <button class="modal-subtract-item-btn" @click="subQnt"
                                    :disabled="itemQnt == 1">-</button>
                                <div class="modal-qnt-field">{{ itemQnt }}</div>
                                <button class="modal-add-item-btn" @click="addQnt" :disabled="itemQnt == 10">+</button>
                            </div>
                            <button class="modal-add-to-cart-btn">
                                <span class="material-symbols-outlined btn-icon">add_shopping_cart</span>
                                Add to cart
                            </button>
                        </div>
                    </div>

                </template>
            </Modal>
        </div>
        <div class="store-banner">
            <img src="../assets/bg/top-panel-banner.png" alt="" class="store-banner-img">
        </div>
        <div class="section-title">Store section</div>
        <div class="content-inner">
            <div class="side-filter-panel">
                <div class="side-pnael-inner"></div>
            </div>
            <div class="items-section">
                <div class="item-block" v-for="item in items" :key="item.id" v-if="items.length"
                    @click="toggleModal(item)">
                    <div class="item-poster">
                        <img class="item-img" :src="`${item.image}`" alt="item-image">
                    </div>
                    <div class="item-desc">
                        {{ item.title }}
                    </div>
                    <div class="item-price">
                        {{ item.price }}
                        <div class="item-sale">-30%</div>
                    </div>
                </div>
                <div v-else>
                    <p>Loading page...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
    components: {
        Modal
    },
    data() {
        return {
            items: [],
            id: this.$route.params.id,
            showModal: false,
            selectedItem: null,
            itemQnt: 1,
        }
    },
    methods: {
        toggleModal(item) {
            this.showModal = !this.showModal;
            this.selectedItem = item;
            this.itemQnt = 1;
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
        }
    },
    mounted() {
        fetch('https://api.npoint.io/' + this.id)
            .then(res => res.json())
            .then(data => this.items = data)
            .catch(err => console.log(err.message))
    }
}
</script>
<style>
.store-banner {
    border: 1px solid #343434;
    height: 175px;
    width: 100%;
}

.store-banner-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.content-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 5px;
    width: 100%;
}

.section-title {
    text-align: left;
}

.side-filter-panel {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1px solid #343434;
    width: 100%;
}

.side-pnael-inner {
    padding: .5rem;
    border: 1px solid #343434;
    width: 100%;
    height: 100%;
}

.items-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 2/5;
    row-gap: 20px;
    column-gap: 5px;
    padding: .5rem;
    width: 100%;
    border: 1px solid #343434;
}

.item-block {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    padding: .5rem;
    border-radius: 5px;
    transition: 200ms ease-in-out;
    cursor: pointer;
}

.item-block:hover {
    background: #202020;
    transition: 200ms ease-in-out;
}

.item-poster {
    height: 185px;
    width: 100%;
    border-radius: 5px;
}

.item-img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
}

.item-desc {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    text-align: left;
    color: #adb5bd;
}

.item-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #379237;
}

.item-sale {
    padding: .5rem;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .5mm;
    border-radius: 5px;
    color: #000;
    background: #ffc300;
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
    padding: .5rem;
    background: #151515;
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
    width: 75px;
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
    background-color: #495057;
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