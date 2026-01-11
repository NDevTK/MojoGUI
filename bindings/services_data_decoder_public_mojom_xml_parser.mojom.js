// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/xml_parser.mojom
// Module: data_decoder.mojom

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};
var mojo_base = mojo_base || {};

data_decoder.mojom.WhitespaceBehaviorSpec = { $: mojo.internal.Enum() };
data_decoder.mojom.XmlParser = {};
data_decoder.mojom.XmlParser.$interfaceName = 'data_decoder.mojom.XmlParser';
data_decoder.mojom.XmlParser_Parse_ParamsSpec = { $: {} };
data_decoder.mojom.XmlParser_Parse_ResponseParamsSpec = { $: {} };

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

// Interface: XmlParser
mojo.internal.Struct(
    data_decoder.mojom.XmlParser_Parse_ParamsSpec, 'data_decoder.mojom.XmlParser_Parse_Params', [
      mojo.internal.StructField('xml', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('whitespace_behavior', 8, 0, data_decoder.mojom.WhitespaceBehaviorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    data_decoder.mojom.XmlParser_Parse_ResponseParamsSpec, 'data_decoder.mojom.XmlParser_Parse_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
  parse(xml, whitespace_behavior) {
    return this.$.parse(xml, whitespace_behavior);
  }
};

data_decoder.mojom.XmlParserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XmlParser', [
      { explicit: null },
    ]);
  }

  parse(xml, whitespace_behavior) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_decoder.mojom.XmlParser_Parse_ParamsSpec,
      data_decoder.mojom.XmlParser_Parse_ResponseParamsSpec,
      [xml, whitespace_behavior],
      false);
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

data_decoder.mojom.XmlParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('XmlParser', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(data_decoder.mojom.XmlParser_Parse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.XmlParser_Parse_ParamsSpec.$.structSpec);
          const result = this.impl.parse(params.xml, params.whitespace_behavior);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.XmlParser_Parse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

data_decoder.mojom.XmlParserReceiver = data_decoder.mojom.XmlParserReceiver;

data_decoder.mojom.XmlParserPtr = data_decoder.mojom.XmlParserRemote;
data_decoder.mojom.XmlParserRequest = data_decoder.mojom.XmlParserPendingReceiver;

