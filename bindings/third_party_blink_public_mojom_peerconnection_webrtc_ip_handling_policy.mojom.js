// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/peerconnection/webrtc_ip_handling_policy.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.WebRtcIpHandlingPolicySpec = { $: mojo.internal.Enum() };

// Enum: WebRtcIpHandlingPolicy
blink.mojom.WebRtcIpHandlingPolicy = {
  kDefault: 0,
  kDefaultPublicAndPrivateInterfaces: 1,
  kDefaultPublicInterfaceOnly: 2,
  kDisableNonProxiedUdp: 3,
};
