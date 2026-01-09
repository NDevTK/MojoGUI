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

};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
