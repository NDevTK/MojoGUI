// Auto-generated MojoJS binding
// Source: chromium_src/printing/backend/mojom/print_backend.mojom
// Module: printing.mojom

'use strict';

// Module namespace
var printing = printing || {};
printing.mojom = printing.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

printing.mojom.AdvancedCapabilityTypeSpec = { $: mojo.internal.Enum() };
printing.mojom.PrinterBasicInfoSpec = { $: {} };
printing.mojom.PaperMarginsSpec = { $: {} };
printing.mojom.PaperSpec = { $: {} };
printing.mojom.MediaTypeSpec = { $: {} };
printing.mojom.AdvancedCapabilityValueSpec = { $: {} };
printing.mojom.AdvancedCapabilitySpec = { $: {} };
printing.mojom.PageOutputQualityAttributeSpec = { $: {} };
printing.mojom.PageOutputQualitySpec = { $: {} };
printing.mojom.PrinterSemanticCapsAndDefaultsSpec = { $: {} };

// Enum: AdvancedCapabilityType
printing.mojom.AdvancedCapabilityType = {
  kString: 0,
  kBoolean: 1,
  kFloat: 2,
  kInteger: 3,
};

// Struct: PrinterBasicInfo
mojo.internal.Struct(
    printing.mojom.PrinterBasicInfoSpec, 'printing.mojom.PrinterBasicInfo', [
      mojo.internal.StructField('printer_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('printer_description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('options', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PaperMargins
mojo.internal.Struct(
    printing.mojom.PaperMarginsSpec, 'printing.mojom.PaperMargins', [
      mojo.internal.StructField('top_margin_um', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('right_margin_um', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bottom_margin_um', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('left_margin_um', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Paper
mojo.internal.Struct(
    printing.mojom.PaperSpec, 'printing.mojom.Paper', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('size_um', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('printable_area_um', 24, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supported_margins_um', 32, 0, printing.mojom.PaperMarginsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('max_height_um', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_borderless_variant', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: MediaType
mojo.internal.Struct(
    printing.mojom.MediaTypeSpec, 'printing.mojom.MediaType', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdvancedCapabilityValue
mojo.internal.Struct(
    printing.mojom.AdvancedCapabilityValueSpec, 'printing.mojom.AdvancedCapabilityValue', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdvancedCapability
mojo.internal.Struct(
    printing.mojom.AdvancedCapabilitySpec, 'printing.mojom.AdvancedCapability', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, printing.mojom.AdvancedCapabilityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_value', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('values', 32, 0, mojo.internal.Array(printing.mojom.AdvancedCapabilityValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PageOutputQualityAttribute
mojo.internal.Struct(
    printing.mojom.PageOutputQualityAttributeSpec, 'printing.mojom.PageOutputQualityAttribute', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PageOutputQuality
mojo.internal.Struct(
    printing.mojom.PageOutputQualitySpec, 'printing.mojom.PageOutputQuality', [
      mojo.internal.StructField('qualities', 0, 0, mojo.internal.Array(printing.mojom.PageOutputQualityAttributeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_quality', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PrinterSemanticCapsAndDefaults
mojo.internal.Struct(
    printing.mojom.PrinterSemanticCapsAndDefaultsSpec, 'printing.mojom.PrinterSemanticCapsAndDefaults', [
      mojo.internal.StructField('duplex_modes', 0, 0, mojo.internal.Array(printing.mojom.DuplexModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('duplex_default', 8, 0, printing.mojom.DuplexModeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('color_model', 16, 0, printing.mojom.ColorModelSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('bw_model', 24, 0, printing.mojom.ColorModelSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('papers', 32, 0, mojo.internal.Array(printing.mojom.PaperSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('user_defined_papers', 40, 0, mojo.internal.Array(printing.mojom.PaperSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_paper', 48, 0, printing.mojom.PaperSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dpis', 56, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_dpi', 64, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('advanced_capabilities', 72, 0, mojo.internal.Array(printing.mojom.AdvancedCapabilitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('page_output_quality', 80, 0, printing.mojom.PageOutputQualitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('media_types', 88, 0, mojo.internal.Array(printing.mojom.MediaTypeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('default_media_type', 96, 0, printing.mojom.MediaTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('print_scaling_types', 104, 0, mojo.internal.Array(printing.mojom.PrintScalingTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('print_scaling_type_default', 112, 0, printing.mojom.PrintScalingTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('copies_max', 120, 0, mojo.internal.Int32, 1, false, 0, undefined),
      mojo.internal.StructField('collate_capable', 124, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('collate_default', 124, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('color_changeable', 124, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('color_default', 124, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pin_supported', 124, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 136]]);
