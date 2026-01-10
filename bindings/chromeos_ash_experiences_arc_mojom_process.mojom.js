// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/process.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ProcessState
arc.mojom.ProcessState = {
  UNKNOWN: 0,
  R_UNKNOWN: 1,
  PERSISTENT: 2,
  R_PERSISTENT: 3,
  PERSISTENT_UI: 4,
  R_PERSISTENT_UI: 5,
  TOP: 6,
  R_TOP: 7,
  R_BOUND_TOP: 8,
  FOREGROUND_SERVICE: 9,
  R_FOREGROUND_SERVICE: 10,
  BOUND_FOREGROUND_SERVICE: 11,
  R_BOUND_FOREGROUND_SERVICE: 12,
  IMPORTANT_FOREGROUND: 13,
  R_IMPORTANT_FOREGROUND: 14,
  IMPORTANT_BACKGROUND: 15,
  R_IMPORTANT_BACKGROUND: 16,
  TRANSIENT_BACKGROUND: 17,
  R_TRANSIENT_BACKGROUND: 18,
  BACKUP: 19,
  R_BACKUP: 20,
  SERVICE: 21,
  R_SERVICE: 22,
  RECEIVER: 23,
  R_RECEIVER: 24,
  TOP_SLEEPING: 25,
  R_TOP_SLEEPING: 26,
  HEAVY_WEIGHT: 27,
  R_HEAVY_WEIGHT: 28,
  HOME: 29,
  R_HOME: 30,
  LAST_ACTIVITY: 31,
  R_LAST_ACTIVITY: 32,
  CACHED_ACTIVITY: 33,
  R_CACHED_ACTIVITY: 34,
  CACHED_ACTIVITY_CLIENT: 35,
  R_CACHED_ACTIVITY_CLIENT: 36,
  CACHED_RECENT: 37,
  R_CACHED_RECENT: 38,
  CACHED_EMPTY: 39,
  R_CACHED_EMPTY: 40,
  NONEXISTENT: 41,
  R_NONEXISTENT: 42,
};
arc.mojom.ProcessStateSpec = { $: mojo.internal.Enum() };

// Enum: PressureLevel
arc.mojom.PressureLevel = {
  kForeground: 0,
  kPerceptible: 1,
  kCached: 2,
};
arc.mojom.PressureLevelSpec = { $: mojo.internal.Enum() };

// Struct: RunningAppProcessInfo
arc.mojom.RunningAppProcessInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RunningAppProcessInfo',
      packedSize: 48,
      fields: [
        { name: 'process_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'process_state', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.ProcessStateSpec, nullable: false, minVersion: 0 },
        { name: 'packages', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'is_focused', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'last_activity_time', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ArcMemoryDump
arc.mojom.ArcMemoryDumpSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcMemoryDump',
      packedSize: 24,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'resident_set_kb', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'private_footprint_kb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LowMemoryKillCounts
arc.mojom.LowMemoryKillCountsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.LowMemoryKillCounts',
      packedSize: 40,
      fields: [
        { name: 'guest_oom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'lmkd_foreground', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'lmkd_perceptible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'lmkd_cached', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pressure_foreground', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pressure_perceptible', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pressure_cached', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: ProcessInstance
arc.mojom.ProcessInstance = {};

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

// ParamsSpec for KillProcess
arc.mojom.ProcessInstance_KillProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.KillProcess_Params',
      packedSize: 24,
      fields: [
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestProcessList
arc.mojom.ProcessInstance_RequestProcessList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.RequestProcessList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.ProcessInstance_RequestProcessList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.RequestProcessList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'processes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.RunningAppProcessInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestApplicationProcessMemoryInfo
arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.RequestApplicationProcessMemoryInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.ProcessInstance_RequestApplicationProcessMemoryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.RequestApplicationProcessMemoryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'process_dumps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcMemoryDumpSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestSystemProcessMemoryInfo
arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.RequestSystemProcessMemoryInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'nspids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.ProcessInstance_RequestSystemProcessMemoryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.RequestSystemProcessMemoryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'process_dumps', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcMemoryDumpSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ApplyHostMemoryPressureDeprecated
arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.ApplyHostMemoryPressureDeprecated_Params',
      packedSize: 24,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ProcessStateSpec, nullable: false, minVersion: 0 },
        { name: 'reclaim_target', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.ProcessInstance_ApplyHostMemoryPressureDeprecated_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.ApplyHostMemoryPressureDeprecated_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'killed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'reclaimed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ApplyHostMemoryPressure
arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.ApplyHostMemoryPressure_Params',
      packedSize: 24,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PressureLevelSpec, nullable: false, minVersion: 0 },
        { name: 'reclaim_target', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.ProcessInstance_ApplyHostMemoryPressure_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.ApplyHostMemoryPressure_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'killed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'reclaimed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestLowMemoryKillCounts
arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.RequestLowMemoryKillCounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.ProcessInstance_RequestLowMemoryKillCounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ProcessInstance.RequestLowMemoryKillCounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'counts', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.LowMemoryKillCountsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.ProcessInstancePtr = arc.mojom.ProcessInstanceRemote;
arc.mojom.ProcessInstanceRequest = arc.mojom.ProcessInstancePendingReceiver;

