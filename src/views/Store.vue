<template>
    <div class="content" v-if="items.length">
        <h1>Store section</h1>
        <div class="item-box" v-for="item in items" key="item.id" v-if="items.length">
            {{ item.title }} {{ item.image }}</div>
        <div v-else>
            <p>Loading page...</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            id: this.$route.params.id,
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

</style>