'use strict';

//config, keyPopup
const moveToTop = (config, ...atribute) => {
    if (config.enable === true) {
        const easing = config.easing;
        const screenHeight = window.innerHeight;
        const movingLength = screenHeight*(config.movingLength/100);
        const ekeyPopup = document.querySelector(`.${atribute[0]}`);
        const popupElement = ekeyPopup.querySelector('.moveToTop');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (!popupElement.classList.contains("variux-popup-active")) {
                        popupElement.style.setProperty("display", "block", "important");
                        function Animation() {
                            return new Promise((resolve) => {
                                const popupSliding = [
                                    { transform: "translateY(0px)", opacity: 1 },
                                    { transform: `translateY(-${movingLength}px)`, opacity: 0 },
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

export default moveToTop;