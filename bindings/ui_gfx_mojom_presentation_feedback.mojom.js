// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/presentation_feedback.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: PresentationFeedback
gfx.mojom.PresentationFeedbackSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.PresentationFeedback',
      packedSize: 80,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'interval', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'available_timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ready_timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'latch_timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'writes_done_timestamp', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ca_layer_error_code', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'display_trace_id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int64, nullable: true },
        { name: 'flags', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
