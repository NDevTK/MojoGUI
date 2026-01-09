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

// Enum: PrintDuplexMode
arc.mojom.PrintDuplexMode = {
  NONE: 0,
  LONG_EDGE: 1,
  SHORT_EDGE: 2,
};

// Enum: PrintContentType
arc.mojom.PrintContentType = {
  UNKNOWN: 0,
  DOCUMENT: 1,
  PHOTO: 2,
};

// Enum: PrinterStatus
arc.mojom.PrinterStatus = {
  IDLE: 0,
  BUSY: 1,
  UNAVAILABLE: 2,
};

// Struct: PrintPageRange
arc.mojom.PrintPageRangeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintPageRange',
      packedSize: 16,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'end', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'width_mils', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'height_mils', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'horizontal_dpi', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'vertical_dpi', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'left_mils', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'top_mils', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'right_mils', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bottom_mils', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrintAttributes
arc.mojom.PrintAttributesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintAttributes',
      packedSize: 48,
      fields: [
        { name: 'media_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'resolution', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'min_margins', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'color_mode', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'duplex_mode', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'pages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'attributes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrintJobRequest
arc.mojom.PrintJobRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrintJobRequest',
      packedSize: 96,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'printer_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'creation_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'pages', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'attributes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'document_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'content_type', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data_size', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'copies', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'document_page_count', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'data', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrinterCapabilities
arc.mojom.PrinterCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrinterCapabilities',
      packedSize: 56,
      fields: [
        { name: 'media_sizes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'resolutions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'min_margins', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'color_modes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'duplex_modes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'defaults', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'description', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'info_intent', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'capabilities', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
