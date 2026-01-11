// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/ad_display_size.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.LengthUnitSpec = { $: mojo.internal.Enum() };
blink.mojom.AdSizeSpec = { $: {} };
blink.mojom.AdDescriptorSpec = { $: {} };

// Enum: LengthUnit
blink.mojom.LengthUnit = {
  kInvalid: 0,
  kPixels: 1,
  kScreenWidth: 2,
  kScreenHeight: 3,
};

// Struct: AdSize
mojo.internal.Struct(
    blink.mojom.AdSizeSpec, 'blink.mojom.AdSize', [
      mojo.internal.StructField('kInvalid', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AdDescriptor
mojo.internal.Struct(
    blink.mojom.AdDescriptorSpec, 'blink.mojom.AdDescriptor', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, blink.mojom.AdSizeSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);
