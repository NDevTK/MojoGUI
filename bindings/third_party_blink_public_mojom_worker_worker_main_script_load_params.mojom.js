// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worker_main_script_load_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WorkerMainScriptLoadParams
blink.mojom.WorkerMainScriptLoadParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WorkerMainScriptLoadParams',
      packedSize: 56,
      fields: [
        { name: 'request_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'response_head', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false },
        { name: 'response_body', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'url_loader_client_endpoints', packedOffset: 32, packedBitOffset: 0, type: network.mojom.URLLoaderClientEndpointsSpec, nullable: true },
        { name: 'redirect_infos', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'redirect_response_heads', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
