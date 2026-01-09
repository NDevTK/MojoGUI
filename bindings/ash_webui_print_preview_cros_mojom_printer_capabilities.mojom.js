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
      packedSize: 16,
      fields: [
        { name: 'is_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'reset_to_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
        { name: 'max', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'is_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'is_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'reset_to_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'is_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'reset_to_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'is_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'reset_to_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'is_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'reset_to_default', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'pin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
