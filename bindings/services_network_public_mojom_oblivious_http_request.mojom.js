// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/oblivious_http_request.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

network.mojom.ObliviousHttpCompletionResultSpec = { $: {} };
network.mojom.ObliviousHttpRequestBodySpec = { $: {} };
network.mojom.ObliviousHttpResponseSpec = { $: {} };
network.mojom.ObliviousHttpPaddingParametersSpec = { $: {} };
network.mojom.ObliviousHttpRequestSpec = { $: {} };
network.mojom.ObliviousHttpClient = {};
network.mojom.ObliviousHttpClient.$interfaceName = 'network.mojom.ObliviousHttpClient';
network.mojom.ObliviousHttpClient_OnCompleted_ParamsSpec = { $: {} };

// Union: ObliviousHttpCompletionResult
mojo.internal.Union(
    network.mojom.ObliviousHttpCompletionResultSpec, 'network.mojom.ObliviousHttpCompletionResult', {
      'net_error': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'outer_response_error_code': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'inner_response': {
        'ordinal': 2,
        'type': network.mojom.ObliviousHttpResponseSpec.$,
        'nullable': false,
      },
    });

// Struct: ObliviousHttpRequestBody
mojo.internal.Struct(
    network.mojom.ObliviousHttpRequestBodySpec, 'network.mojom.ObliviousHttpRequestBody', [
      mojo.internal.StructField('content', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ObliviousHttpResponse
mojo.internal.Struct(
    network.mojom.ObliviousHttpResponseSpec, 'network.mojom.ObliviousHttpResponse', [
      mojo.internal.StructField('headers', 0, 0, network.mojom.HttpResponseHeadersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_body', 8, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response_code', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ObliviousHttpPaddingParameters
mojo.internal.Struct(
    network.mojom.ObliviousHttpPaddingParametersSpec, 'network.mojom.ObliviousHttpPaddingParameters', [
      mojo.internal.StructField('exponential_mean', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('add_exponential_pad', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pad_to_next_power_of_two', 2, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ObliviousHttpRequest
mojo.internal.Struct(
    network.mojom.ObliviousHttpRequestSpec, 'network.mojom.ObliviousHttpRequest', [
      mojo.internal.StructField('relay_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('traffic_annotation', 8, 0, network.mojom.MutableNetworkTrafficAnnotationTagSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timeout_duration', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('key_config', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resource_url', 32, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_body', 48, 0, network.mojom.ObliviousHttpRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('trust_token_params', 56, 0, network.mojom.TrustTokenParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('padding_params', 64, 0, network.mojom.ObliviousHttpPaddingParametersSpec.$, null, true, 0, undefined),
    ],
    [[0, 80]]);

// Interface: ObliviousHttpClient
mojo.internal.Struct(
    network.mojom.ObliviousHttpClient_OnCompleted_ParamsSpec, 'network.mojom.ObliviousHttpClient_OnCompleted_Params', [
      mojo.internal.StructField('response', 0, 0, network.mojom.ObliviousHttpCompletionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onCompleted(response) {
    return this.$.onCompleted(response);
  }
};

network.mojom.ObliviousHttpClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ObliviousHttpClient', [
      { explicit: null },
    ]);
  }

  onCompleted(response) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ObliviousHttpClient_OnCompleted_ParamsSpec,
      null,
      [response],
      false);
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

network.mojom.ObliviousHttpClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ObliviousHttpClient', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(network.mojom.ObliviousHttpClient_OnCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ObliviousHttpClient_OnCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.onCompleted(params.response);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.ObliviousHttpClientReceiver = network.mojom.ObliviousHttpClientReceiver;

network.mojom.ObliviousHttpClientPtr = network.mojom.ObliviousHttpClientRemote;
network.mojom.ObliviousHttpClientRequest = network.mojom.ObliviousHttpClientPendingReceiver;

