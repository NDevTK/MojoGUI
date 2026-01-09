// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/crosh.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcShellCommand
arc.mojom.ArcShellCommand = {
  kTop: 0,
  kCpuinfo: 1,
  kMeminfo: 2,
};

// Struct: ArcShellExecutionRequest
arc.mojom.ArcShellExecutionRequest = class {
  constructor(values = {}) {
    this.command@0 = values.command@0 !== undefined ? values.command@0 : null;
  }
};

// Interface: ArcShellExecutionInstance
arc.mojom.ArcShellExecutionInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ArcShellExecutionInstance';
  }

};

arc.mojom.ArcShellExecutionInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
