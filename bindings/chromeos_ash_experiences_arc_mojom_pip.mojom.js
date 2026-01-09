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

  0(event) {
    // Method: 0
    // Call: 0(event)
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

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2(suppressed) {
    // Method: 2
    // Call: 2(suppressed)
  }

};

arc.mojom.PipInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
