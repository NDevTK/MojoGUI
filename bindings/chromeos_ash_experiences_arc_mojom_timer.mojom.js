// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/timer.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

arc.mojom.ArcTimerResultSpec = { $: mojo.internal.Enum() };
arc.mojom.ClockIdSpec = { $: mojo.internal.Enum() };
arc.mojom.CreateTimerRequestSpec = { $: {} };
arc.mojom.TimerHost = {};
arc.mojom.TimerHost.$interfaceName = 'arc.mojom.TimerHost';
arc.mojom.TimerHost_CreateTimers_ParamsSpec = { $: {} };
arc.mojom.TimerHost_CreateTimers_ResponseParamsSpec = { $: {} };
arc.mojom.TimerHost_StartTimer_ParamsSpec = { $: {} };
arc.mojom.TimerHost_StartTimer_ResponseParamsSpec = { $: {} };
arc.mojom.TimerHost_SetTime_ParamsSpec = { $: {} };
arc.mojom.TimerHost_SetTime_ResponseParamsSpec = { $: {} };
arc.mojom.TimerInstance = {};
arc.mojom.TimerInstance.$interfaceName = 'arc.mojom.TimerInstance';
arc.mojom.TimerInstance_Init_ParamsSpec = { $: {} };
arc.mojom.TimerInstance_Init_ResponseParamsSpec = { $: {} };

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

// Struct: CreateTimerRequest
mojo.internal.Struct(
    arc.mojom.CreateTimerRequestSpec, 'arc.mojom.CreateTimerRequest', [
      mojo.internal.StructField('clock_id', 0, 0, arc.mojom.ClockIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expiration_fd', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TimerHost
mojo.internal.Struct(
    arc.mojom.TimerHost_CreateTimers_ParamsSpec, 'arc.mojom.TimerHost_CreateTimers_Params', [
      mojo.internal.StructField('timer_requests', 0, 0, mojo.internal.Array(arc.mojom.CreateTimerRequestSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TimerHost_CreateTimers_ResponseParamsSpec, 'arc.mojom.TimerHost_CreateTimers_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcTimerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TimerHost_StartTimer_ParamsSpec, 'arc.mojom.TimerHost_StartTimer_Params', [
      mojo.internal.StructField('clock_id', 0, 0, arc.mojom.ClockIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('absolute_expiration_time', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.TimerHost_StartTimer_ResponseParamsSpec, 'arc.mojom.TimerHost_StartTimer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcTimerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TimerHost_SetTime_ParamsSpec, 'arc.mojom.TimerHost_SetTime_Params', [
      mojo.internal.StructField('time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TimerHost_SetTime_ResponseParamsSpec, 'arc.mojom.TimerHost_SetTime_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcTimerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

  createTimers(timer_requests) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.TimerHost_CreateTimers_ParamsSpec,
      arc.mojom.TimerHost_CreateTimers_ResponseParamsSpec,
      [timer_requests],
      false);
  }

  startTimer(clock_id, absolute_expiration_time) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.TimerHost_StartTimer_ParamsSpec,
      arc.mojom.TimerHost_StartTimer_ResponseParamsSpec,
      [clock_id, absolute_expiration_time],
      false);
  }

  setTime(time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.TimerHost_SetTime_ParamsSpec,
      arc.mojom.TimerHost_SetTime_ResponseParamsSpec,
      [time],
      false);
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
};

arc.mojom.TimerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.TimerHost_CreateTimers_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createTimers');
          const result = this.impl.createTimers(params.timer_requests);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TimerHost_CreateTimers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.TimerHost_StartTimer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.startTimer');
          const result = this.impl.startTimer(params.clock_id, params.absolute_expiration_time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TimerHost_StartTimer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.TimerHost_SetTime_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setTime');
          const result = this.impl.setTime(params.time);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TimerHost_SetTime_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.TimerHostReceiver = arc.mojom.TimerHostReceiver;

arc.mojom.TimerHostPtr = arc.mojom.TimerHostRemote;
arc.mojom.TimerHostRequest = arc.mojom.TimerHostPendingReceiver;


// Interface: TimerInstance
mojo.internal.Struct(
    arc.mojom.TimerInstance_Init_ParamsSpec, 'arc.mojom.TimerInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.TimerHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TimerInstance_Init_ResponseParamsSpec, 'arc.mojom.TimerInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

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

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.TimerInstance_Init_ParamsSpec,
      arc.mojom.TimerInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
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
};

arc.mojom.TimerInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.TimerInstance_Init_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TimerInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.TimerInstanceReceiver = arc.mojom.TimerInstanceReceiver;

arc.mojom.TimerInstancePtr = arc.mojom.TimerInstanceRemote;
arc.mojom.TimerInstanceRequest = arc.mojom.TimerInstancePendingReceiver;

