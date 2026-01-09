// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_test.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: UsbDeviceManagerTest
device.mojom.UsbDeviceManagerTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.UsbDeviceManagerTestRemote = class {
  static get $interfaceName() {
    return 'device.mojom.UsbDeviceManagerTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.UsbDeviceManagerTestPendingReceiver,
      handle);
    this.$ = new device.mojom.UsbDeviceManagerTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.UsbDeviceManagerTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addDeviceForTesting(name, serial_number, landing_page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec.$,
      device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec.$,
      [name, serial_number, landing_page]);
  }

  removeDeviceForTesting(guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec.$,
      null,
      [guid]);
  }

  getTestDevices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec.$,
      device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec.$,
      []);
  }

};

device.mojom.UsbDeviceManagerTest.getRemote = function() {
  let remote = new device.mojom.UsbDeviceManagerTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.UsbDeviceManagerTest',
    'context');
  return remote.$;
};

// ParamsSpec for AddDeviceForTesting
device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManagerTest.AddDeviceForTesting_Params',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'serial_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'landing_page', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManagerTest.AddDeviceForTesting_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveDeviceForTesting
device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManagerTest.RemoveDeviceForTesting_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTestDevices
device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManagerTest.GetTestDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManagerTest.GetTestDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.UsbDeviceManagerTestPtr = device.mojom.UsbDeviceManagerTestRemote;
device.mojom.UsbDeviceManagerTestRequest = device.mojom.UsbDeviceManagerTestPendingReceiver;

