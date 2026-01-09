// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/probe_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ProbeCategoryEnum
crosapi.mojom.ProbeCategoryEnum = {
};

// Enum: ProbeErrorType
crosapi.mojom.ProbeErrorType = {
};

// Enum: ProbeFwupdVersionFormat
crosapi.mojom.ProbeFwupdVersionFormat = {
};

// Enum: ProbeUsbVersion
crosapi.mojom.ProbeUsbVersion = {
};

// Enum: ProbeUsbSpecSpeed
crosapi.mojom.ProbeUsbSpecSpeed = {
};

// Enum: ProbeCpuArchitectureEnum
crosapi.mojom.ProbeCpuArchitectureEnum = {
};

// Enum: ProbeTpmGSCVersion
crosapi.mojom.ProbeTpmGSCVersion = {
};

// Enum: ProbeDisplayInputType
crosapi.mojom.ProbeDisplayInputType = {
};

// Enum: ProbeThermalSensorSource
crosapi.mojom.ProbeThermalSensorSource = {
};

// Struct: ProbeError
crosapi.mojom.ProbeError = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeBatteryInfo
crosapi.mojom.ProbeBatteryInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeUsbBusInterfaceInfo
crosapi.mojom.ProbeUsbBusInterfaceInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeFwupdFirmwareVersionInfo
crosapi.mojom.ProbeFwupdFirmwareVersionInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeUsbBusInfo
crosapi.mojom.ProbeUsbBusInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeNonRemovableBlockDeviceInfo
crosapi.mojom.ProbeNonRemovableBlockDeviceInfo = class {
  constructor(values = {}) {
    this.ATA = values.ATA !== undefined ? values.ATA : null;
    this.above = values.above !== undefined ? values.above : null;
  }
};

// Struct: ProbeCachedVpdInfo
crosapi.mojom.ProbeCachedVpdInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeCpuCStateInfo
crosapi.mojom.ProbeCpuCStateInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeLogicalCpuInfo
crosapi.mojom.ProbeLogicalCpuInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbePhysicalCpuInfo
crosapi.mojom.ProbePhysicalCpuInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeCpuInfo
crosapi.mojom.ProbeCpuInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeTimezoneInfo
crosapi.mojom.ProbeTimezoneInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeMemoryInfo
crosapi.mojom.ProbeMemoryInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeBacklightInfo
crosapi.mojom.ProbeBacklightInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeFanInfo
crosapi.mojom.ProbeFanInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeStatefulPartitionInfo
crosapi.mojom.ProbeStatefulPartitionInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeTpmVersion
crosapi.mojom.ProbeTpmVersion = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeTpmStatus
crosapi.mojom.ProbeTpmStatus = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeTpmDictionaryAttack
crosapi.mojom.ProbeTpmDictionaryAttack = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeTpmInfo
crosapi.mojom.ProbeTpmInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeBluetoothAdapterInfo
crosapi.mojom.ProbeBluetoothAdapterInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeOsVersion
crosapi.mojom.ProbeOsVersion = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeOsInfo
crosapi.mojom.ProbeOsInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeSystemInfo
crosapi.mojom.ProbeSystemInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeAudioInputNodeInfo
crosapi.mojom.ProbeAudioInputNodeInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeAudioOutputNodeInfo
crosapi.mojom.ProbeAudioOutputNodeInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeAudioInfo
crosapi.mojom.ProbeAudioInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeEmbeddedDisplayInfo
crosapi.mojom.ProbeEmbeddedDisplayInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeExternalDisplayInfo
crosapi.mojom.ProbeExternalDisplayInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeDisplayInfo
crosapi.mojom.ProbeDisplayInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeThermalSensorInfo
crosapi.mojom.ProbeThermalSensorInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeThermalInfo
crosapi.mojom.ProbeThermalInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeTelemetryInfo
crosapi.mojom.ProbeTelemetryInfo = class {
  constructor(values = {}) {
  }
};

// Struct: ProbeOemData
crosapi.mojom.ProbeOemData = class {
  constructor(values = {}) {
  }
};

// Interface: TelemetryProbeService
crosapi.mojom.TelemetryProbeServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryProbeService';
  }

};

crosapi.mojom.TelemetryProbeServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
