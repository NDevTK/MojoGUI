// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/structured_headers_parser.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};
var network = network || {};

data_decoder.mojom.StructuredHeadersParser = {};
data_decoder.mojom.StructuredHeadersParser.$interfaceName = 'data_decoder.mojom.StructuredHeadersParser';
data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec = { $: {} };
data_decoder.mojom.StructuredHeadersParser_ParseItem_ResponseParamsSpec = { $: {} };
data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec = { $: {} };
data_decoder.mojom.StructuredHeadersParser_ParseList_ResponseParamsSpec = { $: {} };
data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ParamsSpec = { $: {} };
data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ResponseParamsSpec = { $: {} };

// Interface: StructuredHeadersParser
mojo.internal.Struct(
    data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec, 'data_decoder.mojom.StructuredHeadersParser_ParseItem_Params', [
      mojo.internal.StructField('header', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.StructuredHeadersParser_ParseItem_ResponseParamsSpec, 'data_decoder.mojom.StructuredHeadersParser_ParseItem_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, network.mojom.StructuredHeadersParameterizedItemSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec, 'data_decoder.mojom.StructuredHeadersParser_ParseList_Params', [
      mojo.internal.StructField('header', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.StructuredHeadersParser_ParseList_ResponseParamsSpec, 'data_decoder.mojom.StructuredHeadersParser_ParseList_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(network.mojom.StructuredHeadersParameterizedMemberSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ParamsSpec, 'data_decoder.mojom.StructuredHeadersParser_ParseDictionary_Params', [
      mojo.internal.StructField('header', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ResponseParamsSpec, 'data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, network.mojom.StructuredHeadersDictionarySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

data_decoder.mojom.StructuredHeadersParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_decoder.mojom.StructuredHeadersParserRemote = class {
  static get $interfaceName() {
    return 'data_decoder.mojom.StructuredHeadersParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_decoder.mojom.StructuredHeadersParserPendingReceiver,
      handle);
    this.$ = new data_decoder.mojom.StructuredHeadersParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_decoder.mojom.StructuredHeadersParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseItem(header) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec,
      data_decoder.mojom.StructuredHeadersParser_ParseItem_ResponseParamsSpec,
      [header],
      false);
  }

  parseList(header) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec,
      data_decoder.mojom.StructuredHeadersParser_ParseList_ResponseParamsSpec,
      [header],
      false);
  }

  parseDictionary(header) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ParamsSpec,
      data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ResponseParamsSpec,
      [header],
      false);
  }

};

data_decoder.mojom.StructuredHeadersParser.getRemote = function() {
  let remote = new data_decoder.mojom.StructuredHeadersParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_decoder.mojom.StructuredHeadersParser',
    'context');
  return remote.$;
};

data_decoder.mojom.StructuredHeadersParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec.$.decode(message.payload);
          const result = this.impl.parseItem(params.header);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.StructuredHeadersParser_ParseItem_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec.$.decode(message.payload);
          const result = this.impl.parseList(params.header);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.StructuredHeadersParser_ParseList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.parseDictionary(params.header);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

data_decoder.mojom.StructuredHeadersParserReceiver = data_decoder.mojom.StructuredHeadersParserReceiver;

data_decoder.mojom.StructuredHeadersParserPtr = data_decoder.mojom.StructuredHeadersParserRemote;
data_decoder.mojom.StructuredHeadersParserRequest = data_decoder.mojom.StructuredHeadersParserPendingReceiver;

