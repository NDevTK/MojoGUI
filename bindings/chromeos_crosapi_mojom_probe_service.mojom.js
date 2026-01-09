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

// Struct: ProbeError
crosapi.mojom.ProbeErrorSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeError',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeBatteryInfo
crosapi.mojom.ProbeBatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeBatteryInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeUsbBusInterfaceInfo
crosapi.mojom.ProbeUsbBusInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeUsbBusInterfaceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeFwupdFirmwareVersionInfo
crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeFwupdFirmwareVersionInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeUsbBusInfo
crosapi.mojom.ProbeUsbBusInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeUsbBusInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeNonRemovableBlockDeviceInfo
crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeNonRemovableBlockDeviceInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeCachedVpdInfo
crosapi.mojom.ProbeCachedVpdInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeCachedVpdInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeCpuCStateInfo
crosapi.mojom.ProbeCpuCStateInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeCpuCStateInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeLogicalCpuInfo
crosapi.mojom.ProbeLogicalCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeLogicalCpuInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbePhysicalCpuInfo
crosapi.mojom.ProbePhysicalCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbePhysicalCpuInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeCpuInfo
crosapi.mojom.ProbeCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeCpuInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeTimezoneInfo
crosapi.mojom.ProbeTimezoneInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTimezoneInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeMemoryInfo
crosapi.mojom.ProbeMemoryInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeMemoryInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeBacklightInfo
crosapi.mojom.ProbeBacklightInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeBacklightInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeFanInfo
crosapi.mojom.ProbeFanInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeFanInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeStatefulPartitionInfo
crosapi.mojom.ProbeStatefulPartitionInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeStatefulPartitionInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeTpmVersion
crosapi.mojom.ProbeTpmVersionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTpmVersion',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeTpmStatus
crosapi.mojom.ProbeTpmStatusSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTpmStatus',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeTpmDictionaryAttack
crosapi.mojom.ProbeTpmDictionaryAttackSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTpmDictionaryAttack',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeTpmInfo
crosapi.mojom.ProbeTpmInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTpmInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeBluetoothAdapterInfo
crosapi.mojom.ProbeBluetoothAdapterInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeBluetoothAdapterInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeOsVersion
crosapi.mojom.ProbeOsVersionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeOsVersion',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeOsInfo
crosapi.mojom.ProbeOsInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeOsInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeSystemInfo
crosapi.mojom.ProbeSystemInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeSystemInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeAudioInputNodeInfo
crosapi.mojom.ProbeAudioInputNodeInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeAudioInputNodeInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeAudioOutputNodeInfo
crosapi.mojom.ProbeAudioOutputNodeInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeAudioOutputNodeInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeAudioInfo
crosapi.mojom.ProbeAudioInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeAudioInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeEmbeddedDisplayInfo
crosapi.mojom.ProbeEmbeddedDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeEmbeddedDisplayInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeExternalDisplayInfo
crosapi.mojom.ProbeExternalDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeExternalDisplayInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeDisplayInfo
crosapi.mojom.ProbeDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeDisplayInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeThermalSensorInfo
crosapi.mojom.ProbeThermalSensorInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeThermalSensorInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeThermalInfo
crosapi.mojom.ProbeThermalInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeThermalInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeTelemetryInfo
crosapi.mojom.ProbeTelemetryInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTelemetryInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ProbeOemData
crosapi.mojom.ProbeOemDataSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeOemData',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
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

