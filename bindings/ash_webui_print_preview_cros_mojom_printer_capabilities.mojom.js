// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/print_preview_cros/mojom/printer_capabilities.mojom
// Module: ash.printing.print_preview.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.printing = ash.printing || {};
ash.printing.print_preview = ash.printing.print_preview || {};
ash.printing.print_preview.mojom = ash.printing.print_preview.mojom || {};


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
ash.printing.print_preview.mojom.ColorOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.ColorOption',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.printing.print_preview.mojom.ColorTypeSpec, nullable: true },
        { name: 'vendor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'custom_display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_default', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ColorCapability
ash.printing.print_preview.mojom.ColorCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.ColorCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'reset_to_default', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CollateCapability
ash.printing.print_preview.mojom.CollateCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.CollateCapability',
      packedSize: 16,
      fields: [
        { name: 'value_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CopiesCapability
ash.printing.print_preview.mojom.CopiesCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.CopiesCapability',
      packedSize: 16,
      fields: [
        { name: 'value_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'max', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DuplexOption
ash.printing.print_preview.mojom.DuplexOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DuplexOption',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.printing.print_preview.mojom.DuplexTypeSpec, nullable: true },
        { name: 'is_default', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DuplexCapability
ash.printing.print_preview.mojom.DuplexCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DuplexCapability',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageOrientationOption
ash.printing.print_preview.mojom.PageOrientationOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.PageOrientationOption',
      packedSize: 24,
      fields: [
        { name: 'option', packedOffset: 0, packedBitOffset: 0, type: ash.printing.print_preview.mojom.PageOrientationSpec, nullable: false },
        { name: 'is_default', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PageOrientationCapability
ash.printing.print_preview.mojom.PageOrientationCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.PageOrientationCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'reset_to_default', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LocalizedString
ash.printing.print_preview.mojom.LocalizedStringSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.LocalizedString',
      packedSize: 24,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaSizeOption
ash.printing.print_preview.mojom.MediaSizeOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.MediaSizeOption',
      packedSize: 80,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'height_microns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'width_microns', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'imageable_area_left_microns', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'imageable_area_bottom_microns', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'imageable_area_right_microns', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'imageable_area_top_microns', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
        { name: 'has_borderless_variant', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
        { name: 'custom_display_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'custom_display_name_localized', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_default', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaSizeCapability
ash.printing.print_preview.mojom.MediaSizeCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.MediaSizeCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'reset_to_default', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaTypeOption
ash.printing.print_preview.mojom.MediaTypeOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.MediaTypeOption',
      packedSize: 48,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'custom_display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'custom_display_name_localized', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_default', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MediaTypeCapability
ash.printing.print_preview.mojom.MediaTypeCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.MediaTypeCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'reset_to_default', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DpiOption
ash.printing.print_preview.mojom.DpiOptionSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DpiOption',
      packedSize: 32,
      fields: [
        { name: 'vendor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'horizontal_dpi', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'vertical_dpi', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_default', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DpiCapability
ash.printing.print_preview.mojom.DpiCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.DpiCapability',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'reset_to_default', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PinCapability
ash.printing.print_preview.mojom.PinCapabilitySpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.PinCapability',
      packedSize: 16,
      fields: [
        { name: 'supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Capabilities
ash.printing.print_preview.mojom.CapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.printing.print_preview.mojom.Capabilities',
      packedSize: 88,
      fields: [
        { name: 'destination_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'collate', packedOffset: 8, packedBitOffset: 0, type: ash.printing.print_preview.mojom.CollateCapabilitySpec, nullable: true },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: ash.printing.print_preview.mojom.ColorCapabilitySpec, nullable: true },
        { name: 'copies', packedOffset: 24, packedBitOffset: 0, type: ash.printing.print_preview.mojom.CopiesCapabilitySpec, nullable: true },
        { name: 'duplex', packedOffset: 32, packedBitOffset: 0, type: ash.printing.print_preview.mojom.DuplexCapabilitySpec, nullable: true },
        { name: 'page_orientation', packedOffset: 40, packedBitOffset: 0, type: ash.printing.print_preview.mojom.PageOrientationCapabilitySpec, nullable: true },
        { name: 'media_size', packedOffset: 48, packedBitOffset: 0, type: ash.printing.print_preview.mojom.MediaSizeCapabilitySpec, nullable: true },
        { name: 'media_type', packedOffset: 56, packedBitOffset: 0, type: ash.printing.print_preview.mojom.MediaTypeCapabilitySpec, nullable: true },
        { name: 'dpi', packedOffset: 64, packedBitOffset: 0, type: ash.printing.print_preview.mojom.DpiCapabilitySpec, nullable: true },
        { name: 'pin', packedOffset: 72, packedBitOffset: 0, type: ash.printing.print_preview.mojom.PinCapabilitySpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
