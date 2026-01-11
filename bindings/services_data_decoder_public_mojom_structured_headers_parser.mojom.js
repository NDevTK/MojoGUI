// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/structured_headers_parser.mojom
// Module: data_decoder.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  parseItem(header) {
    return this.$.parseItem(header);
  }
  parseList(header) {
    return this.$.parseList(header);
  }
  parseDictionary(header) {
    return this.$.parseDictionary(header);
  }
};

data_decoder.mojom.StructuredHeadersParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StructuredHeadersParser', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  parseItem(header) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec,
      data_decoder.mojom.StructuredHeadersParser_ParseItem_ResponseParamsSpec,
      [header],
      false);
  }

  parseList(header) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec,
      data_decoder.mojom.StructuredHeadersParser_ParseList_ResponseParamsSpec,
      [header],
      false);
  }

  parseDictionary(header) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StructuredHeadersParser', [
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

data_decoder.mojom.StructuredHeadersParserReceiver = data_decoder.mojom.StructuredHeadersParserReceiver;

data_decoder.mojom.StructuredHeadersParserPtr = data_decoder.mojom.StructuredHeadersParserRemote;
data_decoder.mojom.StructuredHeadersParserRequest = data_decoder.mojom.StructuredHeadersParserPendingReceiver;

