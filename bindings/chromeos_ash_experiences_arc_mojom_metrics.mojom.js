// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/metrics.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: BootType
arc.mojom.BootType = {
};

// Enum: NativeBridgeType
arc.mojom.NativeBridgeType = {
};

// Enum: CompanionLibApiId
arc.mojom.CompanionLibApiId = {
  GET_DISPLAY_TOPOLOGY: 0,
  GET_PRIMARY_DISPLAY_ID: 1,
  GET_WORKSPACE_INSETS: 2,
  REGISTER_CALLBACK: 3,
  UNREGISTER_CALLBACK: 4,
  GET_CAPTION_HEIGHT: 5,
  GET_HIDDEN_CAPTION_BUTTON: 6,
  HIDE_CAPTION_BUTTON: 7,
  GET_TASK_WINDOW_BOUNDS: 8,
  GET_TASK_WINDOW_STATE: 9,
  IS_SHADOW_HIDDEN: 10,
  HIDE_SHADOW: 11,
  ON_CLOSE_REQUEST_RESPONSE: 12,
  SET_ON_CLOSE_REQUEST_HANDLER: 13,
  REMOVE_ON_CLOSE_REQUEST_HANDLER: 14,
  SET_TASK_WINDOW_BOUNDS: 15,
  SET_TASK_WINDOW_STATE: 16,
  IS_CLIPPING_TO_TASK_DISABLED: 17,
};

// Enum: ArcDnsQuery
arc.mojom.ArcDnsQuery = {
};

// Enum: ArcNetworkEvent
arc.mojom.ArcNetworkEvent = {
};

// Enum: ArcNetworkError
arc.mojom.ArcNetworkError = {
};

// Enum: AppKillType
arc.mojom.AppKillType = {
  LMKD_KILL: 0,
  OOM_KILL: 1,
};

// Enum: AppPrimaryAbi
arc.mojom.AppPrimaryAbi = {
};

// Enum: ArcCorePriAbiMigEvent
arc.mojom.ArcCorePriAbiMigEvent = {
};

// Enum: DataRestoreStatus
arc.mojom.DataRestoreStatus = {
};

// Enum: LowLatencyStylusLibraryType
arc.mojom.LowLatencyStylusLibraryType = {
};

// Enum: LowLatencyStylusLibApiId
arc.mojom.LowLatencyStylusLibApiId = {
};

// Enum: VpnServiceBuilderCompatApiId
arc.mojom.VpnServiceBuilderCompatApiId = {
};

// Enum: MainAccountHashMigrationStatus
arc.mojom.MainAccountHashMigrationStatus = {
};

// Enum: WaylandTimingEvent
arc.mojom.WaylandTimingEvent = {
};

// Enum: ArcKeyMintError
arc.mojom.ArcKeyMintError = {
};

// Enum: ArcKeyMintLoggedOperation
arc.mojom.ArcKeyMintLoggedOperation = {
};

// Enum: CertificateSigningResult
arc.mojom.CertificateSigningResult = {
};

// Enum: AppErrorDialogType
arc.mojom.AppErrorDialogType = {
};

// Enum: AndroidAppCategory
arc.mojom.AndroidAppCategory = {
};

// Enum: AndroidDataDirectory
arc.mojom.AndroidDataDirectory = {
};

// Struct: BootProgressEvent
arc.mojom.BootProgressEvent = class {
  constructor(values = {}) {
    this.event = values.event !== undefined ? values.event : "";
    this.uptimeMillis = values.uptimeMillis !== undefined ? values.uptimeMillis : 0;
  }
};

// Struct: GfxMetrics
arc.mojom.GfxMetrics = class {
  constructor(values = {}) {
    this.frameTimePercentile95 = values.frameTimePercentile95 !== undefined ? values.frameTimePercentile95 : 0;
  }
};

// Struct: AppKill
arc.mojom.AppKill = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.kills = values.kills !== undefined ? values.kills : null;
    this.count = values.count !== undefined ? values.count : 0;
  }
};

// Struct: LowLatencyStylusLibPredictionTarget
arc.mojom.LowLatencyStylusLibPredictionTarget = class {
  constructor(values = {}) {
    this.target = values.target !== undefined ? values.target : 0;
  }
};

// Struct: AppCategoryDataSize
arc.mojom.AppCategoryDataSize = class {
  constructor(values = {}) {
    this.data_size_in_mb = values.data_size_in_mb !== undefined ? values.data_size_in_mb : 0;
  }
};

// Struct: DataDirectorySize
arc.mojom.DataDirectorySize = class {
  constructor(values = {}) {
    this.size_in_mb = values.size_in_mb !== undefined ? values.size_in_mb : 0;
  }
};

// Interface: MetricsHost
arc.mojom.MetricsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MetricsHost';
  }

};

arc.mojom.MetricsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MetricsInstance
arc.mojom.MetricsInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.MetricsInstance';
  }

};

arc.mojom.MetricsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
