// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_directory_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: FileSystemAccessEntry
blink.mojom.FileSystemAccessEntry = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Interface: FileSystemAccessDirectoryEntriesListener
blink.mojom.FileSystemAccessDirectoryEntriesListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessDirectoryEntriesListener';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  didReadDirectory(result, entries, has_more_entries) {
    // Method: DidReadDirectory
    // Call: DidReadDirectory(result, entries, has_more_entries)
  }

};

blink.mojom.FileSystemAccessDirectoryEntriesListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FileSystemAccessDirectoryHandle
blink.mojom.FileSystemAccessDirectoryHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessDirectoryHandle';
  }

  getPermissionStatus(mode) {
    // Method: GetPermissionStatus
    return new Promise((resolve) => {
      // Call: GetPermissionStatus(mode)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  requestPermission(mode) {
    // Method: RequestPermission
    return new Promise((resolve) => {
      // Call: RequestPermission(mode)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  getFile(basename, create) {
    // Method: GetFile
    return new Promise((resolve) => {
      // Call: GetFile(basename, create)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  getDirectory(basename, create) {
    // Method: GetDirectory
    return new Promise((resolve) => {
      // Call: GetDirectory(basename, create)
      resolve({});
    });
  }

  getEntries(listener) {
    // Method: GetEntries
    // Call: GetEntries(listener)
  }

  rename(new_entry_name) {
    // Method: Rename
    return new Promise((resolve) => {
      // Call: Rename(new_entry_name)
      resolve({});
    });
  }

  move(destination_directory, new_entry_name) {
    // Method: Move
    return new Promise((resolve) => {
      // Call: Move(destination_directory, new_entry_name)
      resolve({});
    });
  }

  remove(recurse) {
    // Method: Remove
    return new Promise((resolve) => {
      // Call: Remove(recurse)
      resolve({});
    });
  }

  removeEntry(basename, recurse) {
    // Method: RemoveEntry
    return new Promise((resolve) => {
      // Call: RemoveEntry(basename, recurse)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  resolve(possible_child) {
    // Method: Resolve
    return new Promise((resolve) => {
      // Call: Resolve(possible_child)
      resolve({});
    });
  }

  transfer(token) {
    // Method: Transfer
    // Call: Transfer(token)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  getUniqueId() {
    // Method: GetUniqueId
    return new Promise((resolve) => {
      // Call: GetUniqueId()
      resolve({});
    });
  }

  identifiers(`id`) {
    // Method: identifiers
    // Call: identifiers(`id`)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  getCloudIdentifiers() {
    // Method: GetCloudIdentifiers
    return new Promise((resolve) => {
      // Call: GetCloudIdentifiers()
      resolve({});
    });
  }

};

blink.mojom.FileSystemAccessDirectoryHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
