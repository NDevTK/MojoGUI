// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/record_content_to_visible_time_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: RecordContentToVisibleTimeRequest
blink.mojom.mojom.RecordContentToVisibleTimeRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RecordContentToVisibleTimeRequest',
      packedSize: 24,
      fields: [
        { name: 'event_start_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
        { name: 'destination_is_loaded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_reason_tab_switching', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_reason_bfcache_restore', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_reason_unfolding', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
