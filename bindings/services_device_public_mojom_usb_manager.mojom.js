// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager.mojom
// Module: device.mojom

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
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
      mojo.internal.StructField('lifeline_fd', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('allowed_interfaces_mask', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParamsSpec, 'device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.UsbDeviceManager_SetClient_ParamsSpec, 'device.mojom.UsbDeviceManager_SetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
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
  enumerateDevicesAndSetClient(client) {
    return this.$.enumerateDevicesAndSetClient(client);
  }
  getDevices(options) {
    return this.$.getDevices(options);
  }
  getDevice(guid, blocked_interface_classes, device_receiver, device_client) {
    return this.$.getDevice(guid, blocked_interface_classes, device_receiver, device_client);
  }
  getSecurityKeyDevice(guid, device_receiver, device_client) {
    return this.$.getSecurityKeyDevice(guid, device_receiver, device_client);
  }
  refreshDeviceInfo(guid) {
    return this.$.refreshDeviceInfo(guid);
  }
  checkAccess(guid) {
    return this.$.checkAccess(guid);
  }
  openFileDescriptor(guid, allowed_interfaces_mask, lifeline_fd) {
    return this.$.openFileDescriptor(guid, allowed_interfaces_mask, lifeline_fd);
  }
  setClient(client) {
    return this.$.setClient(client);
  }
};

device.mojom.UsbDeviceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbDeviceManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  enumerateDevicesAndSetClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec,
      device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsSpec,
      [client],
      false);
  }

  getDevices(options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device.mojom.UsbDeviceManager_GetDevices_ParamsSpec,
      device.mojom.UsbDeviceManager_GetDevices_ResponseParamsSpec,
      [options],
      false);
  }

  getDevice(guid, blocked_interface_classes, device_receiver, device_client) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device.mojom.UsbDeviceManager_GetDevice_ParamsSpec,
      null,
      [guid, blocked_interface_classes, device_receiver, device_client],
      false);
  }

  getSecurityKeyDevice(guid, device_receiver, device_client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec,
      null,
      [guid, device_receiver, device_client],
      false);
  }

  refreshDeviceInfo(guid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec,
      device.mojom.UsbDeviceManager_RefreshDeviceInfo_ResponseParamsSpec,
      [guid],
      false);
  }

  checkAccess(guid) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec,
      device.mojom.UsbDeviceManager_CheckAccess_ResponseParamsSpec,
      [guid],
      false);
  }

  openFileDescriptor(guid, allowed_interfaces_mask, lifeline_fd) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec,
      device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParamsSpec,
      [guid, allowed_interfaces_mask, lifeline_fd],
      false);
  }

  setClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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

device.mojom.UsbDeviceManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbDeviceManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManager_GetDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManager_GetDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device.mojom.UsbDeviceManager_SetClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec.$.structSpec);
          const result = this.impl.enumerateDevicesAndSetClient(params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManager_GetDevices_ParamsSpec.$.structSpec);
          const result = this.impl.getDevices(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManager_GetDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManager_GetDevice_ParamsSpec.$.structSpec);
          const result = this.impl.getDevice(params.guid, params.blocked_interface_classes, params.device_receiver, params.device_client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec.$.structSpec);
          const result = this.impl.getSecurityKeyDevice(params.guid, params.device_receiver, params.device_client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec.$.structSpec);
          const result = this.impl.refreshDeviceInfo(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManager_RefreshDeviceInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec.$.structSpec);
          const result = this.impl.checkAccess(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManager_CheckAccess_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec.$.structSpec);
          const result = this.impl.openFileDescriptor(params.guid, params.allowed_interfaces_mask, params.lifeline_fd);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.UsbDeviceManager_OpenFileDescriptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device.mojom.UsbDeviceManager_SetClient_ParamsSpec.$.structSpec);
          const result = this.impl.setClient(params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

device.mojom.UsbDeviceManagerReceiver = device.mojom.UsbDeviceManagerReceiver;

device.mojom.UsbDeviceManagerPtr = device.mojom.UsbDeviceManagerRemote;
device.mojom.UsbDeviceManagerRequest = device.mojom.UsbDeviceManagerPendingReceiver;

