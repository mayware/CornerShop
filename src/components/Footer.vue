<template>
    <footer class="footer">
        <div class="footer-inner">
            <div class="brand-title">
                <span class="brand-name-text">CornerShop</span>
            </div>
            <div class="social-links">
                <div class="social-logo"><i class="fa-brands fa-square-facebook"></i></div>
                <div class="social-logo"><i class="fa-brands fa-square-twitter"></i></div>
                <div class="social-logo"><i class="fa-brands fa-square-instagram"></i></div>
                <div class="social-logo"><i class="fa-brands fa-telegram"></i></div>
                <div class="social-logo"><i class="fa-brands fa-square-google-plus"></i></div>
            </div>
            <div class="footer-copyright">Copyright ©<span class="year-date">{{ yearDate }}</span>@tofa93</div>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            yearDate: new Date().getFullYear() + " ",
        }
    }
}
</script>
<style scoped>
.footer {
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 100px;
    background: #202020;
    width: 100%;
}

.footer-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.brand-title {
    display: flex;
    align-items: center;
    justify-content: center;
}

.brand-name-text {
    font-size: 35px;
    font-weight: 700;
    letter-spacing: .7mm;
    color: #205295;
    text-shadow: 0px 0px 25px #ff006e;
}

.footer-social-title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.social-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #adb5bd;
}

.footer-copyright {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #adb5bd;
}

.social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
}

.social-logo {
    margin: .5rem;
    font-size: 35px;
    color: #adb5bd;
}
</style>