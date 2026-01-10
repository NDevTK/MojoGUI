// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/extended_updates/extended_updates.mojom
// Module: ash.extended_updates.mojom

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
var ash = ash || {};
ash.extended_updates = ash.extended_updates || {};
ash.extended_updates.mojom = ash.extended_updates.mojom || {};

ash.extended_updates.mojom.AppSpec = { $: {} };
ash.extended_updates.mojom.PageHandlerFactory = {};
ash.extended_updates.mojom.PageHandlerFactory.$interfaceName = 'ash.extended_updates.mojom.PageHandlerFactory';
ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler = {};
ash.extended_updates.mojom.PageHandler.$interfaceName = 'ash.extended_updates.mojom.PageHandler';
ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec = { $: {} };
ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec = { $: {} };
ash.extended_updates.mojom.Page = {};
ash.extended_updates.mojom.Page.$interfaceName = 'ash.extended_updates.mojom.Page';

// Struct: App
mojo.internal.Struct(
    ash.extended_updates.mojom.AppSpec, 'ash.extended_updates.mojom.App', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ash.extended_updates.mojom.PageSpec), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(ash.extended_updates.mojom.PageHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.extended_updates.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.extended_updates.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.extended_updates.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.extended_updates.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.extended_updates.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.extended_updates.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

ash.extended_updates.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.extended_updates.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.extended_updates.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.extended_updates.mojom.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.extended_updates.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.extended_updates.mojom.PageHandlerFactoryReceiver = ash.extended_updates.mojom.PageHandlerFactoryReceiver;

ash.extended_updates.mojom.PageHandlerFactoryPtr = ash.extended_updates.mojom.PageHandlerFactoryRemote;
ash.extended_updates.mojom.PageHandlerFactoryRequest = ash.extended_updates.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec, 'ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec, 'ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec, 'ash.extended_updates.mojom.PageHandler_CloseDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec, 'ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec, 'ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParams', [
      mojo.internal.StructField('apps', 0, 0, mojo.internal.Array(ash.extended_updates.mojom.AppSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.extended_updates.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.extended_updates.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.extended_updates.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.extended_updates.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.extended_updates.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.extended_updates.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  optInToExtendedUpdates() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec,
      ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec,
      [],
      false);
  }

  closeDialog() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec,
      null,
      [],
      false);
  }

  getInstalledAndroidApps() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec,
      ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec,
      [],
      false);
  }

};

ash.extended_updates.mojom.PageHandler.getRemote = function() {
  let remote = new ash.extended_updates.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.extended_updates.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.extended_updates.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: OptInToExtendedUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OptInToExtendedUpdates (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseDialog (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetInstalledAndroidApps
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInstalledAndroidApps (2)');
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
          const params = decoder.decodeStructInline(ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.optInToExtendedUpdates');
          const result = this.impl.optInToExtendedUpdates();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.extended_updates.mojom.PageHandler_OptInToExtendedUpdates_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.extended_updates.mojom.PageHandler_CloseDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeDialog');
          const result = this.impl.closeDialog();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInstalledAndroidApps');
          const result = this.impl.getInstalledAndroidApps();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.extended_updates.mojom.PageHandler_GetInstalledAndroidApps_ResponseParamsSpec);
               responder(response);
            });
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

ash.extended_updates.mojom.PageHandlerReceiver = ash.extended_updates.mojom.PageHandlerReceiver;

ash.extended_updates.mojom.PageHandlerPtr = ash.extended_updates.mojom.PageHandlerRemote;
ash.extended_updates.mojom.PageHandlerRequest = ash.extended_updates.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.extended_updates.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.extended_updates.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.extended_updates.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.extended_updates.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.extended_updates.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.extended_updates.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
    ]);
  }

};

ash.extended_updates.mojom.Page.getRemote = function() {
  let remote = new ash.extended_updates.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.extended_updates.mojom.Page',
    'context');
  return remote.$;
};

ash.extended_updates.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.extended_updates.mojom.PageReceiver = ash.extended_updates.mojom.PageReceiver;

ash.extended_updates.mojom.PagePtr = ash.extended_updates.mojom.PageRemote;
ash.extended_updates.mojom.PageRequest = ash.extended_updates.mojom.PagePendingReceiver;

