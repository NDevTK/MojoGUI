// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/filesystem/directory.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


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

// Interface: FileLock
storage.mojom.FileLock = {};

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
      []);
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

// ParamsSpec for Release
storage.mojom.FileLock_Release_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.FileLock.Release_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.FileLock_Release_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.FileLock.Release_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.FileLockPtr = storage.mojom.FileLockRemote;
storage.mojom.FileLockRequest = storage.mojom.FileLockPendingReceiver;


// Interface: Directory
storage.mojom.Directory = {};

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
      [receiver]);
  }

  pathExists(path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.Directory_PathExists_ParamsSpec,
      storage.mojom.Directory_PathExists_ResponseParamsSpec,
      [path]);
  }

  getEntries(path, mode) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      storage.mojom.Directory_GetEntries_ParamsSpec,
      storage.mojom.Directory_GetEntries_ResponseParamsSpec,
      [path, mode]);
  }

  openFile(path, mode, read_access, write_access) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      storage.mojom.Directory_OpenFile_ParamsSpec,
      storage.mojom.Directory_OpenFile_ResponseParamsSpec,
      [path, mode, read_access, write_access]);
  }

  createDirectory(path) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      storage.mojom.Directory_CreateDirectory_ParamsSpec,
      storage.mojom.Directory_CreateDirectory_ResponseParamsSpec,
      [path]);
  }

  deleteFile(path) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      storage.mojom.Directory_DeleteFile_ParamsSpec,
      storage.mojom.Directory_DeleteFile_ResponseParamsSpec,
      [path]);
  }

  getFileInfo(path) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      storage.mojom.Directory_GetFileInfo_ParamsSpec,
      storage.mojom.Directory_GetFileInfo_ResponseParamsSpec,
      [path]);
  }

  getPathAccess(path) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      storage.mojom.Directory_GetPathAccess_ParamsSpec,
      storage.mojom.Directory_GetPathAccess_ResponseParamsSpec,
      [path]);
  }

  renameFile(old_path, new_path) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      storage.mojom.Directory_RenameFile_ParamsSpec,
      storage.mojom.Directory_RenameFile_ResponseParamsSpec,
      [old_path, new_path]);
  }

  lockFile(path) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      storage.mojom.Directory_LockFile_ParamsSpec,
      storage.mojom.Directory_LockFile_ResponseParamsSpec,
      [path]);
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

// ParamsSpec for Clone
storage.mojom.Directory_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PathExists
storage.mojom.Directory_PathExists_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.PathExists_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_PathExists_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.PathExists_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'exists', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetEntries
storage.mojom.Directory_GetEntries_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetEntries_Params',
      packedSize: 24,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_GetEntries_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetEntries_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFile
storage.mojom.Directory_OpenFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.OpenFile_Params',
      packedSize: 40,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'read_access', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'write_access', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_OpenFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.OpenFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateDirectory
storage.mojom.Directory_CreateDirectory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.CreateDirectory_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_CreateDirectory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.CreateDirectory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteFile
storage.mojom.Directory_DeleteFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.DeleteFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_DeleteFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.DeleteFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFileInfo
storage.mojom.Directory_GetFileInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetFileInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_GetFileInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetFileInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPathAccess
storage.mojom.Directory_GetPathAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetPathAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_GetPathAccess_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.GetPathAccess_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RenameFile
storage.mojom.Directory_RenameFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.RenameFile_Params',
      packedSize: 24,
      fields: [
        { name: 'old_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'new_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_RenameFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.RenameFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LockFile
storage.mojom.Directory_LockFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.LockFile_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.Directory_LockFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.Directory.LockFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'lock', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.DirectoryPtr = storage.mojom.DirectoryRemote;
storage.mojom.DirectoryRequest = storage.mojom.DirectoryPendingReceiver;

