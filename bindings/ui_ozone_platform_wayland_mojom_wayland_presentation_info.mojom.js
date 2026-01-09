// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_presentation_info.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};


// Struct: WaylandPresentationInfo
wl.mojom.WaylandPresentationInfoSpec = {
  $: {
    structSpec: {
      name: 'wl.mojom.WaylandPresentationInfo',
      packedSize: 24,
      fields: [
        { name: 'frame_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'feedback', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PresentationFeedbackSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
