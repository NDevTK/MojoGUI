// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/process.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var services = services || {};

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
      mojo.internal.StructField('pid', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('process_state', 28, 0, arc.mojom.ProcessStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('is_focused', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('last_activity_time', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
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
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec, 'arc.mojom.ProcessInstance_RequestProcessList_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestProcessList_ResponseParams', [
      mojo.internal.StructField('processes', 0, 0, mojo.internal.Array(arc.mojom.RunningAppProcessInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec, 'arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParams', [
      mojo.internal.StructField('process_dumps', 0, 0, mojo.internal.Array(arc.mojom.ArcMemoryDumpSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec, 'arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_Params', [
      mojo.internal.StructField('nspids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParams', [
      mojo.internal.StructField('process_dumps', 0, 0, mojo.internal.Array(arc.mojom.ArcMemoryDumpSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_Params', [
      mojo.internal.StructField('level', 8, 0, arc.mojom.ProcessStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('reclaim_target', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParams', [
      mojo.internal.StructField('killed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('reclaimed', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressure_Params', [
      mojo.internal.StructField('level', 8, 0, arc.mojom.PressureLevelSpec, null, false, 0, undefined),
      mojo.internal.StructField('reclaim_target', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec, 'arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParams', [
      mojo.internal.StructField('killed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('reclaimed', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec, 'arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec, 'arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParams', [
      mojo.internal.StructField('counts', 0, 0, arc.mojom.LowMemoryKillCountsSpec, null, false, 0, undefined),
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
      [pid, reason]);
  }

  requestProcessList() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec,
      arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec,
      []);
  }

  requestApplicationProcessMemoryInfo() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec,
      arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec,
      []);
  }

  requestSystemProcessMemoryInfo(nspids) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec,
      arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec,
      [nspids]);
  }

  applyHostMemoryPressureDeprecated(level, reclaim_target) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec,
      arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec,
      [level, reclaim_target]);
  }

  applyHostMemoryPressure(level, reclaim_target) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec,
      arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec,
      [level, reclaim_target]);
  }

  requestLowMemoryKillCounts() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec,
      arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec,
      []);
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

arc.mojom.ProcessInstancePtr = arc.mojom.ProcessInstanceRemote;
arc.mojom.ProcessInstanceRequest = arc.mojom.ProcessInstancePendingReceiver;

