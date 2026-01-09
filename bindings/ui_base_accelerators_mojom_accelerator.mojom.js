// Auto-generated MojoJS binding
// Source: chromium_src/ui/base/accelerators/mojom/accelerator.mojom
// Module: ui.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.mojom = ui.mojom || {};


// Enum: AcceleratorKeyState
ui.mojom.AcceleratorKeyState = {
  PRESSED: 0,
  RELEASED: 1,
};
ui.mojom.AcceleratorKeyStateSpec = { $: mojo.internal.Enum() };

// Struct: Accelerator
ui.mojom.AcceleratorSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.Accelerator',
      packedSize: 32,
      fields: [
        { name: 'key_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'key_state', packedOffset: 4, packedBitOffset: 0, type: ui.mojom.AcceleratorKeyStateSpec, nullable: false, minVersion: 0 },
        { name: 'modifiers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'time_stamp', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
