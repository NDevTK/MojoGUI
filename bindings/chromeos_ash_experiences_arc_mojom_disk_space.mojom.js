// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/disk_space.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};

mojo.internal.bindings.arc.mojom.ApplicationsSizeSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceSpec = { $: {} };
mojo.internal.bindings.arc.mojom.QuotaSpacesSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost = {};
mojo.internal.bindings.arc.mojom.DiskSpaceHost.$interfaceName = 'arc.mojom.DiskSpaceHost';
mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceInstance = {};
mojo.internal.bindings.arc.mojom.DiskSpaceInstance.$interfaceName = 'arc.mojom.DiskSpaceInstance';
mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec = { $: {} };

// Struct: ApplicationsSize
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ApplicationsSizeSpec, 'arc.mojom.ApplicationsSize', [
      mojo.internal.StructField('arg_total_code_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_total_data_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_total_cache_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DiskSpace
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceSpec, 'arc.mojom.DiskSpace', [
      mojo.internal.StructField('arg_space_in_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: QuotaSpaces
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.QuotaSpacesSpec, 'arc.mojom.QuotaSpaces', [
      mojo.internal.StructField('arg_curspaces_for_uids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_curspaces_for_gids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_curspaces_for_project_ids', 16, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: DiskSpaceHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec, 'arc.mojom.DiskSpaceHost_IsQuotaSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParams', [
      mojo.internal.StructField('arg_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_Params', [
      mojo.internal.StructField('arg_uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParams', [
      mojo.internal.StructField('arg_cur_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_Params', [
      mojo.internal.StructField('arg_gid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParams', [
      mojo.internal.StructField('arg_cur_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_Params', [
      mojo.internal.StructField('arg_project_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParams', [
      mojo.internal.StructField('arg_cur_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_Params', [
      mojo.internal.StructField('arg_uids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_gids', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_project_ids', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParams', [
      mojo.internal.StructField('arg_quota_spaces', 0, 0, mojo.internal.bindings.arc.mojom.QuotaSpacesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetFreeDiskSpace_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParams', [
      mojo.internal.StructField('arg_free_space', 0, 0, mojo.internal.bindings.arc.mojom.DiskSpaceSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.DiskSpaceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.DiskSpaceHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.DiskSpaceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.DiskSpaceHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.DiskSpaceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isQuotaSupported() {
    return this.$.isQuotaSupported();
  }
  getQuotaCurrentSpaceForUid(arg_uid) {
    return this.$.getQuotaCurrentSpaceForUid(arg_uid);
  }
  getQuotaCurrentSpaceForGid(arg_gid) {
    return this.$.getQuotaCurrentSpaceForGid(arg_gid);
  }
  getQuotaCurrentSpaceForProjectId(arg_project_id) {
    return this.$.getQuotaCurrentSpaceForProjectId(arg_project_id);
  }
  getQuotaCurrentSpacesForIds(arg_uids, arg_gids, arg_project_ids) {
    return this.$.getQuotaCurrentSpacesForIds(arg_uids, arg_gids, arg_project_ids);
  }
  getFreeDiskSpace() {
    return this.$.getFreeDiskSpace();
  }
};

mojo.internal.bindings.arc.mojom.DiskSpaceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiskSpaceHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 5 },
    ]);
  }

  isQuotaSupported() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec,
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec,
      [],
      false);
  }

  getQuotaCurrentSpaceForUid(arg_uid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec,
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec,
      [arg_uid],
      false);
  }

  getQuotaCurrentSpaceForGid(arg_gid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec,
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec,
      [arg_gid],
      false);
  }

  getQuotaCurrentSpaceForProjectId(arg_project_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec,
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec,
      [arg_project_id],
      false);
  }

  getQuotaCurrentSpacesForIds(arg_uids, arg_gids, arg_project_ids) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec,
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec,
      [arg_uids, arg_gids, arg_project_ids],
      false);
  }

  getFreeDiskSpace() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec,
      mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.arc.mojom.DiskSpaceHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.DiskSpaceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.DiskSpaceHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.DiskSpaceHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiskSpaceHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 5 },
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
        
        // Try Method 0: IsQuotaSupported
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsQuotaSupported (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetQuotaCurrentSpaceForUid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetQuotaCurrentSpaceForUid (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetQuotaCurrentSpaceForGid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetQuotaCurrentSpaceForGid (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetQuotaCurrentSpaceForProjectId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetQuotaCurrentSpaceForProjectId (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetQuotaCurrentSpacesForIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetQuotaCurrentSpacesForIds (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetFreeDiskSpace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFreeDiskSpace (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isQuotaSupported');
          const result = this.impl.isQuotaSupported();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsQuotaSupported FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getQuotaCurrentSpaceForUid');
          const result = this.impl.getQuotaCurrentSpaceForUid(params.arg_uid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetQuotaCurrentSpaceForUid FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getQuotaCurrentSpaceForGid');
          const result = this.impl.getQuotaCurrentSpaceForGid(params.arg_gid);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetQuotaCurrentSpaceForGid FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getQuotaCurrentSpaceForProjectId');
          const result = this.impl.getQuotaCurrentSpaceForProjectId(params.arg_project_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetQuotaCurrentSpaceForProjectId FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getQuotaCurrentSpacesForIds');
          const result = this.impl.getQuotaCurrentSpacesForIds(params.arg_uids, params.arg_gids, params.arg_project_ids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetQuotaCurrentSpacesForIds FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFreeDiskSpace');
          const result = this.impl.getFreeDiskSpace();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFreeDiskSpace FAILED:', e));
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

mojo.internal.bindings.arc.mojom.DiskSpaceHostReceiver = mojo.internal.bindings.arc.mojom.DiskSpaceHostReceiver;

mojo.internal.bindings.arc.mojom.DiskSpaceHostPtr = mojo.internal.bindings.arc.mojom.DiskSpaceHostRemote;
mojo.internal.bindings.arc.mojom.DiskSpaceHostRequest = mojo.internal.bindings.arc.mojom.DiskSpaceHostPendingReceiver;


// Interface: DiskSpaceInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ParamsSpec, 'arc.mojom.DiskSpaceInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.DiskSpaceHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec, 'arc.mojom.DiskSpaceInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec, 'arc.mojom.DiskSpaceInstance_GetApplicationsSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec, 'arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParams', [
      mojo.internal.StructField('arg_applications_size', 0, 0, mojo.internal.bindings.arc.mojom.ApplicationsSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_succeeded', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec, 'arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_Params', [
      mojo.internal.StructField('arg_free_space_bytes', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.DiskSpaceInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.DiskSpaceInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.DiskSpaceInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  getApplicationsSize() {
    return this.$.getApplicationsSize();
  }
  resizeStorageBalloon(arg_free_space_bytes) {
    return this.$.resizeStorageBalloon(arg_free_space_bytes);
  }
};

mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiskSpaceInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  getApplicationsSize() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec,
      [],
      false);
  }

  resizeStorageBalloon(arg_free_space_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec,
      null,
      [arg_free_space_bytes],
      false);
  }

};

mojo.internal.bindings.arc.mojom.DiskSpaceInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.DiskSpaceInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.DiskSpaceInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiskSpaceInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetApplicationsSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetApplicationsSize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ResizeStorageBalloon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResizeStorageBalloon (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getApplicationsSize');
          const result = this.impl.getApplicationsSize();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetApplicationsSize FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resizeStorageBalloon');
          const result = this.impl.resizeStorageBalloon(params.arg_free_space_bytes);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.DiskSpaceInstanceReceiver = mojo.internal.bindings.arc.mojom.DiskSpaceInstanceReceiver;

mojo.internal.bindings.arc.mojom.DiskSpaceInstancePtr = mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRemote;
mojo.internal.bindings.arc.mojom.DiskSpaceInstanceRequest = mojo.internal.bindings.arc.mojom.DiskSpaceInstancePendingReceiver;

