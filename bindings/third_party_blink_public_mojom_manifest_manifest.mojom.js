// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: TextDirection
blink.mojom.TextDirection = {
  kAuto: 0,
  kLTR: 1,
  kRTL: 2,
};

// Enum: Purpose
blink.mojom.Purpose = {
  ANY: 0,
  MONOCHROME: 1,
  MASKABLE: 2,
};

// Enum: FormFactor
blink.mojom.FormFactor = {
  kUnknown: 0,
  kWide: 1,
  kNarrow: 2,
};

// Enum: Method
blink.mojom.Method = {
  kGet: 0,
  kPost: 1,
};

// Enum: Enctype
blink.mojom.Enctype = {
  kFormUrlEncoded: 0,
  kMultipartFormData: 1,
};

// Enum: LaunchType
blink.mojom.LaunchType = {
  kSingleClient: 0,
  kMultipleClients: 1,
};

// Enum: ManifestMigrationBehavior
blink.mojom.ManifestMigrationBehavior = {
  kSuggest: 0,
  kForce: 1,
};

// Enum: TabStripMemberVisibility
blink.mojom.TabStripMemberVisibility = {
  kAuto: 0,
  kAbsent: 1,
};

// Enum: ManifestRequestResult
blink.mojom.ManifestRequestResult = {
  kUnexpectedFailure: 0,
  kNoManifestAllowed: 1,
  kNoManifestSpecified: 2,
  kManifestFailedToFetch: 3,
  kManifestFailedToParse: 4,
  kSuccess: 5,
};
