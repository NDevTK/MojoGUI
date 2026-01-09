// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/public/mojom/filesystem/directory.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: GetEntriesMode
storage.mojom.GetEntriesMode = {
};

// Enum: FileOpenMode
storage.mojom.FileOpenMode = {
  creating: 0,
  overwriting: 1,
  truncating: 2,
};

// Enum: FileReadAccess
storage.mojom.FileReadAccess = {
};

// Enum: FileWriteAccess
storage.mojom.FileWriteAccess = {
};

// Struct: StrictRelativePath
storage.mojom.StrictRelativePath = class {
  constructor(values = {}) {
    this.path = values.path !== undefined ? values.path : null;
  }
};

// Struct: PathAccessInfo
storage.mojom.PathAccessInfo = class {
  constructor(values = {}) {
    this.can_write = values.can_write !== undefined ? values.can_write : false;
  }
};

// Interface: FileLock
storage.mojom.FileLockPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.FileLock';
  }

};

storage.mojom.FileLockRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Directory
storage.mojom.DirectoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'storage.mojom.Directory';
  }

  clone(receiver) {
    // Method: Clone
    // Call: Clone(receiver)
  }

  pathExists(path) {
    // Method: PathExists
    return new Promise((resolve) => {
      // Call: PathExists(path)
      resolve({});
    });
  }

  getEntries(path, mode) {
    // Method: GetEntries
    return new Promise((resolve) => {
      // Call: GetEntries(path, mode)
      resolve({});
    });
  }

  openFile(path, mode, read_access, write_access) {
    // Method: OpenFile
    return new Promise((resolve) => {
      // Call: OpenFile(path, mode, read_access, write_access)
      resolve({});
    });
  }

  createDirectory(path) {
    // Method: CreateDirectory
    return new Promise((resolve) => {
      // Call: CreateDirectory(path)
      resolve({});
    });
  }

  deleteFile(path) {
    // Method: DeleteFile
    return new Promise((resolve) => {
      // Call: DeleteFile(path)
      resolve({});
    });
  }

  getFileInfo(path) {
    // Method: GetFileInfo
    return new Promise((resolve) => {
      // Call: GetFileInfo(path)
      resolve({});
    });
  }

  getPathAccess(path) {
    // Method: GetPathAccess
    return new Promise((resolve) => {
      // Call: GetPathAccess(path)
      resolve({});
    });
  }

  renameFile(old_path, new_path) {
    // Method: RenameFile
    return new Promise((resolve) => {
      // Call: RenameFile(old_path, new_path)
      resolve({});
    });
  }

  lockFile(path) {
    // Method: LockFile
    return new Promise((resolve) => {
      // Call: LockFile(path)
      resolve({});
    });
  }

};

storage.mojom.DirectoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
