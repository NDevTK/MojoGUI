// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/print_common.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: PrintColorMode
arc.mojom.PrintColorMode = {
  MONOCHROME: 0,
  COLOR: 1,
};
arc.mojom.PrintColorModeSpec = { $: mojo.internal.Enum() };

// Enum: PrintDuplexMode
arc.mojom.PrintDuplexMode = {
  NONE: 0,
  LONG_EDGE: 1,
  SHORT_EDGE: 2,
};
arc.mojom.PrintDuplexModeSpec = { $: mojo.internal.Enum() };

// Enum: PrintContentType
arc.mojom.PrintContentType = {
  UNKNOWN: 0,
  DOCUMENT: 1,
  PHOTO: 2,
};
arc.mojom.PrintContentTypeSpec = { $: mojo.internal.Enum() };

// Enum: PrinterStatus
arc.mojom.PrinterStatus = {
  IDLE: 0,
  BUSY: 1,
  UNAVAILABLE: 2,
};
arc.mojom.PrinterStatusSpec = { $: mojo.internal.Enum() };

// Struct: PrintPageRange
arc.mojom.PrintPageRangeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintPageRange',
      packedSize: 16,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PrintMediaSize
arc.mojom.PrintMediaSizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintMediaSize',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'width_mils', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'height_mils', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PrintResolution
arc.mojom.PrintResolutionSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintResolution',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'horizontal_dpi', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'vertical_dpi', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PrintMargins
arc.mojom.PrintMarginsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintMargins',
      packedSize: 24,
      fields: [
        { name: 'left_mils', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'top_mils', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'right_mils', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bottom_mils', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PrintAttributes
arc.mojom.PrintAttributesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintAttributes',
      packedSize: 40,
      fields: [
        { name: 'media_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PrintMediaSizeSpec, nullable: true, minVersion: 0 },
        { name: 'resolution', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.PrintResolutionSpec, nullable: true, minVersion: 0 },
        { name: 'min_margins', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.PrintMarginsSpec, nullable: true, minVersion: 0 },
        { name: 'color_mode', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.PrintColorModeSpec, nullable: false, minVersion: 0 },
        { name: 'duplex_mode', packedOffset: 28, packedBitOffset: 0, type: arc.mojom.PrintDuplexModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PrintDocumentRequest
arc.mojom.PrintDocumentRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintDocumentRequest',
      packedSize: 24,
      fields: [
        { name: 'pages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.PrintPageRangeSpec, false), nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.PrintAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PrintJobRequest
arc.mojom.PrintJobRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintJobRequest',
      packedSize: 88,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int8, false), nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'creation_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'copies', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'pages', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.PrintPageRangeSpec, false), nullable: false, minVersion: 0 },
        { name: 'attributes', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.PrintAttributesSpec, nullable: false, minVersion: 0 },
        { name: 'document_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'document_page_count', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'content_type', packedOffset: 72, packedBitOffset: 0, type: arc.mojom.PrintContentTypeSpec, nullable: false, minVersion: 0 },
        { name: 'data_size', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: PrinterCapabilities
arc.mojom.PrinterCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrinterCapabilities',
      packedSize: 48,
      fields: [
        { name: 'media_sizes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.PrintMediaSizeSpec, false), nullable: false, minVersion: 0 },
        { name: 'resolutions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.PrintResolutionSpec, false), nullable: false, minVersion: 0 },
        { name: 'min_margins', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.PrintMarginsSpec, nullable: false, minVersion: 0 },
        { name: 'color_modes', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.PrintColorModeSpec, nullable: false, minVersion: 0 },
        { name: 'duplex_modes', packedOffset: 36, packedBitOffset: 0, type: arc.mojom.PrintDuplexModeSpec, nullable: false, minVersion: 0 },
        { name: 'defaults', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.PrintAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PrinterInfo
arc.mojom.PrinterInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrinterInfo',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.PrinterStatusSpec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'info_intent', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'capabilities', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.PrinterCapabilitiesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
