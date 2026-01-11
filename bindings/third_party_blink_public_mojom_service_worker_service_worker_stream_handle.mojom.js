// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_stream_handle.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerStreamHandleSpec = { $: {} };
blink.mojom.ServiceWorkerStreamCallback = {};
blink.mojom.ServiceWorkerStreamCallback.$interfaceName = 'blink.mojom.ServiceWorkerStreamCallback';
blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec = { $: {} };

// Struct: ServiceWorkerStreamHandle
mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamHandleSpec, 'blink.mojom.ServiceWorkerStreamHandle', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('callback_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerStreamCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ServiceWorkerStreamCallback
mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec, 'blink.mojom.ServiceWorkerStreamCallback_OnCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec, 'blink.mojom.ServiceWorkerStreamCallback_OnAborted_Params', [
    ],
    [[0, 8]]);

blink.mojom.ServiceWorkerStreamCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerStreamCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerStreamCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerStreamCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerStreamCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCompleted() {
    return this.$.onCompleted();
  }
  onAborted() {
    return this.$.onAborted();
  }
};

blink.mojom.ServiceWorkerStreamCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerStreamCallback', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  onAborted() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.ServiceWorkerStreamCallback.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerStreamCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerStreamCallback',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerStreamCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerStreamCallback', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.onCompleted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec.$.structSpec);
          const result = this.impl.onAborted();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ServiceWorkerStreamCallbackReceiver = blink.mojom.ServiceWorkerStreamCallbackReceiver;

blink.mojom.ServiceWorkerStreamCallbackPtr = blink.mojom.ServiceWorkerStreamCallbackRemote;
blink.mojom.ServiceWorkerStreamCallbackRequest = blink.mojom.ServiceWorkerStreamCallbackPendingReceiver;

