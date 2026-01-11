// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerWorkerClient = {};
blink.mojom.ServiceWorkerWorkerClient.$interfaceName = 'blink.mojom.ServiceWorkerWorkerClient';
blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec = { $: {} };

// Interface: ServiceWorkerWorkerClient
mojo.internal.Struct(
    blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec, 'blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.ControllerServiceWorkerModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerWorkerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerWorkerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerWorkerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerWorkerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerWorkerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onControllerChanged(mode) {
    return this.$.onControllerChanged(mode);
  }
};

blink.mojom.ServiceWorkerWorkerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerWorkerClient', [
      { explicit: null },
    ]);
  }

  onControllerChanged(mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec,
      null,
      [mode],
      false);
  }

};

blink.mojom.ServiceWorkerWorkerClient.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerWorkerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerWorkerClient',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerWorkerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerWorkerClient', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onControllerChanged(params.mode);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ServiceWorkerWorkerClientReceiver = blink.mojom.ServiceWorkerWorkerClientReceiver;

blink.mojom.ServiceWorkerWorkerClientPtr = blink.mojom.ServiceWorkerWorkerClientRemote;
blink.mojom.ServiceWorkerWorkerClientRequest = blink.mojom.ServiceWorkerWorkerClientPendingReceiver;

