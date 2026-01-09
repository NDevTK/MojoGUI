// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/file_system_access/file_system_access_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WellKnownDirectory
blink.mojom.WellKnownDirectory = {
};

// Struct: ChooseFileSystemEntryAcceptsOption
blink.mojom.ChooseFileSystemEntryAcceptsOption = class {
  constructor(values = {}) {
    this.extensions = values.extensions !== undefined ? values.extensions : "";
  }
};

// Struct: AcceptsTypesInfo
blink.mojom.AcceptsTypesInfo = class {
  constructor(values = {}) {
    this.include_accepts_all = values.include_accepts_all !== undefined ? values.include_accepts_all : false;
  }
};

// Struct: OpenFilePickerOptions
blink.mojom.OpenFilePickerOptions = class {
  constructor(values = {}) {
    this.can_select_multiple_files = values.can_select_multiple_files !== undefined ? values.can_select_multiple_files : false;
  }
};

// Struct: SaveFilePickerOptions
blink.mojom.SaveFilePickerOptions = class {
  constructor(values = {}) {
    this.suggested_name = values.suggested_name !== undefined ? values.suggested_name : "";
  }
};

// Struct: DirectoryPickerOptions
blink.mojom.DirectoryPickerOptions = class {
  constructor(values = {}) {
    this.permission_mode = values.permission_mode !== undefined ? values.permission_mode : null;
  }
};

// Struct: FilePickerOptions
blink.mojom.FilePickerOptions = class {
  constructor(values = {}) {
    this.start_in_options = values.start_in_options !== undefined ? values.start_in_options : "";
  }
};

// Interface: FileSystemAccessManager
blink.mojom.FileSystemAccessManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileSystemAccessManager';
  }

  getSandboxedFileSystem() {
    // Method: GetSandboxedFileSystem
    return new Promise((resolve) => {
      // Call: GetSandboxedFileSystem()
      resolve({});
    });
  }

  getSandboxedFileSystemForDevtools(directory_path_components) {
    // Method: GetSandboxedFileSystemForDevtools
    return new Promise((resolve) => {
      // Call: GetSandboxedFileSystemForDevtools(directory_path_components)
      resolve({});
    });
  }

  chooseEntries(options) {
    // Method: ChooseEntries
    return new Promise((resolve) => {
      // Call: ChooseEntries(options)
      resolve({});
    });
  }

  getFileHandleFromToken(token, file_handle) {
    // Method: GetFileHandleFromToken
    // Call: GetFileHandleFromToken(token, file_handle)
  }

  getDirectoryHandleFromToken(token, directory_handle) {
    // Method: GetDirectoryHandleFromToken
    // Call: GetDirectoryHandleFromToken(token, directory_handle)
  }

  getEntryFromDataTransferToken(token) {
    // Method: GetEntryFromDataTransferToken
    return new Promise((resolve) => {
      // Call: GetEntryFromDataTransferToken(token)
      resolve({});
    });
  }

  bindObserverHost(observer_host) {
    // Method: BindObserverHost
    // Call: BindObserverHost(observer_host)
  }

};

blink.mojom.FileSystemAccessManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
