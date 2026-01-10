// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/cpp/network_traits_test_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var services = services || {};

network.mojom.TraitsTestService = {};
network.mojom.TraitsTestService.$interfaceName = 'network.mojom.TraitsTestService';
network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec = { $: {} };
network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec = { $: {} };

// Interface: TraitsTestService
mojo.internal.Struct(
    network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec, 'network.mojom.TraitsTestService_EchoHttpRequestHeaders_Params', [
      mojo.internal.StructField('headers', 0, 0, network.mojom.HttpRequestHeadersSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec, 'network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, network.mojom.HttpRequestHeadersSpec, null, false, 0, undefined),
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

network.mojom.TraitsTestServicePtr = network.mojom.TraitsTestServiceRemote;
network.mojom.TraitsTestServiceRequest = network.mojom.TraitsTestServicePendingReceiver;

