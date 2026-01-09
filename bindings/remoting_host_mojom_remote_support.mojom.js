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

  0() {
    // Method: 0
    // Call: 0()
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  string(code) {
    // Method: string
    // Call: string(code)
  }

  2(access_code, lifetime) {
    // Method: 2
    // Call: 2(access_code, lifetime)
  }

  3() {
    // Method: 3
    // Call: 3()
  }

  4(remote_username) {
    // Method: 4
    // Call: 4(remote_username)
  }

  6(disconnect_reason) {
    // Method: 6
    // Call: 6(disconnect_reason)
  }

  7(nat_policy_state) {
    // Method: 7
    // Call: 7(nat_policy_state)
  }

  8(error_code) {
    // Method: 8
    // Call: 8(error_code)
  }

  9() {
    // Method: 9
    // Call: 9()
  }

  10() {
    // Method: 10
    // Call: 10()
  }

};

remoting.mojom.SupportHostObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
