// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/safe_url_pattern.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Modifier
blink.mojom.Modifier = {
  kZeroOrMore: 0,
  kOptional: 1,
  kOneOrMore: 2,
  kNone: 3,
};

// Struct: SafeUrlPattern
blink.mojom.SafeUrlPatternSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SafeUrlPattern',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FixedPattern
blink.mojom.FixedPatternSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FixedPattern',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WildcardPattern
blink.mojom.WildcardPatternSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WildcardPattern',
      packedSize: 16,
      fields: [
        { name: 'suffix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SafeUrlPatternPart
blink.mojom.SafeUrlPatternPartSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SafeUrlPatternPart',
      packedSize: 16,
      fields: [
        { name: 'modifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SafeUrlPatternOptions
blink.mojom.SafeUrlPatternOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SafeUrlPatternOptions',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
