// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: RequestManifestError
blink.mojom.RequestManifestError = class {
  constructor(values = {}) {
    this.error. = values.error. !== undefined ? values.error. : null;
    this.details = values.details !== undefined ? values.details : [];
  }
};

// Interface: ManifestManager
blink.mojom.ManifestManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ManifestManager';
  }

  requestManifest() {
    // Method: RequestManifest
    return new Promise((resolve) => {
      // Call: RequestManifest()
      resolve({});
    });
  }

  returned(manifest's) {
    // Method: returned
    // Call: returned(manifest's)
  }

  requestManifestAndErrors() {
    // Method: RequestManifestAndErrors
    // Call: RequestManifestAndErrors()
  }

  requestManifestDebugInfo() {
    // Method: RequestManifestDebugInfo
    return new Promise((resolve) => {
      // Call: RequestManifestDebugInfo()
      resolve({});
    });
  }

  parseManifestFromString(document_url, manifest_url, manifest_content) {
    // Method: ParseManifestFromString
    return new Promise((resolve) => {
      // Call: ParseManifestFromString(document_url, manifest_url, manifest_content)
      resolve({});
    });
  }

};

blink.mojom.ManifestManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
