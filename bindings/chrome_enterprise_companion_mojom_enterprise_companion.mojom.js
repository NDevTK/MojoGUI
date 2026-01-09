// Auto-generated MojoJS binding
// Source: chromium_src/chrome/enterprise_companion/mojom/enterprise_companion.mojom
// Module: enterprise_companion.mojom

'use strict';

// Module namespace
var enterprise_companion = enterprise_companion || {};
enterprise_companion.mojom = enterprise_companion.mojom || {};


// Struct: Status
enterprise_companion.mojom.Status = class {
  constructor(values = {}) {
    this.description@2 = values.description@2 !== undefined ? values.description@2 : 0;
  }
};

// Interface: EnterpriseCompanion
enterprise_companion.mojom.EnterpriseCompanionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'enterprise_companion.mojom.EnterpriseCompanion';
  }

};

enterprise_companion.mojom.EnterpriseCompanionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
