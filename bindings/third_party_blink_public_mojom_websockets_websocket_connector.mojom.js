// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/websockets/websocket_connector.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.WebSocketConnector = {};
blink.mojom.WebSocketConnector.$interfaceName = 'blink.mojom.WebSocketConnector';
blink.mojom.WebSocketConnector_Connect_ParamsSpec = { $: {} };

// Interface: WebSocketConnector
mojo.internal.Struct(
    blink.mojom.WebSocketConnector_Connect_ParamsSpec, 'blink.mojom.WebSocketConnector_Connect_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('requested_protocols', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 16, 0, network.mojom.SiteForCookiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_agent', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 32, 0, network.mojom.StorageAccessApiStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handshake_client', 40, 0, mojo.internal.InterfaceProxy(network.mojom.WebSocketHandshakeClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('throttling_profile_id', 48, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

blink.mojom.WebSocketConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebSocketConnectorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebSocketConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebSocketConnectorPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebSocketConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(url, requested_protocols, site_for_cookies, user_agent, storage_access_api_status, handshake_client, throttling_profile_id) {
    return this.$.connect(url, requested_protocols, site_for_cookies, user_agent, storage_access_api_status, handshake_client, throttling_profile_id);
  }
};

blink.mojom.WebSocketConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebSocketConnector', [
      { explicit: null },
    ]);
  }

  connect(url, requested_protocols, site_for_cookies, user_agent, storage_access_api_status, handshake_client, throttling_profile_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebSocketConnector_Connect_ParamsSpec,
      null,
      [url, requested_protocols, site_for_cookies, user_agent, storage_access_api_status, handshake_client, throttling_profile_id],
      false);
  }

};

blink.mojom.WebSocketConnector.getRemote = function() {
  let remote = new blink.mojom.WebSocketConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebSocketConnector',
    'context');
  return remote.$;
};

blink.mojom.WebSocketConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebSocketConnector', [
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
             decoder.decodeStructInline(blink.mojom.WebSocketConnector_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebSocketConnector_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.url, params.requested_protocols, params.site_for_cookies, params.user_agent, params.storage_access_api_status, params.handshake_client, params.throttling_profile_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.WebSocketConnectorReceiver = blink.mojom.WebSocketConnectorReceiver;

blink.mojom.WebSocketConnectorPtr = blink.mojom.WebSocketConnectorRemote;
blink.mojom.WebSocketConnectorRequest = blink.mojom.WebSocketConnectorPendingReceiver;

