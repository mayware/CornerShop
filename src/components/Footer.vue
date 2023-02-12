<template>
    <footer class="footer">
        <div class="footer-left">
            <div class="contact-box">
                <form class="contact-form">
                    <input type="email" class="contact-field" placeholder="Enter your email" required>
                    <textarea class="contact-textarea" cols="30" rows="10" placeholder="Write something"
                        required></textarea>
                    <input type="submit" class="contact-send-btn" value="Send">
                </form>
            </div>
        </div>
        <div class="footer-middle">
            <div class="middle-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sit obcaecati accusantium, exercitationem
                aperiam tempore minima eveniet vitae dolorum aut, beatae reprehenderit perferendis ducimus illo maxime
                officia in, voluptas odio.
            </div>
        </div>
        <div class="footer-right">
            <div class="brand-title">
                <span class="brand-name-text">CornerShop</span>
            </div>
            <div class="footer-social-title">
                <span class="social-title">Stay connected</span>
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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 10px;
    padding: .5rem;
    border-top: 1px solid #202020;
    background: #202020;
    margin-top: .5rem;
    width: 100%;
    height: 285px;
}

.footer-left {
    height: 100%;
    padding: .5rem;
    background: #101010;
    border-radius: 5px;
}

.contact-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    width: 450px;
}

.contact-field {
    height: 28px;
    padding: .5rem;
    background: #101010;
    border: 2px solid #202020;
    transition: 200ms ease-in-out;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .3mm;
    color: #ced4da;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.contact-field:focus {
    border: 2px solid #00337C;
    outline: none;
    transition: 200ms ease-in-out;
}

.contact-textarea {
    padding: .5rem;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: .3mm;
    color: #ced4da;
    resize: none;
    background: #101010;
    border: 2px solid #202020;
    transition: 200ms ease-in-out;
}

.contact-textarea:focus {
    border: 2px solid #00337C;
    outline: none;
    transition: 200ms ease-in-out;
}

.contact-send-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    border: none;
    background: #144272;
    color: #ced4da;
    cursor: pointer;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: 200ms ease-in-out;
}

.contact-send-btn:hover {
    background: #205295;
    transition: 200ms ease-in-out;
}

.footer-middle {
    padding: 1rem;
    border: 1px solid #343434;
    grid-column: 2/4;
}

.middle-info {
    display: flex;
    align-items: center;
    color: #ced4da;
}

.footer-right {
    grid-column: 4/7;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    border: 1px solid #343434;
    height: 100%;
}

.brand-title {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #343434;
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
    border: 1px solid #343434;
    width: 100%;
}

.social-title {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #adb5bd;
}

.footer-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .5mm;
    color: #adb5bd;
    border: 1px solid #343434;
    width: 100%;
}

.social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    border: 1px solid #343434;
    width: 100%;
}

.social-logo {
    margin: .5rem;
    font-size: 35px;
    color: #adb5bd;
}
</style>