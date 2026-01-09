// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/trust_token_access_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: TrustTokenIssuanceDetails
network.mojom.TrustTokenIssuanceDetails = class {
  constructor(values = {}) {
    this.the = values.the !== undefined ? values.the : null;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: TrustTokenRedemptionDetails
network.mojom.TrustTokenRedemptionDetails = class {
  constructor(values = {}) {
    this.the = values.the !== undefined ? values.the : null;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: TrustTokenSigningDetails
network.mojom.TrustTokenSigningDetails = class {
  constructor(values = {}) {
    this.the = values.the !== undefined ? values.the : null;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Interface: TrustTokenAccessObserver
network.mojom.TrustTokenAccessObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.TrustTokenAccessObserver';
  }

  onTrustTokensAccessed(details) {
    // Method: OnTrustTokensAccessed
    // Call: OnTrustTokensAccessed(details)
  }

  clone(listener) {
    // Method: Clone
    // Call: Clone(listener)
  }

};

network.mojom.TrustTokenAccessObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
