// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/serial/serial.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: SerialPortInfo
blink.mojom.SerialPortInfo = class {
  constructor(values = {}) {
    this.connected = values.connected !== undefined ? values.connected : 0;
  }
};

// Struct: SerialPortFilter
blink.mojom.SerialPortFilter = class {
  constructor(values = {}) {
    this.bluetooth_service_class_id = values.bluetooth_service_class_id !== undefined ? values.bluetooth_service_class_id : 0;
  }
};

// Interface: SerialService
blink.mojom.SerialServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SerialService';
  }

  setClient(client) {
    // Method: SetClient
    // Call: SetClient(client)
  }

  getPorts() {
    // Method: GetPorts
    return new Promise((resolve) => {
      // Call: GetPorts()
      resolve({});
    });
  }

  requestPort(filters, allowed_bluetooth_service_class_ids) {
    // Method: RequestPort
    return new Promise((resolve) => {
      // Call: RequestPort(filters, allowed_bluetooth_service_class_ids)
      resolve({});
    });
  }

  openPort(token, options, client) {
    // Method: OpenPort
    return new Promise((resolve) => {
      // Call: OpenPort(token, options, client)
      resolve({});
    });
  }

  forgetPort(token) {
    // Method: ForgetPort
    // Call: ForgetPort(token)
  }

};

blink.mojom.SerialServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SerialServiceClient
blink.mojom.SerialServiceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SerialServiceClient';
  }

  onPortConnectedStateChanged(port_info) {
    // Method: OnPortConnectedStateChanged
    // Call: OnPortConnectedStateChanged(port_info)
  }

};

blink.mojom.SerialServiceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
