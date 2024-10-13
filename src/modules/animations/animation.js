"use strict";

import appear from "./appear/appear.js";
import disappear from "./disappear/disappear.js";

class animations {

    constructor (obj) {
        this.optionAppear = obj.config.animations.appear;
        this.optionDisAppear = obj.config.animations.disappear;
        this.keyPopup = obj.keyPopup;
        this.init();
    }
    
    init () {
        new appear(this); //this.optionAppear, this.keyPopup
        new disappear(this); //this.optionDisAppear, this.keyPopup
    }
};

export default animations;