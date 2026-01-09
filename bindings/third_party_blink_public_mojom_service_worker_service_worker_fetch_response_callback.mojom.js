// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_fetch_response_callback.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerFetchEventTiming
blink.mojom.ServiceWorkerFetchEventTimingSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerFetchEventTiming',
      packedSize: 24,
      fields: [
        { name: 'dispatch_event_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'respond_with_settled_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ServiceWorkerFetchResponseCallback
blink.mojom.ServiceWorkerFetchResponseCallback = {};

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
      [response, timing]);
  }

  onResponseStream(response, body_as_stream, timing) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec,
      null,
      [response, body_as_stream, timing]);
  }

  onFallback(request_body, timing) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec,
      null,
      [request_body, timing]);
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

// ParamsSpec for OnResponse
blink.mojom.ServiceWorkerFetchResponseCallback_OnResponse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerFetchResponseCallback.OnResponse_Params',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'timing', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnResponseStream
blink.mojom.ServiceWorkerFetchResponseCallback_OnResponseStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerFetchResponseCallback.OnResponseStream_Params',
      packedSize: 32,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'body_as_stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'timing', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFallback
blink.mojom.ServiceWorkerFetchResponseCallback_OnFallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerFetchResponseCallback.OnFallback_Params',
      packedSize: 24,
      fields: [
        { name: 'request_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'timing', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerFetchResponseCallbackPtr = blink.mojom.ServiceWorkerFetchResponseCallbackRemote;
blink.mojom.ServiceWorkerFetchResponseCallbackRequest = blink.mojom.ServiceWorkerFetchResponseCallbackPendingReceiver;

