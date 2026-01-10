// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/dispatch_fetch_event_params.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.DispatchFetchEventParamsSpec = { $: {} };

// Struct: DispatchFetchEventParams
mojo.internal.Struct(
    blink.mojom.DispatchFetchEventParamsSpec, 'blink.mojom.DispatchFetchEventParams', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.FetchAPIRequestSpec, null, false, 0, undefined),
      mojo.internal.StructField('client_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resulting_client_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('preload_url_loader_client_receiver', 24, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('race_network_request_loader_factory', 32, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
    ],
    [[0, 48]]);
