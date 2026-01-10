// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/serialized_blob.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};

blink.mojom.SerializedBlobSpec = { $: {} };

// Struct: SerializedBlob
mojo.internal.Struct(
    blink.mojom.SerializedBlobSpec, 'blink.mojom.SerializedBlob', [
      mojo.internal.StructField('uuid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('blob', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);
