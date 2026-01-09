// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: Type
network.mojom.Type = {
};

// Struct: CookieAccessDetails
network.mojom.CookieAccessDetails = class {
  constructor(values = {}) {
    this.kRead = values.kRead !== undefined ? values.kRead : null;
  }
};

// Interface: CookieAccessObserver
network.mojom.CookieAccessObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.CookieAccessObserver';
  }

  onCookiesAccessed(details) {
    // Method: OnCookiesAccessed
    // Call: OnCookiesAccessed(details)
  }

  clone(listener) {
    // Method: Clone
    // Call: Clone(listener)
  }

};

network.mojom.CookieAccessObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
