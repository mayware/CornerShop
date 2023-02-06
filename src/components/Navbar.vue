<template>
    <nav class="navbar">
        <div class="navbar-left">
            <router-link to="/" class="navbar-link-title">CornerShop</router-link>
            <router-link to="/points" class="navbar-link">
                <span class="material-symbols-outlined navbar-link-icon">payments</span>
                My points</router-link>
            <router-link to="/about" class="navbar-link">
                <span class="material-symbols-outlined navbar-link-icon">sell</span>
                On sale</router-link>
            <router-link to="/stores" class="navbar-link">
                <span class="material-symbols-outlined navbar-link-icon">map</span>
                Our stores</router-link>
        </div>
        <div class="navbar-right">
            <router-link to="/notifications" class="navbar-link">
                <span class="material-symbols-outlined">notifications</span>
            </router-link>
            <router-link to="/cart" class="navbar-link">
                <span class="material-symbols-outlined">shopping_cart</span>
            </router-link>
            <div class="login-box">
                <button class="login-btn" @click="dropdownToggler">
                    <span class="material-symbols-outlined">person_filled</span>
                </button>
                <div class="dropdown">
                    <div class="dropdown-menu" v-if="show">
                        <router-link to="/account" class="dropdown-link">
                            Account
                            <span class="material-symbols-outlined"> person_filled </span>
                        </router-link>
                        <router-link to="/settings" class="dropdown-link">
                            Settings
                            <span class="material-symbols-outlined"> settings </span>
                        </router-link>
                        <router-link to="/logout" class="dropdown-link">
                            Log out
                            <span class="material-symbols-outlined"> logout </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        dropdownToggler() {
            this.show = !this.show
        },
        close(e) {
            if (!this.$el.querySelector('.login-btn').contains(e.target)) {
                this.show = false
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.close)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.close)
    }
}
</script>

<style>
.navbar {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100%;
    height: 65px;
    padding: 0 1.5rem;
    box-shadow: 0 2px 10px 0 rgb(0, 0, 0, .4);
    backdrop-filter: blur(15px) brightness(75%) saturate(70%);
    border-bottom: 1px solid #101010;
}

.navbar-left,
.navbar-right {
    display: flex;
    align-items: center;
}

.navbar-link-title {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    margin: .5rem;
    font-size: 24px;
    font-weight: 700;
    color: #adb5bd;
    border-radius: 5px;
    transition: 200ms ease-in-out;
}

.navbar-link-title.router-link-exact-active {
    color: #42b983;
}

.navbar-link-title:hover {
    transition: 200ms ease-in-out;
    color: #6c757d;
}

.navbar-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: #adb5bd;
    margin: .1rem;
    padding: .5rem;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: 200ms ease-in-out;
}

.navbar-link:hover {
    background: #151515;
    transition: 200ms ease-in-out;
}

.navbar-link.router-link-exact-active {
    color: #42b983;
}

.navbar-link-icon {
    margin-right: .5rem;
}

.login-btn {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    background: none;
    padding: .5rem;
    cursor: pointer;
    color: #adb5bd;
    margin-left: .5rem;
    transition: 200ms ease-in-out;
}

.login-btn:hover {
    background: #151515;
    transition: 200ms ease-in-out;
}

.dropdown-menu {
    position: absolute;
    top: 55px;
    right: 24px;
    display: flex;
    flex-direction: column;
    background: #202020;
    border: 1px solid #343434;
    border-radius: 5px;
    width: 150px;
    z-index: 1;
}

.dropdown-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #adb5bd;
    padding: .5rem;
}

.dropdown-link:hover {
    background: #343434;
}
</style>