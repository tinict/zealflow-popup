"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

class appear {

    //options, keyPopup
    constructor(obj) {
        this.options = obj.optionAppear 
        this.keyPopup = obj.keyPopup; 
        this.init();
    }

    isEnableAnimations () {
        return this.options.enableAnimation;
    }

    init () {
        if(this.isEnableAnimations()) {
            this.isOpenPopup();
        }
    }

    isOpenPopup () {
        const process = new core();
        const methods = ['moveFromTop', 'horizontalMove', 'zoomIn', 'fadeIn'];
        
        return process.readConfig(this.options, methods, register, [this.keyPopup]);
    }
};


export default appear;