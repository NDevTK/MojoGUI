// Auto-generated MojoJS binding
// Source: chromium_src/components/services/patch/public/mojom/file_patcher.mojom
// Module: patch.mojom

'use strict';

// Module namespace
var patch = patch || {};
patch.mojom = patch.mojom || {};


// Enum: ZucchiniStatus
patch.mojom.ZucchiniStatus = {
};

// Interface: FilePatcher
patch.mojom.FilePatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'patch.mojom.FilePatcher';
  }

  patchFilePuffPatch(input_file, patch_file, output_file) {
    // Method: PatchFilePuffPatch
    return new Promise((resolve) => {
      // Call: PatchFilePuffPatch(input_file, patch_file, output_file)
      resolve({});
    });
  }

  patchFileZucchini(input_file, patch_file, output_file) {
    // Method: PatchFileZucchini
    return new Promise((resolve) => {
      // Call: PatchFileZucchini(input_file, patch_file, output_file)
      resolve({});
    });
  }

};

patch.mojom.FilePatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
