// Auto-generated MojoJS binding
// Source: chromium_src/components/compose/core/browser/compose_enums.mojom
// Module: compose.mojom

'use strict';

// Module namespace
var compose = compose || {};
compose.mojom = compose.mojom || {};


// Enum: ComposeStatus
compose.mojom.ComposeStatus = {
  kOk: 0,
  kClientError: 1,
  kMisconfiguration: 2,
  kPermissionDenied: 3,
  kServerError: 4,
  kInvalidRequest: 5,
  kRequestThrottled: 6,
  kRetryableError: 7,
  kNonRetryableError: 8,
  kUnsupportedLanguage: 9,
  kFiltered: 10,
  kDisabled: 11,
  kCancelled: 12,
  kNoResponse: 13,
  kOffline: 14,
  kRequestTimeout: 15,
};
compose.mojom.ComposeStatusSpec = { $: mojo.internal.Enum() };
