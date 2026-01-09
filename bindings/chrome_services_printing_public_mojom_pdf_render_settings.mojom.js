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

// Struct: PdfRenderSettings
printing.mojom.PdfRenderSettingsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PdfRenderSettings',
      packedSize: 48,
      fields: [
        { name: 'TEXTONLY', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'POSTSCRIPT_LEVEL2', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'POSTSCRIPT_LEVEL3', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'EMF_WITH_REDUCED_RASTERIZATION', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'POSTSCRIPT_LEVEL3_WITH_TYPE42_FONTS', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
