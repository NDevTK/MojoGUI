// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_presentation_info.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

wl.mojom.WaylandPresentationInfoSpec = { $: {} };

// Struct: WaylandPresentationInfo
mojo.internal.Struct(
    wl.mojom.WaylandPresentationInfoSpec, 'wl.mojom.WaylandPresentationInfo', [
      mojo.internal.StructField('frame_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('feedback', 8, 0, gfx.mojom.PresentationFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
