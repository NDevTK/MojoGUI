// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/lens/core/mojom/lens.mojom
 // Module: lens.mojom

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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.lens = mojo.internal.bindings.lens || {};
mojo.internal.bindings.lens.mojom = mojo.internal.bindings.lens.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.lens.mojom.UserActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.lens.mojom.SemanticEventSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.lens.mojom.OverlayThemeSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandlerFactory = {};
mojo.internal.bindings.lens.mojom.LensPageHandlerFactory.$interfaceName = 'lens.mojom.LensPageHandlerFactory';
mojo.internal.bindings.lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler = {};
mojo.internal.bindings.lens.mojom.LensPageHandler.$interfaceName = 'lens.mojom.LensPageHandler';
mojo.internal.bindings.lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_CopyText_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_CopyImage_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage = {};
mojo.internal.bindings.lens.mojom.LensPage.$interfaceName = 'lens.mojom.LensPage';
mojo.internal.bindings.lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_ObjectsReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_TextReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_RegionTextReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_ThemeReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_SetTextSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_SetTranslateMode_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_ClearRegionSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_ClearTextSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_ClearAllSelections_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_OnCopyCommand_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensPage_OnOverlayReshown_ParamsSpec = { $: {} };

// Enum: UserAction
mojo.internal.bindings.lens.mojom.UserAction = {
  kRegionSelection: 0,
  kRegionSelectionChange: 1,
  kTextSelection: 2,
  kObjectClick: 3,
  kTranslateText: 4,
  kCopyText: 5,
  kMyActivity: 6,
  kLearnMore: 7,
  kSendFeedback: 8,
  kTapRegionSelection: 9,
  kTranslateButtonEnableAction: 10,
  kTranslateButtonDisableAction: 11,
  kTranslateSourceLanguageChanged: 12,
  kTranslateTargetLanguageChanged: 13,
  kTranslateTextSelection: 14,
  kCopyAsImage: 15,
  kSaveAsImage: 16,
  kMathSelection: 17,
  kFullScreenshotRegionSelection: 18,
};

// Enum: SemanticEvent
mojo.internal.bindings.lens.mojom.SemanticEvent = {
  kTextGleamsViewStart: 0,
  kTextGleamsViewEnd: 1,
};

// Struct: OverlayTheme
mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.OverlayThemeSpec, 'lens.mojom.OverlayTheme', [
      mojo.internal.StructField('arg_primary', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shader_layer_1', 8, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shader_layer_2', 16, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shader_layer_3', 24, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shader_layer_4', 32, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_shader_layer_5', 40, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scrim', 48, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_surface_container_highest_light', 56, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_surface_container_highest_dark', 64, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection_element', 72, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: LensPageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec, 'lens.mojom.LensPageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.lens.mojom.LensPageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.lens.mojom.LensPageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_handler, arg_page) {
    return this.$.createPageHandler(arg_handler, arg_page);
  }
};

mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LensPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_handler, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_handler, arg_page],
      false);
  }

};

mojo.internal.bindings.lens.mojom.LensPageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensPageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LensPageHandlerFactory', [
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_handler, params.arg_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryReceiver = mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryReceiver;

mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryPtr = mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryRemote;
mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryRequest = mojo.internal.bindings.lens.mojom.LensPageHandlerFactoryPendingReceiver;


// Interface: LensPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_ActivityRequestedByOverlay_Params', [
      mojo.internal.StructField('arg_click_modifiers', 0, 0, mojo.internal.bindings.ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec, 'lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec, 'lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec, 'lens.mojom.LensPageHandler_NotifyOverlayInitialized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec, 'lens.mojom.LensPageHandler_AddBackgroundBlur_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec, 'lens.mojom.LensPageHandler_SetLiveBlur_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec, 'lens.mojom.LensPageHandler_GetOverlayInvocationSource_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec, 'lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParams', [
      mojo.internal.StructField('arg_invocation_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_InfoRequestedByOverlay_Params', [
      mojo.internal.StructField('arg_click_modifiers', 0, 0, mojo.internal.bindings.ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueLensRegionRequest_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_click', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueLensObjectRequest_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_mask_click', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueTextSelectionRequest_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection_start_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_selection_end_index', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_translate', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection_start_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_selection_end_index', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueMathSelectionRequest_Params', [
      mojo.internal.StructField('arg_query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_formula', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection_start_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_selection_end_index', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_Params', [
      mojo.internal.StructField('arg_source_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec, 'lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_CopyText_ParamsSpec, 'lens.mojom.LensPageHandler_CopyText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_CopyImage_ParamsSpec, 'lens.mojom.LensPageHandler_CopyImage_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec, 'lens.mojom.LensPageHandler_SaveAsImage_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec, 'lens.mojom.LensPageHandler_ClosePreselectionBubble_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec, 'lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_Params', [
      mojo.internal.StructField('arg_user_action', 0, 0, mojo.internal.bindings.mojo.internal.bindings.lens.mojom.UserActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec, 'lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.mojo.internal.bindings.lens.mojom.SemanticEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec, 'lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec, 'lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_Params', [
      mojo.internal.StructField('arg_feature_engaged', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec, 'lens.mojom.LensPageHandler_FetchSupportedLanguages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec, 'lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParams', [
      mojo.internal.StructField('arg_browser_locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_languages', 8, 0, mojo.internal.Array(mojo.internal.bindings.lens.mojom.LanguageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_target_languages', 16, 0, mojo.internal.Array(mojo.internal.bindings.lens.mojom.LanguageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec, 'lens.mojom.LensPageHandler_FinishReshowOverlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec, 'lens.mojom.LensPageHandler_AcceptPrivacyNotice_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec, 'lens.mojom.LensPageHandler_DismissPrivacyNotice_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.lens.mojom.LensPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.lens.mojom.LensPageHandlerRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.lens.mojom.LensPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.lens.mojom.LensPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  activityRequestedByOverlay(arg_click_modifiers) {
    return this.$.activityRequestedByOverlay(arg_click_modifiers);
  }
  closeRequestedByOverlayCloseButton() {
    return this.$.closeRequestedByOverlayCloseButton();
  }
  closeRequestedByOverlayBackgroundClick() {
    return this.$.closeRequestedByOverlayBackgroundClick();
  }
  notifyOverlayInitialized() {
    return this.$.notifyOverlayInitialized();
  }
  addBackgroundBlur() {
    return this.$.addBackgroundBlur();
  }
  setLiveBlur(arg_enabled) {
    return this.$.setLiveBlur(arg_enabled);
  }
  feedbackRequestedByOverlay() {
    return this.$.feedbackRequestedByOverlay();
  }
  getOverlayInvocationSource() {
    return this.$.getOverlayInvocationSource();
  }
  infoRequestedByOverlay(arg_click_modifiers) {
    return this.$.infoRequestedByOverlay(arg_click_modifiers);
  }
  issueLensRegionRequest(arg_region, arg_is_click) {
    return this.$.issueLensRegionRequest(arg_region, arg_is_click);
  }
  issueLensObjectRequest(arg_region, arg_is_mask_click) {
    return this.$.issueLensObjectRequest(arg_region, arg_is_mask_click);
  }
  issueTextSelectionRequest(arg_query, arg_selection_start_index, arg_selection_end_index, arg_is_translate) {
    return this.$.issueTextSelectionRequest(arg_query, arg_selection_start_index, arg_selection_end_index, arg_is_translate);
  }
  issueTranslateSelectionRequest(arg_query, arg_content_language, arg_selection_start_index, arg_selection_end_index) {
    return this.$.issueTranslateSelectionRequest(arg_query, arg_content_language, arg_selection_start_index, arg_selection_end_index);
  }
  issueMathSelectionRequest(arg_query, arg_formula, arg_selection_start_index, arg_selection_end_index) {
    return this.$.issueMathSelectionRequest(arg_query, arg_formula, arg_selection_start_index, arg_selection_end_index);
  }
  issueTranslateFullPageRequest(arg_source_language, arg_target_language) {
    return this.$.issueTranslateFullPageRequest(arg_source_language, arg_target_language);
  }
  issueEndTranslateModeRequest() {
    return this.$.issueEndTranslateModeRequest();
  }
  copyText(arg_text) {
    return this.$.copyText(arg_text);
  }
  copyImage(arg_region) {
    return this.$.copyImage(arg_region);
  }
  saveAsImage(arg_region) {
    return this.$.saveAsImage(arg_region);
  }
  closePreselectionBubble() {
    return this.$.closePreselectionBubble();
  }
  recordUkmAndTaskCompletionForLensOverlayInteraction(arg_user_action) {
    return this.$.recordUkmAndTaskCompletionForLensOverlayInteraction(arg_user_action);
  }
  recordLensOverlaySemanticEvent(arg_event) {
    return this.$.recordLensOverlaySemanticEvent(arg_event);
  }
  maybeShowTranslateFeaturePromo() {
    return this.$.maybeShowTranslateFeaturePromo();
  }
  maybeCloseTranslateFeaturePromo(arg_feature_engaged) {
    return this.$.maybeCloseTranslateFeaturePromo(arg_feature_engaged);
  }
  fetchSupportedLanguages() {
    return this.$.fetchSupportedLanguages();
  }
  finishReshowOverlay() {
    return this.$.finishReshowOverlay();
  }
  acceptPrivacyNotice() {
    return this.$.acceptPrivacyNotice();
  }
  dismissPrivacyNotice() {
    return this.$.dismissPrivacyNotice();
  }
};

mojo.internal.bindings.lens.mojom.LensPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LensPageHandler', [
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

  activityRequestedByOverlay(arg_click_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec,
      null,
      [arg_click_modifiers],
      false);
  }

  closeRequestedByOverlayCloseButton() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec,
      null,
      [],
      false);
  }

  closeRequestedByOverlayBackgroundClick() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec,
      null,
      [],
      false);
  }

  notifyOverlayInitialized() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec,
      null,
      [],
      false);
  }

  addBackgroundBlur() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec,
      null,
      [],
      false);
  }

  setLiveBlur(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  feedbackRequestedByOverlay() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec,
      null,
      [],
      false);
  }

  getOverlayInvocationSource() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec,
      mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec,
      [],
      false);
  }

  infoRequestedByOverlay(arg_click_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec,
      null,
      [arg_click_modifiers],
      false);
  }

  issueLensRegionRequest(arg_region, arg_is_click) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec,
      null,
      [arg_region, arg_is_click],
      false);
  }

  issueLensObjectRequest(arg_region, arg_is_mask_click) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec,
      null,
      [arg_region, arg_is_mask_click],
      false);
  }

  issueTextSelectionRequest(arg_query, arg_selection_start_index, arg_selection_end_index, arg_is_translate) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec,
      null,
      [arg_query, arg_selection_start_index, arg_selection_end_index, arg_is_translate],
      false);
  }

  issueTranslateSelectionRequest(arg_query, arg_content_language, arg_selection_start_index, arg_selection_end_index) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec,
      null,
      [arg_query, arg_content_language, arg_selection_start_index, arg_selection_end_index],
      false);
  }

  issueMathSelectionRequest(arg_query, arg_formula, arg_selection_start_index, arg_selection_end_index) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec,
      null,
      [arg_query, arg_formula, arg_selection_start_index, arg_selection_end_index],
      false);
  }

  issueTranslateFullPageRequest(arg_source_language, arg_target_language) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec,
      null,
      [arg_source_language, arg_target_language],
      false);
  }

  issueEndTranslateModeRequest() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec,
      null,
      [],
      false);
  }

  copyText(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_CopyText_ParamsSpec,
      null,
      [arg_text],
      false);
  }

  copyImage(arg_region) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_CopyImage_ParamsSpec,
      null,
      [arg_region],
      false);
  }

  saveAsImage(arg_region) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec,
      null,
      [arg_region],
      false);
  }

  closePreselectionBubble() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec,
      null,
      [],
      false);
  }

  recordUkmAndTaskCompletionForLensOverlayInteraction(arg_user_action) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec,
      null,
      [arg_user_action],
      false);
  }

  recordLensOverlaySemanticEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  maybeShowTranslateFeaturePromo() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec,
      null,
      [],
      false);
  }

  maybeCloseTranslateFeaturePromo(arg_feature_engaged) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec,
      null,
      [arg_feature_engaged],
      false);
  }

  fetchSupportedLanguages() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec,
      mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec,
      [],
      false);
  }

  finishReshowOverlay() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec,
      null,
      [],
      false);
  }

  acceptPrivacyNotice() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec,
      null,
      [],
      false);
  }

  dismissPrivacyNotice() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.lens.mojom.LensPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.lens.mojom.LensPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.lens.mojom.LensPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LensPageHandler', [
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
        
        // Try Method 0: ActivityRequestedByOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivityRequestedByOverlay (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseRequestedByOverlayCloseButton
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseRequestedByOverlayCloseButton (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CloseRequestedByOverlayBackgroundClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseRequestedByOverlayBackgroundClick (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyOverlayInitialized
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOverlayInitialized (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddBackgroundBlur
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddBackgroundBlur (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetLiveBlur
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLiveBlur (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FeedbackRequestedByOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FeedbackRequestedByOverlay (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetOverlayInvocationSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOverlayInvocationSource (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: InfoRequestedByOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InfoRequestedByOverlay (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: IssueLensRegionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueLensRegionRequest (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: IssueLensObjectRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueLensObjectRequest (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: IssueTextSelectionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueTextSelectionRequest (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: IssueTranslateSelectionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueTranslateSelectionRequest (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: IssueMathSelectionRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueMathSelectionRequest (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: IssueTranslateFullPageRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueTranslateFullPageRequest (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: IssueEndTranslateModeRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IssueEndTranslateModeRequest (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: CopyText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_CopyText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyText (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: CopyImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_CopyImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyImage (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SaveAsImage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SaveAsImage (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ClosePreselectionBubble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClosePreselectionBubble (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: RecordUkmAndTaskCompletionForLensOverlayInteraction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordUkmAndTaskCompletionForLensOverlayInteraction (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: RecordLensOverlaySemanticEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordLensOverlaySemanticEvent (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: MaybeShowTranslateFeaturePromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeShowTranslateFeaturePromo (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: MaybeCloseTranslateFeaturePromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MaybeCloseTranslateFeaturePromo (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: FetchSupportedLanguages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchSupportedLanguages (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: FinishReshowOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FinishReshowOverlay (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: AcceptPrivacyNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcceptPrivacyNotice (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: DismissPrivacyNotice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissPrivacyNotice (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_ActivityRequestedByOverlay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activityRequestedByOverlay');
          const result = this.impl.activityRequestedByOverlay(params.arg_click_modifiers);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayCloseButton_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeRequestedByOverlayCloseButton');
          const result = this.impl.closeRequestedByOverlayCloseButton();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_CloseRequestedByOverlayBackgroundClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeRequestedByOverlayBackgroundClick');
          const result = this.impl.closeRequestedByOverlayBackgroundClick();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_NotifyOverlayInitialized_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOverlayInitialized');
          const result = this.impl.notifyOverlayInitialized();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_AddBackgroundBlur_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addBackgroundBlur');
          const result = this.impl.addBackgroundBlur();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_SetLiveBlur_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLiveBlur');
          const result = this.impl.setLiveBlur(params.arg_enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_FeedbackRequestedByOverlay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.feedbackRequestedByOverlay');
          const result = this.impl.feedbackRequestedByOverlay();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOverlayInvocationSource');
          const result = this.impl.getOverlayInvocationSource();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lens.mojom.LensPageHandler_GetOverlayInvocationSource_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOverlayInvocationSource FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_InfoRequestedByOverlay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.infoRequestedByOverlay');
          const result = this.impl.infoRequestedByOverlay(params.arg_click_modifiers);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensRegionRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueLensRegionRequest');
          const result = this.impl.issueLensRegionRequest(params.arg_region, params.arg_is_click);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueLensObjectRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueLensObjectRequest');
          const result = this.impl.issueLensObjectRequest(params.arg_region, params.arg_is_mask_click);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTextSelectionRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueTextSelectionRequest');
          const result = this.impl.issueTextSelectionRequest(params.arg_query, params.arg_selection_start_index, params.arg_selection_end_index, params.arg_is_translate);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateSelectionRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueTranslateSelectionRequest');
          const result = this.impl.issueTranslateSelectionRequest(params.arg_query, params.arg_content_language, params.arg_selection_start_index, params.arg_selection_end_index);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueMathSelectionRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueMathSelectionRequest');
          const result = this.impl.issueMathSelectionRequest(params.arg_query, params.arg_formula, params.arg_selection_start_index, params.arg_selection_end_index);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueTranslateFullPageRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueTranslateFullPageRequest');
          const result = this.impl.issueTranslateFullPageRequest(params.arg_source_language, params.arg_target_language);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_IssueEndTranslateModeRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueEndTranslateModeRequest');
          const result = this.impl.issueEndTranslateModeRequest();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_CopyText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyText');
          const result = this.impl.copyText(params.arg_text);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_CopyImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyImage');
          const result = this.impl.copyImage(params.arg_region);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_SaveAsImage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveAsImage');
          const result = this.impl.saveAsImage(params.arg_region);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_ClosePreselectionBubble_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePreselectionBubble');
          const result = this.impl.closePreselectionBubble();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_RecordUkmAndTaskCompletionForLensOverlayInteraction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordUkmAndTaskCompletionForLensOverlayInteraction');
          const result = this.impl.recordUkmAndTaskCompletionForLensOverlayInteraction(params.arg_user_action);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_RecordLensOverlaySemanticEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordLensOverlaySemanticEvent');
          const result = this.impl.recordLensOverlaySemanticEvent(params.arg_event);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeShowTranslateFeaturePromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeShowTranslateFeaturePromo');
          const result = this.impl.maybeShowTranslateFeaturePromo();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_MaybeCloseTranslateFeaturePromo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeCloseTranslateFeaturePromo');
          const result = this.impl.maybeCloseTranslateFeaturePromo(params.arg_feature_engaged);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchSupportedLanguages');
          const result = this.impl.fetchSupportedLanguages();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lens.mojom.LensPageHandler_FetchSupportedLanguages_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchSupportedLanguages FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_FinishReshowOverlay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finishReshowOverlay');
          const result = this.impl.finishReshowOverlay();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_AcceptPrivacyNotice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acceptPrivacyNotice');
          const result = this.impl.acceptPrivacyNotice();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPageHandler_DismissPrivacyNotice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dismissPrivacyNotice');
          const result = this.impl.dismissPrivacyNotice();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.lens.mojom.LensPageHandlerReceiver = mojo.internal.bindings.lens.mojom.LensPageHandlerReceiver;

mojo.internal.bindings.lens.mojom.LensPageHandlerPtr = mojo.internal.bindings.lens.mojom.LensPageHandlerRemote;
mojo.internal.bindings.lens.mojom.LensPageHandlerRequest = mojo.internal.bindings.lens.mojom.LensPageHandlerPendingReceiver;


// Interface: LensPage
mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec, 'lens.mojom.LensPage_ScreenshotDataReceived_Params', [
      mojo.internal.StructField('arg_screenshot_data', 0, 0, mojo.internal.bindings.skia.mojom.BitmapMappedFromTrustedProcessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_side_panel_open', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec, 'lens.mojom.LensPage_NotifyHandshakeComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec, 'lens.mojom.LensPage_NotifyResultsPanelOpened_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec, 'lens.mojom.LensPage_NotifyOverlayClosing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_ObjectsReceived_ParamsSpec, 'lens.mojom.LensPage_ObjectsReceived_Params', [
      mojo.internal.StructField('arg_objects', 0, 0, mojo.internal.Array(mojo.internal.bindings.lens.mojom.OverlayObjectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_TextReceived_ParamsSpec, 'lens.mojom.LensPage_TextReceived_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.lens.mojom.TextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_RegionTextReceived_ParamsSpec, 'lens.mojom.LensPage_RegionTextReceived_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.lens.mojom.TextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_injected_image', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_ThemeReceived_ParamsSpec, 'lens.mojom.LensPage_ThemeReceived_Params', [
      mojo.internal.StructField('arg_theme', 0, 0, mojo.internal.bindings.mojo.internal.bindings.lens.mojom.OverlayThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec, 'lens.mojom.LensPage_ShouldShowContextualSearchBox_Params', [
      mojo.internal.StructField('arg_should_show', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec, 'lens.mojom.LensPage_PageContentTypeChanged_Params', [
      mojo.internal.StructField('arg_new_page_content_type', 0, 0, mojo.internal.bindings.lens.mojom.PageContentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec, 'lens.mojom.LensPage_SetPostRegionSelection_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.lens.mojom.CenterRotatedBoxSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_SetTextSelection_ParamsSpec, 'lens.mojom.LensPage_SetTextSelection_Params', [
      mojo.internal.StructField('arg_selection_start_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_selection_end_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_SetTranslateMode_ParamsSpec, 'lens.mojom.LensPage_SetTranslateMode_Params', [
      mojo.internal.StructField('arg_source_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_ClearRegionSelection_ParamsSpec, 'lens.mojom.LensPage_ClearRegionSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_ClearTextSelection_ParamsSpec, 'lens.mojom.LensPage_ClearTextSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_ClearAllSelections_ParamsSpec, 'lens.mojom.LensPage_ClearAllSelections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_OnCopyCommand_ParamsSpec, 'lens.mojom.LensPage_OnCopyCommand_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec, 'lens.mojom.LensPage_SuppressGhostLoader_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensPage_OnOverlayReshown_ParamsSpec, 'lens.mojom.LensPage_OnOverlayReshown_Params', [
      mojo.internal.StructField('arg_screenshot_data', 0, 0, mojo.internal.bindings.skia.mojom.BitmapMappedFromTrustedProcessSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.lens.mojom.LensPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.lens.mojom.LensPageRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.lens.mojom.LensPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.lens.mojom.LensPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  screenshotDataReceived(arg_screenshot_data, arg_is_side_panel_open) {
    return this.$.screenshotDataReceived(arg_screenshot_data, arg_is_side_panel_open);
  }
  notifyHandshakeComplete() {
    return this.$.notifyHandshakeComplete();
  }
  notifyResultsPanelOpened() {
    return this.$.notifyResultsPanelOpened();
  }
  notifyOverlayClosing() {
    return this.$.notifyOverlayClosing();
  }
  objectsReceived(arg_objects) {
    return this.$.objectsReceived(arg_objects);
  }
  textReceived(arg_text) {
    return this.$.textReceived(arg_text);
  }
  regionTextReceived(arg_text, arg_is_injected_image) {
    return this.$.regionTextReceived(arg_text, arg_is_injected_image);
  }
  themeReceived(arg_theme) {
    return this.$.themeReceived(arg_theme);
  }
  shouldShowContextualSearchBox(arg_should_show) {
    return this.$.shouldShowContextualSearchBox(arg_should_show);
  }
  pageContentTypeChanged(arg_new_page_content_type) {
    return this.$.pageContentTypeChanged(arg_new_page_content_type);
  }
  setPostRegionSelection(arg_region) {
    return this.$.setPostRegionSelection(arg_region);
  }
  setTextSelection(arg_selection_start_index, arg_selection_end_index) {
    return this.$.setTextSelection(arg_selection_start_index, arg_selection_end_index);
  }
  setTranslateMode(arg_source_language, arg_target_language) {
    return this.$.setTranslateMode(arg_source_language, arg_target_language);
  }
  clearRegionSelection() {
    return this.$.clearRegionSelection();
  }
  clearTextSelection() {
    return this.$.clearTextSelection();
  }
  clearAllSelections() {
    return this.$.clearAllSelections();
  }
  onCopyCommand() {
    return this.$.onCopyCommand();
  }
  suppressGhostLoader() {
    return this.$.suppressGhostLoader();
  }
  onOverlayReshown(arg_screenshot_data) {
    return this.$.onOverlayReshown(arg_screenshot_data);
  }
};

mojo.internal.bindings.lens.mojom.LensPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LensPage', [
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
      { explicit: null },
      { explicit: null },
    ]);
  }

  screenshotDataReceived(arg_screenshot_data, arg_is_side_panel_open) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec,
      null,
      [arg_screenshot_data, arg_is_side_panel_open],
      false);
  }

  notifyHandshakeComplete() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec,
      null,
      [],
      false);
  }

  notifyResultsPanelOpened() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec,
      null,
      [],
      false);
  }

  notifyOverlayClosing() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec,
      null,
      [],
      false);
  }

  objectsReceived(arg_objects) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_ObjectsReceived_ParamsSpec,
      null,
      [arg_objects],
      false);
  }

  textReceived(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_TextReceived_ParamsSpec,
      null,
      [arg_text],
      false);
  }

  regionTextReceived(arg_text, arg_is_injected_image) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_RegionTextReceived_ParamsSpec,
      null,
      [arg_text, arg_is_injected_image],
      false);
  }

  themeReceived(arg_theme) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_ThemeReceived_ParamsSpec,
      null,
      [arg_theme],
      false);
  }

  shouldShowContextualSearchBox(arg_should_show) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec,
      null,
      [arg_should_show],
      false);
  }

  pageContentTypeChanged(arg_new_page_content_type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec,
      null,
      [arg_new_page_content_type],
      false);
  }

  setPostRegionSelection(arg_region) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec,
      null,
      [arg_region],
      false);
  }

  setTextSelection(arg_selection_start_index, arg_selection_end_index) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_SetTextSelection_ParamsSpec,
      null,
      [arg_selection_start_index, arg_selection_end_index],
      false);
  }

  setTranslateMode(arg_source_language, arg_target_language) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_SetTranslateMode_ParamsSpec,
      null,
      [arg_source_language, arg_target_language],
      false);
  }

  clearRegionSelection() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_ClearRegionSelection_ParamsSpec,
      null,
      [],
      false);
  }

  clearTextSelection() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_ClearTextSelection_ParamsSpec,
      null,
      [],
      false);
  }

  clearAllSelections() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_ClearAllSelections_ParamsSpec,
      null,
      [],
      false);
  }

  onCopyCommand() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_OnCopyCommand_ParamsSpec,
      null,
      [],
      false);
  }

  suppressGhostLoader() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec,
      null,
      [],
      false);
  }

  onOverlayReshown(arg_screenshot_data) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.lens.mojom.LensPage_OnOverlayReshown_ParamsSpec,
      null,
      [arg_screenshot_data],
      false);
  }

};

mojo.internal.bindings.lens.mojom.LensPage.getRemote = function() {
  let remote = new mojo.internal.bindings.lens.mojom.LensPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.lens.mojom.LensPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LensPage', [
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
        
        // Try Method 0: ScreenshotDataReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScreenshotDataReceived (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyHandshakeComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyHandshakeComplete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyResultsPanelOpened
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyResultsPanelOpened (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyOverlayClosing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyOverlayClosing (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ObjectsReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ObjectsReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObjectsReceived (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TextReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_TextReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextReceived (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RegionTextReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_RegionTextReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegionTextReceived (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ThemeReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ThemeReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ThemeReceived (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ShouldShowContextualSearchBox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldShowContextualSearchBox (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: PageContentTypeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageContentTypeChanged (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetPostRegionSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPostRegionSelection (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetTextSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_SetTextSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextSelection (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetTranslateMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_SetTranslateMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTranslateMode (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ClearRegionSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ClearRegionSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearRegionSelection (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ClearTextSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ClearTextSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearTextSelection (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ClearAllSelections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ClearAllSelections_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearAllSelections (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: OnCopyCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_OnCopyCommand_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCopyCommand (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SuppressGhostLoader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuppressGhostLoader (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: OnOverlayReshown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_OnOverlayReshown_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOverlayReshown (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ScreenshotDataReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.screenshotDataReceived');
          const result = this.impl.screenshotDataReceived(params.arg_screenshot_data, params.arg_is_side_panel_open);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_NotifyHandshakeComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyHandshakeComplete');
          const result = this.impl.notifyHandshakeComplete();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_NotifyResultsPanelOpened_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyResultsPanelOpened');
          const result = this.impl.notifyResultsPanelOpened();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_NotifyOverlayClosing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOverlayClosing');
          const result = this.impl.notifyOverlayClosing();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ObjectsReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.objectsReceived');
          const result = this.impl.objectsReceived(params.arg_objects);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_TextReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.textReceived');
          const result = this.impl.textReceived(params.arg_text);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_RegionTextReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.regionTextReceived');
          const result = this.impl.regionTextReceived(params.arg_text, params.arg_is_injected_image);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ThemeReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.themeReceived');
          const result = this.impl.themeReceived(params.arg_theme);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ShouldShowContextualSearchBox_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldShowContextualSearchBox');
          const result = this.impl.shouldShowContextualSearchBox(params.arg_should_show);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_PageContentTypeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pageContentTypeChanged');
          const result = this.impl.pageContentTypeChanged(params.arg_new_page_content_type);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_SetPostRegionSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPostRegionSelection');
          const result = this.impl.setPostRegionSelection(params.arg_region);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_SetTextSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTextSelection');
          const result = this.impl.setTextSelection(params.arg_selection_start_index, params.arg_selection_end_index);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_SetTranslateMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTranslateMode');
          const result = this.impl.setTranslateMode(params.arg_source_language, params.arg_target_language);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ClearRegionSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearRegionSelection');
          const result = this.impl.clearRegionSelection();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ClearTextSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTextSelection');
          const result = this.impl.clearTextSelection();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_ClearAllSelections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearAllSelections');
          const result = this.impl.clearAllSelections();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_OnCopyCommand_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCopyCommand');
          const result = this.impl.onCopyCommand();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_SuppressGhostLoader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suppressGhostLoader');
          const result = this.impl.suppressGhostLoader();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensPage_OnOverlayReshown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOverlayReshown');
          const result = this.impl.onOverlayReshown(params.arg_screenshot_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.lens.mojom.LensPageReceiver = mojo.internal.bindings.lens.mojom.LensPageReceiver;

mojo.internal.bindings.lens.mojom.LensPagePtr = mojo.internal.bindings.lens.mojom.LensPageRemote;
mojo.internal.bindings.lens.mojom.LensPageRequest = mojo.internal.bindings.lens.mojom.LensPagePendingReceiver;

