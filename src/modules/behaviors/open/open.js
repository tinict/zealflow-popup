"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class open {
    constructor(obj) {
        this.idPopup = obj.idPopup;
        this.options = obj.optionOpen;
        this.keyPopup = obj.keyPopup; 
        this.init(); 
    }

    init () {
        return new Promise((resolve) => {
            const process = new core();
            const methods = ['scrollToXPercent', 'visitWebAfterXSeconds', 'onClickItem', 'afterViewXPage'];
            process.readConfig(this.options, methods, register, [this.idPopup]);

            resolve();
        });
    }
}

export default open;