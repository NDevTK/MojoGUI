// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_render_settings.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: Mode
printing.mojom.Mode = {
  NORMAL: 0,
};
printing.mojom.ModeSpec = { $: mojo.internal.Enum() };

// Struct: PdfRenderSettings
printing.mojom.PdfRenderSettingsSpec = {
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
