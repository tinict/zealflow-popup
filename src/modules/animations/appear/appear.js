"use strict";

import register from "./register.js";
import core from "../../../core/core.js";
import autoplayMethodValidate from "../../../shared/validates/autoplay.validate.js";

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

        const configAutoplay = {
            options: this.options,
            methods: methods,
            register: register,
            keys: [this.keyPopup],
        };

        console.log(configAutoplay);
        console.log(autoplayMethodValidate(configAutoplay));
        
        return process.readConfig(this.options, methods, register, [this.keyPopup]);
    }
};


export default appear;