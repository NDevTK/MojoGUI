// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_proofreader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};


// Struct: AIProofreaderCreateOptions
blink.mojom.mojom.AIProofreaderCreateOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIProofreaderCreateOptions',
      packedSize: 32,
      fields: [
        { name: 'include_correction_types', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'include_correction_explanations', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'correction_explanation_language', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AILanguageCodeSpec, nullable: false, minVersion: 0 },
        { name: 'expected_input_languages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AILanguageCodeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: AIProofreader
blink.mojom.mojom.AIProofreader = {};

blink.mojom.mojom.AIProofreaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AIProofreaderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AIProofreader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AIProofreaderPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AIProofreaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AIProofreaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  proofread(input, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AIProofreader_Proofread_ParamsSpec,
      null,
      [input, pending_responder]);
  }

  getCorrectionType(input, corrected_input, correction_instruction, pending_responder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AIProofreader_GetCorrectionType_ParamsSpec,
      null,
      [input, corrected_input, correction_instruction, pending_responder]);
  }

};

blink.mojom.mojom.AIProofreader.getRemote = function() {
  let remote = new blink.mojom.mojom.AIProofreaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AIProofreader',
    'context');
  return remote.$;
};

// ParamsSpec for Proofread
blink.mojom.mojom.AIProofreader_Proofread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIProofreader.Proofread_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pending_responder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetCorrectionType
blink.mojom.mojom.AIProofreader_GetCorrectionType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIProofreader.GetCorrectionType_Params',
      packedSize: 40,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'corrected_input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'correction_instruction', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pending_responder', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AIProofreaderPtr = blink.mojom.mojom.AIProofreaderRemote;
blink.mojom.mojom.AIProofreaderRequest = blink.mojom.mojom.AIProofreaderPendingReceiver;

