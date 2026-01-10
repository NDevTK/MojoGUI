// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/font.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: SystemFont
remote_cocoa.mojom.mojom.SystemFont = {
  kGeneral: 0,
  kMenu: 1,
  kToolTip: 2,
};
remote_cocoa.mojom.mojom.SystemFontSpec = { $: mojo.internal.Enum() };

// Enum: FontWeight
remote_cocoa.mojom.mojom.FontWeight = {
  kThin: 0,
  kExtraLight: 1,
  kLight: 2,
  kNormal: 3,
  kMedium: 4,
  kSemibold: 5,
  kBold: 6,
  kExtraBold: 7,
  kBlack: 8,
};
remote_cocoa.mojom.mojom.FontWeightSpec = { $: mojo.internal.Enum() };

// Union: FontName
remote_cocoa.mojom.mojom.FontNameSpec = { $: mojo.internal.Union(
    'remote_cocoa.mojom.FontName', {
      'system_font': {
        'ordinal': 0,
        'type': remote_cocoa.mojom.SystemFontSpec,
      }},
      'regular_font': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: Font
remote_cocoa.mojom.mojom.FontSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Font',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: remote_cocoa.mojom.FontNameSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'weight', packedOffset: 24, packedBitOffset: 0, type: remote_cocoa.mojom.FontWeightSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
