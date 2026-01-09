// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_summarizer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Interface: AISummarizer
blink.mojom.AISummarizer = {};

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

// ParamsSpec for Summarize
blink.mojom.AISummarizer_Summarize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AISummarizer.Summarize_Params',
      packedSize: 32,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pending_responder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MeasureUsage
blink.mojom.AISummarizer_MeasureUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AISummarizer.MeasureUsage_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.AISummarizer_MeasureUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AISummarizer.MeasureUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'number_of_tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AISummarizerPtr = blink.mojom.AISummarizerRemote;
blink.mojom.AISummarizerRequest = blink.mojom.AISummarizerPendingReceiver;

