// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/input_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: InputDeviceSubsystem
device.mojom.mojom.InputDeviceSubsystem = {
  SUBSYSTEM_HID: 0,
  SUBSYSTEM_INPUT: 1,
  SUBSYSTEM_UNKNOWN: 2,
};
device.mojom.mojom.InputDeviceSubsystemSpec = { $: mojo.internal.Enum() };

// Enum: InputDeviceType
device.mojom.mojom.InputDeviceType = {
  TYPE_BLUETOOTH: 0,
  TYPE_USB: 1,
  TYPE_SERIO: 2,
  TYPE_UNKNOWN: 3,
};
device.mojom.mojom.InputDeviceTypeSpec = { $: mojo.internal.Enum() };

// Struct: InputDeviceInfo
device.mojom.mojom.InputDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceInfo',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'subsystem', packedOffset: 16, packedBitOffset: 0, type: device.mojom.InputDeviceSubsystemSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 20, packedBitOffset: 0, type: device.mojom.InputDeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_accelerometer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_joystick', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_key', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_keyboard', packedOffset: 24, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_mouse', packedOffset: 24, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_tablet', packedOffset: 24, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_touchpad', packedOffset: 24, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_touchscreen', packedOffset: 24, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: InputDeviceManagerClient
device.mojom.mojom.InputDeviceManagerClient = {};

device.mojom.mojom.InputDeviceManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.InputDeviceManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.InputDeviceManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.InputDeviceManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.InputDeviceManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.InputDeviceManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  inputDeviceAdded(device_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec,
      null,
      [device_info]);
  }

  inputDeviceRemoved(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec,
      null,
      [id]);
  }

};

device.mojom.mojom.InputDeviceManagerClient.getRemote = function() {
  let remote = new device.mojom.mojom.InputDeviceManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.InputDeviceManagerClient',
    'context');
  return remote.$;
};

// ParamsSpec for InputDeviceAdded
device.mojom.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManagerClient.InputDeviceAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: device.mojom.InputDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InputDeviceRemoved
device.mojom.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManagerClient.InputDeviceRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.InputDeviceManagerClientPtr = device.mojom.mojom.InputDeviceManagerClientRemote;
device.mojom.mojom.InputDeviceManagerClientRequest = device.mojom.mojom.InputDeviceManagerClientPendingReceiver;


// Interface: InputDeviceManager
device.mojom.mojom.InputDeviceManager = {};

device.mojom.mojom.InputDeviceManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.InputDeviceManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.InputDeviceManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.InputDeviceManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.InputDeviceManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.InputDeviceManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDevicesAndSetClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec,
      device.mojom.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec,
      [client]);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.InputDeviceManager_GetDevices_ParamsSpec,
      device.mojom.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec,
      []);
  }

};

device.mojom.mojom.InputDeviceManager.getRemote = function() {
  let remote = new device.mojom.mojom.InputDeviceManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.InputDeviceManager',
    'context');
  return remote.$;
};

// ParamsSpec for GetDevicesAndSetClient
device.mojom.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManager.GetDevicesAndSetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManager.GetDevicesAndSetClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.InputDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDevices
device.mojom.mojom.InputDeviceManager_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManager.GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManager.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.InputDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.InputDeviceManagerPtr = device.mojom.mojom.InputDeviceManagerRemote;
device.mojom.mojom.InputDeviceManagerRequest = device.mojom.mojom.InputDeviceManagerPendingReceiver;

