// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_cloud_identifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FileSystemAccessCloudIdentifier
blink.mojom.FileSystemAccessCloudIdentifierSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FileSystemAccessCloudIdentifier',
      packedSize: 24,
      fields: [
        { name: 'provider_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
