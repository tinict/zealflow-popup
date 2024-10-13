'use strict';

const existCookie = (config) => {
    if (config.enable) {
        const getCookie = (cname) => {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            let len = ca.length;
            for (let i = 0; i < len; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0)
                    return c.substring(name.length, c.length);
            }
            return "";
        }
        const checkCookie = () => {
            let cookieName = config.cookieName;
            let value = getCookie(cookieName);
            if (value != 1) return false;
            return true;
        }
        return checkCookie();
    }
    return false;
}

export default existCookie;