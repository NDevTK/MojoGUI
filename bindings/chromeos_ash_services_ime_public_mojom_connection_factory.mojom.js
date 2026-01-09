// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/connection_factory.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Interface: ConnectionFactory
ash.ime.mojom.ConnectionFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.ime.mojom.ConnectionFactory';
  }

  failure(valid) {
    // Method: failure
    // Call: failure(valid)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  connectToMojoModeSharedLibInputMethod() {
    // Method: ConnectToMojoModeSharedLibInputMethod
    // Call: ConnectToMojoModeSharedLibInputMethod()
  }

  connectToRuleBasedInputMethod() {
    // Method: ConnectToRuleBasedInputMethod
    // Call: ConnectToRuleBasedInputMethod()
  }

  0(ime_spec, input_method, input_method_host, settings) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(ime_spec, input_method, input_method_host, settings)
      resolve({});
    });
  }

  1(unused) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(unused)
      resolve({});
    });
  }

};

ash.ime.mojom.ConnectionFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
