// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/serial/serial.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};

blink.mojom.SerialPortInfoSpec = { $: {} };
blink.mojom.SerialPortFilterSpec = { $: {} };
blink.mojom.SerialService = {};
blink.mojom.SerialService.$interfaceName = 'blink.mojom.SerialService';
blink.mojom.SerialService_SetClient_ParamsSpec = { $: {} };
blink.mojom.SerialService_GetPorts_ParamsSpec = { $: {} };
blink.mojom.SerialService_GetPorts_ResponseParamsSpec = { $: {} };
blink.mojom.SerialService_RequestPort_ParamsSpec = { $: {} };
blink.mojom.SerialService_RequestPort_ResponseParamsSpec = { $: {} };
blink.mojom.SerialService_OpenPort_ParamsSpec = { $: {} };
blink.mojom.SerialService_OpenPort_ResponseParamsSpec = { $: {} };
blink.mojom.SerialService_ForgetPort_ParamsSpec = { $: {} };
blink.mojom.SerialService_ForgetPort_ResponseParamsSpec = { $: {} };
blink.mojom.SerialServiceClient = {};
blink.mojom.SerialServiceClient.$interfaceName = 'blink.mojom.SerialServiceClient';
blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec = { $: {} };

// Struct: SerialPortInfo
mojo.internal.Struct(
    blink.mojom.SerialPortInfoSpec, 'blink.mojom.SerialPortInfo', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('usb_vendor_id', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_usb_vendor_id', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('usb_product_id', 12, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_usb_product_id', 14, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bluetooth_service_class_id', 16, 0, bluetooth.mojom.UUIDSpec, null, true, 0, undefined),
      mojo.internal.StructField('connected', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SerialPortFilter
mojo.internal.Struct(
    blink.mojom.SerialPortFilterSpec, 'blink.mojom.SerialPortFilter', [
      mojo.internal.StructField('vendor_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_vendor_id', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('product_id', 6, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_product_id', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bluetooth_service_class_id', 16, 0, bluetooth.mojom.UUIDSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SerialService
mojo.internal.Struct(
    blink.mojom.SerialService_SetClient_ParamsSpec, 'blink.mojom.SerialService_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SerialServiceClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_GetPorts_ParamsSpec, 'blink.mojom.SerialService_GetPorts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SerialService_GetPorts_ResponseParamsSpec, 'blink.mojom.SerialService_GetPorts_ResponseParams', [
      mojo.internal.StructField('ports', 0, 0, mojo.internal.Array(blink.mojom.SerialPortInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_RequestPort_ParamsSpec, 'blink.mojom.SerialService_RequestPort_Params', [
      mojo.internal.StructField('filters', 0, 0, mojo.internal.Array(blink.mojom.SerialPortFilterSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('allowed_bluetooth_service_class_ids', 8, 0, mojo.internal.Array(bluetooth.mojom.UUIDSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SerialService_RequestPort_ResponseParamsSpec, 'blink.mojom.SerialService_RequestPort_ResponseParams', [
      mojo.internal.StructField('port', 0, 0, blink.mojom.SerialPortInfoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_OpenPort_ParamsSpec, 'blink.mojom.SerialService_OpenPort_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, device.mojom.SerialConnectionOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(device.mojom.SerialPortClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.SerialService_OpenPort_ResponseParamsSpec, 'blink.mojom.SerialService_OpenPort_ResponseParams', [
      mojo.internal.StructField('port', 0, 0, mojo.internal.InterfaceProxy(device.mojom.SerialPortRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_ForgetPort_ParamsSpec, 'blink.mojom.SerialService_ForgetPort_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SerialService_ForgetPort_ResponseParamsSpec, 'blink.mojom.SerialService_ForgetPort_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.SerialServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SerialServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SerialService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SerialServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SerialServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SerialServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SerialService_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

  getPorts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SerialService_GetPorts_ParamsSpec,
      blink.mojom.SerialService_GetPorts_ResponseParamsSpec,
      [],
      false);
  }

  requestPort(filters, allowed_bluetooth_service_class_ids) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SerialService_RequestPort_ParamsSpec,
      blink.mojom.SerialService_RequestPort_ResponseParamsSpec,
      [filters, allowed_bluetooth_service_class_ids],
      false);
  }

  openPort(token, options, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SerialService_OpenPort_ParamsSpec,
      blink.mojom.SerialService_OpenPort_ResponseParamsSpec,
      [token, options, client],
      false);
  }

  forgetPort(token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SerialService_ForgetPort_ParamsSpec,
      blink.mojom.SerialService_ForgetPort_ResponseParamsSpec,
      [token],
      false);
  }

};

blink.mojom.SerialService.getRemote = function() {
  let remote = new blink.mojom.SerialServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SerialService',
    'context');
  return remote.$;
};

blink.mojom.SerialServicePtr = blink.mojom.SerialServiceRemote;
blink.mojom.SerialServiceRequest = blink.mojom.SerialServicePendingReceiver;


// Interface: SerialServiceClient
mojo.internal.Struct(
    blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec, 'blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_Params', [
      mojo.internal.StructField('port_info', 0, 0, blink.mojom.SerialPortInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SerialServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SerialServiceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SerialServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SerialServiceClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.SerialServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SerialServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPortConnectedStateChanged(port_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec,
      null,
      [port_info],
      false);
  }

};

blink.mojom.SerialServiceClient.getRemote = function() {
  let remote = new blink.mojom.SerialServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SerialServiceClient',
    'context');
  return remote.$;
};

blink.mojom.SerialServiceClientPtr = blink.mojom.SerialServiceClientRemote;
blink.mojom.SerialServiceClientRequest = blink.mojom.SerialServiceClientPendingReceiver;

