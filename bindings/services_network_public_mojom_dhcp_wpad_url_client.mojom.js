// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/dhcp_wpad_url_client.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: DhcpWpadUrlClient
network.mojom.mojom.DhcpWpadUrlClient = {};

network.mojom.mojom.DhcpWpadUrlClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.DhcpWpadUrlClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DhcpWpadUrlClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.DhcpWpadUrlClientPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.DhcpWpadUrlClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.DhcpWpadUrlClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPacUrl() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec,
      network.mojom.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec,
      []);
  }

};

network.mojom.mojom.DhcpWpadUrlClient.getRemote = function() {
  let remote = new network.mojom.mojom.DhcpWpadUrlClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DhcpWpadUrlClient',
    'context');
  return remote.$;
};

// ParamsSpec for GetPacUrl
network.mojom.mojom.DhcpWpadUrlClient_GetPacUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DhcpWpadUrlClient.GetPacUrl_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

network.mojom.mojom.DhcpWpadUrlClient_GetPacUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DhcpWpadUrlClient.GetPacUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.DhcpWpadUrlClientPtr = network.mojom.mojom.DhcpWpadUrlClientRemote;
network.mojom.mojom.DhcpWpadUrlClientRequest = network.mojom.mojom.DhcpWpadUrlClientPendingReceiver;

