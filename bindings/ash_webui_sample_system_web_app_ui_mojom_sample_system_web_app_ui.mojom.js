// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_ui.mojom
// Module: ash.mojom.sample_swa

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
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};

ash.mojom.sample_swa.PreferencesSpec = { $: {} };
ash.mojom.sample_swa.PageHandlerFactory = {};
ash.mojom.sample_swa.PageHandlerFactory.$interfaceName = 'ash.mojom.sample_swa.PageHandlerFactory';
ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler = {};
ash.mojom.sample_swa.PageHandler.$interfaceName = 'ash.mojom.sample_swa.PageHandler';
ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_Send_ParamsSpec = { $: {} };
ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec = { $: {} };
ash.mojom.sample_swa.Page = {};
ash.mojom.sample_swa.Page.$interfaceName = 'ash.mojom.sample_swa.Page';
ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec = { $: {} };
ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec = { $: {} };

// Struct: Preferences
mojo.internal.Struct(
    ash.mojom.sample_swa.PreferencesSpec, 'ash.mojom.sample_swa.Preferences', [
      mojo.internal.StructField('background', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('foreground', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.mojom.sample_swa.PageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.mojom.sample_swa.PageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(handler, page) {
    return this.$.createPageHandler(handler, page);
  }
};

ash.mojom.sample_swa.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler, page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler, page],
      false);
  }

};

ash.mojom.sample_swa.PageHandlerFactory.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.PageHandlerFactory',
    'context');
  return remote.$;
};

ash.mojom.sample_swa.PageHandlerFactoryReceiver = class {
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
             decoder.decodeStructInline(ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec);
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
          const params = decoder.decodeStructInline(ash.mojom.sample_swa.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler, params.page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.sample_swa.PageHandlerFactoryReceiver = ash.mojom.sample_swa.PageHandlerFactoryReceiver;

ash.mojom.sample_swa.PageHandlerFactoryPtr = ash.mojom.sample_swa.PageHandlerFactoryRemote;
ash.mojom.sample_swa.PageHandlerFactoryRequest = ash.mojom.sample_swa.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_GetPreferences_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec, 'ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParams', [
      mojo.internal.StructField('preferences', 0, 0, ash.mojom.sample_swa.PreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_Send_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_Send_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec, 'ash.mojom.sample_swa.PageHandler_DoSomething_Params', [
    ],
    [[0, 8]]);

ash.mojom.sample_swa.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPreferences() {
    return this.$.getPreferences();
  }
  send(message) {
    return this.$.send(message);
  }
  doSomething() {
    return this.$.doSomething();
  }
};

ash.mojom.sample_swa.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getPreferences() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec,
      ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec,
      [],
      false);
  }

  send(message) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.mojom.sample_swa.PageHandler_Send_ParamsSpec,
      null,
      [message],
      false);
  }

  doSomething() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.mojom.sample_swa.PageHandler.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.PageHandler',
    'context');
  return remote.$;
};

ash.mojom.sample_swa.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetPreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPreferences (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Send
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.sample_swa.PageHandler_Send_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Send (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DoSomething
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoSomething (2)');
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
          const params = decoder.decodeStructInline(ash.mojom.sample_swa.PageHandler_GetPreferences_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPreferences');
          const result = this.impl.getPreferences();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.sample_swa.PageHandler_GetPreferences_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.sample_swa.PageHandler_Send_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.send');
          const result = this.impl.send(params.message);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.sample_swa.PageHandler_DoSomething_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doSomething');
          const result = this.impl.doSomething();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.sample_swa.PageHandlerReceiver = ash.mojom.sample_swa.PageHandlerReceiver;

ash.mojom.sample_swa.PageHandlerPtr = ash.mojom.sample_swa.PageHandlerRemote;
ash.mojom.sample_swa.PageHandlerRequest = ash.mojom.sample_swa.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec, 'ash.mojom.sample_swa.Page_OnEventOccurred_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec, 'ash.mojom.sample_swa.Page_CreateParentPage_Params', [
      mojo.internal.StructField('child_untrusted_page', 0, 0, mojo.internal.InterfaceProxy(ash.mojom.sample_swa.ChildUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('parent_trusted_page', 8, 0, mojo.internal.InterfaceRequest(ash.mojom.sample_swa.ParentTrustedPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.mojom.sample_swa.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.PageRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.PagePendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onEventOccurred(name) {
    return this.$.onEventOccurred(name);
  }
  createParentPage(child_untrusted_page, parent_trusted_page) {
    return this.$.createParentPage(child_untrusted_page, parent_trusted_page);
  }
};

ash.mojom.sample_swa.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onEventOccurred(name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec,
      null,
      [name],
      false);
  }

  createParentPage(child_untrusted_page, parent_trusted_page) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec,
      null,
      [child_untrusted_page, parent_trusted_page],
      false);
  }

};

ash.mojom.sample_swa.Page.getRemote = function() {
  let remote = new ash.mojom.sample_swa.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.Page',
    'context');
  return remote.$;
};

ash.mojom.sample_swa.PageReceiver = class {
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
        
        // Try Method 0: OnEventOccurred
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEventOccurred (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateParentPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateParentPage (1)');
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
          const params = decoder.decodeStructInline(ash.mojom.sample_swa.Page_OnEventOccurred_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onEventOccurred');
          const result = this.impl.onEventOccurred(params.name);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.sample_swa.Page_CreateParentPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createParentPage');
          const result = this.impl.createParentPage(params.child_untrusted_page, params.parent_trusted_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.sample_swa.PageReceiver = ash.mojom.sample_swa.PageReceiver;

ash.mojom.sample_swa.PagePtr = ash.mojom.sample_swa.PageRemote;
ash.mojom.sample_swa.PageRequest = ash.mojom.sample_swa.PagePendingReceiver;

