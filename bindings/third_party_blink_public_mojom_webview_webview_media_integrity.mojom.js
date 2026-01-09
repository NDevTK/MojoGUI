// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webview/webview_media_integrity.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WebViewMediaIntegrityErrorCode
blink.mojom.WebViewMediaIntegrityErrorCode = {
  and: 0,
  so: 1,
  because: 2,
};

// Interface: WebViewMediaIntegrityService
blink.mojom.WebViewMediaIntegrityServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WebViewMediaIntegrityService';
  }

  mAX_SAFE_INTEGER(1) {
    // Method: MAX_SAFE_INTEGER
    // Call: MAX_SAFE_INTEGER(1)
  }

  a() {
    // Method: a
    // Call: a()
  }

  getExperimentalMediaIntegrityTokenProvider() {
    // Method: getExperimentalMediaIntegrityTokenProvider
    // Call: getExperimentalMediaIntegrityTokenProvider()
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

  string(length) {
    // Method: string
    // Call: string(length)
  }

  verbatim(form) {
    // Method: verbatim
    // Call: verbatim(form)
  }

  unicode(surrogates) {
    // Method: Unicode
    // Call: Unicode(surrogates)
  }

  opaque() {
    // Method: opaque
    // Call: opaque()
  }

  a() {
    // Method: a
    // Call: a()
  }

  requestToken() {
    // Method: requestToken
    // Call: requestToken()
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
