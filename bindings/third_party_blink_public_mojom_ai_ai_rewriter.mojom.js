// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_rewriter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AIRewriterTone
blink.mojom.AIRewriterTone = {
  kAsIs: 0,
  kMoreFormal: 1,
  kMoreCasual: 2,
};

// Enum: AIRewriterFormat
blink.mojom.AIRewriterFormat = {
  kAsIs: 0,
  kPlainText: 1,
  kMarkdown: 2,
};

// Enum: AIRewriterLength
blink.mojom.AIRewriterLength = {
  kAsIs: 0,
  kShorter: 1,
  kLonger: 2,
};

// Struct: AIRewriterCreateOptions
blink.mojom.AIRewriterCreateOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIRewriterCreateOptions',
      packedSize: 64,
      fields: [
        { name: 'shared_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tone', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AIRewriterToneSpec, nullable: false },
        { name: 'format', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AIRewriterFormatSpec, nullable: false },
        { name: 'length', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AIRewriterLengthSpec, nullable: false },
        { name: 'expected_input_languages', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'expected_context_languages', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'output_language', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AILanguageCodeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: AIRewriter
blink.mojom.AIRewriter = {};

blink.mojom.AIRewriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIRewriterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIRewriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIRewriterPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIRewriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIRewriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  rewrite(input, context, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIRewriter_Rewrite_ParamsSpec,
      null,
      [input, context, pending_responder]);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIRewriter_MeasureUsage_ParamsSpec,
      blink.mojom.AIRewriter_MeasureUsage_ResponseParamsSpec,
      [input, context]);
  }

};

blink.mojom.AIRewriter.getRemote = function() {
  let remote = new blink.mojom.AIRewriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIRewriter',
    'context');
  return remote.$;
};

// ParamsSpec for Rewrite
blink.mojom.AIRewriter_Rewrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIRewriter.Rewrite_Params',
      packedSize: 32,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'pending_responder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MeasureUsage
blink.mojom.AIRewriter_MeasureUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIRewriter.MeasureUsage_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.AIRewriter_MeasureUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIRewriter.MeasureUsage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'number_of_tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AIRewriterPtr = blink.mojom.AIRewriterRemote;
blink.mojom.AIRewriterRequest = blink.mojom.AIRewriterPendingReceiver;

