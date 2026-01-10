// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/safe_url_pattern.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ModifierSpec = { $: mojo.internal.Enum() };
blink.mojom.PatternTemplateSpec = { $: {} };
blink.mojom.SafeUrlPatternSpec = { $: {} };
blink.mojom.FixedPatternSpec = { $: {} };
blink.mojom.WildcardPatternSpec = { $: {} };
blink.mojom.SafeUrlPatternPartSpec = { $: {} };
blink.mojom.SafeUrlPatternOptionsSpec = { $: {} };

// Enum: Modifier
blink.mojom.Modifier = {
  kZeroOrMore: 0,
  kOptional: 1,
  kOneOrMore: 2,
  kNone: 3,
};

// Union: PatternTemplate
mojo.internal.Union(
    blink.mojom.PatternTemplateSpec, 'blink.mojom.PatternTemplate', {
      'fixed': {
        'ordinal': 0,
        'type': blink.mojom.FixedPatternSpec,
        'nullable': false,
      },
      'full_wildcard': {
        'ordinal': 1,
        'type': blink.mojom.WildcardPatternSpec,
        'nullable': false,
      },
      'segment_wildcard': {
        'ordinal': 2,
        'type': blink.mojom.WildcardPatternSpec,
        'nullable': false,
      },
    });

// Struct: SafeUrlPattern
mojo.internal.Struct(
    blink.mojom.SafeUrlPatternSpec, 'blink.mojom.SafeUrlPattern', [
      mojo.internal.StructField('protocol', 0, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('username', 8, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('password', 16, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('hostname', 24, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('pathname', 40, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('search', 48, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('hash', 56, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternPartSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('options', 64, 0, blink.mojom.SafeUrlPatternOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: FixedPattern
mojo.internal.Struct(
    blink.mojom.FixedPatternSpec, 'blink.mojom.FixedPattern', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WildcardPattern
mojo.internal.Struct(
    blink.mojom.WildcardPatternSpec, 'blink.mojom.WildcardPattern', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('prefix', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suffix', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SafeUrlPatternPart
mojo.internal.Struct(
    blink.mojom.SafeUrlPatternPartSpec, 'blink.mojom.SafeUrlPatternPart', [
      mojo.internal.StructField('pattern', 0, 0, blink.mojom.PatternTemplateSpec, null, false, 0, undefined),
      mojo.internal.StructField('modifier', 16, 0, blink.mojom.ModifierSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SafeUrlPatternOptions
mojo.internal.Struct(
    blink.mojom.SafeUrlPatternOptionsSpec, 'blink.mojom.SafeUrlPatternOptions', [
      mojo.internal.StructField('ignore_case', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
