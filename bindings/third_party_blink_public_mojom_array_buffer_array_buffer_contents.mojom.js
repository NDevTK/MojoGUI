// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/array_buffer/array_buffer_contents.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.SerializedArrayBufferContentsSpec = { $: {} };

// Struct: SerializedArrayBufferContents
mojo.internal.Struct(
    blink.mojom.SerializedArrayBufferContentsSpec, 'blink.mojom.SerializedArrayBufferContents', [
      mojo.internal.StructField('contents', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_byte_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('is_resizable_by_user_javascript', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);
