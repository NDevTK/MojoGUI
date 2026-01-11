// Auto-generated MojoJS binding
 // Source: chromium_src/components/spellcheck/common/spellcheck.mojom
 // Module: spellcheck.mojom

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
 

 mojo.internal.bindings.spellcheck = mojo.internal.bindings.spellcheck || {};
mojo.internal.bindings.spellcheck.mojom = mojo.internal.bindings.spellcheck.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.spellcheck.mojom.DecorationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.spellcheck.mojom.SpellCheckBDictLanguageSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckResultSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellChecker = {};
mojo.internal.bindings.spellcheck.mojom.SpellChecker.$interfaceName = 'spellcheck.mojom.SpellChecker';
mojo.internal.bindings.spellcheck.mojom.SpellChecker_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHost = {};
mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHost.$interfaceName = 'spellcheck.mojom.SpellCheckInitializationHost';
mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost = {};
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost.$interfaceName = 'spellcheck.mojom.SpellCheckHost';
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec = { $: {} };
mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec = { $: {} };

// Enum: Decoration
mojo.internal.bindings.spellcheck.mojom.Decoration = {
  kSpelling: 0,
  kGrammar: 1,
};

// Struct: SpellCheckBDictLanguage
mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckBDictLanguageSpec, 'spellcheck.mojom.SpellCheckBDictLanguage', [
      mojo.internal.StructField('arg_file', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpellCheckResult
mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckResultSpec, 'spellcheck.mojom.SpellCheckResult', [
      mojo.internal.StructField('arg_decoration', 0, 0, mojo.internal.bindings.spellcheck.mojom.DecorationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_replacements', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_location', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_length', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_should_hide_suggestion_menu', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: SpellChecker
mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellChecker_Initialize_ParamsSpec, 'spellcheck.mojom.SpellChecker_Initialize_Params', [
      mojo.internal.StructField('arg_dictionaries', 0, 0, mojo.internal.Array(mojo.internal.bindings.spellcheck.mojom.SpellCheckBDictLanguageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_custom_words', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_enable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec, 'spellcheck.mojom.SpellChecker_CustomDictionaryChanged_Params', [
      mojo.internal.StructField('arg_words_added', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_words_removed', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.spellcheck.mojom.SpellCheckerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckerRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellChecker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.spellcheck.mojom.SpellCheckerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.spellcheck.mojom.SpellCheckerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_dictionaries, arg_custom_words, arg_enable) {
    return this.$.initialize(arg_dictionaries, arg_custom_words, arg_enable);
  }
  customDictionaryChanged(arg_words_added, arg_words_removed) {
    return this.$.customDictionaryChanged(arg_words_added, arg_words_removed);
  }
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpellChecker', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(arg_dictionaries, arg_custom_words, arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellChecker_Initialize_ParamsSpec,
      null,
      [arg_dictionaries, arg_custom_words, arg_enable],
      false);
  }

  customDictionaryChanged(arg_words_added, arg_words_removed) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec,
      null,
      [arg_words_added, arg_words_removed],
      false);
  }

};

mojo.internal.bindings.spellcheck.mojom.SpellChecker.getRemote = function() {
  let remote = new mojo.internal.bindings.spellcheck.mojom.SpellCheckerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellChecker',
    'context');
  return remote.$;
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpellChecker', [
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellChecker_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CustomDictionaryChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CustomDictionaryChanged (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellChecker_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_dictionaries, params.arg_custom_words, params.arg_enable);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellChecker_CustomDictionaryChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.customDictionaryChanged');
          const result = this.impl.customDictionaryChanged(params.arg_words_added, params.arg_words_removed);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckerReceiver = mojo.internal.bindings.spellcheck.mojom.SpellCheckerReceiver;

mojo.internal.bindings.spellcheck.mojom.SpellCheckerPtr = mojo.internal.bindings.spellcheck.mojom.SpellCheckerRemote;
mojo.internal.bindings.spellcheck.mojom.SpellCheckerRequest = mojo.internal.bindings.spellcheck.mojom.SpellCheckerPendingReceiver;


// Interface: SpellCheckInitializationHost
mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec, 'spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckInitializationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestDictionary() {
    return this.$.requestDictionary();
  }
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpellCheckInitializationHost', [
      { explicit: null },
    ]);
  }

  requestDictionary() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHost.getRemote = function() {
  let remote = new mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckInitializationHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpellCheckInitializationHost', [
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
        
        // Try Method 0: RequestDictionary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestDictionary (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHost_RequestDictionary_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestDictionary');
          const result = this.impl.requestDictionary();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostReceiver = mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostReceiver;

mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostPtr = mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostRemote;
mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostRequest = mojo.internal.bindings.spellcheck.mojom.SpellCheckInitializationHostPendingReceiver;


// Interface: SpellCheckHost
mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_NotifyChecked_Params', [
      mojo.internal.StructField('arg_word', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_misspelled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_CallSpellingService_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParams', [
      mojo.internal.StructField('arg_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.spellcheck.mojom.SpellCheckResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_RequestTextCheck_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_spelling_markers', 8, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.RangeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParams', [
      mojo.internal.StructField('arg_results', 0, 0, mojo.internal.Array(mojo.internal.bindings.spellcheck.mojom.SpellCheckResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_CheckSpelling_Params', [
      mojo.internal.StructField('arg_word', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParams', [
      mojo.internal.StructField('arg_correct', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_FillSuggestionList_Params', [
      mojo.internal.StructField('arg_word', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParams', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec, 'spellcheck.mojom.SpellCheckHost_InitializeDictionaries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec, 'spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParams', [
      mojo.internal.StructField('arg_dictionaries', 0, 0, mojo.internal.Array(mojo.internal.bindings.spellcheck.mojom.SpellCheckBDictLanguageSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_custom_words', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_enable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.spellcheck.mojom.SpellCheckHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckHostRemote = class {
  static get $interfaceName() {
    return 'spellcheck.mojom.SpellCheckHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.spellcheck.mojom.SpellCheckHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifyChecked(arg_word, arg_misspelled) {
    return this.$.notifyChecked(arg_word, arg_misspelled);
  }
  callSpellingService(arg_text) {
    return this.$.callSpellingService(arg_text);
  }
  requestTextCheck(arg_text, arg_spelling_markers) {
    return this.$.requestTextCheck(arg_text, arg_spelling_markers);
  }
  disconnectSessionBridge() {
    return this.$.disconnectSessionBridge();
  }
  checkSpelling(arg_word) {
    return this.$.checkSpelling(arg_word);
  }
  fillSuggestionList(arg_word) {
    return this.$.fillSuggestionList(arg_word);
  }
  initializeDictionaries() {
    return this.$.initializeDictionaries();
  }
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpellCheckHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifyChecked(arg_word, arg_misspelled) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec,
      null,
      [arg_word, arg_misspelled],
      false);
  }

  callSpellingService(arg_text) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec,
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec,
      [arg_text],
      false);
  }

  requestTextCheck(arg_text, arg_spelling_markers) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec,
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec,
      [arg_text, arg_spelling_markers],
      false);
  }

  disconnectSessionBridge() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec,
      null,
      [],
      false);
  }

  checkSpelling(arg_word) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec,
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec,
      [arg_word],
      false);
  }

  fillSuggestionList(arg_word) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec,
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec,
      [arg_word],
      false);
  }

  initializeDictionaries() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec,
      mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.spellcheck.mojom.SpellCheckHost.getRemote = function() {
  let remote = new mojo.internal.bindings.spellcheck.mojom.SpellCheckHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'spellcheck.mojom.SpellCheckHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.spellcheck.mojom.SpellCheckHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpellCheckHost', [
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
        
        // Try Method 0: NotifyChecked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyChecked (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CallSpellingService
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CallSpellingService (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RequestTextCheck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTextCheck (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DisconnectSessionBridge
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectSessionBridge (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CheckSpelling
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckSpelling (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FillSuggestionList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FillSuggestionList (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: InitializeDictionaries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeDictionaries (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_NotifyChecked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyChecked');
          const result = this.impl.notifyChecked(params.arg_word, params.arg_misspelled);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.callSpellingService');
          const result = this.impl.callSpellingService(params.arg_text);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CallSpellingService_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CallSpellingService FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTextCheck');
          const result = this.impl.requestTextCheck(params.arg_text, params.arg_spelling_markers);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_RequestTextCheck_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestTextCheck FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_DisconnectSessionBridge_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnectSessionBridge');
          const result = this.impl.disconnectSessionBridge();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkSpelling');
          const result = this.impl.checkSpelling(params.arg_word);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_CheckSpelling_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CheckSpelling FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fillSuggestionList');
          const result = this.impl.fillSuggestionList(params.arg_word);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_FillSuggestionList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FillSuggestionList FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeDictionaries');
          const result = this.impl.initializeDictionaries();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.spellcheck.mojom.SpellCheckHost_InitializeDictionaries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InitializeDictionaries FAILED:', e));
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

mojo.internal.bindings.spellcheck.mojom.SpellCheckHostReceiver = mojo.internal.bindings.spellcheck.mojom.SpellCheckHostReceiver;

mojo.internal.bindings.spellcheck.mojom.SpellCheckHostPtr = mojo.internal.bindings.spellcheck.mojom.SpellCheckHostRemote;
mojo.internal.bindings.spellcheck.mojom.SpellCheckHostRequest = mojo.internal.bindings.spellcheck.mojom.SpellCheckHostPendingReceiver;

