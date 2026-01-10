// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_fetch_response_callback.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};

blink.mojom.ServiceWorkerFetchEventTimingSpec = { $: {} };
blink.mojom.ServiceWorkerFetchResponseCallback = {};
blink.mojom.ServiceWorkerFetchResponseCallback.$interfaceName = 'blink.mojom.ServiceWorkerFetchResponseCallback';
blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec = { $: {} };

// Struct: ServiceWorkerFetchEventTiming
mojo.internal.Struct(
    blink.mojom.ServiceWorkerFetchEventTimingSpec, 'blink.mojom.ServiceWorkerFetchEventTiming', [
      mojo.internal.StructField('dispatch_event_time', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('respond_with_settled_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ServiceWorkerFetchResponseCallback
mojo.internal.Struct(
    blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec, 'blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_Params', [
      mojo.internal.StructField('response', 0, 0, blink.mojom.FetchAPIResponseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timing', 8, 0, blink.mojom.ServiceWorkerFetchEventTimingSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec, 'blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_Params', [
      mojo.internal.StructField('response', 0, 0, blink.mojom.FetchAPIResponseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('body_as_stream', 8, 0, blink.mojom.ServiceWorkerStreamHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timing', 16, 0, blink.mojom.ServiceWorkerFetchEventTimingSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec, 'blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_Params', [
      mojo.internal.StructField('request_body', 0, 0, network.mojom.DataElementChunkedDataPipeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('timing', 8, 0, blink.mojom.ServiceWorkerFetchEventTimingSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.ServiceWorkerFetchResponseCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerFetchResponseCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerFetchResponseCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerFetchResponseCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerFetchResponseCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerFetchResponseCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResponse(response, timing) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec,
      null,
      [response, timing],
      false);
  }

  onResponseStream(response, body_as_stream, timing) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec,
      null,
      [response, body_as_stream, timing],
      false);
  }

  onFallback(request_body, timing) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec,
      null,
      [request_body, timing],
      false);
  }

};

blink.mojom.ServiceWorkerFetchResponseCallback.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerFetchResponseCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerFetchResponseCallback',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerFetchResponseCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnResponse
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponse (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnResponseStream
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResponseStream (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnFallback
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFallback (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onResponse');
          const result = this.impl.onResponse(params.response, params.timing);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onResponseStream');
          const result = this.impl.onResponseStream(params.response, params.body_as_stream, params.timing);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFallback');
          const result = this.impl.onFallback(params.request_body, params.timing);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerFetchResponseCallbackReceiver = blink.mojom.ServiceWorkerFetchResponseCallbackReceiver;

blink.mojom.ServiceWorkerFetchResponseCallbackPtr = blink.mojom.ServiceWorkerFetchResponseCallbackRemote;
blink.mojom.ServiceWorkerFetchResponseCallbackRequest = blink.mojom.ServiceWorkerFetchResponseCallbackPendingReceiver;

