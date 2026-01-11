// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/service_connector.mojom
// Module: chromecast.mojom

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.ServiceConnector = {};
chromecast.mojom.ServiceConnector.$interfaceName = 'chromecast.mojom.ServiceConnector';
chromecast.mojom.ServiceConnector_Connect_ParamsSpec = { $: {} };

// Interface: ServiceConnector
mojo.internal.Struct(
    chromecast.mojom.ServiceConnector_Connect_ParamsSpec, 'chromecast.mojom.ServiceConnector_Connect_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.mojom.ServiceConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ServiceConnectorRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ServiceConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ServiceConnectorPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ServiceConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(service_name, receiver) {
    return this.$.connect(service_name, receiver);
  }
};

chromecast.mojom.ServiceConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceConnector', [
      { explicit: null },
    ]);
  }

  connect(service_name, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.ServiceConnector_Connect_ParamsSpec,
      null,
      [service_name, receiver],
      false);
  }

};

chromecast.mojom.ServiceConnector.getRemote = function() {
  let remote = new chromecast.mojom.ServiceConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ServiceConnector',
    'context');
  return remote.$;
};

chromecast.mojom.ServiceConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceConnector', [
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
             decoder.decodeStructInline(chromecast.mojom.ServiceConnector_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.ServiceConnector_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.service_name, params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.ServiceConnectorReceiver = chromecast.mojom.ServiceConnectorReceiver;

chromecast.mojom.ServiceConnectorPtr = chromecast.mojom.ServiceConnectorRemote;
chromecast.mojom.ServiceConnectorRequest = chromecast.mojom.ServiceConnectorPendingReceiver;

