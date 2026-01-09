// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/select_file_dialog.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: SelectFileDialogType
remote_cocoa.mojom.SelectFileDialogType = {
};

// Struct: SelectFileTypeInfo
remote_cocoa.mojom.SelectFileTypeInfo = class {
  constructor(values = {}) {
    this.keep_extension_visible = values.keep_extension_visible !== undefined ? values.keep_extension_visible : false;
  }
};

// Interface: SelectFileDialog
remote_cocoa.mojom.SelectFileDialogPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.SelectFileDialog';
  }

  show(type, title, file_path, file_types, file_type_index, default_extension) {
    // Method: Show
    return new Promise((resolve) => {
      // Call: Show(type, title, file_path, file_types, file_type_index, default_extension)
      resolve({});
    });
  }

};

remote_cocoa.mojom.SelectFileDialogRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
