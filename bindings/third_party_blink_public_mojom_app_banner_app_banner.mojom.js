// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/app_banner/app_banner.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AppBannerPromptReply
blink.mojom.AppBannerPromptReply = {
  NONE: 0,
  CANCEL: 1,
};

// Interface: AppBannerController
blink.mojom.AppBannerControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AppBannerController';
  }

  bannerPromptRequest(service, event_receiver, platform) {
    // Method: BannerPromptRequest
    return new Promise((resolve) => {
      // Call: BannerPromptRequest(service, event_receiver, platform)
      resolve({});
    });
  }

};

blink.mojom.AppBannerControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppBannerEvent
blink.mojom.AppBannerEventPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AppBannerEvent';
  }

  bannerAccepted(platform) {
    // Method: BannerAccepted
    // Call: BannerAccepted(platform)
  }

  bannerDismissed() {
    // Method: BannerDismissed
    // Call: BannerDismissed()
  }

};

blink.mojom.AppBannerEventRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AppBannerService
blink.mojom.AppBannerServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AppBannerService';
  }

  displayAppBanner() {
    // Method: DisplayAppBanner
    // Call: DisplayAppBanner()
  }

};

blink.mojom.AppBannerServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
