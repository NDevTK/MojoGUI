// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/fetch_client_settings_object.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};
var services = services || {};

blink.mojom.InsecureRequestsPolicySpec = { $: mojo.internal.Enum() };
blink.mojom.FetchClientSettingsObjectSpec = { $: {} };

// Enum: InsecureRequestsPolicy
blink.mojom.InsecureRequestsPolicy = {
  kDoNotUpgrade: 0,
  kUpgrade: 1,
};

// Struct: FetchClientSettingsObject
mojo.internal.Struct(
    blink.mojom.FetchClientSettingsObjectSpec, 'blink.mojom.FetchClientSettingsObject', [
      mojo.internal.StructField('referrer_policy', 0, 0, network.mojom.ReferrerPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('outgoing_referrer', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('insecure_requests_policy', 16, 0, blink.mojom.InsecureRequestsPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
