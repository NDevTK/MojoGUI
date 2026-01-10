// Auto-generated MojoJS binding
// Source: chromium_src/components/enterprise/watermarking/mojom/watermark.mojom
// Module: watermark.mojom

'use strict';

// Module namespace
var watermark = watermark || {};
watermark.mojom = watermark.mojom || {};
var mojo_base = mojo_base || {};

watermark.mojom.WatermarkBlockSpec = { $: {} };

// Struct: WatermarkBlock
mojo.internal.Struct(
    watermark.mojom.WatermarkBlockSpec, 'watermark.mojom.WatermarkBlock', [
      mojo.internal.StructField('serialized_skpicture', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('width', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);
