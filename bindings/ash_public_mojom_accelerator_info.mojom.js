// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/accelerator_info.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};


// Enum: AcceleratorSource
ash.mojom.AcceleratorSource = {
  kAsh: 0,
  kEventRewriter: 1,
  kBrowser: 2,
  kAmbient: 3,
  kAndroid: 4,
};

// Enum: AcceleratorType
ash.mojom.AcceleratorType = {
  kDefault: 0,
  kUser: 1,
  kDeprecated: 2,
  kDeveloper: 3,
  kDebug: 4,
};

// Enum: AcceleratorState
ash.mojom.AcceleratorState = {
  kEnabled: 0,
  kDisabledByConflict: 1,
  kDisabledByUser: 2,
  kDisabledByUnavailableKeys: 3,
};

// Enum: AcceleratorLayoutStyle
ash.mojom.AcceleratorLayoutStyle = {
  kDefault: 0,
  kText: 1,
};

// Enum: AcceleratorCategory
ash.mojom.AcceleratorCategory = {
  kGeneral: 0,
  kDevice: 1,
  kBrowser: 2,
  kText: 3,
  kWindowsAndDesks: 4,
  kAccessibility: 5,
  kDebug: 6,
  kDeveloper: 7,
};

// Enum: AcceleratorSubcategory
ash.mojom.AcceleratorSubcategory = {
  kGeneralControls: 0,
  kApps: 1,
  kMedia: 2,
  kInputs: 3,
  kDisplay: 4,
  kGeneral: 5,
  kBrowserNavigation: 6,
  kPages: 7,
  kTabs: 8,
  kBookmarks: 9,
  kDeveloperTools: 10,
  kTextNavigation: 11,
  kTextEditing: 12,
  kWindows: 13,
  kDesks: 14,
  kChromeVox: 15,
  kMouseKeys: 16,
  kVisibility: 17,
  kAccessibilityNavigation: 18,
};

// Enum: TextAcceleratorPartType
ash.mojom.TextAcceleratorPartType = {
  kPlainText: 0,
  kModifier: 1,
  kKey: 2,
  kDelimiter: 3,
};

// Struct: TextAcceleratorPart
ash.mojom.TextAcceleratorPartSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.TextAcceleratorPart',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextAcceleratorProperties
ash.mojom.TextAcceleratorPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.TextAcceleratorProperties',
      packedSize: 16,
      fields: [
        { name: 'parts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StandardAcceleratorProperties
ash.mojom.StandardAcceleratorPropertiesSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.StandardAcceleratorProperties',
      packedSize: 32,
      fields: [
        { name: 'accelerator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'key_display', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'original_accelerator', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AcceleratorInfo
ash.mojom.AcceleratorInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.AcceleratorInfo',
      packedSize: 40,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'layout_properties', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'locked', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'accelerator_locked', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AcceleratorLayoutInfo
ash.mojom.AcceleratorLayoutInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.AcceleratorLayoutInfo',
      packedSize: 56,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sub_category', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'style', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
