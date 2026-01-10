// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/fetch_client_settings_object.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Enum: InsecureRequestsPolicy
blink.mojom.InsecureRequestsPolicy = {
  kDoNotUpgrade: 0,
  kUpgrade: 1,
};
blink.mojom.InsecureRequestsPolicySpec = { $: mojo.internal.Enum() };

// Struct: FetchClientSettingsObject
blink.mojom.FetchClientSettingsObjectSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchClientSettingsObject',
      packedSize: 24,
      fields: [
        { name: 'referrer_policy', packedOffset: 8, packedBitOffset: 0, type: network.mojom.ReferrerPolicySpec, nullable: false, minVersion: 0 },
        { name: 'outgoing_referrer', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'insecure_requests_policy', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.InsecureRequestsPolicySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
