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
        { name: 'revision', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'build', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'minor', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'major', packedOffset: 14, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'family_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.WStringSpec, nullable: false },
        { name: 'version', packedOffset: 16, packedBitOffset: 0, type: webnn.mojom.PackageVersionSpec, nullable: false },
        { name: 'library_path', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
