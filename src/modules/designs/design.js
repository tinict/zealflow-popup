"use strict";

import register from "./register.js";
import core from "../../core/core.js";

//options, keyPopup
class designPopup {
    constructor(obj) {
        this.options = obj.config.design; 
        this.keyPopup = obj.keyPopup;
        this.init();
    }

    init () {
        const process = new core();
        const methods = ['overlayPopup', 'positionPopup'];

        process.readConfig(this.options, methods, register, [this.keyPopup]);
    }
}


export default designPopup;