// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/lens/core/mojom/lens_side_panel.mojom
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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.lens.mojom.SidePanelResultStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactory = {};
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactorySpec = { $ : {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactory.$interfaceName = 'lens.mojom.LensSidePanelPageHandlerFactory';
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler = {};
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerSpec = { $ : {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler.$interfaceName = 'lens.mojom.LensSidePanelPageHandler';
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage = {};
mojo.internal.bindings.lens.mojom.LensSidePanelPageSpec = { $ : {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage.$interfaceName = 'lens.mojom.LensSidePanelPage';
mojo.internal.bindings.lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec = { $: {} };
mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec = { $: {} };

// Enum: SidePanelResultStatus
mojo.internal.bindings.lens.mojom.SidePanelResultStatus = {
  kUnknown: 0,
  kResultShown: 1,
  kErrorPageShownOffline: 2,
  kErrorPageShownStartQueryError: 3,
  kErrorPageShownProtected: 4,
};

// Interface: LensSidePanelPageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec, 'lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.lens.mojom.LensSidePanelPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensSidePanelPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createSidePanelPageHandler(arg_handler, arg_page) {
    return this.$.createSidePanelPageHandler(arg_handler, arg_page);
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('lens.mojom.LensSidePanelPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createSidePanelPageHandler(arg_handler, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec,
      null,
      [arg_handler, arg_page],
      false);
  }

};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensSidePanelPageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('lens.mojom.LensSidePanelPageHandlerFactory', [
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
        
        // Try Method 0: CreateSidePanelPageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSidePanelPageHandler (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactory_CreateSidePanelPageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSidePanelPageHandler');
          const result = this.impl.createSidePanelPageHandler(params.arg_handler, params.arg_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryReceiver = mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryReceiver;

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryPtr = mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryRemote;
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryRequest = mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerFactoryPendingReceiver;


// Interface: LensSidePanelPageHandler
mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec, 'lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParams', [
      mojo.internal.StructField('arg_is_contextual_searchbox', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_Params', [
      mojo.internal.StructField('arg_text_fragments', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pdf_page_number', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_OnAimMessage_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec, 'lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensSidePanelPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  popAndLoadQueryFromHistory() {
    return this.$.popAndLoadQueryFromHistory();
  }
  getIsContextualSearchbox() {
    return this.$.getIsContextualSearchbox();
  }
  onScrollToMessage(arg_text_fragments, arg_pdf_page_number) {
    return this.$.onScrollToMessage(arg_text_fragments, arg_pdf_page_number);
  }
  requestSendFeedback() {
    return this.$.requestSendFeedback();
  }
  onAimMessage(arg_message) {
    return this.$.onAimMessage(arg_message);
  }
  onImageQueryWithEmptyText() {
    return this.$.onImageQueryWithEmptyText();
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('lens.mojom.LensSidePanelPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  popAndLoadQueryFromHistory() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec,
      null,
      [],
      false);
  }

  getIsContextualSearchbox() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec,
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec,
      [],
      false);
  }

  onScrollToMessage(arg_text_fragments, arg_pdf_page_number) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec,
      null,
      [arg_text_fragments, arg_pdf_page_number],
      false);
  }

  requestSendFeedback() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec,
      null,
      [],
      false);
  }

  onAimMessage(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec,
      null,
      [arg_message],
      false);
  }

  onImageQueryWithEmptyText() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensSidePanelPageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('lens.mojom.LensSidePanelPageHandler', [
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
        
        // Try Method 0: PopAndLoadQueryFromHistory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PopAndLoadQueryFromHistory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetIsContextualSearchbox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsContextualSearchbox (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnScrollToMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScrollToMessage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RequestSendFeedback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSendFeedback (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnAimMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAimMessage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnImageQueryWithEmptyText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImageQueryWithEmptyText (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_PopAndLoadQueryFromHistory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.popAndLoadQueryFromHistory');
          const result = this.impl.popAndLoadQueryFromHistory();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsContextualSearchbox');
          const result = this.impl.getIsContextualSearchbox();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_GetIsContextualSearchbox_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetIsContextualSearchbox FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnScrollToMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScrollToMessage');
          const result = this.impl.onScrollToMessage(params.arg_text_fragments, params.arg_pdf_page_number);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_RequestSendFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSendFeedback');
          const result = this.impl.requestSendFeedback();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnAimMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAimMessage');
          const result = this.impl.onAimMessage(params.arg_message);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPageHandler_OnImageQueryWithEmptyText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImageQueryWithEmptyText');
          const result = this.impl.onImageQueryWithEmptyText();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerReceiver = mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerReceiver;

mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerPtr = mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerRemote;
mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerRequest = mojo.internal.bindings.lens.mojom.LensSidePanelPageHandlerPendingReceiver;


// Interface: LensSidePanelPage
mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec, 'lens.mojom.LensSidePanelPage_LoadResultsInFrame_Params', [
      mojo.internal.StructField('arg_results_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetIsLoadingResults_Params', [
      mojo.internal.StructField('arg_is_loading', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_Params', [
      mojo.internal.StructField('arg_progress', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetBackArrowVisible_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetShowErrorPage_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.lens.mojom.SidePanelResultStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_should_show_error_page', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec, 'lens.mojom.LensSidePanelPage_SuppressGhostLoader_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec, 'lens.mojom.LensSidePanelPage_PageContentTypeChanged_Params', [
      mojo.internal.StructField('arg_new_page_content_type', 0, 0, mojo.internal.bindings.lens.mojom.PageContentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec, 'lens.mojom.LensSidePanelPage_ShowToast_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec, 'lens.mojom.LensSidePanelPage_SendClientMessageToAim_Params', [
      mojo.internal.StructField('arg_serialized_message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec, 'lens.mojom.LensSidePanelPage_AimHandshakeReceived_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec, 'lens.mojom.LensSidePanelPage_AimResultsChanged_Params', [
      mojo.internal.StructField('arg_on_aim', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec, 'lens.mojom.LensSidePanelPage_FocusResultsFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec, 'lens.mojom.LensSidePanelPage_SetIsOverlayShowing_Params', [
      mojo.internal.StructField('arg_is_showing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec, 'lens.mojom.LensSidePanelPage_FocusSearchbox_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.lens.mojom.LensSidePanelPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageRemote = class {
  static get $interfaceName() {
    return 'lens.mojom.LensSidePanelPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.lens.mojom.LensSidePanelPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.lens.mojom.LensSidePanelPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  loadResultsInFrame(arg_results_url) {
    return this.$.loadResultsInFrame(arg_results_url);
  }
  setIsLoadingResults(arg_is_loading) {
    return this.$.setIsLoadingResults(arg_is_loading);
  }
  setPageContentUploadProgress(arg_progress) {
    return this.$.setPageContentUploadProgress(arg_progress);
  }
  setBackArrowVisible(arg_visible) {
    return this.$.setBackArrowVisible(arg_visible);
  }
  setShowErrorPage(arg_should_show_error_page, arg_status) {
    return this.$.setShowErrorPage(arg_should_show_error_page, arg_status);
  }
  suppressGhostLoader() {
    return this.$.suppressGhostLoader();
  }
  pageContentTypeChanged(arg_new_page_content_type) {
    return this.$.pageContentTypeChanged(arg_new_page_content_type);
  }
  showToast(arg_message) {
    return this.$.showToast(arg_message);
  }
  sendClientMessageToAim(arg_serialized_message) {
    return this.$.sendClientMessageToAim(arg_serialized_message);
  }
  aimHandshakeReceived() {
    return this.$.aimHandshakeReceived();
  }
  aimResultsChanged(arg_on_aim) {
    return this.$.aimResultsChanged(arg_on_aim);
  }
  focusResultsFrame() {
    return this.$.focusResultsFrame();
  }
  setIsOverlayShowing(arg_is_showing) {
    return this.$.setIsOverlayShowing(arg_is_showing);
  }
  focusSearchbox() {
    return this.$.focusSearchbox();
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('lens.mojom.LensSidePanelPage', [
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

  loadResultsInFrame(arg_results_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec,
      null,
      [arg_results_url],
      false);
  }

  setIsLoadingResults(arg_is_loading) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec,
      null,
      [arg_is_loading],
      false);
  }

  setPageContentUploadProgress(arg_progress) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec,
      null,
      [arg_progress],
      false);
  }

  setBackArrowVisible(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  setShowErrorPage(arg_should_show_error_page, arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec,
      null,
      [arg_should_show_error_page, arg_status],
      false);
  }

  suppressGhostLoader() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec,
      null,
      [],
      false);
  }

  pageContentTypeChanged(arg_new_page_content_type) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec,
      null,
      [arg_new_page_content_type],
      false);
  }

  showToast(arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec,
      null,
      [arg_message],
      false);
  }

  sendClientMessageToAim(arg_serialized_message) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec,
      null,
      [arg_serialized_message],
      false);
  }

  aimHandshakeReceived() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec,
      null,
      [],
      false);
  }

  aimResultsChanged(arg_on_aim) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec,
      null,
      [arg_on_aim],
      false);
  }

  focusResultsFrame() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec,
      null,
      [],
      false);
  }

  setIsOverlayShowing(arg_is_showing) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec,
      null,
      [arg_is_showing],
      false);
  }

  focusSearchbox() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.lens.mojom.LensSidePanelPage.getRemote = function() {
  let remote = new mojo.internal.bindings.lens.mojom.LensSidePanelPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'lens.mojom.LensSidePanelPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('lens.mojom.LensSidePanelPage', [
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
        
        // Try Method 0: LoadResultsInFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadResultsInFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetIsLoadingResults
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsLoadingResults (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPageContentUploadProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageContentUploadProgress (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetBackArrowVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackArrowVisible (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetShowErrorPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetShowErrorPage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SuppressGhostLoader
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuppressGhostLoader (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: PageContentTypeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PageContentTypeChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ShowToast
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowToast (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SendClientMessageToAim
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendClientMessageToAim (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AimHandshakeReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AimHandshakeReceived (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AimResultsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AimResultsChanged (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: FocusResultsFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusResultsFrame (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetIsOverlayShowing
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsOverlayShowing (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: FocusSearchbox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusSearchbox (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_LoadResultsInFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadResultsInFrame');
          const result = this.impl.loadResultsInFrame(params.arg_results_url);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsLoadingResults_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsLoadingResults');
          const result = this.impl.setIsLoadingResults(params.arg_is_loading);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetPageContentUploadProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPageContentUploadProgress');
          const result = this.impl.setPageContentUploadProgress(params.arg_progress);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetBackArrowVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBackArrowVisible');
          const result = this.impl.setBackArrowVisible(params.arg_visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetShowErrorPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setShowErrorPage');
          const result = this.impl.setShowErrorPage(params.arg_should_show_error_page, params.arg_status);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SuppressGhostLoader_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suppressGhostLoader');
          const result = this.impl.suppressGhostLoader();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_PageContentTypeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pageContentTypeChanged');
          const result = this.impl.pageContentTypeChanged(params.arg_new_page_content_type);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_ShowToast_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showToast');
          const result = this.impl.showToast(params.arg_message);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SendClientMessageToAim_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendClientMessageToAim');
          const result = this.impl.sendClientMessageToAim(params.arg_serialized_message);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimHandshakeReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.aimHandshakeReceived');
          const result = this.impl.aimHandshakeReceived();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_AimResultsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.aimResultsChanged');
          const result = this.impl.aimResultsChanged(params.arg_on_aim);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusResultsFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusResultsFrame');
          const result = this.impl.focusResultsFrame();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_SetIsOverlayShowing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsOverlayShowing');
          const result = this.impl.setIsOverlayShowing(params.arg_is_showing);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.lens.mojom.LensSidePanelPage_FocusSearchbox_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusSearchbox');
          const result = this.impl.focusSearchbox();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.lens.mojom.LensSidePanelPageReceiver = mojo.internal.bindings.lens.mojom.LensSidePanelPageReceiver;

mojo.internal.bindings.lens.mojom.LensSidePanelPagePtr = mojo.internal.bindings.lens.mojom.LensSidePanelPageRemote;
mojo.internal.bindings.lens.mojom.LensSidePanelPageRequest = mojo.internal.bindings.lens.mojom.LensSidePanelPagePendingReceiver;

