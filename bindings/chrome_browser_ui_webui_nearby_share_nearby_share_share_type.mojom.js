// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/nearby_share/nearby_share_share_type.mojom
// Module: nearby_share.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var nearby_share = nearby_share || {};
nearby_share.mojom = nearby_share.mojom || {};

nearby_share.mojom.ShareTypeSpec = { $: mojo.internal.Enum() };

// Enum: ShareType
nearby_share.mojom.ShareType = {
  kText: 0,
  kUrl: 1,
  kPhone: 2,
  kAddress: 3,
  kMultipleFiles: 4,
  kImageFile: 5,
  kVideoFile: 6,
  kAudioFile: 7,
  kPdfFile: 8,
  kGoogleDocsFile: 9,
  kGoogleSheetsFile: 10,
  kGoogleSlidesFile: 11,
  kUnknownFile: 12,
  kWifiCredentials: 13,
};
