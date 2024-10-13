'use strict';

//config, keyPopup
function fadeIn (config, ...atribute) {
    if (config.enable) {
        const easing = config.easing;
        const ekeyPopup = document.querySelector(`.${atribute[0]}`);
        const popupElement = ekeyPopup.querySelector('.fadeIn');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (popupElement.classList.contains("variux-popup-active")) {
                        const popupZoomIn = [
                            { opacity: 0 },
                            { opacity: 1 }
                        ];
                        
                        const timing = {
                            duration: config.duration,
                            iterations: 1,
                            easing: easing,
                        };

                        popupElement.animate(popupZoomIn, timing);
                    }
                }
            });
        });

        observer.observe(popupElement, {
            attributes: true,
        });
    }
};

export default fadeIn;