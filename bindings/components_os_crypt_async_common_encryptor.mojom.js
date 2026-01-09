// Auto-generated MojoJS binding
// Source: chromium_src/components/os_crypt/async/common/encryptor.mojom
// Module: os_crypt_async.mojom

'use strict';

// Module namespace
var os_crypt_async = os_crypt_async || {};
os_crypt_async.mojom = os_crypt_async.mojom || {};


// Struct: Key
os_crypt_async.mojom.KeySpec = {
  $: {
    structSpec: {
      name: 'os_crypt_async.mojom.Key',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Encryptor
os_crypt_async.mojom.EncryptorSpec = {
  $: {
    structSpec: {
      name: 'os_crypt_async.mojom.Encryptor',
      packedSize: 16,
      fields: [
        { name: 'key_entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
