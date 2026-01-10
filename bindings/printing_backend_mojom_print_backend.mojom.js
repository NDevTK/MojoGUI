// Auto-generated MojoJS binding
// Source: chromium_src/printing/backend/mojom/print_backend.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: AdvancedCapabilityType
printing.mojom.mojom.AdvancedCapabilityType = {
  kString: 0,
  kBoolean: 1,
  kFloat: 2,
  kInteger: 3,
};
printing.mojom.mojom.AdvancedCapabilityTypeSpec = { $: mojo.internal.Enum() };

// Struct: PrinterBasicInfo
printing.mojom.mojom.PrinterBasicInfoSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrinterBasicInfo',
      packedSize: 40,
      fields: [
        { name: 'printer_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'printer_description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PaperMargins
printing.mojom.mojom.PaperMarginsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PaperMargins',
      packedSize: 24,
      fields: [
        { name: 'top_margin_um', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'right_margin_um', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bottom_margin_um', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'left_margin_um', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Paper
printing.mojom.mojom.PaperSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.Paper',
      packedSize: 56,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size_um', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'printable_area_um', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'max_height_um', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'has_borderless_variant', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supported_margins_um', packedOffset: 32, packedBitOffset: 0, type: printing.mojom.PaperMarginsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: MediaType
printing.mojom.mojom.MediaTypeSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.MediaType',
      packedSize: 24,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AdvancedCapabilityValue
printing.mojom.mojom.AdvancedCapabilityValueSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.AdvancedCapabilityValue',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AdvancedCapability
printing.mojom.mojom.AdvancedCapabilitySpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.AdvancedCapability',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: printing.mojom.AdvancedCapabilityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'default_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'values', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.AdvancedCapabilityValueSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PageOutputQualityAttribute
printing.mojom.mojom.PageOutputQualityAttributeSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageOutputQualityAttribute',
      packedSize: 24,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PageOutputQuality
printing.mojom.mojom.PageOutputQualitySpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PageOutputQuality',
      packedSize: 24,
      fields: [
        { name: 'qualities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.PageOutputQualityAttributeSpec, false), nullable: false, minVersion: 0 },
        { name: 'default_quality', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PrinterSemanticCapsAndDefaults
printing.mojom.mojom.PrinterSemanticCapsAndDefaultsSpec = {
  $: {
    structSpec: {
      name: 'printing.mojom.PrinterSemanticCapsAndDefaults',
      packedSize: 120,
      fields: [
        { name: 'collate_capable', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'collate_default', packedOffset: 108, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'copies_max', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'duplex_modes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.DuplexModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'duplex_default', packedOffset: 92, packedBitOffset: 0, type: printing.mojom.DuplexModeSpec, nullable: false, minVersion: 0 },
        { name: 'color_changeable', packedOffset: 108, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color_default', packedOffset: 108, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color_model', packedOffset: 96, packedBitOffset: 0, type: printing.mojom.ColorModelSpec, nullable: false, minVersion: 0 },
        { name: 'bw_model', packedOffset: 100, packedBitOffset: 0, type: printing.mojom.ColorModelSpec, nullable: false, minVersion: 0 },
        { name: 'papers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.PaperSpec, false), nullable: false, minVersion: 0 },
        { name: 'user_defined_papers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.PaperSpec, false), nullable: false, minVersion: 0 },
        { name: 'default_paper', packedOffset: 24, packedBitOffset: 0, type: printing.mojom.PaperSpec, nullable: false, minVersion: 0 },
        { name: 'dpis', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
        { name: 'default_dpi', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'pin_supported', packedOffset: 108, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'advanced_capabilities', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.AdvancedCapabilitySpec, false), nullable: false, minVersion: 0 },
        { name: 'page_output_quality', packedOffset: 56, packedBitOffset: 0, type: printing.mojom.PageOutputQualitySpec, nullable: true, minVersion: 0 },
        { name: 'media_types', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.MediaTypeSpec, false), nullable: true, minVersion: 0 },
        { name: 'default_media_type', packedOffset: 72, packedBitOffset: 0, type: printing.mojom.MediaTypeSpec, nullable: true, minVersion: 0 },
        { name: 'print_scaling_types', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(printing.mojom.PrintScalingTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'print_scaling_type_default', packedOffset: 104, packedBitOffset: 0, type: printing.mojom.PrintScalingTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 120}]
    }
  }
};
