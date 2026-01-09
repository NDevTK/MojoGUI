// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/proxy_lookup_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: ProxyLookupClient
network.mojom.ProxyLookupClient = {};

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
      [net_error, proxy_info]);
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

// ParamsSpec for OnProxyLookupComplete
network.mojom.ProxyLookupClient_OnProxyLookupComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ProxyLookupClient.OnProxyLookupComplete_Params',
      packedSize: 24,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'proxy_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ProxyLookupClientPtr = network.mojom.ProxyLookupClientRemote;
network.mojom.ProxyLookupClientRequest = network.mojom.ProxyLookupClientPendingReceiver;

