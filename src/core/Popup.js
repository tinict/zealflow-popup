"use strict";

import behaviors from "../modules/behaviors/behaviors.js";
import condition from "../modules/conditions/condition.js";
import designPopup from "../modules/designs/design.js";
import animations from "../modules/animations/animation.js";
import RenderPopup from "./render.js";

class Popup {
    constructor (userconfig, keyPopup, html, styleCss) {
        this.config = userconfig;
        this.keyPopup = keyPopup;
        this.html = html;
        this.styleCss = styleCss;
    }

    findKeysWithEnableTrue(obj) { 
        const trueKeys = [];

        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                const subKeys = this.findKeysWithEnableTrue(obj[key]);
                if (subKeys.length > 0) {
                    trueKeys.push(...subKeys.map(subKey => `${key}.${subKey}`));
                }
            } else if (key === 'enable' && obj[key] === true) {
                trueKeys.push(key);
            }
        }

        return trueKeys;
    }

    splitStringToArray(string) {
        return string.split('.');
    }

    filterEnabledElements(array) {
        return array.filter(item => item !== 'enable');
    }

    functionPopupEnabled() {
        const trueKeys = this.findKeysWithEnableTrue(this.config);
        var temp = ['positionPopup'];
        trueKeys.forEach((key) => {
            let newKey = this.filterEnabledElements(this.splitStringToArray(key));
            let len = newKey.length;
            if (len > 0)
                temp.push(newKey[len - 1]);
        })
        return temp;
    }

    closePopup() {
        return new Promise((resolve) => {
            if (this.config.enable) {
                new behaviors(this).closePopup(() => {
                    resolve();
                });
            }
        });
    }

    show() {
        return new Promise(async (resolve) => {
            const render = new RenderPopup("variux-popup", this.html, this.styleCss, this.keyPopup, this.functionPopupEnabled());
            render.innerPopup();
    
            const Conditions = new condition(this.config.condition);
    
            const status = await Conditions.getStatus(); 
    
            if(!status) {
                resolve(false);
                return;
            }
    
            if (this.config.enable) {
                new animations(this); //this.config.animations, this.keyPopup
                new behaviors(this).openPopup(); //this.config.behaviors, this.keyPopup
                new designPopup(this);//this.config.design, this.keyPopup
            }
    
            resolve(true);
        });
    }
};

export default Popup;