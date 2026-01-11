// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/thread_type.mojom
// Module: mojo_base.mojom

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.ThreadTypeSpec = { $: mojo.internal.Enum() };

// Enum: ThreadType
mojo_base.mojom.ThreadType = {
  kBackground: 0,
  kUtility: 1,
  kDefault: 2,
  kDisplayCritical: 3,
  kInteractive: 4,
  kRealtimeAudio: 5,
};
