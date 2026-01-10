// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/timer.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcTimerResult
arc.mojom.mojom.ArcTimerResult = {
  SUCCESS: 0,
  FAILURE: 1,
};
arc.mojom.mojom.ArcTimerResultSpec = { $: mojo.internal.Enum() };

// Enum: ClockId
arc.mojom.mojom.ClockId = {
  REALTIME_ALARM: 0,
  BOOTTIME_ALARM: 1,
};
arc.mojom.mojom.ClockIdSpec = { $: mojo.internal.Enum() };

// Struct: CreateTimerRequest
arc.mojom.mojom.CreateTimerRequestSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CreateTimerRequest',
      packedSize: 16,
      fields: [
        { name: 'clock_id', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ClockIdSpec, nullable: false, minVersion: 0 },
        { name: 'expiration_fd', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: TimerHost
arc.mojom.mojom.TimerHost = {};

arc.mojom.mojom.TimerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.TimerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TimerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.TimerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.TimerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.TimerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createTimers(timer_requests) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.TimerHost_CreateTimers_ParamsSpec,
      arc.mojom.mojom.TimerHost_CreateTimers_ResponseParamsSpec,
      [timer_requests]);
  }

  startTimer(clock_id, absolute_expiration_time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.TimerHost_StartTimer_ParamsSpec,
      arc.mojom.mojom.TimerHost_StartTimer_ResponseParamsSpec,
      [clock_id, absolute_expiration_time]);
  }

  setTime(time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.TimerHost_SetTime_ParamsSpec,
      arc.mojom.mojom.TimerHost_SetTime_ResponseParamsSpec,
      [time]);
  }

};

arc.mojom.mojom.TimerHost.getRemote = function() {
  let remote = new arc.mojom.mojom.TimerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TimerHost',
    'context');
  return remote.$;
};

// ParamsSpec for CreateTimers
arc.mojom.mojom.TimerHost_CreateTimers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TimerHost.CreateTimers_Params',
      packedSize: 16,
      fields: [
        { name: 'timer_requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.CreateTimerRequestSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.TimerHost_CreateTimers_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TimerHost.CreateTimers_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcTimerResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartTimer
arc.mojom.mojom.TimerHost_StartTimer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TimerHost.StartTimer_Params',
      packedSize: 24,
      fields: [
        { name: 'clock_id', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ClockIdSpec, nullable: false, minVersion: 0 },
        { name: 'absolute_expiration_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.TimerHost_StartTimer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TimerHost.StartTimer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcTimerResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTime
arc.mojom.mojom.TimerHost_SetTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TimerHost.SetTime_Params',
      packedSize: 16,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.TimerHost_SetTime_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TimerHost.SetTime_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcTimerResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.TimerHostPtr = arc.mojom.mojom.TimerHostRemote;
arc.mojom.mojom.TimerHostRequest = arc.mojom.mojom.TimerHostPendingReceiver;


// Interface: TimerInstance
arc.mojom.mojom.TimerInstance = {};

arc.mojom.mojom.TimerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.TimerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TimerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.TimerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.TimerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.TimerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.TimerInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.TimerInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.TimerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TimerInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.TimerInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TimerInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.TimerInstancePtr = arc.mojom.mojom.TimerInstanceRemote;
arc.mojom.mojom.TimerInstanceRequest = arc.mojom.mojom.TimerInstancePendingReceiver;

