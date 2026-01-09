// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/webrtc_ip_handling_url_entry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WebRtcIpHandlingUrlEntry
blink.mojom.WebRtcIpHandlingUrlEntrySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebRtcIpHandlingUrlEntry',
      packedSize: 24,
      fields: [
        { name: 'url_pattern', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'handling', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
