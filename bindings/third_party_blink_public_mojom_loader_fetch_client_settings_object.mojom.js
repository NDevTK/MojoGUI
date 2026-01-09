// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/fetch_client_settings_object.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: InsecureRequestsPolicy
blink.mojom.InsecureRequestsPolicy = {
  kDoNotUpgrade: 0,
  kUpgrade: 1,
};

// Struct: FetchClientSettingsObject
blink.mojom.FetchClientSettingsObjectSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FetchClientSettingsObject',
      packedSize: 16,
      fields: [
        { name: 'insecure_requests_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
