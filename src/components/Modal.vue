<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <div class="modal-inner">
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
</style>