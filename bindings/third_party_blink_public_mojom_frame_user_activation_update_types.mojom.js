// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/user_activation_update_types.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.UserActivationUpdateTypeSpec = { $: mojo.internal.Enum() };

// Enum: UserActivationUpdateType
blink.mojom.UserActivationUpdateType = {
  kNotifyActivation: 0,
  kNotifyActivationStickyOnly: 1,
  kConsumeTransientActivation: 2,
  kClearActivation: 3,
};
