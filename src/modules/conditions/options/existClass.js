'use strict';

const existClass = (config) => {
    if (config.enable) {
        const checkClass = document.body.classList.contains(config.className);
        return checkClass;
    }
    return false;
}

export default existClass;