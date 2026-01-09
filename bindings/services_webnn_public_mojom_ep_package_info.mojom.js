// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/ep_package_info.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};


// Struct: PackageVersion
webnn.mojom.PackageVersionSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.PackageVersion',
      packedSize: 16,
      fields: [
        { name: 'major', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EpPackageInfo
webnn.mojom.EpPackageInfoSpec = {
  $: {
    structSpec: {
      name: 'webnn.mojom.EpPackageInfo',
      packedSize: 16,
      fields: [
        { name: 'library_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
