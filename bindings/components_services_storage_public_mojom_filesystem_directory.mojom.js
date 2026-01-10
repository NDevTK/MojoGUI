// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/filesystem/directory.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: GetEntriesMode
storage.mojom.mojom.GetEntriesMode = {
  kFilesOnly: 0,
  kFilesAndDirectories: 1,
};
storage.mojom.mojom.GetEntriesModeSpec = { $: mojo.internal.Enum() };

// Enum: FileOpenMode
storage.mojom.mojom.FileOpenMode = {
  kOpenIfExists: 0,
  kCreateAndOpenOnlyIfNotExists: 1,
  kAlwaysOpen: 2,
  kAlwaysCreate: 3,
  kOpenIfExistsAndTruncate: 4,
};
storage.mojom.mojom.FileOpenModeSpec = { $: mojo.internal.Enum() };

// Enum: FileReadAccess
storage.mojom.mojom.FileReadAccess = {
  kReadNotAllowed: 0,
  kReadAllowed: 1,
};
storage.mojom.mojom.FileReadAccessSpec = { $: mojo.internal.Enum() };

// Enum: FileWriteAccess
storage.mojom.mojom.FileWriteAccess = {
  kWriteNotAllowed: 0,
  kWriteAllowed: 1,
  kAppendOnly: 2,
};
storage.mojom.mojom.FileWriteAccessSpec = { $: mojo.internal.Enum() };

// Struct: StrictRelativePath
storage.mojom.mojom.StrictRelativePathSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.StrictRelativePath',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PathAccessInfo
storage.mojom.mojom.PathAccessInfoSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.PathAccessInfo',
      packedSize: 16,
      fields: [
        { name: 'can_read', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_write', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: FileLock
storage.mojom.mojom.FileLock = {};

storage.mojom.mojom.FileLockPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.FileLockRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.FileLock';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.FileLockPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.FileLockRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.FileLockRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  release() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.FileLock_Release_ParamsSpec,
      storage.mojom.mojom.FileLock_Release_ResponseParamsSpec,
      []);
  }

};

storage.mojom.mojom.FileLock.getRemote = function() {
  let remote = new storage.mojom.mojom.FileLockRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.FileLock',
    'context');
  return remote.$;
};

// ParamsSpec for Release
storage.mojom.mojom.FileLock_Release_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.FileLock.Release_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

storage.mojom.mojom.FileLock_Release_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.FileLock.Release_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.FileLockPtr = storage.mojom.mojom.FileLockRemote;
storage.mojom.mojom.FileLockRequest = storage.mojom.mojom.FileLockPendingReceiver;


// Interface: Directory
storage.mojom.mojom.Directory = {};

storage.mojom.mojom.DirectoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.DirectoryRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.Directory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.DirectoryPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.DirectoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.DirectoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.Directory_Clone_ParamsSpec,
      null,
      [receiver]);
  }

  pathExists(path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.Directory_PathExists_ParamsSpec,
      storage.mojom.mojom.Directory_PathExists_ResponseParamsSpec,
      [path]);
  }

  getEntries(path, mode) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.mojom.Directory_GetEntries_ParamsSpec,
      storage.mojom.mojom.Directory_GetEntries_ResponseParamsSpec,
      [path, mode]);
  }

  openFile(path, mode, read_access, write_access) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.mojom.Directory_OpenFile_ParamsSpec,
      storage.mojom.mojom.Directory_OpenFile_ResponseParamsSpec,
      [path, mode, read_access, write_access]);
  }

  createDirectory(path) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.mojom.Directory_CreateDirectory_ParamsSpec,
      storage.mojom.mojom.Directory_CreateDirectory_ResponseParamsSpec,
      [path]);
  }

  deleteFile(path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.mojom.Directory_DeleteFile_ParamsSpec,
      storage.mojom.mojom.Directory_DeleteFile_ResponseParamsSpec,
      [path]);
  }

  getFileInfo(path) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.mojom.Directory_GetFileInfo_ParamsSpec,
      storage.mojom.mojom.Directory_GetFileInfo_ResponseParamsSpec,
      [path]);
  }

  getPathAccess(path) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.mojom.Directory_GetPathAccess_ParamsSpec,
      storage.mojom.mojom.Directory_GetPathAccess_ResponseParamsSpec,
      [path]);
  }

  renameFile(old_path, new_path) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.mojom.Directory_RenameFile_ParamsSpec,
      storage.mojom.mojom.Directory_RenameFile_ResponseParamsSpec,
      [old_path, new_path]);
  }

  lockFile(path) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.mojom.Directory_LockFile_ParamsSpec,
      storage.mojom.mojom.Directory_LockFile_ResponseParamsSpec,
      [path]);
  }

};

storage.mojom.mojom.Directory.getRemote = function() {
  let remote = new storage.mojom.mojom.DirectoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.Directory',
    'context');
  return remote.$;
};

// ParamsSpec for Clone
storage.mojom.mojom.Directory_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(storage.mojom.DirectoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PathExists
storage.mojom.mojom.Directory_PathExists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.PathExists_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.Directory_PathExists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.PathExists_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'exists', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetEntries
storage.mojom.mojom.Directory_GetEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetEntries_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.GetEntriesModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.mojom.Directory_GetEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetEntries_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OpenFile
storage.mojom.mojom.Directory_OpenFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.OpenFile_Params',
      packedSize: 32,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.FileOpenModeSpec, nullable: false, minVersion: 0 },
        { name: 'read_access', packedOffset: 12, packedBitOffset: 0, type: storage.mojom.FileReadAccessSpec, nullable: false, minVersion: 0 },
        { name: 'write_access', packedOffset: 16, packedBitOffset: 0, type: storage.mojom.FileWriteAccessSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

storage.mojom.mojom.Directory_OpenFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.OpenFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateDirectory
storage.mojom.mojom.Directory_CreateDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.CreateDirectory_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.Directory_CreateDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.CreateDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeleteFile
storage.mojom.mojom.Directory_DeleteFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.DeleteFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.Directory_DeleteFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.DeleteFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFileInfo
storage.mojom.mojom.Directory_GetFileInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetFileInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.Directory_GetFileInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetFileInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPathAccess
storage.mojom.mojom.Directory_GetPathAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetPathAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.Directory_GetPathAccess_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetPathAccess_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.PathAccessInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenameFile
storage.mojom.mojom.Directory_RenameFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.RenameFile_Params',
      packedSize: 24,
      fields: [
        { name: 'old_path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
        { name: 'new_path', packedOffset: 8, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.mojom.Directory_RenameFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.RenameFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LockFile
storage.mojom.mojom.Directory_LockFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.LockFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: storage.mojom.StrictRelativePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

storage.mojom.mojom.Directory_LockFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.LockFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileErrorSpec, nullable: false, minVersion: 0 },
        { name: 'lock', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(storage.mojom.FileLockRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.DirectoryPtr = storage.mojom.mojom.DirectoryRemote;
storage.mojom.mojom.DirectoryRequest = storage.mojom.mojom.DirectoryPendingReceiver;

