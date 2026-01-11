// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_writer.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AIWriterToneSpec = { $: mojo.internal.Enum() };
blink.mojom.AIWriterFormatSpec = { $: mojo.internal.Enum() };
blink.mojom.AIWriterLengthSpec = { $: mojo.internal.Enum() };
blink.mojom.AIWriterCreateOptionsSpec = { $: {} };
blink.mojom.AIWriter = {};
blink.mojom.AIWriter.$interfaceName = 'blink.mojom.AIWriter';
blink.mojom.AIWriter_Write_ParamsSpec = { $: {} };
blink.mojom.AIWriter_MeasureUsage_ParamsSpec = { $: {} };
blink.mojom.AIWriter_MeasureUsage_ResponseParamsSpec = { $: {} };

// Enum: AIWriterTone
blink.mojom.AIWriterTone = {
  kFormal: 0,
  kNeutral: 1,
  kCasual: 2,
};

// Enum: AIWriterFormat
blink.mojom.AIWriterFormat = {
  kPlainText: 0,
  kMarkdown: 1,
};

// Enum: AIWriterLength
blink.mojom.AIWriterLength = {
  kShort: 0,
  kMedium: 1,
  kLong: 2,
};

// Struct: AIWriterCreateOptions
mojo.internal.Struct(
    blink.mojom.AIWriterCreateOptionsSpec, 'blink.mojom.AIWriterCreateOptions', [
      mojo.internal.StructField('shared_context', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('tone', 8, 0, blink.mojom.AIWriterToneSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('format', 16, 0, blink.mojom.AIWriterFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 24, 0, blink.mojom.AIWriterLengthSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_input_languages', 32, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('expected_context_languages', 40, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_language', 48, 0, blink.mojom.AILanguageCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: AIWriter
mojo.internal.Struct(
    blink.mojom.AIWriter_Write_ParamsSpec, 'blink.mojom.AIWriter_Write_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('pending_responder', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AIWriter_MeasureUsage_ParamsSpec, 'blink.mojom.AIWriter_MeasureUsage_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIWriter_MeasureUsage_ResponseParamsSpec, 'blink.mojom.AIWriter_MeasureUsage_ResponseParams', [
      mojo.internal.StructField('number_of_tokens_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'number_of_tokens_$flag', originalFieldName: 'number_of_tokens' }),
      mojo.internal.StructField('number_of_tokens_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'number_of_tokens_$value', originalFieldName: 'number_of_tokens' }),
    ],
    [[0, 16]]);

blink.mojom.AIWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIWriterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIWriterPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  write(input, context, pending_responder) {
    return this.$.write(input, context, pending_responder);
  }
  measureUsage(input, context) {
    return this.$.measureUsage(input, context);
  }
};

blink.mojom.AIWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIWriter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  write(input, context, pending_responder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIWriter_Write_ParamsSpec,
      null,
      [input, context, pending_responder],
      false);
  }

  measureUsage(input, context) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AIWriter_MeasureUsage_ParamsSpec,
      blink.mojom.AIWriter_MeasureUsage_ResponseParamsSpec,
      [input, context],
      false);
  }

};

blink.mojom.AIWriter.getRemote = function() {
  let remote = new blink.mojom.AIWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIWriter',
    'context');
  return remote.$;
};

blink.mojom.AIWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIWriter', [
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
             decoder.decodeStructInline(blink.mojom.AIWriter_Write_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIWriter_MeasureUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIWriter_Write_ParamsSpec.$.structSpec);
          const result = this.impl.write(params.input, params.context, params.pending_responder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIWriter_MeasureUsage_ParamsSpec.$.structSpec);
          const result = this.impl.measureUsage(params.input, params.context);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIWriter_MeasureUsage_ResponseParamsSpec);
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

blink.mojom.AIWriterReceiver = blink.mojom.AIWriterReceiver;

blink.mojom.AIWriterPtr = blink.mojom.AIWriterRemote;
blink.mojom.AIWriterRequest = blink.mojom.AIWriterPendingReceiver;

