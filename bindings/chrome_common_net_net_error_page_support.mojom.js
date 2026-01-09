// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/net/net_error_page_support.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: NetErrorPageSupport
chrome.mojom.NetErrorPageSupportPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.NetErrorPageSupport';
  }

  downloadPageLater() {
    // Method: DownloadPageLater
    // Call: DownloadPageLater()
  }

  setIsShowingDownloadButtonInErrorPage(showing_download_button) {
    // Method: SetIsShowingDownloadButtonInErrorPage
    // Call: SetIsShowingDownloadButtonInErrorPage(showing_download_button)
  }

  showPortalSignin() {
    // Method: ShowPortalSignin
    // Call: ShowPortalSignin()
  }

};

chrome.mojom.NetErrorPageSupportRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
