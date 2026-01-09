// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/input_service.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


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

// Interface: InputDeviceManagerClient
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
      device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec.$,
      null,
      [device_info]);
  }

  inputDeviceRemoved(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec.$,
      null,
      [id]);
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

// ParamsSpec for InputDeviceAdded
device.mojom.InputDeviceManagerClient_InputDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManagerClient.InputDeviceAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'device_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InputDeviceRemoved
device.mojom.InputDeviceManagerClient_InputDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManagerClient.InputDeviceRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.InputDeviceManagerClientPtr = device.mojom.InputDeviceManagerClientRemote;
device.mojom.InputDeviceManagerClientRequest = device.mojom.InputDeviceManagerClientPendingReceiver;


// Interface: InputDeviceManager
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
      device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec.$,
      device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec.$,
      [client]);
  }

  getDevices() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.InputDeviceManager_GetDevices_ParamsSpec.$,
      device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for GetDevicesAndSetClient
device.mojom.InputDeviceManager_GetDevicesAndSetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManager.GetDevicesAndSetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.InputDeviceManager_GetDevicesAndSetClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManager.GetDevicesAndSetClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDevices
device.mojom.InputDeviceManager_GetDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManager.GetDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.InputDeviceManager_GetDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.InputDeviceManager.GetDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.InputDeviceManagerPtr = device.mojom.InputDeviceManagerRemote;
device.mojom.InputDeviceManagerRequest = device.mojom.InputDeviceManagerPendingReceiver;

