// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/midis.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: MidisDeviceInfo
arc.mojom.mojom.MidisDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MidisDeviceInfo',
      packedSize: 40,
      fields: [
        { name: 'card', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_num', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'num_subdevices', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'manufacturer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: MidisRequest
arc.mojom.mojom.MidisRequestSpec = {
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
arc.mojom.mojom.MidisClient = {};

arc.mojom.mojom.MidisClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.MidisClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.MidisClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.MidisClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.MidisClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceAdded(device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.MidisClient_OnDeviceAdded_ParamsSpec,
      null,
      [device]);
  }

  onDeviceRemoved(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.MidisClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device]);
  }

};

arc.mojom.mojom.MidisClient.getRemote = function() {
  let remote = new arc.mojom.mojom.MidisClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceAdded
arc.mojom.mojom.MidisClient_OnDeviceAdded_ParamsSpec = {
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
arc.mojom.mojom.MidisClient_OnDeviceRemoved_ParamsSpec = {
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
arc.mojom.mojom.MidisClientPtr = arc.mojom.mojom.MidisClientRemote;
arc.mojom.mojom.MidisClientRequest = arc.mojom.mojom.MidisClientPendingReceiver;


// Interface: MidisServer
arc.mojom.mojom.MidisServer = {};

arc.mojom.mojom.MidisServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.MidisServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.MidisServerPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.MidisServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.MidisServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.MidisServer_ListDevices_ParamsSpec,
      arc.mojom.mojom.MidisServer_ListDevices_ResponseParamsSpec,
      []);
  }

  requestPort(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.MidisServer_RequestPort_ParamsSpec,
      arc.mojom.mojom.MidisServer_RequestPort_ResponseParamsSpec,
      [request]);
  }

  closeDevice(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.MidisServer_CloseDevice_ParamsSpec,
      null,
      [request]);
  }

};

arc.mojom.mojom.MidisServer.getRemote = function() {
  let remote = new arc.mojom.mojom.MidisServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisServer',
    'context');
  return remote.$;
};

// ParamsSpec for ListDevices
arc.mojom.mojom.MidisServer_ListDevices_ParamsSpec = {
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

arc.mojom.mojom.MidisServer_ListDevices_ResponseParamsSpec = {
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
arc.mojom.mojom.MidisServer_RequestPort_ParamsSpec = {
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

arc.mojom.mojom.MidisServer_RequestPort_ResponseParamsSpec = {
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
arc.mojom.mojom.MidisServer_CloseDevice_ParamsSpec = {
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
arc.mojom.mojom.MidisServerPtr = arc.mojom.mojom.MidisServerRemote;
arc.mojom.mojom.MidisServerRequest = arc.mojom.mojom.MidisServerPendingReceiver;


// Interface: MidisHost
arc.mojom.mojom.MidisHost = {};

arc.mojom.mojom.MidisHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.MidisHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.MidisHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.MidisHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.MidisHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(server, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.MidisHost_Connect_ParamsSpec,
      null,
      [server, client]);
  }

};

arc.mojom.mojom.MidisHost.getRemote = function() {
  let remote = new arc.mojom.mojom.MidisHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisHost',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
arc.mojom.mojom.MidisHost_Connect_ParamsSpec = {
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
arc.mojom.mojom.MidisHostPtr = arc.mojom.mojom.MidisHostRemote;
arc.mojom.mojom.MidisHostRequest = arc.mojom.mojom.MidisHostPendingReceiver;


// Interface: MidisInstance
arc.mojom.mojom.MidisInstance = {};

arc.mojom.mojom.MidisInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.MidisInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.MidisInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.MidisInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.MidisInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.MidisInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.MidisInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.MidisInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.MidisInstance_Init_ParamsSpec = {
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
arc.mojom.mojom.MidisInstancePtr = arc.mojom.mojom.MidisInstanceRemote;
arc.mojom.mojom.MidisInstanceRequest = arc.mojom.mojom.MidisInstancePendingReceiver;

