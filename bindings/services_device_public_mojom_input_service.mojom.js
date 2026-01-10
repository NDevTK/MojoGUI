// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/input_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.InputDeviceSubsystemSpec = { $: mojo.internal.Enum() };
device.mojom.InputDeviceTypeSpec = { $: mojo.internal.Enum() };
device.mojom.InputDeviceInfoSpec = { $: {} };
device.mojom.InputDeviceManagerClient = {};
device.mojom.InputDeviceManagerClient.$interfaceName = 'device.mojom.InputDeviceManagerClient';
device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec = { $: {} };
device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec = { $: {} };
device.mojom.InputDeviceManager = {};
device.mojom.InputDeviceManager.$interfaceName = 'device.mojom.InputDeviceManager';
device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec = { $: {} };
device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec = { $: {} };
device.mojom.InputDeviceManager_GetDevices_ParamsSpec = { $: {} };
device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec = { $: {} };

// Enum: InputDeviceSubsystem
device.mojom.InputDeviceSubsystem = {
  SUBSYSTEM_HID: 0,
  SUBSYSTEM_INPUT: 1,
  SUBSYSTEM_UNKNOWN: 2,
};

// Enum: InputDeviceType
device.mojom.InputDeviceType = {
  TYPE_BLUETOOTH: 0,
  TYPE_USB: 1,
  TYPE_SERIO: 2,
  TYPE_UNKNOWN: 3,
};

// Struct: InputDeviceInfo
mojo.internal.Struct(
    device.mojom.InputDeviceInfoSpec, 'device.mojom.InputDeviceInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('subsystem', 16, 0, device.mojom.InputDeviceSubsystemSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, device.mojom.InputDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_accelerometer', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_joystick', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_key', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_keyboard', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_mouse', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_tablet', 32, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_touchpad', 32, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_touchscreen', 32, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: InputDeviceManagerClient
mojo.internal.Struct(
    device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec, 'device.mojom.InputDeviceManagerClient_InputDeviceAdded_Params', [
      mojo.internal.StructField('device_info', 0, 0, device.mojom.InputDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec, 'device.mojom.InputDeviceManagerClient_InputDeviceRemoved_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.InputDeviceManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.InputDeviceManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.InputDeviceManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.InputDeviceManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.InputDeviceManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.InputDeviceManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  inputDeviceAdded(device_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec,
      null,
      [device_info],
      false);
  }

  inputDeviceRemoved(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec,
      null,
      [id],
      false);
  }

};

device.mojom.InputDeviceManagerClient.getRemote = function() {
  let remote = new device.mojom.InputDeviceManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.InputDeviceManagerClient',
    'context');
  return remote.$;
};

device.mojom.InputDeviceManagerClientReceiver = class {
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
          const params = device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.inputDeviceAdded(params.device_info);
          break;
        }
        case 1: {
          const params = device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.inputDeviceRemoved(params.id);
          break;
        }
      }
    });
  }
};

device.mojom.InputDeviceManagerClientReceiver = device.mojom.InputDeviceManagerClientReceiver;

device.mojom.InputDeviceManagerClientPtr = device.mojom.InputDeviceManagerClientRemote;
device.mojom.InputDeviceManagerClientRequest = device.mojom.InputDeviceManagerClientPendingReceiver;


// Interface: InputDeviceManager
mojo.internal.Struct(
    device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec, 'device.mojom.InputDeviceManager_GetDevicesAndSetClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec, 'device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.InputDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.InputDeviceManager_GetDevices_ParamsSpec, 'device.mojom.InputDeviceManager_GetDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec, 'device.mojom.InputDeviceManager_GetDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(device.mojom.InputDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.InputDeviceManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.InputDeviceManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.InputDeviceManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.InputDeviceManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.InputDeviceManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.InputDeviceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDevicesAndSetClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec,
      device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec,
      [client],
      false);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.InputDeviceManager_GetDevices_ParamsSpec,
      device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.InputDeviceManager.getRemote = function() {
  let remote = new device.mojom.InputDeviceManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.InputDeviceManager',
    'context');
  return remote.$;
};

device.mojom.InputDeviceManagerReceiver = class {
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
          const params = device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDevicesAndSetClient(params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = device.mojom.InputDeviceManager_GetDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

device.mojom.InputDeviceManagerReceiver = device.mojom.InputDeviceManagerReceiver;

device.mojom.InputDeviceManagerPtr = device.mojom.InputDeviceManagerRemote;
device.mojom.InputDeviceManagerRequest = device.mojom.InputDeviceManagerPendingReceiver;

