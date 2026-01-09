// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_device.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: UsbOpenDeviceSuccess
device.mojom.UsbOpenDeviceSuccess = {
  OK: 0,
};

// Enum: UsbOpenDeviceError
device.mojom.UsbOpenDeviceError = {
};

// Enum: UsbClaimInterfaceResult
device.mojom.UsbClaimInterfaceResult = {
};

// Enum: UsbTransferDirection
device.mojom.UsbTransferDirection = {
  INBOUND: 0,
  OUTBOUND: 1,
};

// Enum: UsbControlTransferType
device.mojom.UsbControlTransferType = {
  STANDARD: 0,
  CLASS: 1,
  VENDOR: 2,
  RESERVED: 3,
};

// Enum: UsbControlTransferRecipient
device.mojom.UsbControlTransferRecipient = {
  DEVICE: 0,
  INTERFACE: 1,
  ENDPOINT: 2,
  OTHER: 3,
};

// Enum: UsbTransferType
device.mojom.UsbTransferType = {
  CONTROL: 0,
  ISOCHRONOUS: 1,
  BULK: 2,
  INTERRUPT: 3,
};

// Enum: UsbSynchronizationType
device.mojom.UsbSynchronizationType = {
  NONE: 0,
  ASYNCHRONOUS: 1,
  ADAPTIVE: 2,
  SYNCHRONOUS: 3,
};

// Enum: UsbUsageType
device.mojom.UsbUsageType = {
  FEEDBACK: 0,
  EXPLICIT_FEEDBACK: 1,
  NOTIFICATION: 2,
};

// Enum: UsbTransferStatus
device.mojom.UsbTransferStatus = {
};

// Struct: UsbEndpointInfo
device.mojom.UsbEndpointInfo = class {
  constructor(values = {}) {
    this.extra_data = values.extra_data !== undefined ? values.extra_data : 0;
  }
};

// Struct: UsbAlternateInterfaceInfo
device.mojom.UsbAlternateInterfaceInfo = class {
  constructor(values = {}) {
    this.extra_data = values.extra_data !== undefined ? values.extra_data : 0;
  }
};

// Struct: UsbInterfaceInfo
device.mojom.UsbInterfaceInfo = class {
  constructor(values = {}) {
    this.alternates = values.alternates !== undefined ? values.alternates : 0;
  }
};

// Struct: UsbConfigurationInfo
device.mojom.UsbConfigurationInfo = class {
  constructor(values = {}) {
    this.extra_data = values.extra_data !== undefined ? values.extra_data : 0;
  }
};

// Struct: UsbDeviceInfo
device.mojom.UsbDeviceInfo = class {
  constructor(values = {}) {
    this.configurations = values.configurations !== undefined ? values.configurations : 0;
  }
};

// Struct: UsbControlTransferParams
device.mojom.UsbControlTransferParams = class {
  constructor(values = {}) {
    this.index = values.index !== undefined ? values.index : 0;
  }
};

// Struct: UsbIsochronousPacket
device.mojom.UsbIsochronousPacket = class {
  constructor(values = {}) {
    this.status = values.status !== undefined ? values.status : 0;
  }
};

// Interface: UsbDevice
device.mojom.UsbDevicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.UsbDevice';
  }

  open() {
    // Method: Open
    return new Promise((resolve) => {
      // Call: Open()
      resolve({});
    });
  }

  close() {
    // Method: Close
    // Call: Close()
  }

  setConfiguration(value) {
    // Method: SetConfiguration
    return new Promise((resolve) => {
      // Call: SetConfiguration(value)
      resolve({});
    });
  }

  claimInterface(interface_number) {
    // Method: ClaimInterface
    return new Promise((resolve) => {
      // Call: ClaimInterface(interface_number)
      resolve({});
    });
  }

  releaseInterface(interface_number) {
    // Method: ReleaseInterface
    return new Promise((resolve) => {
      // Call: ReleaseInterface(interface_number)
      resolve({});
    });
  }

  setInterfaceAlternateSetting(interface_number, alternate_setting) {
    // Method: SetInterfaceAlternateSetting
    return new Promise((resolve) => {
      // Call: SetInterfaceAlternateSetting(interface_number, alternate_setting)
      resolve({});
    });
  }

  reset() {
    // Method: Reset
    return new Promise((resolve) => {
      // Call: Reset()
      resolve({});
    });
  }

  clearHalt(direction, endpoint_number) {
    // Method: ClearHalt
    return new Promise((resolve) => {
      // Call: ClearHalt(direction, endpoint_number)
      resolve({});
    });
  }

  controlTransferIn(params, length, timeout) {
    // Method: ControlTransferIn
    return new Promise((resolve) => {
      // Call: ControlTransferIn(params, length, timeout)
      resolve({});
    });
  }

  controlTransferOut(params, data, timeout) {
    // Method: ControlTransferOut
    return new Promise((resolve) => {
      // Call: ControlTransferOut(params, data, timeout)
      resolve({});
    });
  }

  genericTransferIn(endpoint_number, length, timeout) {
    // Method: GenericTransferIn
    return new Promise((resolve) => {
      // Call: GenericTransferIn(endpoint_number, length, timeout)
      resolve({});
    });
  }

  genericTransferOut(endpoint_number, data, timeout) {
    // Method: GenericTransferOut
    return new Promise((resolve) => {
      // Call: GenericTransferOut(endpoint_number, data, timeout)
      resolve({});
    });
  }

  isochronousTransferIn(endpoint_number, packet_lengths, timeout) {
    // Method: IsochronousTransferIn
    return new Promise((resolve) => {
      // Call: IsochronousTransferIn(endpoint_number, packet_lengths, timeout)
      resolve({});
    });
  }

  isochronousTransferOut(endpoint_number, data, packet_lengths, timeout) {
    // Method: IsochronousTransferOut
    return new Promise((resolve) => {
      // Call: IsochronousTransferOut(endpoint_number, data, packet_lengths, timeout)
      resolve({});
    });
  }

};

device.mojom.UsbDeviceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UsbDeviceClient
device.mojom.UsbDeviceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.UsbDeviceClient';
  }

  onDeviceOpened() {
    // Method: OnDeviceOpened
    // Call: OnDeviceOpened()
  }

  onDeviceClosed() {
    // Method: OnDeviceClosed
    // Call: OnDeviceClosed()
  }

};

device.mojom.UsbDeviceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
