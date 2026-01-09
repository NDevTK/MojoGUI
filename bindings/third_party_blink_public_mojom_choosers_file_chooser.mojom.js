// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/file_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Mode
blink.mojom.Mode = {
};

// Struct: FileChooserParams
blink.mojom.FileChooserParams = class {
  constructor(values = {}) {
    this.kOpen = values.kOpen !== undefined ? values.kOpen : null;
    this.kOpenMultiple = values.kOpenMultiple !== undefined ? values.kOpenMultiple : null;
    this.multiple = values.multiple !== undefined ? values.multiple : null;
    this.kUploadFolder = values.kUploadFolder !== undefined ? values.kUploadFolder : null;
    this.kSave = values.kSave !== undefined ? values.kSave : null;
  }
};

// Struct: NativeFileInfo
blink.mojom.NativeFileInfo = class {
  constructor(values = {}) {
    this.such = values.such !== undefined ? values.such : null;
    this.file_path = values.file_path !== undefined ? values.file_path : null;
    this.base_subdirs = values.base_subdirs !== undefined ? values.base_subdirs : "";
  }
};

// Struct: FileSystemFileInfo
blink.mojom.FileSystemFileInfo = class {
  constructor(values = {}) {
  }
};

// Struct: FileChooserResult
blink.mojom.FileChooserResult = class {
  constructor(values = {}) {
    this.files = values.files !== undefined ? values.files : [];
    this.base_directory = values.base_directory !== undefined ? values.base_directory : null;
  }
};

// Interface: FileChooser
blink.mojom.FileChooserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FileChooser';
  }

  openFileChooser(params) {
    // Method: OpenFileChooser
    return new Promise((resolve) => {
      // Call: OpenFileChooser(params)
      resolve({});
    });
  }

  enumerateChosenDirectory(directory_path) {
    // Method: EnumerateChosenDirectory
    return new Promise((resolve) => {
      // Call: EnumerateChosenDirectory(directory_path)
      resolve({});
    });
  }

};

blink.mojom.FileChooserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
