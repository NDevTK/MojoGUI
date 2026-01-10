// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/print_preview_cros/mojom/printer_capabilities.mojom
// Module: ash.printing.print_preview.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.printing = ash.printing || {};
ash.printing.printing.print_preview = ash.printing.printing.print_preview || {};
ash.printing.printing.print_preview.print_preview.mojom = ash.printing.printing.print_preview.print_preview.mojom || {};


// Enum: ColorType
ash.printing.printing.print_preview.print_preview.mojom.mojom.ColorType = {
  kStandardColor: 0,
  kStandardMonochrome: 1,
  kCustomColor: 2,
  kCustomMonochrome: 3,
  kAutoColor: 4,
};
ash.printing.printing.print_preview.print_preview.mojom.mojom.ColorTypeSpec = { $: mojo.internal.Enum() };

// Enum: DuplexType
ash.printing.printing.print_preview.print_preview.mojom.mojom.DuplexType = {
  kNoDuplex: 0,
  kLongEdge: 1,
  kShortEdge: 2,
};
ash.printing.printing.print_preview.print_preview.mojom.mojom.DuplexTypeSpec = { $: mojo.internal.Enum() };

// Enum: PageOrientation
ash.printing.printing.print_preview.print_preview.mojom.mojom.PageOrientation = {
  kPortrait: 0,
  kLandscape: 1,
  kAuto: 2,
};
ash.printing.printing.print_preview.print_preview.mojom.mojom.PageOrientationSpec = { $: mojo.internal.Enum() };

// Struct: ColorOption
ash.printing.printing.print_preview.print_preview.mojom.mojom.ColorOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.ColorOption',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: ash.printing.print_preview.mojom.ColorTypeSpec, nullable: true, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'custom_display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_default_$flag', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' } },
        { name: 'is_default_$value', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ColorCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.ColorCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.ColorCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.printing.print_preview.mojom.ColorOptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'reset_to_default_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' } },
        { name: 'reset_to_default_$value', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CollateCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.CollateCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.CollateCapability',
      packedSize: 16,
      fields: [
        { name: 'value_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CopiesCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.CopiesCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.CopiesCapability',
      packedSize: 16,
      fields: [
        { name: 'value_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DuplexOption
ash.printing.printing.print_preview.print_preview.mojom.mojom.DuplexOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DuplexOption',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.printing.print_preview.mojom.DuplexTypeSpec, nullable: true, minVersion: 0 },
        { name: 'is_default_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' } },
        { name: 'is_default_$value', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DuplexCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.DuplexCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DuplexCapability',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.printing.print_preview.mojom.DuplexOptionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PageOrientationOption
ash.printing.printing.print_preview.print_preview.mojom.mojom.PageOrientationOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.PageOrientationOption',
      packedSize: 16,
      fields: [
        { name: 'option', packedOffset: 0, packedBitOffset: 0, type: ash.printing.print_preview.mojom.PageOrientationSpec, nullable: false, minVersion: 0 },
        { name: 'is_default_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' } },
        { name: 'is_default_$value', packedOffset: 4, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PageOrientationCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.PageOrientationCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.PageOrientationCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.printing.print_preview.mojom.PageOrientationOptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'reset_to_default_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' } },
        { name: 'reset_to_default_$value', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LocalizedString
ash.printing.printing.print_preview.print_preview.mojom.mojom.LocalizedStringSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.LocalizedString',
      packedSize: 24,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MediaSizeOption
ash.printing.printing.print_preview.print_preview.mojom.mojom.MediaSizeOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.MediaSizeOption',
      packedSize: 72,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'height_microns', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'width_microns', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'imageable_area_left_microns_$flag', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'imageable_area_left_microns_$value', originalFieldName: 'imageable_area_left_microns' } },
        { name: 'imageable_area_left_microns_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'imageable_area_left_microns_$flag', originalFieldName: 'imageable_area_left_microns' } },
        { name: 'imageable_area_bottom_microns_$flag', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'imageable_area_bottom_microns_$value', originalFieldName: 'imageable_area_bottom_microns' } },
        { name: 'imageable_area_bottom_microns_$value', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'imageable_area_bottom_microns_$flag', originalFieldName: 'imageable_area_bottom_microns' } },
        { name: 'imageable_area_right_microns_$flag', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'imageable_area_right_microns_$value', originalFieldName: 'imageable_area_right_microns' } },
        { name: 'imageable_area_right_microns_$value', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'imageable_area_right_microns_$flag', originalFieldName: 'imageable_area_right_microns' } },
        { name: 'imageable_area_top_microns_$flag', packedOffset: 56, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'imageable_area_top_microns_$value', originalFieldName: 'imageable_area_top_microns' } },
        { name: 'imageable_area_top_microns_$value', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'imageable_area_top_microns_$flag', originalFieldName: 'imageable_area_top_microns' } },
        { name: 'has_borderless_variant_$flag', packedOffset: 56, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'has_borderless_variant_$value', originalFieldName: 'has_borderless_variant' } },
        { name: 'has_borderless_variant_$value', packedOffset: 56, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'has_borderless_variant_$flag', originalFieldName: 'has_borderless_variant' } },
        { name: 'custom_display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'custom_display_name_localized', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.printing.print_preview.mojom.LocalizedStringSpec, false), nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_default_$flag', packedOffset: 56, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' } },
        { name: 'is_default_$value', packedOffset: 56, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' } },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: MediaSizeCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.MediaSizeCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.MediaSizeCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.printing.print_preview.mojom.MediaSizeOptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'reset_to_default_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' } },
        { name: 'reset_to_default_$value', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MediaTypeOption
ash.printing.printing.print_preview.print_preview.mojom.mojom.MediaTypeOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.MediaTypeOption',
      packedSize: 48,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'custom_display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'custom_display_name_localized', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.printing.print_preview.mojom.LocalizedStringSpec, false), nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_default_$flag', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' } },
        { name: 'is_default_$value', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' } },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: MediaTypeCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.MediaTypeCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.MediaTypeCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.printing.print_preview.mojom.MediaTypeOptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'reset_to_default_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' } },
        { name: 'reset_to_default_$value', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DpiOption
ash.printing.printing.print_preview.print_preview.mojom.mojom.DpiOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DpiOption',
      packedSize: 32,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'horizontal_dpi', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'vertical_dpi', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_default_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_default_$value', originalFieldName: 'is_default' } },
        { name: 'is_default_$value', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_default_$flag', originalFieldName: 'is_default' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DpiCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.DpiCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DpiCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.printing.print_preview.mojom.DpiOptionSpec, false), nullable: false, minVersion: 0 },
        { name: 'reset_to_default_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'reset_to_default_$value', originalFieldName: 'reset_to_default' } },
        { name: 'reset_to_default_$value', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'reset_to_default_$flag', originalFieldName: 'reset_to_default' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PinCapability
ash.printing.printing.print_preview.print_preview.mojom.mojom.PinCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.PinCapability',
      packedSize: 16,
      fields: [
        { name: 'supported_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'supported_$value', originalFieldName: 'supported' } },
        { name: 'supported_$value', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'supported_$flag', originalFieldName: 'supported' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Capabilities
ash.printing.printing.print_preview.print_preview.mojom.mojom.CapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.Capabilities',
      packedSize: 88,
      fields: [
        { name: 'destination_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'collate', packedOffset: 8, packedBitOffset: 0, type: ash.printing.print_preview.mojom.CollateCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: ash.printing.print_preview.mojom.ColorCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'copies', packedOffset: 24, packedBitOffset: 0, type: ash.printing.print_preview.mojom.CopiesCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'duplex', packedOffset: 32, packedBitOffset: 0, type: ash.printing.print_preview.mojom.DuplexCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'page_orientation', packedOffset: 40, packedBitOffset: 0, type: ash.printing.print_preview.mojom.PageOrientationCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'media_size', packedOffset: 48, packedBitOffset: 0, type: ash.printing.print_preview.mojom.MediaSizeCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'media_type', packedOffset: 56, packedBitOffset: 0, type: ash.printing.print_preview.mojom.MediaTypeCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'dpi', packedOffset: 64, packedBitOffset: 0, type: ash.printing.print_preview.mojom.DpiCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'pin', packedOffset: 72, packedBitOffset: 0, type: ash.printing.print_preview.mojom.PinCapabilitySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};
