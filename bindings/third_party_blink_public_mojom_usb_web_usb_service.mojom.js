// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/usb/web_usb_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: WebUsbRequestDeviceOptions
blink.mojom.WebUsbRequestDeviceOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbRequestDeviceOptions',
      packedSize: 24,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.UsbDeviceFilterSpec, false), nullable: false, minVersion: 0 },
        { name: 'exclusion_filters', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.UsbDeviceFilterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebUsbService
blink.mojom.WebUsbService = {};

blink.mojom.WebUsbService_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService_GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WebUsbService_GetDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService_GetDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.UsbDeviceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.WebUsbService_GetPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService_GetPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebUsbRequestDeviceOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebUsbService_ForgetDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService_ForgetDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebUsbService_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService_SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(device.mojom.UsbDeviceManagerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebUsbServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebUsbServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebUsbService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebUsbServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebUsbServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebUsbServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebUsbService_GetDevices_ParamsSpec,
      blink.mojom.WebUsbService_GetDevices_ResponseParamsSpec,
      []);
  }

  getDevice(guid, device_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebUsbService_GetDevice_ParamsSpec,
      null,
      [guid, device_receiver]);
  }

  getPermission(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WebUsbService_GetPermission_ParamsSpec,
      blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec,
      [options]);
  }

  forgetDevice(guid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WebUsbService_ForgetDevice_ParamsSpec,
      null,
      [guid]);
  }

  setClient(client) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WebUsbService_SetClient_ParamsSpec,
      null,
      [client]);
  }

};

blink.mojom.WebUsbService.getRemote = function() {
  let remote = new blink.mojom.WebUsbServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebUsbService',
    'context');
  return remote.$;
};

// ParamsSpec for GetDevices
blink.mojom.WebUsbService_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService.GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.WebUsbService_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.UsbDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDevice
blink.mojom.WebUsbService_GetDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService.GetDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.UsbDeviceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetPermission
blink.mojom.WebUsbService_GetPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService.GetPermission_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebUsbRequestDeviceOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService.GetPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.UsbDeviceInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForgetDevice
blink.mojom.WebUsbService_ForgetDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService.ForgetDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetClient
blink.mojom.WebUsbService_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebUsbService.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(device.mojom.UsbDeviceManagerClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebUsbServicePtr = blink.mojom.WebUsbServiceRemote;
blink.mojom.WebUsbServiceRequest = blink.mojom.WebUsbServicePendingReceiver;

