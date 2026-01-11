// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/common/search/search.mojom
 // Module: search.mojom

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
 

 mojo.internal.bindings.search = mojo.internal.bindings.search || {};
mojo.internal.bindings.search.mojom = mojo.internal.bindings.search.mojom || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.search.mojom.NTPLoggingEventTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.search.mojom.OmniboxFocusStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.search.mojom.OmniboxFocusChangeReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.search.mojom.InstantMostVisitedInfoSpec = { $: {} };
mojo.internal.bindings.search.mojom.NtpThemeSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearchConnector = {};
mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorSpec = { $ : {} };
mojo.internal.bindings.search.mojom.EmbeddedSearchConnector.$interfaceName = 'search.mojom.EmbeddedSearchConnector';
mojo.internal.bindings.search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearch = {};
mojo.internal.bindings.search.mojom.EmbeddedSearchSpec = { $ : {} };
mojo.internal.bindings.search.mojom.EmbeddedSearch.$interfaceName = 'search.mojom.EmbeddedSearch';
mojo.internal.bindings.search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearchClient = {};
mojo.internal.bindings.search.mojom.EmbeddedSearchClientSpec = { $ : {} };
mojo.internal.bindings.search.mojom.EmbeddedSearchClient.$interfaceName = 'search.mojom.EmbeddedSearchClient';
mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec = { $: {} };
mojo.internal.bindings.search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec = { $: {} };

// Enum: NTPLoggingEventType
mojo.internal.bindings.search.mojom.NTPLoggingEventType = {
};

// Enum: OmniboxFocusState
mojo.internal.bindings.search.mojom.OmniboxFocusState = {
};

// Enum: OmniboxFocusChangeReason
mojo.internal.bindings.search.mojom.OmniboxFocusChangeReason = {
};

// Struct: InstantMostVisitedInfo
mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.InstantMostVisitedInfoSpec, 'search.mojom.InstantMostVisitedInfo', [
    ],
    [[0, 8]]);

// Struct: NtpTheme
mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.NtpThemeSpec, 'search.mojom.NtpTheme', [
    ],
    [[0, 8]]);

// Interface: EmbeddedSearchConnector
mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec, 'search.mojom.EmbeddedSearchConnector_Connect_Params', [
      mojo.internal.StructField('arg_embedded_search', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.search.mojom.EmbeddedSearchRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.search.mojom.EmbeddedSearchClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearchConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(arg_embedded_search, arg_client) {
    return this.$.connect(arg_embedded_search, arg_client);
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('search.mojom.EmbeddedSearchConnector', [
      { explicit: null },
    ]);
  }

  connect(arg_embedded_search, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec,
      null,
      [arg_embedded_search, arg_client],
      false);
  }

};

mojo.internal.bindings.search.mojom.EmbeddedSearchConnector.getRemote = function() {
  let remote = new mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearchConnector',
    'context');
  return remote.$;
};

mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('search.mojom.EmbeddedSearchConnector', [
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
        
        // Try Method 0: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchConnector_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.arg_embedded_search, params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorReceiver = mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorReceiver;

mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorPtr = mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorRemote;
mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorRequest = mojo.internal.bindings.search.mojom.EmbeddedSearchConnectorPendingReceiver;


// Interface: EmbeddedSearch
mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec, 'search.mojom.EmbeddedSearch_FocusOmnibox_Params', [
      mojo.internal.StructField('arg_page_seq_no', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_focus', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec, 'search.mojom.EmbeddedSearch_DeleteMostVisitedItem_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_seq_no', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec, 'search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_Params', [
      mojo.internal.StructField('arg_page_seq_no', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec, 'search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_seq_no', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.search.mojom.EmbeddedSearchPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearch';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.search.mojom.EmbeddedSearchPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.search.mojom.EmbeddedSearchRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  focusOmnibox(arg_page_seq_no, arg_focus) {
    return this.$.focusOmnibox(arg_page_seq_no, arg_focus);
  }
  deleteMostVisitedItem(arg_page_seq_no, arg_url) {
    return this.$.deleteMostVisitedItem(arg_page_seq_no, arg_url);
  }
  undoAllMostVisitedDeletions(arg_page_seq_no) {
    return this.$.undoAllMostVisitedDeletions(arg_page_seq_no);
  }
  undoMostVisitedDeletion(arg_page_seq_no, arg_url) {
    return this.$.undoMostVisitedDeletion(arg_page_seq_no, arg_url);
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('search.mojom.EmbeddedSearch', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  focusOmnibox(arg_page_seq_no, arg_focus) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec,
      null,
      [arg_page_seq_no, arg_focus],
      false);
  }

  deleteMostVisitedItem(arg_page_seq_no, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec,
      null,
      [arg_page_seq_no, arg_url],
      false);
  }

  undoAllMostVisitedDeletions(arg_page_seq_no) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec,
      null,
      [arg_page_seq_no],
      false);
  }

  undoMostVisitedDeletion(arg_page_seq_no, arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec,
      null,
      [arg_page_seq_no, arg_url],
      false);
  }

};

mojo.internal.bindings.search.mojom.EmbeddedSearch.getRemote = function() {
  let remote = new mojo.internal.bindings.search.mojom.EmbeddedSearchRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearch',
    'context');
  return remote.$;
};

mojo.internal.bindings.search.mojom.EmbeddedSearchReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('search.mojom.EmbeddedSearch', [
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
        
        // Try Method 0: FocusOmnibox
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusOmnibox (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DeleteMostVisitedItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteMostVisitedItem (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UndoAllMostVisitedDeletions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoAllMostVisitedDeletions (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UndoMostVisitedDeletion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoMostVisitedDeletion (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearch_FocusOmnibox_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusOmnibox');
          const result = this.impl.focusOmnibox(params.arg_page_seq_no, params.arg_focus);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearch_DeleteMostVisitedItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteMostVisitedItem');
          const result = this.impl.deleteMostVisitedItem(params.arg_page_seq_no, params.arg_url);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoAllMostVisitedDeletions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoAllMostVisitedDeletions');
          const result = this.impl.undoAllMostVisitedDeletions(params.arg_page_seq_no);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearch_UndoMostVisitedDeletion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoMostVisitedDeletion');
          const result = this.impl.undoMostVisitedDeletion(params.arg_page_seq_no, params.arg_url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchReceiver = mojo.internal.bindings.search.mojom.EmbeddedSearchReceiver;

mojo.internal.bindings.search.mojom.EmbeddedSearchPtr = mojo.internal.bindings.search.mojom.EmbeddedSearchRemote;
mojo.internal.bindings.search.mojom.EmbeddedSearchRequest = mojo.internal.bindings.search.mojom.EmbeddedSearchPendingReceiver;


// Interface: EmbeddedSearchClient
mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec, 'search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_Params', [
      mojo.internal.StructField('arg_page_seq_no', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec, 'search.mojom.EmbeddedSearchClient_FocusChanged_Params', [
      mojo.internal.StructField('arg_new_focus_state', 0, 0, mojo.internal.bindings.search.mojom.OmniboxFocusStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.search.mojom.OmniboxFocusChangeReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec, 'search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_Params', [
      mojo.internal.StructField('arg_most_visited_info', 0, 0, mojo.internal.bindings.search.mojom.InstantMostVisitedInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec, 'search.mojom.EmbeddedSearchClient_SetInputInProgress_Params', [
      mojo.internal.StructField('arg_input_in_progress', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec, 'search.mojom.EmbeddedSearchClient_ThemeChanged_Params', [
      mojo.internal.StructField('arg_theme', 0, 0, mojo.internal.bindings.search.mojom.NtpThemeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.search.mojom.EmbeddedSearchClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchClientRemote = class {
  static get $interfaceName() {
    return 'search.mojom.EmbeddedSearchClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.search.mojom.EmbeddedSearchClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.search.mojom.EmbeddedSearchClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setPageSequenceNumber(arg_page_seq_no) {
    return this.$.setPageSequenceNumber(arg_page_seq_no);
  }
  focusChanged(arg_new_focus_state, arg_reason) {
    return this.$.focusChanged(arg_new_focus_state, arg_reason);
  }
  mostVisitedInfoChanged(arg_most_visited_info) {
    return this.$.mostVisitedInfoChanged(arg_most_visited_info);
  }
  setInputInProgress(arg_input_in_progress) {
    return this.$.setInputInProgress(arg_input_in_progress);
  }
  themeChanged(arg_theme) {
    return this.$.themeChanged(arg_theme);
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('search.mojom.EmbeddedSearchClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setPageSequenceNumber(arg_page_seq_no) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec,
      null,
      [arg_page_seq_no],
      false);
  }

  focusChanged(arg_new_focus_state, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec,
      null,
      [arg_new_focus_state, arg_reason],
      false);
  }

  mostVisitedInfoChanged(arg_most_visited_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec,
      null,
      [arg_most_visited_info],
      false);
  }

  setInputInProgress(arg_input_in_progress) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec,
      null,
      [arg_input_in_progress],
      false);
  }

  themeChanged(arg_theme) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec,
      null,
      [arg_theme],
      false);
  }

};

mojo.internal.bindings.search.mojom.EmbeddedSearchClient.getRemote = function() {
  let remote = new mojo.internal.bindings.search.mojom.EmbeddedSearchClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'search.mojom.EmbeddedSearchClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.search.mojom.EmbeddedSearchClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('search.mojom.EmbeddedSearchClient', [
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
        
        // Try Method 0: SetPageSequenceNumber
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageSequenceNumber (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FocusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: MostVisitedInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MostVisitedInfoChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetInputInProgress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInputInProgress (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ThemeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ThemeChanged (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetPageSequenceNumber_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPageSequenceNumber');
          const result = this.impl.setPageSequenceNumber(params.arg_page_seq_no);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_FocusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusChanged');
          const result = this.impl.focusChanged(params.arg_new_focus_state, params.arg_reason);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_MostVisitedInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mostVisitedInfoChanged');
          const result = this.impl.mostVisitedInfoChanged(params.arg_most_visited_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_SetInputInProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInputInProgress');
          const result = this.impl.setInputInProgress(params.arg_input_in_progress);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.search.mojom.EmbeddedSearchClient_ThemeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.themeChanged');
          const result = this.impl.themeChanged(params.arg_theme);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.search.mojom.EmbeddedSearchClientReceiver = mojo.internal.bindings.search.mojom.EmbeddedSearchClientReceiver;

mojo.internal.bindings.search.mojom.EmbeddedSearchClientPtr = mojo.internal.bindings.search.mojom.EmbeddedSearchClientRemote;
mojo.internal.bindings.search.mojom.EmbeddedSearchClientRequest = mojo.internal.bindings.search.mojom.EmbeddedSearchClientPendingReceiver;

