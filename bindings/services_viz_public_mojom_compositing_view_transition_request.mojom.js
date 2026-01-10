// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/view_transition_request.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var blink = blink || {};

viz.mojom.ViewTransitionRequestSpec = { $: {} };

// Struct: ViewTransitionRequest
mojo.internal.Struct(
    viz.mojom.ViewTransitionRequestSpec, 'viz.mojom.ViewTransitionRequest', [
      mojo.internal.StructField('type', 16, 0, viz.mojom.CompositorFrameTransitionDirectiveTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('transition_token', 0, 0, blink.mojom.ViewTransitionTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('maybe_cross_frame_sink', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sequence_id', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('capture_resource_ids', 8, 0, mojo.internal.Array(viz.mojom.ViewTransitionElementResourceIdSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);
