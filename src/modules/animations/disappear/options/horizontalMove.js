'use strict';

//config, keyPopup
const horizontalMove = (config, ...atribute) => {
    if (config.enable === true) {
        const easing = config.easing;
        const screenWidth = window.innerWidth;
        const movingLength = config.movingTo.toLowerCase() == 'left' ? -(screenWidth*(config.movingLength/100)) : (screenWidth*(config.movingLength/100));
        const ekeyPopup = document.querySelector(`.${atribute[0]}`);
        const popupElement = ekeyPopup.querySelector('.horizontalMove');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (!popupElement.classList.contains("variux-popup-active")) {
                        popupElement.style.setProperty("display", "block", "important");
                        function Animation() {
                            return new Promise((resolve) => {
                                const popupSliding = [
                                    { transform: "translateX(0px)", opacity: 1 },
                                    { transform: `translateX(${movingLength}px)`, opacity: 0 },
                                ];

                                const timing = {
                                    duration: config.duration,
                                    iterations: 1,
                                    easing: easing,
                                };

                                const animation = popupElement.animate(popupSliding, timing);
                                animation.onfinish = () => {
                                    resolve(true);
                                };
                            });
                        }

                        async function wait() {
                            let flat = await Animation();
                            if (flat == true) {
                                popupElement.style.setProperty("display", "none");
                            }
                        }
                        wait();
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