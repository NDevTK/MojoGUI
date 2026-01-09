// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/webapk.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: WebApkInstallResult
arc.mojom.WebApkInstallResult = {
};

// Struct: WebShareTargetInfo
arc.mojom.WebShareTargetInfo = class {
  constructor(values = {}) {
    this.file_accepts = values.file_accepts !== undefined ? values.file_accepts : "";
  }
};

// Struct: WebApkInfo
arc.mojom.WebApkInfo = class {
  constructor(values = {}) {
    this.package_name = values.package_name !== undefined ? values.package_name : "";
    this.share_info = values.share_info !== undefined ? values.share_info : 0;
  }
};

// Interface: WebApkInstance
arc.mojom.WebApkInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.WebApkInstance';
  }

};

arc.mojom.WebApkInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
