// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager_test.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var url = url || {};

device.mojom.TestDeviceInfoSpec = { $: {} };
device.mojom.UsbDeviceManagerTest = {};
device.mojom.UsbDeviceManagerTest.$interfaceName = 'device.mojom.UsbDeviceManagerTest';
device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec = { $: {} };

// Struct: TestDeviceInfo
mojo.internal.Struct(
    device.mojom.TestDeviceInfoSpec, 'device.mojom.TestDeviceInfo', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('landing_page', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: UsbDeviceManagerTest
mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('serial_number', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('landing_page', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParams', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec, 'device.mojom.UsbDeviceManagerTest_GetTestDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec, 'device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.TestDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_AddDeviceForTesting_ResponseParamsSpec,
      [name, serial_number, landing_page],
      false);
  }

  removeDeviceForTesting(guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_RemoveDeviceForTesting_ResponseParamsSpec,
      [guid],
      false);
  }

  getTestDevices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.UsbDeviceManagerTest_GetTestDevices_ParamsSpec,
      device.mojom.UsbDeviceManagerTest_GetTestDevices_ResponseParamsSpec,
      [],
      false);
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

device.mojom.UsbDeviceManagerTestPtr = device.mojom.UsbDeviceManagerTestRemote;
device.mojom.UsbDeviceManagerTestRequest = device.mojom.UsbDeviceManagerTestPendingReceiver;

