'use strict';

class RenderPopup {
    constructor(className, html, styleCss, idPopup, classList) {
        this.className = className;
        this.html = html;
        this.styleCss = styleCss;
        this.idPopup = idPopup;
        this.classList = classList
    }

    innerPopup() {
        const popup = document.createElement("div");
        popup.innerHTML = this.html;
        popup.style.setProperty("display", `none`);

        for (let feature of this.classList) {
            popup.classList.add(feature);
        }

        popup.style.setProperty("position", `fixed`, "important");

        let styleTag = document.createElement("style");
        document.head.appendChild(styleTag);
        let cssStyles = this.styleCss;

        styleTag.appendChild(document.createTextNode(cssStyles));

        const elementIDPopup = document.querySelector(`.${this.idPopup}`);
        elementIDPopup.appendChild(popup);
    }
};

export default RenderPopup;