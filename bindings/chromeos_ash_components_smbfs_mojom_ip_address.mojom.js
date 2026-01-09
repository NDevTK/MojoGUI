// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/smbfs/mojom/ip_address.mojom
// Module: smbfs.mojom

'use strict';

// Module namespace
var smbfs = smbfs || {};
smbfs.mojom = smbfs.mojom || {};


// Struct: IPAddress
smbfs.mojom.IPAddressSpec = {
  $: {
    structSpec: {
      name: 'smbfs.mojom.IPAddress',
      packedSize: 16,
      fields: [
        { name: 'address_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
