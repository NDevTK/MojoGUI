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
      packedSize: 16,
      fields: [
        { name: 'time_stamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
