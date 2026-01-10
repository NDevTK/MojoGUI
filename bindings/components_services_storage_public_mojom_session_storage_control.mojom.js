// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/session_storage_control.mojom
// Module: storage.mojom

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
var storage = storage || {};
storage.mojom = storage.mojom || {};
var blink = blink || {};

storage.mojom.SessionStorageCloneTypeSpec = { $: mojo.internal.Enum() };
storage.mojom.SessionStorageUsageInfoSpec = { $: {} };
storage.mojom.SessionStorageControl = {};
storage.mojom.SessionStorageControl.$interfaceName = 'storage.mojom.SessionStorageControl';
storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_GetUsage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_Flush_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec = { $: {} };
storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec = { $: {} };

// Enum: SessionStorageCloneType
storage.mojom.SessionStorageCloneType = {
  kImmediate: 0,
  kWaitForCloneOnNamespace: 1,
};

// Struct: SessionStorageUsageInfo
mojo.internal.Struct(
    storage.mojom.SessionStorageUsageInfoSpec, 'storage.mojom.SessionStorageUsageInfo', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SessionStorageControl
mojo.internal.Struct(
    storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_BindNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.SessionStorageNamespaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec, 'storage.mojom.SessionStorageControl_BindStorageArea_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_GetUsage_ParamsSpec, 'storage.mojom.SessionStorageControl_GetUsage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_GetUsage_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo.internal.Array(storage.mojom.SessionStorageUsageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec, 'storage.mojom.SessionStorageControl_DeleteStorage_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_DeleteStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec, 'storage.mojom.SessionStorageControl_CleanUpStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec, 'storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec, 'storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_Flush_ParamsSpec, 'storage.mojom.SessionStorageControl_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec, 'storage.mojom.SessionStorageControl_PurgeMemory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_CreateNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_CloneNamespace_Params', [
      mojo.internal.StructField('namespace_id_to_clone', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('clone_type', 16, 0, storage.mojom.SessionStorageCloneTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec, 'storage.mojom.SessionStorageControl_DeleteNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('should_persist', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

storage.mojom.SessionStorageControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.SessionStorageControlRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.SessionStorageControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.SessionStorageControlPendingReceiver,
      handle);
    this.$ = new storage.mojom.SessionStorageControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.SessionStorageControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SessionStorageControl', [
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
      { explicit: null },
    ]);
  }

  bindNamespace(namespace_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec,
      null,
      [namespace_id, receiver],
      false);
  }

  bindStorageArea(storage_key, namespace_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec,
      null,
      [storage_key, namespace_id, receiver],
      false);
  }

  getUsage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.SessionStorageControl_GetUsage_ParamsSpec,
      storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec,
      [],
      false);
  }

  deleteStorage(storage_key, namespace_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec,
      [storage_key, namespace_id],
      false);
  }

  cleanUpStorage() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec,
      storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec,
      [],
      false);
  }

  scavengeUnusedNamespaces() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec,
      null,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      storage.mojom.SessionStorageControl_Flush_ParamsSpec,
      null,
      [],
      false);
  }

  purgeMemory() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec,
      null,
      [],
      false);
  }

  createNamespace(namespace_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec,
      null,
      [namespace_id],
      false);
  }

  cloneNamespace(namespace_id_to_clone, clone_namespace_id, clone_type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec,
      null,
      [namespace_id_to_clone, clone_namespace_id, clone_type],
      false);
  }

  deleteNamespace(namespace_id, should_persist) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec,
      null,
      [namespace_id, should_persist],
      false);
  }

};

storage.mojom.SessionStorageControl.getRemote = function() {
  let remote = new storage.mojom.SessionStorageControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.SessionStorageControl',
    'context');
  return remote.$;
};

storage.mojom.SessionStorageControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SessionStorageControl', [
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
        
        // Try Method 0: BindNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindNamespace (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindStorageArea
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindStorageArea (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_GetUsage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DeleteStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteStorage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CleanUpStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CleanUpStorage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ScavengeUnusedNamespaces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScavengeUnusedNamespaces (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PurgeMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PurgeMemory (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CreateNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNamespace (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CloneNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneNamespace (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DeleteNamespace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteNamespace (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_BindNamespace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindNamespace');
          const result = this.impl.bindNamespace(params.namespace_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_BindStorageArea_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindStorageArea');
          const result = this.impl.bindStorageArea(params.storage_key, params.namespace_id, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_GetUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUsage');
          const result = this.impl.getUsage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_GetUsage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_DeleteStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteStorage');
          const result = this.impl.deleteStorage(params.storage_key, params.namespace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_DeleteStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_CleanUpStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cleanUpStorage');
          const result = this.impl.cleanUpStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.SessionStorageControl_CleanUpStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_ScavengeUnusedNamespaces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scavengeUnusedNamespaces');
          const result = this.impl.scavengeUnusedNamespaces();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_PurgeMemory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.purgeMemory');
          const result = this.impl.purgeMemory();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_CreateNamespace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNamespace');
          const result = this.impl.createNamespace(params.namespace_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_CloneNamespace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cloneNamespace');
          const result = this.impl.cloneNamespace(params.namespace_id_to_clone, params.clone_namespace_id, params.clone_type);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.SessionStorageControl_DeleteNamespace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteNamespace');
          const result = this.impl.deleteNamespace(params.namespace_id, params.should_persist);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

storage.mojom.SessionStorageControlReceiver = storage.mojom.SessionStorageControlReceiver;

storage.mojom.SessionStorageControlPtr = storage.mojom.SessionStorageControlRemote;
storage.mojom.SessionStorageControlRequest = storage.mojom.SessionStorageControlPendingReceiver;

