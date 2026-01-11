// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui_browser/browser.mojom
 // Module: webui_browser.mojom

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
 

 mojo.internal.bindings.webui_browser = mojo.internal.bindings.webui_browser || {};
mojo.internal.bindings.webui_browser.mojom = mojo.internal.bindings.webui_browser.mojom || {};
mojo.internal.bindings.tabs_api = mojo.internal.bindings.tabs_api || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.webui_browser.mojom.FullscreenContextSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webui_browser.mojom.SecurityIconSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory = {};
mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory.$interfaceName = 'webui_browser.mojom.PageHandlerFactory';
mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.Page = {};
mojo.internal.bindings.webui_browser.mojom.Page.$interfaceName = 'webui_browser.mojom.Page';
mojo.internal.bindings.webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.Page_SetReloadStopState_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.Page_ShowSidePanel_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.Page_CloseSidePanel_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler = {};
mojo.internal.bindings.webui_browser.mojom.PageHandler.$interfaceName = 'webui_browser.mojom.PageHandler';
mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_Minimize_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_Maximize_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_Restore_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.PageHandler_Close_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler = {};
mojo.internal.bindings.webui_browser.mojom.GuestHandler.$interfaceName = 'webui_browser.mojom.GuestHandler';
mojo.internal.bindings.webui_browser.mojom.GuestHandler_Navigate_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoBack_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoForward_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_Reload_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec = { $: {} };
mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec = { $: {} };

// Enum: FullscreenContext
mojo.internal.bindings.webui_browser.mojom.FullscreenContext = {
  kBrowser: 0,
  kTab: 1,
};

// Enum: SecurityIcon
mojo.internal.bindings.webui_browser.mojom.SecurityIcon = {
  HttpChromeRefresh: 0,
  SecurePageInfoChromeRefresh: 1,
  NoEncryption: 2,
  NotSecureWarningChromeRefresh: 3,
  BusinessChromeRefresh: 4,
  DangerousChromeRefresh: 5,
  ProductChromeRefresh: 6,
  ExtensionChromeRefresh: 7,
  OfflinePin: 8,
};

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'webui_browser.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.webui_browser.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.webui_browser.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec, 'webui_browser.mojom.PageHandlerFactory_GetTabStripInset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec, 'webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParams', [
      mojo.internal.StructField('arg_width', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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
  getTabStripInset() {
    return this.$.getTabStripInset();
  }
};

mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

  getTabStripInset() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec,
      mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTabStripInset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabStripInset (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_page, params.arg_handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabStripInset');
          const result = this.impl.getTabStripInset();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.webui_browser.mojom.PageHandlerFactory_GetTabStripInset_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTabStripInset FAILED:', e));
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

mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.webui_browser.mojom.PageHandlerFactoryPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec, 'webui_browser.mojom.Page_SetFocusToLocationBar_Params', [
      mojo.internal.StructField('arg_is_user_initiated', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.Page_SetReloadStopState_ParamsSpec, 'webui_browser.mojom.Page_SetReloadStopState_Params', [
      mojo.internal.StructField('arg_is_loading', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.Page_ShowSidePanel_ParamsSpec, 'webui_browser.mojom.Page_ShowSidePanel_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_guest_contents_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.Page_CloseSidePanel_ParamsSpec, 'webui_browser.mojom.Page_CloseSidePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec, 'webui_browser.mojom.Page_OnFullscreenModeChanged_Params', [
      mojo.internal.StructField('arg_context', 0, 0, mojo.internal.bindings.webui_browser.mojom.FullscreenContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_fullscreen', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.webui_browser.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.webui_browser.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.webui_browser.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.webui_browser.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFocusToLocationBar(arg_is_user_initiated) {
    return this.$.setFocusToLocationBar(arg_is_user_initiated);
  }
  setReloadStopState(arg_is_loading) {
    return this.$.setReloadStopState(arg_is_loading);
  }
  showSidePanel(arg_guest_contents_id, arg_title) {
    return this.$.showSidePanel(arg_guest_contents_id, arg_title);
  }
  closeSidePanel() {
    return this.$.closeSidePanel();
  }
  onFullscreenModeChanged(arg_is_fullscreen, arg_context) {
    return this.$.onFullscreenModeChanged(arg_is_fullscreen, arg_context);
  }
};

mojo.internal.bindings.webui_browser.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setFocusToLocationBar(arg_is_user_initiated) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec,
      null,
      [arg_is_user_initiated],
      false);
  }

  setReloadStopState(arg_is_loading) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.Page_SetReloadStopState_ParamsSpec,
      null,
      [arg_is_loading],
      false);
  }

  showSidePanel(arg_guest_contents_id, arg_title) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.Page_ShowSidePanel_ParamsSpec,
      null,
      [arg_guest_contents_id, arg_title],
      false);
  }

  closeSidePanel() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.Page_CloseSidePanel_ParamsSpec,
      null,
      [],
      false);
  }

  onFullscreenModeChanged(arg_is_fullscreen, arg_context) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec,
      null,
      [arg_is_fullscreen, arg_context],
      false);
  }

};

mojo.internal.bindings.webui_browser.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.webui_browser.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.webui_browser.mojom.PageReceiver = class {
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
        
        // Try Method 0: SetFocusToLocationBar
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFocusToLocationBar (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetReloadStopState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_SetReloadStopState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetReloadStopState (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShowSidePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_ShowSidePanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSidePanel (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CloseSidePanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_CloseSidePanel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseSidePanel (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnFullscreenModeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFullscreenModeChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_SetFocusToLocationBar_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFocusToLocationBar');
          const result = this.impl.setFocusToLocationBar(params.arg_is_user_initiated);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_SetReloadStopState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setReloadStopState');
          const result = this.impl.setReloadStopState(params.arg_is_loading);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_ShowSidePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showSidePanel');
          const result = this.impl.showSidePanel(params.arg_guest_contents_id, params.arg_title);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_CloseSidePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeSidePanel');
          const result = this.impl.closeSidePanel();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.Page_OnFullscreenModeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFullscreenModeChanged');
          const result = this.impl.onFullscreenModeChanged(params.arg_is_fullscreen, params.arg_context);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.webui_browser.mojom.PageReceiver = mojo.internal.bindings.webui_browser.mojom.PageReceiver;

mojo.internal.bindings.webui_browser.mojom.PagePtr = mojo.internal.bindings.webui_browser.mojom.PageRemote;
mojo.internal.bindings.webui_browser.mojom.PageRequest = mojo.internal.bindings.webui_browser.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec, 'webui_browser.mojom.PageHandler_GetGuestIdForTabId_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.bindings.tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.webui_browser.mojom.GuestHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec, 'webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParams', [
      mojo.internal.StructField('arg_guest_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec, 'webui_browser.mojom.PageHandler_LoadTabSearch_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec, 'webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParams', [
      mojo.internal.StructField('arg_guest_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec, 'webui_browser.mojom.PageHandler_ShowTabSearchBubble_Params', [
      mojo.internal.StructField('arg_anchor_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec, 'webui_browser.mojom.PageHandler_OpenAppMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec, 'webui_browser.mojom.PageHandler_OpenProfileMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec, 'webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec, 'webui_browser.mojom.PageHandler_OnSidePanelClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_Minimize_ParamsSpec, 'webui_browser.mojom.PageHandler_Minimize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_Maximize_ParamsSpec, 'webui_browser.mojom.PageHandler_Maximize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_Restore_ParamsSpec, 'webui_browser.mojom.PageHandler_Restore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.PageHandler_Close_ParamsSpec, 'webui_browser.mojom.PageHandler_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.webui_browser.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.webui_browser.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.webui_browser.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.webui_browser.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getGuestIdForTabId(arg_tab_id, arg_handler) {
    return this.$.getGuestIdForTabId(arg_tab_id, arg_handler);
  }
  loadTabSearch() {
    return this.$.loadTabSearch();
  }
  showTabSearchBubble(arg_anchor_name) {
    return this.$.showTabSearchBubble(arg_anchor_name);
  }
  openAppMenu() {
    return this.$.openAppMenu();
  }
  openProfileMenu() {
    return this.$.openProfileMenu();
  }
  launchDevToolsForBrowser() {
    return this.$.launchDevToolsForBrowser();
  }
  onSidePanelClosed() {
    return this.$.onSidePanelClosed();
  }
  minimize() {
    return this.$.minimize();
  }
  maximize() {
    return this.$.maximize();
  }
  restore() {
    return this.$.restore();
  }
  close() {
    return this.$.close();
  }
};

mojo.internal.bindings.webui_browser.mojom.PageHandlerRemoteCallHandler = class {
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

  getGuestIdForTabId(arg_tab_id, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec,
      mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec,
      [arg_tab_id, arg_handler],
      false);
  }

  loadTabSearch() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec,
      mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec,
      [],
      false);
  }

  showTabSearchBubble(arg_anchor_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec,
      null,
      [arg_anchor_name],
      false);
  }

  openAppMenu() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec,
      null,
      [],
      false);
  }

  openProfileMenu() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec,
      null,
      [],
      false);
  }

  launchDevToolsForBrowser() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec,
      null,
      [],
      false);
  }

  onSidePanelClosed() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec,
      null,
      [],
      false);
  }

  minimize() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_Minimize_ParamsSpec,
      null,
      [],
      false);
  }

  maximize() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_Maximize_ParamsSpec,
      null,
      [],
      false);
  }

  restore() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_Restore_ParamsSpec,
      null,
      [],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.PageHandler_Close_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.webui_browser.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.webui_browser.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.webui_browser.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetGuestIdForTabId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGuestIdForTabId (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: LoadTabSearch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadTabSearch (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShowTabSearchBubble
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowTabSearchBubble (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenAppMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenAppMenu (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenProfileMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenProfileMenu (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: LaunchDevToolsForBrowser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchDevToolsForBrowser (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnSidePanelClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSidePanelClosed (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Minimize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_Minimize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Minimize (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: Maximize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_Maximize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Maximize (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Restore
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_Restore_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Restore (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_Close_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (10)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGuestIdForTabId');
          const result = this.impl.getGuestIdForTabId(params.arg_tab_id, params.arg_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.webui_browser.mojom.PageHandler_GetGuestIdForTabId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGuestIdForTabId FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadTabSearch');
          const result = this.impl.loadTabSearch();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.webui_browser.mojom.PageHandler_LoadTabSearch_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LoadTabSearch FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_ShowTabSearchBubble_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showTabSearchBubble');
          const result = this.impl.showTabSearchBubble(params.arg_anchor_name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenAppMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openAppMenu');
          const result = this.impl.openAppMenu();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_OpenProfileMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openProfileMenu');
          const result = this.impl.openProfileMenu();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_LaunchDevToolsForBrowser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.launchDevToolsForBrowser');
          const result = this.impl.launchDevToolsForBrowser();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_OnSidePanelClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSidePanelClosed');
          const result = this.impl.onSidePanelClosed();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_Minimize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.minimize');
          const result = this.impl.minimize();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_Maximize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maximize');
          const result = this.impl.maximize();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_Restore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restore');
          const result = this.impl.restore();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.PageHandler_Close_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.webui_browser.mojom.PageHandlerReceiver = mojo.internal.bindings.webui_browser.mojom.PageHandlerReceiver;

mojo.internal.bindings.webui_browser.mojom.PageHandlerPtr = mojo.internal.bindings.webui_browser.mojom.PageHandlerRemote;
mojo.internal.bindings.webui_browser.mojom.PageHandlerRequest = mojo.internal.bindings.webui_browser.mojom.PageHandlerPendingReceiver;


// Interface: GuestHandler
mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_Navigate_ParamsSpec, 'webui_browser.mojom.GuestHandler_Navigate_Params', [
      mojo.internal.StructField('arg_src', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec, 'webui_browser.mojom.GuestHandler_CanGoBack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ResponseParamsSpec, 'webui_browser.mojom.GuestHandler_CanGoBack_ResponseParams', [
      mojo.internal.StructField('arg_can_go_back', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoBack_ParamsSpec, 'webui_browser.mojom.GuestHandler_GoBack_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec, 'webui_browser.mojom.GuestHandler_CanGoForward_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ResponseParamsSpec, 'webui_browser.mojom.GuestHandler_CanGoForward_ResponseParams', [
      mojo.internal.StructField('arg_can_go_forward', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoForward_ParamsSpec, 'webui_browser.mojom.GuestHandler_GoForward_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_Reload_ParamsSpec, 'webui_browser.mojom.GuestHandler_Reload_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec, 'webui_browser.mojom.GuestHandler_StopLoading_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec, 'webui_browser.mojom.GuestHandler_OpenPageInfoMenu_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec, 'webui_browser.mojom.GuestHandler_GetSecurityIcon_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec, 'webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParams', [
      mojo.internal.StructField('arg_security_icon', 0, 0, mojo.internal.bindings.webui_browser.mojom.SecurityIconSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.webui_browser.mojom.GuestHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.webui_browser.mojom.GuestHandlerRemote = class {
  static get $interfaceName() {
    return 'webui_browser.mojom.GuestHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.webui_browser.mojom.GuestHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.webui_browser.mojom.GuestHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  navigate(arg_src) {
    return this.$.navigate(arg_src);
  }
  canGoBack() {
    return this.$.canGoBack();
  }
  goBack() {
    return this.$.goBack();
  }
  canGoForward() {
    return this.$.canGoForward();
  }
  goForward() {
    return this.$.goForward();
  }
  reload() {
    return this.$.reload();
  }
  stopLoading() {
    return this.$.stopLoading();
  }
  openPageInfoMenu() {
    return this.$.openPageInfoMenu();
  }
  getSecurityIcon() {
    return this.$.getSecurityIcon();
  }
};

mojo.internal.bindings.webui_browser.mojom.GuestHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GuestHandler', [
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

  navigate(arg_src) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_Navigate_ParamsSpec,
      null,
      [arg_src],
      false);
  }

  canGoBack() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec,
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ResponseParamsSpec,
      [],
      false);
  }

  goBack() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoBack_ParamsSpec,
      null,
      [],
      false);
  }

  canGoForward() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec,
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ResponseParamsSpec,
      [],
      false);
  }

  goForward() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoForward_ParamsSpec,
      null,
      [],
      false);
  }

  reload() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_Reload_ParamsSpec,
      null,
      [],
      false);
  }

  stopLoading() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec,
      null,
      [],
      false);
  }

  openPageInfoMenu() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec,
      null,
      [],
      false);
  }

  getSecurityIcon() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec,
      mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.webui_browser.mojom.GuestHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.webui_browser.mojom.GuestHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'webui_browser.mojom.GuestHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.webui_browser.mojom.GuestHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GuestHandler', [
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
        
        // Try Method 0: Navigate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_Navigate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Navigate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CanGoBack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanGoBack (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GoBack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoBack_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GoBack (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CanGoForward
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanGoForward (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GoForward
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoForward_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GoForward (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Reload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_Reload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reload (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StopLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopLoading (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OpenPageInfoMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenPageInfoMenu (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetSecurityIcon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSecurityIcon (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_Navigate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.navigate');
          const result = this.impl.navigate(params.arg_src);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.canGoBack');
          const result = this.impl.canGoBack();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoBack_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CanGoBack FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoBack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.goBack');
          const result = this.impl.goBack();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.canGoForward');
          const result = this.impl.canGoForward();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.webui_browser.mojom.GuestHandler_CanGoForward_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CanGoForward FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_GoForward_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.goForward');
          const result = this.impl.goForward();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_Reload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reload');
          const result = this.impl.reload();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_StopLoading_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopLoading');
          const result = this.impl.stopLoading();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_OpenPageInfoMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPageInfoMenu');
          const result = this.impl.openPageInfoMenu();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSecurityIcon');
          const result = this.impl.getSecurityIcon();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.webui_browser.mojom.GuestHandler_GetSecurityIcon_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSecurityIcon FAILED:', e));
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

mojo.internal.bindings.webui_browser.mojom.GuestHandlerReceiver = mojo.internal.bindings.webui_browser.mojom.GuestHandlerReceiver;

mojo.internal.bindings.webui_browser.mojom.GuestHandlerPtr = mojo.internal.bindings.webui_browser.mojom.GuestHandlerRemote;
mojo.internal.bindings.webui_browser.mojom.GuestHandlerRequest = mojo.internal.bindings.webui_browser.mojom.GuestHandlerPendingReceiver;

