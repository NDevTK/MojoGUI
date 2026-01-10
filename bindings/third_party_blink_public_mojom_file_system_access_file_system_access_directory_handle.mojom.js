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
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FileSystemAccessHandleSpec = { $: {} };
blink.mojom.FileSystemAccessEntrySpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryEntriesListener = {};
blink.mojom.FileSystemAccessDirectoryEntriesListener.$interfaceName = 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle = {};
blink.mojom.FileSystemAccessDirectoryHandle.$interfaceName = 'blink.mojom.FileSystemAccessDirectoryHandle';
blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec = { $: {} };
blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec = { $: {} };

// Union: FileSystemAccessHandle
mojo.internal.Union(
    blink.mojom.FileSystemAccessHandleSpec, 'blink.mojom.FileSystemAccessHandle', {
      'file': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileHandleRemote),
        'nullable': false,
      },
      'directory': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleSpec),
        'nullable': false,
      },
    });

// Struct: FileSystemAccessEntry
mojo.internal.Struct(
    blink.mojom.FileSystemAccessEntrySpec, 'blink.mojom.FileSystemAccessEntry', [
      mojo.internal.StructField('entry_handle', 0, 0, blink.mojom.FileSystemAccessHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FileSystemAccessDirectoryEntriesListener
mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_Params', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entries', 8, 0, mojo.internal.Array(blink.mojom.FileSystemAccessEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('has_more_entries', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessDirectoryEntriesListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didReadDirectory(result, entries, has_more_entries) {
    return this.$.didReadDirectory(result, entries, has_more_entries);
  }
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileSystemAccessDirectoryEntriesListener', [
      { explicit: null },
    ]);
  }

  didReadDirectory(result, entries, has_more_entries) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec,
      null,
      [result, entries, has_more_entries],
      false);
  }

};

blink.mojom.FileSystemAccessDirectoryEntriesListener.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDirectoryEntriesListener',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryEntriesListener_DidReadDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didReadDirectory');
          const result = this.impl.didReadDirectory(params.result, params.entries, params.has_more_entries);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver = blink.mojom.FileSystemAccessDirectoryEntriesListenerReceiver;

blink.mojom.FileSystemAccessDirectoryEntriesListenerPtr = blink.mojom.FileSystemAccessDirectoryEntriesListenerRemote;
blink.mojom.FileSystemAccessDirectoryEntriesListenerRequest = blink.mojom.FileSystemAccessDirectoryEntriesListenerPendingReceiver;


// Interface: FileSystemAccessDirectoryHandle
mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.FileSystemAccessPermissionModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, blink.mojom.PermissionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetFile_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('create', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessFileHandleRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('create', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('directory', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryHandleSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessDirectoryEntriesListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Rename_Params', [
      mojo.internal.StructField('new_entry_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Move_Params', [
      mojo.internal.StructField('destination_directory', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
      mojo.internal.StructField('new_entry_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Remove_Params', [
      mojo.internal.StructField('recurse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_Params', [
      mojo.internal.StructField('basename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('recurse', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Resolve_Params', [
      mojo.internal.StructField('possible_child', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_Transfer_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.FileSystemAccessTransferTokenRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec, 'blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.FileSystemAccessErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cloud_identifiers', 8, 0, mojo.internal.Array(blink.mojom.FileSystemAccessCloudIdentifierSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FileSystemAccessDirectoryHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemAccessDirectoryHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.FileSystemAccessDirectoryHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPermissionStatus(mode) {
    return this.$.getPermissionStatus(mode);
  }
  requestPermission(mode) {
    return this.$.requestPermission(mode);
  }
  getFile(basename, create) {
    return this.$.getFile(basename, create);
  }
  getDirectory(basename, create) {
    return this.$.getDirectory(basename, create);
  }
  getEntries(listener) {
    return this.$.getEntries(listener);
  }
  rename(new_entry_name) {
    return this.$.rename(new_entry_name);
  }
  move(destination_directory, new_entry_name) {
    return this.$.move(destination_directory, new_entry_name);
  }
  remove(recurse) {
    return this.$.remove(recurse);
  }
  removeEntry(basename, recurse) {
    return this.$.removeEntry(basename, recurse);
  }
  resolve(possible_child) {
    return this.$.resolve(possible_child);
  }
  transfer(token) {
    return this.$.transfer(token);
  }
  getUniqueId() {
    return this.$.getUniqueId();
  }
  getCloudIdentifiers() {
    return this.$.getCloudIdentifiers();
  }
};

blink.mojom.FileSystemAccessDirectoryHandleRemoteCallHandler = class {
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

  getPermissionStatus(mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec,
      [mode],
      false);
  }

  requestPermission(mode) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec,
      [mode],
      false);
  }

  getFile(basename, create) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec,
      [basename, create],
      false);
  }

  getDirectory(basename, create) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec,
      [basename, create],
      false);
  }

  getEntries(listener) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec,
      null,
      [listener],
      false);
  }

  rename(new_entry_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec,
      [new_entry_name],
      false);
  }

  move(destination_directory, new_entry_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec,
      [destination_directory, new_entry_name],
      false);
  }

  remove(recurse) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec,
      [recurse],
      false);
  }

  removeEntry(basename, recurse) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec,
      [basename, recurse],
      false);
  }

  resolve(possible_child) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec,
      [possible_child],
      false);
  }

  transfer(token) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec,
      null,
      [token],
      false);
  }

  getUniqueId() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec,
      [],
      false);
  }

  getCloudIdentifiers() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec,
      blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FileSystemAccessDirectoryHandle.getRemote = function() {
  let remote = new blink.mojom.FileSystemAccessDirectoryHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemAccessDirectoryHandle',
    'context');
  return remote.$;
};

blink.mojom.FileSystemAccessDirectoryHandleReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPermissionStatus');
          const result = this.impl.getPermissionStatus(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetPermissionStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPermission');
          const result = this.impl.requestPermission(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_RequestPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFile');
          const result = this.impl.getFile(params.basename, params.create);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDirectory');
          const result = this.impl.getDirectory(params.basename, params.create);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEntries');
          const result = this.impl.getEntries(params.listener);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Rename_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rename');
          const result = this.impl.rename(params.new_entry_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_Rename_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Move_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.move');
          const result = this.impl.move(params.destination_directory, params.new_entry_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_Move_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Remove_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remove');
          const result = this.impl.remove(params.recurse);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_Remove_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeEntry');
          const result = this.impl.removeEntry(params.basename, params.recurse);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_RemoveEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolve');
          const result = this.impl.resolve(params.possible_child);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_Resolve_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_Transfer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.transfer');
          const result = this.impl.transfer(params.token);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUniqueId');
          const result = this.impl.getUniqueId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetUniqueId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCloudIdentifiers');
          const result = this.impl.getCloudIdentifiers();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FileSystemAccessDirectoryHandle_GetCloudIdentifiers_ResponseParamsSpec);
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

blink.mojom.FileSystemAccessDirectoryHandleReceiver = blink.mojom.FileSystemAccessDirectoryHandleReceiver;

blink.mojom.FileSystemAccessDirectoryHandlePtr = blink.mojom.FileSystemAccessDirectoryHandleRemote;
blink.mojom.FileSystemAccessDirectoryHandleRequest = blink.mojom.FileSystemAccessDirectoryHandlePendingReceiver;

