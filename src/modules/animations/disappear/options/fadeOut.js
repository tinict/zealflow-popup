'use strict';

//config, keyPopup
const fadeOut = (config, ...atribute) => {
    if (config.enable === true) {
        const easing = config.easing;
        const ekeyPopup = document.querySelector(`.${atribute[0]}`);
        const popupElement = ekeyPopup.querySelector('.fadeOut');
        
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (!popupElement.classList.contains("variux-popup-active")) {
                        popupElement.style.setProperty("display", "block", "important");
                        function Animation() {
                            return new Promise((resolve) => {
                                const popupFadeOut = [
                                    { opacity: 1 },
                                    { opacity: 0 }
                                ];

                                const timing = {
                                    duration: config.duration,
                                    iterations: 1,
                                    easing: easing,
                                };

                                const animation = popupElement.animate(popupFadeOut, timing);
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

export default fadeOut;