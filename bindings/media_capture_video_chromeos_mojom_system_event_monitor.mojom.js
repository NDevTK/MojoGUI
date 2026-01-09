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

// Legacy compatibility
cros.mojom.CrosDisplayObserverPtr = cros.mojom.CrosDisplayObserverRemote;
cros.mojom.CrosDisplayObserverRequest = cros.mojom.CrosDisplayObserverPendingReceiver;


// Interface: CrosLidObserver
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

// Legacy compatibility
cros.mojom.CrosLidObserverPtr = cros.mojom.CrosLidObserverRemote;
cros.mojom.CrosLidObserverRequest = cros.mojom.CrosLidObserverPendingReceiver;


// Interface: CrosPowerObserver
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

// Legacy compatibility
cros.mojom.CrosPowerObserverPtr = cros.mojom.CrosPowerObserverRemote;
cros.mojom.CrosPowerObserverRequest = cros.mojom.CrosPowerObserverPendingReceiver;


// Interface: CrosSystemEventMonitor
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

// Legacy compatibility
cros.mojom.CrosSystemEventMonitorPtr = cros.mojom.CrosSystemEventMonitorRemote;
cros.mojom.CrosSystemEventMonitorRequest = cros.mojom.CrosSystemEventMonitorPendingReceiver;

