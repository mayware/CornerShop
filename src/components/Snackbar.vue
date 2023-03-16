<template>
    <div class="snackbar" :class="{ 'showed': showed }">{{ snackbarMsg }}</div>
</template>

<script>
export default {
    props: ['showed'],
    data() {
        return {
            snackbarMsg: 'The item added to the cart',
        }
    },
}
</script>

<style>
.snackbar {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: #343a40;
    color: #ced4da;
    padding: 16px;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 999;
}

.snackbar.showed {
    opacity: 1;
}
</style>