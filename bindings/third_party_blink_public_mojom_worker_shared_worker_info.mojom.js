// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_info.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};


// Enum: SharedWorkerSameSiteCookies
blink.mojom.SharedWorkerSameSiteCookies = {
  kAll: 0,
  kNone: 1,
};
blink.mojom.SharedWorkerSameSiteCookiesSpec = { $: mojo.internal.Enum() };

// Struct: SharedWorkerInfo
blink.mojom.SharedWorkerInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorkerInfo',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WorkerOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'content_security_policies', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ContentSecurityPolicySpec, false), nullable: false, minVersion: 0 },
        { name: 'outside_fetch_client_settings_object', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.FetchClientSettingsObjectSpec, nullable: false, minVersion: 0 },
        { name: 'same_site_cookies', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SharedWorkerSameSiteCookiesSpec, nullable: false, minVersion: 0 },
        { name: 'extended_lifetime', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};
