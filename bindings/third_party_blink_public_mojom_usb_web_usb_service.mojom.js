// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/usb/web_usb_service.mojom
// Module: blink.mojom

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
  getDevices() {
    return this.$.getDevices();
  }
  getDevice(guid, device_receiver) {
    return this.$.getDevice(guid, device_receiver);
  }
  getPermission(options) {
    return this.$.getPermission(options);
  }
  forgetDevice(guid) {
    return this.$.forgetDevice(guid);
  }
  setClient(client) {
    return this.$.setClient(client);
  }
};

blink.mojom.WebUsbServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebUsbService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDevices() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WebUsbService_GetDevices_ParamsSpec,
      blink.mojom.WebUsbService_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

  getDevice(guid, device_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.WebUsbService_GetDevice_ParamsSpec,
      null,
      [guid, device_receiver],
      false);
  }

  getPermission(options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.WebUsbService_GetPermission_ParamsSpec,
      blink.mojom.WebUsbService_GetPermission_ResponseParamsSpec,
      [options],
      false);
  }

  forgetDevice(guid) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.WebUsbService_ForgetDevice_ParamsSpec,
      blink.mojom.WebUsbService_ForgetDevice_ResponseParamsSpec,
      [guid],
      false);
  }

  setClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebUsbService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebUsbService_GetDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebUsbService_GetDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebUsbService_GetPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebUsbService_ForgetDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WebUsbService_SetClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebUsbService_GetDevices_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebUsbService_GetDevice_ParamsSpec.$.structSpec);
          const result = this.impl.getDevice(params.guid, params.device_receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebUsbService_GetPermission_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebUsbService_ForgetDevice_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WebUsbService_SetClient_ParamsSpec.$.structSpec);
          const result = this.impl.setClient(params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.WebUsbServiceReceiver = blink.mojom.WebUsbServiceReceiver;

blink.mojom.WebUsbServicePtr = blink.mojom.WebUsbServiceRemote;
blink.mojom.WebUsbServiceRequest = blink.mojom.WebUsbServicePendingReceiver;

