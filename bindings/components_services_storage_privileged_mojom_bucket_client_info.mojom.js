// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/bucket_client_info.mojom
// Module: storage.mojom

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};

storage.mojom.BucketClientInfoSpec = { $: {} };

// Struct: BucketClientInfo
mojo.internal.Struct(
    storage.mojom.BucketClientInfoSpec, 'storage.mojom.BucketClientInfo', [
      mojo.internal.StructField('context_token', 0, 0, blink.mojom.ExecutionContextTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_token', 8, 0, blink.mojom.DocumentTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('process_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
