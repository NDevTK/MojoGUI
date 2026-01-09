// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webview/webview_media_integrity.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WebViewMediaIntegrityErrorCode
blink.mojom.WebViewMediaIntegrityErrorCode = {
};

// Interface: WebViewMediaIntegrityService
blink.mojom.WebViewMediaIntegrityServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebViewMediaIntegrityService';
  }

  getIntegrityProvider(provider_receiver, cloud_project_number) {
    // Method: GetIntegrityProvider
    return new Promise((resolve) => {
      // Call: GetIntegrityProvider(provider_receiver, cloud_project_number)
      resolve({});
    });
  }

};

blink.mojom.WebViewMediaIntegrityServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WebViewMediaIntegrityProvider
blink.mojom.WebViewMediaIntegrityProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebViewMediaIntegrityProvider';
  }

  requestToken(content_binding) {
    // Method: RequestToken
    return new Promise((resolve) => {
      // Call: RequestToken(content_binding)
      resolve({});
    });
  }

};

blink.mojom.WebViewMediaIntegrityProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
