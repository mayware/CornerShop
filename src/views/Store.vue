<template>
    <div class="content">
        <div class="modal-box" v-if="showModal">
            <Modal @close="toggleModal">
                <template v-slot:links>
                    <a href="#">Sign up</a>
                    <a href="#">More info</a>
                </template>
                <h1>Modal Title</h1>
                <p>Modal Text</p>
            </Modal>
        </div>
        <div class="store-banner">
            <!-- <img src="../assets/bg/top-panel-banner.png" alt="" class="store-banner-img"> -->
        </div>
        <div class="section-title">Store section</div>
        <div class="content-inner">
            <div class="side-filter-panel">
                <div class="side-pnael-inner"></div>
            </div>
            <div class="items-section">
                <div class="item-block" v-for="item in items" key="item.id" v-if="items.length" @click="toggleModal">
                    <div class="item-poster">
                        <img class="item-img" :src="`${item.image}`" alt="">
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
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
        },
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
</style>