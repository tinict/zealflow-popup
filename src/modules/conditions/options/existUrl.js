'use strict';

const existUrl = (config) => {
    if (config.enable) {
        const listURL = config.url;
        let flag = false;

        listURL.some((url) => {
            let urlWithParams = window.location.href;
            const doubleSlashIndex = urlWithParams.indexOf("//");
            const trimmedStart = doubleSlashIndex !== -1 ? urlWithParams.substring(doubleSlashIndex + 2) : urlWithParams;
            const questionMarkIndex = trimmedStart.indexOf("?");
            const trimmedEnd = questionMarkIndex !== -1 ? trimmedStart.substring(0, questionMarkIndex) : trimmedStart;

            if (url === trimmedEnd)
                flag = true;
        });

        return flag;
    }
    return false;
}

export default existUrl;