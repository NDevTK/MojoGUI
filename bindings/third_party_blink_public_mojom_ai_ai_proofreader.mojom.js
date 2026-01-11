// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_proofreader.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AIProofreaderCreateOptionsSpec = { $: {} };
blink.mojom.AIProofreader = {};
blink.mojom.AIProofreader.$interfaceName = 'blink.mojom.AIProofreader';
blink.mojom.AIProofreader_Proofread_ParamsSpec = { $: {} };
blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec = { $: {} };

// Struct: AIProofreaderCreateOptions
mojo.internal.Struct(
    blink.mojom.AIProofreaderCreateOptionsSpec, 'blink.mojom.AIProofreaderCreateOptions', [
      mojo.internal.StructField('correction_explanation_language', 0, 0, blink.mojom.AILanguageCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_input_languages', 8, 0, mojo.internal.Array(blink.mojom.AILanguageCodeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('include_correction_types', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('include_correction_explanations', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
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
  proofread(input, pending_responder) {
    return this.$.proofread(input, pending_responder);
  }
  getCorrectionType(input, corrected_input, correction_instruction, pending_responder) {
    return this.$.getCorrectionType(input, corrected_input, correction_instruction, pending_responder);
  }
};

blink.mojom.AIProofreaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AIProofreader', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  proofread(input, pending_responder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AIProofreader_Proofread_ParamsSpec,
      null,
      [input, pending_responder],
      false);
  }

  getCorrectionType(input, corrected_input, correction_instruction, pending_responder) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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

blink.mojom.AIProofreaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AIProofreader', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIProofreader_Proofread_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIProofreader_Proofread_ParamsSpec.$.structSpec);
          const result = this.impl.proofread(params.input, params.pending_responder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec.$.structSpec);
          const result = this.impl.getCorrectionType(params.input, params.corrected_input, params.correction_instruction, params.pending_responder);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AIProofreaderReceiver = blink.mojom.AIProofreaderReceiver;

blink.mojom.AIProofreaderPtr = blink.mojom.AIProofreaderRemote;
blink.mojom.AIProofreaderRequest = blink.mojom.AIProofreaderPendingReceiver;

