// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/usb/web_usb_service.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var device = device || {};

blink.mojom.WebUsbRequestDeviceOptionsSpec = { $: {} };
blink.mojom.WebUsbService = {};
blink.mojom.WebUsbService.$interfaceName = 'blink.mojom.WebUsbService';
blink.mojom.WebUsbService_GetDevices_ParamsSpec = { $: {} };
blink.mojom.WebUsbService_GetDevices_ResponseParamsSpec = { $: {} };
blink.mojom.WebUsbService_GetDevice_ParamsSpec = { $: {} };
blink.mojom.WebUsbService_GetPermission_ParamsSpec = { $: {} };
blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec = { $: {} };
blink.mojom.WebUsbService_ForgetDevice_ParamsSpec = { $: {} };
blink.mojom.WebUsbService_ForgetDevice_ResponseParamsSpec = { $: {} };
blink.mojom.WebUsbService_SetClient_ParamsSpec = { $: {} };

// Struct: WebUsbRequestDeviceOptions
mojo.internal.Struct(
    blink.mojom.WebUsbRequestDeviceOptionsSpec, 'blink.mojom.WebUsbRequestDeviceOptions', [
      mojo.internal.StructField('filters', 0, 0, mojo.internal.Array(device.mojom.UsbDeviceFilterSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('exclusion_filters', 8, 0, mojo.internal.Array(device.mojom.UsbDeviceFilterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebUsbService
mojo.internal.Struct(
    blink.mojom.WebUsbService_GetDevices_ParamsSpec, 'blink.mojom.WebUsbService_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebUsbService_GetDevices_ResponseParamsSpec, 'blink.mojom.WebUsbService_GetDevices_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(device.mojom.UsbDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebUsbService_GetDevice_ParamsSpec, 'blink.mojom.WebUsbService_GetDevice_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_receiver', 8, 0, mojo.internal.InterfaceRequest(device.mojom.UsbDeviceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebUsbService_GetPermission_ParamsSpec, 'blink.mojom.WebUsbService_GetPermission_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.WebUsbRequestDeviceOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec, 'blink.mojom.WebUsbService_GetPermission_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.UsbDeviceInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebUsbService_ForgetDevice_ParamsSpec, 'blink.mojom.WebUsbService_ForgetDevice_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebUsbService_ForgetDevice_ResponseParamsSpec, 'blink.mojom.WebUsbService_ForgetDevice_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WebUsbService_SetClient_ParamsSpec, 'blink.mojom.WebUsbService_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, pending_associated_remote<device.mojom.UsbDeviceManagerClient>Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  getDevice(guid, device_receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WebUsbService_GetDevice_ParamsSpec,
      null,
      [guid, device_receiver],
      false);
  }

  getPermission(options) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WebUsbService_GetPermission_ParamsSpec,
      blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec,
      [options],
      false);
  }

  forgetDevice(guid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WebUsbService_ForgetDevice_ParamsSpec,
      blink.mojom.WebUsbService_ForgetDevice_ResponseParamsSpec,
      [guid],
      false);
  }

  setClient(client) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WebUsbService_SetClient_ParamsSpec,
      null,
      [client],
      false);
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

blink.mojom.WebUsbServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebUsbService_GetDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebUsbService_GetDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.WebUsbService_GetDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDevice(params.guid, params.device_receiver);
          break;
        }
        case 2: {
          const params = blink.mojom.WebUsbService_GetPermission_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPermission(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.WebUsbService_ForgetDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forgetDevice(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WebUsbService_ForgetDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = blink.mojom.WebUsbService_SetClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setClient(params.client);
          break;
        }
      }
    });
  }
};

blink.mojom.WebUsbServiceReceiver = blink.mojom.WebUsbServiceReceiver;

blink.mojom.WebUsbServicePtr = blink.mojom.WebUsbServiceRemote;
blink.mojom.WebUsbServiceRequest = blink.mojom.WebUsbServicePendingReceiver;

