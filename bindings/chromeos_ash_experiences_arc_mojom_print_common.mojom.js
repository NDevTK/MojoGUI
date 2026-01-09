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
        { name: 'end', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'height_mils', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'vertical_dpi', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'bottom_mils', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'duplex_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'attributes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'defaults', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
