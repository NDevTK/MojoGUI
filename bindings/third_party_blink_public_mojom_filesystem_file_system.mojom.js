// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/filesystem/file_system.mojom
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.filesystem = mojo.internal.bindings.filesystem || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.blink.mojom.FileSystemTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FileSystemInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation = {};
mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation.$interfaceName = 'blink.mojom.FileSystemCancellableOperation';
mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemOperationListener = {};
mojo.internal.bindings.blink.mojom.FileSystemOperationListenerSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.FileSystemOperationListener.$interfaceName = 'blink.mojom.FileSystemOperationListener';
mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ReceivedSnapshotListener = {};
mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.ReceivedSnapshotListener.$interfaceName = 'blink.mojom.ReceivedSnapshotListener';
mojo.internal.bindings.blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager = {};
mojo.internal.bindings.blink.mojom.FileSystemManagerSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.FileSystemManager.$interfaceName = 'blink.mojom.FileSystemManager';
mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Write_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec = { $: {} };

// Enum: FileSystemType
mojo.internal.bindings.blink.mojom.FileSystemType = {
  kTemporary: 0,
  kPersistent: 1,
  kIsolated: 2,
  kExternal: 3,
};

// Struct: FileSystemInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemInfoSpec, 'blink.mojom.FileSystemInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_root_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mount_type', 16, 0, mojo.internal.bindings.blink.mojom.FileSystemTypeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FileSystemCancellableOperation
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec, 'blink.mojom.FileSystemCancellableOperation_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec, 'blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemCancellableOperation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cancel() {
    return this.$.cancel();
  }
};

mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FileSystemCancellableOperation', [
      { explicit: null },
    ]);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemCancellableOperation',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FileSystemCancellableOperation', [
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
        
        // Try Method 0: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemCancellableOperation_Cancel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Cancel FAILED:', e));
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

mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationReceiver = mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationReceiver;

mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationPtr = mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationRemote;
mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationRequest = mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationPendingReceiver;


// Interface: FileSystemOperationListener
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec, 'blink.mojom.FileSystemOperationListener_ResultsRetrieved_Params', [
      mojo.internal.StructField('arg_entries', 0, 0, mojo.internal.Array(mojo.internal.bindings.filesystem.mojom.DirectoryEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_has_more', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec, 'blink.mojom.FileSystemOperationListener_DidWrite_Params', [
      mojo.internal.StructField('arg_byte_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_complete', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec, 'blink.mojom.FileSystemOperationListener_ErrorOccurred_Params', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.FileSystemOperationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FileSystemOperationListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemOperationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FileSystemOperationListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FileSystemOperationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  resultsRetrieved(arg_entries, arg_has_more) {
    return this.$.resultsRetrieved(arg_entries, arg_has_more);
  }
  didWrite(arg_byte_count, arg_complete) {
    return this.$.didWrite(arg_byte_count, arg_complete);
  }
  errorOccurred(arg_error_code) {
    return this.$.errorOccurred(arg_error_code);
  }
};

mojo.internal.bindings.blink.mojom.FileSystemOperationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FileSystemOperationListener', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  resultsRetrieved(arg_entries, arg_has_more) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec,
      null,
      [arg_entries, arg_has_more],
      false);
  }

  didWrite(arg_byte_count, arg_complete) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec,
      null,
      [arg_byte_count, arg_complete],
      false);
  }

  errorOccurred(arg_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec,
      null,
      [arg_error_code],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FileSystemOperationListener.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FileSystemOperationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemOperationListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FileSystemOperationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FileSystemOperationListener', [
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
        
        // Try Method 0: ResultsRetrieved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResultsRetrieved (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidWrite (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ErrorOccurred
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ErrorOccurred (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ResultsRetrieved_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resultsRetrieved');
          const result = this.impl.resultsRetrieved(params.arg_entries, params.arg_has_more);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemOperationListener_DidWrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didWrite');
          const result = this.impl.didWrite(params.arg_byte_count, params.arg_complete);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemOperationListener_ErrorOccurred_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.errorOccurred');
          const result = this.impl.errorOccurred(params.arg_error_code);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.FileSystemOperationListenerReceiver = mojo.internal.bindings.blink.mojom.FileSystemOperationListenerReceiver;

mojo.internal.bindings.blink.mojom.FileSystemOperationListenerPtr = mojo.internal.bindings.blink.mojom.FileSystemOperationListenerRemote;
mojo.internal.bindings.blink.mojom.FileSystemOperationListenerRequest = mojo.internal.bindings.blink.mojom.FileSystemOperationListenerPendingReceiver;


// Interface: ReceivedSnapshotListener
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec, 'blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReceivedSnapshotListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didReceiveSnapshotFile() {
    return this.$.didReceiveSnapshotFile();
  }
};

mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ReceivedSnapshotListener', [
      { explicit: null },
    ]);
  }

  didReceiveSnapshotFile() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.ReceivedSnapshotListener.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReceivedSnapshotListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.ReceivedSnapshotListener', [
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
        
        // Try Method 0: DidReceiveSnapshotFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidReceiveSnapshotFile (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.ReceivedSnapshotListener_DidReceiveSnapshotFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didReceiveSnapshotFile');
          const result = this.impl.didReceiveSnapshotFile();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerReceiver = mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerReceiver;

mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerPtr = mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerRemote;
mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerRequest = mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerPendingReceiver;


// Interface: FileSystemManager
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ParamsSpec, 'blink.mojom.FileSystemManager_Open_Params', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_system_type', 8, 0, mojo.internal.bindings.blink.mojom.FileSystemTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Open_ResponseParams', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_root_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 16, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ParamsSpec, 'blink.mojom.FileSystemManager_ResolveURL_Params', [
      mojo.internal.StructField('arg_filesystem_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ResolveURL_ResponseParams', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.blink.mojom.FileSystemInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 16, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_directory', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ParamsSpec, 'blink.mojom.FileSystemManager_Move_Params', [
      mojo.internal.StructField('arg_src_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dest_path', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Move_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ParamsSpec, 'blink.mojom.FileSystemManager_Copy_Params', [
      mojo.internal.StructField('arg_src_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dest_path', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Copy_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ParamsSpec, 'blink.mojom.FileSystemManager_Remove_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_recursive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Remove_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec, 'blink.mojom.FileSystemManager_ReadMetadata_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ReadMetadata_ResponseParams', [
      mojo.internal.StructField('arg_file_info', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 8, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ParamsSpec, 'blink.mojom.FileSystemManager_Create_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_exclusive', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_directory', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_recursive', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Create_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ParamsSpec, 'blink.mojom.FileSystemManager_Exists_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_directory', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Exists_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectory_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemOperationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectorySync_Params', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParams', [
      mojo.internal.StructField('arg_entries', 0, 0, mojo.internal.Array(mojo.internal.bindings.filesystem.mojom.DirectoryEntrySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 8, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Write_ParamsSpec, 'blink.mojom.FileSystemManager_Write_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_blob', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_position', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_op_receiver', 24, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.FileSystemOperationListenerRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ParamsSpec, 'blink.mojom.FileSystemManager_WriteSync_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_blob', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_position', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_WriteSync_ResponseParams', [
      mojo.internal.StructField('arg_byte_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 8, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ParamsSpec, 'blink.mojom.FileSystemManager_Truncate_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_length', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_op_receiver', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.FileSystemCancellableOperationRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec, 'blink.mojom.FileSystemManager_Truncate_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ParamsSpec, 'blink.mojom.FileSystemManager_TruncateSync_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_length', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec, 'blink.mojom.FileSystemManager_TruncateSync_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec, 'blink.mojom.FileSystemManager_CreateSnapshotFile_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec, 'blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParams', [
      mojo.internal.StructField('arg_file_info', 0, 0, mojo.internal.bindings.mojo_base.mojom.FileInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_platform_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 16, 0, mojo.internal.bindings.mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_snapshot_listener', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.ReceivedSnapshotListenerRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec, 'blink.mojom.FileSystemManager_GetPlatformPath_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec, 'blink.mojom.FileSystemManager_GetPlatformPath_ResponseParams', [
      mojo.internal.StructField('arg_platform_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec, 'blink.mojom.FileSystemManager_RegisterBlob_Params', [
      mojo.internal.StructField('arg_content_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_length', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_expected_modification_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec, 'blink.mojom.FileSystemManager_RegisterBlob_ResponseParams', [
      mojo.internal.StructField('arg_blob', 0, 0, mojo.internal.bindings.blink.mojom.SerializedBlobSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.FileSystemManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FileSystemManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FileSystemManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FileSystemManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FileSystemManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  open(arg_origin, arg_file_system_type) {
    return this.$.open(arg_origin, arg_file_system_type);
  }
  resolveURL(arg_filesystem_url) {
    return this.$.resolveURL(arg_filesystem_url);
  }
  move(arg_src_path, arg_dest_path) {
    return this.$.move(arg_src_path, arg_dest_path);
  }
  copy(arg_src_path, arg_dest_path) {
    return this.$.copy(arg_src_path, arg_dest_path);
  }
  remove(arg_path, arg_recursive) {
    return this.$.remove(arg_path, arg_recursive);
  }
  readMetadata(arg_path) {
    return this.$.readMetadata(arg_path);
  }
  create(arg_path, arg_exclusive, arg_is_directory, arg_recursive) {
    return this.$.create(arg_path, arg_exclusive, arg_is_directory, arg_recursive);
  }
  exists(arg_path, arg_is_directory) {
    return this.$.exists(arg_path, arg_is_directory);
  }
  readDirectory(arg_path, arg_listener) {
    return this.$.readDirectory(arg_path, arg_listener);
  }
  readDirectorySync(arg_path) {
    return this.$.readDirectorySync(arg_path);
  }
  write(arg_file_path, arg_blob, arg_position, arg_op_receiver, arg_listener) {
    return this.$.write(arg_file_path, arg_blob, arg_position, arg_op_receiver, arg_listener);
  }
  writeSync(arg_file_path, arg_blob, arg_position) {
    return this.$.writeSync(arg_file_path, arg_blob, arg_position);
  }
  truncate(arg_file_path, arg_length, arg_op_receiver) {
    return this.$.truncate(arg_file_path, arg_length, arg_op_receiver);
  }
  truncateSync(arg_file_path, arg_length) {
    return this.$.truncateSync(arg_file_path, arg_length);
  }
  createSnapshotFile(arg_file_path) {
    return this.$.createSnapshotFile(arg_file_path);
  }
  getPlatformPath(arg_file_path) {
    return this.$.getPlatformPath(arg_file_path);
  }
  registerBlob(arg_content_type, arg_url, arg_length, arg_expected_modification_time) {
    return this.$.registerBlob(arg_content_type, arg_url, arg_length, arg_expected_modification_time);
  }
};

mojo.internal.bindings.blink.mojom.FileSystemManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FileSystemManager', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  open(arg_origin, arg_file_system_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ResponseParamsSpec,
      [arg_origin, arg_file_system_type],
      false);
  }

  resolveURL(arg_filesystem_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec,
      [arg_filesystem_url],
      false);
  }

  move(arg_src_path, arg_dest_path) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ResponseParamsSpec,
      [arg_src_path, arg_dest_path],
      false);
  }

  copy(arg_src_path, arg_dest_path) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ResponseParamsSpec,
      [arg_src_path, arg_dest_path],
      false);
  }

  remove(arg_path, arg_recursive) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ResponseParamsSpec,
      [arg_path, arg_recursive],
      false);
  }

  readMetadata(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec,
      [arg_path],
      false);
  }

  create(arg_path, arg_exclusive, arg_is_directory, arg_recursive) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ResponseParamsSpec,
      [arg_path, arg_exclusive, arg_is_directory, arg_recursive],
      false);
  }

  exists(arg_path, arg_is_directory) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ResponseParamsSpec,
      [arg_path, arg_is_directory],
      false);
  }

  readDirectory(arg_path, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec,
      null,
      [arg_path, arg_listener],
      false);
  }

  readDirectorySync(arg_path) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec,
      [arg_path],
      false);
  }

  write(arg_file_path, arg_blob, arg_position, arg_op_receiver, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_Write_ParamsSpec,
      null,
      [arg_file_path, arg_blob, arg_position, arg_op_receiver, arg_listener],
      false);
  }

  writeSync(arg_file_path, arg_blob, arg_position) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec,
      [arg_file_path, arg_blob, arg_position],
      false);
  }

  truncate(arg_file_path, arg_length, arg_op_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec,
      [arg_file_path, arg_length, arg_op_receiver],
      false);
  }

  truncateSync(arg_file_path, arg_length) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec,
      [arg_file_path, arg_length],
      false);
  }

  createSnapshotFile(arg_file_path) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec,
      [arg_file_path],
      false);
  }

  getPlatformPath(arg_file_path) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec,
      [arg_file_path],
      false);
  }

  registerBlob(arg_content_type, arg_url, arg_length, arg_expected_modification_time) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec,
      [arg_content_type, arg_url, arg_length, arg_expected_modification_time],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FileSystemManager.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FileSystemManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FileSystemManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FileSystemManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FileSystemManager', [
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
        
        // Try Method 0: Open
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Open (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ResolveURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveURL (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Move
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Move (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Copy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Copy (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Remove
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Remove (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReadMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadMetadata (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Exists
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Exists (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReadDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadDirectory (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ReadDirectorySync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadDirectorySync (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Write
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Write_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Write (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: WriteSync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteSync (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: Truncate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Truncate (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: TruncateSync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TruncateSync (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: CreateSnapshotFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSnapshotFile (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetPlatformPath
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPlatformPath (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RegisterBlob
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterBlob (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.open');
          const result = this.impl.open(params.arg_origin, params.arg_file_system_type);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_Open_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Open FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveURL');
          const result = this.impl.resolveURL(params.arg_filesystem_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_ResolveURL_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResolveURL FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.move');
          const result = this.impl.move(params.arg_src_path, params.arg_dest_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_Move_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Move FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copy');
          const result = this.impl.copy(params.arg_src_path, params.arg_dest_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_Copy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Copy FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.remove');
          const result = this.impl.remove(params.arg_path, params.arg_recursive);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_Remove_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Remove FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readMetadata');
          const result = this.impl.readMetadata(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_ReadMetadata_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadMetadata FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.arg_path, params.arg_exclusive, params.arg_is_directory, params.arg_recursive);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_Create_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Create FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exists');
          const result = this.impl.exists(params.arg_path, params.arg_is_directory);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_Exists_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Exists FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readDirectory');
          const result = this.impl.readDirectory(params.arg_path, params.arg_listener);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readDirectorySync');
          const result = this.impl.readDirectorySync(params.arg_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_ReadDirectorySync_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadDirectorySync FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Write_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.write');
          const result = this.impl.write(params.arg_file_path, params.arg_blob, params.arg_position, params.arg_op_receiver, params.arg_listener);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeSync');
          const result = this.impl.writeSync(params.arg_file_path, params.arg_blob, params.arg_position);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_WriteSync_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteSync FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.truncate');
          const result = this.impl.truncate(params.arg_file_path, params.arg_length, params.arg_op_receiver);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_Truncate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Truncate FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.truncateSync');
          const result = this.impl.truncateSync(params.arg_file_path, params.arg_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_TruncateSync_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TruncateSync FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSnapshotFile');
          const result = this.impl.createSnapshotFile(params.arg_file_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_CreateSnapshotFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateSnapshotFile FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPlatformPath');
          const result = this.impl.getPlatformPath(params.arg_file_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_GetPlatformPath_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPlatformPath FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerBlob');
          const result = this.impl.registerBlob(params.arg_content_type, params.arg_url, params.arg_length, params.arg_expected_modification_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FileSystemManager_RegisterBlob_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterBlob FAILED:', e));
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

mojo.internal.bindings.blink.mojom.FileSystemManagerReceiver = mojo.internal.bindings.blink.mojom.FileSystemManagerReceiver;

mojo.internal.bindings.blink.mojom.FileSystemManagerPtr = mojo.internal.bindings.blink.mojom.FileSystemManagerRemote;
mojo.internal.bindings.blink.mojom.FileSystemManagerRequest = mojo.internal.bindings.blink.mojom.FileSystemManagerPendingReceiver;

