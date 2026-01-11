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

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};

mojo.internal.bindings.crosapi.mojom.ProbeCategoryEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeErrorTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeFwupdVersionFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeUsbVersionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeUsbSpecSpeedSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeCpuArchitectureEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeTpmGSCVersionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeDisplayInputTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeThermalSensorSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ProbeBatteryResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeBusInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeBusResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeNonRemovableBlockDeviceResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeCachedVpdResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeCpuResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeTimezoneResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeMemoryResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeBacklightResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeFanResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeStatefulPartitionResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeTpmResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeBluetoothResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeSystemResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeNetworkResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeAudioResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeDisplayResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeThermalResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeBatteryInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeUsbBusInterfaceInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeUsbBusInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeCachedVpdInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeCpuCStateInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeLogicalCpuInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbePhysicalCpuInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeCpuInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeTimezoneInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeMemoryInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeBacklightInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeFanInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeStatefulPartitionInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeTpmVersionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeTpmStatusSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeTpmDictionaryAttackSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeTpmInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeBluetoothAdapterInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeOsVersionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeOsInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeSystemInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeAudioInputNodeInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeAudioOutputNodeInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeAudioInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeEmbeddedDisplayInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeExternalDisplayInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeDisplayInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeThermalSensorInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeThermalInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeTelemetryInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ProbeOemDataSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryProbeService = {};
mojo.internal.bindings.crosapi.mojom.TelemetryProbeService.$interfaceName = 'crosapi.mojom.TelemetryProbeService';
mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec = { $: {} };

// Enum: ProbeCategoryEnum
mojo.internal.bindings.crosapi.mojom.ProbeCategoryEnum = {
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
mojo.internal.bindings.crosapi.mojom.ProbeErrorType = {
  kUnknown: 4,
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};

// Enum: ProbeFwupdVersionFormat
mojo.internal.bindings.crosapi.mojom.ProbeFwupdVersionFormat = {
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
mojo.internal.bindings.crosapi.mojom.ProbeUsbVersion = {
  kUnknown: 0,
  kUsb1: 1,
  kUsb2: 2,
  kUsb3: 3,
};

// Enum: ProbeUsbSpecSpeed
mojo.internal.bindings.crosapi.mojom.ProbeUsbSpecSpeed = {
  kUnknown: 0,
  k1_5Mbps: 1,
  k12Mbps: 2,
  k480Mbps: 3,
  k5Gbps: 4,
  k10Gbps: 5,
  k20Gbps: 6,
};

// Enum: ProbeCpuArchitectureEnum
mojo.internal.bindings.crosapi.mojom.ProbeCpuArchitectureEnum = {
  kUnknown: 3,
  kX86_64: 0,
  kAArch64: 1,
  kArmv7l: 2,
};

// Enum: ProbeTpmGSCVersion
mojo.internal.bindings.crosapi.mojom.ProbeTpmGSCVersion = {
  kNotGSC: 0,
  kCr50: 1,
  kTi50: 2,
};

// Enum: ProbeDisplayInputType
mojo.internal.bindings.crosapi.mojom.ProbeDisplayInputType = {
  kUnmappedEnumField: 0,
  kDigital: 1,
  kAnalog: 2,
};

// Enum: ProbeThermalSensorSource
mojo.internal.bindings.crosapi.mojom.ProbeThermalSensorSource = {
  kUnmappedEnumField: 0,
  kEc: 1,
  kSysFs: 2,
};

// Union: ProbeBatteryResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeBatteryResultSpec, 'crosapi.mojom.ProbeBatteryResult', {
      'arg_battery_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeBatteryInfoSpec.$,
        'nullable': true,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeBusInfo
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeBusInfoSpec, 'crosapi.mojom.ProbeBusInfo', {
      'arg_unmapped_field': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_usb_bus_info': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeUsbBusInfoSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeBusResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeBusResultSpec, 'crosapi.mojom.ProbeBusResult', {
      'arg_bus_devices_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.ProbeBusInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeNonRemovableBlockDeviceResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeNonRemovableBlockDeviceResultSpec, 'crosapi.mojom.ProbeNonRemovableBlockDeviceResult', {
      'arg_block_device_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeCachedVpdResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeCachedVpdResultSpec, 'crosapi.mojom.ProbeCachedVpdResult', {
      'arg_vpd_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeCachedVpdInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeCpuResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeCpuResultSpec, 'crosapi.mojom.ProbeCpuResult', {
      'arg_cpu_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeCpuInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeTimezoneResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeTimezoneResultSpec, 'crosapi.mojom.ProbeTimezoneResult', {
      'arg_timezone_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeTimezoneInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeMemoryResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeMemoryResultSpec, 'crosapi.mojom.ProbeMemoryResult', {
      'arg_memory_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeMemoryInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeBacklightResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeBacklightResultSpec, 'crosapi.mojom.ProbeBacklightResult', {
      'arg_backlight_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeBacklightInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeFanResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeFanResultSpec, 'crosapi.mojom.ProbeFanResult', {
      'arg_fan_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeFanInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeStatefulPartitionResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeStatefulPartitionResultSpec, 'crosapi.mojom.ProbeStatefulPartitionResult', {
      'arg_partition_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeStatefulPartitionInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeTpmResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeTpmResultSpec, 'crosapi.mojom.ProbeTpmResult', {
      'arg_tpm_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeTpmInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeBluetoothResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeBluetoothResultSpec, 'crosapi.mojom.ProbeBluetoothResult', {
      'arg_bluetooth_adapter_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeBluetoothAdapterInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeSystemResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeSystemResultSpec, 'crosapi.mojom.ProbeSystemResult', {
      'arg_system_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeSystemInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeNetworkResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeNetworkResultSpec, 'crosapi.mojom.ProbeNetworkResult', {
      'arg_network_health': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_health.mojom.NetworkHealthStateSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeAudioResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeAudioResultSpec, 'crosapi.mojom.ProbeAudioResult', {
      'arg_audio_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeAudioInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeDisplayResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeDisplayResultSpec, 'crosapi.mojom.ProbeDisplayResult', {
      'arg_display_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeDisplayInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ProbeThermalResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.ProbeThermalResultSpec, 'crosapi.mojom.ProbeThermalResult', {
      'arg_thermal_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeThermalInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: ProbeError
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeErrorSpec, 'crosapi.mojom.ProbeError', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_msg', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeBatteryInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeBatteryInfoSpec, 'crosapi.mojom.ProbeBatteryInfo', [
      mojo.internal.StructField('arg_cycle_count', 0, 0, mojo.internal.bindings.crosapi.mojom.Int64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_voltage_now', 8, 0, mojo.internal.bindings.crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_vendor', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_charge_full_design', 32, 0, mojo.internal.bindings.crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_charge_full', 40, 0, mojo.internal.bindings.crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_voltage_min_design', 48, 0, mojo.internal.bindings.crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_model_name', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_charge_now', 64, 0, mojo.internal.bindings.crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_current_now', 72, 0, mojo.internal.bindings.crosapi.mojom.DoubleValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_technology', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_status', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacture_date', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_temperature', 104, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 120]]);

// Struct: ProbeUsbBusInterfaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeUsbBusInterfaceInfoSpec, 'crosapi.mojom.ProbeUsbBusInterfaceInfo', [
      mojo.internal.StructField('arg_interface_number', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_class_id', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subclass_id', 16, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_protocol_id', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_driver', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ProbeFwupdFirmwareVersionInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec, 'crosapi.mojom.ProbeFwupdFirmwareVersionInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_version_format', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeFwupdVersionFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeUsbBusInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeUsbBusInfoSpec, 'crosapi.mojom.ProbeUsbBusInfo', [
      mojo.internal.StructField('arg_class_id', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_subclass_id', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_protocol_id', 16, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt16ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_product_id', 32, 0, mojo.internal.bindings.crosapi.mojom.UInt16ValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interfaces', 40, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeUsbBusInterfaceInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_fwupd_firmware_version_info', 48, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeFwupdFirmwareVersionInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_version', 56, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeUsbVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_spec_speed', 64, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeUsbSpecSpeedSpec.$, null, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ProbeNonRemovableBlockDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeNonRemovableBlockDeviceInfoSpec, 'crosapi.mojom.ProbeNonRemovableBlockDeviceInfo', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_size', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer_id', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_serial', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_bytes_read_since_last_boot', 48, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bytes_written_since_last_boot', 56, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_read_time_seconds_since_last_boot', 64, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_write_time_seconds_since_last_boot', 72, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_io_time_seconds_since_last_boot', 80, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_discard_time_seconds_since_last_boot', 88, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 104]]);

// Struct: ProbeCachedVpdInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeCachedVpdInfoSpec, 'crosapi.mojom.ProbeCachedVpdInfo', [
      mojo.internal.StructField('arg_first_power_date', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sku_number', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_model_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeCpuCStateInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeCpuCStateInfoSpec, 'crosapi.mojom.ProbeCpuCStateInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_time_in_state_since_last_boot_us', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeLogicalCpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeLogicalCpuInfoSpec, 'crosapi.mojom.ProbeLogicalCpuInfo', [
      mojo.internal.StructField('arg_max_clock_speed_khz', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_scaling_max_frequency_khz', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_scaling_current_frequency_khz', 16, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_idle_time_ms', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_c_states', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeCpuCStateInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_core_id', 40, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 1, undefined),
    ],
    [[0, 48], [1, 56]]);

// Struct: ProbePhysicalCpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbePhysicalCpuInfoSpec, 'crosapi.mojom.ProbePhysicalCpuInfo', [
      mojo.internal.StructField('arg_model_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_logical_cpus', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeLogicalCpuInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeCpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeCpuInfoSpec, 'crosapi.mojom.ProbeCpuInfo', [
      mojo.internal.StructField('arg_num_total_threads', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_architecture', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeCpuArchitectureEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_physical_cpus', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbePhysicalCpuInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeTimezoneInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeTimezoneInfoSpec, 'crosapi.mojom.ProbeTimezoneInfo', [
      mojo.internal.StructField('arg_posix', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_region', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeMemoryInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeMemoryInfoSpec, 'crosapi.mojom.ProbeMemoryInfo', [
      mojo.internal.StructField('arg_total_memory_kib', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_free_memory_kib', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_available_memory_kib', 16, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_page_faults_since_last_boot', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeBacklightInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeBacklightInfoSpec, 'crosapi.mojom.ProbeBacklightInfo', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_max_brightness', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_brightness', 16, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeFanInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeFanInfoSpec, 'crosapi.mojom.ProbeFanInfo', [
      mojo.internal.StructField('arg_speed_rpm', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProbeStatefulPartitionInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeStatefulPartitionInfoSpec, 'crosapi.mojom.ProbeStatefulPartitionInfo', [
      mojo.internal.StructField('arg_available_space', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_total_space', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeTpmVersion
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeTpmVersionSpec, 'crosapi.mojom.ProbeTpmVersion', [
      mojo.internal.StructField('arg_gsc_version', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeTpmGSCVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_family', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_spec_level', 16, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tpm_model', 32, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_firmware_version', 40, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_vendor_specific', 48, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ProbeTpmStatus
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeTpmStatusSpec, 'crosapi.mojom.ProbeTpmStatus', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_owned', 8, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_owner_password_is_present', 16, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeTpmDictionaryAttack
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeTpmDictionaryAttackSpec, 'crosapi.mojom.ProbeTpmDictionaryAttack', [
      mojo.internal.StructField('arg_counter', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_threshold', 8, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_lockout_in_effect', 16, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_lockout_seconds_remaining', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeTpmInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeTpmInfoSpec, 'crosapi.mojom.ProbeTpmInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeTpmVersionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeTpmStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_dictionary_attack', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeTpmDictionaryAttackSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeBluetoothAdapterInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeBluetoothAdapterInfoSpec, 'crosapi.mojom.ProbeBluetoothAdapterInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_address', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_powered', 16, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_num_connected_devices', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeOsVersion
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeOsVersionSpec, 'crosapi.mojom.ProbeOsVersion', [
      mojo.internal.StructField('arg_release_milestone', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_build_number', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_patch_number', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_release_channel', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ProbeOsInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeOsInfoSpec, 'crosapi.mojom.ProbeOsInfo', [
      mojo.internal.StructField('arg_oem_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_os_version', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeOsVersionSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_marketing_name', 16, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 16], [1, 24], [2, 32]]);

// Struct: ProbeSystemInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeSystemInfoSpec, 'crosapi.mojom.ProbeSystemInfo', [
      mojo.internal.StructField('arg_os_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeOsInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProbeAudioInputNodeInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeAudioInputNodeInfoSpec, 'crosapi.mojom.ProbeAudioInputNodeInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_device_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_active', 24, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_node_gain', 32, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ProbeAudioOutputNodeInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeAudioOutputNodeInfoSpec, 'crosapi.mojom.ProbeAudioOutputNodeInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.crosapi.mojom.UInt64ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_device_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_active', 24, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_node_volume', 32, 0, mojo.internal.bindings.crosapi.mojom.UInt8ValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ProbeAudioInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeAudioInfoSpec, 'crosapi.mojom.ProbeAudioInfo', [
      mojo.internal.StructField('arg_output_mute', 0, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_input_mute', 8, 0, mojo.internal.bindings.crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_underruns', 16, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_severe_underruns', 24, 0, mojo.internal.bindings.crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_output_nodes', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeAudioOutputNodeInfoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_input_nodes', 40, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeAudioInputNodeInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ProbeEmbeddedDisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeEmbeddedDisplayInfoSpec, 'crosapi.mojom.ProbeEmbeddedDisplayInfo', [
      mojo.internal.StructField('arg_refresh_rate_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_refresh_rate_$flag', originalFieldName: 'arg_refresh_rate' }),
      mojo.internal.StructField('arg_manufacturer', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_edid_version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_input_type', 24, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeDisplayInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_width_$value', 40, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_display_width_$flag', originalFieldName: 'arg_display_width' }),
      mojo.internal.StructField('arg_display_height_$value', 44, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_display_height_$flag', originalFieldName: 'arg_display_height' }),
      mojo.internal.StructField('arg_resolution_horizontal_$value', 48, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_resolution_horizontal_$flag', originalFieldName: 'arg_resolution_horizontal' }),
      mojo.internal.StructField('arg_resolution_vertical_$value', 52, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_resolution_vertical_$flag', originalFieldName: 'arg_resolution_vertical' }),
      mojo.internal.StructField('arg_serial_number_$value', 56, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_serial_number_$flag', originalFieldName: 'arg_serial_number' }),
      mojo.internal.StructField('arg_model_id_$value', 60, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_model_id_$flag', originalFieldName: 'arg_model_id' }),
      mojo.internal.StructField('arg_manufacture_year_$value', 62, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_manufacture_year_$flag', originalFieldName: 'arg_manufacture_year' }),
      mojo.internal.StructField('arg_privacy_screen_supported_$flag', 64, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_privacy_screen_supported_$value', originalFieldName: 'arg_privacy_screen_supported' }),
      mojo.internal.StructField('arg_privacy_screen_supported_$value', 64, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_privacy_screen_supported_$flag', originalFieldName: 'arg_privacy_screen_supported' }),
      mojo.internal.StructField('arg_privacy_screen_enabled_$flag', 64, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_privacy_screen_enabled_$value', originalFieldName: 'arg_privacy_screen_enabled' }),
      mojo.internal.StructField('arg_privacy_screen_enabled_$value', 64, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_privacy_screen_enabled_$flag', originalFieldName: 'arg_privacy_screen_enabled' }),
      mojo.internal.StructField('arg_display_width_$flag', 64, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_display_width_$value', originalFieldName: 'arg_display_width' }),
      mojo.internal.StructField('arg_display_height_$flag', 64, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_display_height_$value', originalFieldName: 'arg_display_height' }),
      mojo.internal.StructField('arg_resolution_horizontal_$flag', 64, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_resolution_horizontal_$value', originalFieldName: 'arg_resolution_horizontal' }),
      mojo.internal.StructField('arg_resolution_vertical_$flag', 64, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_resolution_vertical_$value', originalFieldName: 'arg_resolution_vertical' }),
      mojo.internal.StructField('arg_refresh_rate_$flag', 65, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_refresh_rate_$value', originalFieldName: 'arg_refresh_rate' }),
      mojo.internal.StructField('arg_model_id_$flag', 65, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_model_id_$value', originalFieldName: 'arg_model_id' }),
      mojo.internal.StructField('arg_serial_number_$flag', 65, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_serial_number_$value', originalFieldName: 'arg_serial_number' }),
      mojo.internal.StructField('arg_manufacture_week_$flag', 65, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_manufacture_week_$value', originalFieldName: 'arg_manufacture_week' }),
      mojo.internal.StructField('arg_manufacture_week_$value', 66, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_manufacture_week_$flag', originalFieldName: 'arg_manufacture_week' }),
      mojo.internal.StructField('arg_manufacture_year_$flag', 67, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_manufacture_year_$value', originalFieldName: 'arg_manufacture_year' }),
    ],
    [[0, 80]]);

// Struct: ProbeExternalDisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeExternalDisplayInfoSpec, 'crosapi.mojom.ProbeExternalDisplayInfo', [
      mojo.internal.StructField('arg_refresh_rate_$value', 0, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_refresh_rate_$flag', originalFieldName: 'arg_refresh_rate' }),
      mojo.internal.StructField('arg_manufacturer', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_edid_version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_input_type', 24, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeDisplayInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_width_$value', 40, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_display_width_$flag', originalFieldName: 'arg_display_width' }),
      mojo.internal.StructField('arg_display_height_$value', 44, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_display_height_$flag', originalFieldName: 'arg_display_height' }),
      mojo.internal.StructField('arg_resolution_horizontal_$value', 48, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_resolution_horizontal_$flag', originalFieldName: 'arg_resolution_horizontal' }),
      mojo.internal.StructField('arg_resolution_vertical_$value', 52, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_resolution_vertical_$flag', originalFieldName: 'arg_resolution_vertical' }),
      mojo.internal.StructField('arg_serial_number_$value', 56, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_serial_number_$flag', originalFieldName: 'arg_serial_number' }),
      mojo.internal.StructField('arg_model_id_$value', 60, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_model_id_$flag', originalFieldName: 'arg_model_id' }),
      mojo.internal.StructField('arg_manufacture_year_$value', 62, 0, mojo.internal.Uint16, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_manufacture_year_$flag', originalFieldName: 'arg_manufacture_year' }),
      mojo.internal.StructField('arg_display_width_$flag', 64, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_display_width_$value', originalFieldName: 'arg_display_width' }),
      mojo.internal.StructField('arg_display_height_$flag', 64, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_display_height_$value', originalFieldName: 'arg_display_height' }),
      mojo.internal.StructField('arg_resolution_horizontal_$flag', 64, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_resolution_horizontal_$value', originalFieldName: 'arg_resolution_horizontal' }),
      mojo.internal.StructField('arg_resolution_vertical_$flag', 64, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_resolution_vertical_$value', originalFieldName: 'arg_resolution_vertical' }),
      mojo.internal.StructField('arg_refresh_rate_$flag', 64, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_refresh_rate_$value', originalFieldName: 'arg_refresh_rate' }),
      mojo.internal.StructField('arg_model_id_$flag', 64, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_model_id_$value', originalFieldName: 'arg_model_id' }),
      mojo.internal.StructField('arg_serial_number_$flag', 64, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_serial_number_$value', originalFieldName: 'arg_serial_number' }),
      mojo.internal.StructField('arg_manufacture_week_$flag', 64, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_manufacture_week_$value', originalFieldName: 'arg_manufacture_week' }),
      mojo.internal.StructField('arg_manufacture_week_$value', 65, 0, mojo.internal.Uint8, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_manufacture_week_$flag', originalFieldName: 'arg_manufacture_week' }),
      mojo.internal.StructField('arg_manufacture_year_$flag', 66, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_manufacture_year_$value', originalFieldName: 'arg_manufacture_year' }),
    ],
    [[0, 80]]);

// Struct: ProbeDisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeDisplayInfoSpec, 'crosapi.mojom.ProbeDisplayInfo', [
      mojo.internal.StructField('arg_embedded_display', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeEmbeddedDisplayInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_external_displays', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeExternalDisplayInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProbeThermalSensorInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeThermalSensorInfoSpec, 'crosapi.mojom.ProbeThermalSensorInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_temperature_celsius', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeThermalSensorSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProbeThermalInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeThermalInfoSpec, 'crosapi.mojom.ProbeThermalInfo', [
      mojo.internal.StructField('arg_thermal_sensors', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeThermalSensorInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ProbeTelemetryInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeTelemetryInfoSpec, 'crosapi.mojom.ProbeTelemetryInfo', [
      mojo.internal.StructField('arg_battery_result', 0, 0, mojo.internal.bindings.crosapi.mojom.ProbeBatteryResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_block_device_result', 8, 0, mojo.internal.bindings.crosapi.mojom.ProbeNonRemovableBlockDeviceResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_vpd_result', 16, 0, mojo.internal.bindings.crosapi.mojom.ProbeCachedVpdResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cpu_result', 24, 0, mojo.internal.bindings.crosapi.mojom.ProbeCpuResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_timezone_result', 32, 0, mojo.internal.bindings.crosapi.mojom.ProbeTimezoneResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_memory_result', 40, 0, mojo.internal.bindings.crosapi.mojom.ProbeMemoryResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_backlight_result', 48, 0, mojo.internal.bindings.crosapi.mojom.ProbeBacklightResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_fan_result', 56, 0, mojo.internal.bindings.crosapi.mojom.ProbeFanResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_stateful_partition_result', 64, 0, mojo.internal.bindings.crosapi.mojom.ProbeStatefulPartitionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bluetooth_result', 72, 0, mojo.internal.bindings.crosapi.mojom.ProbeBluetoothResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_system_result', 80, 0, mojo.internal.bindings.crosapi.mojom.ProbeSystemResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_result', 88, 0, mojo.internal.bindings.crosapi.mojom.ProbeNetworkResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tpm_result', 96, 0, mojo.internal.bindings.crosapi.mojom.ProbeTpmResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_audio_result', 104, 0, mojo.internal.bindings.crosapi.mojom.ProbeAudioResultSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_bus_result', 112, 0, mojo.internal.bindings.crosapi.mojom.ProbeBusResultSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('arg_display_result', 120, 0, mojo.internal.bindings.crosapi.mojom.ProbeDisplayResultSpec.$, null, true, 3, undefined),
      mojo.internal.StructField('arg_thermal_result', 128, 0, mojo.internal.bindings.crosapi.mojom.ProbeThermalResultSpec.$, null, true, 4, undefined),
    ],
    [[0, 112], [1, 120], [2, 128], [3, 136], [4, 144]]);

// Struct: ProbeOemData
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ProbeOemDataSpec, 'crosapi.mojom.ProbeOemData', [
      mojo.internal.StructField('arg_oem_data', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TelemetryProbeService
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec, 'crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_Params', [
      mojo.internal.StructField('arg_categories', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeCategoryEnumSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec, 'crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParams', [
      mojo.internal.StructField('arg_telemetry_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeTelemetryInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec, 'crosapi.mojom.TelemetryProbeService_GetOemData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec, 'crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParams', [
      mojo.internal.StructField('arg_oem_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ProbeOemDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.TelemetryProbeServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryProbeService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.TelemetryProbeServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  probeTelemetryInfo(arg_categories) {
    return this.$.probeTelemetryInfo(arg_categories);
  }
  getOemData() {
    return this.$.getOemData();
  }
};

mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TelemetryProbeService', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  probeTelemetryInfo(arg_categories) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec,
      [arg_categories],
      false);
  }

  getOemData() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.TelemetryProbeService.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryProbeService',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.probeTelemetryInfo');
          const result = this.impl.probeTelemetryInfo(params.arg_categories);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_ProbeTelemetryInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ProbeTelemetryInfo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOemData');
          const result = this.impl.getOemData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.TelemetryProbeService_GetOemData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOemData FAILED:', e));
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

mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceReceiver = mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceReceiver;

mojo.internal.bindings.crosapi.mojom.TelemetryProbeServicePtr = mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceRemote;
mojo.internal.bindings.crosapi.mojom.TelemetryProbeServiceRequest = mojo.internal.bindings.crosapi.mojom.TelemetryProbeServicePendingReceiver;

