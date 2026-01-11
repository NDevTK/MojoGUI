// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_running_status_callback.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerRunningStatusCallback = {};
blink.mojom.ServiceWorkerRunningStatusCallback.$interfaceName = 'blink.mojom.ServiceWorkerRunningStatusCallback';
blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec = { $: {} };

// Interface: ServiceWorkerRunningStatusCallback
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec, 'blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEmbeddedWorkerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerRunningStatusCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerRunningStatusCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRunningStatusCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerRunningStatusCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerRunningStatusCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStatusChanged(status) {
    return this.$.onStatusChanged(status);
  }
};

blink.mojom.ServiceWorkerRunningStatusCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRunningStatusCallback', [
      { explicit: null },
    ]);
  }

  onStatusChanged(status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

};

blink.mojom.ServiceWorkerRunningStatusCallback.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerRunningStatusCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRunningStatusCallback',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerRunningStatusCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerRunningStatusCallback', [
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
             decoder.decodeStructInline(blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onStatusChanged(params.status);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ServiceWorkerRunningStatusCallbackReceiver = blink.mojom.ServiceWorkerRunningStatusCallbackReceiver;

blink.mojom.ServiceWorkerRunningStatusCallbackPtr = blink.mojom.ServiceWorkerRunningStatusCallbackRemote;
blink.mojom.ServiceWorkerRunningStatusCallbackRequest = blink.mojom.ServiceWorkerRunningStatusCallbackPendingReceiver;

