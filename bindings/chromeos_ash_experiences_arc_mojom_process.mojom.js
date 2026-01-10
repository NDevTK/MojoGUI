// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/process.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var memory_instrumentation = memory_instrumentation || {};

arc.mojom.ProcessStateSpec = { $: mojo.internal.Enum() };
arc.mojom.PressureLevelSpec = { $: mojo.internal.Enum() };
arc.mojom.RunningAppProcessInfoSpec = { $: {} };
arc.mojom.ArcMemoryDumpSpec = { $: {} };
arc.mojom.LowMemoryKillCountsSpec = { $: {} };
arc.mojom.ProcessInstance = {};
arc.mojom.ProcessInstance.$interfaceName = 'arc.mojom.ProcessInstance';
arc.mojom.ProcessInstance_KillProcess_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec = { $: {} };
arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec = { $: {} };

// Enum: ProcessState
arc.mojom.ProcessState = {
  UNKNOWN: -1,
  R_UNKNOWN: -1,
  PERSISTENT: 0,
  R_PERSISTENT: 0,
  PERSISTENT_UI: 1,
  R_PERSISTENT_UI: 1,
  TOP: 2,
  R_TOP: 2,
  R_BOUND_TOP: 3,
  FOREGROUND_SERVICE: 3,
  R_FOREGROUND_SERVICE: 4,
  BOUND_FOREGROUND_SERVICE: 4,
  R_BOUND_FOREGROUND_SERVICE: 5,
  IMPORTANT_FOREGROUND: 5,
  R_IMPORTANT_FOREGROUND: 6,
  IMPORTANT_BACKGROUND: 6,
  R_IMPORTANT_BACKGROUND: 7,
  TRANSIENT_BACKGROUND: 7,
  R_TRANSIENT_BACKGROUND: 8,
  BACKUP: 8,
  R_BACKUP: 9,
  SERVICE: 9,
  R_SERVICE: 10,
  RECEIVER: 10,
  R_RECEIVER: 11,
  TOP_SLEEPING: 11,
  R_TOP_SLEEPING: 12,
  HEAVY_WEIGHT: 12,
  R_HEAVY_WEIGHT: 13,
  HOME: 13,
  R_HOME: 14,
  LAST_ACTIVITY: 14,
  R_LAST_ACTIVITY: 15,
  CACHED_ACTIVITY: 15,
  R_CACHED_ACTIVITY: 16,
  CACHED_ACTIVITY_CLIENT: 16,
  R_CACHED_ACTIVITY_CLIENT: 17,
  CACHED_RECENT: 17,
  R_CACHED_RECENT: 18,
  CACHED_EMPTY: 18,
  R_CACHED_EMPTY: 19,
  NONEXISTENT: 19,
  R_NONEXISTENT: 20,
};

// Enum: PressureLevel
arc.mojom.PressureLevel = {
  kForeground: 0,
  kPerceptible: 1,
  kCached: 2,
};

// Struct: RunningAppProcessInfo
mojo.internal.Struct(
    arc.mojom.RunningAppProcessInfoSpec, 'arc.mojom.RunningAppProcessInfo', [
      mojo.internal.StructField('process_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('process_state', 8, 0, arc.mojom.ProcessStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('packages', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('last_activity_time', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('pid', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_focused', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ArcMemoryDump
mojo.internal.Struct(
    arc.mojom.ArcMemoryDumpSpec, 'arc.mojom.ArcMemoryDump', [
      mojo.internal.StructField('pid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('resident_set_kb', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('private_footprint_kb', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LowMemoryKillCounts
mojo.internal.Struct(
    arc.mojom.LowMemoryKillCountsSpec, 'arc.mojom.LowMemoryKillCounts', [
      mojo.internal.StructField('guest_oom', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lmkd_foreground', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lmkd_perceptible', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lmkd_cached', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pressure_foreground', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pressure_perceptible', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pressure_cached', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ProcessInstance
mojo.internal.Struct(
    arc.mojom.ProcessInstance_KillProcess_ParamsSpec, 'arc.mojom.ProcessInstance_KillProcess_Params', [
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec, 'arc.mojom.ProcessInstance_RequestProcessList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestProcessList_ResponseParams', [
      mojo.internal.StructField('processes', 0, 0, mojo.internal.Array(arc.mojom.RunningAppProcessInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec, 'arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParams', [
      mojo.internal.StructField('process_dumps', 0, 0, mojo.internal.Array(arc.mojom.ArcMemoryDumpSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec, 'arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_Params', [
      mojo.internal.StructField('nspids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParams', [
      mojo.internal.StructField('process_dumps', 0, 0, mojo.internal.Array(arc.mojom.ArcMemoryDumpSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_Params', [
      mojo.internal.StructField('level', 0, 0, arc.mojom.ProcessStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reclaim_target', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParams', [
      mojo.internal.StructField('reclaimed', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('killed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressure_Params', [
      mojo.internal.StructField('level', 0, 0, arc.mojom.PressureLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reclaim_target', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParams', [
      mojo.internal.StructField('reclaimed', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('killed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec, 'arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParams', [
      mojo.internal.StructField('counts', 0, 0, arc.mojom.LowMemoryKillCountsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ProcessInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ProcessInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ProcessInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ProcessInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ProcessInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ProcessInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  killProcess(pid, reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ProcessInstance_KillProcess_ParamsSpec,
      null,
      [pid, reason],
      false);
  }

  requestProcessList() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec,
      arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec,
      [],
      false);
  }

  requestApplicationProcessMemoryInfo() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec,
      arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec,
      [],
      false);
  }

  requestSystemProcessMemoryInfo(nspids) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec,
      arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec,
      [nspids],
      false);
  }

  applyHostMemoryPressureDeprecated(level, reclaim_target) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec,
      arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec,
      [level, reclaim_target],
      false);
  }

  applyHostMemoryPressure(level, reclaim_target) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec,
      arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec,
      [level, reclaim_target],
      false);
  }

  requestLowMemoryKillCounts() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec,
      arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.ProcessInstance.getRemote = function() {
  let remote = new arc.mojom.ProcessInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ProcessInstance',
    'context');
  return remote.$;
};

arc.mojom.ProcessInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(5, 1); // Default ordinal 5 -> Index 1
    this.ordinalMap.set(8, 2); // Default ordinal 8 -> Index 2
    this.ordinalMap.set(9, 3); // Default ordinal 9 -> Index 3
    this.ordinalMap.set(10, 4); // Default ordinal 10 -> Index 4
    this.ordinalMap.set(11, 5); // Default ordinal 11 -> Index 5
    this.ordinalMap.set(12, 6); // Default ordinal 12 -> Index 6
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: KillProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProcessInstance_KillProcess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> KillProcess (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: RequestProcessList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestProcessList (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: RequestApplicationProcessMemoryInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestApplicationProcessMemoryInfo (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: RequestSystemProcessMemoryInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSystemProcessMemoryInfo (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: ApplyHostMemoryPressureDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyHostMemoryPressureDeprecated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: ApplyHostMemoryPressure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ApplyHostMemoryPressure (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: RequestLowMemoryKillCounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestLowMemoryKillCounts (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ProcessInstance_KillProcess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.killProcess');
          const result = this.impl.killProcess(params.pid, params.reason);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestProcessList');
          const result = this.impl.requestProcessList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestApplicationProcessMemoryInfo');
          const result = this.impl.requestApplicationProcessMemoryInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestSystemProcessMemoryInfo');
          const result = this.impl.requestSystemProcessMemoryInfo(params.nspids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyHostMemoryPressureDeprecated');
          const result = this.impl.applyHostMemoryPressureDeprecated(params.level, params.reclaim_target);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.applyHostMemoryPressure');
          const result = this.impl.applyHostMemoryPressure(params.level, params.reclaim_target);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestLowMemoryKillCounts');
          const result = this.impl.requestLowMemoryKillCounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec);
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

arc.mojom.ProcessInstanceReceiver = arc.mojom.ProcessInstanceReceiver;

arc.mojom.ProcessInstancePtr = arc.mojom.ProcessInstanceRemote;
arc.mojom.ProcessInstanceRequest = arc.mojom.ProcessInstancePendingReceiver;

