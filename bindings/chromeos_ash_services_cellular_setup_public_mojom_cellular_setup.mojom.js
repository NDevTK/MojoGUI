// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/cellular_setup.mojom
// Module: ash.cellular_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cellular_setup = ash.cellular_setup || {};
ash.cellular_setup.mojom = ash.cellular_setup.mojom || {};


// Enum: CarrierPortalStatus
ash.cellular_setup.mojom.CarrierPortalStatus = {
};

// Enum: ActivationResult
ash.cellular_setup.mojom.ActivationResult = {
};

// Struct: CellularMetadata
ash.cellular_setup.mojom.CellularMetadata = class {
  constructor(values = {}) {
    this.carrier = values.carrier !== undefined ? values.carrier : "";
    this.meid = values.meid !== undefined ? values.meid : "";
    this.imei = values.imei !== undefined ? values.imei : "";
    this.mdn = values.mdn !== undefined ? values.mdn : "";
  }
};

// Interface: CarrierPortalHandler
ash.cellular_setup.mojom.CarrierPortalHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cellular_setup.mojom.CarrierPortalHandler';
  }

  onCarrierPortalStatusChange(status) {
    // Method: OnCarrierPortalStatusChange
    // Call: OnCarrierPortalStatusChange(status)
  }

};

ash.cellular_setup.mojom.CarrierPortalHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ActivationDelegate
ash.cellular_setup.mojom.ActivationDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cellular_setup.mojom.ActivationDelegate';
  }

  onActivationStarted(metadata) {
    // Method: OnActivationStarted
    // Call: OnActivationStarted(metadata)
  }

  onActivationFinished(result) {
    // Method: OnActivationFinished
    // Call: OnActivationFinished(result)
  }

};

ash.cellular_setup.mojom.ActivationDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CellularSetup
ash.cellular_setup.mojom.CellularSetupPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cellular_setup.mojom.CellularSetup';
  }

  startActivation(delegate) {
    // Method: StartActivation
    return new Promise((resolve) => {
      // Call: StartActivation(delegate)
      resolve({});
    });
  }

};

ash.cellular_setup.mojom.CellularSetupRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
