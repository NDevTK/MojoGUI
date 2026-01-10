// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_summarizer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AISummarizerTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AISummarizerFormatSpec = { $: mojo.internal.Enum() };
blink.mojom.AISummarizerLengthSpec = { $: mojo.internal.Enum() };
blink.mojom.AISummarizerCreateOptionsSpec = { $: {} };
blink.mojom.AISummarizer = {};
blink.mojom.AISummarizer.$interfaceName = 'blink.mojom.AISummarizer';
blink.mojom.AISummarizer_Summarize_ParamsSpec = { $: {} };
blink.mojom.AISummarizer_MeasureUsage_ParamsSpec = { $: {} };
blink.mojom.AISummarizer_MeasureUsage_ResponseParamsSpec = { $: {} };

// Enum: AISummarizerType
blink.mojom.AISummarizerType = {
  kTLDR: 0,
  kKeyPoints: 1,
  kTeaser: 2,
  kHeadline: 3,
};

// Enum: AISummarizerFormat
blink.mojom.AISummarizerFormat = {
  kPlainText: 0,
  kMarkDown: 1,
};

// Enum: AISummarizerLength
blink.mojom.AISummarizerLength = {
  kShort: 0,
  kMedium: 1,
  kLong: 2,
};

// Struct: AISummarizerCreateOptions
mojo.internal.Struct(
    blink.mojom.AISummarizerCreateOptionsSpec, 'blink.mojom.AISummarizerCreateOptions', [
      mojo.internal.StructField('shared_context', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('type', 8, 0, blink.mojom.AISummarizerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('format', 16, 0, blink.mojom.AISummarizerFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 24, 0, blink.mojom.AISummarizerLengthSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_input_languages', 32, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('expected_context_languages', 40, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_language', 48, 0, blink.mojom.AILanguageCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: AISummarizer
mojo.internal.Struct(
    blink.mojom.AISummarizer_Summarize_ParamsSpec, 'blink.mojom.AISummarizer_Summarize_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pending_responder', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AISummarizer_MeasureUsage_ParamsSpec, 'blink.mojom.AISummarizer_MeasureUsage_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AISummarizer_MeasureUsage_ResponseParamsSpec, 'blink.mojom.AISummarizer_MeasureUsage_ResponseParams', [
      mojo.internal.StructField('number_of_tokens_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'number_of_tokens_$flag', originalFieldName: 'number_of_tokens' }),
      mojo.internal.StructField('number_of_tokens_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'number_of_tokens_$value', originalFieldName: 'number_of_tokens' }),
    ],
    [[0, 16]]);

blink.mojom.AISummarizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AISummarizerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AISummarizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AISummarizerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AISummarizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AISummarizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  summarize(input, context, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AISummarizer_Summarize_ParamsSpec,
      null,
      [input, context, pending_responder],
      false);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AISummarizer_MeasureUsage_ParamsSpec,
      blink.mojom.AISummarizer_MeasureUsage_ResponseParamsSpec,
      [input, context],
      false);
  }

};

blink.mojom.AISummarizer.getRemote = function() {
  let remote = new blink.mojom.AISummarizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AISummarizer',
    'context');
  return remote.$;
};

blink.mojom.AISummarizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AISummarizer_Summarize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.summarize(params.input, params.context, params.pending_responder);
          break;
        }
        case 1: {
          const params = blink.mojom.AISummarizer_MeasureUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.measureUsage(params.input, params.context);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AISummarizer_MeasureUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.AISummarizerReceiver = blink.mojom.AISummarizerReceiver;

blink.mojom.AISummarizerPtr = blink.mojom.AISummarizerRemote;
blink.mojom.AISummarizerRequest = blink.mojom.AISummarizerPendingReceiver;

