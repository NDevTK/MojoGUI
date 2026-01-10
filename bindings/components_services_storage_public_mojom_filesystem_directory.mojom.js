// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/filesystem/directory.mojom
// Module: storage.mojom

'use strict';

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
};

storage.mojom.FileLockRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  release() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
             decoder.decodeStructInline(storage.mojom.FileLock_Release_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(storage.mojom.FileLock_Release_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.release');
          const result = this.impl.release();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.FileLock_Release_ResponseParamsSpec);
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
};

storage.mojom.DirectoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.Directory_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

  pathExists(path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.Directory_PathExists_ParamsSpec,
      storage.mojom.Directory_PathExists_ResponseParamsSpec,
      [path],
      false);
  }

  getEntries(path, mode) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.Directory_GetEntries_ParamsSpec,
      storage.mojom.Directory_GetEntries_ResponseParamsSpec,
      [path, mode],
      false);
  }

  openFile(path, mode, read_access, write_access) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.Directory_OpenFile_ParamsSpec,
      storage.mojom.Directory_OpenFile_ResponseParamsSpec,
      [path, mode, read_access, write_access],
      false);
  }

  createDirectory(path) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.Directory_CreateDirectory_ParamsSpec,
      storage.mojom.Directory_CreateDirectory_ResponseParamsSpec,
      [path],
      false);
  }

  deleteFile(path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.Directory_DeleteFile_ParamsSpec,
      storage.mojom.Directory_DeleteFile_ResponseParamsSpec,
      [path],
      false);
  }

  getFileInfo(path) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.Directory_GetFileInfo_ParamsSpec,
      storage.mojom.Directory_GetFileInfo_ResponseParamsSpec,
      [path],
      false);
  }

  getPathAccess(path) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.Directory_GetPathAccess_ParamsSpec,
      storage.mojom.Directory_GetPathAccess_ResponseParamsSpec,
      [path],
      false);
  }

  renameFile(old_path, new_path) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.Directory_RenameFile_ParamsSpec,
      storage.mojom.Directory_RenameFile_ResponseParamsSpec,
      [old_path, new_path],
      false);
  }

  lockFile(path) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
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
             decoder.decodeStructInline(storage.mojom.Directory_Clone_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_PathExists_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_GetEntries_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_OpenFile_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_CreateDirectory_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_DeleteFile_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_GetFileInfo_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_GetPathAccess_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_RenameFile_ParamsSpec.$);
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
             decoder.decodeStructInline(storage.mojom.Directory_LockFile_ParamsSpec.$);
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
          const params = decoder.decodeStructInline(storage.mojom.Directory_Clone_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_PathExists_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.pathExists');
          const result = this.impl.pathExists(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_PathExists_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_GetEntries_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getEntries');
          const result = this.impl.getEntries(params.path, params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_GetEntries_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_OpenFile_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openFile');
          const result = this.impl.openFile(params.path, params.mode, params.read_access, params.write_access);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_OpenFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_CreateDirectory_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.createDirectory');
          const result = this.impl.createDirectory(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_CreateDirectory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_DeleteFile_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.deleteFile');
          const result = this.impl.deleteFile(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_DeleteFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_GetFileInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getFileInfo');
          const result = this.impl.getFileInfo(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_GetFileInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_GetPathAccess_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getPathAccess');
          const result = this.impl.getPathAccess(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_GetPathAccess_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_RenameFile_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.renameFile');
          const result = this.impl.renameFile(params.old_path, params.new_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_RenameFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.Directory_LockFile_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.lockFile');
          const result = this.impl.lockFile(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.Directory_LockFile_ResponseParamsSpec);
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

storage.mojom.DirectoryReceiver = storage.mojom.DirectoryReceiver;

storage.mojom.DirectoryPtr = storage.mojom.DirectoryRemote;
storage.mojom.DirectoryRequest = storage.mojom.DirectoryPendingReceiver;

