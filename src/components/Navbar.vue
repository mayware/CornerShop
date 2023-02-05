<template>
    <div>
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
                <router-link to="/cart" class="navbar-link">
                    <span class="material-symbols-outlined">shopping_cart</span>
                </router-link>
                <router-link to="/login" class="navbar-link">
                    <span class="material-symbols-outlined">person</span>
                </router-link>
            </div>
        </nav>
    </div>
</template>
<script>
export default {

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
    border-bottom: 1px solid #343434;
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
    border: 1px solid #adb5bd;
    transition: 200ms ease-in-out;
}

.navbar-link.router-link-exact-active {
    color: #42b983;
}

.navbar-link-icon {
    margin-right: .5rem;
}
</style>