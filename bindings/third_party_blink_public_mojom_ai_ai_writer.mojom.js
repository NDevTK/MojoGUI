// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_writer.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.AIWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  write(input, context, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIWriter_Write_ParamsSpec,
      null,
      [input, context, pending_responder],
      false);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AIWriter_Write_ParamsSpec.$.decode(message.payload);
          const result = this.impl.write(params.input, params.context, params.pending_responder);
          break;
        }
        case 1: {
          const params = blink.mojom.AIWriter_MeasureUsage_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

blink.mojom.AIWriterReceiver = blink.mojom.AIWriterReceiver;

blink.mojom.AIWriterPtr = blink.mojom.AIWriterRemote;
blink.mojom.AIWriterRequest = blink.mojom.AIWriterPendingReceiver;

