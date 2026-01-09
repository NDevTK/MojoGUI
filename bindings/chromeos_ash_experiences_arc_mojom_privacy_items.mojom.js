// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/privacy_items.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: PrivacyApplication
arc.mojom.PrivacyApplication = class {
  constructor(values = {}) {
    this.uid = values.uid !== undefined ? values.uid : 0;
  }
};

// Struct: PrivacyItem
arc.mojom.PrivacyItem = class {
  constructor(values = {}) {
    this.privacy_application = values.privacy_application !== undefined ? values.privacy_application : null;
  }
};

// Interface: PrivacyItemsHost
arc.mojom.PrivacyItemsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PrivacyItemsHost';
  }

  0(privacy_items) {
    // Method: 0
    // Call: 0(privacy_items)
  }

  1(flag) {
    // Method: 1
    // Call: 1(flag)
  }

  2(flag) {
    // Method: 2
    // Call: 2(flag)
  }

};

arc.mojom.PrivacyItemsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrivacyItemsInstance
arc.mojom.PrivacyItemsInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.PrivacyItemsInstance';
  }

  0(host_remote) {
    // Method: 0
    // Call: 0(host_remote)
  }

  1(displayId, bounds) {
    // Method: 1
    // Call: 1(displayId, bounds)
  }

};

arc.mojom.PrivacyItemsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
