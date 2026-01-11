// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/dom_storage/storage_area.mojom
 // Module: blink.mojom

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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};

mojo.internal.bindings.blink.mojom.KeyValueSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageAreaObserver = {};
mojo.internal.bindings.blink.mojom.StorageAreaObserver.$interfaceName = 'blink.mojom.StorageAreaObserver';
mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea = {};
mojo.internal.bindings.blink.mojom.StorageArea.$interfaceName = 'blink.mojom.StorageArea';
mojo.internal.bindings.blink.mojom.StorageArea_AddObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_Put_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_Put_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_Delete_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_Delete_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_Get_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_Get_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ResponseParamsSpec = { $: {} };

mojo.internal.bindings.blink.mojom.kPerStorageAreaQuota = 10485760;

mojo.internal.bindings.blink.mojom.kPerStorageAreaOverQuotaAllowance = 102400;

// Struct: KeyValue
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.KeyValueSpec, 'blink.mojom.KeyValue', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: StorageAreaObserver
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyChanged_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_new_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_old_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyChangeFailed_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyDeleted_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_old_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_source', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec, 'blink.mojom.StorageAreaObserver_AllDeleted_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_was_nonempty', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec, 'blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.StorageAreaObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.StorageAreaObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageAreaObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.StorageAreaObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.StorageAreaObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  keyChanged(arg_key, arg_new_value, arg_old_value, arg_source) {
    return this.$.keyChanged(arg_key, arg_new_value, arg_old_value, arg_source);
  }
  keyChangeFailed(arg_key, arg_source) {
    return this.$.keyChangeFailed(arg_key, arg_source);
  }
  keyDeleted(arg_key, arg_old_value, arg_source) {
    return this.$.keyDeleted(arg_key, arg_old_value, arg_source);
  }
  allDeleted(arg_was_nonempty, arg_source) {
    return this.$.allDeleted(arg_was_nonempty, arg_source);
  }
  shouldSendOldValueOnMutations(arg_value) {
    return this.$.shouldSendOldValueOnMutations(arg_value);
  }
};

mojo.internal.bindings.blink.mojom.StorageAreaObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StorageAreaObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  keyChanged(arg_key, arg_new_value, arg_old_value, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec,
      null,
      [arg_key, arg_new_value, arg_old_value, arg_source],
      false);
  }

  keyChangeFailed(arg_key, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec,
      null,
      [arg_key, arg_source],
      false);
  }

  keyDeleted(arg_key, arg_old_value, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec,
      null,
      [arg_key, arg_old_value, arg_source],
      false);
  }

  allDeleted(arg_was_nonempty, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec,
      null,
      [arg_was_nonempty, arg_source],
      false);
  }

  shouldSendOldValueOnMutations(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec,
      null,
      [arg_value],
      false);
  }

};

mojo.internal.bindings.blink.mojom.StorageAreaObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.StorageAreaObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageAreaObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.StorageAreaObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StorageAreaObserver', [
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
        
        // Try Method 0: KeyChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> KeyChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: KeyChangeFailed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> KeyChangeFailed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: KeyDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> KeyDeleted (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AllDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllDeleted (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ShouldSendOldValueOnMutations
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldSendOldValueOnMutations (4)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.keyChanged');
          const result = this.impl.keyChanged(params.arg_key, params.arg_new_value, params.arg_old_value, params.arg_source);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.keyChangeFailed');
          const result = this.impl.keyChangeFailed(params.arg_key, params.arg_source);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.keyDeleted');
          const result = this.impl.keyDeleted(params.arg_key, params.arg_old_value, params.arg_source);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allDeleted');
          const result = this.impl.allDeleted(params.arg_was_nonempty, params.arg_source);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldSendOldValueOnMutations');
          const result = this.impl.shouldSendOldValueOnMutations(params.arg_value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.StorageAreaObserverReceiver = mojo.internal.bindings.blink.mojom.StorageAreaObserverReceiver;

mojo.internal.bindings.blink.mojom.StorageAreaObserverPtr = mojo.internal.bindings.blink.mojom.StorageAreaObserverRemote;
mojo.internal.bindings.blink.mojom.StorageAreaObserverRequest = mojo.internal.bindings.blink.mojom.StorageAreaObserverPendingReceiver;


// Interface: StorageArea
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_AddObserver_ParamsSpec, 'blink.mojom.StorageArea_AddObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.StorageAreaObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_Put_ParamsSpec, 'blink.mojom.StorageArea_Put_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_old_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_Put_ResponseParamsSpec, 'blink.mojom.StorageArea_Put_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_Delete_ParamsSpec, 'blink.mojom.StorageArea_Delete_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_client_old_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_source', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_Delete_ResponseParamsSpec, 'blink.mojom.StorageArea_Delete_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ParamsSpec, 'blink.mojom.StorageArea_DeleteAll_Params', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.StorageAreaObserverSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec, 'blink.mojom.StorageArea_DeleteAll_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_Get_ParamsSpec, 'blink.mojom.StorageArea_Get_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_Get_ResponseParamsSpec, 'blink.mojom.StorageArea_Get_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ParamsSpec, 'blink.mojom.StorageArea_GetAll_Params', [
      mojo.internal.StructField('arg_new_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.StorageAreaObserverSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ResponseParamsSpec, 'blink.mojom.StorageArea_GetAll_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.KeyValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.StorageAreaPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.StorageAreaRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageArea';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.StorageAreaPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.StorageAreaRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(arg_observer) {
    return this.$.addObserver(arg_observer);
  }
  put(arg_key, arg_value, arg_client_old_value, arg_source) {
    return this.$.put(arg_key, arg_value, arg_client_old_value, arg_source);
  }
  delete(arg_key, arg_client_old_value, arg_source) {
    return this.$.delete(arg_key, arg_client_old_value, arg_source);
  }
  deleteAll(arg_source, arg_new_observer) {
    return this.$.deleteAll(arg_source, arg_new_observer);
  }
  get(arg_key) {
    return this.$.get(arg_key);
  }
  getAll(arg_new_observer) {
    return this.$.getAll(arg_new_observer);
  }
};

mojo.internal.bindings.blink.mojom.StorageAreaRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StorageArea', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageArea_AddObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  put(arg_key, arg_value, arg_client_old_value, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageArea_Put_ParamsSpec,
      mojo.internal.bindings.blink.mojom.StorageArea_Put_ResponseParamsSpec,
      [arg_key, arg_value, arg_client_old_value, arg_source],
      false);
  }

  delete(arg_key, arg_client_old_value, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageArea_Delete_ParamsSpec,
      mojo.internal.bindings.blink.mojom.StorageArea_Delete_ResponseParamsSpec,
      [arg_key, arg_client_old_value, arg_source],
      false);
  }

  deleteAll(arg_source, arg_new_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ParamsSpec,
      mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec,
      [arg_source, arg_new_observer],
      false);
  }

  get(arg_key) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageArea_Get_ParamsSpec,
      mojo.internal.bindings.blink.mojom.StorageArea_Get_ResponseParamsSpec,
      [arg_key],
      false);
  }

  getAll(arg_new_observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ParamsSpec,
      mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ResponseParamsSpec,
      [arg_new_observer],
      false);
  }

};

mojo.internal.bindings.blink.mojom.StorageArea.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.StorageAreaRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageArea',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.StorageAreaReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StorageArea', [
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
        
        // Try Method 0: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_AddObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Put
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_Put_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Put (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_Delete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DeleteAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAll (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Get
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_Get_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Get (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAll (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_AddObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.arg_observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_Put_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.put');
          const result = this.impl.put(params.arg_key, params.arg_value, params.arg_client_old_value, params.arg_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.StorageArea_Put_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Put FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_Delete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete(params.arg_key, params.arg_client_old_value, params.arg_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.StorageArea_Delete_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Delete FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAll');
          const result = this.impl.deleteAll(params.arg_source, params.arg_new_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteAll FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_Get_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.get');
          const result = this.impl.get(params.arg_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.StorageArea_Get_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Get FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAll');
          const result = this.impl.getAll(params.arg_new_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.StorageArea_GetAll_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAll FAILED:', e));
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

mojo.internal.bindings.blink.mojom.StorageAreaReceiver = mojo.internal.bindings.blink.mojom.StorageAreaReceiver;

mojo.internal.bindings.blink.mojom.StorageAreaPtr = mojo.internal.bindings.blink.mojom.StorageAreaRemote;
mojo.internal.bindings.blink.mojom.StorageAreaRequest = mojo.internal.bindings.blink.mojom.StorageAreaPendingReceiver;

