// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_configuration_params.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: DisplayConfigurationParams
display.mojom.DisplayConfigurationParamsSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplayConfigurationParams',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 16, packedBitOffset: 0, type: display.mojom.DisplayModeSpec, nullable: true, minVersion: 0 },
        { name: 'enable_vrr', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
