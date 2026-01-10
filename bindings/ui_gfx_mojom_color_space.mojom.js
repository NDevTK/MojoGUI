// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/color_space.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.ColorSpacePrimaryIDSpec = { $: mojo.internal.Enum() };
gfx.mojom.ColorSpaceTransferIDSpec = { $: mojo.internal.Enum() };
gfx.mojom.ColorSpaceMatrixIDSpec = { $: mojo.internal.Enum() };
gfx.mojom.ColorSpaceRangeIDSpec = { $: mojo.internal.Enum() };
gfx.mojom.ColorSpaceSpec = { $: {} };

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

// Enum: ColorSpaceRangeID
gfx.mojom.ColorSpaceRangeID = {
  INVALID: 0,
  LIMITED: 1,
  FULL: 2,
  DERIVED: 3,
};

// Struct: ColorSpace
mojo.internal.Struct(
    gfx.mojom.ColorSpaceSpec, 'gfx.mojom.ColorSpace', [
      mojo.internal.StructField('primaries', 0, 0, gfx.mojom.ColorSpacePrimaryIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transfer', 8, 0, gfx.mojom.ColorSpaceTransferIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('matrix', 16, 0, gfx.mojom.ColorSpaceMatrixIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('range', 24, 0, gfx.mojom.ColorSpaceRangeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('custom_primary_matrix', 32, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('transfer_params', 40, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
    ],
    [[0, 56]]);
