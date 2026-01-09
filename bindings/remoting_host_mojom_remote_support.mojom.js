// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_support.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: StartSupportSessionError
remoting.mojom.StartSupportSessionError = {
};

// Struct: SupportHostDetails
remoting.mojom.SupportHostDetails = class {
  constructor(values = {}) {
    this.supported_features = values.supported_features !== undefined ? values.supported_features : "";
  }
};

// Struct: SupportSessionParams
remoting.mojom.SupportSessionParams = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
    this.from = values.from !== undefined ? values.from : null;
    this.authorized_helper = values.authorized_helper !== undefined ? values.authorized_helper : "";
  }
};

// Struct: NatPolicyState
remoting.mojom.NatPolicyState = class {
  constructor(values = {}) {
    this.relay_enabled = values.relay_enabled !== undefined ? values.relay_enabled : false;
  }
};

// Interface: SupportHostObserver
remoting.mojom.SupportHostObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.SupportHostObserver';
  }

};

remoting.mojom.SupportHostObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
