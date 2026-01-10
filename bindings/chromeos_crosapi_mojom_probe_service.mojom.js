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
crosapi.mojom.ProbeCategoryEnumSpec = { $: mojo.internal.Enum() };

// Enum: ProbeErrorType
crosapi.mojom.ProbeErrorType = {
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};
crosapi.mojom.ProbeErrorTypeSpec = { $: mojo.internal.Enum() };

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
crosapi.mojom.ProbeFwupdVersionFormatSpec = { $: mojo.internal.Enum() };

// Enum: ProbeUsbVersion
crosapi.mojom.ProbeUsbVersion = {
  kUsb1: 0,
  kUsb2: 1,
  kUsb3: 2,
};
crosapi.mojom.ProbeUsbVersionSpec = { $: mojo.internal.Enum() };

// Enum: ProbeUsbSpecSpeed
crosapi.mojom.ProbeUsbSpecSpeed = {
  k1_5Mbps: 0,
  k12Mbps: 1,
  k480Mbps: 2,
  k5Gbps: 3,
  k10Gbps: 4,
  k20Gbps: 5,
};
crosapi.mojom.ProbeUsbSpecSpeedSpec = { $: mojo.internal.Enum() };

// Enum: ProbeCpuArchitectureEnum
crosapi.mojom.ProbeCpuArchitectureEnum = {
  kX86_64: 0,
  kAArch64: 1,
  kArmv7l: 2,
};
crosapi.mojom.ProbeCpuArchitectureEnumSpec = { $: mojo.internal.Enum() };

// Enum: ProbeTpmGSCVersion
crosapi.mojom.ProbeTpmGSCVersion = {
  kCr50: 0,
  kTi50: 1,
};
crosapi.mojom.ProbeTpmGSCVersionSpec = { $: mojo.internal.Enum() };

// Enum: ProbeDisplayInputType
crosapi.mojom.ProbeDisplayInputType = {
  kDigital: 0,
  kAnalog: 1,
};
crosapi.mojom.ProbeDisplayInputTypeSpec = { $: mojo.internal.Enum() };

// Enum: ProbeThermalSensorSource
crosapi.mojom.ProbeThermalSensorSource = {
  kEc: 0,
  kSysFs: 1,
};
crosapi.mojom.ProbeThermalSensorSourceSpec = { $: mojo.internal.Enum() };

// Union: ProbeBatteryResult
crosapi.mojom.ProbeBatteryResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeBatteryResult', {
      'battery_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeBatteryInfoSpec,
        'nullable': true,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeBusInfo
crosapi.mojom.ProbeBusInfoSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeBusInfo', {
      'unmapped_field': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'usb_bus_info': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeUsbBusInfoSpec,
      }},
    })
};

// Union: ProbeBusResult
crosapi.mojom.ProbeBusResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeBusResult', {
      'bus_devices_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeBusInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeNonRemovableBlockDeviceResult
crosapi.mojom.ProbeNonRemovableBlockDeviceResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeNonRemovableBlockDeviceResult', {
      'block_device_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeCachedVpdResult
crosapi.mojom.ProbeCachedVpdResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeCachedVpdResult', {
      'vpd_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeCachedVpdInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeCpuResult
crosapi.mojom.ProbeCpuResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeCpuResult', {
      'cpu_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeCpuInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeTimezoneResult
crosapi.mojom.ProbeTimezoneResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeTimezoneResult', {
      'timezone_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeTimezoneInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeMemoryResult
crosapi.mojom.ProbeMemoryResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeMemoryResult', {
      'memory_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeMemoryInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeBacklightResult
crosapi.mojom.ProbeBacklightResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeBacklightResult', {
      'backlight_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeBacklightInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeFanResult
crosapi.mojom.ProbeFanResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeFanResult', {
      'fan_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeFanInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeStatefulPartitionResult
crosapi.mojom.ProbeStatefulPartitionResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeStatefulPartitionResult', {
      'partition_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeStatefulPartitionInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeTpmResult
crosapi.mojom.ProbeTpmResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeTpmResult', {
      'tpm_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeTpmInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeBluetoothResult
crosapi.mojom.ProbeBluetoothResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeBluetoothResult', {
      'bluetooth_adapter_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeBluetoothAdapterInfoSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeSystemResult
crosapi.mojom.ProbeSystemResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeSystemResult', {
      'system_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeSystemInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeNetworkResult
crosapi.mojom.ProbeNetworkResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeNetworkResult', {
      'network_health': {
        'ordinal': 0,
        'type': chromeos.network_health.mojom.NetworkHealthStateSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeAudioResult
crosapi.mojom.ProbeAudioResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeAudioResult', {
      'audio_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeAudioInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeDisplayResult
crosapi.mojom.ProbeDisplayResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeDisplayResult', {
      'display_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeDisplayInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Union: ProbeThermalResult
crosapi.mojom.ProbeThermalResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.ProbeThermalResult', {
      'thermal_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeThermalInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec,
      }},
    })
};

// Struct: ProbeError
crosapi.mojom.ProbeErrorSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeError',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ProbeErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProbeBatteryInfo
crosapi.mojom.ProbeBatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeBatteryInfo',
      packedSize: 120,
      fields: [
        { name: 'cycle_count', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.Int64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'voltage_now', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.DoubleValueSpec, nullable: true, minVersion: 0 },
        { name: 'vendor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'serial_number', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'charge_full_design', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.DoubleValueSpec, nullable: true, minVersion: 0 },
        { name: 'charge_full', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.DoubleValueSpec, nullable: true, minVersion: 0 },
        { name: 'voltage_min_design', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.DoubleValueSpec, nullable: true, minVersion: 0 },
        { name: 'model_name', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'charge_now', packedOffset: 64, packedBitOffset: 0, type: crosapi.mojom.DoubleValueSpec, nullable: true, minVersion: 0 },
        { name: 'current_now', packedOffset: 72, packedBitOffset: 0, type: crosapi.mojom.DoubleValueSpec, nullable: true, minVersion: 0 },
        { name: 'technology', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'status', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'manufacture_date', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'temperature', packedOffset: 104, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 120}]
    }
  }
};

// Struct: ProbeUsbBusInterfaceInfo
crosapi.mojom.ProbeUsbBusInterfaceInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeUsbBusInterfaceInfo',
      packedSize: 48,
      fields: [
        { name: 'interface_number', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
        { name: 'class_id', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
        { name: 'subclass_id', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
        { name: 'protocol_id', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
        { name: 'driver', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ProbeFwupdFirmwareVersionInfo
crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeFwupdFirmwareVersionInfo',
      packedSize: 24,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'version_format', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ProbeFwupdVersionFormatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProbeUsbBusInfo
crosapi.mojom.ProbeUsbBusInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeUsbBusInfo',
      packedSize: 80,
      fields: [
        { name: 'class_id', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
        { name: 'subclass_id', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
        { name: 'protocol_id', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
        { name: 'vendor_id', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt16ValueSpec, nullable: true, minVersion: 0 },
        { name: 'product_id', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.UInt16ValueSpec, nullable: false, minVersion: 0 },
        { name: 'interfaces', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeUsbBusInterfaceInfoSpec, false), nullable: true, minVersion: 0 },
        { name: 'fwupd_firmware_version_info', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec, nullable: true, minVersion: 0 },
        { name: 'version', packedOffset: 64, packedBitOffset: 0, type: crosapi.mojom.ProbeUsbVersionSpec, nullable: false, minVersion: 0 },
        { name: 'spec_speed', packedOffset: 56, packedBitOffset: 0, type: crosapi.mojom.ProbeUsbSpecSpeedSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: ProbeNonRemovableBlockDeviceInfo
crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeNonRemovableBlockDeviceInfo',
      packedSize: 104,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'manufacturer_id', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'serial', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'bytes_read_since_last_boot', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'bytes_written_since_last_boot', packedOffset: 56, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'read_time_seconds_since_last_boot', packedOffset: 64, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'write_time_seconds_since_last_boot', packedOffset: 72, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'io_time_seconds_since_last_boot', packedOffset: 80, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'discard_time_seconds_since_last_boot', packedOffset: 88, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: ProbeCachedVpdInfo
crosapi.mojom.ProbeCachedVpdInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeCachedVpdInfo',
      packedSize: 40,
      fields: [
        { name: 'first_power_date', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'sku_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'serial_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'model_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ProbeCpuCStateInfo
crosapi.mojom.ProbeCpuCStateInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeCpuCStateInfo',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'time_in_state_since_last_boot_us', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProbeLogicalCpuInfo
crosapi.mojom.ProbeLogicalCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeLogicalCpuInfo',
      packedSize: 56,
      fields: [
        { name: 'max_clock_speed_khz', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'scaling_max_frequency_khz', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'scaling_current_frequency_khz', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'idle_time_ms', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'c_states', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeCpuCStateInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'core_id', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 1, packedSize: 56}]
    }
  }
};

// Struct: ProbePhysicalCpuInfo
crosapi.mojom.ProbePhysicalCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbePhysicalCpuInfo',
      packedSize: 24,
      fields: [
        { name: 'model_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'logical_cpus', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeLogicalCpuInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProbeCpuInfo
crosapi.mojom.ProbeCpuInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeCpuInfo',
      packedSize: 32,
      fields: [
        { name: 'num_total_threads', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'architecture', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.ProbeCpuArchitectureEnumSpec, nullable: false, minVersion: 0 },
        { name: 'physical_cpus', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbePhysicalCpuInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ProbeTimezoneInfo
crosapi.mojom.ProbeTimezoneInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTimezoneInfo',
      packedSize: 24,
      fields: [
        { name: 'posix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'region', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProbeMemoryInfo
crosapi.mojom.ProbeMemoryInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeMemoryInfo',
      packedSize: 40,
      fields: [
        { name: 'total_memory_kib', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'free_memory_kib', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'available_memory_kib', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'page_faults_since_last_boot', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ProbeBacklightInfo
crosapi.mojom.ProbeBacklightInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeBacklightInfo',
      packedSize: 32,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'max_brightness', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'brightness', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ProbeFanInfo
crosapi.mojom.ProbeFanInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeFanInfo',
      packedSize: 16,
      fields: [
        { name: 'speed_rpm', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProbeStatefulPartitionInfo
crosapi.mojom.ProbeStatefulPartitionInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeStatefulPartitionInfo',
      packedSize: 24,
      fields: [
        { name: 'available_space', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'total_space', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProbeTpmVersion
crosapi.mojom.ProbeTpmVersionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTpmVersion',
      packedSize: 64,
      fields: [
        { name: 'gsc_version', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.ProbeTpmGSCVersionSpec, nullable: false, minVersion: 0 },
        { name: 'family', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'spec_level', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'manufacturer', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'tpm_model', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'firmware_version', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'vendor_specific', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: ProbeTpmStatus
crosapi.mojom.ProbeTpmStatusSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTpmStatus',
      packedSize: 32,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
        { name: 'owned', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
        { name: 'owner_password_is_present', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ProbeTpmDictionaryAttack
crosapi.mojom.ProbeTpmDictionaryAttackSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTpmDictionaryAttack',
      packedSize: 40,
      fields: [
        { name: 'counter', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'threshold', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'lockout_in_effect', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
        { name: 'lockout_seconds_remaining', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ProbeTpmInfo
crosapi.mojom.ProbeTpmInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTpmInfo',
      packedSize: 32,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ProbeTpmVersionSpec, nullable: true, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ProbeTpmStatusSpec, nullable: true, minVersion: 0 },
        { name: 'dictionary_attack', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.ProbeTpmDictionaryAttackSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ProbeBluetoothAdapterInfo
crosapi.mojom.ProbeBluetoothAdapterInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeBluetoothAdapterInfo',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'powered', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
        { name: 'num_connected_devices', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ProbeOsVersion
crosapi.mojom.ProbeOsVersionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeOsVersion',
      packedSize: 40,
      fields: [
        { name: 'release_milestone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'build_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'patch_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'release_channel', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ProbeOsInfo
crosapi.mojom.ProbeOsInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeOsInfo',
      packedSize: 32,
      fields: [
        { name: 'oem_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'os_version', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.ProbeOsVersionSpec, nullable: true, minVersion: 1 },
        { name: 'marketing_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}, {version: 2, packedSize: 32}]
    }
  }
};

// Struct: ProbeSystemInfo
crosapi.mojom.ProbeSystemInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeSystemInfo',
      packedSize: 16,
      fields: [
        { name: 'os_info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ProbeOsInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProbeAudioInputNodeInfo
crosapi.mojom.ProbeAudioInputNodeInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeAudioInputNodeInfo',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'device_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'active', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
        { name: 'node_gain', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ProbeAudioOutputNodeInfo
crosapi.mojom.ProbeAudioOutputNodeInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeAudioOutputNodeInfo',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt64ValueSpec, nullable: true, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'device_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'active', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
        { name: 'node_volume', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.UInt8ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ProbeAudioInfo
crosapi.mojom.ProbeAudioInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeAudioInfo',
      packedSize: 56,
      fields: [
        { name: 'output_mute', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
        { name: 'input_mute', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
        { name: 'underruns', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'severe_underruns', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'output_nodes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeAudioOutputNodeInfoSpec, false), nullable: true, minVersion: 0 },
        { name: 'input_nodes', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeAudioInputNodeInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: ProbeEmbeddedDisplayInfo
crosapi.mojom.ProbeEmbeddedDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeEmbeddedDisplayInfo',
      packedSize: 72,
      fields: [
        { name: 'privacy_screen_supported_$flag', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'privacy_screen_supported_$value', originalFieldName: 'privacy_screen_supported' } },
        { name: 'privacy_screen_supported_$value', packedOffset: 60, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'privacy_screen_supported_$flag', originalFieldName: 'privacy_screen_supported' } },
        { name: 'privacy_screen_enabled_$flag', packedOffset: 60, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'privacy_screen_enabled_$value', originalFieldName: 'privacy_screen_enabled' } },
        { name: 'privacy_screen_enabled_$value', packedOffset: 60, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'privacy_screen_enabled_$flag', originalFieldName: 'privacy_screen_enabled' } },
        { name: 'display_width_$flag', packedOffset: 60, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'display_width_$value', originalFieldName: 'display_width' } },
        { name: 'display_width_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'display_width_$flag', originalFieldName: 'display_width' } },
        { name: 'display_height_$flag', packedOffset: 60, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'display_height_$value', originalFieldName: 'display_height' } },
        { name: 'display_height_$value', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'display_height_$flag', originalFieldName: 'display_height' } },
        { name: 'resolution_horizontal_$flag', packedOffset: 60, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'resolution_horizontal_$value', originalFieldName: 'resolution_horizontal' } },
        { name: 'resolution_horizontal_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'resolution_horizontal_$flag', originalFieldName: 'resolution_horizontal' } },
        { name: 'resolution_vertical_$flag', packedOffset: 60, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'resolution_vertical_$value', originalFieldName: 'resolution_vertical' } },
        { name: 'resolution_vertical_$value', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'resolution_vertical_$flag', originalFieldName: 'resolution_vertical' } },
        { name: 'refresh_rate_$flag', packedOffset: 61, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'refresh_rate_$value', originalFieldName: 'refresh_rate' } },
        { name: 'refresh_rate_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'refresh_rate_$flag', originalFieldName: 'refresh_rate' } },
        { name: 'manufacturer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'model_id_$flag', packedOffset: 61, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'model_id_$value', originalFieldName: 'model_id' } },
        { name: 'model_id_$value', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'model_id_$flag', originalFieldName: 'model_id' } },
        { name: 'serial_number_$flag', packedOffset: 61, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'serial_number_$value', originalFieldName: 'serial_number' } },
        { name: 'serial_number_$value', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'serial_number_$flag', originalFieldName: 'serial_number' } },
        { name: 'manufacture_week_$flag', packedOffset: 61, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'manufacture_week_$value', originalFieldName: 'manufacture_week' } },
        { name: 'manufacture_week_$value', packedOffset: 62, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'manufacture_week_$flag', originalFieldName: 'manufacture_week' } },
        { name: 'manufacture_year_$flag', packedOffset: 61, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'manufacture_year_$value', originalFieldName: 'manufacture_year' } },
        { name: 'manufacture_year_$value', packedOffset: 58, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'manufacture_year_$flag', originalFieldName: 'manufacture_year' } },
        { name: 'edid_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'input_type', packedOffset: 52, packedBitOffset: 0, type: crosapi.mojom.ProbeDisplayInputTypeSpec, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: ProbeExternalDisplayInfo
crosapi.mojom.ProbeExternalDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeExternalDisplayInfo',
      packedSize: 72,
      fields: [
        { name: 'display_width_$flag', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'display_width_$value', originalFieldName: 'display_width' } },
        { name: 'display_width_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'display_width_$flag', originalFieldName: 'display_width' } },
        { name: 'display_height_$flag', packedOffset: 60, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'display_height_$value', originalFieldName: 'display_height' } },
        { name: 'display_height_$value', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'display_height_$flag', originalFieldName: 'display_height' } },
        { name: 'resolution_horizontal_$flag', packedOffset: 60, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'resolution_horizontal_$value', originalFieldName: 'resolution_horizontal' } },
        { name: 'resolution_horizontal_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'resolution_horizontal_$flag', originalFieldName: 'resolution_horizontal' } },
        { name: 'resolution_vertical_$flag', packedOffset: 60, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'resolution_vertical_$value', originalFieldName: 'resolution_vertical' } },
        { name: 'resolution_vertical_$value', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'resolution_vertical_$flag', originalFieldName: 'resolution_vertical' } },
        { name: 'refresh_rate_$flag', packedOffset: 60, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'refresh_rate_$value', originalFieldName: 'refresh_rate' } },
        { name: 'refresh_rate_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'refresh_rate_$flag', originalFieldName: 'refresh_rate' } },
        { name: 'manufacturer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'model_id_$flag', packedOffset: 60, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'model_id_$value', originalFieldName: 'model_id' } },
        { name: 'model_id_$value', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'model_id_$flag', originalFieldName: 'model_id' } },
        { name: 'serial_number_$flag', packedOffset: 60, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'serial_number_$value', originalFieldName: 'serial_number' } },
        { name: 'serial_number_$value', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'serial_number_$flag', originalFieldName: 'serial_number' } },
        { name: 'manufacture_week_$flag', packedOffset: 60, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'manufacture_week_$value', originalFieldName: 'manufacture_week' } },
        { name: 'manufacture_week_$value', packedOffset: 61, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'manufacture_week_$flag', originalFieldName: 'manufacture_week' } },
        { name: 'manufacture_year_$flag', packedOffset: 62, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'manufacture_year_$value', originalFieldName: 'manufacture_year' } },
        { name: 'manufacture_year_$value', packedOffset: 58, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'manufacture_year_$flag', originalFieldName: 'manufacture_year' } },
        { name: 'edid_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'input_type', packedOffset: 52, packedBitOffset: 0, type: crosapi.mojom.ProbeDisplayInputTypeSpec, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: ProbeDisplayInfo
crosapi.mojom.ProbeDisplayInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeDisplayInfo',
      packedSize: 24,
      fields: [
        { name: 'embedded_display', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ProbeEmbeddedDisplayInfoSpec, nullable: true, minVersion: 0 },
        { name: 'external_displays', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeExternalDisplayInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ProbeThermalSensorInfo
crosapi.mojom.ProbeThermalSensorInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeThermalSensorInfo',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'temperature_celsius', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.ProbeThermalSensorSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ProbeThermalInfo
crosapi.mojom.ProbeThermalInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeThermalInfo',
      packedSize: 16,
      fields: [
        { name: 'thermal_sensors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeThermalSensorInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ProbeTelemetryInfo
crosapi.mojom.ProbeTelemetryInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeTelemetryInfo',
      packedSize: 280,
      fields: [
        { name: 'battery_result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ProbeBatteryResultSpec, nullable: true, minVersion: 0 },
        { name: 'block_device_result', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.ProbeNonRemovableBlockDeviceResultSpec, nullable: true, minVersion: 0 },
        { name: 'vpd_result', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.ProbeCachedVpdResultSpec, nullable: true, minVersion: 0 },
        { name: 'cpu_result', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.ProbeCpuResultSpec, nullable: true, minVersion: 0 },
        { name: 'timezone_result', packedOffset: 64, packedBitOffset: 0, type: crosapi.mojom.ProbeTimezoneResultSpec, nullable: true, minVersion: 0 },
        { name: 'memory_result', packedOffset: 80, packedBitOffset: 0, type: crosapi.mojom.ProbeMemoryResultSpec, nullable: true, minVersion: 0 },
        { name: 'backlight_result', packedOffset: 96, packedBitOffset: 0, type: crosapi.mojom.ProbeBacklightResultSpec, nullable: true, minVersion: 0 },
        { name: 'fan_result', packedOffset: 112, packedBitOffset: 0, type: crosapi.mojom.ProbeFanResultSpec, nullable: true, minVersion: 0 },
        { name: 'stateful_partition_result', packedOffset: 128, packedBitOffset: 0, type: crosapi.mojom.ProbeStatefulPartitionResultSpec, nullable: true, minVersion: 0 },
        { name: 'bluetooth_result', packedOffset: 144, packedBitOffset: 0, type: crosapi.mojom.ProbeBluetoothResultSpec, nullable: true, minVersion: 0 },
        { name: 'system_result', packedOffset: 160, packedBitOffset: 0, type: crosapi.mojom.ProbeSystemResultSpec, nullable: true, minVersion: 0 },
        { name: 'network_result', packedOffset: 176, packedBitOffset: 0, type: crosapi.mojom.ProbeNetworkResultSpec, nullable: true, minVersion: 0 },
        { name: 'tpm_result', packedOffset: 192, packedBitOffset: 0, type: crosapi.mojom.ProbeTpmResultSpec, nullable: true, minVersion: 0 },
        { name: 'audio_result', packedOffset: 208, packedBitOffset: 0, type: crosapi.mojom.ProbeAudioResultSpec, nullable: true, minVersion: 1 },
        { name: 'bus_result', packedOffset: 224, packedBitOffset: 0, type: crosapi.mojom.ProbeBusResultSpec, nullable: true, minVersion: 2 },
        { name: 'display_result', packedOffset: 240, packedBitOffset: 0, type: crosapi.mojom.ProbeDisplayResultSpec, nullable: true, minVersion: 3 },
        { name: 'thermal_result', packedOffset: 256, packedBitOffset: 0, type: crosapi.mojom.ProbeThermalResultSpec, nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 216}, {version: 1, packedSize: 232}, {version: 2, packedSize: 248}, {version: 3, packedSize: 264}, {version: 4, packedSize: 280}]
    }
  }
};

// Struct: ProbeOemData
crosapi.mojom.ProbeOemDataSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.ProbeOemData',
      packedSize: 16,
      fields: [
        { name: 'oem_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: TelemetryProbeService
crosapi.mojom.TelemetryProbeService = {};

crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeCategoryEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryProbeService_GetOemData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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

  probeTelemetryInfo(categories) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec,
      crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec,
      [categories]);
  }

  getOemData() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec,
      crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec,
      []);
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

// ParamsSpec for ProbeTelemetryInfo
crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryProbeService.ProbeTelemetryInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'categories', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.ProbeCategoryEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryProbeService.ProbeTelemetryInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'telemetry_info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ProbeTelemetryInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOemData
crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryProbeService.GetOemData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryProbeService.GetOemData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'oem_data', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.ProbeOemDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.TelemetryProbeServicePtr = crosapi.mojom.TelemetryProbeServiceRemote;
crosapi.mojom.TelemetryProbeServiceRequest = crosapi.mojom.TelemetryProbeServicePendingReceiver;

