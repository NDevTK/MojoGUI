// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/usb_host.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: UsbHostHost
arc.mojom.UsbHostHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.UsbHostHost';
  }

  3(guid, pkg_name) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(guid, pkg_name)
      resolve({});
    });
  }

  1(guid) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(guid)
      resolve({});
    });
  }

  2(guid, pkg_name, interactive) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(guid, pkg_name, interactive)
      resolve({});
    });
  }

};

arc.mojom.UsbHostHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UsbHostInstance
arc.mojom.UsbHostInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.UsbHostInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

  1(guid, event_receiver_packages) {
    // Method: 1
    // Call: 1(guid, event_receiver_packages)
  }

  2(guid, event_receiver_packages) {
    // Method: 2
    // Call: 2(guid, event_receiver_packages)
  }

};

arc.mojom.UsbHostInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
