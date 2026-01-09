// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/print_spooler.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: PrintSessionHost
arc.mojom.PrintSessionHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PrintSessionHost';
  }

};

arc.mojom.PrintSessionHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintSessionInstance
arc.mojom.PrintSessionInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PrintSessionInstance';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

  1(request) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(request)
      resolve({});
    });
  }

};

arc.mojom.PrintSessionInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintSpoolerHost
arc.mojom.PrintSpoolerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PrintSpoolerHost';
  }

  1(scoped_handle, task_id, instance) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(scoped_handle, task_id, instance)
      resolve({});
    });
  }

};

arc.mojom.PrintSpoolerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintSpoolerInstance
arc.mojom.PrintSpoolerInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PrintSpoolerInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

};

arc.mojom.PrintSpoolerInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
