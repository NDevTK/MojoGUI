// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/probe_service.mojom
// Module: crosapi.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var chromeos = chromeos || {};

crosapi.mojom.ProbeCategoryEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeErrorTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeFwupdVersionFormatSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeUsbVersionSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeUsbSpecSpeedSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeCpuArchitectureEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeTpmGSCVersionSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeDisplayInputTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeThermalSensorSourceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ProbeBatteryResultSpec = { $: {} };
crosapi.mojom.ProbeBusInfoSpec = { $: {} };
crosapi.mojom.ProbeBusResultSpec = { $: {} };
crosapi.mojom.ProbeNonRemovableBlockDeviceResultSpec = { $: {} };
crosapi.mojom.ProbeCachedVpdResultSpec = { $: {} };
crosapi.mojom.ProbeCpuResultSpec = { $: {} };
crosapi.mojom.ProbeTimezoneResultSpec = { $: {} };
crosapi.mojom.ProbeMemoryResultSpec = { $: {} };
crosapi.mojom.ProbeBacklightResultSpec = { $: {} };
crosapi.mojom.ProbeFanResultSpec = { $: {} };
crosapi.mojom.ProbeStatefulPartitionResultSpec = { $: {} };
crosapi.mojom.ProbeTpmResultSpec = { $: {} };
crosapi.mojom.ProbeBluetoothResultSpec = { $: {} };
crosapi.mojom.ProbeSystemResultSpec = { $: {} };
crosapi.mojom.ProbeNetworkResultSpec = { $: {} };
crosapi.mojom.ProbeAudioResultSpec = { $: {} };
crosapi.mojom.ProbeDisplayResultSpec = { $: {} };
crosapi.mojom.ProbeThermalResultSpec = { $: {} };
crosapi.mojom.ProbeErrorSpec = { $: {} };
crosapi.mojom.ProbeBatteryInfoSpec = { $: {} };
crosapi.mojom.ProbeUsbBusInterfaceInfoSpec = { $: {} };
crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec = { $: {} };
crosapi.mojom.ProbeUsbBusInfoSpec = { $: {} };
crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec = { $: {} };
crosapi.mojom.ProbeCachedVpdInfoSpec = { $: {} };
crosapi.mojom.ProbeCpuCStateInfoSpec = { $: {} };
crosapi.mojom.ProbeLogicalCpuInfoSpec = { $: {} };
crosapi.mojom.ProbePhysicalCpuInfoSpec = { $: {} };
crosapi.mojom.ProbeCpuInfoSpec = { $: {} };
crosapi.mojom.ProbeTimezoneInfoSpec = { $: {} };
crosapi.mojom.ProbeMemoryInfoSpec = { $: {} };
crosapi.mojom.ProbeBacklightInfoSpec = { $: {} };
crosapi.mojom.ProbeFanInfoSpec = { $: {} };
crosapi.mojom.ProbeStatefulPartitionInfoSpec = { $: {} };
crosapi.mojom.ProbeTpmVersionSpec = { $: {} };
crosapi.mojom.ProbeTpmStatusSpec = { $: {} };
crosapi.mojom.ProbeTpmDictionaryAttackSpec = { $: {} };
crosapi.mojom.ProbeTpmInfoSpec = { $: {} };
crosapi.mojom.ProbeBluetoothAdapterInfoSpec = { $: {} };
crosapi.mojom.ProbeOsVersionSpec = { $: {} };
crosapi.mojom.ProbeOsInfoSpec = { $: {} };
crosapi.mojom.ProbeSystemInfoSpec = { $: {} };
crosapi.mojom.ProbeAudioInputNodeInfoSpec = { $: {} };
crosapi.mojom.ProbeAudioOutputNodeInfoSpec = { $: {} };
crosapi.mojom.ProbeAudioInfoSpec = { $: {} };
crosapi.mojom.ProbeEmbeddedDisplayInfoSpec = { $: {} };
crosapi.mojom.ProbeExternalDisplayInfoSpec = { $: {} };
crosapi.mojom.ProbeDisplayInfoSpec = { $: {} };
crosapi.mojom.ProbeThermalSensorInfoSpec = { $: {} };
crosapi.mojom.ProbeThermalInfoSpec = { $: {} };
crosapi.mojom.ProbeTelemetryInfoSpec = { $: {} };
crosapi.mojom.ProbeOemDataSpec = { $: {} };
crosapi.mojom.TelemetryProbeService = {};
crosapi.mojom.TelemetryProbeService.$interfaceName = 'crosapi.mojom.TelemetryProbeService';
crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec = { $: {} };
crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec = { $: {} };

// Enum: ProbeCategoryEnum
crosapi.mojom.ProbeCategoryEnum = {
  kUnknown: 11,
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
  kNetwork: 12,
  kTpm: 13,
  kAudio: 14,
  kBus: 15,
  MinVersion: 15,
  MinVersion: 15,
};

// Enum: ProbeErrorType
crosapi.mojom.ProbeErrorType = {
  kUnknown: 4,
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};

// Enum: ProbeFwupdVersionFormat
crosapi.mojom.ProbeFwupdVersionFormat = {
  kUnknown: 0,
  kPlain: 1,
  kNumber: 2,
  kPair: 3,
  kTriplet: 4,
  kQuad: 5,
  kBcd: 6,
  kIntelMe: 7,
  kIntelMe2: 8,
  kSurfaceLegacy: 9,
  kSurface: 10,
  kDellBios: 11,
  kHex: 12,
};

// Enum: ProbeUsbVersion
crosapi.mojom.ProbeUsbVersion = {
  kUnknown: 0,
  kUsb1: 1,
  kUsb2: 2,
  kUsb3: 3,
};

// Enum: ProbeUsbSpecSpeed
crosapi.mojom.ProbeUsbSpecSpeed = {
  kUnknown: 0,
  k1_5Mbps: 1,
  k12Mbps: 2,
  k480Mbps: 3,
  k5Gbps: 4,
  k10Gbps: 5,
  k20Gbps: 6,
};

// Enum: ProbeCpuArchitectureEnum
crosapi.mojom.ProbeCpuArchitectureEnum = {
  kUnknown: 3,
  kX86_64: 0,
  kAArch64: 1,
  kArmv7l: 2,
};

// Enum: ProbeTpmGSCVersion
crosapi.mojom.ProbeTpmGSCVersion = {
  kNotGSC: 0,
  kCr50: 1,
  kTi50: 2,
};

// Enum: ProbeDisplayInputType
crosapi.mojom.ProbeDisplayInputType = {
  kUnmappedEnumField: 0,
  kDigital: 1,
  kAnalog: 2,
};

// Enum: ProbeThermalSensorSource
crosapi.mojom.ProbeThermalSensorSource = {
  kUnmappedEnumField: 0,
  kEc: 1,
  kSysFs: 2,
};

// Union: ProbeBatteryResult
mojo.internal.Union(
    crosapi.mojom.ProbeBatteryResultSpec, 'crosapi.mojom.ProbeBatteryResult', {
      'battery_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeBatteryInfoSpec.$,
        'nullable': true,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeBusInfo
mojo.internal.Union(
    crosapi.mojom.ProbeBusInfoSpec, 'crosapi.mojom.ProbeBusInfo', {
      'unmapped_field': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'usb_bus_info': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeUsbBusInfoSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeBusResult
mojo.internal.Union(
    crosapi.mojom.ProbeBusResultSpec, 'crosapi.mojom.ProbeBusResult', {
      'bus_devices_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeBusInfoSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeNonRemovableBlockDeviceResult
mojo.internal.Union(
    crosapi.mojom.ProbeNonRemovableBlockDeviceResultSpec, 'crosapi.mojom.ProbeNonRemovableBlockDeviceResult', {
      'block_device_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeCachedVpdResult
mojo.internal.Union(
    crosapi.mojom.ProbeCachedVpdResultSpec, 'crosapi.mojom.ProbeCachedVpdResult', {
      'vpd_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeCachedVpdInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeCpuResult
mojo.internal.Union(
    crosapi.mojom.ProbeCpuResultSpec, 'crosapi.mojom.ProbeCpuResult', {
      'cpu_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeCpuInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeTimezoneResult
mojo.internal.Union(
    crosapi.mojom.ProbeTimezoneResultSpec, 'crosapi.mojom.ProbeTimezoneResult', {
      'timezone_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeTimezoneInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeMemoryResult
mojo.internal.Union(
    crosapi.mojom.ProbeMemoryResultSpec, 'crosapi.mojom.ProbeMemoryResult', {
      'memory_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeMemoryInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeBacklightResult
mojo.internal.Union(
    crosapi.mojom.ProbeBacklightResultSpec, 'crosapi.mojom.ProbeBacklightResult', {
      'backlight_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeBacklightInfoSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeFanResult
mojo.internal.Union(
    crosapi.mojom.ProbeFanResultSpec, 'crosapi.mojom.ProbeFanResult', {
      'fan_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeFanInfoSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeStatefulPartitionResult
mojo.internal.Union(
    crosapi.mojom.ProbeStatefulPartitionResultSpec, 'crosapi.mojom.ProbeStatefulPartitionResult', {
      'partition_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeStatefulPartitionInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeTpmResult
mojo.internal.Union(
    crosapi.mojom.ProbeTpmResultSpec, 'crosapi.mojom.ProbeTpmResult', {
      'tpm_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeTpmInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeBluetoothResult
mojo.internal.Union(
    crosapi.mojom.ProbeBluetoothResultSpec, 'crosapi.mojom.ProbeBluetoothResult', {
      'bluetooth_adapter_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(crosapi.mojom.ProbeBluetoothAdapterInfoSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeSystemResult
mojo.internal.Union(
    crosapi.mojom.ProbeSystemResultSpec, 'crosapi.mojom.ProbeSystemResult', {
      'system_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeSystemInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeNetworkResult
mojo.internal.Union(
    crosapi.mojom.ProbeNetworkResultSpec, 'crosapi.mojom.ProbeNetworkResult', {
      'network_health': {
        'ordinal': 0,
        'type': chromeos.network_health.mojom.NetworkHealthStateSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeAudioResult
mojo.internal.Union(
    crosapi.mojom.ProbeAudioResultSpec, 'crosapi.mojom.ProbeAudioResult', {
      'audio_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeAudioInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeDisplayResult
mojo.internal.Union(
    crosapi.mojom.ProbeDisplayResultSpec, 'crosapi.mojom.ProbeDisplayResult', {
      'display_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeDisplayInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeThermalResult
mojo.internal.Union(
    crosapi.mojom.ProbeThermalResultSpec, 'crosapi.mojom.ProbeThermalResult', {
      'thermal_info': {
        'ordinal': 0,
        'type': crosapi.mojom.ProbeThermalInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: ProbeError
mojo.internal.Struct(
    crosapi.mojom.ProbeErrorSpec, 'crosapi.mojom.ProbeError', [
      mojo.internal.StructField('type', 0, 0, crosapi.mojom.ProbeErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('msg', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeBatteryInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeBatteryInfoSpec, 'crosapi.mojom.ProbeBatteryInfo', [
      mojo.internal.StructField('cycle_count', 0, 0, crosapi.mojom.Int64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('voltage_now', 8, 0, crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('vendor', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('serial_number', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('charge_full_design', 32, 0, crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('charge_full', 40, 0, crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('voltage_min_design', 48, 0, crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('model_name', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('charge_now', 64, 0, crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('current_now', 72, 0, crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('technology', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('status', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('manufacture_date', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('temperature', 104, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 120]]);

// Struct: ProbeUsbBusInterfaceInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeUsbBusInterfaceInfoSpec, 'crosapi.mojom.ProbeUsbBusInterfaceInfo', [
      mojo.internal.StructField('interface_number', 0, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('class_id', 8, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subclass_id', 16, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('protocol_id', 24, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('driver', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ProbeFwupdFirmwareVersionInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec, 'crosapi.mojom.ProbeFwupdFirmwareVersionInfo', [
      mojo.internal.StructField('version', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('version_format', 8, 0, crosapi.mojom.ProbeFwupdVersionFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeUsbBusInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeUsbBusInfoSpec, 'crosapi.mojom.ProbeUsbBusInfo', [
      mojo.internal.StructField('class_id', 0, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subclass_id', 8, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('protocol_id', 16, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('vendor_id', 24, 0, crosapi.mojom.UInt16ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('product_id', 32, 0, crosapi.mojom.UInt16ValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('interfaces', 40, 0, mojo.internal.Array(crosapi.mojom.ProbeUsbBusInterfaceInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('fwupd_firmware_version_info', 48, 0, crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('version', 56, 0, crosapi.mojom.ProbeUsbVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('spec_speed', 64, 0, crosapi.mojom.ProbeUsbSpecSpeedSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ProbeNonRemovableBlockDeviceInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec, 'crosapi.mojom.ProbeNonRemovableBlockDeviceInfo', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('size', 8, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer_id', 24, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('serial', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('bytes_read_since_last_boot', 48, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bytes_written_since_last_boot', 56, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('read_time_seconds_since_last_boot', 64, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('write_time_seconds_since_last_boot', 72, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('io_time_seconds_since_last_boot', 80, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('discard_time_seconds_since_last_boot', 88, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 104]]);

// Struct: ProbeCachedVpdInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeCachedVpdInfoSpec, 'crosapi.mojom.ProbeCachedVpdInfo', [
      mojo.internal.StructField('first_power_date', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sku_number', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('serial_number', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('model_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeCpuCStateInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeCpuCStateInfoSpec, 'crosapi.mojom.ProbeCpuCStateInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('time_in_state_since_last_boot_us', 8, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeLogicalCpuInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeLogicalCpuInfoSpec, 'crosapi.mojom.ProbeLogicalCpuInfo', [
      mojo.internal.StructField('max_clock_speed_khz', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scaling_max_frequency_khz', 8, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scaling_current_frequency_khz', 16, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('idle_time_ms', 24, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('c_states', 32, 0, mojo.internal.Array(crosapi.mojom.ProbeCpuCStateInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('core_id', 40, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 1, undefined),
    ],
    [[0, 48], [1, 56]]);

// Struct: ProbePhysicalCpuInfo
mojo.internal.Struct(
    crosapi.mojom.ProbePhysicalCpuInfoSpec, 'crosapi.mojom.ProbePhysicalCpuInfo', [
      mojo.internal.StructField('model_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('logical_cpus', 8, 0, mojo.internal.Array(crosapi.mojom.ProbeLogicalCpuInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeCpuInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeCpuInfoSpec, 'crosapi.mojom.ProbeCpuInfo', [
      mojo.internal.StructField('num_total_threads', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('architecture', 8, 0, crosapi.mojom.ProbeCpuArchitectureEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('physical_cpus', 16, 0, mojo.internal.Array(crosapi.mojom.ProbePhysicalCpuInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeTimezoneInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeTimezoneInfoSpec, 'crosapi.mojom.ProbeTimezoneInfo', [
      mojo.internal.StructField('posix', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('region', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeMemoryInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeMemoryInfoSpec, 'crosapi.mojom.ProbeMemoryInfo', [
      mojo.internal.StructField('total_memory_kib', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('free_memory_kib', 8, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('available_memory_kib', 16, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('page_faults_since_last_boot', 24, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeBacklightInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeBacklightInfoSpec, 'crosapi.mojom.ProbeBacklightInfo', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('max_brightness', 8, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('brightness', 16, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeFanInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeFanInfoSpec, 'crosapi.mojom.ProbeFanInfo', [
      mojo.internal.StructField('speed_rpm', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProbeStatefulPartitionInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeStatefulPartitionInfoSpec, 'crosapi.mojom.ProbeStatefulPartitionInfo', [
      mojo.internal.StructField('available_space', 0, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('total_space', 8, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeTpmVersion
mojo.internal.Struct(
    crosapi.mojom.ProbeTpmVersionSpec, 'crosapi.mojom.ProbeTpmVersion', [
      mojo.internal.StructField('gsc_version', 0, 0, crosapi.mojom.ProbeTpmGSCVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('family', 8, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('spec_level', 16, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer', 24, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tpm_model', 32, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('firmware_version', 40, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('vendor_specific', 48, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ProbeTpmStatus
mojo.internal.Struct(
    crosapi.mojom.ProbeTpmStatusSpec, 'crosapi.mojom.ProbeTpmStatus', [
      mojo.internal.StructField('enabled', 0, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('owned', 8, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('owner_password_is_present', 16, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeTpmDictionaryAttack
mojo.internal.Struct(
    crosapi.mojom.ProbeTpmDictionaryAttackSpec, 'crosapi.mojom.ProbeTpmDictionaryAttack', [
      mojo.internal.StructField('counter', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('threshold', 8, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('lockout_in_effect', 16, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('lockout_seconds_remaining', 24, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeTpmInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeTpmInfoSpec, 'crosapi.mojom.ProbeTpmInfo', [
      mojo.internal.StructField('version', 0, 0, crosapi.mojom.ProbeTpmVersionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('status', 8, 0, crosapi.mojom.ProbeTpmStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dictionary_attack', 16, 0, crosapi.mojom.ProbeTpmDictionaryAttackSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeBluetoothAdapterInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeBluetoothAdapterInfoSpec, 'crosapi.mojom.ProbeBluetoothAdapterInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('address', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('powered', 16, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('num_connected_devices', 24, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeOsVersion
mojo.internal.Struct(
    crosapi.mojom.ProbeOsVersionSpec, 'crosapi.mojom.ProbeOsVersion', [
      mojo.internal.StructField('release_milestone', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('build_number', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('patch_number', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('release_channel', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeOsInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeOsInfoSpec, 'crosapi.mojom.ProbeOsInfo', [
      mojo.internal.StructField('oem_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('os_version', 8, 0, crosapi.mojom.ProbeOsVersionSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('marketing_name', 16, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 16], [1, 24], [2, 32]]);

// Struct: ProbeSystemInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeSystemInfoSpec, 'crosapi.mojom.ProbeSystemInfo', [
      mojo.internal.StructField('os_info', 0, 0, crosapi.mojom.ProbeOsInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProbeAudioInputNodeInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeAudioInputNodeInfoSpec, 'crosapi.mojom.ProbeAudioInputNodeInfo', [
      mojo.internal.StructField('id', 0, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('device_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('active', 24, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('node_gain', 32, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ProbeAudioOutputNodeInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeAudioOutputNodeInfoSpec, 'crosapi.mojom.ProbeAudioOutputNodeInfo', [
      mojo.internal.StructField('id', 0, 0, crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('device_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('active', 24, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('node_volume', 32, 0, crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ProbeAudioInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeAudioInfoSpec, 'crosapi.mojom.ProbeAudioInfo', [
      mojo.internal.StructField('output_mute', 0, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('input_mute', 8, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('underruns', 16, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('severe_underruns', 24, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('output_nodes', 32, 0, mojo.internal.Array(crosapi.mojom.ProbeAudioOutputNodeInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('input_nodes', 40, 0, mojo.internal.Array(crosapi.mojom.ProbeAudioInputNodeInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ProbeEmbeddedDisplayInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeEmbeddedDisplayInfoSpec, 'crosapi.mojom.ProbeEmbeddedDisplayInfo', [
      mojo.internal.StructField('refresh_rate_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'refresh_rate_$flag', originalFieldName: 'refresh_rate' }),
      mojo.internal.StructField('manufacturer', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('edid_version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('input_type', 24, 0, crosapi.mojom.ProbeDisplayInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('display_width_$value', 40, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'display_width_$flag', originalFieldName: 'display_width' }),
      mojo.internal.StructField('display_height_$value', 44, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'display_height_$flag', originalFieldName: 'display_height' }),
      mojo.internal.StructField('resolution_horizontal_$value', 48, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'resolution_horizontal_$flag', originalFieldName: 'resolution_horizontal' }),
      mojo.internal.StructField('resolution_vertical_$value', 52, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'resolution_vertical_$flag', originalFieldName: 'resolution_vertical' }),
      mojo.internal.StructField('serial_number_$value', 56, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'serial_number_$flag', originalFieldName: 'serial_number' }),
      mojo.internal.StructField('model_id_$value', 60, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'model_id_$flag', originalFieldName: 'model_id' }),
      mojo.internal.StructField('manufacture_year_$value', 62, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'manufacture_year_$flag', originalFieldName: 'manufacture_year' }),
      mojo.internal.StructField('privacy_screen_supported_$flag', 64, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'privacy_screen_supported_$value', originalFieldName: 'privacy_screen_supported' }),
      mojo.internal.StructField('privacy_screen_supported_$value', 64, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'privacy_screen_supported_$flag', originalFieldName: 'privacy_screen_supported' }),
      mojo.internal.StructField('privacy_screen_enabled_$flag', 64, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'privacy_screen_enabled_$value', originalFieldName: 'privacy_screen_enabled' }),
      mojo.internal.StructField('privacy_screen_enabled_$value', 64, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'privacy_screen_enabled_$flag', originalFieldName: 'privacy_screen_enabled' }),
      mojo.internal.StructField('display_width_$flag', 64, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'display_width_$value', originalFieldName: 'display_width' }),
      mojo.internal.StructField('display_height_$flag', 64, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'display_height_$value', originalFieldName: 'display_height' }),
      mojo.internal.StructField('resolution_horizontal_$flag', 64, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'resolution_horizontal_$value', originalFieldName: 'resolution_horizontal' }),
      mojo.internal.StructField('resolution_vertical_$flag', 64, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'resolution_vertical_$value', originalFieldName: 'resolution_vertical' }),
      mojo.internal.StructField('refresh_rate_$flag', 65, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'refresh_rate_$value', originalFieldName: 'refresh_rate' }),
      mojo.internal.StructField('model_id_$flag', 65, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'model_id_$value', originalFieldName: 'model_id' }),
      mojo.internal.StructField('serial_number_$flag', 65, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'serial_number_$value', originalFieldName: 'serial_number' }),
      mojo.internal.StructField('manufacture_week_$flag', 65, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'manufacture_week_$value', originalFieldName: 'manufacture_week' }),
      mojo.internal.StructField('manufacture_week_$value', 66, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'manufacture_week_$flag', originalFieldName: 'manufacture_week' }),
      mojo.internal.StructField('manufacture_year_$flag', 67, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'manufacture_year_$value', originalFieldName: 'manufacture_year' }),
    ],
    [[0, 80]]);

// Struct: ProbeExternalDisplayInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeExternalDisplayInfoSpec, 'crosapi.mojom.ProbeExternalDisplayInfo', [
      mojo.internal.StructField('refresh_rate_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'refresh_rate_$flag', originalFieldName: 'refresh_rate' }),
      mojo.internal.StructField('manufacturer', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('edid_version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('input_type', 24, 0, crosapi.mojom.ProbeDisplayInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('display_width_$value', 40, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'display_width_$flag', originalFieldName: 'display_width' }),
      mojo.internal.StructField('display_height_$value', 44, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'display_height_$flag', originalFieldName: 'display_height' }),
      mojo.internal.StructField('resolution_horizontal_$value', 48, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'resolution_horizontal_$flag', originalFieldName: 'resolution_horizontal' }),
      mojo.internal.StructField('resolution_vertical_$value', 52, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'resolution_vertical_$flag', originalFieldName: 'resolution_vertical' }),
      mojo.internal.StructField('serial_number_$value', 56, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'serial_number_$flag', originalFieldName: 'serial_number' }),
      mojo.internal.StructField('model_id_$value', 60, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'model_id_$flag', originalFieldName: 'model_id' }),
      mojo.internal.StructField('manufacture_year_$value', 62, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'manufacture_year_$flag', originalFieldName: 'manufacture_year' }),
      mojo.internal.StructField('display_width_$flag', 64, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'display_width_$value', originalFieldName: 'display_width' }),
      mojo.internal.StructField('display_height_$flag', 64, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'display_height_$value', originalFieldName: 'display_height' }),
      mojo.internal.StructField('resolution_horizontal_$flag', 64, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'resolution_horizontal_$value', originalFieldName: 'resolution_horizontal' }),
      mojo.internal.StructField('resolution_vertical_$flag', 64, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'resolution_vertical_$value', originalFieldName: 'resolution_vertical' }),
      mojo.internal.StructField('refresh_rate_$flag', 64, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'refresh_rate_$value', originalFieldName: 'refresh_rate' }),
      mojo.internal.StructField('model_id_$flag', 64, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'model_id_$value', originalFieldName: 'model_id' }),
      mojo.internal.StructField('serial_number_$flag', 64, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'serial_number_$value', originalFieldName: 'serial_number' }),
      mojo.internal.StructField('manufacture_week_$flag', 64, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'manufacture_week_$value', originalFieldName: 'manufacture_week' }),
      mojo.internal.StructField('manufacture_week_$value', 65, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'manufacture_week_$flag', originalFieldName: 'manufacture_week' }),
      mojo.internal.StructField('manufacture_year_$flag', 66, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'manufacture_year_$value', originalFieldName: 'manufacture_year' }),
    ],
    [[0, 80]]);

// Struct: ProbeDisplayInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeDisplayInfoSpec, 'crosapi.mojom.ProbeDisplayInfo', [
      mojo.internal.StructField('embedded_display', 0, 0, crosapi.mojom.ProbeEmbeddedDisplayInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('external_displays', 8, 0, mojo.internal.Array(crosapi.mojom.ProbeExternalDisplayInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeThermalSensorInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeThermalSensorInfoSpec, 'crosapi.mojom.ProbeThermalSensorInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('temperature_celsius', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, crosapi.mojom.ProbeThermalSensorSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeThermalInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeThermalInfoSpec, 'crosapi.mojom.ProbeThermalInfo', [
      mojo.internal.StructField('thermal_sensors', 0, 0, mojo.internal.Array(crosapi.mojom.ProbeThermalSensorInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProbeTelemetryInfo
mojo.internal.Struct(
    crosapi.mojom.ProbeTelemetryInfoSpec, 'crosapi.mojom.ProbeTelemetryInfo', [
      mojo.internal.StructField('battery_result', 0, 0, crosapi.mojom.ProbeBatteryResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('block_device_result', 8, 0, crosapi.mojom.ProbeNonRemovableBlockDeviceResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('vpd_result', 16, 0, crosapi.mojom.ProbeCachedVpdResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cpu_result', 24, 0, crosapi.mojom.ProbeCpuResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('timezone_result', 32, 0, crosapi.mojom.ProbeTimezoneResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('memory_result', 40, 0, crosapi.mojom.ProbeMemoryResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('backlight_result', 48, 0, crosapi.mojom.ProbeBacklightResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('fan_result', 56, 0, crosapi.mojom.ProbeFanResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('stateful_partition_result', 64, 0, crosapi.mojom.ProbeStatefulPartitionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bluetooth_result', 72, 0, crosapi.mojom.ProbeBluetoothResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('system_result', 80, 0, crosapi.mojom.ProbeSystemResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('network_result', 88, 0, crosapi.mojom.ProbeNetworkResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tpm_result', 96, 0, crosapi.mojom.ProbeTpmResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('audio_result', 104, 0, crosapi.mojom.ProbeAudioResultSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('bus_result', 112, 0, crosapi.mojom.ProbeBusResultSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('display_result', 120, 0, crosapi.mojom.ProbeDisplayResultSpec.$, null, true, 3, undefined),
      mojo.internal.StructField('thermal_result', 128, 0, crosapi.mojom.ProbeThermalResultSpec.$, null, true, 4, undefined),
    ],
    [[0, 112], [1, 120], [2, 128], [3, 136], [4, 144]]);

// Struct: ProbeOemData
mojo.internal.Struct(
    crosapi.mojom.ProbeOemDataSpec, 'crosapi.mojom.ProbeOemData', [
      mojo.internal.StructField('oem_data', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TelemetryProbeService
mojo.internal.Struct(
    crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec, 'crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_Params', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(crosapi.mojom.ProbeCategoryEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec, 'crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParams', [
      mojo.internal.StructField('telemetry_info', 0, 0, crosapi.mojom.ProbeTelemetryInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec, 'crosapi.mojom.TelemetryProbeService_GetOemData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec, 'crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParams', [
      mojo.internal.StructField('oem_data', 0, 0, crosapi.mojom.ProbeOemDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
    this.ordinals = window.mojoScrambler.getOrdinals('TelemetryProbeService', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  probeTelemetryInfo(categories) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec,
      crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec,
      [categories],
      false);
  }

  getOemData() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec,
      crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec,
      [],
      false);
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

crosapi.mojom.TelemetryProbeServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TelemetryProbeService', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ProbeTelemetryInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProbeTelemetryInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetOemData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOemData (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.probeTelemetryInfo');
          const result = this.impl.probeTelemetryInfo(params.categories);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getOemData');
          const result = this.impl.getOemData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.TelemetryProbeServiceReceiver = crosapi.mojom.TelemetryProbeServiceReceiver;

crosapi.mojom.TelemetryProbeServicePtr = crosapi.mojom.TelemetryProbeServiceRemote;
crosapi.mojom.TelemetryProbeServiceRequest = crosapi.mojom.TelemetryProbeServicePendingReceiver;

