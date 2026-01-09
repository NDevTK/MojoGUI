// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_proofreader.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AIProofreader
blink.mojom.AIProofreader = {};

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
      [input, pending_responder]);
  }

  getCorrectionType(input, corrected_input, correction_instruction, pending_responder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec,
      null,
      [input, corrected_input, correction_instruction, pending_responder]);
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

// ParamsSpec for Proofread
blink.mojom.AIProofreader_Proofread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIProofreader.Proofread_Params',
      packedSize: 24,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'pending_responder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCorrectionType
blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AIProofreader.GetCorrectionType_Params',
      packedSize: 40,
      fields: [
        { name: 'input', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'corrected_input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'correction_instruction', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'pending_responder', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AIProofreaderPtr = blink.mojom.AIProofreaderRemote;
blink.mojom.AIProofreaderRequest = blink.mojom.AIProofreaderPendingReceiver;

