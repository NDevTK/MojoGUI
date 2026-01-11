// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/side_panel/reading_list/reading_list.mojom
 // Module: reading_list.mojom

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
 

 mojo.internal.bindings.reading_list = mojo.internal.bindings.reading_list || {};
mojo.internal.bindings.reading_list.mojom = mojo.internal.bindings.reading_list.mojom || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.reading_list.mojom.CurrentPageActionButtonStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.reading_list.mojom.ReadLaterEntriesByStatusSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.ReadLaterEntrySpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.WindowSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandlerFactory = {};
mojo.internal.bindings.reading_list.mojom.PageHandlerFactory.$interfaceName = 'reading_list.mojom.PageHandlerFactory';
mojo.internal.bindings.reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler = {};
mojo.internal.bindings.reading_list.mojom.PageHandler.$interfaceName = 'reading_list.mojom.PageHandler';
mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_OpenURL_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_ShowUI_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_CloseUI_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.Page = {};
mojo.internal.bindings.reading_list.mojom.Page.$interfaceName = 'reading_list.mojom.Page';
mojo.internal.bindings.reading_list.mojom.Page_ItemsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec = { $: {} };

// Enum: CurrentPageActionButtonState
mojo.internal.bindings.reading_list.mojom.CurrentPageActionButtonState = {
  kAdd: 0,
  kDisabled: 1,
  kMarkAsRead: 2,
};

// Struct: ReadLaterEntriesByStatus
mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.ReadLaterEntriesByStatusSpec, 'reading_list.mojom.ReadLaterEntriesByStatus', [
      mojo.internal.StructField('arg_unread_entries', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.reading_list.mojom.ReadLaterEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_read_entries', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.reading_list.mojom.ReadLaterEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReadLaterEntry
mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.ReadLaterEntrySpec, 'reading_list.mojom.ReadLaterEntry', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_time', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_display_time_since_update', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_read', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Window
mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.WindowSpec, 'reading_list.mojom.Window', [
      mojo.internal.StructField('arg_height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'reading_list.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.reading_list.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.reading_list.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.reading_list.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.reading_list.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec, 'reading_list.mojom.PageHandler_GetReadLaterEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec, 'reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParams', [
      mojo.internal.StructField('arg_entries', 0, 0, mojo.internal.bindings.mojo.internal.bindings.reading_list.mojom.ReadLaterEntriesByStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_OpenURL_ParamsSpec, 'reading_list.mojom.PageHandler_OpenURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_click_modifiers', 8, 0, mojo.internal.bindings.ui.mojom.ClickModifiersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mark_as_read', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec, 'reading_list.mojom.PageHandler_UpdateReadStatus_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_read', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec, 'reading_list.mojom.PageHandler_MarkCurrentTabAsRead_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec, 'reading_list.mojom.PageHandler_AddCurrentTab_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec, 'reading_list.mojom.PageHandler_RemoveEntry_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec, 'reading_list.mojom.PageHandler_ShowContextMenuForURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec, 'reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_ShowUI_ParamsSpec, 'reading_list.mojom.PageHandler_ShowUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_CloseUI_ParamsSpec, 'reading_list.mojom.PageHandler_CloseUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ParamsSpec, 'reading_list.mojom.PageHandler_GetWindowData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ResponseParamsSpec, 'reading_list.mojom.PageHandler_GetWindowData_ResponseParams', [
      mojo.internal.StructField('arg_windows', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.reading_list.mojom.WindowSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.reading_list.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.reading_list.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.reading_list.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.reading_list.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getReadLaterEntries() {
    return this.$.getReadLaterEntries();
  }
  openURL(arg_url, arg_mark_as_read, arg_click_modifiers) {
    return this.$.openURL(arg_url, arg_mark_as_read, arg_click_modifiers);
  }
  updateReadStatus(arg_url, arg_read) {
    return this.$.updateReadStatus(arg_url, arg_read);
  }
  markCurrentTabAsRead() {
    return this.$.markCurrentTabAsRead();
  }
  addCurrentTab() {
    return this.$.addCurrentTab();
  }
  removeEntry(arg_url) {
    return this.$.removeEntry(arg_url);
  }
  showContextMenuForURL(arg_url, arg_x, arg_y) {
    return this.$.showContextMenuForURL(arg_url, arg_x, arg_y);
  }
  updateCurrentPageActionButtonState() {
    return this.$.updateCurrentPageActionButtonState();
  }
  showUI() {
    return this.$.showUI();
  }
  closeUI() {
    return this.$.closeUI();
  }
  getWindowData() {
    return this.$.getWindowData();
  }
};

mojo.internal.bindings.reading_list.mojom.PageHandlerRemoteCallHandler = class {
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
    ]);
  }

  getReadLaterEntries() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec,
      mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec,
      [],
      false);
  }

  openURL(arg_url, arg_mark_as_read, arg_click_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_OpenURL_ParamsSpec,
      null,
      [arg_url, arg_mark_as_read, arg_click_modifiers],
      false);
  }

  updateReadStatus(arg_url, arg_read) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec,
      null,
      [arg_url, arg_read],
      false);
  }

  markCurrentTabAsRead() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec,
      null,
      [],
      false);
  }

  addCurrentTab() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec,
      null,
      [],
      false);
  }

  removeEntry(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  showContextMenuForURL(arg_url, arg_x, arg_y) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec,
      null,
      [arg_url, arg_x, arg_y],
      false);
  }

  updateCurrentPageActionButtonState() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec,
      null,
      [],
      false);
  }

  showUI() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_ShowUI_ParamsSpec,
      null,
      [],
      false);
  }

  closeUI() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_CloseUI_ParamsSpec,
      null,
      [],
      false);
  }

  getWindowData() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ParamsSpec,
      mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.reading_list.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.reading_list.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.reading_list.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetReadLaterEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetReadLaterEntries (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OpenURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_OpenURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenURL (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateReadStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateReadStatus (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MarkCurrentTabAsRead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MarkCurrentTabAsRead (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddCurrentTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddCurrentTab (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RemoveEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveEntry (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ShowContextMenuForURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenuForURL (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdateCurrentPageActionButtonState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCurrentPageActionButtonState (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ShowUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_ShowUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowUI (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CloseUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_CloseUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseUI (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetWindowData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWindowData (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getReadLaterEntries');
          const result = this.impl.getReadLaterEntries();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.reading_list.mojom.PageHandler_GetReadLaterEntries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetReadLaterEntries FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_OpenURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openURL');
          const result = this.impl.openURL(params.arg_url, params.arg_mark_as_read, params.arg_click_modifiers);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateReadStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateReadStatus');
          const result = this.impl.updateReadStatus(params.arg_url, params.arg_read);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_MarkCurrentTabAsRead_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.markCurrentTabAsRead');
          const result = this.impl.markCurrentTabAsRead();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_AddCurrentTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addCurrentTab');
          const result = this.impl.addCurrentTab();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_RemoveEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeEntry');
          const result = this.impl.removeEntry(params.arg_url);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_ShowContextMenuForURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenuForURL');
          const result = this.impl.showContextMenuForURL(params.arg_url, params.arg_x, params.arg_y);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_UpdateCurrentPageActionButtonState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCurrentPageActionButtonState');
          const result = this.impl.updateCurrentPageActionButtonState();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_ShowUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showUI');
          const result = this.impl.showUI();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_CloseUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeUI');
          const result = this.impl.closeUI();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWindowData');
          const result = this.impl.getWindowData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.reading_list.mojom.PageHandler_GetWindowData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWindowData FAILED:', e));
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

mojo.internal.bindings.reading_list.mojom.PageHandlerReceiver = mojo.internal.bindings.reading_list.mojom.PageHandlerReceiver;

mojo.internal.bindings.reading_list.mojom.PageHandlerPtr = mojo.internal.bindings.reading_list.mojom.PageHandlerRemote;
mojo.internal.bindings.reading_list.mojom.PageHandlerRequest = mojo.internal.bindings.reading_list.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.Page_ItemsChanged_ParamsSpec, 'reading_list.mojom.Page_ItemsChanged_Params', [
      mojo.internal.StructField('arg_entries', 0, 0, mojo.internal.bindings.mojo.internal.bindings.reading_list.mojom.ReadLaterEntriesByStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec, 'reading_list.mojom.Page_CurrentPageActionButtonStateChanged_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.reading_list.mojom.CurrentPageActionButtonStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.reading_list.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.reading_list.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'reading_list.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.reading_list.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.reading_list.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  itemsChanged(arg_entries) {
    return this.$.itemsChanged(arg_entries);
  }
  currentPageActionButtonStateChanged(arg_state) {
    return this.$.currentPageActionButtonStateChanged(arg_state);
  }
};

mojo.internal.bindings.reading_list.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  itemsChanged(arg_entries) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.reading_list.mojom.Page_ItemsChanged_ParamsSpec,
      null,
      [arg_entries],
      false);
  }

  currentPageActionButtonStateChanged(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec,
      null,
      [arg_state],
      false);
  }

};

mojo.internal.bindings.reading_list.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.reading_list.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'reading_list.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.reading_list.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: ItemsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.Page_ItemsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ItemsChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CurrentPageActionButtonStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CurrentPageActionButtonStateChanged (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.Page_ItemsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.itemsChanged');
          const result = this.impl.itemsChanged(params.arg_entries);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.reading_list.mojom.Page_CurrentPageActionButtonStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.currentPageActionButtonStateChanged');
          const result = this.impl.currentPageActionButtonStateChanged(params.arg_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.reading_list.mojom.PageReceiver = mojo.internal.bindings.reading_list.mojom.PageReceiver;

mojo.internal.bindings.reading_list.mojom.PagePtr = mojo.internal.bindings.reading_list.mojom.PageRemote;
mojo.internal.bindings.reading_list.mojom.PageRequest = mojo.internal.bindings.reading_list.mojom.PagePendingReceiver;

