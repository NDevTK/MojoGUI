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
        { name: 'revision', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'build', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'minor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'major', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'family_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.WStringSpec, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: webnn.mojom.PackageVersionSpec, nullable: false, minVersion: 0 },
        { name: 'library_path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
