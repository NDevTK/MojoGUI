// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};

device.mojom.UsbDeviceManager = {};
device.mojom.UsbDeviceManager.$interfaceName = 'device.mojom.UsbDeviceManager';
device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_GetDevices_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_GetDevices_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_GetDevice_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_RefreshDeviceInfo_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_CheckAccess_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParamsSpec = { $: {} };
device.mojom.UsbDeviceManager_SetClient_ParamsSpec = { $: {} };

// Interface: UsbDeviceManager
mojo.internal.Struct(
    device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec, 'device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(device.mojom.UsbDeviceManagerClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsSpec, 'device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(device.mojom.UsbDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_GetDevices_ParamsSpec, 'device.mojom.UsbDeviceManager_GetDevices_Params', [
      mojo.internal.StructField('options', 0, 0, device.mojom.UsbEnumerationOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_GetDevices_ResponseParamsSpec, 'device.mojom.UsbDeviceManager_GetDevices_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(device.mojom.UsbDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_GetDevice_ParamsSpec, 'device.mojom.UsbDeviceManager_GetDevice_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('blocked_interface_classes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('device_receiver', 16, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_client', 24, 0, mojo.internal.InterfaceProxy(device.mojom.UsbDeviceClientRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec, 'device.mojom.UsbDeviceManager_GetSecurityKeyDevice_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_receiver', 8, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceRemote), null, false, 0, undefined),
      mojo.internal.StructField('device_client', 16, 0, mojo.internal.InterfaceProxy(device.mojom.UsbDeviceClientRemote), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec, 'device.mojom.UsbDeviceManager_RefreshDeviceInfo_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_RefreshDeviceInfo_ResponseParamsSpec, 'device.mojom.UsbDeviceManager_RefreshDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.UsbDeviceInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec, 'device.mojom.UsbDeviceManager_CheckAccess_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_CheckAccess_ResponseParamsSpec, 'device.mojom.UsbDeviceManager_CheckAccess_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec, 'device.mojom.UsbDeviceManager_OpenFileDescriptor_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('allowed_interfaces_mask', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lifeline_fd', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParamsSpec, 'device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_SetClient_ParamsSpec, 'device.mojom.UsbDeviceManager_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(device.mojom.UsbDeviceManagerClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.UsbDeviceManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.UsbDeviceManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.UsbDeviceManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.UsbDeviceManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.UsbDeviceManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.UsbDeviceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enumerateDevicesAndSetClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec,
      device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsSpec,
      [client],
      false);
  }

  getDevices(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.UsbDeviceManager_GetDevices_ParamsSpec,
      device.mojom.UsbDeviceManager_GetDevices_ResponseParamsSpec,
      [options],
      false);
  }

  getDevice(guid, blocked_interface_classes, device_receiver, device_client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.UsbDeviceManager_GetDevice_ParamsSpec,
      null,
      [guid, blocked_interface_classes, device_receiver, device_client],
      false);
  }

  getSecurityKeyDevice(guid, device_receiver, device_client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec,
      null,
      [guid, device_receiver, device_client],
      false);
  }

  refreshDeviceInfo(guid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec,
      device.mojom.UsbDeviceManager_RefreshDeviceInfo_ResponseParamsSpec,
      [guid],
      false);
  }

  checkAccess(guid) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec,
      device.mojom.UsbDeviceManager_CheckAccess_ResponseParamsSpec,
      [guid],
      false);
  }

  openFileDescriptor(guid, allowed_interfaces_mask, lifeline_fd) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec,
      device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParamsSpec,
      [guid, allowed_interfaces_mask, lifeline_fd],
      false);
  }

  setClient(client) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.UsbDeviceManager_SetClient_ParamsSpec,
      null,
      [client],
      false);
  }

};

device.mojom.UsbDeviceManager.getRemote = function() {
  let remote = new device.mojom.UsbDeviceManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.UsbDeviceManager',
    'context');
  return remote.$;
};

device.mojom.UsbDeviceManagerPtr = device.mojom.UsbDeviceManagerRemote;
device.mojom.UsbDeviceManagerRequest = device.mojom.UsbDeviceManagerPendingReceiver;

