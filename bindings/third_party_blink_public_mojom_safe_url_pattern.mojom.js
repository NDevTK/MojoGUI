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
blink.mojom.ModifierSpec = { $: mojo.internal.Enum() };

// Union: PatternTemplate
blink.mojom.PatternTemplateSpec = { $: mojo.internal.Union(
    'blink.mojom.PatternTemplate', {
      'fixed': {
        'ordinal': 0,
        'type': blink.mojom.FixedPatternSpec,
      }},
      'full_wildcard': {
        'ordinal': 1,
        'type': blink.mojom.WildcardPatternSpec,
      }},
      'segment_wildcard': {
        'ordinal': 2,
        'type': blink.mojom.WildcardPatternSpec,
      }},
    })
};

// Struct: SafeUrlPattern
blink.mojom.SafeUrlPatternSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SafeUrlPattern',
      packedSize: 80,
      fields: [
        { name: 'protocol', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), nullable: false, minVersion: 0 },
        { name: 'username', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), nullable: false, minVersion: 0 },
        { name: 'password', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), nullable: false, minVersion: 0 },
        { name: 'hostname', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), nullable: false, minVersion: 0 },
        { name: 'pathname', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), nullable: false, minVersion: 0 },
        { name: 'search', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), nullable: false, minVersion: 0 },
        { name: 'hash', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.SafeUrlPatternOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
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
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'prefix', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'suffix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SafeUrlPatternPart
blink.mojom.SafeUrlPatternPartSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SafeUrlPatternPart',
      packedSize: 32,
      fields: [
        { name: 'pattern', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PatternTemplateSpec, nullable: false, minVersion: 0 },
        { name: 'modifier', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ModifierSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'ignore_case', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
