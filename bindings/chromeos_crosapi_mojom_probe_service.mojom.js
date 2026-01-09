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
  kX86_64: 0,
  kAArch64: 1,
  kArmv7l: 2,
};

// Enum: ProbeTpmGSCVersion
crosapi.mojom.ProbeTpmGSCVersion = {
};

// Enum: ProbeDisplayInputType
crosapi.mojom.ProbeDisplayInputType = {
};

// Enum: ProbeThermalSensorSource
crosapi.mojom.ProbeThermalSensorSource = {
  should: 0,
};

// Struct: ProbeError
crosapi.mojom.ProbeError = class {
  constructor(values = {}) {
    this.msg@1 = values.msg@1 !== undefined ? values.msg@1 : "";
  }
};

// Struct: ProbeBatteryInfo
crosapi.mojom.ProbeBatteryInfo = class {
  constructor(values = {}) {
    this.temperature@13 = values.temperature@13 !== undefined ? values.temperature@13 : 0;
  }
};

// Struct: ProbeUsbBusInterfaceInfo
crosapi.mojom.ProbeUsbBusInterfaceInfo = class {
  constructor(values = {}) {
    this.interface_number@0 = values.interface_number@0 !== undefined ? values.interface_number@0 : 0;
    this.protocol_id@3 = values.protocol_id@3 !== undefined ? values.protocol_id@3 : 0;
  }
};

// Struct: ProbeFwupdFirmwareVersionInfo
crosapi.mojom.ProbeFwupdFirmwareVersionInfo = class {
  constructor(values = {}) {
    this.version_format@1 = values.version_format@1 !== undefined ? values.version_format@1 : "";
  }
};

// Struct: ProbeUsbBusInfo
crosapi.mojom.ProbeUsbBusInfo = class {
  constructor(values = {}) {
    this.product_id@4 = values.product_id@4 !== undefined ? values.product_id@4 : 0;
    this.spec_speed@8 = values.spec_speed@8 !== undefined ? values.spec_speed@8 : 0;
  }
};

// Struct: ProbeNonRemovableBlockDeviceInfo
crosapi.mojom.ProbeNonRemovableBlockDeviceInfo = class {
  constructor(values = {}) {
    this.path@0 = values.path@0 !== undefined ? values.path@0 : "";
    this.size@1 = values.size@1 !== undefined ? values.size@1 : 0;
    this.ATA = values.ATA !== undefined ? values.ATA : null;
    this.type@2 = values.type@2 !== undefined ? values.type@2 : "";
    this.manufacturer_id@3 = values.manufacturer_id@3 !== undefined ? values.manufacturer_id@3 : 0;
    this.name@4 = values.name@4 !== undefined ? values.name@4 : "";
    this.write_time_seconds_since_last_boot@9 = values.write_time_seconds_since_last_boot@9 !== undefined ? values.write_time_seconds_since_last_boot@9 : 0;
    this.above = values.above !== undefined ? values.above : null;
    this.discard_time_seconds_since_last_boot@11 = values.discard_time_seconds_since_last_boot@11 !== undefined ? values.discard_time_seconds_since_last_boot@11 : 0;
  }
};

// Struct: ProbeCachedVpdInfo
crosapi.mojom.ProbeCachedVpdInfo = class {
  constructor(values = {}) {
    this.first_power_date@0 = values.first_power_date@0 !== undefined ? values.first_power_date@0 : "";
    this.sku_number@1 = values.sku_number@1 !== undefined ? values.sku_number@1 : "";
    this.serial_number@2 = values.serial_number@2 !== undefined ? values.serial_number@2 : "";
    this.model_name@3 = values.model_name@3 !== undefined ? values.model_name@3 : "";
  }
};

// Struct: ProbeCpuCStateInfo
crosapi.mojom.ProbeCpuCStateInfo = class {
  constructor(values = {}) {
    this.name@0 = values.name@0 !== undefined ? values.name@0 : "";
    this.time_in_state_since_last_boot_us@1 = values.time_in_state_since_last_boot_us@1 !== undefined ? values.time_in_state_since_last_boot_us@1 : 0;
  }
};

// Struct: ProbeLogicalCpuInfo
crosapi.mojom.ProbeLogicalCpuInfo = class {
  constructor(values = {}) {
    this.max_clock_speed_khz@0 = values.max_clock_speed_khz@0 !== undefined ? values.max_clock_speed_khz@0 : 0;
    this.scaling_current_frequency_khz@2 = values.scaling_current_frequency_khz@2 !== undefined ? values.scaling_current_frequency_khz@2 : 0;
    this.core_id@5 = values.core_id@5 !== undefined ? values.core_id@5 : 0;
  }
};

// Struct: ProbePhysicalCpuInfo
crosapi.mojom.ProbePhysicalCpuInfo = class {
  constructor(values = {}) {
    this.logical_cpus@1 = values.logical_cpus@1 !== undefined ? values.logical_cpus@1 : "";
  }
};

// Struct: ProbeCpuInfo
crosapi.mojom.ProbeCpuInfo = class {
  constructor(values = {}) {
    this.physical_cpus@2 = values.physical_cpus@2 !== undefined ? values.physical_cpus@2 : 0;
  }
};

// Struct: ProbeTimezoneInfo
crosapi.mojom.ProbeTimezoneInfo = class {
  constructor(values = {}) {
    this.region@1 = values.region@1 !== undefined ? values.region@1 : "";
  }
};

// Struct: ProbeMemoryInfo
crosapi.mojom.ProbeMemoryInfo = class {
  constructor(values = {}) {
    this.total_memory_kib@0 = values.total_memory_kib@0 !== undefined ? values.total_memory_kib@0 : 0;
    this.free_memory_kib@1 = values.free_memory_kib@1 !== undefined ? values.free_memory_kib@1 : 0;
    this.page_faults_since_last_boot@3 = values.page_faults_since_last_boot@3 !== undefined ? values.page_faults_since_last_boot@3 : 0;
  }
};

// Struct: ProbeBacklightInfo
crosapi.mojom.ProbeBacklightInfo = class {
  constructor(values = {}) {
    this.max_brightness@1 = values.max_brightness@1 !== undefined ? values.max_brightness@1 : 0;
    this.brightness@2 = values.brightness@2 !== undefined ? values.brightness@2 : 0;
  }
};

// Struct: ProbeFanInfo
crosapi.mojom.ProbeFanInfo = class {
  constructor(values = {}) {
    this.speed_rpm@0 = values.speed_rpm@0 !== undefined ? values.speed_rpm@0 : 0;
  }
};

// Struct: ProbeStatefulPartitionInfo
crosapi.mojom.ProbeStatefulPartitionInfo = class {
  constructor(values = {}) {
    this.total_space@1 = values.total_space@1 !== undefined ? values.total_space@1 : 0;
  }
};

// Struct: ProbeTpmVersion
crosapi.mojom.ProbeTpmVersion = class {
  constructor(values = {}) {
    this.gsc_version@0 = values.gsc_version@0 !== undefined ? values.gsc_version@0 : null;
    this.vendor_specific@6 = values.vendor_specific@6 !== undefined ? values.vendor_specific@6 : 0;
  }
};

// Struct: ProbeTpmStatus
crosapi.mojom.ProbeTpmStatus = class {
  constructor(values = {}) {
    this.owner_password_is_present@2 = values.owner_password_is_present@2 !== undefined ? values.owner_password_is_present@2 : false;
  }
};

// Struct: ProbeTpmDictionaryAttack
crosapi.mojom.ProbeTpmDictionaryAttack = class {
  constructor(values = {}) {
    this.lockout_seconds_remaining@3 = values.lockout_seconds_remaining@3 !== undefined ? values.lockout_seconds_remaining@3 : 0;
  }
};

// Struct: ProbeTpmInfo
crosapi.mojom.ProbeTpmInfo = class {
  constructor(values = {}) {
    this.dictionary_attack@2 = values.dictionary_attack@2 !== undefined ? values.dictionary_attack@2 : null;
  }
};

// Struct: ProbeBluetoothAdapterInfo
crosapi.mojom.ProbeBluetoothAdapterInfo = class {
  constructor(values = {}) {
    this.num_connected_devices@3 = values.num_connected_devices@3 !== undefined ? values.num_connected_devices@3 : 0;
  }
};

// Struct: ProbeOsVersion
crosapi.mojom.ProbeOsVersion = class {
  constructor(values = {}) {
    this.release_channel@3 = values.release_channel@3 !== undefined ? values.release_channel@3 : "";
  }
};

// Struct: ProbeOsInfo
crosapi.mojom.ProbeOsInfo = class {
  constructor(values = {}) {
    this.marketing_name@2 = values.marketing_name@2 !== undefined ? values.marketing_name@2 : "";
  }
};

// Struct: ProbeSystemInfo
crosapi.mojom.ProbeSystemInfo = class {
  constructor(values = {}) {
    this.os_info@0 = values.os_info@0 !== undefined ? values.os_info@0 : null;
  }
};

// Struct: ProbeAudioInputNodeInfo
crosapi.mojom.ProbeAudioInputNodeInfo = class {
  constructor(values = {}) {
    this.id@0 = values.id@0 !== undefined ? values.id@0 : 0;
    this.name@1 = values.name@1 !== undefined ? values.name@1 : 0;
    this.active@3 = values.active@3 !== undefined ? values.active@3 : false;
    this.node_gain@4 = values.node_gain@4 !== undefined ? values.node_gain@4 : 0;
  }
};

// Struct: ProbeAudioOutputNodeInfo
crosapi.mojom.ProbeAudioOutputNodeInfo = class {
  constructor(values = {}) {
    this.id@0 = values.id@0 !== undefined ? values.id@0 : 0;
    this.name@1 = values.name@1 !== undefined ? values.name@1 : "";
    this.node_volume@4 = values.node_volume@4 !== undefined ? values.node_volume@4 : 0;
  }
};

// Struct: ProbeAudioInfo
crosapi.mojom.ProbeAudioInfo = class {
  constructor(values = {}) {
    this.input_nodes@5 = values.input_nodes@5 !== undefined ? values.input_nodes@5 : 0;
  }
};

// Struct: ProbeEmbeddedDisplayInfo
crosapi.mojom.ProbeEmbeddedDisplayInfo = class {
  constructor(values = {}) {
    this.display_name@14 = values.display_name@14 !== undefined ? values.display_name@14 : 0;
  }
};

// Struct: ProbeExternalDisplayInfo
crosapi.mojom.ProbeExternalDisplayInfo = class {
  constructor(values = {}) {
    this.display_name@12 = values.display_name@12 !== undefined ? values.display_name@12 : 0;
  }
};

// Struct: ProbeDisplayInfo
crosapi.mojom.ProbeDisplayInfo = class {
  constructor(values = {}) {
    this.external_displays@1 = values.external_displays@1 !== undefined ? values.external_displays@1 : [];
  }
};

// Struct: ProbeThermalSensorInfo
crosapi.mojom.ProbeThermalSensorInfo = class {
  constructor(values = {}) {
    this.source@2 = values.source@2 !== undefined ? values.source@2 : 0;
  }
};

// Struct: ProbeThermalInfo
crosapi.mojom.ProbeThermalInfo = class {
  constructor(values = {}) {
    this.thermal_sensors@0 = values.thermal_sensors@0 !== undefined ? values.thermal_sensors@0 : [];
  }
};

// Struct: ProbeTelemetryInfo
crosapi.mojom.ProbeTelemetryInfo = class {
  constructor(values = {}) {
    this.thermal_result@16 = values.thermal_result@16 !== undefined ? values.thermal_result@16 : null;
  }
};

// Struct: ProbeOemData
crosapi.mojom.ProbeOemData = class {
  constructor(values = {}) {
    this.oem_data@0 = values.oem_data@0 !== undefined ? values.oem_data@0 : "";
  }
};

// Interface: TelemetryProbeService
crosapi.mojom.TelemetryProbeServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.TelemetryProbeService';
  }

  0(categories) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(categories)
      resolve({});
    });
  }

  1() {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1()
      resolve({});
    });
  }

};

crosapi.mojom.TelemetryProbeServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
