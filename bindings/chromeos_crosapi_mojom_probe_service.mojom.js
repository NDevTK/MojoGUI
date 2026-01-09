// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/probe_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ProbeCategoryEnum
crosapi.mojom.ProbeCategoryEnum = {
  kBattery: 0,
  kNonRemovableBlockDevices: 1,
  kCachedVpdData: 2,
  kCpu: 3,
  kTimezone: 4,
  kMemory: 5,
  kBacklight: 6,
  kFan: 7,
  kStatefulPartition: 8,
  kBluetooth: 9,
  kSystem: 10,
  kNetwork: 11,
  kTpm: 12,
  kAudio: 13,
  kBus: 14,
};

// Enum: ProbeErrorType
crosapi.mojom.ProbeErrorType = {
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};

// Enum: ProbeFwupdVersionFormat
crosapi.mojom.ProbeFwupdVersionFormat = {
  kPlain: 0,
  kNumber: 1,
  kPair: 2,
  kTriplet: 3,
  kQuad: 4,
  kBcd: 5,
  kIntelMe: 6,
  kIntelMe2: 7,
  kSurfaceLegacy: 8,
  kSurface: 9,
  kDellBios: 10,
  kHex: 11,
};

// Enum: ProbeUsbVersion
crosapi.mojom.ProbeUsbVersion = {
  kUsb1: 0,
  kUsb2: 1,
  kUsb3: 2,
};

// Enum: ProbeUsbSpecSpeed
crosapi.mojom.ProbeUsbSpecSpeed = {
  k1_5Mbps: 0,
  k12Mbps: 1,
  k480Mbps: 2,
  k5Gbps: 3,
  k10Gbps: 4,
  k20Gbps: 5,
};

// Enum: ProbeCpuArchitectureEnum
crosapi.mojom.ProbeCpuArchitectureEnum = {
  kX86_64: 0,
  kAArch64: 1,
  kArmv7l: 2,
};

// Enum: ProbeTpmGSCVersion
crosapi.mojom.ProbeTpmGSCVersion = {
  kCr50: 0,
  kTi50: 1,
};

// Enum: ProbeDisplayInputType
crosapi.mojom.ProbeDisplayInputType = {
  kDigital: 0,
  kAnalog: 1,
};

// Enum: ProbeThermalSensorSource
crosapi.mojom.ProbeThermalSensorSource = {
  kEc: 0,
  kSysFs: 1,
};

// Interface: TelemetryProbeService
crosapi.mojom.TelemetryProbeService = {};

crosapi.mojom.TelemetryProbeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryProbeServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryProbeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryProbeServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryProbeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.TelemetryProbeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.TelemetryProbeService.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryProbeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryProbeService',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.TelemetryProbeServicePtr = crosapi.mojom.TelemetryProbeServiceRemote;
crosapi.mojom.TelemetryProbeServiceRequest = crosapi.mojom.TelemetryProbeServicePendingReceiver;

