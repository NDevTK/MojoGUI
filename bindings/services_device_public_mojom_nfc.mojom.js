// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/nfc.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: NDEFErrorType
device.mojom.NDEFErrorType = {
  no: 0,
  the: 1,
  INVALID_MESSAGE: 2,
  OPERATION_CANCELLED: 3,
};

// Enum: NDEFRecordTypeCategory
device.mojom.NDEFRecordTypeCategory = {
  including: 0,
  and: 1,
  etc: 2,
};

// Enum: NSRawTypeNameFormat
device.mojom.NSRawTypeNameFormat = {
  kAbsoluteURI: 0,
  kEmpty: 1,
  kMedia: 2,
  kExternal: 3,
  kWellKnown: 4,
  kUnchanged: 5,
  kUnknown: 6,
};

// Struct: NDEFError
device.mojom.NDEFError = class {
  constructor(values = {}) {
    this.error_message = values.error_message !== undefined ? values.error_message : "";
  }
};

// Struct: NDEFRecord
device.mojom.NDEFRecord = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
    this.type = values.type !== undefined ? values.type : null;
    this.is = values.is !== undefined ? values.is : null;
    this.the = values.the !== undefined ? values.the : null;
    this.the = values.the !== undefined ? values.the : null;
    this.payload_message = values.payload_message !== undefined ? values.payload_message : null;
  }
};

// Struct: NDEFMessage
device.mojom.NDEFMessage = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : [];
  }
};

// Struct: NDEFRawRecord
device.mojom.NDEFRawRecord = class {
  constructor(values = {}) {
    this.type_name_format = values.type_name_format !== undefined ? values.type_name_format : 0;
  }
};

// Struct: NDEFRawMessage
device.mojom.NDEFRawMessage = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : [];
  }
};

// Struct: NDEFWriteOptions
device.mojom.NDEFWriteOptions = class {
  constructor(values = {}) {
    this.yes = values.yes !== undefined ? values.yes : null;
    this.overwrite = values.overwrite !== undefined ? values.overwrite : false;
  }
};

// Interface: NFC
device.mojom.NFCPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.NFC';
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  push(message, options) {
    // Method: Push
    return new Promise((resolve) => {
      // Call: Push(message, options)
      resolve({});
    });
  }

  cancelPush() {
    // Method: CancelPush
    // Call: CancelPush()
  }

  makeReadOnly() {
    // Method: MakeReadOnly
    return new Promise((resolve) => {
      // Call: MakeReadOnly()
      resolve({});
    });
  }

  cancelMakeReadOnly() {
    // Method: CancelMakeReadOnly
    // Call: CancelMakeReadOnly()
  }

  watch(id) {
    // Method: Watch
    return new Promise((resolve) => {
      // Call: Watch(id)
      resolve({});
    });
  }

  cancelWatch(id) {
    // Method: CancelWatch
    // Call: CancelWatch(id)
  }

};

device.mojom.NFCRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NFCClient
device.mojom.NFCClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.NFCClient';
  }

  onWatch(watch_ids, serial_number, message) {
    // Method: OnWatch
    // Call: OnWatch(watch_ids, serial_number, message)
  }

  onError(error) {
    // Method: OnError
    // Call: OnError(error)
  }

};

device.mojom.NFCClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RawNFCClient
device.mojom.RawNFCClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.RawNFCClient';
  }

  onWatch(watch_ids, message) {
    // Method: OnWatch
    // Call: OnWatch(watch_ids, message)
  }

  onError(error) {
    // Method: OnError
    // Call: OnError(error)
  }

};

device.mojom.RawNFCClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
