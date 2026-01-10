// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/dhcp_wpad_url_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.DhcpWpadUrlClient = {};
network.mojom.DhcpWpadUrlClient.$interfaceName = 'network.mojom.DhcpWpadUrlClient';
network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec = { $: {} };
network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec = { $: {} };

// Interface: DhcpWpadUrlClient
mojo.internal.Struct(
    network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec, 'network.mojom.DhcpWpadUrlClient_GetPacUrl_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec, 'network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.DhcpWpadUrlClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DhcpWpadUrlClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DhcpWpadUrlClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DhcpWpadUrlClientPendingReceiver,
      handle);
    this.$ = new network.mojom.DhcpWpadUrlClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DhcpWpadUrlClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPacUrl() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec,
      network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec,
      [],
      false);
  }

};

network.mojom.DhcpWpadUrlClient.getRemote = function() {
  let remote = new network.mojom.DhcpWpadUrlClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DhcpWpadUrlClient',
    'context');
  return remote.$;
};

network.mojom.DhcpWpadUrlClientReceiver = class {
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
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPacUrl();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

network.mojom.DhcpWpadUrlClientReceiver = network.mojom.DhcpWpadUrlClientReceiver;

network.mojom.DhcpWpadUrlClientPtr = network.mojom.DhcpWpadUrlClientRemote;
network.mojom.DhcpWpadUrlClientRequest = network.mojom.DhcpWpadUrlClientPendingReceiver;

