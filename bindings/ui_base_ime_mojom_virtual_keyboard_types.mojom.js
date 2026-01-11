// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/virtual_keyboard_types.mojom
// Module: ui.mojom

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};

ui.mojom.VirtualKeyboardPolicySpec = { $: mojo.internal.Enum() };
ui.mojom.VirtualKeyboardVisibilityRequestSpec = { $: mojo.internal.Enum() };
ui.mojom.VirtualKeyboardModeSpec = { $: mojo.internal.Enum() };

// Enum: VirtualKeyboardPolicy
ui.mojom.VirtualKeyboardPolicy = {
  AUTO: 0,
  MANUAL: 1,
};

// Enum: VirtualKeyboardVisibilityRequest
ui.mojom.VirtualKeyboardVisibilityRequest = {
  NONE: 0,
  SHOW: 1,
  HIDE: 2,
};

// Enum: VirtualKeyboardMode
ui.mojom.VirtualKeyboardMode = {
  kUnset: 0,
  kResizesVisual: 1,
  kResizesContent: 2,
  kOverlaysContent: 3,
};
