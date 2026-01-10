// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/system_event_monitor.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: LidState
cros.mojom.mojom.LidState = {
  kOpen: 0,
  kClosed: 1,
  kNotPresent: 2,
};
cros.mojom.mojom.LidStateSpec = { $: mojo.internal.Enum() };

// Enum: DeviceType
cros.mojom.mojom.DeviceType = {
  kAudio: 0,
  kVideoCapture: 1,
  kUnkown: 2,
};
cros.mojom.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: ClockwiseRotation
cros.mojom.mojom.ClockwiseRotation = {
  kRotate0: 0,
  kRotate90: 1,
  kRotate180: 2,
  kRotate270: 3,
};
cros.mojom.mojom.ClockwiseRotationSpec = { $: mojo.internal.Enum() };

// Interface: CrosDisplayObserver
cros.mojom.mojom.CrosDisplayObserver = {};

cros.mojom.mojom.CrosDisplayObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CrosDisplayObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosDisplayObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CrosDisplayObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CrosDisplayObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CrosDisplayObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayRotationChanged(rotation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec,
      null,
      [rotation]);
  }

};

cros.mojom.mojom.CrosDisplayObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.CrosDisplayObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosDisplayObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDisplayRotationChanged
cros.mojom.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosDisplayObserver.OnDisplayRotationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'rotation', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.ClockwiseRotationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CrosDisplayObserverPtr = cros.mojom.mojom.CrosDisplayObserverRemote;
cros.mojom.mojom.CrosDisplayObserverRequest = cros.mojom.mojom.CrosDisplayObserverPendingReceiver;


// Interface: CrosLidObserver
cros.mojom.mojom.CrosLidObserver = {};

cros.mojom.mojom.CrosLidObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CrosLidObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosLidObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CrosLidObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CrosLidObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CrosLidObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLidStateChanged(new_state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec,
      null,
      [new_state]);
  }

};

cros.mojom.mojom.CrosLidObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.CrosLidObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosLidObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnLidStateChanged
cros.mojom.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosLidObserver.OnLidStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_state', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.LidStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CrosLidObserverPtr = cros.mojom.mojom.CrosLidObserverRemote;
cros.mojom.mojom.CrosLidObserverRequest = cros.mojom.mojom.CrosLidObserverPendingReceiver;


// Interface: CrosPowerObserver
cros.mojom.mojom.CrosPowerObserver = {};

cros.mojom.mojom.CrosPowerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CrosPowerObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosPowerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CrosPowerObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CrosPowerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CrosPowerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSystemSuspend() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec,
      null,
      []);
  }

  onSystemResume() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec,
      null,
      []);
  }

};

cros.mojom.mojom.CrosPowerObserver.getRemote = function() {
  let remote = new cros.mojom.mojom.CrosPowerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosPowerObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSystemSuspend
cros.mojom.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosPowerObserver.OnSystemSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSystemResume
cros.mojom.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosPowerObserver.OnSystemResume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CrosPowerObserverPtr = cros.mojom.mojom.CrosPowerObserverRemote;
cros.mojom.mojom.CrosPowerObserverRequest = cros.mojom.mojom.CrosPowerObserverPendingReceiver;


// Interface: CrosSystemEventMonitor
cros.mojom.mojom.CrosSystemEventMonitor = {};

cros.mojom.mojom.CrosSystemEventMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.mojom.CrosSystemEventMonitorRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosSystemEventMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.mojom.CrosSystemEventMonitorPendingReceiver,
      handle);
    this.$ = new cros.mojom.mojom.CrosSystemEventMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.mojom.CrosSystemEventMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addDisplayObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec,
      null,
      [observer]);
  }

  addLidObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec,
      null,
      [observer]);
  }

  addPowerObserver(client_name, observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec,
      null,
      [client_name, observer]);
  }

  notifyDeviceChanged(type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec,
      null,
      [type]);
  }

};

cros.mojom.mojom.CrosSystemEventMonitor.getRemote = function() {
  let remote = new cros.mojom.mojom.CrosSystemEventMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosSystemEventMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for AddDisplayObserver
cros.mojom.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosSystemEventMonitor.AddDisplayObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CrosDisplayObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddLidObserver
cros.mojom.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosSystemEventMonitor.AddLidObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CrosLidObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddPowerObserver
cros.mojom.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosSystemEventMonitor.AddPowerObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'client_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CrosPowerObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyDeviceChanged
cros.mojom.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosSystemEventMonitor.NotifyDeviceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.DeviceTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cros.mojom.mojom.CrosSystemEventMonitorPtr = cros.mojom.mojom.CrosSystemEventMonitorRemote;
cros.mojom.mojom.CrosSystemEventMonitorRequest = cros.mojom.mojom.CrosSystemEventMonitorPendingReceiver;

