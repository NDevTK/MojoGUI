// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/print_preview_cros/mojom/printer_capabilities.mojom
// Module: ash.printing.print_preview.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.printing = ash.printing || {};
ash.printing.print_preview = ash.printing.print_preview || {};
ash.printing.print_preview.mojom = ash.printing.print_preview.mojom || {};

ash.printing.print_preview.mojom.ColorTypeSpec = { $: mojo.internal.Enum() };
ash.printing.print_preview.mojom.DuplexTypeSpec = { $: mojo.internal.Enum() };
ash.printing.print_preview.mojom.PageOrientationSpec = { $: mojo.internal.Enum() };
ash.printing.print_preview.mojom.ColorOptionSpec = { $: {} };
ash.printing.print_preview.mojom.ColorCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.CollateCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.CopiesCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.DuplexOptionSpec = { $: {} };
ash.printing.print_preview.mojom.DuplexCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.PageOrientationOptionSpec = { $: {} };
ash.printing.print_preview.mojom.PageOrientationCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.LocalizedStringSpec = { $: {} };
ash.printing.print_preview.mojom.MediaSizeOptionSpec = { $: {} };
ash.printing.print_preview.mojom.MediaSizeCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.MediaTypeOptionSpec = { $: {} };
ash.printing.print_preview.mojom.MediaTypeCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.DpiOptionSpec = { $: {} };
ash.printing.print_preview.mojom.DpiCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.PinCapabilitySpec = { $: {} };
ash.printing.print_preview.mojom.CapabilitiesSpec = { $: {} };

// Enum: ColorType
ash.printing.print_preview.mojom.ColorType = {
  kStandardColor: 0,
  kStandardMonochrome: 1,
  kCustomColor: 2,
  kCustomMonochrome: 3,
  kAutoColor: 4,
};

// Enum: DuplexType
ash.printing.print_preview.mojom.DuplexType = {
  kNoDuplex: 0,
  kLongEdge: 1,
  kShortEdge: 2,
};

// Enum: PageOrientation
ash.printing.print_preview.mojom.PageOrientation = {
  kPortrait: 0,
  kLandscape: 1,
  kAuto: 2,
};

// Struct: ColorOption
mojo.internal.Struct(
    ash.printing.print_preview.mojom.ColorOptionSpec, 'ash.printing.print_preview.mojom.ColorOption', [
      mojo.internal.StructField('type', 0, 0, ash.printing.print_preview.mojom.ColorTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('vendor_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('custom_display_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_default_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' }),
      mojo.internal.StructField('is_default_$value', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' }),
    ],
    [[0, 40]]);

// Struct: ColorCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.ColorCapabilitySpec, 'ash.printing.print_preview.mojom.ColorCapability', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(ash.printing.print_preview.mojom.ColorOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' }),
      mojo.internal.StructField('reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: CollateCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.CollateCapabilitySpec, 'ash.printing.print_preview.mojom.CollateCapability', [
      mojo.internal.StructField('value_default', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CopiesCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.CopiesCapabilitySpec, 'ash.printing.print_preview.mojom.CopiesCapability', [
      mojo.internal.StructField('value_default', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DuplexOption
mojo.internal.Struct(
    ash.printing.print_preview.mojom.DuplexOptionSpec, 'ash.printing.print_preview.mojom.DuplexOption', [
      mojo.internal.StructField('type', 0, 0, ash.printing.print_preview.mojom.DuplexTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' }),
      mojo.internal.StructField('is_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' }),
    ],
    [[0, 24]]);

// Struct: DuplexCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.DuplexCapabilitySpec, 'ash.printing.print_preview.mojom.DuplexCapability', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(ash.printing.print_preview.mojom.DuplexOptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PageOrientationOption
mojo.internal.Struct(
    ash.printing.print_preview.mojom.PageOrientationOptionSpec, 'ash.printing.print_preview.mojom.PageOrientationOption', [
      mojo.internal.StructField('option', 0, 0, ash.printing.print_preview.mojom.PageOrientationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' }),
      mojo.internal.StructField('is_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' }),
    ],
    [[0, 24]]);

// Struct: PageOrientationCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.PageOrientationCapabilitySpec, 'ash.printing.print_preview.mojom.PageOrientationCapability', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(ash.printing.print_preview.mojom.PageOrientationOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' }),
      mojo.internal.StructField('reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: LocalizedString
mojo.internal.Struct(
    ash.printing.print_preview.mojom.LocalizedStringSpec, 'ash.printing.print_preview.mojom.LocalizedString', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaSizeOption
mojo.internal.Struct(
    ash.printing.print_preview.mojom.MediaSizeOptionSpec, 'ash.printing.print_preview.mojom.MediaSizeOption', [
      mojo.internal.StructField('vendor_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('custom_display_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('custom_display_name_localized', 16, 0, mojo.internal.Array(ash.printing.print_preview.mojom.LocalizedStringSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('height_microns', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('width_microns', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('imageable_area_left_microns_$value', 40, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'imageable_area_left_microns_$flag', originalFieldName: 'imageable_area_left_microns' }),
      mojo.internal.StructField('imageable_area_bottom_microns_$value', 44, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'imageable_area_bottom_microns_$flag', originalFieldName: 'imageable_area_bottom_microns' }),
      mojo.internal.StructField('imageable_area_right_microns_$value', 48, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'imageable_area_right_microns_$flag', originalFieldName: 'imageable_area_right_microns' }),
      mojo.internal.StructField('imageable_area_top_microns_$value', 52, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'imageable_area_top_microns_$flag', originalFieldName: 'imageable_area_top_microns' }),
      mojo.internal.StructField('imageable_area_left_microns_$flag', 56, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'imageable_area_left_microns_$value', originalFieldName: 'imageable_area_left_microns' }),
      mojo.internal.StructField('imageable_area_bottom_microns_$flag', 56, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'imageable_area_bottom_microns_$value', originalFieldName: 'imageable_area_bottom_microns' }),
      mojo.internal.StructField('imageable_area_right_microns_$flag', 56, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'imageable_area_right_microns_$value', originalFieldName: 'imageable_area_right_microns' }),
      mojo.internal.StructField('imageable_area_top_microns_$flag', 56, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'imageable_area_top_microns_$value', originalFieldName: 'imageable_area_top_microns' }),
      mojo.internal.StructField('has_borderless_variant_$flag', 56, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'has_borderless_variant_$value', originalFieldName: 'has_borderless_variant' }),
      mojo.internal.StructField('has_borderless_variant_$value', 56, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'has_borderless_variant_$flag', originalFieldName: 'has_borderless_variant' }),
      mojo.internal.StructField('is_default_$flag', 56, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' }),
      mojo.internal.StructField('is_default_$value', 56, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' }),
    ],
    [[0, 72]]);

// Struct: MediaSizeCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.MediaSizeCapabilitySpec, 'ash.printing.print_preview.mojom.MediaSizeCapability', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(ash.printing.print_preview.mojom.MediaSizeOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' }),
      mojo.internal.StructField('reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: MediaTypeOption
mojo.internal.Struct(
    ash.printing.print_preview.mojom.MediaTypeOptionSpec, 'ash.printing.print_preview.mojom.MediaTypeOption', [
      mojo.internal.StructField('vendor_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('custom_display_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('custom_display_name_localized', 16, 0, mojo.internal.Array(ash.printing.print_preview.mojom.LocalizedStringSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_default_$flag', 32, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' }),
      mojo.internal.StructField('is_default_$value', 32, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' }),
    ],
    [[0, 48]]);

// Struct: MediaTypeCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.MediaTypeCapabilitySpec, 'ash.printing.print_preview.mojom.MediaTypeCapability', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(ash.printing.print_preview.mojom.MediaTypeOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' }),
      mojo.internal.StructField('reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: DpiOption
mojo.internal.Struct(
    ash.printing.print_preview.mojom.DpiOptionSpec, 'ash.printing.print_preview.mojom.DpiOption', [
      mojo.internal.StructField('vendor_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('horizontal_dpi', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vertical_dpi', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_default_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' }),
      mojo.internal.StructField('is_default_$value', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' }),
    ],
    [[0, 32]]);

// Struct: DpiCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.DpiCapabilitySpec, 'ash.printing.print_preview.mojom.DpiCapability', [
      mojo.internal.StructField('options', 0, 0, mojo.internal.Array(ash.printing.print_preview.mojom.DpiOptionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reset_to_default_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' }),
      mojo.internal.StructField('reset_to_default_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' }),
    ],
    [[0, 24]]);

// Struct: PinCapability
mojo.internal.Struct(
    ash.printing.print_preview.mojom.PinCapabilitySpec, 'ash.printing.print_preview.mojom.PinCapability', [
      mojo.internal.StructField('supported_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'supported_$value', originalFieldName: 'supported' }),
      mojo.internal.StructField('supported_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'supported_$flag', originalFieldName: 'supported' }),
    ],
    [[0, 16]]);

// Struct: Capabilities
mojo.internal.Struct(
    ash.printing.print_preview.mojom.CapabilitiesSpec, 'ash.printing.print_preview.mojom.Capabilities', [
      mojo.internal.StructField('destination_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('collate', 8, 0, ash.printing.print_preview.mojom.CollateCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('color', 16, 0, ash.printing.print_preview.mojom.ColorCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('copies', 24, 0, ash.printing.print_preview.mojom.CopiesCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('duplex', 32, 0, ash.printing.print_preview.mojom.DuplexCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('page_orientation', 40, 0, ash.printing.print_preview.mojom.PageOrientationCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('media_size', 48, 0, ash.printing.print_preview.mojom.MediaSizeCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('media_type', 56, 0, ash.printing.print_preview.mojom.MediaTypeCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dpi', 64, 0, ash.printing.print_preview.mojom.DpiCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pin', 72, 0, ash.printing.print_preview.mojom.PinCapabilitySpec.$, null, true, 0, undefined),
    ],
    [[0, 88]]);
