// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/host_id.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Enum: HostType
extensions.mojom.HostType = {
  kExtensions: 0,
  kWebUi: 1,
  kControlledFrameEmbedder: 2,
};
extensions.mojom.HostTypeSpec = { $: mojo.internal.Enum() };

// Struct: HostID
extensions.mojom.HostIDSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.HostID',
      packedSize: 16,
      fields: [
        { name: 'kExtensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
