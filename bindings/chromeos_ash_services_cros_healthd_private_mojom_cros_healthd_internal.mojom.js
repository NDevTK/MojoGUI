// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/private/mojom/cros_healthd_internal.mojom
// Module: ash.cros_healthd.internal.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.internal = ash.cros_healthd.internal || {};
ash.cros_healthd.internal.mojom = ash.cros_healthd.internal.mojom || {};


// Enum: ConnectionType
ash.cros_healthd.internal.mojom.ConnectionType = {
};

// Struct: TouchscreenDevice
ash.cros_healthd.internal.mojom.TouchscreenDevice = class {
  constructor(values = {}) {
    this.has_stylus_garage_switch@3 = values.has_stylus_garage_switch@3 !== undefined ? values.has_stylus_garage_switch@3 : 0;
  }
};

// Struct: InputDevice
ash.cros_healthd.internal.mojom.InputDevice = class {
  constructor(values = {}) {
    this.kUnmappedEnumField = values.kUnmappedEnumField !== undefined ? values.kUnmappedEnumField : "";
  }
};

// Interface: ChromiumDataCollector
ash.cros_healthd.internal.mojom.ChromiumDataCollectorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cros_healthd.internal.mojom.ChromiumDataCollector';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

  2(state) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(state)
      resolve({});
    });
  }

  3(mute_on) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(mute_on)
      resolve({});
    });
  }

};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
