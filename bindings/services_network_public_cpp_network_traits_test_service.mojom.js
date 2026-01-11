// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/cpp/network_traits_test_service.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.TraitsTestService = {};
network.mojom.TraitsTestService.$interfaceName = 'network.mojom.TraitsTestService';
network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec = { $: {} };
network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec = { $: {} };

// Interface: TraitsTestService
mojo.internal.Struct(
    network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec, 'network.mojom.TraitsTestService_EchoHttpRequestHeaders_Params', [
      mojo.internal.StructField('headers', 0, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec, 'network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, network.mojom.HttpRequestHeadersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new network.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoHttpRequestHeaders(headers) {
    return this.$.echoHttpRequestHeaders(headers);
  }
};

network.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TraitsTestService', [
      { explicit: null },
    ]);
  }

  echoHttpRequestHeaders(headers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec,
      network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec,
      [headers],
      false);
  }

};

network.mojom.TraitsTestService.getRemote = function() {
  let remote = new network.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TraitsTestService',
    'context');
  return remote.$;
};

network.mojom.TraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TraitsTestService', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec.$.structSpec);
          const result = this.impl.echoHttpRequestHeaders(params.headers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.TraitsTestServiceReceiver = network.mojom.TraitsTestServiceReceiver;

network.mojom.TraitsTestServicePtr = network.mojom.TraitsTestServiceRemote;
network.mojom.TraitsTestServiceRequest = network.mojom.TraitsTestServicePendingReceiver;

