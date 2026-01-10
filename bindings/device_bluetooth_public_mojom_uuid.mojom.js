// Auto-generated MojoJS binding
// Source: chromium_src/device/bluetooth/public/mojom/uuid.mojom
// Module: bluetooth.mojom

'use strict';

// Module namespace
var bluetooth = bluetooth || {};
bluetooth.mojom = bluetooth.mojom || {};


// Struct: UUID
bluetooth.mojom.mojom.UUIDSpec = {
  $: {
    structSpec: {
      name: 'bluetooth.mojom.UUID',
      packedSize: 16,
      fields: [
        { name: 'uuid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
