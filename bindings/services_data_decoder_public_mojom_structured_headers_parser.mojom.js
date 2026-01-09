// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/structured_headers_parser.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Interface: StructuredHeadersParser
data_decoder.mojom.StructuredHeadersParser = {};

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
      data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec.$,
      data_decoder.mojom.StructuredHeadersParser_ParseItem_ResponseParamsSpec.$,
      [header]);
  }

  parseList(header) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec.$,
      data_decoder.mojom.StructuredHeadersParser_ParseList_ResponseParamsSpec.$,
      [header]);
  }

  parseDictionary(header) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ParamsSpec.$,
      data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ResponseParamsSpec.$,
      [header]);
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

// ParamsSpec for ParseItem
data_decoder.mojom.StructuredHeadersParser_ParseItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.StructuredHeadersParser.ParseItem_Params',
      packedSize: 16,
      fields: [
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.StructuredHeadersParser_ParseItem_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.StructuredHeadersParser.ParseItem_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ParseList
data_decoder.mojom.StructuredHeadersParser_ParseList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.StructuredHeadersParser.ParseList_Params',
      packedSize: 16,
      fields: [
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.StructuredHeadersParser_ParseList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.StructuredHeadersParser.ParseList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ParseDictionary
data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.StructuredHeadersParser.ParseDictionary_Params',
      packedSize: 16,
      fields: [
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

data_decoder.mojom.StructuredHeadersParser_ParseDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.StructuredHeadersParser.ParseDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
data_decoder.mojom.StructuredHeadersParserPtr = data_decoder.mojom.StructuredHeadersParserRemote;
data_decoder.mojom.StructuredHeadersParserRequest = data_decoder.mojom.StructuredHeadersParserPendingReceiver;

