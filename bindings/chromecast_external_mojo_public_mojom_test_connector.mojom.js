// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/external_mojo/public/mojom/test_connector.mojom
// Module: chromecast.external_mojo.mojom

// Module namespace
var chromecast = chromecast || {};
chromecast.external_mojo = chromecast.external_mojo || {};
chromecast.external_mojo.mojom = chromecast.external_mojo.mojom || {};

chromecast.external_mojo.mojom.TestExternalConnector = {};
chromecast.external_mojo.mojom.TestExternalConnector.$interfaceName = 'chromecast.external_mojo.mojom.TestExternalConnector';
chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec = { $: {} };

// Interface: TestExternalConnector
mojo.internal.Struct(
    chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec, 'chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

chromecast.external_mojo.mojom.TestExternalConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.external_mojo.mojom.TestExternalConnectorRemote = class {
  static get $interfaceName() {
    return 'chromecast.external_mojo.mojom.TestExternalConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.external_mojo.mojom.TestExternalConnectorPendingReceiver,
      handle);
    this.$ = new chromecast.external_mojo.mojom.TestExternalConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindInterfaceInternal(service_name, interface_name, interface_pipe) {
    return this.$.bindInterfaceInternal(service_name, interface_name, interface_pipe);
  }
};

chromecast.external_mojo.mojom.TestExternalConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestExternalConnector', [
      { explicit: null },
    ]);
  }

  bindInterfaceInternal(service_name, interface_name, interface_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec,
      null,
      [service_name, interface_name, interface_pipe],
      false);
  }

};

chromecast.external_mojo.mojom.TestExternalConnector.getRemote = function() {
  let remote = new chromecast.external_mojo.mojom.TestExternalConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.external_mojo.mojom.TestExternalConnector',
    'context');
  return remote.$;
};

chromecast.external_mojo.mojom.TestExternalConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestExternalConnector', [
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
             decoder.decodeStructInline(chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec.$.structSpec);
          const result = this.impl.bindInterfaceInternal(params.service_name, params.interface_name, params.interface_pipe);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.external_mojo.mojom.TestExternalConnectorReceiver = chromecast.external_mojo.mojom.TestExternalConnectorReceiver;

chromecast.external_mojo.mojom.TestExternalConnectorPtr = chromecast.external_mojo.mojom.TestExternalConnectorRemote;
chromecast.external_mojo.mojom.TestExternalConnectorRequest = chromecast.external_mojo.mojom.TestExternalConnectorPendingReceiver;

