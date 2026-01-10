// Auto-generated MojoJS binding
// Source: chromium_src/components/network_hints/common/network_hints.mojom
// Module: network_hints.mojom

'use strict';

// Module namespace
var network_hints = network_hints || {};
network_hints.mojom = network_hints.mojom || {};
var url = url || {};

network_hints.mojom.NetworkHintsHandler = {};
network_hints.mojom.NetworkHintsHandler.$interfaceName = 'network_hints.mojom.NetworkHintsHandler';
network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec = { $: {} };
network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec = { $: {} };

// Interface: NetworkHintsHandler
mojo.internal.Struct(
    network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec, 'network_hints.mojom.NetworkHintsHandler_PrefetchDNS_Params', [
      mojo.internal.StructField('url_list', 0, 0, mojo.internal.Array(url.mojom.SchemeHostPortSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec, 'network_hints.mojom.NetworkHintsHandler_Preconnect_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.SchemeHostPortSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_credentials', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

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
      network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec,
      null,
      [url_list],
      false);
  }

  preconnect(url, allow_credentials) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec,
      null,
      [url, allow_credentials],
      false);
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
};

network_hints.mojom.NetworkHintsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = network_hints.mojom.NetworkHintsHandler_PrefetchDNS_ParamsSpec.$.decode(message.payload);
          const result = this.impl.prefetchDNS(params.url_list);
          break;
        }
        case 1: {
          const params = network_hints.mojom.NetworkHintsHandler_Preconnect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.preconnect(params.url, params.allow_credentials);
          break;
        }
      }
    }});
  }
};

network_hints.mojom.NetworkHintsHandlerReceiver = network_hints.mojom.NetworkHintsHandlerReceiver;

network_hints.mojom.NetworkHintsHandlerPtr = network_hints.mojom.NetworkHintsHandlerRemote;
network_hints.mojom.NetworkHintsHandlerRequest = network_hints.mojom.NetworkHintsHandlerPendingReceiver;

