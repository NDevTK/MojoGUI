// Auto-generated MojoJS binding
// Source: chromium_src/components/compose/core/browser/compose_enums.mojom
// Module: compose.mojom

'use strict';

// Module namespace
var compose = compose || {};
compose.mojom = compose.mojom || {};

compose.mojom.ComposeStatusSpec = { $: mojo.internal.Enum() };

// Enum: ComposeStatus
compose.mojom.ComposeStatus = {
  kOk: 0,
  kClientError: 1,
  kMisconfiguration: 5,
  kPermissionDenied: 6,
  kServerError: 7,
  kInvalidRequest: 8,
  kRequestThrottled: 9,
  kRetryableError: 10,
  kNonRetryableError: 11,
  kUnsupportedLanguage: 12,
  kFiltered: 13,
  kDisabled: 14,
  kCancelled: 15,
  kNoResponse: 16,
  kOffline: 17,
  kRequestTimeout: 18,
};
