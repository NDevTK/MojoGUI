// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_rewriter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AIRewriterToneSpec = { $: mojo.internal.Enum() };
blink.mojom.AIRewriterFormatSpec = { $: mojo.internal.Enum() };
blink.mojom.AIRewriterLengthSpec = { $: mojo.internal.Enum() };
blink.mojom.AIRewriterCreateOptionsSpec = { $: {} };
blink.mojom.AIRewriter = {};
blink.mojom.AIRewriter.$interfaceName = 'blink.mojom.AIRewriter';
blink.mojom.AIRewriter_Rewrite_ParamsSpec = { $: {} };
blink.mojom.AIRewriter_MeasureUsage_ParamsSpec = { $: {} };
blink.mojom.AIRewriter_MeasureUsage_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.AIRewriterCreateOptionsSpec, 'blink.mojom.AIRewriterCreateOptions', [
      mojo.internal.StructField('shared_context', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('tone', 8, 0, blink.mojom.AIRewriterToneSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('format', 16, 0, blink.mojom.AIRewriterFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('length', 24, 0, blink.mojom.AIRewriterLengthSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_input_languages', 32, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('expected_context_languages', 40, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_language', 48, 0, blink.mojom.AILanguageCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: AIRewriter
mojo.internal.Struct(
    blink.mojom.AIRewriter_Rewrite_ParamsSpec, 'blink.mojom.AIRewriter_Rewrite_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('pending_responder', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AIRewriter_MeasureUsage_ParamsSpec, 'blink.mojom.AIRewriter_MeasureUsage_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIRewriter_MeasureUsage_ResponseParamsSpec, 'blink.mojom.AIRewriter_MeasureUsage_ResponseParams', [
      mojo.internal.StructField('number_of_tokens_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'number_of_tokens_$flag', originalFieldName: 'number_of_tokens' }),
      mojo.internal.StructField('number_of_tokens_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'number_of_tokens_$value', originalFieldName: 'number_of_tokens' }),
    ],
    [[0, 16]]);

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
      [input, context, pending_responder],
      false);
  }

  measureUsage(input, context) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIRewriter_MeasureUsage_ParamsSpec,
      blink.mojom.AIRewriter_MeasureUsage_ResponseParamsSpec,
      [input, context],
      false);
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

blink.mojom.AIRewriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AIRewriter_Rewrite_ParamsSpec.$.decode(message.payload);
          const result = this.impl.rewrite(params.input, params.context, params.pending_responder);
          break;
        }
        case 1: {
          const params = blink.mojom.AIRewriter_MeasureUsage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.measureUsage(params.input, params.context);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AIRewriter_MeasureUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

blink.mojom.AIRewriterReceiver = blink.mojom.AIRewriterReceiver;

blink.mojom.AIRewriterPtr = blink.mojom.AIRewriterRemote;
blink.mojom.AIRewriterRequest = blink.mojom.AIRewriterPendingReceiver;

