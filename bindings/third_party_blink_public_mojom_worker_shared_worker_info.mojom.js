// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_info.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};
var url = url || {};

blink.mojom.SharedWorkerSameSiteCookiesSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedWorkerInfoSpec = { $: {} };

// Enum: SharedWorkerSameSiteCookies
blink.mojom.SharedWorkerSameSiteCookies = {
  kAll: 0,
  kNone: 1,
};

// Struct: SharedWorkerInfo
mojo.internal.Struct(
    blink.mojom.SharedWorkerInfoSpec, 'blink.mojom.SharedWorkerInfo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.WorkerOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_security_policies', 16, 0, mojo.internal.Array(network.mojom.ContentSecurityPolicySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('outside_fetch_client_settings_object', 24, 0, blink.mojom.FetchClientSettingsObjectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('same_site_cookies', 32, 0, blink.mojom.SharedWorkerSameSiteCookiesSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('extended_lifetime', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);
