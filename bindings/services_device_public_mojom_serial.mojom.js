// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/serial.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var bluetooth = bluetooth || {};
var mojo_base = mojo_base || {};

device.mojom.SerialSendErrorSpec = { $: mojo.internal.Enum() };
device.mojom.SerialReceiveErrorSpec = { $: mojo.internal.Enum() };
device.mojom.SerialDataBitsSpec = { $: mojo.internal.Enum() };
device.mojom.SerialParityBitSpec = { $: mojo.internal.Enum() };
device.mojom.SerialStopBitsSpec = { $: mojo.internal.Enum() };
device.mojom.SerialPortFlushModeSpec = { $: mojo.internal.Enum() };
device.mojom.SerialPortTypeSpec = { $: mojo.internal.Enum() };
device.mojom.SerialPortInfoSpec = { $: {} };
device.mojom.SerialConnectionOptionsSpec = { $: {} };
device.mojom.SerialConnectionInfoSpec = { $: {} };
device.mojom.SerialHostControlSignalsSpec = { $: {} };
device.mojom.SerialPortControlSignalsSpec = { $: {} };
device.mojom.SerialPortManager = {};
device.mojom.SerialPortManager.$interfaceName = 'device.mojom.SerialPortManager';
device.mojom.SerialPortManager_SetClient_ParamsSpec = { $: {} };
device.mojom.SerialPortManager_GetDevices_ParamsSpec = { $: {} };
device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec = { $: {} };
device.mojom.SerialPortManager_OpenPort_ParamsSpec = { $: {} };
device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec = { $: {} };
device.mojom.SerialPortManagerClient = {};
device.mojom.SerialPortManagerClient.$interfaceName = 'device.mojom.SerialPortManagerClient';
device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec = { $: {} };
device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec = { $: {} };
device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec = { $: {} };
device.mojom.SerialPort = {};
device.mojom.SerialPort.$interfaceName = 'device.mojom.SerialPort';
device.mojom.SerialPort_StartWriting_ParamsSpec = { $: {} };
device.mojom.SerialPort_StartReading_ParamsSpec = { $: {} };
device.mojom.SerialPort_Flush_ParamsSpec = { $: {} };
device.mojom.SerialPort_Flush_ResponseParamsSpec = { $: {} };
device.mojom.SerialPort_Drain_ParamsSpec = { $: {} };
device.mojom.SerialPort_Drain_ResponseParamsSpec = { $: {} };
device.mojom.SerialPort_GetControlSignals_ParamsSpec = { $: {} };
device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec = { $: {} };
device.mojom.SerialPort_SetControlSignals_ParamsSpec = { $: {} };
device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec = { $: {} };
device.mojom.SerialPort_ConfigurePort_ParamsSpec = { $: {} };
device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec = { $: {} };
device.mojom.SerialPort_GetPortInfo_ParamsSpec = { $: {} };
device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec = { $: {} };
device.mojom.SerialPort_Close_ParamsSpec = { $: {} };
device.mojom.SerialPort_Close_ResponseParamsSpec = { $: {} };
device.mojom.SerialPortClient = {};
device.mojom.SerialPortClient.$interfaceName = 'device.mojom.SerialPortClient';
device.mojom.SerialPortClient_OnReadError_ParamsSpec = { $: {} };
device.mojom.SerialPortClient_OnSendError_ParamsSpec = { $: {} };
device.mojom.SerialPortConnectionWatcher = {};
device.mojom.SerialPortConnectionWatcher.$interfaceName = 'device.mojom.SerialPortConnectionWatcher';

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
  kReceiveAndTransmit: 0,
  kReceive: 1,
  kTransmit: 2,
};

// Enum: SerialPortType
device.mojom.SerialPortType = {
  PLATFORM_SERIAL: 0,
  BLUETOOTH_CLASSIC_RFCOMM: 1,
};

// Struct: SerialPortInfo
mojo.internal.Struct(
    device.mojom.SerialPortInfoSpec, 'device.mojom.SerialPortInfo', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, device.mojom.SerialPortTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('alternate_path', 24, 0, mojo_base.mojom.FilePathSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('usb_driver_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('device_instance_id', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bluetooth_service_class_id', 48, 0, bluetooth.mojom.UUIDSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('display_name', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('serial_number', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('vendor_id', 72, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('product_id', 74, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_vendor_id', 76, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_product_id', 76, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('connected', 76, 2, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: SerialConnectionOptions
mojo.internal.Struct(
    device.mojom.SerialConnectionOptionsSpec, 'device.mojom.SerialConnectionOptions', [
      mojo.internal.StructField('data_bits', 0, 0, device.mojom.SerialDataBitsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('parity_bit', 8, 0, device.mojom.SerialParityBitSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('stop_bits', 16, 0, device.mojom.SerialStopBitsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('bitrate', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('cts_flow_control', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_cts_flow_control', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SerialConnectionInfo
mojo.internal.Struct(
    device.mojom.SerialConnectionInfoSpec, 'device.mojom.SerialConnectionInfo', [
      mojo.internal.StructField('data_bits', 0, 0, device.mojom.SerialDataBitsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('parity_bit', 8, 0, device.mojom.SerialParityBitSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('stop_bits', 16, 0, device.mojom.SerialStopBitsSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('bitrate', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('cts_flow_control', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SerialHostControlSignals
mojo.internal.Struct(
    device.mojom.SerialHostControlSignalsSpec, 'device.mojom.SerialHostControlSignals', [
      mojo.internal.StructField('dtr', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_dtr', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rts', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_rts', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('brk', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_brk', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SerialPortControlSignals
mojo.internal.Struct(
    device.mojom.SerialPortControlSignalsSpec, 'device.mojom.SerialPortControlSignals', [
      mojo.internal.StructField('dcd', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cts', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ri', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('dsr', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SerialPortManager
mojo.internal.Struct(
    device.mojom.SerialPortManager_SetClient_ParamsSpec, 'device.mojom.SerialPortManager_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(device.mojom.SerialPortManagerClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPortManager_GetDevices_ParamsSpec, 'device.mojom.SerialPortManager_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec, 'device.mojom.SerialPortManager_GetDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.SerialPortInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPortManager_OpenPort_ParamsSpec, 'device.mojom.SerialPortManager_OpenPort_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, device.mojom.SerialConnectionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(device.mojom.SerialPortClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('watcher', 24, 0, mojo.internal.InterfaceProxy(device.mojom.SerialPortConnectionWatcherSpec), null, true, 0, undefined),
      mojo.internal.StructField('use_alternate_path', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec, 'device.mojom.SerialPortManager_OpenPort_ResponseParams', [
      mojo.internal.StructField('port', 0, 0, mojo.internal.InterfaceProxy(device.mojom.SerialPortSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [client],
      false);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SerialPortManager_GetDevices_ParamsSpec,
      device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  openPort(token, use_alternate_path, options, client, watcher) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SerialPortManager_OpenPort_ParamsSpec,
      device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec,
      [token, use_alternate_path, options, client, watcher],
      false);
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

device.mojom.SerialPortManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.SerialPortManager_SetClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setClient(params.client);
          break;
        }
        case 1: {
          const params = device.mojom.SerialPortManager_GetDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPortManager_GetDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = device.mojom.SerialPortManager_OpenPort_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openPort(params.token, params.use_alternate_path, params.options, params.client, params.watcher);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPortManager_OpenPort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

device.mojom.SerialPortManagerReceiver = device.mojom.SerialPortManagerReceiver;

device.mojom.SerialPortManagerPtr = device.mojom.SerialPortManagerRemote;
device.mojom.SerialPortManagerRequest = device.mojom.SerialPortManagerPendingReceiver;


// Interface: SerialPortManagerClient
mojo.internal.Struct(
    device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec, 'device.mojom.SerialPortManagerClient_OnPortAdded_Params', [
      mojo.internal.StructField('port_info', 0, 0, device.mojom.SerialPortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec, 'device.mojom.SerialPortManagerClient_OnPortRemoved_Params', [
      mojo.internal.StructField('port_info', 0, 0, device.mojom.SerialPortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec, 'device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_Params', [
      mojo.internal.StructField('port_info', 0, 0, device.mojom.SerialPortInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [port_info],
      false);
  }

  onPortRemoved(port_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec,
      null,
      [port_info],
      false);
  }

  onPortConnectedStateChanged(port_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec,
      null,
      [port_info],
      false);
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

device.mojom.SerialPortManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.SerialPortManagerClient_OnPortAdded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPortAdded(params.port_info);
          break;
        }
        case 1: {
          const params = device.mojom.SerialPortManagerClient_OnPortRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPortRemoved(params.port_info);
          break;
        }
        case 2: {
          const params = device.mojom.SerialPortManagerClient_OnPortConnectedStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPortConnectedStateChanged(params.port_info);
          break;
        }
      }
    });
  }
};

device.mojom.SerialPortManagerClientReceiver = device.mojom.SerialPortManagerClientReceiver;

device.mojom.SerialPortManagerClientPtr = device.mojom.SerialPortManagerClientRemote;
device.mojom.SerialPortManagerClientRequest = device.mojom.SerialPortManagerClientPendingReceiver;


// Interface: SerialPort
mojo.internal.Struct(
    device.mojom.SerialPort_StartWriting_ParamsSpec, 'device.mojom.SerialPort_StartWriting_Params', [
      mojo.internal.StructField('consumer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_StartReading_ParamsSpec, 'device.mojom.SerialPort_StartReading_Params', [
      mojo.internal.StructField('producer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_Flush_ParamsSpec, 'device.mojom.SerialPort_Flush_Params', [
      mojo.internal.StructField('mode', 0, 0, device.mojom.SerialPortFlushModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_Flush_ResponseParamsSpec, 'device.mojom.SerialPort_Flush_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SerialPort_Drain_ParamsSpec, 'device.mojom.SerialPort_Drain_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SerialPort_Drain_ResponseParamsSpec, 'device.mojom.SerialPort_Drain_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SerialPort_GetControlSignals_ParamsSpec, 'device.mojom.SerialPort_GetControlSignals_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec, 'device.mojom.SerialPort_GetControlSignals_ResponseParams', [
      mojo.internal.StructField('signals', 0, 0, device.mojom.SerialPortControlSignalsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_SetControlSignals_ParamsSpec, 'device.mojom.SerialPort_SetControlSignals_Params', [
      mojo.internal.StructField('signals', 0, 0, device.mojom.SerialHostControlSignalsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec, 'device.mojom.SerialPort_SetControlSignals_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_ConfigurePort_ParamsSpec, 'device.mojom.SerialPort_ConfigurePort_Params', [
      mojo.internal.StructField('options', 0, 0, device.mojom.SerialConnectionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec, 'device.mojom.SerialPort_ConfigurePort_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_GetPortInfo_ParamsSpec, 'device.mojom.SerialPort_GetPortInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec, 'device.mojom.SerialPort_GetPortInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, device.mojom.SerialConnectionInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_Close_ParamsSpec, 'device.mojom.SerialPort_Close_Params', [
      mojo.internal.StructField('flush', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPort_Close_ResponseParamsSpec, 'device.mojom.SerialPort_Close_ResponseParams', [
    ],
    [[0, 8]]);

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
      [consumer],
      false);
  }

  startReading(producer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SerialPort_StartReading_ParamsSpec,
      null,
      [producer],
      false);
  }

  flush(mode) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SerialPort_Flush_ParamsSpec,
      device.mojom.SerialPort_Flush_ResponseParamsSpec,
      [mode],
      false);
  }

  drain() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.SerialPort_Drain_ParamsSpec,
      device.mojom.SerialPort_Drain_ResponseParamsSpec,
      [],
      false);
  }

  getControlSignals() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.SerialPort_GetControlSignals_ParamsSpec,
      device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec,
      [],
      false);
  }

  setControlSignals(signals) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.SerialPort_SetControlSignals_ParamsSpec,
      device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec,
      [signals],
      false);
  }

  configurePort(options) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.SerialPort_ConfigurePort_ParamsSpec,
      device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec,
      [options],
      false);
  }

  getPortInfo() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.SerialPort_GetPortInfo_ParamsSpec,
      device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec,
      [],
      false);
  }

  close(flush) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device.mojom.SerialPort_Close_ParamsSpec,
      device.mojom.SerialPort_Close_ResponseParamsSpec,
      [flush],
      false);
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

device.mojom.SerialPortReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.SerialPort_StartWriting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startWriting(params.consumer);
          break;
        }
        case 1: {
          const params = device.mojom.SerialPort_StartReading_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startReading(params.producer);
          break;
        }
        case 2: {
          const params = device.mojom.SerialPort_Flush_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flush(params.mode);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPort_Flush_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = device.mojom.SerialPort_Drain_ParamsSpec.$.decode(message.payload);
          const result = this.impl.drain();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPort_Drain_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = device.mojom.SerialPort_GetControlSignals_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getControlSignals();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPort_GetControlSignals_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = device.mojom.SerialPort_SetControlSignals_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setControlSignals(params.signals);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPort_SetControlSignals_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = device.mojom.SerialPort_ConfigurePort_ParamsSpec.$.decode(message.payload);
          const result = this.impl.configurePort(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPort_ConfigurePort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = device.mojom.SerialPort_GetPortInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPortInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPort_GetPortInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = device.mojom.SerialPort_Close_ParamsSpec.$.decode(message.payload);
          const result = this.impl.close(params.flush);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SerialPort_Close_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

device.mojom.SerialPortReceiver = device.mojom.SerialPortReceiver;

device.mojom.SerialPortPtr = device.mojom.SerialPortRemote;
device.mojom.SerialPortRequest = device.mojom.SerialPortPendingReceiver;


// Interface: SerialPortClient
mojo.internal.Struct(
    device.mojom.SerialPortClient_OnReadError_ParamsSpec, 'device.mojom.SerialPortClient_OnReadError_Params', [
      mojo.internal.StructField('error', 0, 0, device.mojom.SerialReceiveErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SerialPortClient_OnSendError_ParamsSpec, 'device.mojom.SerialPortClient_OnSendError_Params', [
      mojo.internal.StructField('error', 0, 0, device.mojom.SerialSendErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [error],
      false);
  }

  onSendError(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SerialPortClient_OnSendError_ParamsSpec,
      null,
      [error],
      false);
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

device.mojom.SerialPortClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.SerialPortClient_OnReadError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReadError(params.error);
          break;
        }
        case 1: {
          const params = device.mojom.SerialPortClient_OnSendError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSendError(params.error);
          break;
        }
      }
    });
  }
};

device.mojom.SerialPortClientReceiver = device.mojom.SerialPortClientReceiver;

device.mojom.SerialPortClientPtr = device.mojom.SerialPortClientRemote;
device.mojom.SerialPortClientRequest = device.mojom.SerialPortClientPendingReceiver;


// Interface: SerialPortConnectionWatcher
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

device.mojom.SerialPortConnectionWatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

device.mojom.SerialPortConnectionWatcherReceiver = device.mojom.SerialPortConnectionWatcherReceiver;

device.mojom.SerialPortConnectionWatcherPtr = device.mojom.SerialPortConnectionWatcherRemote;
device.mojom.SerialPortConnectionWatcherRequest = device.mojom.SerialPortConnectionWatcherPendingReceiver;

