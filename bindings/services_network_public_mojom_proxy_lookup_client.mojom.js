// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_lookup_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var proxy_resolver = proxy_resolver || {};

network.mojom.ProxyLookupClient = {};
network.mojom.ProxyLookupClient.$interfaceName = 'network.mojom.ProxyLookupClient';
network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec = { $: {} };

// Interface: ProxyLookupClient
mojo.internal.Struct(
    network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec, 'network.mojom.ProxyLookupClient_OnProxyLookupComplete_Params', [
      mojo.internal.StructField('proxy_info', 0, 0, proxy_resolver.mojom.ProxyInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

network.mojom.ProxyLookupClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ProxyLookupClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ProxyLookupClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ProxyLookupClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ProxyLookupClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ProxyLookupClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onProxyLookupComplete(net_error, proxy_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec,
      null,
      [net_error, proxy_info],
      false);
  }

};

network.mojom.ProxyLookupClient.getRemote = function() {
  let remote = new network.mojom.ProxyLookupClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ProxyLookupClient',
    'context');
  return remote.$;
};

network.mojom.ProxyLookupClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onProxyLookupComplete(params.net_error, params.proxy_info);
          break;
        }
      }
    }});
  }
};

network.mojom.ProxyLookupClientReceiver = network.mojom.ProxyLookupClientReceiver;

network.mojom.ProxyLookupClientPtr = network.mojom.ProxyLookupClientRemote;
network.mojom.ProxyLookupClientRequest = network.mojom.ProxyLookupClientPendingReceiver;

