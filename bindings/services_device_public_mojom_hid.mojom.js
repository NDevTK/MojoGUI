// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/hid.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: HidBusType
device.mojom.HidBusType = {
  kHIDBusTypeUSB: 0,
  kHIDBusTypeBluetooth: 1,
};

// Struct: HidUsageAndPage
device.mojom.HidUsageAndPageSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidUsageAndPage',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HidReportItem
device.mojom.HidReportItemSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidReportItem',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HidReportDescription
device.mojom.HidReportDescriptionSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidReportDescription',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HidCollectionInfo
device.mojom.HidCollectionInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidCollectionInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HidDeviceInfo
device.mojom.HidDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.HidDeviceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: HidManagerClient
device.mojom.HidManagerClient = {};

device.mojom.HidManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidManagerClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidManagerClientPendingReceiver,
      handle);
    this.$ = new device.mojom.HidManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

device.mojom.HidManagerClient.getRemote = function() {
  let remote = new device.mojom.HidManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidManagerClient',
    'context');
  return remote.$;
};

// Legacy compatibility
device.mojom.HidManagerClientPtr = device.mojom.HidManagerClientRemote;
device.mojom.HidManagerClientRequest = device.mojom.HidManagerClientPendingReceiver;


// Interface: HidManager
device.mojom.HidManager = {};

device.mojom.HidManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.HidManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

device.mojom.HidManager.getRemote = function() {
  let remote = new device.mojom.HidManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidManager',
    'context');
  return remote.$;
};

// Legacy compatibility
device.mojom.HidManagerPtr = device.mojom.HidManagerRemote;
device.mojom.HidManagerRequest = device.mojom.HidManagerPendingReceiver;


// Interface: HidConnection
device.mojom.HidConnection = {};

device.mojom.HidConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidConnectionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidConnectionPendingReceiver,
      handle);
    this.$ = new device.mojom.HidConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

device.mojom.HidConnection.getRemote = function() {
  let remote = new device.mojom.HidConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnection',
    'context');
  return remote.$;
};

// Legacy compatibility
device.mojom.HidConnectionPtr = device.mojom.HidConnectionRemote;
device.mojom.HidConnectionRequest = device.mojom.HidConnectionPendingReceiver;


// Interface: HidConnectionClient
device.mojom.HidConnectionClient = {};

device.mojom.HidConnectionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidConnectionClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnectionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidConnectionClientPendingReceiver,
      handle);
    this.$ = new device.mojom.HidConnectionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidConnectionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

device.mojom.HidConnectionClient.getRemote = function() {
  let remote = new device.mojom.HidConnectionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnectionClient',
    'context');
  return remote.$;
};

// Legacy compatibility
device.mojom.HidConnectionClientPtr = device.mojom.HidConnectionClientRemote;
device.mojom.HidConnectionClientRequest = device.mojom.HidConnectionClientPendingReceiver;


// Interface: HidConnectionWatcher
device.mojom.HidConnectionWatcher = {};

device.mojom.HidConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.HidConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.HidConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.HidConnectionWatcherPendingReceiver,
      handle);
    this.$ = new device.mojom.HidConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.HidConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

device.mojom.HidConnectionWatcher.getRemote = function() {
  let remote = new device.mojom.HidConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.HidConnectionWatcher',
    'context');
  return remote.$;
};

// Legacy compatibility
device.mojom.HidConnectionWatcherPtr = device.mojom.HidConnectionWatcherRemote;
device.mojom.HidConnectionWatcherRequest = device.mojom.HidConnectionWatcherPendingReceiver;

