// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/v2/tab_groups/tab_groups.mojom
// Module: ntp.tab_groups.mojom

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
var ntp = ntp || {};
ntp.tab_groups = ntp.tab_groups || {};
ntp.tab_groups.mojom = ntp.tab_groups.mojom || {};
var tab_groups = tab_groups || {};
var url = url || {};

ntp.tab_groups.mojom.TabGroupSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler = {};
ntp.tab_groups.mojom.PageHandler.$interfaceName = 'ntp.tab_groups.mojom.PageHandler';
ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec = { $: {} };
ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec = { $: {} };

// Struct: TabGroup
mojo.internal.Struct(
    ntp.tab_groups.mojom.TabGroupSpec, 'ntp.tab_groups.mojom.TabGroup', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_time', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('color', 32, 0, tab_groups.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon_urls', 40, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('total_tab_count', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_shared_tab_group', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: PageHandler
mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_GetTabGroups_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec, 'ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParams', [
      mojo.internal.StructField('tab_groups', 0, 0, mojo.internal.Array(ntp.tab_groups.mojom.TabGroupSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('showZeroState', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_OpenTabGroup_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_DismissModule_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec, 'ntp.tab_groups.mojom.PageHandler_RestoreModule_Params', [
    ],
    [[0, 8]]);

ntp.tab_groups.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.tab_groups.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.tab_groups.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.tab_groups.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ntp.tab_groups.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createNewTabGroup() {
    return this.$.createNewTabGroup();
  }
  getTabGroups() {
    return this.$.getTabGroups();
  }
  openTabGroup(id) {
    return this.$.openTabGroup(id);
  }
  dismissModule() {
    return this.$.dismissModule();
  }
  restoreModule() {
    return this.$.restoreModule();
  }
};

ntp.tab_groups.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createNewTabGroup() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec,
      null,
      [],
      false);
  }

  getTabGroups() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec,
      ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec,
      [],
      false);
  }

  openTabGroup(id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec,
      null,
      [id],
      false);
  }

  dismissModule() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec,
      null,
      [],
      false);
  }

  restoreModule() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec,
      null,
      [],
      false);
  }

};

ntp.tab_groups.mojom.PageHandler.getRemote = function() {
  let remote = new ntp.tab_groups.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.tab_groups.mojom.PageHandler',
    'context');
  return remote.$;
};

ntp.tab_groups.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: CreateNewTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNewTabGroup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTabGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTabGroups (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OpenTabGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenTabGroup (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DismissModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DismissModule (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RestoreModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RestoreModule (4)');
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
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_CreateNewTabGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNewTabGroup');
          const result = this.impl.createNewTabGroup();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_GetTabGroups_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTabGroups');
          const result = this.impl.getTabGroups();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ntp.tab_groups.mojom.PageHandler_GetTabGroups_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_OpenTabGroup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openTabGroup');
          const result = this.impl.openTabGroup(params.id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_DismissModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dismissModule');
          const result = this.impl.dismissModule();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ntp.tab_groups.mojom.PageHandler_RestoreModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restoreModule');
          const result = this.impl.restoreModule();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ntp.tab_groups.mojom.PageHandlerReceiver = ntp.tab_groups.mojom.PageHandlerReceiver;

ntp.tab_groups.mojom.PageHandlerPtr = ntp.tab_groups.mojom.PageHandlerRemote;
ntp.tab_groups.mojom.PageHandlerRequest = ntp.tab_groups.mojom.PageHandlerPendingReceiver;

