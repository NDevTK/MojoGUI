// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/accelerators/mojom/accelerator.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};
var ui = ui || {};
var ui = ui || {};

ui.mojom.AcceleratorKeyStateSpec = { $: mojo.internal.Enum() };
ui.mojom.AcceleratorSpec = { $: {} };

// Enum: AcceleratorKeyState
ui.mojom.AcceleratorKeyState = {
  PRESSED: 0,
  RELEASED: 1,
};

// Struct: Accelerator
mojo.internal.Struct(
    ui.mojom.AcceleratorSpec, 'ui.mojom.Accelerator', [
      mojo.internal.StructField('key_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('key_state', 8, 0, ui.mojom.AcceleratorKeyStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('time_stamp', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);
