// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_manager.mojom
// Module: device.mojom

'use strict';

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

device.mojom.UsbDeviceManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: EnumerateDevicesAndSetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnumerateDevicesAndSetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: GetDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.UsbDeviceManager_GetDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevices (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: GetDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.UsbDeviceManager_GetDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDevice (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetSecurityKeyDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSecurityKeyDevice (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: RefreshDeviceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshDeviceInfo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: CheckAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckAccess (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: OpenFileDescriptor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFileDescriptor (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.UsbDeviceManager_SetClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.UsbDeviceManager_EnumerateDevicesAndSetClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enumerateDevicesAndSetClient');
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
          const params = decoder.decodeStruct(device.mojom.UsbDeviceManager_GetDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDevices');
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
          const params = decoder.decodeStruct(device.mojom.UsbDeviceManager_GetDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDevice');
          const result = this.impl.getDevice(params.guid, params.blocked_interface_classes, params.device_receiver, params.device_client);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.UsbDeviceManager_GetSecurityKeyDevice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSecurityKeyDevice');
          const result = this.impl.getSecurityKeyDevice(params.guid, params.device_receiver, params.device_client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.UsbDeviceManager_RefreshDeviceInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.refreshDeviceInfo');
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
          const params = decoder.decodeStruct(device.mojom.UsbDeviceManager_CheckAccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.checkAccess');
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
          const params = decoder.decodeStruct(device.mojom.UsbDeviceManager_OpenFileDescriptor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openFileDescriptor');
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
          const params = decoder.decodeStruct(device.mojom.UsbDeviceManager_SetClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.UsbDeviceManagerReceiver = device.mojom.UsbDeviceManagerReceiver;

device.mojom.UsbDeviceManagerPtr = device.mojom.UsbDeviceManagerRemote;
device.mojom.UsbDeviceManagerRequest = device.mojom.UsbDeviceManagerPendingReceiver;

