// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/filesystem/file_system.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: FileSystemType
blink.mojom.FileSystemType = {
};

// Struct: FileSystemInfo
blink.mojom.FileSystemInfo = class {
  constructor(values = {}) {
    this.kTemporary = values.kTemporary !== undefined ? values.kTemporary : "";
  }
};

// Interface: FileSystemCancellableOperation
blink.mojom.FileSystemCancellableOperationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemCancellableOperation';
  }

  cancel() {
    // Method: Cancel
    return new Promise((resolve) => {
      // Call: Cancel()
      resolve({});
    });
  }

};

blink.mojom.FileSystemCancellableOperationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FileSystemOperationListener
blink.mojom.FileSystemOperationListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemOperationListener';
  }

  resultsRetrieved(entries, has_more) {
    // Method: ResultsRetrieved
    // Call: ResultsRetrieved(entries, has_more)
  }

  didWrite(byte_count, complete) {
    // Method: DidWrite
    // Call: DidWrite(byte_count, complete)
  }

  errorOccurred(error_code) {
    // Method: ErrorOccurred
    // Call: ErrorOccurred(error_code)
  }

};

blink.mojom.FileSystemOperationListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ReceivedSnapshotListener
blink.mojom.ReceivedSnapshotListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ReceivedSnapshotListener';
  }

  didReceiveSnapshotFile() {
    // Method: DidReceiveSnapshotFile
    // Call: DidReceiveSnapshotFile()
  }

};

blink.mojom.ReceivedSnapshotListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FileSystemManager
blink.mojom.FileSystemManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemManager';
  }

  open(origin, file_system_type) {
    // Method: Open
    return new Promise((resolve) => {
      // Call: Open(origin, file_system_type)
      resolve({});
    });
  }

  resolveURL(filesystem_url) {
    // Method: ResolveURL
    return new Promise((resolve) => {
      // Call: ResolveURL(filesystem_url)
      resolve({});
    });
  }

  move(src_path, dest_path) {
    // Method: Move
    return new Promise((resolve) => {
      // Call: Move(src_path, dest_path)
      resolve({});
    });
  }

  copy(src_path, dest_path) {
    // Method: Copy
    return new Promise((resolve) => {
      // Call: Copy(src_path, dest_path)
      resolve({});
    });
  }

  remove(path, recursive) {
    // Method: Remove
    return new Promise((resolve) => {
      // Call: Remove(path, recursive)
      resolve({});
    });
  }

  readMetadata(path) {
    // Method: ReadMetadata
    return new Promise((resolve) => {
      // Call: ReadMetadata(path)
      resolve({});
    });
  }

  create(path, exclusive, is_directory, recursive) {
    // Method: Create
    return new Promise((resolve) => {
      // Call: Create(path, exclusive, is_directory, recursive)
      resolve({});
    });
  }

  exists(path, is_directory) {
    // Method: Exists
    return new Promise((resolve) => {
      // Call: Exists(path, is_directory)
      resolve({});
    });
  }

  readDirectory(path, listener) {
    // Method: ReadDirectory
    // Call: ReadDirectory(path, listener)
  }

  readDirectorySync(path) {
    // Method: ReadDirectorySync
    return new Promise((resolve) => {
      // Call: ReadDirectorySync(path)
      resolve({});
    });
  }

  write(file_path, blob, position, op_receiver, listener) {
    // Method: Write
    // Call: Write(file_path, blob, position, op_receiver, listener)
  }

  writeSync(file_path, blob, position) {
    // Method: WriteSync
    return new Promise((resolve) => {
      // Call: WriteSync(file_path, blob, position)
      resolve({});
    });
  }

  truncate(file_path, length, op_receiver) {
    // Method: Truncate
    return new Promise((resolve) => {
      // Call: Truncate(file_path, length, op_receiver)
      resolve({});
    });
  }

  truncateSync(file_path, length) {
    // Method: TruncateSync
    return new Promise((resolve) => {
      // Call: TruncateSync(file_path, length)
      resolve({});
    });
  }

  createSnapshotFile(file_path) {
    // Method: CreateSnapshotFile
    return new Promise((resolve) => {
      // Call: CreateSnapshotFile(file_path)
      resolve({});
    });
  }

  getPlatformPath(file_path) {
    // Method: GetPlatformPath
    return new Promise((resolve) => {
      // Call: GetPlatformPath(file_path)
      resolve({});
    });
  }

  registerBlob(content_type, url, length, expected_modification_time) {
    // Method: RegisterBlob
    return new Promise((resolve) => {
      // Call: RegisterBlob(content_type, url, length, expected_modification_time)
      resolve({});
    });
  }

};

blink.mojom.FileSystemManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
