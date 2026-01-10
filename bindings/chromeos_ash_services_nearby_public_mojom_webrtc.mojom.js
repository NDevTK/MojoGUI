// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/webrtc.mojom
// Module: sharing.mojom

'use strict';

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
      mojo.internal.StructField('mdns_responder_factory', 8, 0, mojo.internal.InterfaceProxy(sharing.mojom.MdnsResponderFactorySpec), null, false, 0, undefined),
      mojo.internal.StructField('ice_config_fetcher', 16, 0, mojo.internal.InterfaceProxy(sharing.mojom.IceConfigFetcherSpec), null, false, 0, undefined),
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
};

sharing.mojom.IceConfigFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIceServers() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = sharing.mojom.IceConfigFetcher_GetIceServers_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getIceServers');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

sharing.mojom.MdnsResponderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createMdnsResponder(responder_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = sharing.mojom.MdnsResponderFactory_CreateMdnsResponder_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createMdnsResponder');
          const result = this.impl.createMdnsResponder(params.responder_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

sharing.mojom.MdnsResponderFactoryReceiver = sharing.mojom.MdnsResponderFactoryReceiver;

sharing.mojom.MdnsResponderFactoryPtr = sharing.mojom.MdnsResponderFactoryRemote;
sharing.mojom.MdnsResponderFactoryRequest = sharing.mojom.MdnsResponderFactoryPendingReceiver;

