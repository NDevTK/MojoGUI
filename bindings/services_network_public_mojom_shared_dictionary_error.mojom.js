// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/shared_dictionary_error.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: SharedDictionaryError
network.mojom.mojom.SharedDictionaryError = {
  kUseErrorCrossOriginNoCorsRequest: 0,
  kUseErrorDictionaryLoadFailure: 1,
  kUseErrorMatchingDictionaryNotUsed: 2,
  kUseErrorUnexpectedContentDictionaryHeader: 3,
  kWriteErrorAlreadyRegistered: 4,
  kWriteErrorCossOriginNoCorsRequest: 5,
  kWriteErrorDisallowedBySettings: 6,
  kWriteErrorExpiredResponse: 7,
  kWriteErrorFeatureDisabled: 8,
  kWriteErrorInsufficientResources: 9,
  kWriteErrorInvalidMatchField: 10,
  kWriteErrorInvalidStructuredHeader: 11,
  kWriteErrorInvalidTTLField: 12,
  kWriteErrorNavigationRequest: 13,
  kWriteErrorNoMatchField: 14,
  kWriteErrorNonIntegerTTLField: 15,
  kWriteErrorNonListMatchDestField: 16,
  kWriteErrorNonSecureContext: 17,
  kWriteErrorNonStringIdField: 18,
  kWriteErrorNonStringInMatchDestList: 19,
  kWriteErrorNonStringMatchField: 20,
  kWriteErrorNonTokenTypeField: 21,
  kWriteErrorRequestAborted: 22,
  kWriteErrorShuttingDown: 23,
  kWriteErrorTooLongIdField: 24,
  kWriteErrorUnsupportedType: 25,
};
network.mojom.mojom.SharedDictionaryErrorSpec = { $: mojo.internal.Enum() };
