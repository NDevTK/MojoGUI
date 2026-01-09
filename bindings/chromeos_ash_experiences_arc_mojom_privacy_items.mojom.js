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

};

arc.mojom.PrivacyItemsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
