// Auto-generated MojoJS binding
// Source: chromium_src/components/omnibox/composebox/composebox_query.mojom
// Module: composebox_query.mojom

'use strict';

// Module namespace
var composebox_query = composebox_query || {};
composebox_query.mojom = composebox_query.mojom || {};


// Enum: FileUploadStatus
composebox_query.mojom.mojom.FileUploadStatus = {
  kNotUploaded: 0,
  kProcessing: 1,
  kValidationFailed: 2,
  kUploadStarted: 3,
  kUploadSuccessful: 4,
  kUploadFailed: 5,
  kUploadExpired: 6,
  kProcessingSuggestSignalsReady: 7,
};
composebox_query.mojom.mojom.FileUploadStatusSpec = { $: mojo.internal.Enum() };

// Enum: FileUploadErrorType
composebox_query.mojom.mojom.FileUploadErrorType = {
  kUnknown: 0,
  kBrowserProcessingError: 1,
  kNetworkError: 2,
  kServerError: 3,
  kServerSizeLimitExceeded: 4,
  kAborted: 5,
  kImageProcessingError: 6,
};
composebox_query.mojom.mojom.FileUploadErrorTypeSpec = { $: mojo.internal.Enum() };
