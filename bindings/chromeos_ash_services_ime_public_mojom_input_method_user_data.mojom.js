// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_user_data.mojom
// Module: ash.ime.mojom

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};
var mojo_base = mojo_base || {};

ash.ime.mojom.JapaneseDictionaryResponseSpec = { $: {} };
ash.ime.mojom.StatusSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService = {};
ash.ime.mojom.InputMethodUserDataService.$interfaceName = 'ash.ime.mojom.InputMethodUserDataService';
ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec = { $: {} };

// Union: JapaneseDictionaryResponse
mojo.internal.Union(
    ash.ime.mojom.JapaneseDictionaryResponseSpec, 'ash.ime.mojom.JapaneseDictionaryResponse', {
      'error_reason': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'dictionaries': {
        'ordinal': 1,
        'type': mojo.internal.Array(ash.ime.mojom.JapaneseDictionarySpec.$, false),
        'nullable': false,
      },
    });

// Struct: Status
mojo.internal.Struct(
    ash.ime.mojom.StatusSpec, 'ash.ime.mojom.Status', [
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: InputMethodUserDataService
mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.ime.mojom.JapaneseDictionaryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('entry', 8, 0, ash.ime.mojom.JapaneseDictionaryEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('entry', 8, 0, ash.ime.mojom.JapaneseDictionaryEntrySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entry_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('entry_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_Params', [
      mojo.internal.StructField('dictionary_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('dictionary_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('tsv_data', 8, 0, mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_Params', [
      mojo.internal.StructField('clear_conversion_history', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('clear_suggestion_history', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.InputMethodUserDataServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputMethodUserDataServiceRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputMethodUserDataService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputMethodUserDataServicePendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputMethodUserDataServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputMethodUserDataServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputMethodUserDataService', [
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

  fetchJapaneseDictionary() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec,
      [],
      false);
  }

  addJapaneseDictionaryEntry(dict_id, entry) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry],
      false);
  }

  editJapaneseDictionaryEntry(dict_id, entry_index, entry) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry_index, entry],
      false);
  }

  deleteJapaneseDictionaryEntry(dict_id, entry_index) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry_index],
      false);
  }

  createJapaneseDictionary(dictionary_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec,
      [dictionary_name],
      false);
  }

  renameJapaneseDictionary(dict_id, dictionary_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec,
      [dict_id, dictionary_name],
      false);
  }

  deleteJapaneseDictionary(dict_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec,
      [dict_id],
      false);
  }

  exportJapaneseDictionary(dict_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec,
      [dict_id],
      false);
  }

  importJapaneseDictionary(dict_id, tsv_data) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec,
      [dict_id, tsv_data],
      false);
  }

  clearJapanesePersonalizationData(clear_conversion_history, clear_suggestion_history) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec,
      [clear_conversion_history, clear_suggestion_history],
      false);
  }

};

ash.ime.mojom.InputMethodUserDataService.getRemote = function() {
  let remote = new ash.ime.mojom.InputMethodUserDataServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputMethodUserDataService',
    'context');
  return remote.$;
};

ash.ime.mojom.InputMethodUserDataServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputMethodUserDataService', [
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
        
        // Try Method 0: FetchJapaneseDictionary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchJapaneseDictionary (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddJapaneseDictionaryEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddJapaneseDictionaryEntry (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EditJapaneseDictionaryEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EditJapaneseDictionaryEntry (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DeleteJapaneseDictionaryEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteJapaneseDictionaryEntry (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateJapaneseDictionary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateJapaneseDictionary (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RenameJapaneseDictionary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameJapaneseDictionary (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteJapaneseDictionary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteJapaneseDictionary (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ExportJapaneseDictionary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExportJapaneseDictionary (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ImportJapaneseDictionary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportJapaneseDictionary (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ClearJapanesePersonalizationData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearJapanesePersonalizationData (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchJapaneseDictionary');
          const result = this.impl.fetchJapaneseDictionary();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.addJapaneseDictionaryEntry');
          const result = this.impl.addJapaneseDictionaryEntry(params.dict_id, params.entry);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.editJapaneseDictionaryEntry');
          const result = this.impl.editJapaneseDictionaryEntry(params.dict_id, params.entry_index, params.entry);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteJapaneseDictionaryEntry');
          const result = this.impl.deleteJapaneseDictionaryEntry(params.dict_id, params.entry_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createJapaneseDictionary');
          const result = this.impl.createJapaneseDictionary(params.dictionary_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.renameJapaneseDictionary');
          const result = this.impl.renameJapaneseDictionary(params.dict_id, params.dictionary_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteJapaneseDictionary');
          const result = this.impl.deleteJapaneseDictionary(params.dict_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.exportJapaneseDictionary');
          const result = this.impl.exportJapaneseDictionary(params.dict_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.importJapaneseDictionary');
          const result = this.impl.importJapaneseDictionary(params.dict_id, params.tsv_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearJapanesePersonalizationData');
          const result = this.impl.clearJapanesePersonalizationData(params.clear_conversion_history, params.clear_suggestion_history);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec);
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

ash.ime.mojom.InputMethodUserDataServiceReceiver = ash.ime.mojom.InputMethodUserDataServiceReceiver;

ash.ime.mojom.InputMethodUserDataServicePtr = ash.ime.mojom.InputMethodUserDataServiceRemote;
ash.ime.mojom.InputMethodUserDataServiceRequest = ash.ime.mojom.InputMethodUserDataServicePendingReceiver;

