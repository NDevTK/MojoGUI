// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_rewriter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Enum: AIRewriterTone
blink.mojom.mojom.AIRewriterTone = {
  kAsIs: 0,
  kMoreFormal: 1,
  kMoreCasual: 2,
};
blink.mojom.mojom.AIRewriterToneSpec = { $: mojo.internal.Enum() };

// Enum: AIRewriterFormat
blink.mojom.mojom.AIRewriterFormat = {
  kAsIs: 0,
  kPlainText: 1,
  kMarkdown: 2,
};
blink.mojom.mojom.AIRewriterFormatSpec = { $: mojo.internal.Enum() };

// Enum: AIRewriterLength
blink.mojom.mojom.AIRewriterLength = {
  kAsIs: 0,
  kShorter: 1,
  kLonger: 2,
};
blink.mojom.mojom.AIRewriterLengthSpec = { $: mojo.internal.Enum() };

// Struct: AIRewriterCreateOptions
blink.mojom.mojom.AIRewriterCreateOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIRewriterCreateOptions',
      packedSize: 56,
      fields: [
        { name: 'shared_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'tone', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AIRewriterToneSpec, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 36, packedBitOffset: 0, type: blink.mojom.AIRewriterFormatSpec, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AIRewriterLengthSpec, nullable: false, minVersion: 0 },
        { name: 'expected_input_languages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'expected_context_languages', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), nullable: false, minVersion: 0 },
        { name: 'output_language', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AILanguageCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: AIRewriter
blink.mojom.mojom.AIRewriter = {};

blink.mojom.mojom.AIRewriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AIRewriterRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIRewriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AIRewriterPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AIRewriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AIRewriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  rewrite(input, context, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AIRewriter_Rewrite_ParamsSpec,
      null,
      [input, context, pending_responder]);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AIRewriter_MeasureUsage_ParamsSpec,
      blink.mojom.mojom.AIRewriter_MeasureUsage_ResponseParamsSpec,
      [input, context]);
  }

};

blink.mojom.mojom.AIRewriter.getRemote = function() {
  let remote = new blink.mojom.mojom.AIRewriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIRewriter',
    'context');
  return remote.$;
};

// ParamsSpec for Rewrite
blink.mojom.mojom.AIRewriter_Rewrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIRewriter.Rewrite_Params',
      packedSize: 32,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'pending_responder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for MeasureUsage
blink.mojom.mojom.AIRewriter_MeasureUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIRewriter.MeasureUsage_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.AIRewriter_MeasureUsage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIRewriter.MeasureUsage_ResponseParams',
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
blink.mojom.mojom.AIRewriterPtr = blink.mojom.mojom.AIRewriterRemote;
blink.mojom.mojom.AIRewriterRequest = blink.mojom.mojom.AIRewriterPendingReceiver;

