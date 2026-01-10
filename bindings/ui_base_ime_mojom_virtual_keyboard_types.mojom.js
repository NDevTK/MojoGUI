// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/ime/mojom/virtual_keyboard_types.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: VirtualKeyboardPolicy
ui.mojom.mojom.VirtualKeyboardPolicy = {
  AUTO: 0,
  MANUAL: 1,
};
ui.mojom.mojom.VirtualKeyboardPolicySpec = { $: mojo.internal.Enum() };

// Enum: VirtualKeyboardVisibilityRequest
ui.mojom.mojom.VirtualKeyboardVisibilityRequest = {
  NONE: 0,
  SHOW: 1,
  HIDE: 2,
};
ui.mojom.mojom.VirtualKeyboardVisibilityRequestSpec = { $: mojo.internal.Enum() };

// Enum: VirtualKeyboardMode
ui.mojom.mojom.VirtualKeyboardMode = {
  kUnset: 0,
  kResizesVisual: 1,
  kResizesContent: 2,
  kOverlaysContent: 3,
};
ui.mojom.mojom.VirtualKeyboardModeSpec = { $: mojo.internal.Enum() };
