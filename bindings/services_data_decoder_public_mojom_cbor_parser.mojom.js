// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/cbor_parser.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};

data_decoder.mojom.CborParser = {};
data_decoder.mojom.CborParser.$interfaceName = 'data_decoder.mojom.CborParser';
data_decoder.mojom.CborParser_Parse_ParamsSpec = { $: {} };
data_decoder.mojom.CborParser_Parse_ResponseParamsSpec = { $: {} };

// Interface: CborParser
mojo.internal.Struct(
    data_decoder.mojom.CborParser_Parse_ParamsSpec, 'data_decoder.mojom.CborParser_Parse_Params', [
      mojo.internal.StructField('cbor', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    data_decoder.mojom.CborParser_Parse_ResponseParamsSpec, 'data_decoder.mojom.CborParser_Parse_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec, null, true, 0, undefined),
      mojo.internal.StructField('error', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

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

data_decoder.mojom.CborParserPtr = data_decoder.mojom.CborParserRemote;
data_decoder.mojom.CborParserRequest = data_decoder.mojom.CborParserPendingReceiver;

