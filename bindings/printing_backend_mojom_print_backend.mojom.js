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
      packedSize: 40,
      fields: [
        { name: 'printer_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'printer_description', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'options', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'top_margin_um', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'right_margin_um', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bottom_margin_um', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'left_margin_um', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
      packedSize: 64,
      fields: [
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'vendor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'size_um', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'printable_area_um', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'max_height_um', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'has_borderless_variant', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'supported_margins_um', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'vendor_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: printing.mojom.AdvancedCapabilityTypeSpec, nullable: false },
        { name: 'default_value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'values', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'qualities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'default_quality', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
      packedSize: 160,
      fields: [
        { name: 'collate_capable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'collate_default', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'copies_max', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'duplex_modes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'duplex_default', packedOffset: 32, packedBitOffset: 0, type: printing.mojom.DuplexModeSpec, nullable: false },
        { name: 'color_changeable', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'color_default', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'color_model', packedOffset: 48, packedBitOffset: 0, type: printing.mojom.ColorModelSpec, nullable: false },
        { name: 'bw_model', packedOffset: 56, packedBitOffset: 0, type: printing.mojom.ColorModelSpec, nullable: false },
        { name: 'papers', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_defined_papers', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'default_paper', packedOffset: 80, packedBitOffset: 0, type: printing.mojom.PaperSpec, nullable: false },
        { name: 'dpis', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'default_dpi', packedOffset: 96, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'pin_supported', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'advanced_capabilities', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'page_output_quality', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'media_types', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'default_media_type', packedOffset: 136, packedBitOffset: 0, type: printing.mojom.MediaTypeSpec, nullable: true },
        { name: 'print_scaling_types', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'print_scaling_type_default', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
