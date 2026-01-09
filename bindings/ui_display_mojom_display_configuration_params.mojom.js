// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_configuration_params.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: DisplayConfigurationParams
display.mojom.DisplayConfigurationParamsSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplayConfigurationParams',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'enable_vrr', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
