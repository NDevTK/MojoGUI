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
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.MtpManagerClient = {};
device.mojom.MtpManagerClient.$interfaceName = 'device.mojom.MtpManagerClient';
device.mojom.MtpManagerClient_StorageAttached_ParamsSpec = { $: {} };
device.mojom.MtpManagerClient_StorageDetached_ParamsSpec = { $: {} };
device.mojom.MtpManager = {};
device.mojom.MtpManager.$interfaceName = 'device.mojom.MtpManager';
device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec = { $: {} };
device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_GetStorageInfo_ParamsSpec = { $: {} };
device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec = { $: {} };
device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_OpenStorage_ParamsSpec = { $: {} };
device.mojom.MtpManager_OpenStorage_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_CloseStorage_ParamsSpec = { $: {} };
device.mojom.MtpManager_CloseStorage_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_CreateDirectory_ParamsSpec = { $: {} };
device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec = { $: {} };
device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_ReadFileChunk_ParamsSpec = { $: {} };
device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_GetFileInfo_ParamsSpec = { $: {} };
device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_RenameObject_ParamsSpec = { $: {} };
device.mojom.MtpManager_RenameObject_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec = { $: {} };
device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec = { $: {} };
device.mojom.MtpManager_DeleteObject_ParamsSpec = { $: {} };
device.mojom.MtpManager_DeleteObject_ResponseParamsSpec = { $: {} };

// Interface: MtpManagerClient
mojo.internal.Struct(
    device.mojom.MtpManagerClient_StorageAttached_ParamsSpec, 'device.mojom.MtpManagerClient_StorageAttached_Params', [
      mojo.internal.StructField('storage_info', 0, 0, device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManagerClient_StorageDetached_ParamsSpec, 'device.mojom.MtpManagerClient_StorageDetached_Params', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.MtpManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.MtpManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.MtpManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.MtpManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.MtpManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.MtpManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MtpManagerClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  storageAttached(storage_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.MtpManagerClient_StorageAttached_ParamsSpec,
      null,
      [storage_info],
      false);
  }

  storageDetached(storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.MtpManagerClient_StorageDetached_ParamsSpec,
      null,
      [storage_name],
      false);
  }

};

device.mojom.MtpManagerClient.getRemote = function() {
  let remote = new device.mojom.MtpManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.MtpManagerClient',
    'context');
  return remote.$;
};

device.mojom.MtpManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MtpManagerClient', [
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
             decoder.decodeStructInline(device.mojom.MtpManagerClient_StorageAttached_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManagerClient_StorageDetached_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.MtpManagerClient_StorageAttached_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.storageAttached');
          const result = this.impl.storageAttached(params.storage_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManagerClient_StorageDetached_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.storageDetached');
          const result = this.impl.storageDetached(params.storage_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.MtpManagerClientReceiver = device.mojom.MtpManagerClientReceiver;

device.mojom.MtpManagerClientPtr = device.mojom.MtpManagerClientRemote;
device.mojom.MtpManagerClientRequest = device.mojom.MtpManagerClientPendingReceiver;


// Interface: MtpManager
mojo.internal.Struct(
    device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec, 'device.mojom.MtpManager_EnumerateStoragesAndSetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec, 'device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParams', [
      mojo.internal.StructField('storages', 0, 0, mojo.internal.Array(device.mojom.MtpStorageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetStorageInfo_ParamsSpec, 'device.mojom.MtpManager_GetStorageInfo_Params', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec, 'device.mojom.MtpManager_GetStorageInfo_ResponseParams', [
      mojo.internal.StructField('storage_info', 0, 0, device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec, 'device.mojom.MtpManager_GetStorageInfoFromDevice_Params', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec, 'device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParams', [
      mojo.internal.StructField('storage_info', 0, 0, device.mojom.MtpStorageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_OpenStorage_ParamsSpec, 'device.mojom.MtpManager_OpenStorage_Params', [
      mojo.internal.StructField('storage_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_OpenStorage_ResponseParamsSpec, 'device.mojom.MtpManager_OpenStorage_ResponseParams', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CloseStorage_ParamsSpec, 'device.mojom.MtpManager_CloseStorage_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CloseStorage_ResponseParamsSpec, 'device.mojom.MtpManager_CloseStorage_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CreateDirectory_ParamsSpec, 'device.mojom.MtpManager_CreateDirectory_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('directory_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec, 'device.mojom.MtpManager_CreateDirectory_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec, 'device.mojom.MtpManager_ReadDirectoryEntryIds_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec, 'device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParams', [
      mojo.internal.StructField('file_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_ReadFileChunk_ParamsSpec, 'device.mojom.MtpManager_ReadFileChunk_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('count', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec, 'device.mojom.MtpManager_ReadFileChunk_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetFileInfo_ParamsSpec, 'device.mojom.MtpManager_GetFileInfo_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_ids', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec, 'device.mojom.MtpManager_GetFileInfo_ResponseParams', [
      mojo.internal.StructField('file_entries', 0, 0, mojo.internal.Array(device.mojom.MtpFileEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_RenameObject_ParamsSpec, 'device.mojom.MtpManager_RenameObject_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('object_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.MtpManager_RenameObject_ResponseParamsSpec, 'device.mojom.MtpManager_RenameObject_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec, 'device.mojom.MtpManager_CopyFileFromLocal_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_file_descriptor', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('file_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('parent_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec, 'device.mojom.MtpManager_CopyFileFromLocal_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.MtpManager_DeleteObject_ParamsSpec, 'device.mojom.MtpManager_DeleteObject_Params', [
      mojo.internal.StructField('storage_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('object_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.MtpManager_DeleteObject_ResponseParamsSpec, 'device.mojom.MtpManager_DeleteObject_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.MtpManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.MtpManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.MtpManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.MtpManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.MtpManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.MtpManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MtpManager', [
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

  enumerateStoragesAndSetClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec,
      device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec,
      [client],
      false);
  }

  getStorageInfo(storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.MtpManager_GetStorageInfo_ParamsSpec,
      device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec,
      [storage_name],
      false);
  }

  getStorageInfoFromDevice(storage_name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec,
      device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec,
      [storage_name],
      false);
  }

  openStorage(storage_name, mode) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.MtpManager_OpenStorage_ParamsSpec,
      device.mojom.MtpManager_OpenStorage_ResponseParamsSpec,
      [storage_name, mode],
      false);
  }

  closeStorage(storage_handle) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.MtpManager_CloseStorage_ParamsSpec,
      device.mojom.MtpManager_CloseStorage_ResponseParamsSpec,
      [storage_handle],
      false);
  }

  createDirectory(storage_handle, parent_id, directory_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.MtpManager_CreateDirectory_ParamsSpec,
      device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec,
      [storage_handle, parent_id, directory_name],
      false);
  }

  readDirectoryEntryIds(storage_handle, file_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec,
      device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec,
      [storage_handle, file_id],
      false);
  }

  readFileChunk(storage_handle, file_id, offset, count) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      device.mojom.MtpManager_ReadFileChunk_ParamsSpec,
      device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec,
      [storage_handle, file_id, offset, count],
      false);
  }

  getFileInfo(storage_handle, file_ids) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      device.mojom.MtpManager_GetFileInfo_ParamsSpec,
      device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec,
      [storage_handle, file_ids],
      false);
  }

  renameObject(storage_handle, object_id, new_name) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      device.mojom.MtpManager_RenameObject_ParamsSpec,
      device.mojom.MtpManager_RenameObject_ResponseParamsSpec,
      [storage_handle, object_id, new_name],
      false);
  }

  copyFileFromLocal(storage_handle, source_file_descriptor, parent_id, file_name) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec,
      device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec,
      [storage_handle, source_file_descriptor, parent_id, file_name],
      false);
  }

  deleteObject(storage_handle, object_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      device.mojom.MtpManager_DeleteObject_ParamsSpec,
      device.mojom.MtpManager_DeleteObject_ResponseParamsSpec,
      [storage_handle, object_id],
      false);
  }

};

device.mojom.MtpManager.getRemote = function() {
  let remote = new device.mojom.MtpManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.MtpManager',
    'context');
  return remote.$;
};

device.mojom.MtpManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MtpManager', [
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
             decoder.decodeStructInline(device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_GetStorageInfo_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_OpenStorage_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_CloseStorage_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_CreateDirectory_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_ReadFileChunk_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_GetFileInfo_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_RenameObject_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec);
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
             decoder.decodeStructInline(device.mojom.MtpManager_DeleteObject_ParamsSpec);
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
          const params = decoder.decodeStructInline(device.mojom.MtpManager_EnumerateStoragesAndSetClient_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.enumerateStoragesAndSetClient');
          const result = this.impl.enumerateStoragesAndSetClient(params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_EnumerateStoragesAndSetClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_GetStorageInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getStorageInfo');
          const result = this.impl.getStorageInfo(params.storage_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_GetStorageInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_GetStorageInfoFromDevice_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getStorageInfoFromDevice');
          const result = this.impl.getStorageInfoFromDevice(params.storage_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_GetStorageInfoFromDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_OpenStorage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openStorage');
          const result = this.impl.openStorage(params.storage_name, params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_OpenStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_CloseStorage_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.closeStorage');
          const result = this.impl.closeStorage(params.storage_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_CloseStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_CreateDirectory_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.createDirectory');
          const result = this.impl.createDirectory(params.storage_handle, params.parent_id, params.directory_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_CreateDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_ReadDirectoryEntryIds_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.readDirectoryEntryIds');
          const result = this.impl.readDirectoryEntryIds(params.storage_handle, params.file_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_ReadDirectoryEntryIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_ReadFileChunk_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.readFileChunk');
          const result = this.impl.readFileChunk(params.storage_handle, params.file_id, params.offset, params.count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_ReadFileChunk_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_GetFileInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileInfo');
          const result = this.impl.getFileInfo(params.storage_handle, params.file_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_GetFileInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_RenameObject_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.renameObject');
          const result = this.impl.renameObject(params.storage_handle, params.object_id, params.new_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_RenameObject_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_CopyFileFromLocal_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.copyFileFromLocal');
          const result = this.impl.copyFileFromLocal(params.storage_handle, params.source_file_descriptor, params.parent_id, params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_CopyFileFromLocal_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.MtpManager_DeleteObject_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteObject');
          const result = this.impl.deleteObject(params.storage_handle, params.object_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.MtpManager_DeleteObject_ResponseParamsSpec);
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

device.mojom.MtpManagerReceiver = device.mojom.MtpManagerReceiver;

device.mojom.MtpManagerPtr = device.mojom.MtpManagerRemote;
device.mojom.MtpManagerRequest = device.mojom.MtpManagerPendingReceiver;

