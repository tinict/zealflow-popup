"use strict";

import closePopup from "./close/close.js";
import open from "./open/open.js";

//behaConfig, keyPopup
class behaviors {
    constructor (obj) {
        this.idPopup = obj.config.idPopup;
        this.optionOpen = obj.config.behaviors.open;
        this.optionClose = obj.config.behaviors.close;
        this.keyPopup = obj.keyPopup;
    }

    async openPopup () {
        new open(this);
    }

    async closePopup (callback) {
        const closepopup = new closePopup(this);

        const promises = [];

        if (this.optionClose.closeAfterXSeconds.enable) promises.push(closepopup.closeAfterXSeconds());
        if (this.optionClose.closeClickButton.enable) promises.push(closepopup.closeClickButton());
        if (this.optionClose.closeClickOutside.enable) promises.push(closepopup.closeClickOutside());

        await Promise.race(promises);
        callback();
    }


};

export default behaviors;