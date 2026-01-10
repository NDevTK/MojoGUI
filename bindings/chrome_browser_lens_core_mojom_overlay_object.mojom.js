// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/lens/core/mojom/overlay_object.mojom
// Module: lens.mojom

'use strict';

// Module namespace
var lens = lens || {};
lens.mojom = lens.mojom || {};

lens.mojom.OverlayObjectSpec = { $: {} };

// Struct: OverlayObject
mojo.internal.Struct(
    lens.mojom.OverlayObjectSpec, 'lens.mojom.OverlayObject', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('geometry', 8, 0, lens.mojom.GeometrySpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
