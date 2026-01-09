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

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(request) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(request)
      resolve({});
    });
  }

  7(version) {
    // Method: 7
    // Call: 7(version)
  }

  8(time, package_names) {
    // Method: 8
    // Call: 8(time, package_names)
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

  2(host_remote) {
    // Method: 2
    // Call: 2(host_remote)
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  chrome(for) {
    // Method: Chrome
    // Call: Chrome(for)
  }

  3(command) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(command)
      resolve({});
    });
  }

};

arc.mojom.PolicyInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
