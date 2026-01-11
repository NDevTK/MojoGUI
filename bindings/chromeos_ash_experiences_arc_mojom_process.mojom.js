// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/process.mojom
// Module: arc.mojom

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
  killProcess(pid, reason) {
    return this.$.killProcess(pid, reason);
  }
  requestProcessList() {
    return this.$.requestProcessList();
  }
  requestApplicationProcessMemoryInfo() {
    return this.$.requestApplicationProcessMemoryInfo();
  }
  requestSystemProcessMemoryInfo(nspids) {
    return this.$.requestSystemProcessMemoryInfo(nspids);
  }
  applyHostMemoryPressureDeprecated(level, reclaim_target) {
    return this.$.applyHostMemoryPressureDeprecated(level, reclaim_target);
  }
  applyHostMemoryPressure(level, reclaim_target) {
    return this.$.applyHostMemoryPressure(level, reclaim_target);
  }
  requestLowMemoryKillCounts() {
    return this.$.requestLowMemoryKillCounts();
  }
};

arc.mojom.ProcessInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProcessInstance', [
      { explicit: 1 },
      { explicit: 5 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
    ]);
  }

  killProcess(pid, reason) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ProcessInstance_KillProcess_ParamsSpec,
      null,
      [pid, reason],
      false);
  }

  requestProcessList() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec,
      arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec,
      [],
      false);
  }

  requestApplicationProcessMemoryInfo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec,
      arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec,
      [],
      false);
  }

  requestSystemProcessMemoryInfo(nspids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec,
      arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec,
      [nspids],
      false);
  }

  applyHostMemoryPressureDeprecated(level, reclaim_target) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec,
      arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec,
      [level, reclaim_target],
      false);
  }

  applyHostMemoryPressure(level, reclaim_target) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec,
      arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec,
      [level, reclaim_target],
      false);
  }

  requestLowMemoryKillCounts() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ProcessInstance', [
      { explicit: 1 },
      { explicit: 5 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_KillProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_KillProcess_ParamsSpec.$.structSpec);
          const result = this.impl.killProcess(params.pid, params.reason);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.ProcessInstanceReceiver = arc.mojom.ProcessInstanceReceiver;

arc.mojom.ProcessInstancePtr = arc.mojom.ProcessInstanceRemote;
arc.mojom.ProcessInstanceRequest = arc.mojom.ProcessInstancePendingReceiver;

