// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/tab_strip/tab_strip.mojom
 // Module: tab_strip.mojom

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
 

 mojo.internal.bindings.tab_strip = mojo.internal.bindings.tab_strip || {};
mojo.internal.bindings.tab_strip.mojom = mojo.internal.bindings.tab_strip.mojom || {};
mojo.internal.bindings.tabs = mojo.internal.bindings.tabs || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.tab_strip.mojom.TabSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.TabGroupVisualDataSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandlerFactory = {};
mojo.internal.bindings.tab_strip.mojom.PageHandlerFactory.$interfaceName = 'tab_strip.mojom.PageHandlerFactory';
mojo.internal.bindings.tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler = {};
mojo.internal.bindings.tab_strip.mojom.PageHandler.$interfaceName = 'tab_strip.mojom.PageHandler';
mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_GroupTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page = {};
mojo.internal.bindings.tab_strip.mojom.Page.$interfaceName = 'tab_strip.mojom.Page';
mojo.internal.bindings.tab_strip.mojom.Page_LayoutChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_LongPress_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabGroupMoved_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabGroupClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabMoved_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabReplaced_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabActiveChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_ShowContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.tab_strip.mojom.Page_ThemeChanged_ParamsSpec = { $: {} };

// Struct: Tab
mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.TabSpec, 'tab_strip.mojom.Tab', [
      mojo.internal.StructField('arg_alert_states', 0, 0, mojo.internal.Array(mojo.internal.bindings.tabs.mojom.TabAlertStateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_favicon_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_active_favicon_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_group_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_state', 32, 0, mojo.internal.bindings.tabs.mojom.TabNetworkStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 48, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_index', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_blocked', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_crashed', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_default_favicon', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_pinned', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_hide_throbber', 64, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_show_icon', 64, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: TabGroupVisualData
mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.TabGroupVisualDataSpec, 'tab_strip.mojom.TabGroupVisualData', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_color', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'tab_strip.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.tab_strip.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.tab_strip.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'tab_strip.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_page, arg_handler) {
    return this.$.createPageHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.tab_strip.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.tab_strip.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec, 'tab_strip.mojom.PageHandler_GetGroupVisualData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec, 'tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.mojo.internal.bindings.tab_strip.mojom.TabGroupVisualDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ParamsSpec, 'tab_strip.mojom.PageHandler_GetTabs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec, 'tab_strip.mojom.PageHandler_GetTabs_ResponseParams', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.tab_strip.mojom.TabSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseTab_ParamsSpec, 'tab_strip.mojom.PageHandler_CloseTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tab_was_swiped', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_GroupTab_ParamsSpec, 'tab_strip.mojom.PageHandler_GroupTab_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec, 'tab_strip.mojom.PageHandler_MoveGroup_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_to_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveTab_ParamsSpec, 'tab_strip.mojom.PageHandler_MoveTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_to_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec, 'tab_strip.mojom.PageHandler_SetThumbnailTracked_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_thumbnail_tracked', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec, 'tab_strip.mojom.PageHandler_UngroupTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ParamsSpec, 'tab_strip.mojom.PageHandler_GetLayout_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec, 'tab_strip.mojom.PageHandler_GetLayout_ResponseParams', [
      mojo.internal.StructField('arg_layout', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec, 'tab_strip.mojom.PageHandler_ShowEditDialogForGroup_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_location_x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_location_y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_width', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec, 'tab_strip.mojom.PageHandler_ShowTabContextMenu_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_location_x', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_location_y', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec, 'tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_Params', [
      mojo.internal.StructField('arg_location_x', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_location_y', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec, 'tab_strip.mojom.PageHandler_CloseContainer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec, 'tab_strip.mojom.PageHandler_ReportTabActivationDuration_Params', [
      mojo.internal.StructField('arg_duration_ms', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec, 'tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_Params', [
      mojo.internal.StructField('arg_tab_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_duration_ms', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec, 'tab_strip.mojom.PageHandler_ReportTabCreationDuration_Params', [
      mojo.internal.StructField('arg_tab_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_duration_ms', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec, 'tab_strip.mojom.PageHandler_ActivateTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.tab_strip.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tab_strip.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'tab_strip.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tab_strip.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tab_strip.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getGroupVisualData() {
    return this.$.getGroupVisualData();
  }
  getTabs() {
    return this.$.getTabs();
  }
  closeTab(arg_tab_id, arg_tab_was_swiped) {
    return this.$.closeTab(arg_tab_id, arg_tab_was_swiped);
  }
  groupTab(arg_tab_id, arg_group_id) {
    return this.$.groupTab(arg_tab_id, arg_group_id);
  }
  moveGroup(arg_group_id, arg_to_index) {
    return this.$.moveGroup(arg_group_id, arg_to_index);
  }
  moveTab(arg_tab_id, arg_to_index) {
    return this.$.moveTab(arg_tab_id, arg_to_index);
  }
  setThumbnailTracked(arg_tab_id, arg_thumbnail_tracked) {
    return this.$.setThumbnailTracked(arg_tab_id, arg_thumbnail_tracked);
  }
  ungroupTab(arg_tab_id) {
    return this.$.ungroupTab(arg_tab_id);
  }
  getLayout() {
    return this.$.getLayout();
  }
  showEditDialogForGroup(arg_group_id, arg_location_x, arg_location_y, arg_width, arg_height) {
    return this.$.showEditDialogForGroup(arg_group_id, arg_location_x, arg_location_y, arg_width, arg_height);
  }
  showTabContextMenu(arg_tab_id, arg_location_x, arg_location_y) {
    return this.$.showTabContextMenu(arg_tab_id, arg_location_x, arg_location_y);
  }
  showBackgroundContextMenu(arg_location_x, arg_location_y) {
    return this.$.showBackgroundContextMenu(arg_location_x, arg_location_y);
  }
  closeContainer() {
    return this.$.closeContainer();
  }
  reportTabActivationDuration(arg_duration_ms) {
    return this.$.reportTabActivationDuration(arg_duration_ms);
  }
  reportTabDataReceivedDuration(arg_tab_count, arg_duration_ms) {
    return this.$.reportTabDataReceivedDuration(arg_tab_count, arg_duration_ms);
  }
  reportTabCreationDuration(arg_tab_count, arg_duration_ms) {
    return this.$.reportTabCreationDuration(arg_tab_count, arg_duration_ms);
  }
  activateTab(arg_tab_id) {
    return this.$.activateTab(arg_tab_id);
  }
};

mojo.internal.bindings.tab_strip.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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

  getGroupVisualData() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec,
      mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec,
      [],
      false);
  }

  getTabs() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ParamsSpec,
      mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec,
      [],
      false);
  }

  closeTab(arg_tab_id, arg_tab_was_swiped) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseTab_ParamsSpec,
      null,
      [arg_tab_id, arg_tab_was_swiped],
      false);
  }

  groupTab(arg_tab_id, arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_GroupTab_ParamsSpec,
      null,
      [arg_tab_id, arg_group_id],
      false);
  }

  moveGroup(arg_group_id, arg_to_index) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec,
      null,
      [arg_group_id, arg_to_index],
      false);
  }

  moveTab(arg_tab_id, arg_to_index) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveTab_ParamsSpec,
      null,
      [arg_tab_id, arg_to_index],
      false);
  }

  setThumbnailTracked(arg_tab_id, arg_thumbnail_tracked) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec,
      null,
      [arg_tab_id, arg_thumbnail_tracked],
      false);
  }

  ungroupTab(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  getLayout() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ParamsSpec,
      mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec,
      [],
      false);
  }

  showEditDialogForGroup(arg_group_id, arg_location_x, arg_location_y, arg_width, arg_height) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec,
      null,
      [arg_group_id, arg_location_x, arg_location_y, arg_width, arg_height],
      false);
  }

  showTabContextMenu(arg_tab_id, arg_location_x, arg_location_y) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec,
      null,
      [arg_tab_id, arg_location_x, arg_location_y],
      false);
  }

  showBackgroundContextMenu(arg_location_x, arg_location_y) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec,
      null,
      [arg_location_x, arg_location_y],
      false);
  }

  closeContainer() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec,
      null,
      [],
      false);
  }

  reportTabActivationDuration(arg_duration_ms) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec,
      null,
      [arg_duration_ms],
      false);
  }

  reportTabDataReceivedDuration(arg_tab_count, arg_duration_ms) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec,
      null,
      [arg_tab_count, arg_duration_ms],
      false);
  }

  reportTabCreationDuration(arg_tab_count, arg_duration_ms) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec,
      null,
      [arg_tab_count, arg_duration_ms],
      false);
  }

  activateTab(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

};

mojo.internal.bindings.tab_strip.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.tab_strip.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.tab_strip.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: GetGroupVisualData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGroupVisualData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTabs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabs (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CloseTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseTab (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GroupTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_GroupTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GroupTab (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MoveGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveGroup (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: MoveTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveTab (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetThumbnailTracked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetThumbnailTracked (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UngroupTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UngroupTab (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetLayout
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetLayout (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ShowEditDialogForGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowEditDialogForGroup (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ShowTabContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowTabContextMenu (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ShowBackgroundContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowBackgroundContextMenu (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CloseContainer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseContainer (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ReportTabActivationDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportTabActivationDuration (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ReportTabDataReceivedDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportTabDataReceivedDuration (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ReportTabCreationDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportTabCreationDuration (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ActivateTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateTab (16)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGroupVisualData');
          const result = this.impl.getGroupVisualData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_strip.mojom.PageHandler_GetGroupVisualData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGroupVisualData FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabs');
          const result = this.impl.getTabs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_strip.mojom.PageHandler_GetTabs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabs FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeTab');
          const result = this.impl.closeTab(params.arg_tab_id, params.arg_tab_was_swiped);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_GroupTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.groupTab');
          const result = this.impl.groupTab(params.arg_tab_id, params.arg_group_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveGroup');
          const result = this.impl.moveGroup(params.arg_group_id, params.arg_to_index);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_MoveTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveTab');
          const result = this.impl.moveTab(params.arg_tab_id, params.arg_to_index);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_SetThumbnailTracked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setThumbnailTracked');
          const result = this.impl.setThumbnailTracked(params.arg_tab_id, params.arg_thumbnail_tracked);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_UngroupTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.ungroupTab');
          const result = this.impl.ungroupTab(params.arg_tab_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getLayout');
          const result = this.impl.getLayout();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.tab_strip.mojom.PageHandler_GetLayout_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetLayout FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowEditDialogForGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showEditDialogForGroup');
          const result = this.impl.showEditDialogForGroup(params.arg_group_id, params.arg_location_x, params.arg_location_y, params.arg_width, params.arg_height);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowTabContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showTabContextMenu');
          const result = this.impl.showTabContextMenu(params.arg_tab_id, params.arg_location_x, params.arg_location_y);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ShowBackgroundContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showBackgroundContextMenu');
          const result = this.impl.showBackgroundContextMenu(params.arg_location_x, params.arg_location_y);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_CloseContainer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeContainer');
          const result = this.impl.closeContainer();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabActivationDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportTabActivationDuration');
          const result = this.impl.reportTabActivationDuration(params.arg_duration_ms);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabDataReceivedDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportTabDataReceivedDuration');
          const result = this.impl.reportTabDataReceivedDuration(params.arg_tab_count, params.arg_duration_ms);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ReportTabCreationDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportTabCreationDuration');
          const result = this.impl.reportTabCreationDuration(params.arg_tab_count, params.arg_duration_ms);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.PageHandler_ActivateTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateTab');
          const result = this.impl.activateTab(params.arg_tab_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tab_strip.mojom.PageHandlerReceiver = mojo.internal.bindings.tab_strip.mojom.PageHandlerReceiver;

mojo.internal.bindings.tab_strip.mojom.PageHandlerPtr = mojo.internal.bindings.tab_strip.mojom.PageHandlerRemote;
mojo.internal.bindings.tab_strip.mojom.PageHandlerRequest = mojo.internal.bindings.tab_strip.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_LayoutChanged_ParamsSpec, 'tab_strip.mojom.Page_LayoutChanged_Params', [
      mojo.internal.StructField('arg_layout', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec, 'tab_strip.mojom.Page_ReceivedKeyboardFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec, 'tab_strip.mojom.Page_ContextMenuClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_LongPress_ParamsSpec, 'tab_strip.mojom.Page_LongPress_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec, 'tab_strip.mojom.Page_TabGroupVisualsChanged_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_group', 8, 0, mojo.internal.bindings.mojo.internal.bindings.tab_strip.mojom.TabGroupVisualDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabGroupMoved_ParamsSpec, 'tab_strip.mojom.Page_TabGroupMoved_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabGroupClosed_ParamsSpec, 'tab_strip.mojom.Page_TabGroupClosed_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec, 'tab_strip.mojom.Page_TabGroupStateChanged_Params', [
      mojo.internal.StructField('arg_group_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_index', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec, 'tab_strip.mojom.Page_TabCloseCancelled_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabCreated_ParamsSpec, 'tab_strip.mojom.Page_TabCreated_Params', [
      mojo.internal.StructField('arg_tab', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tab_strip.mojom.TabSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabRemoved_ParamsSpec, 'tab_strip.mojom.Page_TabRemoved_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabMoved_ParamsSpec, 'tab_strip.mojom.Page_TabMoved_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_to_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_in_pinned', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabReplaced_ParamsSpec, 'tab_strip.mojom.Page_TabReplaced_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_new_tab_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabActiveChanged_ParamsSpec, 'tab_strip.mojom.Page_TabActiveChanged_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabUpdated_ParamsSpec, 'tab_strip.mojom.Page_TabUpdated_Params', [
      mojo.internal.StructField('arg_tab', 0, 0, mojo.internal.bindings.mojo.internal.bindings.tab_strip.mojom.TabSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec, 'tab_strip.mojom.Page_TabThumbnailUpdated_Params', [
      mojo.internal.StructField('arg_data_uri', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_ShowContextMenu_ParamsSpec, 'tab_strip.mojom.Page_ShowContextMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.tab_strip.mojom.Page_ThemeChanged_ParamsSpec, 'tab_strip.mojom.Page_ThemeChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.tab_strip.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.tab_strip.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'tab_strip.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.tab_strip.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.tab_strip.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  layoutChanged(arg_layout) {
    return this.$.layoutChanged(arg_layout);
  }
  receivedKeyboardFocus() {
    return this.$.receivedKeyboardFocus();
  }
  contextMenuClosed() {
    return this.$.contextMenuClosed();
  }
  longPress() {
    return this.$.longPress();
  }
  tabGroupVisualsChanged(arg_group_id, arg_tab_group) {
    return this.$.tabGroupVisualsChanged(arg_group_id, arg_tab_group);
  }
  tabGroupMoved(arg_group_id, arg_index) {
    return this.$.tabGroupMoved(arg_group_id, arg_index);
  }
  tabGroupClosed(arg_group_id) {
    return this.$.tabGroupClosed(arg_group_id);
  }
  tabGroupStateChanged(arg_tab_id, arg_index, arg_group_id) {
    return this.$.tabGroupStateChanged(arg_tab_id, arg_index, arg_group_id);
  }
  tabCloseCancelled(arg_tab_id) {
    return this.$.tabCloseCancelled(arg_tab_id);
  }
  tabCreated(arg_tab) {
    return this.$.tabCreated(arg_tab);
  }
  tabRemoved(arg_tab_id) {
    return this.$.tabRemoved(arg_tab_id);
  }
  tabMoved(arg_tab_id, arg_to_index, arg_in_pinned) {
    return this.$.tabMoved(arg_tab_id, arg_to_index, arg_in_pinned);
  }
  tabReplaced(arg_tab_id, arg_new_tab_id) {
    return this.$.tabReplaced(arg_tab_id, arg_new_tab_id);
  }
  tabActiveChanged(arg_tab_id) {
    return this.$.tabActiveChanged(arg_tab_id);
  }
  tabUpdated(arg_tab) {
    return this.$.tabUpdated(arg_tab);
  }
  tabThumbnailUpdated(arg_tab_id, arg_data_uri) {
    return this.$.tabThumbnailUpdated(arg_tab_id, arg_data_uri);
  }
  showContextMenu() {
    return this.$.showContextMenu();
  }
  themeChanged() {
    return this.$.themeChanged();
  }
};

mojo.internal.bindings.tab_strip.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
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

  layoutChanged(arg_layout) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_LayoutChanged_ParamsSpec,
      null,
      [arg_layout],
      false);
  }

  receivedKeyboardFocus() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec,
      null,
      [],
      false);
  }

  contextMenuClosed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec,
      null,
      [],
      false);
  }

  longPress() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_LongPress_ParamsSpec,
      null,
      [],
      false);
  }

  tabGroupVisualsChanged(arg_group_id, arg_tab_group) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec,
      null,
      [arg_group_id, arg_tab_group],
      false);
  }

  tabGroupMoved(arg_group_id, arg_index) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabGroupMoved_ParamsSpec,
      null,
      [arg_group_id, arg_index],
      false);
  }

  tabGroupClosed(arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabGroupClosed_ParamsSpec,
      null,
      [arg_group_id],
      false);
  }

  tabGroupStateChanged(arg_tab_id, arg_index, arg_group_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec,
      null,
      [arg_tab_id, arg_index, arg_group_id],
      false);
  }

  tabCloseCancelled(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  tabCreated(arg_tab) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabCreated_ParamsSpec,
      null,
      [arg_tab],
      false);
  }

  tabRemoved(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabRemoved_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  tabMoved(arg_tab_id, arg_to_index, arg_in_pinned) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabMoved_ParamsSpec,
      null,
      [arg_tab_id, arg_to_index, arg_in_pinned],
      false);
  }

  tabReplaced(arg_tab_id, arg_new_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabReplaced_ParamsSpec,
      null,
      [arg_tab_id, arg_new_tab_id],
      false);
  }

  tabActiveChanged(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabActiveChanged_ParamsSpec,
      null,
      [arg_tab_id],
      false);
  }

  tabUpdated(arg_tab) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabUpdated_ParamsSpec,
      null,
      [arg_tab],
      false);
  }

  tabThumbnailUpdated(arg_tab_id, arg_data_uri) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec,
      null,
      [arg_tab_id, arg_data_uri],
      false);
  }

  showContextMenu() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_ShowContextMenu_ParamsSpec,
      null,
      [],
      false);
  }

  themeChanged() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.tab_strip.mojom.Page_ThemeChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.tab_strip.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.tab_strip.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.tab_strip.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: LayoutChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_LayoutChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LayoutChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReceivedKeyboardFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReceivedKeyboardFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ContextMenuClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ContextMenuClosed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: LongPress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_LongPress_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LongPress (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: TabGroupVisualsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabGroupVisualsChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TabGroupMoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabGroupMoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabGroupMoved (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: TabGroupClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabGroupClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabGroupClosed (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: TabGroupStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabGroupStateChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: TabCloseCancelled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabCloseCancelled (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: TabCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabCreated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabCreated (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: TabRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabRemoved (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: TabMoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabMoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabMoved (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: TabReplaced
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabReplaced_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabReplaced (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: TabActiveChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabActiveChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabActiveChanged (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: TabUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabUpdated (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: TabThumbnailUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TabThumbnailUpdated (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_ShowContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ThemeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_ThemeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ThemeChanged (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_LayoutChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.layoutChanged');
          const result = this.impl.layoutChanged(params.arg_layout);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_ReceivedKeyboardFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.receivedKeyboardFocus');
          const result = this.impl.receivedKeyboardFocus();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_ContextMenuClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.contextMenuClosed');
          const result = this.impl.contextMenuClosed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_LongPress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.longPress');
          const result = this.impl.longPress();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabGroupVisualsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabGroupVisualsChanged');
          const result = this.impl.tabGroupVisualsChanged(params.arg_group_id, params.arg_tab_group);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabGroupMoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabGroupMoved');
          const result = this.impl.tabGroupMoved(params.arg_group_id, params.arg_index);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabGroupClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabGroupClosed');
          const result = this.impl.tabGroupClosed(params.arg_group_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabGroupStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabGroupStateChanged');
          const result = this.impl.tabGroupStateChanged(params.arg_tab_id, params.arg_index, params.arg_group_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabCloseCancelled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabCloseCancelled');
          const result = this.impl.tabCloseCancelled(params.arg_tab_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabCreated');
          const result = this.impl.tabCreated(params.arg_tab);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabRemoved');
          const result = this.impl.tabRemoved(params.arg_tab_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabMoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabMoved');
          const result = this.impl.tabMoved(params.arg_tab_id, params.arg_to_index, params.arg_in_pinned);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabReplaced_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabReplaced');
          const result = this.impl.tabReplaced(params.arg_tab_id, params.arg_new_tab_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabActiveChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabActiveChanged');
          const result = this.impl.tabActiveChanged(params.arg_tab_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabUpdated');
          const result = this.impl.tabUpdated(params.arg_tab);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_TabThumbnailUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.tabThumbnailUpdated');
          const result = this.impl.tabThumbnailUpdated(params.arg_tab_id, params.arg_data_uri);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_ShowContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.tab_strip.mojom.Page_ThemeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.themeChanged');
          const result = this.impl.themeChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.tab_strip.mojom.PageReceiver = mojo.internal.bindings.tab_strip.mojom.PageReceiver;

mojo.internal.bindings.tab_strip.mojom.PagePtr = mojo.internal.bindings.tab_strip.mojom.PageRemote;
mojo.internal.bindings.tab_strip.mojom.PageRequest = mojo.internal.bindings.tab_strip.mojom.PagePendingReceiver;

