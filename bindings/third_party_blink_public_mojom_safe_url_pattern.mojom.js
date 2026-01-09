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
        { name: 'protocol', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'username', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'password', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hostname', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'port', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'pathname', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'search', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hash', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'options', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.SafeUrlPatternOptionsSpec, nullable: false },
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
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'prefix', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'suffix', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
        { name: 'pattern', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PatternTemplateSpec, nullable: false },
        { name: 'modifier', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ModifierSpec, nullable: false },
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
        { name: 'ignore_case', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
