// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/pip.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcPipEvent
arc.mojom.ArcPipEvent = {
  ENTER: 0,
};

// Interface: PipHost
arc.mojom.PipHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PipHost';
  }

};

arc.mojom.PipHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PipInstance
arc.mojom.PipInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PipInstance';
  }

};

arc.mojom.PipInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
