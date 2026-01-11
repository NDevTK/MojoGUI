// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/filesystem/directory.mojom
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
var mojo_base = mojo_base || {};

storage.mojom.GetEntriesModeSpec = { $: mojo.internal.Enum() };
storage.mojom.FileOpenModeSpec = { $: mojo.internal.Enum() };
storage.mojom.FileReadAccessSpec = { $: mojo.internal.Enum() };
storage.mojom.FileWriteAccessSpec = { $: mojo.internal.Enum() };
storage.mojom.StrictRelativePathSpec = { $: {} };
storage.mojom.PathAccessInfoSpec = { $: {} };
storage.mojom.FileLock = {};
storage.mojom.FileLock.$interfaceName = 'storage.mojom.FileLock';
storage.mojom.FileLock_Release_ParamsSpec = { $: {} };
storage.mojom.FileLock_Release_ResponseParamsSpec = { $: {} };
storage.mojom.Directory = {};
storage.mojom.Directory.$interfaceName = 'storage.mojom.Directory';
storage.mojom.Directory_Clone_ParamsSpec = { $: {} };
storage.mojom.Directory_PathExists_ParamsSpec = { $: {} };
storage.mojom.Directory_PathExists_ResponseParamsSpec = { $: {} };
storage.mojom.Directory_GetEntries_ParamsSpec = { $: {} };
storage.mojom.Directory_GetEntries_ResponseParamsSpec = { $: {} };
storage.mojom.Directory_OpenFile_ParamsSpec = { $: {} };
storage.mojom.Directory_OpenFile_ResponseParamsSpec = { $: {} };
storage.mojom.Directory_CreateDirectory_ParamsSpec = { $: {} };
storage.mojom.Directory_CreateDirectory_ResponseParamsSpec = { $: {} };
storage.mojom.Directory_DeleteFile_ParamsSpec = { $: {} };
storage.mojom.Directory_DeleteFile_ResponseParamsSpec = { $: {} };
storage.mojom.Directory_GetFileInfo_ParamsSpec = { $: {} };
storage.mojom.Directory_GetFileInfo_ResponseParamsSpec = { $: {} };
storage.mojom.Directory_GetPathAccess_ParamsSpec = { $: {} };
storage.mojom.Directory_GetPathAccess_ResponseParamsSpec = { $: {} };
storage.mojom.Directory_RenameFile_ParamsSpec = { $: {} };
storage.mojom.Directory_RenameFile_ResponseParamsSpec = { $: {} };
storage.mojom.Directory_LockFile_ParamsSpec = { $: {} };
storage.mojom.Directory_LockFile_ResponseParamsSpec = { $: {} };

// Enum: GetEntriesMode
storage.mojom.GetEntriesMode = {
  kFilesOnly: 0,
  kFilesAndDirectories: 1,
};

// Enum: FileOpenMode
storage.mojom.FileOpenMode = {
  kOpenIfExists: 0,
  kCreateAndOpenOnlyIfNotExists: 1,
  kAlwaysOpen: 2,
  kAlwaysCreate: 3,
  kOpenIfExistsAndTruncate: 4,
};

// Enum: FileReadAccess
storage.mojom.FileReadAccess = {
  kReadNotAllowed: 0,
  kReadAllowed: 1,
};

// Enum: FileWriteAccess
storage.mojom.FileWriteAccess = {
  kWriteNotAllowed: 0,
  kWriteAllowed: 1,
  kAppendOnly: 2,
};

// Struct: StrictRelativePath
mojo.internal.Struct(
    storage.mojom.StrictRelativePathSpec, 'storage.mojom.StrictRelativePath', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PathAccessInfo
mojo.internal.Struct(
    storage.mojom.PathAccessInfoSpec, 'storage.mojom.PathAccessInfo', [
      mojo.internal.StructField('can_read', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_write', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: FileLock
mojo.internal.Struct(
    storage.mojom.FileLock_Release_ParamsSpec, 'storage.mojom.FileLock_Release_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    storage.mojom.FileLock_Release_ResponseParamsSpec, 'storage.mojom.FileLock_Release_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

storage.mojom.FileLockPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.FileLockRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.FileLock';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.FileLockPendingReceiver,
      handle);
    this.$ = new storage.mojom.FileLockRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  release() {
    return this.$.release();
  }
};

storage.mojom.FileLockRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileLock', [
      { explicit: null },
    ]);
  }

  release() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.FileLock_Release_ParamsSpec,
      storage.mojom.FileLock_Release_ResponseParamsSpec,
      [],
      false);
  }

};

storage.mojom.FileLock.getRemote = function() {
  let remote = new storage.mojom.FileLockRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.FileLock',
    'context');
  return remote.$;
};

storage.mojom.FileLockReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileLock', [
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
        
        // Try Method 0: Release
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.FileLock_Release_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Release (0)');
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
          const params = decoder.decodeStructInline(storage.mojom.FileLock_Release_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.release');
          const result = this.impl.release();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.FileLock_Release_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Release FAILED:', e));
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

storage.mojom.FileLockReceiver = storage.mojom.FileLockReceiver;

storage.mojom.FileLockPtr = storage.mojom.FileLockRemote;
storage.mojom.FileLockRequest = storage.mojom.FileLockPendingReceiver;


// Interface: Directory
mojo.internal.Struct(
    storage.mojom.Directory_Clone_ParamsSpec, 'storage.mojom.Directory_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.DirectorySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_PathExists_ParamsSpec, 'storage.mojom.Directory_PathExists_Params', [
      mojo.internal.StructField('path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_PathExists_ResponseParamsSpec, 'storage.mojom.Directory_PathExists_ResponseParams', [
      mojo.internal.StructField('exists', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_GetEntries_ParamsSpec, 'storage.mojom.Directory_GetEntries_Params', [
      mojo.internal.StructField('path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, storage.mojom.GetEntriesModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.Directory_GetEntries_ResponseParamsSpec, 'storage.mojom.Directory_GetEntries_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entries', 8, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.Directory_OpenFile_ParamsSpec, 'storage.mojom.Directory_OpenFile_Params', [
      mojo.internal.StructField('path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 8, 0, storage.mojom.FileOpenModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('read_access', 16, 0, storage.mojom.FileReadAccessSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('write_access', 24, 0, storage.mojom.FileWriteAccessSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    storage.mojom.Directory_OpenFile_ResponseParamsSpec, 'storage.mojom.Directory_OpenFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file', 8, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.Directory_CreateDirectory_ParamsSpec, 'storage.mojom.Directory_CreateDirectory_Params', [
      mojo.internal.StructField('path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_CreateDirectory_ResponseParamsSpec, 'storage.mojom.Directory_CreateDirectory_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_DeleteFile_ParamsSpec, 'storage.mojom.Directory_DeleteFile_Params', [
      mojo.internal.StructField('path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_DeleteFile_ResponseParamsSpec, 'storage.mojom.Directory_DeleteFile_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_GetFileInfo_ParamsSpec, 'storage.mojom.Directory_GetFileInfo_Params', [
      mojo.internal.StructField('path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_GetFileInfo_ResponseParamsSpec, 'storage.mojom.Directory_GetFileInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojo_base.mojom.FileInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_GetPathAccess_ParamsSpec, 'storage.mojom.Directory_GetPathAccess_Params', [
      mojo.internal.StructField('path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_GetPathAccess_ResponseParamsSpec, 'storage.mojom.Directory_GetPathAccess_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, storage.mojom.PathAccessInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_RenameFile_ParamsSpec, 'storage.mojom.Directory_RenameFile_Params', [
      mojo.internal.StructField('old_path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_path', 8, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.Directory_RenameFile_ResponseParamsSpec, 'storage.mojom.Directory_RenameFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_LockFile_ParamsSpec, 'storage.mojom.Directory_LockFile_Params', [
      mojo.internal.StructField('path', 0, 0, storage.mojom.StrictRelativePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.Directory_LockFile_ResponseParamsSpec, 'storage.mojom.Directory_LockFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lock', 8, 0, mojo.internal.InterfaceProxy(storage.mojom.FileLockSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

storage.mojom.DirectoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.DirectoryRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.Directory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.DirectoryPendingReceiver,
      handle);
    this.$ = new storage.mojom.DirectoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  clone(receiver) {
    return this.$.clone(receiver);
  }
  pathExists(path) {
    return this.$.pathExists(path);
  }
  getEntries(path, mode) {
    return this.$.getEntries(path, mode);
  }
  openFile(path, mode, read_access, write_access) {
    return this.$.openFile(path, mode, read_access, write_access);
  }
  createDirectory(path) {
    return this.$.createDirectory(path);
  }
  deleteFile(path) {
    return this.$.deleteFile(path);
  }
  getFileInfo(path) {
    return this.$.getFileInfo(path);
  }
  getPathAccess(path) {
    return this.$.getPathAccess(path);
  }
  renameFile(old_path, new_path) {
    return this.$.renameFile(old_path, new_path);
  }
  lockFile(path) {
    return this.$.lockFile(path);
  }
};

storage.mojom.DirectoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Directory', [
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

  clone(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.Directory_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

  pathExists(path) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.Directory_PathExists_ParamsSpec,
      storage.mojom.Directory_PathExists_ResponseParamsSpec,
      [path],
      false);
  }

  getEntries(path, mode) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      storage.mojom.Directory_GetEntries_ParamsSpec,
      storage.mojom.Directory_GetEntries_ResponseParamsSpec,
      [path, mode],
      false);
  }

  openFile(path, mode, read_access, write_access) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      storage.mojom.Directory_OpenFile_ParamsSpec,
      storage.mojom.Directory_OpenFile_ResponseParamsSpec,
      [path, mode, read_access, write_access],
      false);
  }

  createDirectory(path) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      storage.mojom.Directory_CreateDirectory_ParamsSpec,
      storage.mojom.Directory_CreateDirectory_ResponseParamsSpec,
      [path],
      false);
  }

  deleteFile(path) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      storage.mojom.Directory_DeleteFile_ParamsSpec,
      storage.mojom.Directory_DeleteFile_ResponseParamsSpec,
      [path],
      false);
  }

  getFileInfo(path) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      storage.mojom.Directory_GetFileInfo_ParamsSpec,
      storage.mojom.Directory_GetFileInfo_ResponseParamsSpec,
      [path],
      false);
  }

  getPathAccess(path) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      storage.mojom.Directory_GetPathAccess_ParamsSpec,
      storage.mojom.Directory_GetPathAccess_ResponseParamsSpec,
      [path],
      false);
  }

  renameFile(old_path, new_path) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      storage.mojom.Directory_RenameFile_ParamsSpec,
      storage.mojom.Directory_RenameFile_ResponseParamsSpec,
      [old_path, new_path],
      false);
  }

  lockFile(path) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      storage.mojom.Directory_LockFile_ParamsSpec,
      storage.mojom.Directory_LockFile_ResponseParamsSpec,
      [path],
      false);
  }

};

storage.mojom.Directory.getRemote = function() {
  let remote = new storage.mojom.DirectoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.Directory',
    'context');
  return remote.$;
};

storage.mojom.DirectoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Directory', [
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
        
        // Try Method 0: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_Clone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: PathExists
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_PathExists_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PathExists (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetEntries
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_GetEntries_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEntries (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OpenFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_OpenFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFile (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateDirectory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_CreateDirectory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDirectory (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DeleteFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_DeleteFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteFile (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetFileInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_GetFileInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFileInfo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetPathAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_GetPathAccess_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPathAccess (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RenameFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_RenameFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenameFile (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: LockFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.Directory_LockFile_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LockFile (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(storage.mojom.Directory_Clone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_PathExists_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pathExists');
          const result = this.impl.pathExists(params.path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_PathExists_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PathExists FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_GetEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEntries');
          const result = this.impl.getEntries(params.path, params.mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_GetEntries_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEntries FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_OpenFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFile');
          const result = this.impl.openFile(params.path, params.mode, params.read_access, params.write_access);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_OpenFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenFile FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_CreateDirectory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDirectory');
          const result = this.impl.createDirectory(params.path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_CreateDirectory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateDirectory FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_DeleteFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteFile');
          const result = this.impl.deleteFile(params.path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_DeleteFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteFile FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_GetFileInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFileInfo');
          const result = this.impl.getFileInfo(params.path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_GetFileInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetFileInfo FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_GetPathAccess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPathAccess');
          const result = this.impl.getPathAccess(params.path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_GetPathAccess_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPathAccess FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_RenameFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renameFile');
          const result = this.impl.renameFile(params.old_path, params.new_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_RenameFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RenameFile FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_LockFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.lockFile');
          const result = this.impl.lockFile(params.path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_LockFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] LockFile FAILED:', e));
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

storage.mojom.DirectoryReceiver = storage.mojom.DirectoryReceiver;

storage.mojom.DirectoryPtr = storage.mojom.DirectoryRemote;
storage.mojom.DirectoryRequest = storage.mojom.DirectoryPendingReceiver;

