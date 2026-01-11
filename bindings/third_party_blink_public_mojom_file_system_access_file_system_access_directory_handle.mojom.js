// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_directory_handle.mojom
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

mojo.internal.bindings.blink.mojom.FileSystemAccessHandleSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessEntrySpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListener = {};
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListener.$interfaceName = 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle = {};
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle.$interfaceName = 'blink.mojom.FileSystemAccessDirectoryHandle';
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec = { $: {} };

// Union: FileSystemAccessHandle
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.FileSystemAccessHandleSpec, 'blink.mojom.FileSystemAccessHandle', {
      'arg_file': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessFileHandleRemote),
        'nullable': false,
      },
      'arg_directory': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleSpec),
        'nullable': false,
      },
    });

// Struct: FileSystemAccessEntry
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessEntrySpec, 'blink.mojom.FileSystemAccessEntry', [
      mojo.internal.StructField('arg_entry_handle', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FileSystemAccessDirectoryEntriesListener
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_entries', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.FileSystemAccessEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_has_more_entries', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didReadDirectory(arg_result, arg_entries, arg_has_more_entries) {
    return this.$.didReadDirectory(arg_result, arg_entries, arg_has_more_entries);
  }
};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessDirectoryEntriesListener', [
      { explicit: null },
    ]);
  }

  didReadDirectory(arg_result, arg_entries, arg_has_more_entries) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec,
      null,
      [arg_result, arg_entries, arg_has_more_entries],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListener.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDirectoryEntriesListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessDirectoryEntriesListener', [
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
        
        // Try Method 0: DidReadDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidReadDirectory (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didReadDirectory');
          const result = this.impl.didReadDirectory(params.arg_result, params.arg_entries, params.arg_has_more_entries);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver = mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver;

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerPtr = mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote;
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerRequest = mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver;


// Interface: FileSystemAccessDirectoryHandle
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetFile_Params', [
      mojo.internal.StructField('arg_basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_create', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessFileHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_Params', [
      mojo.internal.StructField('arg_basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_create', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_directory', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryEntriesListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Rename_Params', [
      mojo.internal.StructField('arg_new_entry_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Move_Params', [
      mojo.internal.StructField('arg_destination_directory', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_new_entry_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Remove_Params', [
      mojo.internal.StructField('arg_recurse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_Params', [
      mojo.internal.StructField('arg_basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_recurse', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Resolve_Params', [
      mojo.internal.StructField('arg_possible_child', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Transfer_Params', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cloud_identifiers', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.FileSystemAccessCloudIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDirectoryHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPermissionStatus(arg_mode) {
    return this.$.getPermissionStatus(arg_mode);
  }
  requestPermission(arg_mode) {
    return this.$.requestPermission(arg_mode);
  }
  getFile(arg_basename, arg_create) {
    return this.$.getFile(arg_basename, arg_create);
  }
  getDirectory(arg_basename, arg_create) {
    return this.$.getDirectory(arg_basename, arg_create);
  }
  getEntries(arg_listener) {
    return this.$.getEntries(arg_listener);
  }
  rename(arg_new_entry_name) {
    return this.$.rename(arg_new_entry_name);
  }
  move(arg_destination_directory, arg_new_entry_name) {
    return this.$.move(arg_destination_directory, arg_new_entry_name);
  }
  remove(arg_recurse) {
    return this.$.remove(arg_recurse);
  }
  removeEntry(arg_basename, arg_recurse) {
    return this.$.removeEntry(arg_basename, arg_recurse);
  }
  resolve(arg_possible_child) {
    return this.$.resolve(arg_possible_child);
  }
  transfer(arg_token) {
    return this.$.transfer(arg_token);
  }
  getUniqueId() {
    return this.$.getUniqueId();
  }
  getCloudIdentifiers() {
    return this.$.getCloudIdentifiers();
  }
};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessDirectoryHandle', [
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
      { explicit: null },
    ]);
  }

  getPermissionStatus(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec,
      [arg_mode],
      false);
  }

  requestPermission(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec,
      [arg_mode],
      false);
  }

  getFile(arg_basename, arg_create) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec,
      [arg_basename, arg_create],
      false);
  }

  getDirectory(arg_basename, arg_create) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec,
      [arg_basename, arg_create],
      false);
  }

  getEntries(arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec,
      null,
      [arg_listener],
      false);
  }

  rename(arg_new_entry_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec,
      [arg_new_entry_name],
      false);
  }

  move(arg_destination_directory, arg_new_entry_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec,
      [arg_destination_directory, arg_new_entry_name],
      false);
  }

  remove(arg_recurse) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec,
      [arg_recurse],
      false);
  }

  removeEntry(arg_basename, arg_recurse) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec,
      [arg_basename, arg_recurse],
      false);
  }

  resolve(arg_possible_child) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec,
      [arg_possible_child],
      false);
  }

  transfer(arg_token) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec,
      null,
      [arg_token],
      false);
  }

  getUniqueId() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec,
      [],
      false);
  }

  getCloudIdentifiers() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDirectoryHandle',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessDirectoryHandle', [
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
        
        // Try Method 0: GetPermissionStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPermissionStatus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestPermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPermission (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFile (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDirectory (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEntries (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Rename
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Rename (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Move
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Move (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Remove
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Remove (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RemoveEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveEntry (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Resolve
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resolve (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Transfer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Transfer (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetUniqueId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUniqueId (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetCloudIdentifiers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCloudIdentifiers (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPermissionStatus');
          const result = this.impl.getPermissionStatus(params.arg_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPermissionStatus FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.arg_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPermission FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFile');
          const result = this.impl.getFile(params.arg_basename, params.arg_create);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFile FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDirectory');
          const result = this.impl.getDirectory(params.arg_basename, params.arg_create);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDirectory FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEntries');
          const result = this.impl.getEntries(params.arg_listener);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rename');
          const result = this.impl.rename(params.arg_new_entry_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Rename FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.move');
          const result = this.impl.move(params.arg_destination_directory, params.arg_new_entry_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Move FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remove');
          const result = this.impl.remove(params.arg_recurse);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Remove FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeEntry');
          const result = this.impl.removeEntry(params.arg_basename, params.arg_recurse);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveEntry FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolve');
          const result = this.impl.resolve(params.arg_possible_child);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Resolve FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.transfer');
          const result = this.impl.transfer(params.arg_token);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUniqueId');
          const result = this.impl.getUniqueId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUniqueId FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCloudIdentifiers');
          const result = this.impl.getCloudIdentifiers();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCloudIdentifiers FAILED:', e));
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

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleReceiver = mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleReceiver;

mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandlePtr = mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRemote;
mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandleRequest = mojo.internal.bindings.blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver;

