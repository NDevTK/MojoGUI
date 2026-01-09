// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/serial.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: SerialSendError
device.mojom.SerialSendError = {
  NONE: 0,
  DISCONNECTED: 1,
  SYSTEM_ERROR: 2,
};

// Enum: SerialReceiveError
device.mojom.SerialReceiveError = {
  NONE: 0,
  DISCONNECTED: 1,
  DEVICE_LOST: 2,
  BREAK: 3,
  FRAME_ERROR: 4,
  OVERRUN: 5,
  BUFFER_OVERFLOW: 6,
  PARITY_ERROR: 7,
  SYSTEM_ERROR: 8,
};

// Enum: SerialDataBits
device.mojom.SerialDataBits = {
  NONE: 0,
  SEVEN: 1,
  EIGHT: 2,
};

// Enum: SerialParityBit
device.mojom.SerialParityBit = {
  NONE: 0,
  NO_PARITY: 1,
  ODD: 2,
  EVEN: 3,
};

// Enum: SerialStopBits
device.mojom.SerialStopBits = {
  NONE: 0,
  ONE: 1,
  TWO: 2,
};

// Enum: SerialPortFlushMode
device.mojom.SerialPortFlushMode = {
};

// Enum: SerialPortType
device.mojom.SerialPortType = {
};

// Struct: SerialPortInfo
device.mojom.SerialPortInfo = class {
  constructor(values = {}) {
    this.PLATFORM_SERIAL = values.PLATFORM_SERIAL !== undefined ? values.PLATFORM_SERIAL : null;
    this.bluetooth_service_class_id = values.bluetooth_service_class_id !== undefined ? values.bluetooth_service_class_id : 0;
    this.example = values.example !== undefined ? values.example : null;
    this.string. = values.string. !== undefined ? values.string. : null;
    this.true = values.true !== undefined ? values.true : false;
  }
};

// Struct: SerialConnectionOptions
device.mojom.SerialConnectionOptions = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : 0;
  }
};

// Struct: SerialConnectionInfo
device.mojom.SerialConnectionInfo = class {
  constructor(values = {}) {
    this.cts_flow_control = values.cts_flow_control !== undefined ? values.cts_flow_control : 0;
  }
};

// Struct: SerialHostControlSignals
device.mojom.SerialHostControlSignals = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: SerialPortControlSignals
device.mojom.SerialPortControlSignals = class {
  constructor(values = {}) {
    this.dsr = values.dsr !== undefined ? values.dsr : false;
  }
};

// Interface: SerialPortManager
device.mojom.SerialPortManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SerialPortManager';
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  getDevices() {
    // Method: GetDevices
    return new Promise((resolve) => {
      // Call: GetDevices()
      resolve({});
    });
  }

  openPort(token, use_alternate_path, options, client, watcher) {
    // Method: OpenPort
    return new Promise((resolve) => {
      // Call: OpenPort(token, use_alternate_path, options, client, watcher)
      resolve({});
    });
  }

};

device.mojom.SerialPortManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SerialPortManagerClient
device.mojom.SerialPortManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SerialPortManagerClient';
  }

  onPortAdded(port_info) {
    // Method: OnPortAdded
    // Call: OnPortAdded(port_info)
  }

  onPortRemoved(port_info) {
    // Method: OnPortRemoved
    // Call: OnPortRemoved(port_info)
  }

  onPortConnectedStateChanged(port_info) {
    // Method: OnPortConnectedStateChanged
    // Call: OnPortConnectedStateChanged(port_info)
  }

};

device.mojom.SerialPortManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SerialPort
device.mojom.SerialPortPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SerialPort';
  }

  startWriting(consumer) {
    // Method: StartWriting
    // Call: StartWriting(consumer)
  }

  startReading(producer) {
    // Method: StartReading
    // Call: StartReading(producer)
  }

  flush(mode) {
    // Method: Flush
    // Call: Flush(mode)
  }

  drain() {
    // Method: Drain
    // Call: Drain()
  }

  getControlSignals() {
    // Method: GetControlSignals
    return new Promise((resolve) => {
      // Call: GetControlSignals()
      resolve({});
    });
  }

  setControlSignals(signals) {
    // Method: SetControlSignals
    return new Promise((resolve) => {
      // Call: SetControlSignals(signals)
      resolve({});
    });
  }

  configurePort(options) {
    // Method: ConfigurePort
    return new Promise((resolve) => {
      // Call: ConfigurePort(options)
      resolve({});
    });
  }

  getPortInfo() {
    // Method: GetPortInfo
    return new Promise((resolve) => {
      // Call: GetPortInfo()
      resolve({});
    });
  }

  close(flush) {
    // Method: Close
    // Call: Close(flush)
  }

};

device.mojom.SerialPortRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SerialPortClient
device.mojom.SerialPortClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SerialPortClient';
  }

  onReadError(error) {
    // Method: OnReadError
    // Call: OnReadError(error)
  }

  onSendError(error) {
    // Method: OnSendError
    // Call: OnSendError(error)
  }

};

device.mojom.SerialPortClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SerialPortConnectionWatcher
device.mojom.SerialPortConnectionWatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.SerialPortConnectionWatcher';
  }

};

device.mojom.SerialPortConnectionWatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
