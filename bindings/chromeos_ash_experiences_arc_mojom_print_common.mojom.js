// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/print_common.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.PrintColorModeSpec = { $: mojo.internal.Enum() };
arc.mojom.PrintDuplexModeSpec = { $: mojo.internal.Enum() };
arc.mojom.PrintContentTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.PrinterStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.PrintPageRangeSpec = { $: {} };
arc.mojom.PrintMediaSizeSpec = { $: {} };
arc.mojom.PrintResolutionSpec = { $: {} };
arc.mojom.PrintMarginsSpec = { $: {} };
arc.mojom.PrintAttributesSpec = { $: {} };
arc.mojom.PrintDocumentRequestSpec = { $: {} };
arc.mojom.PrintJobRequestSpec = { $: {} };
arc.mojom.PrinterCapabilitiesSpec = { $: {} };
arc.mojom.PrinterInfoSpec = { $: {} };

// Enum: PrintColorMode
arc.mojom.PrintColorMode = {
  MONOCHROME: 1,
  COLOR: 2,
};

// Enum: PrintDuplexMode
arc.mojom.PrintDuplexMode = {
  NONE: 1,
  LONG_EDGE: 2,
  SHORT_EDGE: 4,
};

// Enum: PrintContentType
arc.mojom.PrintContentType = {
  UNKNOWN: -1,
  DOCUMENT: 0,
  PHOTO: 1,
};

// Enum: PrinterStatus
arc.mojom.PrinterStatus = {
  IDLE: 1,
  BUSY: 2,
  UNAVAILABLE: 3,
};

// Struct: PrintPageRange
mojo.internal.Struct(
    arc.mojom.PrintPageRangeSpec, 'arc.mojom.PrintPageRange', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PrintMediaSize
mojo.internal.Struct(
    arc.mojom.PrintMediaSizeSpec, 'arc.mojom.PrintMediaSize', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('width_mils', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('height_mils', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrintResolution
mojo.internal.Struct(
    arc.mojom.PrintResolutionSpec, 'arc.mojom.PrintResolution', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('horizontal_dpi', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('vertical_dpi', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrintMargins
mojo.internal.Struct(
    arc.mojom.PrintMarginsSpec, 'arc.mojom.PrintMargins', [
      mojo.internal.StructField('left_mils', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('top_mils', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right_mils', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_mils', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintAttributes
mojo.internal.Struct(
    arc.mojom.PrintAttributesSpec, 'arc.mojom.PrintAttributes', [
      mojo.internal.StructField('media_size', 0, 0, arc.mojom.PrintMediaSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('resolution', 8, 0, arc.mojom.PrintResolutionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('min_margins', 16, 0, arc.mojom.PrintMarginsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('color_mode', 24, 0, arc.mojom.PrintColorModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duplex_mode', 32, 0, arc.mojom.PrintDuplexModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PrintDocumentRequest
mojo.internal.Struct(
    arc.mojom.PrintDocumentRequestSpec, 'arc.mojom.PrintDocumentRequest', [
      mojo.internal.StructField('pages', 0, 0, mojo.internal.Array(arc.mojom.PrintPageRangeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('attributes', 8, 0, arc.mojom.PrintAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrintJobRequest
mojo.internal.Struct(
    arc.mojom.PrintJobRequestSpec, 'arc.mojom.PrintJobRequest', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Array(mojo.internal.Int8, false), null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('printer_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('creation_time', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('pages', 32, 0, mojo.internal.Array(arc.mojom.PrintPageRangeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('attributes', 40, 0, arc.mojom.PrintAttributesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 56, 0, arc.mojom.PrintContentTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data_size', 64, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('copies', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('document_page_count', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 80, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: PrinterCapabilities
mojo.internal.Struct(
    arc.mojom.PrinterCapabilitiesSpec, 'arc.mojom.PrinterCapabilities', [
      mojo.internal.StructField('media_sizes', 0, 0, mojo.internal.Array(arc.mojom.PrintMediaSizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resolutions', 8, 0, mojo.internal.Array(arc.mojom.PrintResolutionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('min_margins', 16, 0, arc.mojom.PrintMarginsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_modes', 24, 0, arc.mojom.PrintColorModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duplex_modes', 32, 0, arc.mojom.PrintDuplexModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('defaults', 40, 0, arc.mojom.PrintAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PrinterInfo
mojo.internal.Struct(
    arc.mojom.PrinterInfoSpec, 'arc.mojom.PrinterInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 16, 0, arc.mojom.PrinterStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('info_intent', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('capabilities', 40, 0, arc.mojom.PrinterCapabilitiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);
