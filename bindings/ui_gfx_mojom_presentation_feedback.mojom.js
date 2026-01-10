// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/presentation_feedback.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

gfx.mojom.PresentationFeedbackSpec = { $: {} };

// Struct: PresentationFeedback
mojo.internal.Struct(
    gfx.mojom.PresentationFeedbackSpec, 'gfx.mojom.PresentationFeedback', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interval', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('available_timestamp', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ready_timestamp', 32, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('latch_timestamp', 40, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('writes_done_timestamp', 48, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ca_layer_error_code', 56, 0, gfx.mojom.CALayerResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_trace_id_$flag', 64, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'display_trace_id_$value', originalFieldName: 'display_trace_id' }),
      mojo.internal.StructField('display_trace_id_$value', 72, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'display_trace_id_$flag', originalFieldName: 'display_trace_id' }),
    ],
    [[0, 88]]);
