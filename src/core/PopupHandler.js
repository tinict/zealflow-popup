'use strict';

class PopupHandler {
    constructor(element) {
        this.element = element;
    }

    active() {
        this.element.classList.add("variux-popup-active");
    }

    destroy() {
        this.element.classList.remove("variux-popup-active");
    }
}

export default PopupHandler;
