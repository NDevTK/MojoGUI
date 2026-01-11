// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/components/language_packs/public/mojom/language_packs.mojom
 // Module: ash.language.mojom

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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.language = mojo.internal.bindings.ash.language || {};
mojo.internal.bindings.ash.language.mojom = mojo.internal.bindings.ash.language.mojom || {};

mojo.internal.bindings.ash.language.mojom.FeatureIdSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.language.mojom.PackStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.language.mojom.ErrorCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.language.mojom.LanguagePackInfoSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.BasePackInfoSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacksObserver = {};
mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverSpec = { $ : {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacksObserver.$interfaceName = 'ash.language.mojom.LanguagePacksObserver';
mojo.internal.bindings.ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks = {};
mojo.internal.bindings.ash.language.mojom.LanguagePacksSpec = { $ : {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks.$interfaceName = 'ash.language.mojom.LanguagePacks';
mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec = { $: {} };

// Enum: FeatureId
mojo.internal.bindings.ash.language.mojom.FeatureId = {
  UNSUPPORTED_UNKNOWN: 0,
  HANDWRITING_RECOGNITION: 1,
  MinVersion: 1,
};

// Enum: PackState
mojo.internal.bindings.ash.language.mojom.PackState = {
  ERROR: 0,
  NOT_INSTALLED: 1,
  INSTALLING: 2,
  INSTALLED: 3,
  MinVersion: 3,
  UNKNOWN: 4,
};

// Enum: ErrorCode
mojo.internal.bindings.ash.language.mojom.ErrorCode = {
  kUnknown: 0,
  kNone: 1,
  kOther: 2,
  kWrongId: 3,
  kNeedReboot: 4,
  kAllocation: 5,
};

// Struct: LanguagePackInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePackInfoSpec, 'ash.language.mojom.LanguagePackInfo', [
      mojo.internal.StructField('arg_pack_state', 0, 0, mojo.internal.bindings.ash.language.mojom.PackStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 16, 0, mojo.internal.bindings.ash.language.mojom.ErrorCodeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('arg_feature_id', 24, 0, mojo.internal.bindings.ash.language.mojom.FeatureIdSpec.$, null, false, 3, undefined),
      mojo.internal.StructField('arg_locale', 32, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 24], [2, 32], [3, 48]]);

// Struct: BasePackInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.BasePackInfoSpec, 'ash.language.mojom.BasePackInfo', [
      mojo.internal.StructField('arg_pack_state', 0, 0, mojo.internal.bindings.ash.language.mojom.PackStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 16, 0, mojo.internal.bindings.ash.language.mojom.ErrorCodeSpec.$, null, false, 2, undefined),
    ],
    [[0, 24], [2, 32]]);

// Interface: LanguagePacksObserver
mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec, 'ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.ash.language.mojom.LanguagePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverRemote = class {
  static get $interfaceName() {
    return 'ash.language.mojom.LanguagePacksObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPackStateChanged(arg_info) {
    return this.$.onPackStateChanged(arg_info);
  }
};

mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.language.mojom.LanguagePacksObserver', [
      { explicit: 0 },
    ]);
  }

  onPackStateChanged(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec,
      null,
      [arg_info],
      false);
  }

};

mojo.internal.bindings.ash.language.mojom.LanguagePacksObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.language.mojom.LanguagePacksObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.language.mojom.LanguagePacksObserver', [
      { explicit: 0 },
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
        
        // Try Method 0: OnPackStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPackStateChanged (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacksObserver_OnPackStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPackStateChanged');
          const result = this.impl.onPackStateChanged(params.arg_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverReceiver = mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverReceiver;

mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverPtr = mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverRemote;
mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverRequest = mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverPendingReceiver;


// Interface: LanguagePacks
mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec, 'ash.language.mojom.LanguagePacks_GetPackInfo_Params', [
      mojo.internal.StructField('arg_feature_id', 0, 0, mojo.internal.bindings.ash.language.mojom.FeatureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec, 'ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.ash.language.mojom.LanguagePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec, 'ash.language.mojom.LanguagePacks_InstallPack_Params', [
      mojo.internal.StructField('arg_feature_id', 0, 0, mojo.internal.bindings.ash.language.mojom.FeatureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec, 'ash.language.mojom.LanguagePacks_InstallPack_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.ash.language.mojom.LanguagePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec, 'ash.language.mojom.LanguagePacks_InstallBasePack_Params', [
      mojo.internal.StructField('arg_feature_id', 0, 0, mojo.internal.bindings.ash.language.mojom.FeatureIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec, 'ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.ash.language.mojom.BasePackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec, 'ash.language.mojom.LanguagePacks_UninstallPack_Params', [
      mojo.internal.StructField('arg_feature_id', 0, 0, mojo.internal.bindings.ash.language.mojom.FeatureIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ResponseParamsSpec, 'ash.language.mojom.LanguagePacks_UninstallPack_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec, 'ash.language.mojom.LanguagePacks_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.ash.language.mojom.LanguagePacksObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.language.mojom.LanguagePacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.language.mojom.LanguagePacksRemote = class {
  static get $interfaceName() {
    return 'ash.language.mojom.LanguagePacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.language.mojom.LanguagePacksPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.language.mojom.LanguagePacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPackInfo(arg_feature_id, arg_language) {
    return this.$.getPackInfo(arg_feature_id, arg_language);
  }
  installPack(arg_feature_id, arg_language) {
    return this.$.installPack(arg_feature_id, arg_language);
  }
  installBasePack(arg_feature_id) {
    return this.$.installBasePack(arg_feature_id);
  }
  uninstallPack(arg_feature_id, arg_language) {
    return this.$.uninstallPack(arg_feature_id, arg_language);
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
};

mojo.internal.bindings.ash.language.mojom.LanguagePacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ash.language.mojom.LanguagePacks', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  getPackInfo(arg_feature_id, arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec,
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec,
      [arg_feature_id, arg_language],
      false);
  }

  installPack(arg_feature_id, arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec,
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec,
      [arg_feature_id, arg_language],
      false);
  }

  installBasePack(arg_feature_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec,
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec,
      [arg_feature_id],
      false);
  }

  uninstallPack(arg_feature_id, arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec,
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ResponseParamsSpec,
      [arg_feature_id, arg_language],
      false);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.ash.language.mojom.LanguagePacks.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.language.mojom.LanguagePacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.language.mojom.LanguagePacks',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.language.mojom.LanguagePacksReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ash.language.mojom.LanguagePacks', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
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
        
        // Try Method 0: GetPackInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPackInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InstallPack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallPack (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InstallBasePack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallBasePack (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UninstallPack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UninstallPack (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPackInfo');
          const result = this.impl.getPackInfo(params.arg_feature_id, params.arg_language);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.language.mojom.LanguagePacks_GetPackInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPackInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installPack');
          const result = this.impl.installPack(params.arg_feature_id, params.arg_language);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallPack_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InstallPack FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installBasePack');
          const result = this.impl.installBasePack(params.arg_feature_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.language.mojom.LanguagePacks_InstallBasePack_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InstallBasePack FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninstallPack');
          const result = this.impl.uninstallPack(params.arg_feature_id, params.arg_language);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.language.mojom.LanguagePacks_UninstallPack_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UninstallPack FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.language.mojom.LanguagePacks_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.language.mojom.LanguagePacksReceiver = mojo.internal.bindings.ash.language.mojom.LanguagePacksReceiver;

mojo.internal.bindings.ash.language.mojom.LanguagePacksPtr = mojo.internal.bindings.ash.language.mojom.LanguagePacksRemote;
mojo.internal.bindings.ash.language.mojom.LanguagePacksRequest = mojo.internal.bindings.ash.language.mojom.LanguagePacksPendingReceiver;

