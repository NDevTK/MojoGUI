// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/cpp/network_traits_test_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: TraitsTestService
network.mojom.TraitsTestService = {};

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
      [headers]);
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

// ParamsSpec for EchoHttpRequestHeaders
network.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TraitsTestService.EchoHttpRequestHeaders_Params',
      packedSize: 16,
      fields: [
        { name: 'headers', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TraitsTestService.EchoHttpRequestHeaders_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 8, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.TraitsTestServicePtr = network.mojom.TraitsTestServiceRemote;
network.mojom.TraitsTestServiceRequest = network.mojom.TraitsTestServicePendingReceiver;

