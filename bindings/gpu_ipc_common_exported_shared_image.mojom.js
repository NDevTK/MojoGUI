// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/exported_shared_image.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: SharedImageExportResult
gpu.mojom.SharedImageExportResultSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SharedImageExportResult',
      packedSize: 16,
      fields: [
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ExportedSharedImage
gpu.mojom.ExportedSharedImageSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.ExportedSharedImage',
      packedSize: 16,
      fields: [
        { name: 'is_software', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
