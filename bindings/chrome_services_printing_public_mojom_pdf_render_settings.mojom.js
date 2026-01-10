// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_render_settings.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: Mode
printing.mojom.mojom.Mode = {
  NORMAL: 0,
};
printing.mojom.mojom.ModeSpec = { $: mojo.internal.Enum() };

// Struct: PdfRenderSettings
printing.mojom.mojom.PdfRenderSettingsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfRenderSettings',
      packedSize: 16,
      fields: [
        { name: 'NORMAL', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
