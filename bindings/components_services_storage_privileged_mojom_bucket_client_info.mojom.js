// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/bucket_client_info.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Struct: BucketClientInfo
storage.mojom.BucketClientInfoSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.BucketClientInfo',
      packedSize: 40,
      fields: [
        { name: 'process_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'context_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ExecutionContextTokenSpec, nullable: false, minVersion: 0 },
        { name: 'document_token', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.DocumentTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
