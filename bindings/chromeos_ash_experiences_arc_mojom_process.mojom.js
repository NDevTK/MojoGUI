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

// Enum: PressureLevel
arc.mojom.PressureLevel = {
  kForeground: 0,
  kPerceptible: 1,
  kCached: 2,
};

// Struct: RunningAppProcessInfo
arc.mojom.RunningAppProcessInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.RunningAppProcessInfo',
      packedSize: 56,
      fields: [
        { name: 'process_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'process_state', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ProcessStateSpec, nullable: false },
        { name: 'packages', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'last_activity_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'pid', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'is_focused', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'resident_set_kb', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'private_footprint_kb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'guest_oom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'lmkd_foreground', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'lmkd_perceptible', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'lmkd_cached', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'pressure_foreground', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'pressure_perceptible', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'pressure_cached', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
arc.mojom.ProcessInstancePtr = arc.mojom.ProcessInstanceRemote;
arc.mojom.ProcessInstanceRequest = arc.mojom.ProcessInstancePendingReceiver;

