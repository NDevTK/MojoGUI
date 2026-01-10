// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/color_space.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Enum: ColorSpacePrimaryID
gfx.mojom.ColorSpacePrimaryID = {
  INVALID: 0,
  BT709: 1,
  BT470M: 2,
  BT470BG: 3,
  SMPTE170M: 4,
  SMPTE240M: 5,
  FILM: 6,
  BT2020: 7,
  SMPTEST428_1: 8,
  SMPTEST431_2: 9,
  P3: 10,
  XYZ_D50: 11,
  ADOBE_RGB: 12,
  APPLE_GENERIC_RGB: 13,
  WIDE_GAMUT_COLOR_SPIN: 14,
  CUSTOM: 15,
  EBU_3213_E: 16,
};
gfx.mojom.ColorSpacePrimaryIDSpec = { $: mojo.internal.Enum() };

// Enum: ColorSpaceTransferID
gfx.mojom.ColorSpaceTransferID = {
  INVALID: 0,
  BT709: 1,
  BT709_APPLE: 2,
  GAMMA18: 3,
  GAMMA22: 4,
  GAMMA24: 5,
  GAMMA28: 6,
  SMPTE170M: 7,
  SMPTE240M: 8,
  LINEAR: 9,
  LOG: 10,
  LOG_SQRT: 11,
  IEC61966_2_4: 12,
  BT1361_ECG: 13,
  SRGB: 14,
  BT2020_10: 15,
  BT2020_12: 16,
  PQ: 17,
  SMPTEST428_1: 18,
  HLG: 19,
  SRGB_HDR: 20,
  LINEAR_HDR: 21,
  CUSTOM: 22,
  CUSTOM_HDR: 23,
  SCRGB_LINEAR_80_NITS: 24,
};
gfx.mojom.ColorSpaceTransferIDSpec = { $: mojo.internal.Enum() };

// Enum: ColorSpaceMatrixID
gfx.mojom.ColorSpaceMatrixID = {
  INVALID: 0,
  RGB: 1,
  BT709: 2,
  FCC: 3,
  BT470BG: 4,
  SMPTE170M: 5,
  SMPTE240M: 6,
  YCOCG: 7,
  BT2020_NCL: 8,
  YDZDX: 9,
  GBR: 10,
};
gfx.mojom.ColorSpaceMatrixIDSpec = { $: mojo.internal.Enum() };

// Enum: ColorSpaceRangeID
gfx.mojom.ColorSpaceRangeID = {
  INVALID: 0,
  LIMITED: 1,
  FULL: 2,
  DERIVED: 3,
};
gfx.mojom.ColorSpaceRangeIDSpec = { $: mojo.internal.Enum() };

// Struct: ColorSpace
gfx.mojom.ColorSpaceSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.ColorSpace',
      packedSize: 40,
      fields: [
        { name: 'primaries', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.ColorSpacePrimaryIDSpec, nullable: false, minVersion: 0 },
        { name: 'transfer', packedOffset: 20, packedBitOffset: 0, type: gfx.mojom.ColorSpaceTransferIDSpec, nullable: false, minVersion: 0 },
        { name: 'matrix', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.ColorSpaceMatrixIDSpec, nullable: false, minVersion: 0 },
        { name: 'range', packedOffset: 28, packedBitOffset: 0, type: gfx.mojom.ColorSpaceRangeIDSpec, nullable: false, minVersion: 0 },
        { name: 'custom_primary_matrix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'transfer_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
