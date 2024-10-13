'use strict';

import Popup from "./Popup.js";
import priority from "../modules/conditions/options/priority.js";

let isPopupActive = false;

async function readConfig(listConfig) {
    const styleElement = document.createElement('style');
    styleElement.textContent = window.cssContent;
    document.head.appendChild(styleElement);

    let newListConfig = priority(listConfig);

    for (const element of newListConfig[0]) {
        if (element.enable) {
            createNoneAuto(element);
        }
    }

    for (const element of newListConfig[1]) {
        if (element.enable) {
            const popupShown = await createAndShowPopup(element);
            if (!popupShown) {
                continue;
            }
        }
    }
} 

function createNoneAuto(element) {
    const el = document.createElement('div');
    el.classList.add('variux-popup', element.idPopup);
    document.body.appendChild(el);

    let newPopup = new Popup(element, element.idPopup, element.html, element.css);
    const activePopup = newPopup.show();

    if (activePopup) {
        newPopup.closePopup();
    }
}

async function createAndShowPopup(element) {
    return new Promise(async (resolve) => {
        if (isPopupActive) {
            resolve(false);
            return;
        }

        isPopupActive = true;

        const el = document.createElement('div');
        el.classList.add('variux-popup', element.idPopup);
        document.body.appendChild(el);

        let newPopup = new Popup(element, element.idPopup, element.html, element.css);
        const activePopup = await newPopup.show();

        if (activePopup) {
            newPopup.closePopup()
                .then(() => {
                    isPopupActive = false;
                    resolve(true);
                });
        } else {
            isPopupActive = false;
            resolve(false);
        }
    });
}


readConfig(window.thisIsMyConfig);