// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/presentation_feedback.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: PresentationFeedback
gfx.mojom.PresentationFeedbackSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.PresentationFeedback',
      packedSize: 80,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'interval', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'available_timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'ready_timestamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'latch_timestamp', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'writes_done_timestamp', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'ca_layer_error_code', packedOffset: 60, packedBitOffset: 0, type: gfx.mojom.CALayerResultSpec, nullable: false, minVersion: 0 },
        { name: 'display_trace_id_$flag', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'display_trace_id_$value', originalFieldName: 'display_trace_id' } },
        { name: 'display_trace_id_$value', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'display_trace_id_$flag', originalFieldName: 'display_trace_id' } },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};
