// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/midis.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: MidisDeviceInfo
arc.mojom.MidisDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisDeviceInfo',
      packedSize: 40,
      fields: [
        { name: 'card', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_num', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_subdevices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'manufacturer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: MidisRequest
arc.mojom.MidisRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisRequest',
      packedSize: 24,
      fields: [
        { name: 'card', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_num', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'subdevice_num', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: MidisClient
arc.mojom.MidisClient = {};

arc.mojom.MidisClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MidisClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MidisClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.MidisClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MidisClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceAdded(device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec,
      null,
      [device]);
  }

  onDeviceRemoved(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.MidisClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device]);
  }

};

arc.mojom.MidisClient.getRemote = function() {
  let remote = new arc.mojom.MidisClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceAdded
arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisClient.OnDeviceAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MidisDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceRemoved
arc.mojom.MidisClient_OnDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisClient.OnDeviceRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MidisDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.MidisClientPtr = arc.mojom.MidisClientRemote;
arc.mojom.MidisClientRequest = arc.mojom.MidisClientPendingReceiver;


// Interface: MidisServer
arc.mojom.MidisServer = {};

arc.mojom.MidisServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MidisServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MidisServerPendingReceiver,
      handle);
    this.$ = new arc.mojom.MidisServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MidisServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MidisServer_ListDevices_ParamsSpec,
      arc.mojom.MidisServer_ListDevices_ResponseParamsSpec,
      []);
  }

  requestPort(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.MidisServer_RequestPort_ParamsSpec,
      arc.mojom.MidisServer_RequestPort_ResponseParamsSpec,
      [request]);
  }

  closeDevice(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.MidisServer_CloseDevice_ParamsSpec,
      null,
      [request]);
  }

};

arc.mojom.MidisServer.getRemote = function() {
  let remote = new arc.mojom.MidisServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisServer',
    'context');
  return remote.$;
};

// ParamsSpec for ListDevices
arc.mojom.MidisServer_ListDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisServer.ListDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.MidisServer_ListDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisServer.ListDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.MidisDeviceInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestPort
arc.mojom.MidisServer_RequestPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisServer.RequestPort_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MidisRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.MidisServer_RequestPort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisServer.RequestPort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'port_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseDevice
arc.mojom.MidisServer_CloseDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisServer.CloseDevice_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MidisRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.MidisServerPtr = arc.mojom.MidisServerRemote;
arc.mojom.MidisServerRequest = arc.mojom.MidisServerPendingReceiver;


// Interface: MidisHost
arc.mojom.MidisHost = {};

arc.mojom.MidisHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MidisHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MidisHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.MidisHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MidisHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(server, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MidisHost_Connect_ParamsSpec,
      null,
      [server, client]);
  }

};

arc.mojom.MidisHost.getRemote = function() {
  let remote = new arc.mojom.MidisHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisHost',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
arc.mojom.MidisHost_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisHost.Connect_Params',
      packedSize: 16,
      fields: [
        { name: 'server', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.MidisHostPtr = arc.mojom.MidisHostRemote;
arc.mojom.MidisHostRequest = arc.mojom.MidisHostPendingReceiver;


// Interface: MidisInstance
arc.mojom.MidisInstance = {};

arc.mojom.MidisInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MidisInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MidisInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MidisInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MidisInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.MidisInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.MidisInstance.getRemote = function() {
  let remote = new arc.mojom.MidisInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.MidisInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.MidisInstancePtr = arc.mojom.MidisInstanceRemote;
arc.mojom.MidisInstanceRequest = arc.mojom.MidisInstancePendingReceiver;

