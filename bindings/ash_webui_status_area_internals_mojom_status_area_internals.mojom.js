// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/status_area_internals/mojom/status_area_internals.mojom
// Module: ash.mojom.status_area_internals

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.status_area_internals = ash.mojom.status_area_internals || {};


// Enum: BatteryIcon
ash.mojom.status_area_internals.BatteryIcon = {
  kDefault: 0,
  kXIcon: 1,
  kUnreliableIcon: 2,
  kBoltIcon: 3,
  kBatterySaverPlusIcon: 4,
};

// Interface: PageHandler
ash.mojom.status_area_internals.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.status_area_internals.PageHandler';
  }

};

ash.mojom.status_area_internals.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
