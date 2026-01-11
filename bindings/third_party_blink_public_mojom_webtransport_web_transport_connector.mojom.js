// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webtransport/web_transport_connector.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};
var url = url || {};

blink.mojom.WebTransportConnector = {};
blink.mojom.WebTransportConnector.$interfaceName = 'blink.mojom.WebTransportConnector';
blink.mojom.WebTransportConnector_Connect_ParamsSpec = { $: {} };

// Interface: WebTransportConnector
mojo.internal.Struct(
    blink.mojom.WebTransportConnector_Connect_ParamsSpec, 'blink.mojom.WebTransportConnector_Connect_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fingerprints', 8, 0, mojo.internal.Array(network.mojom.WebTransportCertificateFingerprintSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('application_protocols', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(network.mojom.WebTransportHandshakeClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.WebTransportConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebTransportConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebTransportConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebTransportConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebTransportConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(url, fingerprints, application_protocols, client) {
    return this.$.connect(url, fingerprints, application_protocols, client);
  }
};

blink.mojom.WebTransportConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTransportConnector', [
      { explicit: null },
    ]);
  }

  connect(url, fingerprints, application_protocols, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebTransportConnector_Connect_ParamsSpec,
      null,
      [url, fingerprints, application_protocols, client],
      false);
  }

};

blink.mojom.WebTransportConnector.getRemote = function() {
  let remote = new blink.mojom.WebTransportConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebTransportConnector',
    'context');
  return remote.$;
};

blink.mojom.WebTransportConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTransportConnector', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebTransportConnector_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebTransportConnector_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.url, params.fingerprints, params.application_protocols, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.WebTransportConnectorReceiver = blink.mojom.WebTransportConnectorReceiver;

blink.mojom.WebTransportConnectorPtr = blink.mojom.WebTransportConnectorRemote;
blink.mojom.WebTransportConnectorRequest = blink.mojom.WebTransportConnectorPendingReceiver;

