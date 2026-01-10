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
        { name: 'request_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'response_head', packedOffset: 0, packedBitOffset: 0, type: network.mojom.URLResponseHeadSpec, nullable: false, minVersion: 0 },
        { name: 'response_body', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'url_loader_client_endpoints', packedOffset: 16, packedBitOffset: 0, type: network.mojom.URLLoaderClientEndpointsSpec, nullable: true, minVersion: 0 },
        { name: 'redirect_infos', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.URLRequestRedirectInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'redirect_response_heads', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.URLResponseHeadSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
