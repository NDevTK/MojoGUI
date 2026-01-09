// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/mhtml_page_notifier.mojom
// Module: offline_pages.mojom

'use strict';

// Module namespace
var offline_pages = offline_pages || {};
offline_pages.mojom = offline_pages.mojom || {};


// Interface: MhtmlPageNotifier
offline_pages.mojom.MhtmlPageNotifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'offline_pages.mojom.MhtmlPageNotifier';
  }

  notifyMhtmlPageLoadAttempted(load_result, url, date) {
    // Method: NotifyMhtmlPageLoadAttempted
    // Call: NotifyMhtmlPageLoadAttempted(load_result, url, date)
  }

};

offline_pages.mojom.MhtmlPageNotifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
