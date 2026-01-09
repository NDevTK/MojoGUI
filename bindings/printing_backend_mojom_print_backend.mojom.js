// Auto-generated MojoJS binding
// Source: chromium_src/printing/backend/mojom/print_backend.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};


// Enum: AdvancedCapabilityType
printing.mojom.AdvancedCapabilityType = {
  kString: 0,
  kBoolean: 1,
  kFloat: 2,
  kInteger: 3,
};

// Struct: PrinterBasicInfo
printing.mojom.PrinterBasicInfoSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrinterBasicInfo',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaperMargins
printing.mojom.PaperMarginsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PaperMargins',
      packedSize: 16,
      fields: [
        { name: 'left_margin_um', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Paper
printing.mojom.PaperSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.Paper',
      packedSize: 16,
      fields: [
        { name: 'supported_margins_um', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaType
printing.mojom.MediaTypeSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.MediaType',
      packedSize: 16,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdvancedCapabilityValue
printing.mojom.AdvancedCapabilityValueSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.AdvancedCapabilityValue',
      packedSize: 16,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdvancedCapability
printing.mojom.AdvancedCapabilitySpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.AdvancedCapability',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageOutputQualityAttribute
printing.mojom.PageOutputQualityAttributeSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageOutputQualityAttribute',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageOutputQuality
printing.mojom.PageOutputQualitySpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageOutputQuality',
      packedSize: 16,
      fields: [
        { name: 'default_quality', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PrinterSemanticCapsAndDefaults
printing.mojom.PrinterSemanticCapsAndDefaultsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrinterSemanticCapsAndDefaults',
      packedSize: 16,
      fields: [
        { name: 'kUnknownPrintScalingType', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
