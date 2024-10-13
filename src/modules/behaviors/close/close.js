"use strict";
import PopupHandler from "../../../core/PopupHandler.js";

class closePopup {
    constructor(obj) {
        this.objOptions = obj;
        this.options = obj.optionClose;
        this.keyPopup = obj.keyPopup;
    }

    closeClickButton () {
        return new Promise((resolve) => {
            if (this.options.closeClickButton.enable) {
                const eKeyPopup = document.querySelector(`.${this.keyPopup}`);
                const elementBTNClosePopup = eKeyPopup.querySelector('.btnClosePopup');
                if (elementBTNClosePopup == null) return;

                elementBTNClosePopup.onclick = () => {
                    const elementPopup = eKeyPopup.querySelector('.closeClickButton');
                    const popupHandler = new PopupHandler(elementPopup);
                    popupHandler.destroy();
                    resolve(); 
                }
            } else {
                resolve();
            }
        });
    }

    closeClickOutside () {
        return new Promise((resolve) => {
            if (this.options.closeClickOutside.enable) {
                function findCloseClickOutsideParent(event) {
                    event.stopPropagation();
                    if (event.target != document.body) {
                        let parent = event.target.parentElement;
                        if(parent == null) return true;
                        while (parent !== document.body) {
                            if (parent.classList.contains("closeClickOutside") || parent.classList.contains("activePopup")) {
                                return parent;
                            }
                            parent = parent.parentElement;
                        }
                        return null;
                    } else {
                        return true;
                    }
                }

                let element = document.querySelector(`.${this.keyPopup}`);
                element = element.children[0];
                document.addEventListener("click", (e) => {
                    if (!element.classList.contains("variux-popup-active")) {
                        return;
                    } else {
                        if(e.target != document.querySelector(`.${this.objOptions.optionOpen.onClickItem.itemName}`)) {
                            let closeClickOutsideParent = findCloseClickOutsideParent(e);
                            if(closeClickOutsideParent == true) {
                                return;
                            } else if(closeClickOutsideParent == null) {
                                let popupHandler = new PopupHandler(element);
                                popupHandler.destroy();
                                resolve(); 
                                return;
                            }
                            return;
                        }
                    }
                });
            } else {
                resolve(); 
            }
        });
    }

    closeAfterXSeconds () {
        return new Promise((resolve) => {
            if (this.options.closeAfterXSeconds.enable) {
                const elementClosePopup = document.querySelector(`.${this.keyPopup} .closeAfterXSeconds`);
                const popupHandler = new PopupHandler(elementClosePopup);
                let timeoutId;

                const observer = new MutationObserver(mutations => {
                    mutations.forEach(mutation => {
                        if (mutation.type === "attributes" && mutation.attributeName === "class") {
                            if (elementClosePopup.classList.contains("variux-popup-active")) {
                                timeoutId = setTimeout(() => {
                                    popupHandler.destroy();
                                    resolve(); 
                                }, this.options.closeAfterXSeconds.seconds);
                            } else {
                                clearTimeout(timeoutId);
                            }
                        }
                    });
                });

                observer.observe(elementClosePopup, {
                    attributes: true,
                });
            } else {
                resolve();
            }
        });
    }
}

export default closePopup;