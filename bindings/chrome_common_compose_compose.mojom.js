// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/compose/compose.mojom
// Module: compose.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var compose = compose || {};
compose.mojom = compose.mojom || {};

compose.mojom.InputModeSpec = { $: mojo.internal.Enum() };
compose.mojom.StyleModifierSpec = { $: mojo.internal.Enum() };
compose.mojom.CloseReasonSpec = { $: mojo.internal.Enum() };
compose.mojom.UserFeedbackSpec = { $: mojo.internal.Enum() };
compose.mojom.ComposeResponseSpec = { $: {} };
compose.mojom.PartialComposeResponseSpec = { $: {} };
compose.mojom.ComposeStateSpec = { $: {} };
compose.mojom.ConfigurableParamsSpec = { $: {} };
compose.mojom.OpenMetadataSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandlerFactory = {};
compose.mojom.ComposeSessionUntrustedPageHandlerFactory.$interfaceName = 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory';
compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler = {};
compose.mojom.ComposeSessionUntrustedPageHandler.$interfaceName = 'compose.mojom.ComposeSessionUntrustedPageHandler';
compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec = { $: {} };
compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec = { $: {} };
compose.mojom.ComposeClientUntrustedPageHandler = {};
compose.mojom.ComposeClientUntrustedPageHandler.$interfaceName = 'compose.mojom.ComposeClientUntrustedPageHandler';
compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec = { $: {} };
compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec = { $: {} };
compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec = { $: {} };
compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec = { $: {} };
compose.mojom.ComposeUntrustedDialog = {};
compose.mojom.ComposeUntrustedDialog.$interfaceName = 'compose.mojom.ComposeUntrustedDialog';
compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec = { $: {} };
compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec = { $: {} };

// Enum: InputMode
compose.mojom.InputMode = {
  kUnset: 0,
  kPolish: 1,
  kElaborate: 2,
  kFormalize: 3,
};

// Enum: StyleModifier
compose.mojom.StyleModifier = {
  kUnset: 0,
  kFormal: 1,
  kCasual: 2,
  kLonger: 3,
  kShorter: 4,
  kRetry: 5,
};

// Enum: CloseReason
compose.mojom.CloseReason = {
  kFirstRunCloseButton: 0,
  kCloseButton: 1,
  kInsertButton: 2,
  kMSBBCloseButton: 3,
};

// Enum: UserFeedback
compose.mojom.UserFeedback = {
  kUserFeedbackUnspecified: 0,
  kUserFeedbackNegative: 1,
  kUserFeedbackPositive: 2,
};

// Struct: ComposeResponse
mojo.internal.Struct(
    compose.mojom.ComposeResponseSpec, 'compose.mojom.ComposeResponse', [
      mojo.internal.StructField('status', 0, 0, compose.mojom.ComposeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('undo_available', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('redo_available', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('provided_by_user', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('on_device_evaluation_used', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('triggered_from_modifier', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PartialComposeResponse
mojo.internal.Struct(
    compose.mojom.PartialComposeResponseSpec, 'compose.mojom.PartialComposeResponse', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ComposeState
mojo.internal.Struct(
    compose.mojom.ComposeStateSpec, 'compose.mojom.ComposeState', [
      mojo.internal.StructField('webui_state', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, compose.mojom.ComposeResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('feedback', 16, 0, compose.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_pending_request', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ConfigurableParams
mojo.internal.Struct(
    compose.mojom.ConfigurableParamsSpec, 'compose.mojom.ConfigurableParams', [
      mojo.internal.StructField('min_word_limit', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_word_limit', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max_character_limit', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenMetadata
mojo.internal.Struct(
    compose.mojom.OpenMetadataSpec, 'compose.mojom.OpenMetadata', [
      mojo.internal.StructField('initial_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('compose_state', 8, 0, compose.mojom.ComposeStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('configurable_params', 16, 0, compose.mojom.ConfigurableParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fre_complete', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('msbb_state', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text_selected', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ComposeSessionUntrustedPageHandlerFactory
mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_Params', [
      mojo.internal.StructField('client_handler', 0, 0, mojo.internal.InterfaceRequest(compose.mojom.ComposeClientUntrustedPageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(compose.mojom.ComposeSessionUntrustedPageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('dialog', 16, 0, mojo.internal.InterfaceProxy(compose.mojom.ComposeUntrustedDialogSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeSessionUntrustedPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createComposeSessionUntrustedPageHandler(client_handler, handler, dialog) {
    return this.$.createComposeSessionUntrustedPageHandler(client_handler, handler, dialog);
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ComposeSessionUntrustedPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createComposeSessionUntrustedPageHandler(client_handler, handler, dialog) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec,
      null,
      [client_handler, handler, dialog],
      false);
  }

};

compose.mojom.ComposeSessionUntrustedPageHandlerFactory.getRemote = function() {
  let remote = new compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeSessionUntrustedPageHandlerFactory',
    'context');
  return remote.$;
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ComposeSessionUntrustedPageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateComposeSessionUntrustedPageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateComposeSessionUntrustedPageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandlerFactory_CreateComposeSessionUntrustedPageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createComposeSessionUntrustedPageHandler');
          const result = this.impl.createComposeSessionUntrustedPageHandler(params.client_handler, params.handler, params.dialog);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryReceiver = compose.mojom.ComposeSessionUntrustedPageHandlerFactoryReceiver;

compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPtr = compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRemote;
compose.mojom.ComposeSessionUntrustedPageHandlerFactoryRequest = compose.mojom.ComposeSessionUntrustedPageHandlerFactoryPendingReceiver;


// Interface: ComposeSessionUntrustedPageHandler
mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Compose_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, compose.mojom.InputModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('edited', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_Params', [
      mojo.internal.StructField('style', 0, 0, compose.mojom.StyleModifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_Params', [
      mojo.internal.StructField('webui_state', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParams', [
      mojo.internal.StructField('initial_state', 0, 0, compose.mojom.OpenMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParams', [
      mojo.internal.StructField('last_state', 0, 0, compose.mojom.ComposeStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParams', [
      mojo.internal.StructField('state_before_error', 0, 0, compose.mojom.ComposeStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParams', [
      mojo.internal.StructField('next_state', 0, 0, compose.mojom.ComposeStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, compose.mojom.UserFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_Params', [
      mojo.internal.StructField('new_result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec, 'compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParams', [
      mojo.internal.StructField('is_edited', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

compose.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeSessionUntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new compose.mojom.ComposeSessionUntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  logCancelEdit() {
    return this.$.logCancelEdit();
  }
  compose(input, mode, edited) {
    return this.$.compose(input, mode, edited);
  }
  rewrite(style) {
    return this.$.rewrite(style);
  }
  logEditInput() {
    return this.$.logEditInput();
  }
  saveWebUIState(webui_state) {
    return this.$.saveWebUIState(webui_state);
  }
  acceptComposeResult() {
    return this.$.acceptComposeResult();
  }
  requestInitialState() {
    return this.$.requestInitialState();
  }
  undo() {
    return this.$.undo();
  }
  recoverFromErrorState() {
    return this.$.recoverFromErrorState();
  }
  redo() {
    return this.$.redo();
  }
  openBugReportingLink() {
    return this.$.openBugReportingLink();
  }
  openComposeLearnMorePage() {
    return this.$.openComposeLearnMorePage();
  }
  openEnterpriseComposeLearnMorePage() {
    return this.$.openEnterpriseComposeLearnMorePage();
  }
  openFeedbackSurveyLink() {
    return this.$.openFeedbackSurveyLink();
  }
  openSignInPage() {
    return this.$.openSignInPage();
  }
  setUserFeedback(feedback) {
    return this.$.setUserFeedback(feedback);
  }
  editResult(new_result) {
    return this.$.editResult(new_result);
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ComposeSessionUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  logCancelEdit() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec,
      null,
      [],
      false);
  }

  compose(input, mode, edited) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec,
      null,
      [input, mode, edited],
      false);
  }

  rewrite(style) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec,
      null,
      [style],
      false);
  }

  logEditInput() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec,
      null,
      [],
      false);
  }

  saveWebUIState(webui_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec,
      null,
      [webui_state],
      false);
  }

  acceptComposeResult() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec,
      [],
      false);
  }

  requestInitialState() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec,
      [],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec,
      [],
      false);
  }

  recoverFromErrorState() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec,
      [],
      false);
  }

  redo() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec,
      [],
      false);
  }

  openBugReportingLink() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec,
      null,
      [],
      false);
  }

  openComposeLearnMorePage() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec,
      null,
      [],
      false);
  }

  openEnterpriseComposeLearnMorePage() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec,
      null,
      [],
      false);
  }

  openFeedbackSurveyLink() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec,
      null,
      [],
      false);
  }

  openSignInPage() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec,
      null,
      [],
      false);
  }

  setUserFeedback(feedback) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec,
      null,
      [feedback],
      false);
  }

  editResult(new_result) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec,
      compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec,
      [new_result],
      false);
  }

};

compose.mojom.ComposeSessionUntrustedPageHandler.getRemote = function() {
  let remote = new compose.mojom.ComposeSessionUntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeSessionUntrustedPageHandler',
    'context');
  return remote.$;
};

compose.mojom.ComposeSessionUntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ComposeSessionUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: LogCancelEdit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogCancelEdit (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Compose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Compose (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Rewrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Rewrite (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LogEditInput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogEditInput (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SaveWebUIState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveWebUIState (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AcceptComposeResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptComposeResult (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RequestInitialState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestInitialState (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Undo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Undo (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RecoverFromErrorState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecoverFromErrorState (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Redo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Redo (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OpenBugReportingLink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenBugReportingLink (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OpenComposeLearnMorePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenComposeLearnMorePage (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OpenEnterpriseComposeLearnMorePage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenEnterpriseComposeLearnMorePage (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OpenFeedbackSurveyLink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackSurveyLink (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OpenSignInPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSignInPage (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetUserFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserFeedback (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: EditResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EditResult (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_LogCancelEdit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logCancelEdit');
          const result = this.impl.logCancelEdit();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Compose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.compose');
          const result = this.impl.compose(params.input, params.mode, params.edited);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Rewrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rewrite');
          const result = this.impl.rewrite(params.style);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_LogEditInput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logEditInput');
          const result = this.impl.logEditInput();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_SaveWebUIState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveWebUIState');
          const result = this.impl.saveWebUIState(params.webui_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptComposeResult');
          const result = this.impl.acceptComposeResult();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_AcceptComposeResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AcceptComposeResult FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestInitialState');
          const result = this.impl.requestInitialState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_RequestInitialState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestInitialState FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undo');
          const result = this.impl.undo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_Undo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Undo FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recoverFromErrorState');
          const result = this.impl.recoverFromErrorState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_RecoverFromErrorState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RecoverFromErrorState FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.redo');
          const result = this.impl.redo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_Redo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Redo FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenBugReportingLink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openBugReportingLink');
          const result = this.impl.openBugReportingLink();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenComposeLearnMorePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openComposeLearnMorePage');
          const result = this.impl.openComposeLearnMorePage();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenEnterpriseComposeLearnMorePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openEnterpriseComposeLearnMorePage');
          const result = this.impl.openEnterpriseComposeLearnMorePage();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenFeedbackSurveyLink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackSurveyLink');
          const result = this.impl.openFeedbackSurveyLink();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_OpenSignInPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openSignInPage');
          const result = this.impl.openSignInPage();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_SetUserFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserFeedback');
          const result = this.impl.setUserFeedback(params.feedback);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.editResult');
          const result = this.impl.editResult(params.new_result);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, compose.mojom.ComposeSessionUntrustedPageHandler_EditResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EditResult FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

compose.mojom.ComposeSessionUntrustedPageHandlerReceiver = compose.mojom.ComposeSessionUntrustedPageHandlerReceiver;

compose.mojom.ComposeSessionUntrustedPageHandlerPtr = compose.mojom.ComposeSessionUntrustedPageHandlerRemote;
compose.mojom.ComposeSessionUntrustedPageHandlerRequest = compose.mojom.ComposeSessionUntrustedPageHandlerPendingReceiver;


// Interface: ComposeClientUntrustedPageHandler
mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_Params', [
      mojo.internal.StructField('reason', 0, 0, compose.mojom.CloseReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec, 'compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_Params', [
    ],
    [[0, 8]]);

compose.mojom.ComposeClientUntrustedPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.ComposeClientUntrustedPageHandlerRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeClientUntrustedPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.ComposeClientUntrustedPageHandlerPendingReceiver,
      handle);
    this.$ = new compose.mojom.ComposeClientUntrustedPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI(reason) {
    return this.$.closeUI(reason);
  }
  completeFirstRun() {
    return this.$.completeFirstRun();
  }
  openComposeSettings() {
    return this.$.openComposeSettings();
  }
};

compose.mojom.ComposeClientUntrustedPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ComposeClientUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI(reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec,
      null,
      [reason],
      false);
  }

  completeFirstRun() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec,
      null,
      [],
      false);
  }

  openComposeSettings() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec,
      null,
      [],
      false);
  }

};

compose.mojom.ComposeClientUntrustedPageHandler.getRemote = function() {
  let remote = new compose.mojom.ComposeClientUntrustedPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeClientUntrustedPageHandler',
    'context');
  return remote.$;
};

compose.mojom.ComposeClientUntrustedPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ComposeClientUntrustedPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseUI (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CompleteFirstRun
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CompleteFirstRun (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenComposeSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenComposeSettings (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_ShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_CloseUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI(params.reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_CompleteFirstRun_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.completeFirstRun');
          const result = this.impl.completeFirstRun();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeClientUntrustedPageHandler_OpenComposeSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openComposeSettings');
          const result = this.impl.openComposeSettings();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

compose.mojom.ComposeClientUntrustedPageHandlerReceiver = compose.mojom.ComposeClientUntrustedPageHandlerReceiver;

compose.mojom.ComposeClientUntrustedPageHandlerPtr = compose.mojom.ComposeClientUntrustedPageHandlerRemote;
compose.mojom.ComposeClientUntrustedPageHandlerRequest = compose.mojom.ComposeClientUntrustedPageHandlerPendingReceiver;


// Interface: ComposeUntrustedDialog
mojo.internal.Struct(
    compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec, 'compose.mojom.ComposeUntrustedDialog_ResponseReceived_Params', [
      mojo.internal.StructField('response', 0, 0, compose.mojom.ComposeResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec, 'compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_Params', [
      mojo.internal.StructField('partial_response', 0, 0, compose.mojom.PartialComposeResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

compose.mojom.ComposeUntrustedDialogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

compose.mojom.ComposeUntrustedDialogRemote = class {
  static get $interfaceName() {
    return 'compose.mojom.ComposeUntrustedDialog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      compose.mojom.ComposeUntrustedDialogPendingReceiver,
      handle);
    this.$ = new compose.mojom.ComposeUntrustedDialogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  responseReceived(response) {
    return this.$.responseReceived(response);
  }
  partialResponseReceived(partial_response) {
    return this.$.partialResponseReceived(partial_response);
  }
};

compose.mojom.ComposeUntrustedDialogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ComposeUntrustedDialog', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  responseReceived(response) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec,
      null,
      [response],
      false);
  }

  partialResponseReceived(partial_response) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec,
      null,
      [partial_response],
      false);
  }

};

compose.mojom.ComposeUntrustedDialog.getRemote = function() {
  let remote = new compose.mojom.ComposeUntrustedDialogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'compose.mojom.ComposeUntrustedDialog',
    'context');
  return remote.$;
};

compose.mojom.ComposeUntrustedDialogReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ComposeUntrustedDialog', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ResponseReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResponseReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PartialResponseReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PartialResponseReceived (1)');
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
          const params = decoder.decodeStructInline(compose.mojom.ComposeUntrustedDialog_ResponseReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.responseReceived');
          const result = this.impl.responseReceived(params.response);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(compose.mojom.ComposeUntrustedDialog_PartialResponseReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.partialResponseReceived');
          const result = this.impl.partialResponseReceived(params.partial_response);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

compose.mojom.ComposeUntrustedDialogReceiver = compose.mojom.ComposeUntrustedDialogReceiver;

compose.mojom.ComposeUntrustedDialogPtr = compose.mojom.ComposeUntrustedDialogRemote;
compose.mojom.ComposeUntrustedDialogRequest = compose.mojom.ComposeUntrustedDialogPendingReceiver;

