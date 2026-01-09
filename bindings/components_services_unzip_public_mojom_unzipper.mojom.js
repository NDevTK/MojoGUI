// Auto-generated MojoJS binding
// Source: chromium_src/components/services/unzip/public/mojom/unzipper.mojom
// Module: unzip.mojom

'use strict';

// Module namespace
var unzip = unzip || {};
unzip.mojom = unzip.mojom || {};


// Struct: UnzipOptions
unzip.mojom.UnzipOptions = class {
  constructor(values = {}) {
    this.password = values.password !== undefined ? values.password : "";
  }
};

// Struct: Info
unzip.mojom.Info = class {
  constructor(values = {}) {
    this.uses_aes_encryption = values.uses_aes_encryption !== undefined ? values.uses_aes_encryption : 0;
  }
};

// Interface: UnzipFilter
unzip.mojom.UnzipFilterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'unzip.mojom.UnzipFilter';
  }

  shouldUnzipFile(path) {
    // Method: ShouldUnzipFile
    return new Promise((resolve) => {
      // Call: ShouldUnzipFile(path)
      resolve({});
    });
  }

};

unzip.mojom.UnzipFilterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UnzipListener
unzip.mojom.UnzipListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'unzip.mojom.UnzipListener';
  }

  onProgress(bytes) {
    // Method: OnProgress
    // Call: OnProgress(bytes)
  }

};

unzip.mojom.UnzipListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Unzipper
unzip.mojom.UnzipperPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'unzip.mojom.Unzipper';
  }

  unzip(zip_file, output_dir, options, filter, listener) {
    // Method: Unzip
    return new Promise((resolve) => {
      // Call: Unzip(zip_file, output_dir, options, filter, listener)
      resolve({});
    });
  }

  detectEncoding(zip_file) {
    // Method: DetectEncoding
    return new Promise((resolve) => {
      // Call: DetectEncoding(zip_file)
      resolve({});
    });
  }

  getExtractedInfo(zip_file) {
    // Method: GetExtractedInfo
    return new Promise((resolve) => {
      // Call: GetExtractedInfo(zip_file)
      resolve({});
    });
  }

  decodeXz(in_file, out_file) {
    // Method: DecodeXz
    return new Promise((resolve) => {
      // Call: DecodeXz(in_file, out_file)
      resolve({});
    });
  }

};

unzip.mojom.UnzipperRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
