// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/testing/bindings/mojom/state.mojom
// Module: ash.cros_healthd.connectivity.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.connectivity = ash.cros_healthd.connectivity || {};
ash.cros_healthd.connectivity.mojom = ash.cros_healthd.connectivity.mojom || {};


// Interface: State
ash.cros_healthd.connectivity.mojom.StatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.connectivity.mojom.State';
  }

  foo() {
    // Method: Foo
    // Call: Foo()
  }

  lastCallHasNext() {
    // Method: LastCallHasNext
    return new Promise((resolve) => {
      // Call: LastCallHasNext()
      resolve({});
    });
  }

  foo() {
    // Method: Foo
    // Call: Foo()
  }

  waitLastCall() {
    // Method: WaitLastCall
    // Call: WaitLastCall()
  }

  ocurrs(mismatch) {
    // Method: ocurrs
    // Call: ocurrs(mismatch)
  }

  fulfillLastCallCallback() {
    // Method: FulfillLastCallCallback
    // Call: FulfillLastCallCallback()
  }

};

ash.cros_healthd.connectivity.mojom.StateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConnectivityTestProvider
ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider';
  }

  bindContext(remote, receiver) {
    // Method: BindContext
    // Call: BindContext(remote, receiver)
  }

  bindTestProvider(interface_name, receiver) {
    // Method: BindTestProvider
    // Call: BindTestProvider(interface_name, receiver)
  }

};

ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
