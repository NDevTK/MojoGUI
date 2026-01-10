// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/video/chromeos/mojom/system_event_monitor.mojom
// Module: cros.mojom

'use strict';

// Module namespace
var cros = cros || {};
cros.mojom = cros.mojom || {};

cros.mojom.LidStateSpec = { $: mojo.internal.Enum() };
cros.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
cros.mojom.ClockwiseRotationSpec = { $: mojo.internal.Enum() };
cros.mojom.CrosDisplayObserver = {};
cros.mojom.CrosDisplayObserver.$interfaceName = 'cros.mojom.CrosDisplayObserver';
cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec = { $: {} };
cros.mojom.CrosLidObserver = {};
cros.mojom.CrosLidObserver.$interfaceName = 'cros.mojom.CrosLidObserver';
cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec = { $: {} };
cros.mojom.CrosPowerObserver = {};
cros.mojom.CrosPowerObserver.$interfaceName = 'cros.mojom.CrosPowerObserver';
cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec = { $: {} };
cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParamsSpec = { $: {} };
cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec = { $: {} };
cros.mojom.CrosSystemEventMonitor = {};
cros.mojom.CrosSystemEventMonitor.$interfaceName = 'cros.mojom.CrosSystemEventMonitor';
cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec = { $: {} };
cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec = { $: {} };
cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec = { $: {} };
cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec = { $: {} };

// Enum: LidState
cros.mojom.LidState = {
  kOpen: 0,
  kClosed: 1,
  kNotPresent: 2,
};

// Enum: DeviceType
cros.mojom.DeviceType = {
  kAudio: 0,
  kVideoCapture: 1,
  kUnkown: 2,
};

// Enum: ClockwiseRotation
cros.mojom.ClockwiseRotation = {
  kRotate0: 0,
  kRotate90: 1,
  kRotate180: 2,
  kRotate270: 3,
};

// Interface: CrosDisplayObserver
mojo.internal.Struct(
    cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_ParamsSpec, 'cros.mojom.CrosDisplayObserver_OnDisplayRotationChanged_Params', [
      mojo.internal.StructField('rotation', 0, 0, cros.mojom.ClockwiseRotationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

cros.mojom.CrosDisplayObserverPtr = cros.mojom.CrosDisplayObserverRemote;
cros.mojom.CrosDisplayObserverRequest = cros.mojom.CrosDisplayObserverPendingReceiver;


// Interface: CrosLidObserver
mojo.internal.Struct(
    cros.mojom.CrosLidObserver_OnLidStateChanged_ParamsSpec, 'cros.mojom.CrosLidObserver_OnLidStateChanged_Params', [
      mojo.internal.StructField('new_state', 0, 0, cros.mojom.LidStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

cros.mojom.CrosLidObserverPtr = cros.mojom.CrosLidObserverRemote;
cros.mojom.CrosLidObserverRequest = cros.mojom.CrosLidObserverPendingReceiver;


// Interface: CrosPowerObserver
mojo.internal.Struct(
    cros.mojom.CrosPowerObserver_OnSystemSuspend_ParamsSpec, 'cros.mojom.CrosPowerObserver_OnSystemSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParamsSpec, 'cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    cros.mojom.CrosPowerObserver_OnSystemResume_ParamsSpec, 'cros.mojom.CrosPowerObserver_OnSystemResume_Params', [
    ],
    [[0, 8]]);

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
      cros.mojom.CrosPowerObserver_OnSystemSuspend_ResponseParamsSpec,
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

cros.mojom.CrosPowerObserverPtr = cros.mojom.CrosPowerObserverRemote;
cros.mojom.CrosPowerObserverRequest = cros.mojom.CrosPowerObserverPendingReceiver;


// Interface: CrosSystemEventMonitor
mojo.internal.Struct(
    cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_ParamsSpec, 'cros.mojom.CrosSystemEventMonitor_AddDisplayObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CrosDisplayObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosSystemEventMonitor_AddLidObserver_ParamsSpec, 'cros.mojom.CrosSystemEventMonitor_AddLidObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(cros.mojom.CrosLidObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cros.mojom.CrosSystemEventMonitor_AddPowerObserver_ParamsSpec, 'cros.mojom.CrosSystemEventMonitor_AddPowerObserver_Params', [
      mojo.internal.StructField('client_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(cros.mojom.CrosPowerObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_ParamsSpec, 'cros.mojom.CrosSystemEventMonitor_NotifyDeviceChanged_Params', [
      mojo.internal.StructField('type', 0, 0, cros.mojom.DeviceTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

cros.mojom.CrosSystemEventMonitorPtr = cros.mojom.CrosSystemEventMonitorRemote;
cros.mojom.CrosSystemEventMonitorRequest = cros.mojom.CrosSystemEventMonitorPendingReceiver;

