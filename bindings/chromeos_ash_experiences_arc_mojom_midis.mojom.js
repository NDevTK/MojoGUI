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
        { name: 'card', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'device_num', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'num_subdevices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'flags', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'manufacturer', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'card', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'device_num', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'subdevice_num', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
arc.mojom.MidisInstancePtr = arc.mojom.MidisInstanceRemote;
arc.mojom.MidisInstanceRequest = arc.mojom.MidisInstancePendingReceiver;

