// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/cbor_parser.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};
var mojo_base = mojo_base || {};

data_decoder.mojom.CborParser = {};
data_decoder.mojom.CborParser.$interfaceName = 'data_decoder.mojom.CborParser';
data_decoder.mojom.CborParser_Parse_ParamsSpec = { $: {} };
data_decoder.mojom.CborParser_Parse_ResponseParamsSpec = { $: {} };

// Interface: CborParser
mojo.internal.Struct(
    data_decoder.mojom.CborParser_Parse_ParamsSpec, 'data_decoder.mojom.CborParser_Parse_Params', [
      mojo.internal.StructField('cbor', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.CborParser_Parse_ResponseParamsSpec, 'data_decoder.mojom.CborParser_Parse_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      [cbor],
      false);
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

data_decoder.mojom.CborParserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Parse
        try {
             decoder.decodeStruct(data_decoder.mojom.CborParser_Parse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Parse (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.CborParser_Parse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parse');
          const result = this.impl.parse(params.cbor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, data_decoder.mojom.CborParser_Parse_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

data_decoder.mojom.CborParserReceiver = data_decoder.mojom.CborParserReceiver;

data_decoder.mojom.CborParserPtr = data_decoder.mojom.CborParserRemote;
data_decoder.mojom.CborParserRequest = data_decoder.mojom.CborParserPendingReceiver;

