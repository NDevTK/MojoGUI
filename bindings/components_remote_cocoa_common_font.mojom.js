// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/font.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: SystemFont
remote_cocoa.mojom.SystemFont = {
  kGeneral: 0,
  kMenu: 1,
  kToolTip: 2,
};

// Enum: FontWeight
remote_cocoa.mojom.FontWeight = {
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

// Struct: Font
remote_cocoa.mojom.FontSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.Font',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'weight', packedOffset: 8, packedBitOffset: 0, type: remote_cocoa.mojom.FontWeightSpec, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'style', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
