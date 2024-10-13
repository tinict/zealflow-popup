"use strict";

import PopupHandler from "../../../../core/PopupHandler.js";

//config, idPopup
const onClickItem = (config, ...atribute) => {
    if (config.enable) {
        if (document.querySelector(`.${config.itemName}`) == null) return;
        document.querySelector(`.${config.itemName}`).onclick = () => {
            const elementOnClickItem = document.querySelector(`.${atribute[0]}`);
            const onClickShowPopup =  elementOnClickItem.querySelector('.onClickItem');
            const popupHandler = new PopupHandler(onClickShowPopup);
            popupHandler.active();
        }
    }
}

export default onClickItem;
