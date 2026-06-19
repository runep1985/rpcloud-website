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
    // Core UI systems
    safeInit("initNavbar");
    safeInit("initDarkMode");
    safeInit("initUI");
    safeInit("initScrollToTop");
    safeInit("initLightbox");
    safeInit("initContact");
  }

  // Run after DOM is ready (extra safety even with defer)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();