// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_diagnostics.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.cros_healthd.mojom = ash.cros_healthd.cros_healthd.mojom || {};


ash.cros_healthd.cros_healthd.mojom.mojom.kFailedToStartId = 0;

// Enum: DiagnosticRoutineEnum
ash.cros_healthd.cros_healthd.mojom.mojom.DiagnosticRoutineEnum = {
  kBatteryCapacity: 0,
  kBatteryHealth: 1,
  kUrandom: 2,
  kSmartctlCheck: 3,
  kAcPower: 4,
  kCpuCache: 5,
  kCpuStress: 6,
  kFloatingPointAccuracy: 7,
  DEPRECATED_kNvmeWearLevel: 8,
  kNvmeSelfTest: 9,
  kDiskRead: 10,
  kPrimeSearch: 11,
  kBatteryDischarge: 12,
  kBatteryCharge: 13,
  kMemory: 14,
  kLanConnectivity: 15,
  kSignalStrength: 16,
  kGatewayCanBePinged: 17,
  kHasSecureWiFiConnection: 18,
  kDnsResolverPresent: 19,
  kDnsLatency: 20,
  kDnsResolution: 21,
  kCaptivePortal: 22,
  kHttpFirewall: 23,
  kHttpsFirewall: 24,
  kHttpsLatency: 25,
  kVideoConferencing: 26,
  kArcHttp: 27,
  kArcPing: 28,
  kArcDnsResolution: 29,
};
ash.cros_healthd.cros_healthd.mojom.mojom.DiagnosticRoutineEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiskReadRoutineTypeEnum
ash.cros_healthd.cros_healthd.mojom.mojom.DiskReadRoutineTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.DiskReadRoutineTypeEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticRoutineStatusEnum
ash.cros_healthd.cros_healthd.mojom.mojom.DiagnosticRoutineStatusEnum = {
  kReady: 0,
  kRunning: 1,
  kWaiting: 2,
  kPassed: 3,
  kFailed: 4,
  kError: 5,
  kCancelled: 6,
  kFailedToStart: 7,
  kRemoved: 8,
  kCancelling: 9,
  kUnsupported: 10,
  kNotRun: 11,
};
ash.cros_healthd.cros_healthd.mojom.mojom.DiagnosticRoutineStatusEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticRoutineUserMessageEnum
ash.cros_healthd.cros_healthd.mojom.mojom.DiagnosticRoutineUserMessageEnum = {
  kUnplugACPower: 0,
  kPlugInACPower: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.DiagnosticRoutineUserMessageEnumSpec = { $: mojo.internal.Enum() };

// Enum: DiagnosticRoutineCommandEnum
ash.cros_healthd.cros_healthd.mojom.mojom.DiagnosticRoutineCommandEnum = {
  kContinue: 0,
  kCancel: 1,
  kGetStatus: 2,
  kRemove: 3,
};
ash.cros_healthd.cros_healthd.mojom.mojom.DiagnosticRoutineCommandEnumSpec = { $: mojo.internal.Enum() };

// Enum: AcPowerStatusEnum
ash.cros_healthd.cros_healthd.mojom.mojom.AcPowerStatusEnum = {
  kConnected: 0,
  kDisconnected: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.AcPowerStatusEnumSpec = { $: mojo.internal.Enum() };

// Enum: NvmeSelfTestTypeEnum
ash.cros_healthd.cros_healthd.mojom.mojom.NvmeSelfTestTypeEnum = {
  kShortSelfTest: 0,
  kLongSelfTest: 1,
};
ash.cros_healthd.cros_healthd.mojom.mojom.NvmeSelfTestTypeEnumSpec = { $: mojo.internal.Enum() };

// Enum: DEPRECATED_LedName
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedName = {
  kBattery: 0,
  kPower: 1,
  kAdapter: 2,
  kLeft: 3,
  kRight: 4,
};
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedNameSpec = { $: mojo.internal.Enum() };

// Enum: DEPRECATED_LedColor
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedColor = {
  kRed: 0,
  kGreen: 1,
  kBlue: 2,
  kYellow: 3,
  kWhite: 4,
  kAmber: 5,
};
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedColorSpec = { $: mojo.internal.Enum() };

// Union: RoutineUpdateUnion
ash.cros_healthd.cros_healthd.mojom.mojom.RoutineUpdateUnionSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.RoutineUpdateUnion', {
      'interactive_update': {
        'ordinal': 0,
        'type': ash.cros_healthd.mojom.InteractiveRoutineUpdateSpec,
      }},
      'noninteractive_update': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.NonInteractiveRoutineUpdateSpec,
      }},
    })
};

// Struct: RunRoutineResponse
ash.cros_healthd.cros_healthd.mojom.mojom.RunRoutineResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RunRoutineResponse',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 4, packedBitOffset: 0, type: ash.cros_healthd.mojom.DiagnosticRoutineStatusEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: InteractiveRoutineUpdate
ash.cros_healthd.cros_healthd.mojom.mojom.InteractiveRoutineUpdateSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.InteractiveRoutineUpdate',
      packedSize: 16,
      fields: [
        { name: 'user_message', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: NonInteractiveRoutineUpdate
ash.cros_healthd.cros_healthd.mojom.mojom.NonInteractiveRoutineUpdateSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.NonInteractiveRoutineUpdate',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.DiagnosticRoutineStatusEnumSpec, nullable: false, minVersion: 0 },
        { name: 'status_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RoutineUpdate
ash.cros_healthd.cros_healthd.mojom.mojom.RoutineUpdateSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.RoutineUpdate',
      packedSize: 32,
      fields: [
        { name: 'progress_percent', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'output', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
        { name: 'routine_update_union', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.RoutineUpdateUnionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: DEPRECATED_LedLitUpRoutineReplier
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplier = {};

ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getColorMatched() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec,
      ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec,
      []);
  }

};

ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplier.getRemote = function() {
  let remote = new ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier',
    'context');
  return remote.$;
};

// ParamsSpec for GetColorMatched
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier.GetColorMatched_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplier_GetColorMatched_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier.GetColorMatched_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'matched', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierPtr = ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierRemote;
ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierRequest = ash.cros_healthd.cros_healthd.mojom.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver;

