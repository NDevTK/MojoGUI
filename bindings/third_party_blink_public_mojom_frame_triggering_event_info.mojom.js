// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/triggering_event_info.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.TriggeringEventInfoSpec = { $: mojo.internal.Enum() };

// Enum: TriggeringEventInfo
blink.mojom.TriggeringEventInfo = {
  kUnknown: 0,
  kNotFromEvent: 1,
  kFromTrustedEvent: 2,
  kFromUntrustedEvent: 3,
};
