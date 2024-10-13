"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class disappear {
    //options, keyPopup
    constructor(obj) {
        this.options = obj.optionDisAppear;
        this.keyPopup = obj.keyPopup;
        this.init();
    }

    isDisnableAnimations() {
        return this.options.enableAnimation;
    }

    init () {
        if(this.isDisnableAnimations()) {
            this.isClosePopup();
        }
    }

    isClosePopup () {
        const process = new core();
        const methods = ['zoomOut', 'fadeOut', 'moveToTop', 'horizontalMove'];

        process.readConfig(this.options, methods, register, [this.keyPopup]);
    }
}


export default disappear;