// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/hid_preserving_bluetooth_state_controller.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};


// Enum: HidWarningDialogSource
ash.mojom.HidWarningDialogSource = {
};

// Interface: HidPreservingBluetoothStateController
ash.mojom.HidPreservingBluetoothStateControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.HidPreservingBluetoothStateController';
  }

  tryToSetBluetoothEnabledState(enabled, source) {
    // Method: TryToSetBluetoothEnabledState
    // Call: TryToSetBluetoothEnabledState(enabled, source)
  }

};

ash.mojom.HidPreservingBluetoothStateControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
