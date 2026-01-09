// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/blob/data_element.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DataElementBytes
blink.mojom.DataElementBytes = class {
  constructor(values = {}) {
    this.length = values.length !== undefined ? values.length : 0;
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: DataElementFile
blink.mojom.DataElementFile = class {
  constructor(values = {}) {
    this.expected_modification_time = values.expected_modification_time !== undefined ? values.expected_modification_time : 0;
  }
};

// Struct: DataElementBlob
blink.mojom.DataElementBlob = class {
  constructor(values = {}) {
    this.length = values.length !== undefined ? values.length : 0;
  }
};

// Interface: BytesProvider
blink.mojom.BytesProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.BytesProvider';
  }

  requestAsReply() {
    // Method: RequestAsReply
    return new Promise((resolve) => {
      // Call: RequestAsReply()
      resolve({});
    });
  }

  requestAsStream(pipe) {
    // Method: RequestAsStream
    // Call: RequestAsStream(pipe)
  }

  requestAsFile(source_offset, source_size, file, file_offset) {
    // Method: RequestAsFile
    return new Promise((resolve) => {
      // Call: RequestAsFile(source_offset, source_size, file, file_offset)
      resolve({});
    });
  }

};

blink.mojom.BytesProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
