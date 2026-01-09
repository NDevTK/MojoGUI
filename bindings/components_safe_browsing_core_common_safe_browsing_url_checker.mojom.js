// Auto-generated MojoJS binding
// Source: chromium_src/components/safe_browsing/core/common/safe_browsing_url_checker.mojom
// Module: safe_browsing.mojom

'use strict';

// Module namespace
var safe_browsing = safe_browsing || {};
safe_browsing.mojom = safe_browsing.mojom || {};


// Interface: SafeBrowsingUrlChecker
safe_browsing.mojom.SafeBrowsingUrlCheckerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'safe_browsing.mojom.SafeBrowsingUrlChecker';
  }

  checkUrl(url, method) {
    // Method: CheckUrl
    return new Promise((resolve) => {
      // Call: CheckUrl(url, method)
      resolve({});
    });
  }

};

safe_browsing.mojom.SafeBrowsingUrlCheckerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
