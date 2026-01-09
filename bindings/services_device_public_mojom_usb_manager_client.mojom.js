// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_client.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: UsbDeviceManagerClient
device.mojom.UsbDeviceManagerClient = {};

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

// ParamsSpec for OnDeviceAdded
device.mojom.UsbDeviceManagerClient_OnDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManagerClient.OnDeviceAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceRemoved
device.mojom.UsbDeviceManagerClient_OnDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManagerClient.OnDeviceRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.UsbDeviceManagerClientPtr = device.mojom.UsbDeviceManagerClientRemote;
device.mojom.UsbDeviceManagerClientRequest = device.mojom.UsbDeviceManagerClientPendingReceiver;

