<template>
    <footer class="footer">
        <div class="footer-inner">
            <div class="brand-title">
                <span class="brand-name-text">CornerShop</span>
            </div>
            <div class="footer-info">
                <div class="social-links">
                    <div class="social-logo"><i class="fa-brands fa-square-facebook"></i></div>
                    <div class="social-logo"><i class="fa-brands fa-square-twitter"></i></div>
                    <div class="social-logo"><i class="fa-brands fa-square-instagram"></i></div>
                    <div class="social-logo"><i class="fa-brands fa-telegram"></i></div>
                    <div class="social-logo"><i class="fa-brands fa-square-google-plus"></i></div>
                </div>
                <div class="copyrights">
                    <span class="copyright-date">
                        <i class="fa-regular fa-copyright"></i>
                        {{ new Date().getFullYear() }}</span>
                    <span class="span copyright-host">Tofig.</span>
                    <span class="span copyright-info">All rights reserved.</span>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer {
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 100px;
    width: 100%;
    margin-top: .5rem;
    border: 2px solid #202020;
    background: #151515;
}

.footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

.footer-right {
    display: flex;
    align-items: center;
    flex-direction: column;
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

.copyrights {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
}

.copyright-date {
    color: #ced4da;
    margin-right: .3rem;
}

.copyright-host {
    color: #ced4da;
    margin-right: .5rem;
}

.copyright-info {
    color: #ced4da;
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