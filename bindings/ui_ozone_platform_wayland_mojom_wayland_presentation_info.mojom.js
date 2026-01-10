// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_presentation_info.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: WaylandPresentationInfo
wl.mojom.WaylandPresentationInfoSpec = {
  $: {
    structSpec: {
      name: 'wl.mojom.WaylandPresentationInfo',
      packedSize: 24,
      fields: [
        { name: 'frame_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PresentationFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
