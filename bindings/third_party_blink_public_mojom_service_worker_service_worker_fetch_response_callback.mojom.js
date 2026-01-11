// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_fetch_response_callback.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onResponse(response, timing) {
    return this.$.onResponse(response, timing);
  }
  onResponseStream(response, body_as_stream, timing) {
    return this.$.onResponseStream(response, body_as_stream, timing);
  }
  onFallback(request_body, timing) {
    return this.$.onFallback(request_body, timing);
  }
};

blink.mojom.ServiceWorkerFetchResponseCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerFetchResponseCallback', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResponse(response, timing) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec,
      null,
      [response, timing],
      false);
  }

  onResponseStream(response, body_as_stream, timing) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec,
      null,
      [response, body_as_stream, timing],
      false);
  }

  onFallback(request_body, timing) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerFetchResponseCallback', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec.$.structSpec);
          const result = this.impl.onResponse(params.response, params.timing);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseStream(params.response, params.body_as_stream, params.timing);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec.$.structSpec);
          const result = this.impl.onFallback(params.request_body, params.timing);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.ServiceWorkerFetchResponseCallbackReceiver = blink.mojom.ServiceWorkerFetchResponseCallbackReceiver;

blink.mojom.ServiceWorkerFetchResponseCallbackPtr = blink.mojom.ServiceWorkerFetchResponseCallbackRemote;
blink.mojom.ServiceWorkerFetchResponseCallbackRequest = blink.mojom.ServiceWorkerFetchResponseCallbackPendingReceiver;

