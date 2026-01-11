// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/signin/history_sync_optin/history_sync_optin.mojom
 // Module: history_sync_optin.mojom

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
 

 mojo.internal.bindings.history_sync_optin = mojo.internal.bindings.history_sync_optin || {};
mojo.internal.bindings.history_sync_optin.mojom = mojo.internal.bindings.history_sync_optin.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.history_sync_optin.mojom.LaunchContextSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_sync_optin.mojom.ScreenModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.history_sync_optin.mojom.AccountInfoSpec = { $: {} };
mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactory = {};
mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactory.$interfaceName = 'history_sync_optin.mojom.PageHandlerFactory';
mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.history_sync_optin.mojom.PageHandler = {};
mojo.internal.bindings.history_sync_optin.mojom.PageHandler.$interfaceName = 'history_sync_optin.mojom.PageHandler';
mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Accept_ParamsSpec = { $: {} };
mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Reject_ParamsSpec = { $: {} };
mojo.internal.bindings.history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec = { $: {} };
mojo.internal.bindings.history_sync_optin.mojom.Page = {};
mojo.internal.bindings.history_sync_optin.mojom.Page.$interfaceName = 'history_sync_optin.mojom.Page';
mojo.internal.bindings.history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec = { $: {} };

// Enum: LaunchContext
mojo.internal.bindings.history_sync_optin.mojom.LaunchContext = {
  kWindow: 0,
  kModal: 1,
};

// Enum: ScreenMode
mojo.internal.bindings.history_sync_optin.mojom.ScreenMode = {
  kPending: 0,
  kRestricted: 1,
  kUnrestricted: 2,
  kDeadlined: 3,
};

// Struct: AccountInfo
mojo.internal.Struct(
    mojo.internal.bindings.history_sync_optin.mojom.AccountInfoSpec, 'history_sync_optin.mojom.AccountInfo', [
      mojo.internal.StructField('arg_account_image_src', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec, 'history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_Params', [
      mojo.internal.StructField('arg_page', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.history_sync_optin.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.history_sync_optin.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createHistorySyncOptinHandler(arg_page, arg_handler) {
    return this.$.createHistorySyncOptinHandler(arg_page, arg_handler);
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createHistorySyncOptinHandler(arg_page, arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec,
      null,
      [arg_page, arg_handler],
      false);
  }

};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryReceiver = class {
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
        
        // Try Method 0: CreateHistorySyncOptinHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateHistorySyncOptinHandler (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createHistorySyncOptinHandler');
          const result = this.impl.createHistorySyncOptinHandler(params.arg_page, params.arg_handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.history_sync_optin.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Accept_ParamsSpec, 'history_sync_optin.mojom.PageHandler_Accept_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Reject_ParamsSpec, 'history_sync_optin.mojom.PageHandler_Reject_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec, 'history_sync_optin.mojom.PageHandler_RequestAccountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec, 'history_sync_optin.mojom.PageHandler_UpdateDialogHeight_Params', [
      mojo.internal.StructField('arg_height', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.history_sync_optin.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.history_sync_optin.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  accept() {
    return this.$.accept();
  }
  reject() {
    return this.$.reject();
  }
  requestAccountInfo() {
    return this.$.requestAccountInfo();
  }
  updateDialogHeight(arg_height) {
    return this.$.updateDialogHeight(arg_height);
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  accept() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Accept_ParamsSpec,
      null,
      [],
      false);
  }

  reject() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Reject_ParamsSpec,
      null,
      [],
      false);
  }

  requestAccountInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec,
      null,
      [],
      false);
  }

  updateDialogHeight(arg_height) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec,
      null,
      [arg_height],
      false);
  }

};

mojo.internal.bindings.history_sync_optin.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.history_sync_optin.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: Accept
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Accept_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Accept (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Reject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Reject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reject (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAccountInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UpdateDialogHeight
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDialogHeight (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Accept_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.accept');
          const result = this.impl.accept();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandler_Reject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reject');
          const result = this.impl.reject();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAccountInfo');
          const result = this.impl.requestAccountInfo();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDialogHeight');
          const result = this.impl.updateDialogHeight(params.arg_height);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerReceiver = mojo.internal.bindings.history_sync_optin.mojom.PageHandlerReceiver;

mojo.internal.bindings.history_sync_optin.mojom.PageHandlerPtr = mojo.internal.bindings.history_sync_optin.mojom.PageHandlerRemote;
mojo.internal.bindings.history_sync_optin.mojom.PageHandlerRequest = mojo.internal.bindings.history_sync_optin.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec, 'history_sync_optin.mojom.Page_SendAccountInfo_Params', [
      mojo.internal.StructField('arg_account_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.history_sync_optin.mojom.AccountInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec, 'history_sync_optin.mojom.Page_SendScreenMode_Params', [
      mojo.internal.StructField('arg_screen_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.history_sync_optin.mojom.ScreenModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.history_sync_optin.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.history_sync_optin.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.history_sync_optin.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  sendAccountInfo(arg_account_info) {
    return this.$.sendAccountInfo(arg_account_info);
  }
  sendScreenMode(arg_screen_mode) {
    return this.$.sendScreenMode(arg_screen_mode);
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  sendAccountInfo(arg_account_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec,
      null,
      [arg_account_info],
      false);
  }

  sendScreenMode(arg_screen_mode) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec,
      null,
      [arg_screen_mode],
      false);
  }

};

mojo.internal.bindings.history_sync_optin.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.history_sync_optin.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.history_sync_optin.mojom.PageReceiver = class {
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
        
        // Try Method 0: SendAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendAccountInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendScreenMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendScreenMode (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendAccountInfo');
          const result = this.impl.sendAccountInfo(params.arg_account_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendScreenMode');
          const result = this.impl.sendScreenMode(params.arg_screen_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.history_sync_optin.mojom.PageReceiver = mojo.internal.bindings.history_sync_optin.mojom.PageReceiver;

mojo.internal.bindings.history_sync_optin.mojom.PagePtr = mojo.internal.bindings.history_sync_optin.mojom.PageRemote;
mojo.internal.bindings.history_sync_optin.mojom.PageRequest = mojo.internal.bindings.history_sync_optin.mojom.PagePendingReceiver;

