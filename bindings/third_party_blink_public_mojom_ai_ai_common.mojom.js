// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_common.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AIManagerCreateClientError
blink.mojom.AIManagerCreateClientError = {
  kUnableToCreateSession: 0,
  kUnableToCalculateTokenSize: 1,
  kInitialInputTooLarge: 2,
  kUnsupportedLanguage: 3,
};

// Struct: AILanguageCode
blink.mojom.AILanguageCodeSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AILanguageCode',
      packedSize: 16,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: QuotaErrorInfo
blink.mojom.QuotaErrorInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.QuotaErrorInfo',
      packedSize: 16,
      fields: [
        { name: 'requested', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'quota', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
