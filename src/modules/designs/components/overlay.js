'use strict';

//config, keyPopup
function overlayPopup(config, ...atribute) {
  if (config.enable === true) {
    let open = false;
    const eKeyPopup = document.querySelector(`.${atribute[0]}`);
    const elementOverlayPopup = eKeyPopup.querySelector('.overlayPopup');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          if (elementOverlayPopup.classList.contains("variux-popup-active") && open === false) {
            let overlay = document.createElement("div");
            overlay.classList.add("variux-popup-overlay");
            document.querySelector("body").appendChild(overlay);
            open = true;
          } else if (!elementOverlayPopup.classList.contains("variux-popup-active")) {
            let overlay = document.querySelector(".variux-popup-overlay");
            overlay ? document.querySelector("body").removeChild(overlay) : "";
            open = false;
          }
        }
      });
    });

    observer.observe(elementOverlayPopup, {
      attributes: true,
    });
  }
}
export default overlayPopup;