// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc.mojom
// Module: sharing.mojom

// Module namespace
var sharing = sharing || {};
sharing.mojom = sharing.mojom || {};
var url = url || {};
var network = network || {};

sharing.mojom.IceServerSpec = { $: {} };
sharing.mojom.WebRtcDependenciesSpec = { $: {} };
sharing.mojom.IceConfigFetcher = {};
sharing.mojom.IceConfigFetcher.$interfaceName = 'sharing.mojom.IceConfigFetcher';
sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec = { $: {} };
sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec = { $: {} };
sharing.mojom.MdnsResponderFactory = {};
sharing.mojom.MdnsResponderFactory.$interfaceName = 'sharing.mojom.MdnsResponderFactory';
sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec = { $: {} };

// Struct: IceServer
mojo.internal.Struct(
    sharing.mojom.IceServerSpec, 'sharing.mojom.IceServer', [
      mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('username', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('credential', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebRtcDependencies
mojo.internal.Struct(
    sharing.mojom.WebRtcDependenciesSpec, 'sharing.mojom.WebRtcDependencies', [
      mojo.internal.StructField('socket_manager', 0, 0, mojo.internal.InterfaceProxy(network.mojom.P2PSocketManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('mdns_responder_factory', 8, 0, mojo.internal.InterfaceProxy(sharing.mojom.MdnsResponderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('ice_config_fetcher', 16, 0, mojo.internal.InterfaceProxy(sharing.mojom.IceConfigFetcherRemote), null, false, 0, undefined),
      mojo.internal.StructField('messenger', 24, 0, mojo.internal.InterfaceProxy(sharing.mojom.WebRtcSignalingMessengerRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: IceConfigFetcher
mojo.internal.Struct(
    sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec, 'sharing.mojom.IceConfigFetcher_GetIceServers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec, 'sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParams', [
      mojo.internal.StructField('ice_servers', 0, 0, mojo.internal.Array(sharing.mojom.IceServerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

sharing.mojom.IceConfigFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.IceConfigFetcherRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.IceConfigFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.IceConfigFetcherPendingReceiver,
      handle);
    this.$ = new sharing.mojom.IceConfigFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getIceServers() {
    return this.$.getIceServers();
  }
};

sharing.mojom.IceConfigFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IceConfigFetcher', [
      { explicit: null },
    ]);
  }

  getIceServers() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec,
      sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec,
      [],
      false);
  }

};

sharing.mojom.IceConfigFetcher.getRemote = function() {
  let remote = new sharing.mojom.IceConfigFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.IceConfigFetcher',
    'context');
  return remote.$;
};

sharing.mojom.IceConfigFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IceConfigFetcher', [
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
             decoder.decodeStructInline(sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec.$.structSpec);
          const result = this.impl.getIceServers();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, sharing.mojom.IceConfigFetcher_GetIceServers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

sharing.mojom.IceConfigFetcherReceiver = sharing.mojom.IceConfigFetcherReceiver;

sharing.mojom.IceConfigFetcherPtr = sharing.mojom.IceConfigFetcherRemote;
sharing.mojom.IceConfigFetcherRequest = sharing.mojom.IceConfigFetcherPendingReceiver;


// Interface: MdnsResponderFactory
mojo.internal.Struct(
    sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec, 'sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_Params', [
      mojo.internal.StructField('responder_receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.MdnsResponderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

sharing.mojom.MdnsResponderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

sharing.mojom.MdnsResponderFactoryRemote = class {
  static get $interfaceName() {
    return 'sharing.mojom.MdnsResponderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      sharing.mojom.MdnsResponderFactoryPendingReceiver,
      handle);
    this.$ = new sharing.mojom.MdnsResponderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createMdnsResponder(responder_receiver) {
    return this.$.createMdnsResponder(responder_receiver);
  }
};

sharing.mojom.MdnsResponderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MdnsResponderFactory', [
      { explicit: null },
    ]);
  }

  createMdnsResponder(responder_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec,
      null,
      [responder_receiver],
      false);
  }

};

sharing.mojom.MdnsResponderFactory.getRemote = function() {
  let remote = new sharing.mojom.MdnsResponderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'sharing.mojom.MdnsResponderFactory',
    'context');
  return remote.$;
};

sharing.mojom.MdnsResponderFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MdnsResponderFactory', [
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
             decoder.decodeStructInline(sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec.$.structSpec);
          const result = this.impl.createMdnsResponder(params.responder_receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

sharing.mojom.MdnsResponderFactoryReceiver = sharing.mojom.MdnsResponderFactoryReceiver;

sharing.mojom.MdnsResponderFactoryPtr = sharing.mojom.MdnsResponderFactoryRemote;
sharing.mojom.MdnsResponderFactoryRequest = sharing.mojom.MdnsResponderFactoryPendingReceiver;

