// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/policy.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: InstallErrorReason
arc.mojom.InstallErrorReason = {
  this: 0,
  for: 1,
  the: 2,
  or: 3,
};

// Enum: CommandResultType
arc.mojom.CommandResultType = {
  IGNORED: 0,
};

// Interface: PolicyHost
arc.mojom.PolicyHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PolicyHost';
  }

};

arc.mojom.PolicyHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PolicyInstance
arc.mojom.PolicyInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PolicyInstance';
  }

};

arc.mojom.PolicyInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
