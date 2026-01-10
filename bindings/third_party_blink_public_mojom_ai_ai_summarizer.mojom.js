// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_summarizer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};

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
      mojo.internal.StructField('type', 32, 0, blink.mojom.AISummarizerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('format', 36, 0, blink.mojom.AISummarizerFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('length', 40, 0, blink.mojom.AISummarizerLengthSpec, null, false, 0, undefined),
      mojo.internal.StructField('expected_input_languages', 8, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('expected_context_languages', 16, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('output_language', 24, 0, blink.mojom.AILanguageCodeSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

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
      mojo.internal.StructField('number_of_tokens_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'number_of_tokens_$value', originalFieldName: 'number_of_tokens' }),
      mojo.internal.StructField('number_of_tokens_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'number_of_tokens_$flag', originalFieldName: 'number_of_tokens' }),
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
      [input, context, pending_responder]);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AISummarizer_MeasureUsage_ParamsSpec,
      blink.mojom.AISummarizer_MeasureUsage_ResponseParamsSpec,
      [input, context]);
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

blink.mojom.AISummarizerPtr = blink.mojom.AISummarizerRemote;
blink.mojom.AISummarizerRequest = blink.mojom.AISummarizerPendingReceiver;

