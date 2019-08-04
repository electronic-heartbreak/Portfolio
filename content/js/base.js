"use strict"

if (document.querySelector('.footer-text') != null) {
    const DynamicFooter = () => {
        const footerText = document.querySelector('.footer-text');
        footerText.textContent = "\xA9 " + new Date().getFullYear() + " Bjorn Jaeken";
    }
    DynamicFooter();
}

if (document.querySelector('.nav') != null) {
    const setActive = () => {
        const items = document.querySelector('.nav').getElementsByTagName('a');
        for (let i = 0; i < items.length; i++) {
            if (document.location.href.includes(items[i].href) > 0) {
                items[i].classList.add('active');
            }
        }
    }
    setActive();
}
