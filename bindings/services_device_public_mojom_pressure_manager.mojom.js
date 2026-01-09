// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/pressure_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: PressureManagerAddClientResult
device.mojom.PressureManagerAddClientResult = {
};

// Struct: VirtualPressureSourceMetadata
device.mojom.VirtualPressureSourceMetadata = class {
  constructor(values = {}) {
    this.true = values.true !== undefined ? values.true : false;
  }
};

// Interface: PressureManager
device.mojom.PressureManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.PressureManager';
  }

  addVirtualPressureSource(token, source, metadata) {
    // Method: AddVirtualPressureSource
    // Call: AddVirtualPressureSource(token, source, metadata)
  }

  removeVirtualPressureSource(token, source) {
    // Method: RemoveVirtualPressureSource
    // Call: RemoveVirtualPressureSource(token, source)
  }

  updateVirtualPressureSourceData(token, source, state, own_contribution_estimate) {
    // Method: UpdateVirtualPressureSourceData
    // Call: UpdateVirtualPressureSourceData(token, source, state, own_contribution_estimate)
  }

  addClient(source, token, client) {
    // Method: AddClient
    return new Promise((resolve) => {
      // Call: AddClient(source, token, client)
      resolve({});
    });
  }

};

device.mojom.PressureManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PressureClient
device.mojom.PressureClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.PressureClient';
  }

  onPressureUpdated(update) {
    // Method: OnPressureUpdated
    // Call: OnPressureUpdated(update)
  }

};

device.mojom.PressureClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
