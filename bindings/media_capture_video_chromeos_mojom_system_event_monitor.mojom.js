// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/system_event_monitor.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};


// Enum: LidState
cros.mojom.LidState = {
  kOpen: 0,
  kClosed: 1,
  kNotPresent: 2,
};
cros.mojom.LidStateSpec = { $: mojo.internal.Enum() };

// Enum: DeviceType
cros.mojom.DeviceType = {
  kAudio: 0,
  kVideoCapture: 1,
  kUnkown: 2,
};
cros.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: ClockwiseRotation
cros.mojom.ClockwiseRotation = {
  kRotate0: 0,
  kRotate90: 1,
  kRotate180: 2,
  kRotate270: 3,
};
cros.mojom.ClockwiseRotationSpec = { $: mojo.internal.Enum() };

// Interface: CrosDisplayObserver
cros.mojom.CrosDisplayObserver = {};

cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'rotation', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.ClockwiseRotationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.CrosDisplayObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosDisplayObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosDisplayObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosDisplayObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosDisplayObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosDisplayObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDisplayRotationChanged(rotation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec,
      null,
      [rotation]);
  }

};

cros.mojom.CrosDisplayObserver.getRemote = function() {
  let remote = new cros.mojom.CrosDisplayObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosDisplayObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDisplayRotationChanged
cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec = {
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
cros.mojom.CrosDisplayObserverPtr = cros.mojom.CrosDisplayObserverRemote;
cros.mojom.CrosDisplayObserverRequest = cros.mojom.CrosDisplayObserverPendingReceiver;


// Interface: CrosLidObserver
cros.mojom.CrosLidObserver = {};

cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosLidObserver_OnLidStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_state', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.LidStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.CrosLidObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosLidObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosLidObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosLidObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosLidObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosLidObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLidStateChanged(new_state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec,
      null,
      [new_state]);
  }

};

cros.mojom.CrosLidObserver.getRemote = function() {
  let remote = new cros.mojom.CrosLidObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosLidObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnLidStateChanged
cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec = {
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
cros.mojom.CrosLidObserverPtr = cros.mojom.CrosLidObserverRemote;
cros.mojom.CrosLidObserverRequest = cros.mojom.CrosLidObserverPendingReceiver;


// Interface: CrosPowerObserver
cros.mojom.CrosPowerObserver = {};

cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosPowerObserver_OnSystemSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosPowerObserver_OnSystemResume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

cros.mojom.CrosPowerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosPowerObserverRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosPowerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosPowerObserverPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosPowerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosPowerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSystemSuspend() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec,
      null,
      []);
  }

  onSystemResume() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec,
      null,
      []);
  }

};

cros.mojom.CrosPowerObserver.getRemote = function() {
  let remote = new cros.mojom.CrosPowerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosPowerObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSystemSuspend
cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec = {
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
cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec = {
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
cros.mojom.CrosPowerObserverPtr = cros.mojom.CrosPowerObserverRemote;
cros.mojom.CrosPowerObserverRequest = cros.mojom.CrosPowerObserverPendingReceiver;


// Interface: CrosSystemEventMonitor
cros.mojom.CrosSystemEventMonitor = {};

cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CrosDisplayObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosSystemEventMonitor_AddLidObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CrosLidObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosSystemEventMonitor_AddPowerObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'client_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(cros.mojom.CrosPowerObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: cros.mojom.DeviceTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

cros.mojom.CrosSystemEventMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cros.mojom.CrosSystemEventMonitorRemote = class {
  static get $interfaceName() {
    return 'cros.mojom.CrosSystemEventMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cros.mojom.CrosSystemEventMonitorPendingReceiver,
      handle);
    this.$ = new cros.mojom.CrosSystemEventMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cros.mojom.CrosSystemEventMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addDisplayObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec,
      null,
      [observer]);
  }

  addLidObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec,
      null,
      [observer]);
  }

  addPowerObserver(client_name, observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec,
      null,
      [client_name, observer]);
  }

  notifyDeviceChanged(type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec,
      null,
      [type]);
  }

};

cros.mojom.CrosSystemEventMonitor.getRemote = function() {
  let remote = new cros.mojom.CrosSystemEventMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cros.mojom.CrosSystemEventMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for AddDisplayObserver
cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec = {
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
cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec = {
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
cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec = {
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
cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec = {
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
cros.mojom.CrosSystemEventMonitorPtr = cros.mojom.CrosSystemEventMonitorRemote;
cros.mojom.CrosSystemEventMonitorRequest = cros.mojom.CrosSystemEventMonitorPendingReceiver;

