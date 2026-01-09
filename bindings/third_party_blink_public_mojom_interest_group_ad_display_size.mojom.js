// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/interest_group/ad_display_size.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: LengthUnit
blink.mojom.LengthUnit = {
  kPixels: 0,
  kScreenWidth: 1,
  kScreenHeight: 2,
};

// Struct: AdSize
blink.mojom.AdSizeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdSize',
      packedSize: 16,
      fields: [
        { name: 'kInvalid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AdDescriptor
blink.mojom.AdDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AdDescriptor',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AdSizeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
