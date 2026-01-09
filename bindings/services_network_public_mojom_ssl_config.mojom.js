// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/ssl_config.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: SSLVersion
network.mojom.SSLVersion = {
  kTLS12: 0,
  kTLS13: 1,
};

// Enum: SSLNamedGroupsPreset
network.mojom.SSLNamedGroupsPreset = {
  kDefault: 0,
  kCnsa2: 1,
};

// Interface: SSLConfigClient
network.mojom.SSLConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.SSLConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.SSLConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.SSLConfigClientPendingReceiver,
      handle);
    this.$ = new network.mojom.SSLConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.SSLConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSSLConfigUpdated(ssl_config) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec.$,
      null,
      [ssl_config]);
  }

};

network.mojom.SSLConfigClient.getRemote = function() {
  let remote = new network.mojom.SSLConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.SSLConfigClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnSSLConfigUpdated
network.mojom.SSLConfigClient_OnSSLConfigUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SSLConfigClient.OnSSLConfigUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'ssl_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.SSLConfigClientPtr = network.mojom.SSLConfigClientRemote;
network.mojom.SSLConfigClientRequest = network.mojom.SSLConfigClientPendingReceiver;

