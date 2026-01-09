// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/usb/web_usb_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WebUsbService
blink.mojom.WebUsbService = {};

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
      blink.mojom.WebUsbService_GetDevices_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getDevice(guid, device_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebUsbService_GetDevice_ParamsSpec,
      null,
      null,
      [guid, device_receiver],
      undefined,
      undefined
    );
  }

  getPermission(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WebUsbService_GetPermission_ParamsSpec,
      blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec,
      blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec,
      [options],
      undefined,
      undefined
    );
  }

  forgetDevice(guid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WebUsbService_ForgetDevice_ParamsSpec,
      null,
      null,
      [guid],
      undefined,
      undefined
    );
  }

  setClient(client) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WebUsbService_SetClient_ParamsSpec,
      null,
      null,
      [client],
      undefined,
      undefined
    );
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
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebUsbServicePtr = blink.mojom.WebUsbServiceRemote;
blink.mojom.WebUsbServiceRequest = blink.mojom.WebUsbServicePendingReceiver;

