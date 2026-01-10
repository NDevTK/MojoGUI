// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/service_connector.mojom
// Module: chromecast.mojom

'use strict';

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
};

chromecast.mojom.ServiceConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(service_name, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromecast.mojom.ServiceConnector_Connect_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.service_name, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.ServiceConnectorReceiver = chromecast.mojom.ServiceConnectorReceiver;

chromecast.mojom.ServiceConnectorPtr = chromecast.mojom.ServiceConnectorRemote;
chromecast.mojom.ServiceConnectorRequest = chromecast.mojom.ServiceConnectorPendingReceiver;

