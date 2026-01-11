// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/font.mojom
// Module: remote_cocoa.mojom

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};

remote_cocoa.mojom.SystemFontSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.FontWeightSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.FontNameSpec = { $: {} };
remote_cocoa.mojom.FontSpec = { $: {} };

// Enum: SystemFont
remote_cocoa.mojom.SystemFont = {
  kGeneral: 0,
  kMenu: 1,
  kToolTip: 2,
};

// Enum: FontWeight
remote_cocoa.mojom.FontWeight = {
  kThin: 100,
  kExtraLight: 200,
  kLight: 300,
  kNormal: 400,
  kMedium: 500,
  kSemibold: 600,
  kBold: 700,
  kExtraBold: 800,
  kBlack: 900,
};

// Union: FontName
mojo.internal.Union(
    remote_cocoa.mojom.FontNameSpec, 'remote_cocoa.mojom.FontName', {
      'system_font': {
        'ordinal': 0,
        'type': remote_cocoa.mojom.SystemFontSpec.$,
        'nullable': false,
      },
      'regular_font': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: Font
mojo.internal.Struct(
    remote_cocoa.mojom.FontSpec, 'remote_cocoa.mojom.Font', [
      mojo.internal.StructField('name', 0, 0, remote_cocoa.mojom.FontNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight', 8, 0, remote_cocoa.mojom.FontWeightSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('style', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);
