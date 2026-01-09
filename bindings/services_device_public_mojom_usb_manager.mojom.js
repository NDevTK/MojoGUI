// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Interface: UsbDeviceManager
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
      device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec.$,
      device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsSpec.$,
      [client]);
  }

  getDevices(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.UsbDeviceManager_GetDevices_ParamsSpec.$,
      device.mojom.UsbDeviceManager_GetDevices_ResponseParamsSpec.$,
      [options]);
  }

  getDevice(guid, blocked_interface_classes, device_receiver, device_client) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.UsbDeviceManager_GetDevice_ParamsSpec.$,
      null,
      [guid, blocked_interface_classes, device_receiver, device_client]);
  }

  getSecurityKeyDevice(guid, device_receiver, device_client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec.$,
      null,
      [guid, device_receiver, device_client]);
  }

  refreshDeviceInfo(guid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec.$,
      device.mojom.UsbDeviceManager_RefreshDeviceInfo_ResponseParamsSpec.$,
      [guid]);
  }

  checkAccess(guid) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec.$,
      device.mojom.UsbDeviceManager_CheckAccess_ResponseParamsSpec.$,
      [guid]);
  }

  openFileDescriptor(guid, allowed_interfaces_mask, lifeline_fd) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec.$,
      device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParamsSpec.$,
      [guid, allowed_interfaces_mask, lifeline_fd]);
  }

  setClient(client) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device.mojom.UsbDeviceManager_SetClient_ParamsSpec.$,
      null,
      [client]);
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

// ParamsSpec for EnumerateDevicesAndSetClient
device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.EnumerateDevicesAndSetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.EnumerateDevicesAndSetClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDevices
device.mojom.UsbDeviceManager_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.GetDevices_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDeviceManager_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDevice
device.mojom.UsbDeviceManager_GetDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.GetDevice_Params',
      packedSize: 40,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'blocked_interface_classes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSecurityKeyDevice
device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.GetSecurityKeyDevice_Params',
      packedSize: 32,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'device_client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RefreshDeviceInfo
device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.RefreshDeviceInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDeviceManager_RefreshDeviceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.RefreshDeviceInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CheckAccess
device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.CheckAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDeviceManager_CheckAccess_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.CheckAccess_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFileDescriptor
device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.OpenFileDescriptor_Params',
      packedSize: 32,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allowed_interfaces_mask', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'lifeline_fd', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.OpenFileDescriptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetClient
device.mojom.UsbDeviceManager_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceManager.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.UsbDeviceManagerPtr = device.mojom.UsbDeviceManagerRemote;
device.mojom.UsbDeviceManagerRequest = device.mojom.UsbDeviceManagerPendingReceiver;

