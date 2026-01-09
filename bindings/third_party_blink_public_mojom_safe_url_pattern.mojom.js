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
      packedSize: 80,
      fields: [
        { name: 'protocol', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'username', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'password', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hostname', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'port', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'pathname', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'search', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hash', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'options', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.SafeUrlPatternOptionsSpec, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'prefix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'suffix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'pattern', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'modifier', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ModifierSpec, nullable: false },
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
        { name: 'ignore_case', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
