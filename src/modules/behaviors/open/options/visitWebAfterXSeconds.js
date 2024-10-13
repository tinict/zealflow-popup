'use strict';

import PopupHandler from "../../../../core/PopupHandler.js";

//config, keyPopup
const visitWebAfterXSeconds = (config, ...atribute) => {
    if (config.enable) {
        const ekeyPopup = document.querySelector(`.${atribute[0]}`);
        const elementShowXSeconds = ekeyPopup.querySelector('.visitWebAfterXSeconds');
        const popupHandler = new PopupHandler(elementShowXSeconds);
        setTimeout(() => {
            popupHandler.active();
        }, config.seconds);
    }
}

export default visitWebAfterXSeconds;

