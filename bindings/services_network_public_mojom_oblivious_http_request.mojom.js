// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/oblivious_http_request.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: ObliviousHttpRequestBody
network.mojom.ObliviousHttpRequestBodySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpRequestBody',
      packedSize: 16,
      fields: [
        { name: 'content_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ObliviousHttpResponse
network.mojom.ObliviousHttpResponseSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpResponse',
      packedSize: 16,
      fields: [
        { name: 'response_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ObliviousHttpPaddingParameters
network.mojom.ObliviousHttpPaddingParametersSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpPaddingParameters',
      packedSize: 16,
      fields: [
        { name: 'pad_to_next_power_of_two', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ObliviousHttpRequest
network.mojom.ObliviousHttpRequestSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpRequest',
      packedSize: 16,
      fields: [
        { name: 'padding_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ObliviousHttpClient
network.mojom.ObliviousHttpClient = {};

network.mojom.ObliviousHttpClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ObliviousHttpClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ObliviousHttpClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ObliviousHttpClientPendingReceiver,
      handle);
    this.$ = new network.mojom.ObliviousHttpClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ObliviousHttpClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCompleted(response) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ObliviousHttpClient_OnCompleted_ParamsSpec,
      null,
      [response]);
  }

};

network.mojom.ObliviousHttpClient.getRemote = function() {
  let remote = new network.mojom.ObliviousHttpClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ObliviousHttpClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnCompleted
network.mojom.ObliviousHttpClient_OnCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpClient.OnCompleted_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.ObliviousHttpClientPtr = network.mojom.ObliviousHttpClientRemote;
network.mojom.ObliviousHttpClientRequest = network.mojom.ObliviousHttpClientPendingReceiver;

