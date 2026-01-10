// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_proofreader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.AIProofreaderCreateOptionsSpec = { $: {} };
blink.mojom.AIProofreader = {};
blink.mojom.AIProofreader.$interfaceName = 'blink.mojom.AIProofreader';
blink.mojom.AIProofreader_Proofread_ParamsSpec = { $: {} };
blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec = { $: {} };

// Struct: AIProofreaderCreateOptions
mojo.internal.Struct(
    blink.mojom.AIProofreaderCreateOptionsSpec, 'blink.mojom.AIProofreaderCreateOptions', [
      mojo.internal.StructField('include_correction_types', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_correction_explanations', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('correction_explanation_language', 8, 0, blink.mojom.AILanguageCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_input_languages', 16, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AIProofreader
mojo.internal.Struct(
    blink.mojom.AIProofreader_Proofread_ParamsSpec, 'blink.mojom.AIProofreader_Proofread_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pending_responder', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec, 'blink.mojom.AIProofreader_GetCorrectionType_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('corrected_input', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('correction_instruction', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pending_responder', 24, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.AIProofreaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AIProofreaderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIProofreader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AIProofreaderPendingReceiver,
      handle);
    this.$ = new blink.mojom.AIProofreaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AIProofreaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  proofread(input, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AIProofreader_Proofread_ParamsSpec,
      null,
      [input, pending_responder],
      false);
  }

  getCorrectionType(input, corrected_input, correction_instruction, pending_responder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec,
      null,
      [input, corrected_input, correction_instruction, pending_responder],
      false);
  }

};

blink.mojom.AIProofreader.getRemote = function() {
  let remote = new blink.mojom.AIProofreaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIProofreader',
    'context');
  return remote.$;
};

blink.mojom.AIProofreaderPtr = blink.mojom.AIProofreaderRemote;
blink.mojom.AIProofreaderRequest = blink.mojom.AIProofreaderPendingReceiver;

