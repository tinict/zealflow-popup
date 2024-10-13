"use strict";

import PopupHandler from "../../../../core/PopupHandler.js";

const afterViewXPage = (config, keyPopup) => {
    if (config.enable) {

        const targetPageCount = config.numPage;
        const allowedHostname = config.hostName; 

        function checkAndShowPopup() {
            let viewedPages = JSON.parse(sessionStorage.getItem('viewedPages')) || [];

            viewedPages = viewedPages.filter(page => page.hostname === allowedHostname);
        
            if (viewedPages.length === targetPageCount) {
                const ekeyPopup = document.querySelector(`.${keyPopup}`);
                const elementPopup = ekeyPopup.querySelector(".afterViewXPage");
                const popupHandler = new PopupHandler(elementPopup);
                popupHandler.active();

                sessionStorage.setItem('viewedPages', JSON.stringify([]));
            }
        }
        
        function handlePageView() {
            const currentPage = {
                hostname: window.location.hostname,
                path: window.location.pathname,
            };
        
            if (currentPage.hostname === allowedHostname) {

                let viewedPages = JSON.parse(sessionStorage.getItem('viewedPages')) || [];
            
                if (!viewedPages.some(page => page.path === currentPage.path && page.hostname === currentPage.hostname)) {
                    viewedPages.push(currentPage);
            
                    sessionStorage.setItem('viewedPages', JSON.stringify(viewedPages));
            
                    checkAndShowPopup();
                }
            }
        }
        
        window.addEventListener('load', handlePageView);
        window.addEventListener('popstate', handlePageView);
  
    }
}

export default afterViewXPage; 
