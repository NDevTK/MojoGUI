// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_diagnostics.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Enum: DiagnosticRoutineEnum
ash.cros_healthd.mojom.DiagnosticRoutineEnum = {
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

// Enum: DiskReadRoutineTypeEnum
ash.cros_healthd.mojom.DiskReadRoutineTypeEnum = {
  kLinearRead: 0,
  kRandomRead: 1,
};

// Enum: DiagnosticRoutineStatusEnum
ash.cros_healthd.mojom.DiagnosticRoutineStatusEnum = {
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

// Enum: DiagnosticRoutineUserMessageEnum
ash.cros_healthd.mojom.DiagnosticRoutineUserMessageEnum = {
  kUnplugACPower: 0,
  kPlugInACPower: 1,
};

// Enum: DiagnosticRoutineCommandEnum
ash.cros_healthd.mojom.DiagnosticRoutineCommandEnum = {
  kContinue: 0,
  kCancel: 1,
  kGetStatus: 2,
  kRemove: 3,
};

// Enum: AcPowerStatusEnum
ash.cros_healthd.mojom.AcPowerStatusEnum = {
  kConnected: 0,
  kDisconnected: 1,
};

// Enum: NvmeSelfTestTypeEnum
ash.cros_healthd.mojom.NvmeSelfTestTypeEnum = {
  kShortSelfTest: 0,
  kLongSelfTest: 1,
};

// Enum: DEPRECATED_LedName
ash.cros_healthd.mojom.DEPRECATED_LedName = {
  kBattery: 0,
  kPower: 1,
  kAdapter: 2,
  kLeft: 3,
  kRight: 4,
};

// Enum: DEPRECATED_LedColor
ash.cros_healthd.mojom.DEPRECATED_LedColor = {
  kRed: 0,
  kGreen: 1,
  kBlue: 2,
  kYellow: 3,
  kWhite: 4,
  kAmber: 5,
};

// Interface: DEPRECATED_LedLitUpRoutineReplier
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier',
    'context');
  return remote.$;
}};

// Legacy compatibility
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPtr = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRemote;
ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierRequest = ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplierPendingReceiver;

