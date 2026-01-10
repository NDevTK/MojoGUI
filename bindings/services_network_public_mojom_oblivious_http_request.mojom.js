// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/oblivious_http_request.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Union: ObliviousHttpCompletionResult
network.mojom.ObliviousHttpCompletionResultSpec = { $: mojo.internal.Union(
    'network.mojom.ObliviousHttpCompletionResult', {
      'net_error': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
      }},
      'outer_response_error_code': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
      'inner_response': {
        'ordinal': 2,
        'type': network.mojom.ObliviousHttpResponseSpec,
      }},
    })
};

// Struct: ObliviousHttpRequestBody
network.mojom.ObliviousHttpRequestBodySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpRequestBody',
      packedSize: 24,
      fields: [
        { name: 'content', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
        { name: 'content_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ObliviousHttpResponse
network.mojom.ObliviousHttpResponseSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpResponse',
      packedSize: 32,
      fields: [
        { name: 'response_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: network.mojom.HttpResponseHeadersSpec, nullable: false, minVersion: 0 },
        { name: 'response_body', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'add_exponential_pad', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exponential_mean', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'pad_to_next_power_of_two', packedOffset: 2, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ObliviousHttpRequest
network.mojom.ObliviousHttpRequestSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpRequest',
      packedSize: 80,
      fields: [
        { name: 'relay_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'traffic_annotation', packedOffset: 8, packedBitOffset: 0, type: network.mojom.MutableNetworkTrafficAnnotationTagSpec, nullable: false, minVersion: 0 },
        { name: 'timeout_duration', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'key_config', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'resource_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'method', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'request_body', packedOffset: 48, packedBitOffset: 0, type: network.mojom.ObliviousHttpRequestBodySpec, nullable: true, minVersion: 0 },
        { name: 'trust_token_params', packedOffset: 56, packedBitOffset: 0, type: network.mojom.TrustTokenParamsSpec, nullable: true, minVersion: 0 },
        { name: 'padding_params', packedOffset: 64, packedBitOffset: 0, type: network.mojom.ObliviousHttpPaddingParametersSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Interface: ObliviousHttpClient
network.mojom.ObliviousHttpClient = {};

network.mojom.ObliviousHttpClient_OnCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.ObliviousHttpClient_OnCompleted_Params',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ObliviousHttpCompletionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: network.mojom.ObliviousHttpCompletionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
network.mojom.ObliviousHttpClientPtr = network.mojom.ObliviousHttpClientRemote;
network.mojom.ObliviousHttpClientRequest = network.mojom.ObliviousHttpClientPendingReceiver;

