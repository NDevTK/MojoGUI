// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/smart_card.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: SmartCardSuccess
device.mojom.SmartCardSuccess = {
  kOk: 0,
};

// Enum: SmartCardError
device.mojom.SmartCardError = {
  kResetCard: 0,
  kUnpoweredCard: 1,
  kUnresponsiveCard: 2,
  kUnsupportedCard: 3,
  kReaderUnavailable: 4,
  kSharingViolation: 5,
  kNotTransacted: 6,
  kNoSmartcard: 7,
  kProtoMismatch: 8,
  kSystemCancelled: 9,
  kNotReady: 10,
  kCancelled: 11,
  kInsufficientBuffer: 12,
  kInvalidHandle: 13,
  kInvalidParameter: 14,
  kInvalidValue: 15,
  kNoMemory: 16,
  kTimeout: 17,
  kUnknownReader: 18,
  kUnsupportedFeature: 19,
  kNoReadersAvailable: 20,
  kServiceStopped: 21,
  kNoService: 22,
  kCommError: 23,
  kInternalError: 24,
  kUnknownError: 25,
  kServerTooBusy: 26,
  kUnexpected: 27,
  kShutdown: 28,
};

// Enum: SmartCardShareMode
device.mojom.SmartCardShareMode = {
};

// Enum: SmartCardProtocol
device.mojom.SmartCardProtocol = {
};

// Enum: SmartCardDisposition
device.mojom.SmartCardDisposition = {
};

// Enum: SmartCardConnectionState
device.mojom.SmartCardConnectionState = {
};

// Struct: SmartCardReaderStateFlags
device.mojom.SmartCardReaderStateFlags = class {
  constructor(values = {}) {
    this.unpowered = values.unpowered !== undefined ? values.unpowered : false;
  }
};

// Struct: SmartCardReaderStateIn
device.mojom.SmartCardReaderStateIn = class {
  constructor(values = {}) {
    this.current_state = values.current_state !== undefined ? values.current_state : "";
    this.current_count = values.current_count !== undefined ? values.current_count : 0;
  }
};

// Struct: SmartCardReaderStateOut
device.mojom.SmartCardReaderStateOut = class {
  constructor(values = {}) {
    this.answer_to_reset = values.answer_to_reset !== undefined ? values.answer_to_reset : 0;
  }
};

// Struct: SmartCardProtocols
device.mojom.SmartCardProtocols = class {
  constructor(values = {}) {
    this.raw = values.raw !== undefined ? values.raw : false;
  }
};

// Struct: SmartCardStatus
device.mojom.SmartCardStatus = class {
  constructor(values = {}) {
    this.answer_to_reset = values.answer_to_reset !== undefined ? values.answer_to_reset : 0;
  }
};

// Struct: SmartCardConnectSuccess
device.mojom.SmartCardConnectSuccess = class {
  constructor(values = {}) {
    this.active_protocol = values.active_protocol !== undefined ? values.active_protocol : null;
  }
};

// Interface: SmartCardTransaction
device.mojom.SmartCardTransactionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SmartCardTransaction';
  }

  endTransaction(disposition) {
    // Method: EndTransaction
    return new Promise((resolve) => {
      // Call: EndTransaction(disposition)
      resolve({});
    });
  }

};

device.mojom.SmartCardTransactionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SmartCardConnection
device.mojom.SmartCardConnectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SmartCardConnection';
  }

  disconnect(disposition) {
    // Method: Disconnect
    return new Promise((resolve) => {
      // Call: Disconnect(disposition)
      resolve({});
    });
  }

  transmit(protocol, data) {
    // Method: Transmit
    return new Promise((resolve) => {
      // Call: Transmit(protocol, data)
      resolve({});
    });
  }

  control(control_code, data) {
    // Method: Control
    return new Promise((resolve) => {
      // Call: Control(control_code, data)
      resolve({});
    });
  }

  getAttrib(id) {
    // Method: GetAttrib
    return new Promise((resolve) => {
      // Call: GetAttrib(id)
      resolve({});
    });
  }

  setAttrib(id, data) {
    // Method: SetAttrib
    return new Promise((resolve) => {
      // Call: SetAttrib(id, data)
      resolve({});
    });
  }

  status() {
    // Method: Status
    return new Promise((resolve) => {
      // Call: Status()
      resolve({});
    });
  }

  beginTransaction() {
    // Method: BeginTransaction
    return new Promise((resolve) => {
      // Call: BeginTransaction()
      resolve({});
    });
  }

};

device.mojom.SmartCardConnectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SmartCardConnectionWatcher
device.mojom.SmartCardConnectionWatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SmartCardConnectionWatcher';
  }

  notifyConnectionUsed() {
    // Method: NotifyConnectionUsed
    // Call: NotifyConnectionUsed()
  }

};

device.mojom.SmartCardConnectionWatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SmartCardContext
device.mojom.SmartCardContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SmartCardContext';
  }

  listReaders() {
    // Method: ListReaders
    return new Promise((resolve) => {
      // Call: ListReaders()
      resolve({});
    });
  }

  getStatusChange(timeout, reader_states) {
    // Method: GetStatusChange
    return new Promise((resolve) => {
      // Call: GetStatusChange(timeout, reader_states)
      resolve({});
    });
  }

  cancel() {
    // Method: Cancel
    return new Promise((resolve) => {
      // Call: Cancel()
      resolve({});
    });
  }

  connect(reader, share_mode, preferred_protocols, connection_watcher) {
    // Method: Connect
    return new Promise((resolve) => {
      // Call: Connect(reader, share_mode, preferred_protocols, connection_watcher)
      resolve({});
    });
  }

};

device.mojom.SmartCardContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SmartCardContextFactory
device.mojom.SmartCardContextFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SmartCardContextFactory';
  }

  createContext() {
    // Method: CreateContext
    return new Promise((resolve) => {
      // Call: CreateContext()
      resolve({});
    });
  }

};

device.mojom.SmartCardContextFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
