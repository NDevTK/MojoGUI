// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/webrtc_ip_handling_url_entry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var content_settings = content_settings || {};

blink.mojom.WebRtcIpHandlingUrlEntrySpec = { $: {} };

// Struct: WebRtcIpHandlingUrlEntry
mojo.internal.Struct(
    blink.mojom.WebRtcIpHandlingUrlEntrySpec, 'blink.mojom.WebRtcIpHandlingUrlEntry', [
      mojo.internal.StructField('url_pattern', 0, 0, content_settings.mojom.ContentSettingsPatternSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handling', 8, 0, blink.mojom.WebRtcIpHandlingPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
