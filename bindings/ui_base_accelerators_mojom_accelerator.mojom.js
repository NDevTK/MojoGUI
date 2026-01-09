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
      packedSize: 32,
      fields: [
        { name: 'key_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'time_stamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'modifiers', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
