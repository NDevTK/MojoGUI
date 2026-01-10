// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/cbor_parser.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


// Interface: CborParser
data_decoder.mojom.CborParser = {};

data_decoder.mojom.CborParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_decoder.mojom.CborParserRemote = class {
  static get $interfaceName() {
    return 'data_decoder.mojom.CborParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_decoder.mojom.CborParserPendingReceiver,
      handle);
    this.$ = new data_decoder.mojom.CborParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_decoder.mojom.CborParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parse(cbor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_decoder.mojom.CborParser_Parse_ParamsSpec,
      data_decoder.mojom.CborParser_Parse_ResponseParamsSpec,
      [cbor]);
  }

};

data_decoder.mojom.CborParser.getRemote = function() {
  let remote = new data_decoder.mojom.CborParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_decoder.mojom.CborParser',
    'context');
  return remote.$;
};

// ParamsSpec for Parse
data_decoder.mojom.CborParser_Parse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.CborParser.Parse_Params',
      packedSize: 24,
      fields: [
        { name: 'cbor', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

data_decoder.mojom.CborParser_Parse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.CborParser.Parse_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
data_decoder.mojom.CborParserPtr = data_decoder.mojom.CborParserRemote;
data_decoder.mojom.CborParserRequest = data_decoder.mojom.CborParserPendingReceiver;

