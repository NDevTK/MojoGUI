// Auto-generated MojoJS binding
// Source: chromium_src/components/network_hints/common/network_hints.mojom
// Module: network_hints.mojom

'use strict';

// Module namespace
var network_hints = network_hints || {};
network_hints.mojom = network_hints.mojom || {};


// Interface: NetworkHintsHandler
network_hints.mojom.NetworkHintsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network_hints.mojom.NetworkHintsHandlerRemote = class {
  static get $interfaceName() {
    return 'network_hints.mojom.NetworkHintsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network_hints.mojom.NetworkHintsHandlerPendingReceiver,
      handle);
    this.$ = new network_hints.mojom.NetworkHintsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network_hints.mojom.NetworkHintsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  prefetchDNS(url_list) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec.$,
      null,
      [url_list]);
  }

  preconnect(url, allow_credentials) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec.$,
      null,
      [url, allow_credentials]);
  }

};

network_hints.mojom.NetworkHintsHandler.getRemote = function() {
  let remote = new network_hints.mojom.NetworkHintsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network_hints.mojom.NetworkHintsHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for PrefetchDNS
network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network_hints.mojom.NetworkHintsHandler.PrefetchDNS_Params',
      packedSize: 16,
      fields: [
        { name: 'url_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Preconnect
network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network_hints.mojom.NetworkHintsHandler.Preconnect_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allow_credentials', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
network_hints.mojom.NetworkHintsHandlerPtr = network_hints.mojom.NetworkHintsHandlerRemote;
network_hints.mojom.NetworkHintsHandlerRequest = network_hints.mojom.NetworkHintsHandlerPendingReceiver;

