// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/memory.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ReclaimType
arc.mojom.ReclaimType = {
};

// Struct: ReclaimRequest
arc.mojom.ReclaimRequest = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
  }
};

// Struct: ReclaimResult
arc.mojom.ReclaimResult = class {
  constructor(values = {}) {
    this.unreclaimed = values.unreclaimed !== undefined ? values.unreclaimed : 0;
  }
};

// Interface: MemoryInstance
arc.mojom.MemoryInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MemoryInstance';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  3(request) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(request)
      resolve({});
    });
  }

};

arc.mojom.MemoryInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
