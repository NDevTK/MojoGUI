// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/nearby_share.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: FileInfo
arc.mojom.FileInfo = class {
  constructor(values = {}) {
    this.size = values.size !== undefined ? values.size : 0;
  }
};

// Struct: ShareIntentInfo
arc.mojom.ShareIntentInfo = class {
  constructor(values = {}) {
    this.files = values.files !== undefined ? values.files : "";
  }
};

// Interface: NearbyShareSessionHost
arc.mojom.NearbyShareSessionHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NearbyShareSessionHost';
  }

};

arc.mojom.NearbyShareSessionHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyShareSessionInstance
arc.mojom.NearbyShareSessionInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NearbyShareSessionInstance';
  }

};

arc.mojom.NearbyShareSessionInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyShareHost
arc.mojom.NearbyShareHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NearbyShareHost';
  }

};

arc.mojom.NearbyShareHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyShareInstance
arc.mojom.NearbyShareInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NearbyShareInstance';
  }

};

arc.mojom.NearbyShareInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
