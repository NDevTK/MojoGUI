// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/ai/ai_proofreader.mojom
// Module: blink.mojom

'use strict';

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

blink.mojom.AIProofreaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Proofread
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AIProofreader_Proofread_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Proofread (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetCorrectionType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCorrectionType (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIProofreader_Proofread_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.proofread');
          const result = this.impl.proofread(params.input, params.pending_responder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AIProofreader_GetCorrectionType_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCorrectionType');
          const result = this.impl.getCorrectionType(params.input, params.corrected_input, params.correction_instruction, params.pending_responder);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AIProofreaderReceiver = blink.mojom.AIProofreaderReceiver;

blink.mojom.AIProofreaderPtr = blink.mojom.AIProofreaderRemote;
blink.mojom.AIProofreaderRequest = blink.mojom.AIProofreaderPendingReceiver;

