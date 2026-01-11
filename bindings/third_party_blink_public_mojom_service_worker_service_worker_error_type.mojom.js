// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_error_type.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerErrorTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.ServiceWorkerResponseErrorSpec = { $: mojo.internal.Enum() };

// Enum: ServiceWorkerErrorType
blink.mojom.ServiceWorkerErrorType = {
  kNone: 0,
  kAbort: 1,
  kActivate: 2,
  kDisabled: 3,
  kInstall: 4,
  kNavigation: 5,
  kNetwork: 6,
  kNotFound: 7,
  kScriptEvaluateFailed: 8,
  kSecurity: 9,
  kState: 10,
  kTimeout: 11,
  kType: 12,
  kUnknown: 13,
};

// Enum: ServiceWorkerResponseError
blink.mojom.ServiceWorkerResponseError = {
  kUnknown: 0,
  kPromiseRejected: 1,
  kDefaultPrevented: 2,
  kNoV8Instance: 3,
  kResponseTypeError: 4,
  kResponseTypeOpaque: 5,
  kResponseTypeNotBasicOrDefault: 6,
  kBodyUsed: 7,
  kResponseTypeOpaqueForClientRequest: 8,
  kResponseTypeOpaqueRedirect: 9,
  kBodyLocked: 10,
  kRedirectedResponseForNotFollowRequest: 11,
  kDataPipeCreationFailed: 12,
  kResponseTypeCorsForRequestModeSameOrigin: 13,
  kResponseBodyBroken: 14,
  kDisallowedByCorp: 15,
  kRequestBodyUnusable: 16,
};
