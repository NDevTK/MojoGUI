// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worker_main_script_load_params.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};

blink.mojom.WorkerMainScriptLoadParamsSpec = { $: {} };

// Struct: WorkerMainScriptLoadParams
mojo.internal.Struct(
    blink.mojom.WorkerMainScriptLoadParamsSpec, 'blink.mojom.WorkerMainScriptLoadParams', [
      mojo.internal.StructField('response_head', 0, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_body', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('url_loader_client_endpoints', 16, 0, network.mojom.URLLoaderClientEndpointsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('redirect_infos', 24, 0, mojo.internal.Array(network.mojom.URLRequestRedirectInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('redirect_response_heads', 32, 0, mojo.internal.Array(network.mojom.URLResponseHeadSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('request_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);
