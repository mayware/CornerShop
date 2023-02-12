<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    methods: {
        closeModal() {
            this.$emit("close");
        },
    },
}
</script>
<style scoped>
.backdrop {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    padding-top: 100px;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    overflow: auto;
}

/* 
display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
     */

.modal {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: #3d405b;
    color: #f8f8f8;
    border-radius: 5px;
}
</style>