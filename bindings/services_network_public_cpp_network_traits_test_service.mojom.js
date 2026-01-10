// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/cpp/network_traits_test_service.mojom
// Module: network.mojom

'use strict';

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
};

network.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoHttpRequestHeaders(headers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
          const params = network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

network.mojom.TraitsTestServiceReceiver = network.mojom.TraitsTestServiceReceiver;

network.mojom.TraitsTestServicePtr = network.mojom.TraitsTestServiceRemote;
network.mojom.TraitsTestServiceRequest = network.mojom.TraitsTestServicePendingReceiver;

