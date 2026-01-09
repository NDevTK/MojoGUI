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

// Struct: Accelerator
ui.mojom.AcceleratorSpec = {
  $: {
    structSpec: {
      name: 'ui.mojom.Accelerator',
      packedSize: 40,
      fields: [
        { name: 'key_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'key_state', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.AcceleratorKeyStateSpec, nullable: false },
        { name: 'modifiers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'time_stamp', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
