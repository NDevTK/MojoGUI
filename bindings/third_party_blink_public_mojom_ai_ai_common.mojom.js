// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_common.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


blink.mojom.mojom.kWritingAssistanceMaxInputTokenSize = 6000;

// Enum: AIManagerCreateClientError
blink.mojom.mojom.AIManagerCreateClientError = {
  kUnableToCreateSession: 0,
  kUnableToCalculateTokenSize: 1,
  kInitialInputTooLarge: 2,
  kUnsupportedLanguage: 3,
};
blink.mojom.mojom.AIManagerCreateClientErrorSpec = { $: mojo.internal.Enum() };

// Struct: AILanguageCode
blink.mojom.mojom.AILanguageCodeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AILanguageCode',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: QuotaErrorInfo
blink.mojom.mojom.QuotaErrorInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.QuotaErrorInfo',
      packedSize: 16,
      fields: [
        { name: 'requested', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'quota', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
