// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: Type
network.mojom.Type = {
};

// Struct: SharedDictionaryAccessDetails
network.mojom.SharedDictionaryAccessDetails = class {
  constructor(values = {}) {
    this.kRead = values.kRead !== undefined ? values.kRead : null;
  }
};

// Interface: SharedDictionaryAccessObserver
network.mojom.SharedDictionaryAccessObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SharedDictionaryAccessObserver';
  }

  onSharedDictionaryAccessed(details) {
    // Method: OnSharedDictionaryAccessed
    // Call: OnSharedDictionaryAccessed(details)
  }

  clone(observer) {
    // Method: Clone
    // Call: Clone(observer)
  }

};

network.mojom.SharedDictionaryAccessObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
