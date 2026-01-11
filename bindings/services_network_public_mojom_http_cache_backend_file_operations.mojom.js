// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/http_cache_backend_file_operations.mojom
 // Module: network.mojom

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
 

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.network.mojom.HttpCacheBackendOpenFileFlagsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.HttpCacheBackendDeleteFileModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.network.mojom.FileEnumerationEntrySpec = { $: {} };
mojo.internal.bindings.network.mojom.FileEnumerator = {};
mojo.internal.bindings.network.mojom.FileEnumerator.$interfaceName = 'network.mojom.FileEnumerator';
mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations = {};
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations.$interfaceName = 'network.mojom.HttpCacheBackendFileOperations';
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactory = {};
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactory.$interfaceName = 'network.mojom.HttpCacheBackendFileOperationsFactory';
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec = { $: {} };

// Enum: HttpCacheBackendOpenFileFlags
mojo.internal.bindings.network.mojom.HttpCacheBackendOpenFileFlags = {
  kOpenAndRead: 33,
  kCreateAndWrite: 66,
  kOpenReadWriteWinShareDelete: 32865,
  kCreateReadWriteWinShareDelete: 32866,
  kCreateAlwaysWriteWinShareDelete: 32840,
  kOpenReadWinShareDeleteWinSequentialScan: 557089,
};

// Enum: HttpCacheBackendDeleteFileMode
mojo.internal.bindings.network.mojom.HttpCacheBackendDeleteFileMode = {
  kDefault: 0,
  kEnsureImmediateAvailability: 1,
};

// Struct: FileEnumerationEntry
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.FileEnumerationEntrySpec, 'network.mojom.FileEnumerationEntry', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_last_accessed', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_modified', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FileEnumerator
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ParamsSpec, 'network.mojom.FileEnumerator_GetNext_Params', [
      mojo.internal.StructField('arg_num_entries', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ResponseParamsSpec, 'network.mojom.FileEnumerator_GetNext_ResponseParams', [
      mojo.internal.StructField('arg_entries', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.FileEnumerationEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_end', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.FileEnumeratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.FileEnumeratorRemote = class {
  static get $interfaceName() {
    return 'network.mojom.FileEnumerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.FileEnumeratorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.FileEnumeratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getNext(arg_num_entries) {
    return this.$.getNext(arg_num_entries);
  }
};

mojo.internal.bindings.network.mojom.FileEnumeratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileEnumerator', [
      { explicit: null },
    ]);
  }

  getNext(arg_num_entries) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ParamsSpec,
      mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ResponseParamsSpec,
      [arg_num_entries],
      false);
  }

};

mojo.internal.bindings.network.mojom.FileEnumerator.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.FileEnumeratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.FileEnumerator',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.FileEnumeratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileEnumerator', [
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
        
        // Try Method 0: GetNext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNext (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getNext');
          const result = this.impl.getNext(params.arg_num_entries);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.FileEnumerator_GetNext_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetNext FAILED:', e));
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

mojo.internal.bindings.network.mojom.FileEnumeratorReceiver = mojo.internal.bindings.network.mojom.FileEnumeratorReceiver;

mojo.internal.bindings.network.mojom.FileEnumeratorPtr = mojo.internal.bindings.network.mojom.FileEnumeratorRemote;
mojo.internal.bindings.network.mojom.FileEnumeratorRequest = mojo.internal.bindings.network.mojom.FileEnumeratorPendingReceiver;


// Interface: HttpCacheBackendFileOperations
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_CreateDirectory_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_PathExists_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_DirectoryExists_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_OpenFile_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_flags', 8, 0, mojo.internal.bindings.network.mojom.HttpCacheBackendOpenFileFlagsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParams', [
      mojo.internal.StructField('arg_file', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_error', 8, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_DeleteFile_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 8, 0, mojo.internal.bindings.network.mojom.HttpCacheBackendDeleteFileModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_RenameFile_Params', [
      mojo.internal.StructField('arg_from_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_to_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_GetFileInfo_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.FileEnumeratorSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec, 'network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsRemote = class {
  static get $interfaceName() {
    return 'network.mojom.HttpCacheBackendFileOperations';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createDirectory(arg_path) {
    return this.$.createDirectory(arg_path);
  }
  pathExists(arg_path) {
    return this.$.pathExists(arg_path);
  }
  directoryExists(arg_path) {
    return this.$.directoryExists(arg_path);
  }
  openFile(arg_path, arg_flags) {
    return this.$.openFile(arg_path, arg_flags);
  }
  deleteFile(arg_path, arg_mode) {
    return this.$.deleteFile(arg_path, arg_mode);
  }
  renameFile(arg_from_path, arg_to_path) {
    return this.$.renameFile(arg_from_path, arg_to_path);
  }
  getFileInfo(arg_path) {
    return this.$.getFileInfo(arg_path);
  }
  enumerateFiles(arg_path, arg_receiver) {
    return this.$.enumerateFiles(arg_path, arg_receiver);
  }
  cleanupDirectory(arg_path) {
    return this.$.cleanupDirectory(arg_path);
  }
};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HttpCacheBackendFileOperations', [
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

  createDirectory(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec,
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec,
      [arg_path],
      false);
  }

  pathExists(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec,
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec,
      [arg_path],
      false);
  }

  directoryExists(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec,
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec,
      [arg_path],
      false);
  }

  openFile(arg_path, arg_flags) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec,
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec,
      [arg_path, arg_flags],
      false);
  }

  deleteFile(arg_path, arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec,
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec,
      [arg_path, arg_mode],
      false);
  }

  renameFile(arg_from_path, arg_to_path) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec,
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec,
      [arg_from_path, arg_to_path],
      false);
  }

  getFileInfo(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec,
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec,
      [arg_path],
      false);
  }

  enumerateFiles(arg_path, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec,
      null,
      [arg_path, arg_receiver],
      false);
  }

  cleanupDirectory(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec,
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec,
      [arg_path],
      false);
  }

};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.HttpCacheBackendFileOperations',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HttpCacheBackendFileOperations', [
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
        
        // Try Method 0: CreateDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDirectory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PathExists
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PathExists (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DirectoryExists
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DirectoryExists (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFile (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DeleteFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteFile (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RenameFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameFile (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetFileInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileInfo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EnumerateFiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumerateFiles (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CleanupDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CleanupDirectory (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDirectory');
          const result = this.impl.createDirectory(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CreateDirectory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateDirectory FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pathExists');
          const result = this.impl.pathExists(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_PathExists_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PathExists FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.directoryExists');
          const result = this.impl.directoryExists(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DirectoryExists_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DirectoryExists FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFile');
          const result = this.impl.openFile(params.arg_path, params.arg_flags);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_OpenFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenFile FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteFile');
          const result = this.impl.deleteFile(params.arg_path, params.arg_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_DeleteFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteFile FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renameFile');
          const result = this.impl.renameFile(params.arg_from_path, params.arg_to_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_RenameFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RenameFile FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileInfo');
          const result = this.impl.getFileInfo(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_GetFileInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileInfo FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_EnumerateFiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enumerateFiles');
          const result = this.impl.enumerateFiles(params.arg_path, params.arg_receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cleanupDirectory');
          const result = this.impl.cleanupDirectory(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperations_CleanupDirectory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CleanupDirectory FAILED:', e));
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

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsReceiver = mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsReceiver;

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsPtr = mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsRemote;
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsRequest = mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsPendingReceiver;


// Interface: HttpCacheBackendFileOperationsFactory
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec, 'network.mojom.HttpCacheBackendFileOperationsFactory_Create_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote = class {
  static get $interfaceName() {
    return 'network.mojom.HttpCacheBackendFileOperationsFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  create(arg_receiver) {
    return this.$.create(arg_receiver);
  }
};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HttpCacheBackendFileOperationsFactory', [
      { explicit: null },
    ]);
  }

  create(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.HttpCacheBackendFileOperationsFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('HttpCacheBackendFileOperationsFactory', [
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
        
        // Try Method 0: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactory_Create_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryReceiver = mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryReceiver;

mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryPtr = mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote;
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRequest = mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryPendingReceiver;

