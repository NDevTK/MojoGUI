// Auto-generated MojoJS binding
// Source: chromium_src/components/unexportable_keys/mojom/unexportable_key_service.mojom
// Module: unexportable_keys.mojom

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
var unexportable_keys = unexportable_keys || {};
unexportable_keys.mojom = unexportable_keys.mojom || {};
var mojo_base = mojo_base || {};

unexportable_keys.mojom.SignatureAlgorithmSpec = { $: mojo.internal.Enum() };
unexportable_keys.mojom.ServiceErrorSpec = { $: mojo.internal.Enum() };
unexportable_keys.mojom.BackgroundTaskPrioritySpec = { $: mojo.internal.Enum() };
unexportable_keys.mojom.UnexportableKeyIdSpec = { $: {} };
unexportable_keys.mojom.NewKeyDataSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService = {};
unexportable_keys.mojom.UnexportableKeyService.$interfaceName = 'unexportable_keys.mojom.UnexportableKeyService';
unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec = { $: {} };
unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec = { $: {} };

// Enum: SignatureAlgorithm
unexportable_keys.mojom.SignatureAlgorithm = {
  RSA_PKCS1_SHA1: 0,
  RSA_PKCS1_SHA256: 1,
  ECDSA_SHA256: 2,
  RSA_PSS_SHA256: 3,
};

// Enum: ServiceError
unexportable_keys.mojom.ServiceError = {
  kCryptoApiFailed: 1,
  kKeyNotFound: 2,
  kKeyCollision: 3,
  kNoKeyProvider: 4,
  kAlgorithmNotSupported: 5,
  kKeyNotReady: 6,
  kVerifySignatureFailed: 7,
  kOperationNotSupported: 8,
};

// Enum: BackgroundTaskPriority
unexportable_keys.mojom.BackgroundTaskPriority = {
  kBestEffort: 0,
  kUserVisible: 1,
  kUserBlocking: 2,
};

// Struct: UnexportableKeyId
mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyIdSpec, 'unexportable_keys.mojom.UnexportableKeyId', [
      mojo.internal.StructField('key_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NewKeyData
mojo.internal.Struct(
    unexportable_keys.mojom.NewKeyDataSpec, 'unexportable_keys.mojom.NewKeyData', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subject_public_key_info', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('wrapped_key', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('algorithm', 24, 0, unexportable_keys.mojom.SignatureAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_tag', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('creation_time', 40, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Interface: UnexportableKeyService
mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_Params', [
      mojo.internal.StructField('acceptable_algorithms', 0, 0, mojo.internal.Array(unexportable_keys.mojom.SignatureAlgorithmSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_Params', [
      mojo.internal.StructField('wrapped_key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_Sign_Params', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('priority', 16, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_Params', [
      mojo.internal.StructField('priority', 0, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_DeleteKey_Params', [
      mojo.internal.StructField('key_id', 0, 0, unexportable_keys.mojom.UnexportableKeyIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, unexportable_keys.mojom.ServiceErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec, 'unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_Params', [
      mojo.internal.StructField('priority', 0, 0, unexportable_keys.mojom.BackgroundTaskPrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

unexportable_keys.mojom.UnexportableKeyServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

unexportable_keys.mojom.UnexportableKeyServiceRemote = class {
  static get $interfaceName() {
    return 'unexportable_keys.mojom.UnexportableKeyService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      unexportable_keys.mojom.UnexportableKeyServicePendingReceiver,
      handle);
    this.$ = new unexportable_keys.mojom.UnexportableKeyServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  generateSigningKey(acceptable_algorithms, priority) {
    return this.$.generateSigningKey(acceptable_algorithms, priority);
  }
  fromWrappedSigningKey(wrapped_key, priority) {
    return this.$.fromWrappedSigningKey(wrapped_key, priority);
  }
  sign(key_id, data, priority) {
    return this.$.sign(key_id, data, priority);
  }
  getAllSigningKeysForGarbageCollection(priority) {
    return this.$.getAllSigningKeysForGarbageCollection(priority);
  }
  deleteKey(key_id, priority) {
    return this.$.deleteKey(key_id, priority);
  }
  deleteAllKeys(priority) {
    return this.$.deleteAllKeys(priority);
  }
};

unexportable_keys.mojom.UnexportableKeyServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UnexportableKeyService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  generateSigningKey(acceptable_algorithms, priority) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec,
      null,
      [acceptable_algorithms, priority],
      false);
  }

  fromWrappedSigningKey(wrapped_key, priority) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec,
      null,
      [wrapped_key, priority],
      false);
  }

  sign(key_id, data, priority) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec,
      null,
      [key_id, data, priority],
      false);
  }

  getAllSigningKeysForGarbageCollection(priority) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec,
      null,
      [priority],
      false);
  }

  deleteKey(key_id, priority) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec,
      unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec,
      [key_id, priority],
      false);
  }

  deleteAllKeys(priority) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec,
      null,
      [priority],
      false);
  }

};

unexportable_keys.mojom.UnexportableKeyService.getRemote = function() {
  let remote = new unexportable_keys.mojom.UnexportableKeyServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'unexportable_keys.mojom.UnexportableKeyService',
    'context');
  return remote.$;
};

unexportable_keys.mojom.UnexportableKeyServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UnexportableKeyService', [
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
        
        // Try Method 0: GenerateSigningKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GenerateSigningKey (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FromWrappedSigningKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FromWrappedSigningKey (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Sign
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Sign (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAllSigningKeysForGarbageCollection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAllSigningKeysForGarbageCollection (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DeleteKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteKey (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DeleteAllKeys
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteAllKeys (5)');
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
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_GenerateSigningKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.generateSigningKey');
          const result = this.impl.generateSigningKey(params.acceptable_algorithms, params.priority);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_FromWrappedSigningKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fromWrappedSigningKey');
          const result = this.impl.fromWrappedSigningKey(params.wrapped_key, params.priority);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_Sign_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sign');
          const result = this.impl.sign(params.key_id, params.data, params.priority);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_GetAllSigningKeysForGarbageCollection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAllSigningKeysForGarbageCollection');
          const result = this.impl.getAllSigningKeysForGarbageCollection(params.priority);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteKey');
          const result = this.impl.deleteKey(params.key_id, params.priority);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, unexportable_keys.mojom.UnexportableKeyService_DeleteKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(unexportable_keys.mojom.UnexportableKeyService_DeleteAllKeys_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteAllKeys');
          const result = this.impl.deleteAllKeys(params.priority);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

unexportable_keys.mojom.UnexportableKeyServiceReceiver = unexportable_keys.mojom.UnexportableKeyServiceReceiver;

unexportable_keys.mojom.UnexportableKeyServicePtr = unexportable_keys.mojom.UnexportableKeyServiceRemote;
unexportable_keys.mojom.UnexportableKeyServiceRequest = unexportable_keys.mojom.UnexportableKeyServicePendingReceiver;

