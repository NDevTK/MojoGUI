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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.FileLock_Release_ParamsSpec.$.decode(message.payload);
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = storage.mojom.Directory_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
        case 1: {
          const params = storage.mojom.Directory_PathExists_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.Directory_GetEntries_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.Directory_OpenFile_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.Directory_CreateDirectory_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.Directory_DeleteFile_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.Directory_GetFileInfo_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.Directory_GetPathAccess_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.Directory_RenameFile_ParamsSpec.$.decode(message.payload);
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
          const params = storage.mojom.Directory_LockFile_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

storage.mojom.DirectoryReceiver = storage.mojom.DirectoryReceiver;

storage.mojom.DirectoryPtr = storage.mojom.DirectoryRemote;
storage.mojom.DirectoryRequest = storage.mojom.DirectoryPendingReceiver;

