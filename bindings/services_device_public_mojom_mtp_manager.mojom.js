// Auto-generated MojoJS binding
 // Source: chromium_src/services/device/public/mojom/mtp_manager.mojom
 // Module: device.mojom

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
 

 mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};

mojo.internal.bindings.device.mojom.MtpManagerClient = {};
mojo.internal.bindings.device.mojom.MtpManagerClientSpec = { $ : {} };
mojo.internal.bindings.device.mojom.MtpManagerClient.$interfaceName = 'device.mojom.MtpManagerClient';
mojo.internal.bindings.device.mojom.MtpManagerClient_StorageAttached_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManagerClient_StorageDetached_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager = {};
mojo.internal.bindings.device.mojom.MtpManagerSpec = { $ : {} };
mojo.internal.bindings.device.mojom.MtpManager.$interfaceName = 'device.mojom.MtpManager';
mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ResponseParamsSpec = { $: {} };

// Interface: MtpManagerClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManagerClient_StorageAttached_ParamsSpec, 'device.mojom.MtpManagerClient_StorageAttached_Params', [
      mojo.internal.StructField('arg_storage_info', 0, 0, mojo.internal.bindings.device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManagerClient_StorageDetached_ParamsSpec, 'device.mojom.MtpManagerClient_StorageDetached_Params', [
      mojo.internal.StructField('arg_storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.MtpManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.MtpManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.MtpManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.MtpManagerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.MtpManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  storageAttached(arg_storage_info) {
    return this.$.storageAttached(arg_storage_info);
  }
  storageDetached(arg_storage_name) {
    return this.$.storageDetached(arg_storage_name);
  }
};

mojo.internal.bindings.device.mojom.MtpManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.MtpManagerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  storageAttached(arg_storage_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManagerClient_StorageAttached_ParamsSpec,
      null,
      [arg_storage_info],
      false);
  }

  storageDetached(arg_storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManagerClient_StorageDetached_ParamsSpec,
      null,
      [arg_storage_name],
      false);
  }

};

mojo.internal.bindings.device.mojom.MtpManagerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.MtpManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.MtpManagerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.MtpManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.MtpManagerClient', [
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
        
        // Try Method 0: StorageAttached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManagerClient_StorageAttached_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StorageAttached (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StorageDetached
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManagerClient_StorageDetached_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StorageDetached (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManagerClient_StorageAttached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.storageAttached');
          const result = this.impl.storageAttached(params.arg_storage_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManagerClient_StorageDetached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.storageDetached');
          const result = this.impl.storageDetached(params.arg_storage_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.MtpManagerClientReceiver = mojo.internal.bindings.device.mojom.MtpManagerClientReceiver;

mojo.internal.bindings.device.mojom.MtpManagerClientPtr = mojo.internal.bindings.device.mojom.MtpManagerClientRemote;
mojo.internal.bindings.device.mojom.MtpManagerClientRequest = mojo.internal.bindings.device.mojom.MtpManagerClientPendingReceiver;


// Interface: MtpManager
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec, 'device.mojom.MtpManager_EnumerateStoragesAndSetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.device.mojom.MtpManagerClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec, 'device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParams', [
      mojo.internal.StructField('arg_storages', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.MtpStorageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ParamsSpec, 'device.mojom.MtpManager_GetStorageInfo_Params', [
      mojo.internal.StructField('arg_storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec, 'device.mojom.MtpManager_GetStorageInfo_ResponseParams', [
      mojo.internal.StructField('arg_storage_info', 0, 0, mojo.internal.bindings.device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec, 'device.mojom.MtpManager_GetStorageInfoFromDevice_Params', [
      mojo.internal.StructField('arg_storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec, 'device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParams', [
      mojo.internal.StructField('arg_storage_info', 0, 0, mojo.internal.bindings.device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ParamsSpec, 'device.mojom.MtpManager_OpenStorage_Params', [
      mojo.internal.StructField('arg_storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ResponseParamsSpec, 'device.mojom.MtpManager_OpenStorage_ResponseParams', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ParamsSpec, 'device.mojom.MtpManager_CloseStorage_Params', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ResponseParamsSpec, 'device.mojom.MtpManager_CloseStorage_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ParamsSpec, 'device.mojom.MtpManager_CreateDirectory_Params', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_directory_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parent_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec, 'device.mojom.MtpManager_CreateDirectory_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec, 'device.mojom.MtpManager_ReadDirectoryEntryIds_Params', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec, 'device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParams', [
      mojo.internal.StructField('arg_file_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ParamsSpec, 'device.mojom.MtpManager_ReadFileChunk_Params', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec, 'device.mojom.MtpManager_ReadFileChunk_ResponseParams', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ParamsSpec, 'device.mojom.MtpManager_GetFileInfo_Params', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec, 'device.mojom.MtpManager_GetFileInfo_ResponseParams', [
      mojo.internal.StructField('arg_file_entries', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.MtpFileEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ParamsSpec, 'device.mojom.MtpManager_RenameObject_Params', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_object_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ResponseParamsSpec, 'device.mojom.MtpManager_RenameObject_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec, 'device.mojom.MtpManager_CopyFileFromLocal_Params', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_file_descriptor', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_parent_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec, 'device.mojom.MtpManager_CopyFileFromLocal_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ParamsSpec, 'device.mojom.MtpManager_DeleteObject_Params', [
      mojo.internal.StructField('arg_storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_object_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ResponseParamsSpec, 'device.mojom.MtpManager_DeleteObject_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.MtpManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.MtpManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.MtpManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.MtpManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.MtpManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enumerateStoragesAndSetClient(arg_client) {
    return this.$.enumerateStoragesAndSetClient(arg_client);
  }
  getStorageInfo(arg_storage_name) {
    return this.$.getStorageInfo(arg_storage_name);
  }
  getStorageInfoFromDevice(arg_storage_name) {
    return this.$.getStorageInfoFromDevice(arg_storage_name);
  }
  openStorage(arg_storage_name, arg_mode) {
    return this.$.openStorage(arg_storage_name, arg_mode);
  }
  closeStorage(arg_storage_handle) {
    return this.$.closeStorage(arg_storage_handle);
  }
  createDirectory(arg_storage_handle, arg_parent_id, arg_directory_name) {
    return this.$.createDirectory(arg_storage_handle, arg_parent_id, arg_directory_name);
  }
  readDirectoryEntryIds(arg_storage_handle, arg_file_id) {
    return this.$.readDirectoryEntryIds(arg_storage_handle, arg_file_id);
  }
  readFileChunk(arg_storage_handle, arg_file_id, arg_offset, arg_count) {
    return this.$.readFileChunk(arg_storage_handle, arg_file_id, arg_offset, arg_count);
  }
  getFileInfo(arg_storage_handle, arg_file_ids) {
    return this.$.getFileInfo(arg_storage_handle, arg_file_ids);
  }
  renameObject(arg_storage_handle, arg_object_id, arg_new_name) {
    return this.$.renameObject(arg_storage_handle, arg_object_id, arg_new_name);
  }
  copyFileFromLocal(arg_storage_handle, arg_source_file_descriptor, arg_parent_id, arg_file_name) {
    return this.$.copyFileFromLocal(arg_storage_handle, arg_source_file_descriptor, arg_parent_id, arg_file_name);
  }
  deleteObject(arg_storage_handle, arg_object_id) {
    return this.$.deleteObject(arg_storage_handle, arg_object_id);
  }
};

mojo.internal.bindings.device.mojom.MtpManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('device.mojom.MtpManager', [
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
      { explicit: null },
    ]);
  }

  enumerateStoragesAndSetClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec,
      [arg_client],
      false);
  }

  getStorageInfo(arg_storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec,
      [arg_storage_name],
      false);
  }

  getStorageInfoFromDevice(arg_storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec,
      [arg_storage_name],
      false);
  }

  openStorage(arg_storage_name, arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ResponseParamsSpec,
      [arg_storage_name, arg_mode],
      false);
  }

  closeStorage(arg_storage_handle) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ResponseParamsSpec,
      [arg_storage_handle],
      false);
  }

  createDirectory(arg_storage_handle, arg_parent_id, arg_directory_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec,
      [arg_storage_handle, arg_parent_id, arg_directory_name],
      false);
  }

  readDirectoryEntryIds(arg_storage_handle, arg_file_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec,
      [arg_storage_handle, arg_file_id],
      false);
  }

  readFileChunk(arg_storage_handle, arg_file_id, arg_offset, arg_count) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec,
      [arg_storage_handle, arg_file_id, arg_offset, arg_count],
      false);
  }

  getFileInfo(arg_storage_handle, arg_file_ids) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec,
      [arg_storage_handle, arg_file_ids],
      false);
  }

  renameObject(arg_storage_handle, arg_object_id, arg_new_name) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ResponseParamsSpec,
      [arg_storage_handle, arg_object_id, arg_new_name],
      false);
  }

  copyFileFromLocal(arg_storage_handle, arg_source_file_descriptor, arg_parent_id, arg_file_name) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec,
      [arg_storage_handle, arg_source_file_descriptor, arg_parent_id, arg_file_name],
      false);
  }

  deleteObject(arg_storage_handle, arg_object_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ParamsSpec,
      mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ResponseParamsSpec,
      [arg_storage_handle, arg_object_id],
      false);
  }

};

mojo.internal.bindings.device.mojom.MtpManager.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.MtpManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.MtpManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.MtpManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('device.mojom.MtpManager', [
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
        
        // Try Method 0: EnumerateStoragesAndSetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumerateStoragesAndSetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetStorageInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStorageInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetStorageInfoFromDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStorageInfoFromDevice (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenStorage (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CloseStorage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseStorage (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDirectory (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ReadDirectoryEntryIds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadDirectoryEntryIds (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ReadFileChunk
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadFileChunk (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetFileInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RenameObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameObject (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CopyFileFromLocal
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyFileFromLocal (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DeleteObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteObject (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enumerateStoragesAndSetClient');
          const result = this.impl.enumerateStoragesAndSetClient(params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EnumerateStoragesAndSetClient FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStorageInfo');
          const result = this.impl.getStorageInfo(params.arg_storage_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStorageInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStorageInfoFromDevice');
          const result = this.impl.getStorageInfoFromDevice(params.arg_storage_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStorageInfoFromDevice FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openStorage');
          const result = this.impl.openStorage(params.arg_storage_name, params.arg_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_OpenStorage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenStorage FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeStorage');
          const result = this.impl.closeStorage(params.arg_storage_handle);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_CloseStorage_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseStorage FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDirectory');
          const result = this.impl.createDirectory(params.arg_storage_handle, params.arg_parent_id, params.arg_directory_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateDirectory FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readDirectoryEntryIds');
          const result = this.impl.readDirectoryEntryIds(params.arg_storage_handle, params.arg_file_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadDirectoryEntryIds FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readFileChunk');
          const result = this.impl.readFileChunk(params.arg_storage_handle, params.arg_file_id, params.arg_offset, params.arg_count);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadFileChunk FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileInfo');
          const result = this.impl.getFileInfo(params.arg_storage_handle, params.arg_file_ids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileInfo FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renameObject');
          const result = this.impl.renameObject(params.arg_storage_handle, params.arg_object_id, params.arg_new_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_RenameObject_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RenameObject FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyFileFromLocal');
          const result = this.impl.copyFileFromLocal(params.arg_storage_handle, params.arg_source_file_descriptor, params.arg_parent_id, params.arg_file_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CopyFileFromLocal FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteObject');
          const result = this.impl.deleteObject(params.arg_storage_handle, params.arg_object_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.MtpManager_DeleteObject_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteObject FAILED:', e));
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

mojo.internal.bindings.device.mojom.MtpManagerReceiver = mojo.internal.bindings.device.mojom.MtpManagerReceiver;

mojo.internal.bindings.device.mojom.MtpManagerPtr = mojo.internal.bindings.device.mojom.MtpManagerRemote;
mojo.internal.bindings.device.mojom.MtpManagerRequest = mojo.internal.bindings.device.mojom.MtpManagerPendingReceiver;

