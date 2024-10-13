'use strict';

//config, keyPopup
const positionPopup = (config, ...atribute) => {
    if (config.width != null && config.height != null) {
        var browserWidth = document.documentElement.clientWidth;
        var browserHeight = document.documentElement.clientHeight;
        var popupWidth = config.width;
        var popupHeight = config.height;

        var widthDevideHeight = popupWidth / popupHeight;
        
        if (browserWidth <= 324) {
            popupWidth = 270;
            popupHeight = popupWidth / widthDevideHeight;
        } else if (browserWidth > 324 && browserWidth <= 576) {
            popupWidth = 324;
            popupHeight = popupWidth / widthDevideHeight;
        } else if (browserWidth > 576 && browserWidth <= 768) {
            popupWidth = 576;
            popupHeight = popupWidth / widthDevideHeight;
        } else if (browserWidth > 768 && browserWidth <= 992) {
            popupWidth = 768;
            popupHeight = popupWidth / widthDevideHeight;
        }

        var frameWidth = browserWidth - popupWidth;
        var frameHeight = browserHeight - popupHeight;

        var ratioWidth = (frameWidth / browserWidth) * 100;
        var ratioHeight = (frameHeight / browserHeight) * 100;

        var moveDistanceByBrowserWidth = browserWidth * (config.x / 100);
        var moveDistanceByBrowserHeight = browserHeight * (config.y / 100);

        var moveDistanceByFrameWidth = moveDistanceByBrowserWidth * (ratioWidth / 100);
        var moveDistanceByFrameHeight = moveDistanceByBrowserHeight * (ratioHeight / 100);

        // Lấy ra element bọc popup
        const eKeyPopup = document.querySelector(`.${atribute[0]}`);
        let popupElement = eKeyPopup.querySelector('.positionPopup');

        popupElement.style.setProperty("width", `${popupWidth}px`, "important");
        popupElement.style.setProperty("height", `${popupHeight}px`, "important");

        popupElement.style.setProperty("left", `${moveDistanceByFrameWidth}px`, "important");
        popupElement.style.setProperty("top", `${moveDistanceByFrameHeight}px`, "important");
    }
}

export default positionPopup;