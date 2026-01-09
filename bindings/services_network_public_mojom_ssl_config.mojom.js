// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ssl_config.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: SSLVersion
network.mojom.SSLVersion = {
};

// Enum: SSLNamedGroupsPreset
network.mojom.SSLNamedGroupsPreset = {
};

// Struct: SSLConfig
network.mojom.SSLConfig = class {
  constructor(values = {}) {
    this.kTLS13 = values.kTLS13 !== undefined ? values.kTLS13 : false;
    this.order = values.order !== undefined ? values.order : null;
    this.the = values.the !== undefined ? values.the : null;
    this.to = values.to !== undefined ? values.to : null;
    this.false = values.false !== undefined ? values.false : 0;
    this.true = values.true !== undefined ? values.true : false;
    this.true = values.true !== undefined ? values.true : null;
    this.feature = values.feature !== undefined ? values.feature : null;
    this.true = values.true !== undefined ? values.true : false;
    this.trust_anchor_ids = values.trust_anchor_ids !== undefined ? values.trust_anchor_ids : 0;
    this.mtc_trust_anchor_ids = values.mtc_trust_anchor_ids !== undefined ? values.mtc_trust_anchor_ids : 0;
  }
};

// Interface: SSLConfigClient
network.mojom.SSLConfigClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.SSLConfigClient';
  }

  onSSLConfigUpdated(ssl_config) {
    // Method: OnSSLConfigUpdated
    // Call: OnSSLConfigUpdated(ssl_config)
  }

};

network.mojom.SSLConfigClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
