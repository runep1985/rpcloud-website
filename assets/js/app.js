// assets/js/app.js

(function () {
  "use strict";

  function safeInit(fnName) {
    try {
      if (typeof window[fnName] === "function") {
        window[fnName]();
      }
    } catch (err) {
      console.error(`Error in ${fnName}:`, err);
    }
  }

  function initApp() {
    safeInit("initNavbar");
    safeInit("initDarkMode");
    safeInit("initUI");
    // safeInit("initScrollToTop");
    safeInit("initLightbox");
    safeInit("initContact");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
