// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/timer.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcTimerResult
arc.mojom.ArcTimerResult = {
  SUCCESS: 0,
  FAILURE: 1,
};

// Enum: ClockId
arc.mojom.ClockId = {
  REALTIME_ALARM: 0,
  BOOTTIME_ALARM: 1,
};

// Interface: TimerHost
arc.mojom.TimerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TimerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TimerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TimerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.TimerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TimerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.TimerHost.getRemote = function() {
  let remote = new arc.mojom.TimerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TimerHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.TimerHostPtr = arc.mojom.TimerHostRemote;
arc.mojom.TimerHostRequest = arc.mojom.TimerHostPendingReceiver;


// Interface: TimerInstance
arc.mojom.TimerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TimerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TimerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TimerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.TimerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TimerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.TimerInstance.getRemote = function() {
  let remote = new arc.mojom.TimerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TimerInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.TimerInstancePtr = arc.mojom.TimerInstanceRemote;
arc.mojom.TimerInstanceRequest = arc.mojom.TimerInstancePendingReceiver;

