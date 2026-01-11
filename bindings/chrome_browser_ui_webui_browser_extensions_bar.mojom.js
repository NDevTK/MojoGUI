// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui_browser/extensions_bar.mojom
 // Module: extensions_bar.mojom

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
 

 mojo.internal.bindings.extensions_bar = mojo.internal.bindings.extensions_bar || {};
mojo.internal.bindings.extensions_bar.mojom = mojo.internal.bindings.extensions_bar.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};

mojo.internal.bindings.extensions_bar.mojom.ExtensionActionInfoSpec = { $: {} };
mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactory = {};
mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactory.$interfaceName = 'extensions_bar.mojom.PageHandlerFactory';
mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions_bar.mojom.PageHandler = {};
mojo.internal.bindings.extensions_bar.mojom.PageHandler.$interfaceName = 'extensions_bar.mojom.PageHandler';
mojo.internal.bindings.extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions_bar.mojom.Page = {};
mojo.internal.bindings.extensions_bar.mojom.Page.$interfaceName = 'extensions_bar.mojom.Page';
mojo.internal.bindings.extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions_bar.mojom.Page_ActionRemoved_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec = { $: {} };

// Struct: ExtensionActionInfo
mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.ExtensionActionInfoSpec, 'extensions_bar.mojom.ExtensionActionInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_accessible_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tooltip', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_data_url_for_icon', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_visible', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.extensions_bar.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.extensions_bar.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.extensions_bar.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec, 'extensions_bar.mojom.PageHandler_ExecuteUserAction_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec, 'extensions_bar.mojom.PageHandler_ShowContextMenu_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.ui.mojom.MenuSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec, 'extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.extensions_bar.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.extensions_bar.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.extensions_bar.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.extensions_bar.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  executeUserAction(arg_id) {
    return this.$.executeUserAction(arg_id);
  }
  showContextMenu(arg_source, arg_id) {
    return this.$.showContextMenu(arg_source, arg_id);
  }
  toggleExtensionsMenuFromWebUI() {
    return this.$.toggleExtensionsMenuFromWebUI();
  }
};

mojo.internal.bindings.extensions_bar.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  executeUserAction(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  showContextMenu(arg_source, arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec,
      null,
      [arg_source, arg_id],
      false);
  }

  toggleExtensionsMenuFromWebUI() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.extensions_bar.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.extensions_bar.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.extensions_bar.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: ExecuteUserAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteUserAction (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ToggleExtensionsMenuFromWebUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ToggleExtensionsMenuFromWebUI (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.PageHandler_ExecuteUserAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeUserAction');
          const result = this.impl.executeUserAction(params.arg_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.PageHandler_ShowContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.arg_source, params.arg_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.PageHandler_ToggleExtensionsMenuFromWebUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.toggleExtensionsMenuFromWebUI');
          const result = this.impl.toggleExtensionsMenuFromWebUI();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.extensions_bar.mojom.PageHandlerReceiver = mojo.internal.bindings.extensions_bar.mojom.PageHandlerReceiver;

mojo.internal.bindings.extensions_bar.mojom.PageHandlerPtr = mojo.internal.bindings.extensions_bar.mojom.PageHandlerRemote;
mojo.internal.bindings.extensions_bar.mojom.PageHandlerRequest = mojo.internal.bindings.extensions_bar.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec, 'extensions_bar.mojom.Page_ActionsAddedOrUpdated_Params', [
      mojo.internal.StructField('arg_actions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.extensions_bar.mojom.ExtensionActionInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.Page_ActionRemoved_ParamsSpec, 'extensions_bar.mojom.Page_ActionRemoved_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec, 'extensions_bar.mojom.Page_ActionPoppedOut_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec, 'extensions_bar.mojom.Page_ActionPoppedOut_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.extensions_bar.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.extensions_bar.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'extensions_bar.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.extensions_bar.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.extensions_bar.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  actionsAddedOrUpdated(arg_actions) {
    return this.$.actionsAddedOrUpdated(arg_actions);
  }
  actionRemoved(arg_id) {
    return this.$.actionRemoved(arg_id);
  }
  actionPoppedOut() {
    return this.$.actionPoppedOut();
  }
};

mojo.internal.bindings.extensions_bar.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  actionsAddedOrUpdated(arg_actions) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec,
      null,
      [arg_actions],
      false);
  }

  actionRemoved(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.extensions_bar.mojom.Page_ActionRemoved_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  actionPoppedOut() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec,
      mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.extensions_bar.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.extensions_bar.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions_bar.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.extensions_bar.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: ActionsAddedOrUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActionsAddedOrUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ActionRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.Page_ActionRemoved_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActionRemoved (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ActionPoppedOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActionPoppedOut (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.Page_ActionsAddedOrUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.actionsAddedOrUpdated');
          const result = this.impl.actionsAddedOrUpdated(params.arg_actions);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.Page_ActionRemoved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.actionRemoved');
          const result = this.impl.actionRemoved(params.arg_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.actionPoppedOut');
          const result = this.impl.actionPoppedOut();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions_bar.mojom.Page_ActionPoppedOut_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ActionPoppedOut FAILED:', e));
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

mojo.internal.bindings.extensions_bar.mojom.PageReceiver = mojo.internal.bindings.extensions_bar.mojom.PageReceiver;

mojo.internal.bindings.extensions_bar.mojom.PagePtr = mojo.internal.bindings.extensions_bar.mojom.PageRemote;
mojo.internal.bindings.extensions_bar.mojom.PageRequest = mojo.internal.bindings.extensions_bar.mojom.PagePendingReceiver;

