// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_summarizer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Enum: AISummarizerType
blink.mojom.mojom.AISummarizerType = {
  kTLDR: 0,
  kKeyPoints: 1,
  kTeaser: 2,
  kHeadline: 3,
};
blink.mojom.mojom.AISummarizerTypeSpec = { $: mojo.internal.Enum() };

// Enum: AISummarizerFormat
blink.mojom.mojom.AISummarizerFormat = {
  kPlainText: 0,
  kMarkDown: 1,
};
blink.mojom.mojom.AISummarizerFormatSpec = { $: mojo.internal.Enum() };

// Enum: AISummarizerLength
blink.mojom.mojom.AISummarizerLength = {
  kShort: 0,
  kMedium: 1,
  kLong: 2,
};
blink.mojom.mojom.AISummarizerLengthSpec = { $: mojo.internal.Enum() };

// Struct: AISummarizerCreateOptions
blink.mojom.mojom.AISummarizerCreateOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AISummarizerCreateOptions',
      packedSize: 56,
      fields: [
        { name: 'shared_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AISummarizerTypeSpec, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.AISummarizerFormatSpec, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AISummarizerLengthSpec, nullable: false, minVersion: 0 },
        { name: 'expected_input_languages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'expected_context_languages', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'output_language', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AILanguageCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: AISummarizer
blink.mojom.mojom.AISummarizer = {};

blink.mojom.mojom.AISummarizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AISummarizerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AISummarizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AISummarizerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AISummarizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AISummarizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  summarize(input, context, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AISummarizer_Summarize_ParamsSpec,
      null,
      [input, context, pending_responder]);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AISummarizer_MeasureUsage_ParamsSpec,
      blink.mojom.mojom.AISummarizer_MeasureUsage_ResponseParamsSpec,
      [input, context]);
  }

};

blink.mojom.mojom.AISummarizer.getRemote = function() {
  let remote = new blink.mojom.mojom.AISummarizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AISummarizer',
    'context');
  return remote.$;
};

// ParamsSpec for Summarize
blink.mojom.mojom.AISummarizer_Summarize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AISummarizer.Summarize_Params',
      packedSize: 32,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pending_responder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for MeasureUsage
blink.mojom.mojom.AISummarizer_MeasureUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AISummarizer.MeasureUsage_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.AISummarizer_MeasureUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AISummarizer.MeasureUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'number_of_tokens_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'number_of_tokens_$value', originalFieldName: 'number_of_tokens' } },
        { name: 'number_of_tokens_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'number_of_tokens_$flag', originalFieldName: 'number_of_tokens' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AISummarizerPtr = blink.mojom.mojom.AISummarizerRemote;
blink.mojom.mojom.AISummarizerRequest = blink.mojom.mojom.AISummarizerPendingReceiver;

