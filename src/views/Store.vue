<template>
    <div class="content">
        <div class="modal-box" v-if="showModal">
            <Modal @close="toggleModal" :selected="selectedItem" />
        </div>
        <div class="store-banner">
            <img src="../assets/bg/top-panel-banner.png" alt="" class="store-banner-img">
        </div>
        <div class="top-section-panel">
        </div>
        <div class="content-inner">
            <div class="side-panel">
                <div class="side-panel-inner">
                    <ul class="panel-list">
                        <li class="panel-list-item">
                            <router-link :to="{ name: 'store', params: { id: alc } }" class="panel-link">Alcohol
                                drinks & Spirits</router-link>
                        </li>
                        <li class="panel-list-item">
                            <router-link :to="{ name: 'store', params: { id: soda } }" class="panel-link">Soda &
                                Sparkling drinks</router-link>
                        </li>
                        <li class="panel-list-item">
                            <router-link :to="{ name: 'store', params: { id: snacks } }"
                                class="panel-link">Snacks</router-link>
                        </li>
                        <li class="panel-list-item">
                            <router-link :to="{ name: 'store', params: { id: hot } }" class="panel-link">Hot
                                drinks</router-link>
                        </li>
                        <li class="panel-list-item">
                            <router-link :to="{ name: 'store', params: { id: meals } }"
                                class="panel-link">Meals</router-link>
                        </li>
                        <li class="panel-list-item">
                            <router-link :to="{ name: 'store', params: { id: cigarettes } }"
                                class="panel-link">Tobacco</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="items-section">
                <div class="item-block" v-for="item in items" :key="item.id" v-if="items.length">
                    <div class="item-poster">
                        <img class="item-img" :src="`${item.image}`" alt="item-image" @click="toggleModal(item)">
                    </div>
                    <div class="item-desc">
                        {{ item.title }}
                    </div>
                    <div class="item-box-bottom">
                        <div class="item-price">
                            {{ item.price }}
                        </div>
                    </div>
                    <button class="add-to-cart-btn" @click="addToCart(item)">
                        <span class="material-symbols-outlined modal-btn-icon">add_shopping_cart</span>
                        Add to cart
                    </button>
                </div>
                <div class="loading-items" v-else>
                    <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        <Snackbar :showed="showed" />
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import store from '@/store/store.js'
import Snackbar from '../components/Snackbar.vue'

export default {
    components: {
        Modal,
        Snackbar
    },
    computed: {
    },
    data() {
        return {
            items: [],
            itemObj: null,
            id: this.$route.params.id,
            showed: false,
            showModal: false,
            selectedItem: null,
            showSnackBar: false,
            snackbarMsg: 'The item added to the cart',
            alc: '158e839ad0f4f057f869',
            soda: '7873dbcb044096724539',
            snacks: '56d2ce3d37ad758ef7a9',
            hot: '70401304a345b243b4d5',
            cigarettes: '7ff4310b835b4a4988e8',
            meals: 'aee8eea4a5b8e34e819d'
        }
    },
    methods: {
        toggleModal(item) {
            this.showModal = !this.showModal;
            this.selectedItem = item;
            this.itemQnt = 1;
        },
        addToCart(product) {
            store.commit('addToCart', product)
            this.showed = !this.showed;
            setTimeout(() => {
                this.showed = false
            }, 3000)
        },
    },
    mounted() {
        fetch('https://api.npoint.io/' + this.id)
            .then(res => res.json())
            .then(data => this.items = data)
            .catch(err => console.log(err.message))
    },
}

</script>

<style>
/* Spinner */

.loading-items {
    position: absolute;
    top: 50%;
    left: 100px;
    right: 100px;
    width: 100%;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #adb5bd;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #adb5bd transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* Spinner */


.store-banner {
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
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
    width: 100%;
}

.top-section-panel {
    text-align: left;
    border-bottom: 1px solid #202020;
    width: 100%;
}

.side-panel {
    padding: 1rem;
    grid-column: 1/2;
    grid-row: 1;
    border-right: 1px solid #202020;
    width: 100%;
}

.side-pnael-inner {
    width: 100%;
    height: 100%;
}

.panel-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: start;
    margin: 0;
    padding: 0;
    list-style: none;
}

.panel-list-item {
    display: flex;
    align-items: center;
    margin: .5rem;
    width: 100%;
}

.panel-link {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .3mm;
    text-decoration: none;
    color: #adb5bd;
    padding: .5rem;
    border-radius: 5px;
    transition: 200ms ease-in-out;
}

.panel-link:hover {
    background: #202020;
    transition: 200ms ease-in-out;
}

.panel-link.router-link-exact-active {
    color: #42b983;
}

.filter-check {
    margin-right: .5rem;
}

.section-breaker {
    position: relative;
    text-align: center;
    font-size: 14px;
}

.section-breaker::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    background: #202020;
}

.section-line-breaker {
    display: inline-block;
    padding: 0 .5rem;
    background: #101010;
    color: #dee2e6;
    letter-spacing: .7mm;
}

.items-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 2/7;
    row-gap: 20px;
    column-gap: 5px;
    padding: .5rem;
    width: 100%;
    border-bottom: 1px solid #202020;
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
    height: 215px;
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
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #379237;
}

.add-to-cart-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    font-size: 14px;
    font-weight: 700;
    border: none;
    background: #003566;
    color: #ced4da;
    cursor: pointer;
    border-radius: 5px;
    transition: 200ms ease-in-out;
}

.add-to-cart-btn:hover {
    background: #ffb703;
    color: #000;
    transition: 200ms ease-in-out;
}

.item-box-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item-price-add-btn {
    display: flex;
    align-items: center;
}
</style>