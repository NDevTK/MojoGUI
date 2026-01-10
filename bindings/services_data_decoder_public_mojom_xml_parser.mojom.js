// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/xml_parser.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};


data_decoder.mojom.kTypeKey = "type";

data_decoder.mojom.kTagKey = "tag";

data_decoder.mojom.kTextKey = "text";

data_decoder.mojom.kAttributesKey = "attributes";

data_decoder.mojom.kChildrenKey = "children";

data_decoder.mojom.kNamespacesKey = "namespaces";

data_decoder.mojom.kElementType = "element";

data_decoder.mojom.kTextNodeType = "text";

data_decoder.mojom.kCDataNodeType = "cdata";

// Enum: WhitespaceBehavior
data_decoder.mojom.WhitespaceBehavior = {
  kIgnore: 0,
  kPreserveSignificant: 1,
};
data_decoder.mojom.WhitespaceBehaviorSpec = { $: mojo.internal.Enum() };

// Interface: XmlParser
data_decoder.mojom.XmlParser = {};

data_decoder.mojom.XmlParserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_decoder.mojom.XmlParserRemote = class {
  static get $interfaceName() {
    return 'data_decoder.mojom.XmlParser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_decoder.mojom.XmlParserPendingReceiver,
      handle);
    this.$ = new data_decoder.mojom.XmlParserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_decoder.mojom.XmlParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parse(xml, whitespace_behavior) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_decoder.mojom.XmlParser_Parse_ParamsSpec,
      data_decoder.mojom.XmlParser_Parse_ResponseParamsSpec,
      [xml, whitespace_behavior]);
  }

};

data_decoder.mojom.XmlParser.getRemote = function() {
  let remote = new data_decoder.mojom.XmlParserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_decoder.mojom.XmlParser',
    'context');
  return remote.$;
};

// ParamsSpec for Parse
data_decoder.mojom.XmlParser_Parse_ParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.XmlParser.Parse_Params',
      packedSize: 24,
      fields: [
        { name: 'xml', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'whitespace_behavior', packedOffset: 8, packedBitOffset: 0, type: data_decoder.mojom.WhitespaceBehaviorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

data_decoder.mojom.XmlParser_Parse_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'data_decoder.mojom.XmlParser.Parse_ResponseParams',
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
data_decoder.mojom.XmlParserPtr = data_decoder.mojom.XmlParserRemote;
data_decoder.mojom.XmlParserRequest = data_decoder.mojom.XmlParserPendingReceiver;

