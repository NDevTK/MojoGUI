// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/cdm_storage.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: Status
media.mojom.Status = {
  kSuccess: 0,
};

// Enum: Status
media.mojom.Status = {
  kSuccess: 0,
};

// Interface: CdmStorage
media.mojom.CdmStoragePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.CdmStorage';
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

};

media.mojom.CdmFileRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
