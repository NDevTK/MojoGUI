// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_client.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var services = services || {};

device.mojom.UsbDeviceManagerClient = {};
device.mojom.UsbDeviceManagerClient.$interfaceName = 'device.mojom.UsbDeviceManagerClient';
device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec = { $: {} };

// Interface: UsbDeviceManagerClient
mojo.internal.Struct(
    device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec, 'device.mojom.UsbDeviceManagerClient_OnDeviceAdded_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.UsbDeviceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec, 'device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.UsbDeviceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.UsbDeviceManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.UsbDeviceManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.UsbDeviceManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.UsbDeviceManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.UsbDeviceManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.UsbDeviceManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceAdded(device_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec,
      null,
      [device_info]);
  }

  onDeviceRemoved(device_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device_info]);
  }

};

device.mojom.UsbDeviceManagerClient.getRemote = function() {
  let remote = new device.mojom.UsbDeviceManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.UsbDeviceManagerClient',
    'context');
  return remote.$;
};

device.mojom.UsbDeviceManagerClientPtr = device.mojom.UsbDeviceManagerClientRemote;
device.mojom.UsbDeviceManagerClientRequest = device.mojom.UsbDeviceManagerClientPendingReceiver;

