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
device.mojom.SerialSendErrorSpec = { $: mojo.internal.Enum() };

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
device.mojom.SerialReceiveErrorSpec = { $: mojo.internal.Enum() };

// Enum: SerialDataBits
device.mojom.SerialDataBits = {
  NONE: 0,
  SEVEN: 1,
  EIGHT: 2,
};
device.mojom.SerialDataBitsSpec = { $: mojo.internal.Enum() };

// Enum: SerialParityBit
device.mojom.SerialParityBit = {
  NONE: 0,
  NO_PARITY: 1,
  ODD: 2,
  EVEN: 3,
};
device.mojom.SerialParityBitSpec = { $: mojo.internal.Enum() };

// Enum: SerialStopBits
device.mojom.SerialStopBits = {
  NONE: 0,
  ONE: 1,
  TWO: 2,
};
device.mojom.SerialStopBitsSpec = { $: mojo.internal.Enum() };

// Enum: SerialPortFlushMode
device.mojom.SerialPortFlushMode = {
  kReceiveAndTransmit: 0,
  kReceive: 1,
  kTransmit: 2,
};
device.mojom.SerialPortFlushModeSpec = { $: mojo.internal.Enum() };

// Enum: SerialPortType
device.mojom.SerialPortType = {
  PLATFORM_SERIAL: 0,
  BLUETOOTH_CLASSIC_RFCOMM: 1,
};
device.mojom.SerialPortTypeSpec = { $: mojo.internal.Enum() };

// Struct: SerialPortInfo
device.mojom.SerialPortInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortInfo',
      packedSize: 88,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 64, packedBitOffset: 0, type: device.mojom.SerialPortTypeSpec, nullable: false, minVersion: 0 },
        { name: 'alternate_path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: true, minVersion: 0 },
        { name: 'usb_driver_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'device_instance_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'has_vendor_id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'product_id', packedOffset: 70, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'has_product_id', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bluetooth_service_class_id', packedOffset: 40, packedBitOffset: 0, type: bluetooth.mojom.UUIDSpec, nullable: true, minVersion: 0 },
        { name: 'display_name', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'serial_number', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'connected', packedOffset: 72, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: SerialConnectionOptions
device.mojom.SerialConnectionOptionsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialConnectionOptions',
      packedSize: 32,
      fields: [
        { name: 'bitrate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_bits', packedOffset: 4, packedBitOffset: 0, type: device.mojom.SerialDataBitsSpec, nullable: false, minVersion: 0 },
        { name: 'parity_bit', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SerialParityBitSpec, nullable: false, minVersion: 0 },
        { name: 'stop_bits', packedOffset: 12, packedBitOffset: 0, type: device.mojom.SerialStopBitsSpec, nullable: false, minVersion: 0 },
        { name: 'cts_flow_control', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_cts_flow_control', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SerialConnectionInfo
device.mojom.SerialConnectionInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialConnectionInfo',
      packedSize: 32,
      fields: [
        { name: 'bitrate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data_bits', packedOffset: 4, packedBitOffset: 0, type: device.mojom.SerialDataBitsSpec, nullable: false, minVersion: 0 },
        { name: 'parity_bit', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SerialParityBitSpec, nullable: false, minVersion: 0 },
        { name: 'stop_bits', packedOffset: 12, packedBitOffset: 0, type: device.mojom.SerialStopBitsSpec, nullable: false, minVersion: 0 },
        { name: 'cts_flow_control', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SerialHostControlSignals
device.mojom.SerialHostControlSignalsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialHostControlSignals',
      packedSize: 16,
      fields: [
        { name: 'dtr', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_dtr', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'rts', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_rts', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'brk', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_brk', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SerialPortControlSignals
device.mojom.SerialPortControlSignalsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortControlSignals',
      packedSize: 16,
      fields: [
        { name: 'dcd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cts', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ri', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dsr', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: SerialPortManager
device.mojom.SerialPortManager = {};

device.mojom.SerialPortManager_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManager_SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SerialPortManagerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPortManager_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManager_GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SerialPortManager_OpenPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManager_OpenPort_Params',
      packedSize: 48,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'use_alternate_path', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SerialConnectionOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SerialPortClientRemote), nullable: false, minVersion: 0 },
        { name: 'watcher', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SerialPortConnectionWatcherRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

device.mojom.SerialPortManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SerialPortManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPortManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SerialPortManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.SerialPortManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SerialPortManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SerialPortManager_SetClient_ParamsSpec,
      null,
      [client]);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SerialPortManager_GetDevices_ParamsSpec,
      device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec,
      []);
  }

  openPort(token, use_alternate_path, options, client, watcher) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SerialPortManager_OpenPort_ParamsSpec,
      device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec,
      [token, use_alternate_path, options, client, watcher]);
  }

};

device.mojom.SerialPortManager.getRemote = function() {
  let remote = new device.mojom.SerialPortManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPortManager',
    'context');
  return remote.$;
};

// ParamsSpec for SetClient
device.mojom.SerialPortManager_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManager.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SerialPortManagerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDevices
device.mojom.SerialPortManager_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManager.GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManager.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.SerialPortInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenPort
device.mojom.SerialPortManager_OpenPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManager.OpenPort_Params',
      packedSize: 48,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'use_alternate_path', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SerialConnectionOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SerialPortClientRemote), nullable: false, minVersion: 0 },
        { name: 'watcher', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SerialPortConnectionWatcherRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManager.OpenPort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SerialPortRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.SerialPortManagerPtr = device.mojom.SerialPortManagerRemote;
device.mojom.SerialPortManagerRequest = device.mojom.SerialPortManagerPendingReceiver;


// Interface: SerialPortManagerClient
device.mojom.SerialPortManagerClient = {};

device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManagerClient_OnPortAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'port_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManagerClient_OnPortRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'port_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'port_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPortManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SerialPortManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPortManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SerialPortManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.SerialPortManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SerialPortManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPortAdded(port_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec,
      null,
      [port_info]);
  }

  onPortRemoved(port_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec,
      null,
      [port_info]);
  }

  onPortConnectedStateChanged(port_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec,
      null,
      [port_info]);
  }

};

device.mojom.SerialPortManagerClient.getRemote = function() {
  let remote = new device.mojom.SerialPortManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPortManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPortAdded
device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManagerClient.OnPortAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'port_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPortRemoved
device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManagerClient.OnPortRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'port_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPortConnectedStateChanged
device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortManagerClient.OnPortConnectedStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'port_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.SerialPortManagerClientPtr = device.mojom.SerialPortManagerClientRemote;
device.mojom.SerialPortManagerClientRequest = device.mojom.SerialPortManagerClientPendingReceiver;


// Interface: SerialPort
device.mojom.SerialPort = {};

device.mojom.SerialPort_StartWriting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_StartWriting_Params',
      packedSize: 16,
      fields: [
        { name: 'consumer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPort_StartReading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_StartReading_Params',
      packedSize: 16,
      fields: [
        { name: 'producer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPort_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_Flush_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortFlushModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPort_Drain_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_Drain_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SerialPort_GetControlSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_GetControlSignals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SerialPort_SetControlSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_SetControlSignals_Params',
      packedSize: 16,
      fields: [
        { name: 'signals', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialHostControlSignalsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPort_ConfigurePort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_ConfigurePort_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialConnectionOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPort_GetPortInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_GetPortInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SerialPort_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort_Close_Params',
      packedSize: 16,
      fields: [
        { name: 'flush', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPortPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SerialPortRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPort';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SerialPortPendingReceiver,
      handle);
    this.$ = new device.mojom.SerialPortRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SerialPortRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startWriting(consumer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SerialPort_StartWriting_ParamsSpec,
      null,
      [consumer]);
  }

  startReading(producer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SerialPort_StartReading_ParamsSpec,
      null,
      [producer]);
  }

  flush(mode) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SerialPort_Flush_ParamsSpec,
      null,
      [mode]);
  }

  drain() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.SerialPort_Drain_ParamsSpec,
      null,
      []);
  }

  getControlSignals() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.SerialPort_GetControlSignals_ParamsSpec,
      device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec,
      []);
  }

  setControlSignals(signals) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.SerialPort_SetControlSignals_ParamsSpec,
      device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec,
      [signals]);
  }

  configurePort(options) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.SerialPort_ConfigurePort_ParamsSpec,
      device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec,
      [options]);
  }

  getPortInfo() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.SerialPort_GetPortInfo_ParamsSpec,
      device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec,
      []);
  }

  close(flush) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.SerialPort_Close_ParamsSpec,
      null,
      [flush]);
  }

};

device.mojom.SerialPort.getRemote = function() {
  let remote = new device.mojom.SerialPortRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPort',
    'context');
  return remote.$;
};

// ParamsSpec for StartWriting
device.mojom.SerialPort_StartWriting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.StartWriting_Params',
      packedSize: 16,
      fields: [
        { name: 'consumer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartReading
device.mojom.SerialPort_StartReading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.StartReading_Params',
      packedSize: 16,
      fields: [
        { name: 'producer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
device.mojom.SerialPort_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.Flush_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortFlushModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Drain
device.mojom.SerialPort_Drain_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.Drain_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetControlSignals
device.mojom.SerialPort_GetControlSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.GetControlSignals_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.GetControlSignals_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'signals', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialPortControlSignalsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetControlSignals
device.mojom.SerialPort_SetControlSignals_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.SetControlSignals_Params',
      packedSize: 16,
      fields: [
        { name: 'signals', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialHostControlSignalsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.SetControlSignals_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConfigurePort
device.mojom.SerialPort_ConfigurePort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.ConfigurePort_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialConnectionOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.ConfigurePort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPortInfo
device.mojom.SerialPort_GetPortInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.GetPortInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.GetPortInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialConnectionInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Close
device.mojom.SerialPort_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPort.Close_Params',
      packedSize: 16,
      fields: [
        { name: 'flush', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.SerialPortPtr = device.mojom.SerialPortRemote;
device.mojom.SerialPortRequest = device.mojom.SerialPortPendingReceiver;


// Interface: SerialPortClient
device.mojom.SerialPortClient = {};

device.mojom.SerialPortClient_OnReadError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortClient_OnReadError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialReceiveErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPortClient_OnSendError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortClient_OnSendError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialSendErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.SerialPortClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SerialPortClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPortClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SerialPortClientPendingReceiver,
      handle);
    this.$ = new device.mojom.SerialPortClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SerialPortClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReadError(error) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SerialPortClient_OnReadError_ParamsSpec,
      null,
      [error]);
  }

  onSendError(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SerialPortClient_OnSendError_ParamsSpec,
      null,
      [error]);
  }

};

device.mojom.SerialPortClient.getRemote = function() {
  let remote = new device.mojom.SerialPortClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPortClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnReadError
device.mojom.SerialPortClient_OnReadError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortClient.OnReadError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialReceiveErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSendError
device.mojom.SerialPortClient_OnSendError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SerialPortClient.OnSendError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SerialSendErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.SerialPortClientPtr = device.mojom.SerialPortClientRemote;
device.mojom.SerialPortClientRequest = device.mojom.SerialPortClientPendingReceiver;


// Interface: SerialPortConnectionWatcher
device.mojom.SerialPortConnectionWatcher = {};

device.mojom.SerialPortConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SerialPortConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SerialPortConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SerialPortConnectionWatcherPendingReceiver,
      handle);
    this.$ = new device.mojom.SerialPortConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SerialPortConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

device.mojom.SerialPortConnectionWatcher.getRemote = function() {
  let remote = new device.mojom.SerialPortConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SerialPortConnectionWatcher',
    'context');
  return remote.$;
};

// Legacy compatibility
device.mojom.SerialPortConnectionWatcherPtr = device.mojom.SerialPortConnectionWatcherRemote;
device.mojom.SerialPortConnectionWatcherRequest = device.mojom.SerialPortConnectionWatcherPendingReceiver;

