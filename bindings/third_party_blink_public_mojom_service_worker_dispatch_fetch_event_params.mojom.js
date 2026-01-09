// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/dispatch_fetch_event_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DispatchFetchEventParams
blink.mojom.DispatchFetchEventParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DispatchFetchEventParams',
      packedSize: 40,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FetchAPIRequestSpec, nullable: false },
        { name: 'client_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'resulting_client_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'preload_url_loader_client_receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'race_network_request_loader_factory', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
