"use strict";

import PopupHandler from "../../../../core/PopupHandler.js";

//config, keyPopup
const scrollToXPercent = (config, ...atribute) => {
    if (config.enable) {

        window.addEventListener("scroll", activeScollPage);

        function activeScollPage() {
            const currentScrollPosition = window.scrollY;
            const totalHeightOfPage = document.body.scrollHeight - window.innerHeight;

            let checkedScroll = sessionStorage.getItem(atribute[0]);

            if (currentScrollPosition >= (config.percent / 100) * totalHeightOfPage && checkedScroll === null) {
                const ekeyPopup = document.querySelector(`.${atribute[0]}`);
                const elementPopup = ekeyPopup.querySelector(".scrollToXPercent");
                const popupHandler = new PopupHandler(elementPopup);
                popupHandler.active();
                sessionStorage.setItem(atribute[0], 1);
            }
        }
    }
};

export default scrollToXPercent;
