// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/print_preview_cros.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ScalingType
crosapi.mojom.ScalingType = {
};

// Struct: MarginsCustom
crosapi.mojom.MarginsCustom = class {
  constructor(values = {}) {
  }
};

// Struct: MediaSize
crosapi.mojom.MediaSize = class {
  constructor(values = {}) {
  }
};

// Struct: PrintSettings
crosapi.mojom.PrintSettings = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : 0;
  }
};

// Interface: PrintPreviewCrosDelegate
crosapi.mojom.PrintPreviewCrosDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.PrintPreviewCrosDelegate';
  }

};

crosapi.mojom.PrintPreviewCrosDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrintPreviewCrosClient
crosapi.mojom.PrintPreviewCrosClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.PrintPreviewCrosClient';
  }

};

crosapi.mojom.PrintPreviewCrosClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
