// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_common.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AIManagerCreateClientErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.AILanguageCodeSpec = { $: {} };
blink.mojom.QuotaErrorInfoSpec = { $: {} };

blink.mojom.kWritingAssistanceMaxInputTokenSize = 6000;

// Enum: AIManagerCreateClientError
blink.mojom.AIManagerCreateClientError = {
  kUnableToCreateSession: 0,
  kUnableToCalculateTokenSize: 1,
  kInitialInputTooLarge: 2,
  kUnsupportedLanguage: 3,
};

// Struct: AILanguageCode
mojo.internal.Struct(
    blink.mojom.AILanguageCodeSpec, 'blink.mojom.AILanguageCode', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: QuotaErrorInfo
mojo.internal.Struct(
    blink.mojom.QuotaErrorInfoSpec, 'blink.mojom.QuotaErrorInfo', [
      mojo.internal.StructField('requested', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('quota', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
