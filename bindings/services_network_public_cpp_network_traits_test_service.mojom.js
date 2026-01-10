// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/cpp/network_traits_test_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: TraitsTestService
network.mojom.mojom.TraitsTestService = {};

network.mojom.mojom.TraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.TraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.TraitsTestServicePendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.TraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.TraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoHttpRequestHeaders(headers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec,
      network.mojom.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec,
      [headers]);
  }

};

network.mojom.mojom.TraitsTestService.getRemote = function() {
  let remote = new network.mojom.mojom.TraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TraitsTestService',
    'context');
  return remote.$;
};

// ParamsSpec for EchoHttpRequestHeaders
network.mojom.mojom.TraitsTestService_EchoHttpRequestHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TraitsTestService.EchoHttpRequestHeaders_Params',
      packedSize: 16,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.mojom.TraitsTestService_EchoHttpRequestHeaders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TraitsTestService.EchoHttpRequestHeaders_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pass', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HttpRequestHeadersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.TraitsTestServicePtr = network.mojom.mojom.TraitsTestServiceRemote;
network.mojom.mojom.TraitsTestServiceRequest = network.mojom.mojom.TraitsTestServicePendingReceiver;

