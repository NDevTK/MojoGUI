// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_loader_factory.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.URLLoaderFactory = {};
network.mojom.URLLoaderFactory.$interfaceName = 'network.mojom.URLLoaderFactory';
network.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec = { $: {} };
network.mojom.URLLoaderFactory_Clone_ParamsSpec = { $: {} };

network.mojom.kURLLoadOptionNone = 0;

network.mojom.kURLLoadOptionSendSSLInfoWithResponse = 1;

network.mojom.kURLLoadOptionSniffMimeType = 2;

network.mojom.kURLLoadOptionSynchronous = 4;

network.mojom.kURLLoadOptionSendSSLInfoForCertificateError = 8;

network.mojom.kURLLoadOptionUseHeaderClient = 16;

network.mojom.kURLLoadOptionBlockAllCookies = 32;

network.mojom.kURLLoadOptionBlockThirdPartyCookies = 64;

network.mojom.kURLLoadOptionAsCorsPreflight = 128;

network.mojom.kURLLoadOptionBlockLocalRequest = 256;

network.mojom.kURLLoadOptionReadAndDiscardBody = 512;

// Interface: URLLoaderFactory
mojo.internal.Struct(
    network.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec, 'network.mojom.URLLoaderFactory_CreateLoaderAndStart_Params', [
      mojo.internal.StructField('loader', 0, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, network.mojom.URLRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(network.mojom.URLLoaderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 24, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('options', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    network.mojom.URLLoaderFactory_Clone_ParamsSpec, 'network.mojom.URLLoaderFactory_Clone_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.URLLoaderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.URLLoaderFactoryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.URLLoaderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.URLLoaderFactoryPendingReceiver,
      handle);
    this.$ = new network.mojom.URLLoaderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createLoaderAndStart(loader, request_id, options, request, client, traffic_annotation) {
    return this.$.createLoaderAndStart(loader, request_id, options, request, client, traffic_annotation);
  }
  clone(factory) {
    return this.$.clone(factory);
  }
};

network.mojom.URLLoaderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('URLLoaderFactory', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createLoaderAndStart(loader, request_id, options, request, client, traffic_annotation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec,
      null,
      [loader, request_id, options, request, client, traffic_annotation],
      false);
  }

  clone(factory) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.URLLoaderFactory_Clone_ParamsSpec,
      null,
      [factory],
      false);
  }

};

network.mojom.URLLoaderFactory.getRemote = function() {
  let remote = new network.mojom.URLLoaderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.URLLoaderFactory',
    'context');
  return remote.$;
};

network.mojom.URLLoaderFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('URLLoaderFactory', [
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.URLLoaderFactory_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.URLLoaderFactory_CreateLoaderAndStart_ParamsSpec.$.structSpec);
          const result = this.impl.createLoaderAndStart(params.loader, params.request_id, params.options, params.request, params.client, params.traffic_annotation);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.URLLoaderFactory_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.factory);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.URLLoaderFactoryReceiver = network.mojom.URLLoaderFactoryReceiver;

network.mojom.URLLoaderFactoryPtr = network.mojom.URLLoaderFactoryRemote;
network.mojom.URLLoaderFactoryRequest = network.mojom.URLLoaderFactoryPendingReceiver;

