'use strict';

//config, keyPopup
const horizontalMove = (config, ...atribute) => {
    if (config.enable) {
        const easing = config.easing;
        const screenWidth = window.innerWidth;
        const movingLength = config.movingFrom.toLowerCase() == 'left' ? -(screenWidth*(config.movingLength/100)) : (screenWidth*(config.movingLength/100));
        const ekeyPopup = document.querySelector(`.${atribute[0]}`);
        const popupElement = ekeyPopup.querySelector('.horizontalMove');

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (popupElement.classList.contains("variux-popup-active")) {
                        const popupSliding = [
                            { transform: `translateX(${movingLength}px)`, opacity: 0 },
                            { transform: "translateX(0px)", opacity: 1 },
                        ];
                        
                        const timing = {
                            duration: config.duration,
                            iterations: 1,
                            easing: easing,
                        };

                        popupElement.animate(popupSliding, timing);
                    }
                }
            });
        });
    
        observer.observe(popupElement, {
            attributes: true,
        });
    }
}

export default horizontalMove;