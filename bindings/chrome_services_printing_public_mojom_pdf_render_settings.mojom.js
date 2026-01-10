// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/printing/public/mojom/pdf_render_settings.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var gfx = gfx || {};

printing.mojom.ModeSpec = { $: mojo.internal.Enum() };
printing.mojom.PdfRenderSettingsSpec = { $: {} };

// Enum: Mode
printing.mojom.Mode = {
  NORMAL: 0,
  TEXTONLY: 1,
  POSTSCRIPT_LEVEL2: 2,
  POSTSCRIPT_LEVEL3: 3,
  EMF_WITH_REDUCED_RASTERIZATION: 4,
  POSTSCRIPT_LEVEL3_WITH_TYPE42_FONTS: 5,
};

// Struct: PdfRenderSettings
mojo.internal.Struct(
    printing.mojom.PdfRenderSettingsSpec, 'printing.mojom.PdfRenderSettings', [
      mojo.internal.StructField('NORMAL', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);
