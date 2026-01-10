// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/boca/babelorca/mojom/tachyon_parsing_service.mojom
// Module: ash.babelorca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.babelorca = ash.babelorca || {};
ash.babelorca.mojom = ash.babelorca.mojom || {};
var sandbox = sandbox || {};

ash.babelorca.mojom.ParsingStateSpec = { $: mojo.internal.Enum() };
ash.babelorca.mojom.TranscriptPartSpec = { $: {} };
ash.babelorca.mojom.BabelOrcaMessageSpec = { $: {} };
ash.babelorca.mojom.StreamStatusSpec = { $: {} };
ash.babelorca.mojom.TachyonParsingService = {};
ash.babelorca.mojom.TachyonParsingService.$interfaceName = 'ash.babelorca.mojom.TachyonParsingService';
ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec = { $: {} };
ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParamsSpec = { $: {} };

// Enum: ParsingState
ash.babelorca.mojom.ParsingState = {
  kOk: 0,
  kError: 1,
  kClosed: 2,
};

// Struct: TranscriptPart
mojo.internal.Struct(
    ash.babelorca.mojom.TranscriptPartSpec, 'ash.babelorca.mojom.TranscriptPart', [
      mojo.internal.StructField('transcript_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('text_index', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('language', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_final', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: BabelOrcaMessage
mojo.internal.Struct(
    ash.babelorca.mojom.BabelOrcaMessageSpec, 'ash.babelorca.mojom.BabelOrcaMessage', [
      mojo.internal.StructField('sender_email', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('init_timestamp_ms', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('order', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('previous_transcript', 32, 0, ash.babelorca.mojom.TranscriptPartSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('current_transcript', 40, 0, ash.babelorca.mojom.TranscriptPartSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: StreamStatus
mojo.internal.Struct(
    ash.babelorca.mojom.StreamStatusSpec, 'ash.babelorca.mojom.StreamStatus', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TachyonParsingService
mojo.internal.Struct(
    ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec, 'ash.babelorca.mojom.TachyonParsingService_Parse_Params', [
      mojo.internal.StructField('stream_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParamsSpec, 'ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, ash.babelorca.mojom.ParsingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('messages', 8, 0, mojo.internal.Array(ash.babelorca.mojom.BabelOrcaMessageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('stream_status', 16, 0, ash.babelorca.mojom.StreamStatusSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

ash.babelorca.mojom.TachyonParsingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.babelorca.mojom.TachyonParsingServiceRemote = class {
  static get $interfaceName() {
    return 'ash.babelorca.mojom.TachyonParsingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.babelorca.mojom.TachyonParsingServicePendingReceiver,
      handle);
    this.$ = new ash.babelorca.mojom.TachyonParsingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.babelorca.mojom.TachyonParsingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parse(stream_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec,
      ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParamsSpec,
      [stream_data],
      false);
  }

};

ash.babelorca.mojom.TachyonParsingService.getRemote = function() {
  let remote = new ash.babelorca.mojom.TachyonParsingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.babelorca.mojom.TachyonParsingService',
    'context');
  return remote.$;
};

ash.babelorca.mojom.TachyonParsingServiceReceiver = class {
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
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Parse (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.babelorca.mojom.TachyonParsingService_Parse_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parse');
          const result = this.impl.parse(params.stream_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.babelorca.mojom.TachyonParsingService_Parse_ResponseParamsSpec);
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

ash.babelorca.mojom.TachyonParsingServiceReceiver = ash.babelorca.mojom.TachyonParsingServiceReceiver;

ash.babelorca.mojom.TachyonParsingServicePtr = ash.babelorca.mojom.TachyonParsingServiceRemote;
ash.babelorca.mojom.TachyonParsingServiceRequest = ash.babelorca.mojom.TachyonParsingServicePendingReceiver;

