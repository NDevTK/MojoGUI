// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_storage.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: Status
media.mojom.Status = {
};

// Enum: Status
media.mojom.Status = {
};

// Interface: CdmStorage
media.mojom.CdmStoragePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmStorage';
  }

  open(file_name) {
    // Method: Open
    return new Promise((resolve) => {
      // Call: Open(file_name)
      resolve({});
    });
  }

};

media.mojom.CdmStorageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CdmFile
media.mojom.CdmFilePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmFile';
  }

  read() {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read()
      resolve({});
    });
  }

  write(data) {
    // Method: Write
    return new Promise((resolve) => {
      // Call: Write(data)
      resolve({});
    });
  }

};

media.mojom.CdmFileRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
