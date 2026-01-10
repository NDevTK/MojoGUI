// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/ui/mojom/ui_service.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.ZOrderSpec = { $: mojo.internal.Enum() };

// Enum: ZOrder
chromecast.mojom.ZOrder = {
  APP: -1,
  UNMANAGED_APP: 0,
  DEBUG_OVERLAY: 1,
  INFO_OVERLAY: 2,
  SOFT_KEYBOARD: 3,
  VOLUME: 4,
  MEDIA_INFO: 5,
  SETTINGS: 6,
  BOOT_ANIMATION_OVERLAY: 7,
};
