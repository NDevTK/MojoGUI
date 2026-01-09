// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/offline_page_auto_fetcher.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: OfflinePageAutoFetcherScheduleResult
chrome.mojom.OfflinePageAutoFetcherScheduleResult = {
};

// Interface: OfflinePageAutoFetcher
chrome.mojom.OfflinePageAutoFetcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.OfflinePageAutoFetcher';
  }

  trySchedule(user_requested) {
    // Method: TrySchedule
    return new Promise((resolve) => {
      // Call: TrySchedule(user_requested)
      resolve({});
    });
  }

  cancelSchedule() {
    // Method: CancelSchedule
    // Call: CancelSchedule()
  }

};

chrome.mojom.OfflinePageAutoFetcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
