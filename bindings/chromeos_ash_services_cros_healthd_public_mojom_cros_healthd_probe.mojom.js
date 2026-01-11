// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_probe.mojom
 // Module: ash.cros_healthd.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};

mojo.internal.bindings.ash.cros_healthd.mojom.CpuArchitectureEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ProbeCategoryEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ErrorTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ProcessStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.StorageDevicePurposeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.SMTControlSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.StatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.EncryptionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.CryptoAlgorithmSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.EfiPlatformSizeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.BootModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.EventTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.LogStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceClassSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.FwupdVersionFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.UsbVersionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.UsbSpecSpeedSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmGSCVersionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltSecurityLevelSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.LocationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec = { $: {} };
mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec = { $: {} };

// Enum: CpuArchitectureEnum
mojo.internal.bindings.ash.cros_healthd.mojom.CpuArchitectureEnum = {
  kUnknown: 0,
  kX86_64: 1,
  kAArch64: 2,
  kArmv7l: 3,
};

// Enum: ProbeCategoryEnum
mojo.internal.bindings.ash.cros_healthd.mojom.ProbeCategoryEnum = {
  kUnknown: 16,
  kBattery: 0,
  kNonRemovableBlockDevices: 1,
  kCpu: 2,
  kTimezone: 3,
  kMemory: 4,
  kBacklight: 5,
  kFan: 6,
  kStatefulPartition: 7,
  kBluetooth: 8,
  kSystem: 9,
  kNetwork: 10,
  kAudio: 11,
  kBootPerformance: 12,
  kBus: 13,
  kTpm: 14,
  kGraphics: 15,
  kDisplay: 17,
  kNetworkInterface: 18,
  kInput: 19,
  MinVersion: 19,
  MinVersion: 19,
  MinVersion: 19,
};

// Enum: ErrorType
mojo.internal.bindings.ash.cros_healthd.mojom.ErrorType = {
  kUnknown: 4,
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};

// Enum: ProcessState
mojo.internal.bindings.ash.cros_healthd.mojom.ProcessState = {
  kUnknown: 7,
  kRunning: 0,
  kSleeping: 1,
  kWaiting: 2,
  kZombie: 3,
  kStopped: 4,
  kTracingStop: 5,
  kDead: 6,
  MinVersion: 6,
};

// Enum: StorageDevicePurpose
mojo.internal.bindings.ash.cros_healthd.mojom.StorageDevicePurpose = {
  kUnknown: 0,
  kBootDevice: 1,
  DEPRECATED_kSwapDevice: 2,
  MinVersion: 2,
};

// Enum: SMTControl
mojo.internal.bindings.ash.cros_healthd.mojom.SMTControl = {
  kUnmappedEnumField: 0,
  kOn: 1,
  kOff: 2,
  kForceOff: 3,
  kNotSupported: 4,
  kNotImplemented: 5,
};

// Enum: Status
mojo.internal.bindings.ash.cros_healthd.mojom.Status = {
  kUnmappedEnumField: 0,
  kNotAffected: 1,
  kVulnerable: 2,
  kMitigation: 3,
  kUnknown: 4,
  kUnrecognized: 5,
};

// Enum: Type
mojo.internal.bindings.ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kVMX: 1,
  kSVM: 2,
};

// Enum: EncryptionState
mojo.internal.bindings.ash.cros_healthd.mojom.EncryptionState = {
  kUnknown: 0,
  kEncryptionDisabled: 1,
  kTmeEnabled: 2,
  kMktmeEnabled: 3,
};

// Enum: CryptoAlgorithm
mojo.internal.bindings.ash.cros_healthd.mojom.CryptoAlgorithm = {
  kUnknown: 0,
  kAesXts128: 1,
  kAesXts256: 2,
};

// Enum: BluetoothDeviceType
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceType = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kBrEdr: 2,
  kLe: 3,
  kDual: 4,
};

// Enum: EfiPlatformSize
mojo.internal.bindings.ash.cros_healthd.mojom.EfiPlatformSize = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  k64: 2,
  k32: 3,
};

// Enum: BootMode
mojo.internal.bindings.ash.cros_healthd.mojom.BootMode = {
  kUnknown: 0,
  kCrosSecure: 1,
  kCrosEfi: 2,
  kCrosLegacy: 3,
  kCrosEfiSecure: 4,
};

// Enum: EventType
mojo.internal.bindings.ash.cros_healthd.mojom.EventType = {
  kUnmappedEnumField: 0,
  kLogStart: 1,
  kLogEnd: 2,
  kCsmeRecovery: 3,
  kPrtcFailure: 4,
  kSvnIncrease: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
};

// Enum: LogState
mojo.internal.bindings.ash.cros_healthd.mojom.LogState = {
  kUnmappedEnumField: 0,
  kNotStarted: 1,
  kStarted: 2,
  kStopped: 3,
};

// Enum: BusDeviceClass
mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceClass = {
  kOthers: 0,
  kDisplayController: 1,
  kEthernetController: 2,
  kWirelessController: 3,
  kBluetoothAdapter: 4,
  kThunderboltController: 5,
  kAudioCard: 6,
};

// Enum: FwupdVersionFormat
mojo.internal.bindings.ash.cros_healthd.mojom.FwupdVersionFormat = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPlain: 2,
  kNumber: 3,
  kPair: 4,
  kTriplet: 5,
  kQuad: 6,
  kBcd: 7,
  kIntelMe: 8,
  kIntelMe2: 9,
  kSurfaceLegacy: 10,
  kSurface: 11,
  kDellBios: 12,
  kHex: 13,
};

// Enum: UsbVersion
mojo.internal.bindings.ash.cros_healthd.mojom.UsbVersion = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kUsb1: 2,
  kUsb2: 3,
  kUsb3: 4,
};

// Enum: UsbSpecSpeed
mojo.internal.bindings.ash.cros_healthd.mojom.UsbSpecSpeed = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  k1_5Mbps: 2,
  k12Mbps: 3,
  kDeprecatedSpeed: 4,
  k480Mbps: 5,
  k5Gbps: 6,
  k10Gbps: 7,
  k20Gbps: 8,
};

// Enum: TpmGSCVersion
mojo.internal.bindings.ash.cros_healthd.mojom.TpmGSCVersion = {
  kNotGSC: 0,
  kCr50: 1,
  kTi50: 2,
};

// Enum: DisplayInputType
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputType = {
  kUnmappedEnumField: 0,
  kDigital: 1,
  kAnalog: 2,
};

// Enum: ThunderboltSecurityLevel
mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltSecurityLevel = {
  kNone: 0,
  kUserLevel: 1,
  kSecureLevel: 2,
  kDpOnlyLevel: 3,
  kUsbOnlyLevel: 4,
  kNoPcieLevel: 5,
};

// Enum: ConnectionType
mojo.internal.bindings.ash.cros_healthd.mojom.ConnectionType = {
  kUnmappedEnumField: 0,
  kInternal: 1,
  kUSB: 2,
  kBluetooth: 3,
  kUnknown: 4,
};

// Enum: Type
mojo.internal.bindings.ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kAccel: 1,
  kLight: 2,
  kGyro: 3,
  kAngle: 4,
  kGravity: 5,
  MinVersion: 5,
};

// Enum: Location
mojo.internal.bindings.ash.cros_healthd.mojom.Location = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kBase: 2,
  kLid: 3,
  kCamera: 4,
};

// Enum: ThermalSensorSource
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorSource = {
  kUnmappedEnumField: 0,
  kEc: 1,
  kSysFs: 2,
};

// Union: ProcessResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec, 'ash.cros_healthd.mojom.ProcessResult', {
      'arg_process_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BatteryResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec, 'ash.cros_healthd.mojom.BatteryResult', {
      'arg_battery_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec.$,
        'nullable': true,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: NonRemovableBlockDeviceResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec, 'ash.cros_healthd.mojom.NonRemovableBlockDeviceResult', {
      'arg_block_device_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BlockDeviceVendor
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec, 'ash.cros_healthd.mojom.BlockDeviceVendor', {
      'arg_nvme_subsystem_vendor': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_emmc_oemid': {
        'ordinal': 1,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_jedec_manfid': {
        'ordinal': 4,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
    });

// Union: BlockDeviceProduct
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec, 'ash.cros_healthd.mojom.BlockDeviceProduct', {
      'arg_nvme_subsystem_device': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_emmc_pnm': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceRevision
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec, 'ash.cros_healthd.mojom.BlockDeviceRevision', {
      'arg_nvme_pcie_rev': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_emmc_prv': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceFirmware
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec, 'ash.cros_healthd.mojom.BlockDeviceFirmware', {
      'arg_nvme_firmware_rev': {
        'ordinal': 0,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_emmc_fwrev': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_ufs_fwrev': {
        'ordinal': 4,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceInfo
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec, 'ash.cros_healthd.mojom.BlockDeviceInfo', {
      'arg_unrecognized': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_nvme_device_info': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec.$,
        'nullable': false,
      },
      'arg_emmc_device_info': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec.$,
        'nullable': false,
      },
      'arg_ufs_device_info': {
        'ordinal': 3,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec.$,
        'nullable': false,
      },
    });

// Union: CpuResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec, 'ash.cros_healthd.mojom.CpuResult', {
      'arg_cpu_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: TimezoneResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec, 'ash.cros_healthd.mojom.TimezoneResult', {
      'arg_timezone_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: MemoryResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec, 'ash.cros_healthd.mojom.MemoryResult', {
      'arg_memory_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BacklightResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec, 'ash.cros_healthd.mojom.BacklightResult', {
      'arg_backlight_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: FanResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec, 'ash.cros_healthd.mojom.FanResult', {
      'arg_fan_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: StatefulPartitionResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec, 'ash.cros_healthd.mojom.StatefulPartitionResult', {
      'arg_partition_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BluetoothResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec, 'ash.cros_healthd.mojom.BluetoothResult', {
      'arg_bluetooth_adapter_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: DEPRECATED_SystemResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec, 'ash.cros_healthd.mojom.DEPRECATED_SystemResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SystemResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec, 'ash.cros_healthd.mojom.SystemResult', {
      'arg_system_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec, 'ash.cros_healthd.mojom.NetworkResult', {
      'arg_network_health': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_health.mojom.NetworkHealthStateSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkInterfaceResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec, 'ash.cros_healthd.mojom.NetworkInterfaceResult', {
      'arg_network_interface_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: NetworkInterfaceInfo
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec, 'ash.cros_healthd.mojom.NetworkInterfaceInfo', {
      'arg_wireless_interface_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec.$,
        'nullable': false,
      },
    });

// Union: AudioResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec, 'ash.cros_healthd.mojom.AudioResult', {
      'arg_audio_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: AudioHardwareResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec, 'ash.cros_healthd.mojom.AudioHardwareResult', {
      'arg_audio_hardware_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BootPerformanceResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec, 'ash.cros_healthd.mojom.BootPerformanceResult', {
      'arg_boot_performance_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BusResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec, 'ash.cros_healthd.mojom.BusResult', {
      'arg_bus_devices': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BusInfo
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec, 'ash.cros_healthd.mojom.BusInfo', {
      'arg_pci_bus_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec.$,
        'nullable': false,
      },
      'arg_usb_bus_info': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec.$,
        'nullable': false,
      },
      'arg_thunderbolt_bus_info': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec.$,
        'nullable': false,
      },
      'arg_unmapped_field': {
        'ordinal': 3,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Union: TpmResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec, 'ash.cros_healthd.mojom.TpmResult', {
      'arg_tpm_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: GraphicsResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec, 'ash.cros_healthd.mojom.GraphicsResult', {
      'arg_graphics_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: DisplayResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec, 'ash.cros_healthd.mojom.DisplayResult', {
      'arg_display_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: InputResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec, 'ash.cros_healthd.mojom.InputResult', {
      'arg_input_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SensorResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec, 'ash.cros_healthd.mojom.SensorResult', {
      'arg_sensor_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ThermalResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec, 'ash.cros_healthd.mojom.ThermalResult', {
      'arg_thermal_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: ProbeError
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec, 'ash.cros_healthd.mojom.ProbeError', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_msg', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MultipleProcessResult
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec, 'ash.cros_healthd.mojom.MultipleProcessResult', [
      mojo.internal.StructField('arg_process_infos', 0, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_errors', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProcessInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec, 'ash.cros_healthd.mojom.ProcessInfo', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uptime_ticks', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_state', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ProcessStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bytes_read', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bytes_written', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_read_system_calls', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_write_system_calls', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_physical_bytes_read', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_physical_bytes_written', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cancelled_bytes_written', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_user_id', 80, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_total_memory_kib', 84, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_resident_memory_kib', 88, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_free_memory_kib', 92, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 96, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_nice', 97, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_name', 104, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_parent_process_id', 112, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_process_group_id', 116, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_threads', 120, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_process_id', 124, 0, mojo.internal.Uint32, 0, false, 2, undefined),
    ],
    [[0, 112], [1, 136], [2, 136]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec, 'ash.cros_healthd.mojom.BatteryInfo', [
      mojo.internal.StructField('arg_cycle_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_voltage_now', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_charge_full_design', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_charge_full', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_voltage_min_design', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_model_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_charge_now', 64, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_current_now', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_technology', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_manufacture_date', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_temperature', 104, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint64Spec.$, null, true, 0, undefined),
    ],
    [[0, 120]]);

// Struct: NvmeDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec, 'ash.cros_healthd.mojom.NvmeDeviceInfo', [
      mojo.internal.StructField('arg_firmware_rev', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subsystem_vendor', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subsystem_device', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pcie_rev', 16, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EmmcDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec, 'ash.cros_healthd.mojom.EmmcDeviceInfo', [
      mojo.internal.StructField('arg_pnm', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fwrev', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_manfid', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_prv', 18, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UfsDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec, 'ash.cros_healthd.mojom.UfsDeviceInfo', [
      mojo.internal.StructField('arg_fwrev', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_jedec_manfid', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NonRemovableBlockDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec, 'ash.cros_healthd.mojom.NonRemovableBlockDeviceInfo', [
      mojo.internal.StructField('arg_bytes_read_since_last_boot', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bytes_written_since_last_boot', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_read_time_seconds_since_last_boot', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_write_time_seconds_since_last_boot', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_io_time_seconds_since_last_boot', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_discard_time_seconds_since_last_boot', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint64Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_id', 56, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_revision', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 80, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_firmware_version', 88, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_purpose', 104, 0, mojo.internal.bindings.ash.cros_healthd.mojom.StorageDevicePurposeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_serial', 120, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_manufacturer_id', 124, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_info', 128, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_firmware_string', 136, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('arg_is_rotational_$flag', 144, 0, mojo.internal.Bool, false, false, 3, { isPrimary: true, linkedValueFieldName: 'arg_is_rotational_$value', originalFieldName: 'arg_is_rotational' }),
      mojo.internal.StructField('arg_is_rotational_$value', 144, 1, mojo.internal.Bool, false, false, 3, { isPrimary: false, linkedValueFieldName: 'arg_is_rotational_$flag', originalFieldName: 'arg_is_rotational' }),
    ],
    [[0, 136], [1, 144], [2, 152], [3, 160]]);

// Struct: CpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec, 'ash.cros_healthd.mojom.CpuInfo', [
      mojo.internal.StructField('arg_architecture', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CpuArchitectureEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_physical_cpus', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_temperature_channels', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_keylocker_info', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_num_total_threads', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_virtualization', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_vulnerabilities', 48, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec.$, false), null, true, 1, undefined),
    ],
    [[0, 48], [1, 64]]);

// Struct: VirtualizationInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec, 'ash.cros_healthd.mojom.VirtualizationInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VulnerabilityInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec, 'ash.cros_healthd.mojom.VulnerabilityInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: KeylockerInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec, 'ash.cros_healthd.mojom.KeylockerInfo', [
      mojo.internal.StructField('arg_keylocker_configured', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PhysicalCpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec, 'ash.cros_healthd.mojom.PhysicalCpuInfo', [
      mojo.internal.StructField('arg_model_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_logical_cpus', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_flags', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_virtualization', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec.$, null, true, 1, undefined),
    ],
    [[0, 24], [1, 40]]);

// Struct: CpuVirtualizationInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec, 'ash.cros_healthd.mojom.CpuVirtualizationInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LogicalCpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec, 'ash.cros_healthd.mojom.LogicalCpuInfo', [
      mojo.internal.StructField('arg_user_time_user_hz', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_system_time_user_hz', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_idle_time_user_hz', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_c_states', 24, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_max_clock_speed_khz', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scaling_max_frequency_khz', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scaling_current_frequency_khz', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_core_id', 44, 0, mojo.internal.Uint32, 0, false, 1, undefined),
    ],
    [[0, 56], [1, 56]]);

// Struct: CpuCStateInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec, 'ash.cros_healthd.mojom.CpuCStateInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_time_in_state_since_last_boot_us', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CpuTemperatureChannel
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec, 'ash.cros_healthd.mojom.CpuTemperatureChannel', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_temperature_celsius', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TimezoneInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec, 'ash.cros_healthd.mojom.TimezoneInfo', [
      mojo.internal.StructField('arg_posix', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_region', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MemoryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec, 'ash.cros_healthd.mojom.MemoryInfo', [
      mojo.internal.StructField('arg_page_faults_since_last_boot', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_total_memory_kib', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_free_memory_kib', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_available_memory_kib', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_memory_encryption_info', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_buffers_kib_$value', 32, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_buffers_kib_$flag', originalFieldName: 'arg_buffers_kib' }),
      mojo.internal.StructField('arg_page_cache_kib_$value', 40, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_page_cache_kib_$flag', originalFieldName: 'arg_page_cache_kib' }),
      mojo.internal.StructField('arg_shared_memory_kib_$value', 48, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_shared_memory_kib_$flag', originalFieldName: 'arg_shared_memory_kib' }),
      mojo.internal.StructField('arg_active_memory_kib_$value', 56, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_active_memory_kib_$flag', originalFieldName: 'arg_active_memory_kib' }),
      mojo.internal.StructField('arg_inactive_memory_kib_$value', 64, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_inactive_memory_kib_$flag', originalFieldName: 'arg_inactive_memory_kib' }),
      mojo.internal.StructField('arg_total_swap_memory_kib_$value', 72, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_total_swap_memory_kib_$flag', originalFieldName: 'arg_total_swap_memory_kib' }),
      mojo.internal.StructField('arg_free_swap_memory_kib_$value', 80, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_free_swap_memory_kib_$flag', originalFieldName: 'arg_free_swap_memory_kib' }),
      mojo.internal.StructField('arg_cached_swap_memory_kib_$value', 88, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_cached_swap_memory_kib_$flag', originalFieldName: 'arg_cached_swap_memory_kib' }),
      mojo.internal.StructField('arg_total_slab_memory_kib_$value', 96, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_total_slab_memory_kib_$flag', originalFieldName: 'arg_total_slab_memory_kib' }),
      mojo.internal.StructField('arg_reclaimable_slab_memory_kib_$value', 104, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_reclaimable_slab_memory_kib_$flag', originalFieldName: 'arg_reclaimable_slab_memory_kib' }),
      mojo.internal.StructField('arg_unreclaimable_slab_memory_kib_$value', 112, 0, mojo.internal.Uint64, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_unreclaimable_slab_memory_kib_$flag', originalFieldName: 'arg_unreclaimable_slab_memory_kib' }),
      mojo.internal.StructField('arg_buffers_kib_$flag', 120, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_buffers_kib_$value', originalFieldName: 'arg_buffers_kib' }),
      mojo.internal.StructField('arg_page_cache_kib_$flag', 120, 1, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_page_cache_kib_$value', originalFieldName: 'arg_page_cache_kib' }),
      mojo.internal.StructField('arg_shared_memory_kib_$flag', 120, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_shared_memory_kib_$value', originalFieldName: 'arg_shared_memory_kib' }),
      mojo.internal.StructField('arg_active_memory_kib_$flag', 120, 3, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_active_memory_kib_$value', originalFieldName: 'arg_active_memory_kib' }),
      mojo.internal.StructField('arg_inactive_memory_kib_$flag', 120, 4, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_inactive_memory_kib_$value', originalFieldName: 'arg_inactive_memory_kib' }),
      mojo.internal.StructField('arg_total_swap_memory_kib_$flag', 120, 5, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_total_swap_memory_kib_$value', originalFieldName: 'arg_total_swap_memory_kib' }),
      mojo.internal.StructField('arg_free_swap_memory_kib_$flag', 120, 6, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_free_swap_memory_kib_$value', originalFieldName: 'arg_free_swap_memory_kib' }),
      mojo.internal.StructField('arg_cached_swap_memory_kib_$flag', 120, 7, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_cached_swap_memory_kib_$value', originalFieldName: 'arg_cached_swap_memory_kib' }),
      mojo.internal.StructField('arg_total_slab_memory_kib_$flag', 121, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_total_slab_memory_kib_$value', originalFieldName: 'arg_total_slab_memory_kib' }),
      mojo.internal.StructField('arg_reclaimable_slab_memory_kib_$flag', 121, 1, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_reclaimable_slab_memory_kib_$value', originalFieldName: 'arg_reclaimable_slab_memory_kib' }),
      mojo.internal.StructField('arg_unreclaimable_slab_memory_kib_$flag', 121, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_unreclaimable_slab_memory_kib_$value', originalFieldName: 'arg_unreclaimable_slab_memory_kib' }),
    ],
    [[0, 32], [1, 40], [2, 136]]);

// Struct: MemoryEncryptionInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec, 'ash.cros_healthd.mojom.MemoryEncryptionInfo', [
      mojo.internal.StructField('arg_encryption_state', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EncryptionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_active_algorithm', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CryptoAlgorithmSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_key_number', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BacklightInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec, 'ash.cros_healthd.mojom.BacklightInfo', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_brightness', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_brightness', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FanInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec, 'ash.cros_healthd.mojom.FanInfo', [
      mojo.internal.StructField('arg_speed_rpm', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StatefulPartitionInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec, 'ash.cros_healthd.mojom.StatefulPartitionInfo', [
      mojo.internal.StructField('arg_available_space', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_total_space', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_filesystem', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mount_source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BluetoothAdapterInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec, 'ash.cros_healthd.mojom.BluetoothAdapterInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_num_connected_devices', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_powered', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connected_devices', 24, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec.$, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_uuids', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_modalias', 40, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_discoverable', 48, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('arg_discovering', 48, 1, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('arg_service_allow_list', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
      mojo.internal.StructField('arg_deprecated_capabilities', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec.$, null, true, 2, undefined),
    ],
    [[0, 32], [1, 64], [2, 80]]);

// Struct: BluetoothDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec, 'ash.cros_healthd.mojom.BluetoothDeviceInfo', [
      mojo.internal.StructField('arg_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_appearance', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_modalias', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_rssi', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableInt16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_mtu', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_uuids', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_battery_percentage', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint8Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_bluetooth_class', 72, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 2, undefined),
    ],
    [[0, 72], [1, 80], [2, 88]]);

// Struct: DEPRECATED_SupportedCapabilities
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec, 'ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilities', [
    ],
    [[0, 8]]);

// Struct: SystemInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec, 'ash.cros_healthd.mojom.SystemInfo', [
      mojo.internal.StructField('arg_os_info', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_vpd_info', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_dmi_info', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_psr_info', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec.$, null, true, 1, undefined),
    ],
    [[0, 32], [1, 40]]);

// Struct: OsInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec, 'ash.cros_healthd.mojom.OsInfo', [
      mojo.internal.StructField('arg_code_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_marketing_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_os_version', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_boot_mode', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BootModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_kUnmappedEnumField', 32, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_oem_name', 64, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 72], [1, 80]]);

// Struct: OsVersion
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec, 'ash.cros_healthd.mojom.OsVersion', [
      mojo.internal.StructField('arg_release_milestone', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_build_number', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_patch_number', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_release_channel', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_branch_number', 32, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 40], [1, 48]]);

// Struct: VpdInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec, 'ash.cros_healthd.mojom.VpdInfo', [
      mojo.internal.StructField('arg_serial_number', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_region', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_mfg_date', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_activate_date', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sku_number', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_model_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_oem_name', 48, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 56], [1, 64]]);

// Struct: DmiInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec, 'ash.cros_healthd.mojom.DmiInfo', [
      mojo.internal.StructField('arg_bios_vendor', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_bios_version', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_board_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_board_vendor', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_board_version', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_chassis_vendor', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_chassis_type', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint64Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_product_family', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_product_name', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_product_version', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sys_vendor', 80, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: PsrEvent
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec, 'ash.cros_healthd.mojom.PsrEvent', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, 5, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, 6, false, 1, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, 7, false, 1, undefined),
      mojo.internal.StructField('arg_val', 64, 0, mojo.internal.Pointer, 8, false, 1, undefined),
      mojo.internal.StructField('arg_val', 72, 0, mojo.internal.Pointer, 9, false, 1, undefined),
      mojo.internal.StructField('arg_val', 80, 0, mojo.internal.Pointer, 10, false, 1, undefined),
    ],
    [[0, 56], [1, 96]]);

// Struct: PsrInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec, 'ash.cros_healthd.mojom.PsrInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 3, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WirelessInterfaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec, 'ash.cros_healthd.mojom.WirelessInterfaceInfo', [
      mojo.internal.StructField('arg_interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_wireless_link_info', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_power_management_on', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WirelessLinkInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec, 'ash.cros_healthd.mojom.WirelessLinkInfo', [
      mojo.internal.StructField('arg_access_point_address_str', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tx_bit_rate_mbps', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rx_bit_rate_mbps', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tx_power_dBm', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_link_quality', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_level_dBm', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_encyption_on', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AudioInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec, 'ash.cros_healthd.mojom.AudioInfo', [
      mojo.internal.StructField('arg_output_volume', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_output_device_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_device_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_gain', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_underruns', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_severe_underruns', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_output_mute', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_input_mute', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_output_nodes', 40, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec.$, false), null, true, 1, undefined),
      mojo.internal.StructField('arg_input_nodes', 48, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec.$, false), null, true, 1, undefined),
    ],
    [[0, 48], [1, 64]]);

// Struct: AudioNodeInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec, 'ash.cros_healthd.mojom.AudioNodeInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_active', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_node_volume', 25, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_input_node_gain', 26, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AudioHardwareInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec, 'ash.cros_healthd.mojom.AudioHardwareInfo', [
      mojo.internal.StructField('arg_audio_cards', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioCard
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec, 'ash.cros_healthd.mojom.AudioCard', [
      mojo.internal.StructField('arg_alsa_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bus_device', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_hd_audio_codecs', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HDAudioCodec
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec, 'ash.cros_healthd.mojom.HDAudioCodec', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_address', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BootPerformanceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec, 'ash.cros_healthd.mojom.BootPerformanceInfo', [
      mojo.internal.StructField('arg_boot_up_seconds', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_boot_up_timestamp', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_shutdown_seconds', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_shutdown_timestamp', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_shutdown_reason', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tpm_initialization_seconds', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableDoubleSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_power_on_to_kernel_seconds_$value', 48, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_power_on_to_kernel_seconds_$flag', originalFieldName: 'arg_power_on_to_kernel_seconds' }),
      mojo.internal.StructField('arg_kernel_to_pre_startup_seconds_$value', 56, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_kernel_to_pre_startup_seconds_$flag', originalFieldName: 'arg_kernel_to_pre_startup_seconds' }),
      mojo.internal.StructField('arg_kernel_to_post_startup_seconds_$value', 64, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_kernel_to_post_startup_seconds_$flag', originalFieldName: 'arg_kernel_to_post_startup_seconds' }),
      mojo.internal.StructField('arg_startup_to_chrome_exec_seconds_$value', 72, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_startup_to_chrome_exec_seconds_$flag', originalFieldName: 'arg_startup_to_chrome_exec_seconds' }),
      mojo.internal.StructField('arg_chrome_exec_to_login_seconds_$value', 80, 0, mojo.internal.Double, 0, false, 2, { isPrimary: false, linkedValueFieldName: 'arg_chrome_exec_to_login_seconds_$flag', originalFieldName: 'arg_chrome_exec_to_login_seconds' }),
      mojo.internal.StructField('arg_power_on_to_kernel_seconds_$flag', 88, 0, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_power_on_to_kernel_seconds_$value', originalFieldName: 'arg_power_on_to_kernel_seconds' }),
      mojo.internal.StructField('arg_kernel_to_pre_startup_seconds_$flag', 88, 1, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_kernel_to_pre_startup_seconds_$value', originalFieldName: 'arg_kernel_to_pre_startup_seconds' }),
      mojo.internal.StructField('arg_kernel_to_post_startup_seconds_$flag', 88, 2, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_kernel_to_post_startup_seconds_$value', originalFieldName: 'arg_kernel_to_post_startup_seconds' }),
      mojo.internal.StructField('arg_startup_to_chrome_exec_seconds_$flag', 88, 3, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_startup_to_chrome_exec_seconds_$value', originalFieldName: 'arg_startup_to_chrome_exec_seconds' }),
      mojo.internal.StructField('arg_chrome_exec_to_login_seconds_$flag', 88, 4, mojo.internal.Bool, false, false, 2, { isPrimary: true, linkedValueFieldName: 'arg_chrome_exec_to_login_seconds_$value', originalFieldName: 'arg_chrome_exec_to_login_seconds' }),
    ],
    [[0, 48], [1, 56], [2, 104]]);

// Struct: BusDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec, 'ash.cros_healthd.mojom.BusDevice', [
      mojo.internal.StructField('arg_vendor_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_class', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceClassSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bus_info', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PciBusInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec, 'ash.cros_healthd.mojom.PciBusInfo', [
      mojo.internal.StructField('arg_driver', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 10, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_class_id', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subclass_id', 13, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_prog_if_id', 14, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_sub_vendor_id', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_sub_device_id', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 1, undefined),
    ],
    [[0, 24], [1, 40]]);

// Struct: UsbBusInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec, 'ash.cros_healthd.mojom.UsbBusInfo', [
      mojo.internal.StructField('arg_interfaces', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_product_id', 10, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_class_id', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subclass_id', 13, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_protocol_id', 14, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fwupd_firmware_version_info', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_version', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.UsbVersionSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('arg_spec_speed', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.UsbSpecSpeedSpec.$, null, false, 2, undefined),
    ],
    [[0, 24], [1, 32], [2, 48]]);

// Struct: FwupdFirmwareVersionInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec, 'ash.cros_healthd.mojom.FwupdFirmwareVersionInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_version_format', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.FwupdVersionFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UsbBusInterfaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec, 'ash.cros_healthd.mojom.UsbBusInterfaceInfo', [
      mojo.internal.StructField('arg_driver', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_interface_number', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_class_id', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subclass_id', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_protocol_id', 11, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TpmInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec, 'ash.cros_healthd.mojom.TpmInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dictionary_attack', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attestation', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_features', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_did_vid', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TpmVersion
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec, 'ash.cros_healthd.mojom.TpmVersion', [
      mojo.internal.StructField('arg_gsc_version', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmGSCVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_spec_level', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_firmware_version', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_specific', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_family', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tpm_model', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TpmStatus
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec, 'ash.cros_healthd.mojom.TpmStatus', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_owned', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_owner_password_is_present', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TpmDictionaryAttack
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec, 'ash.cros_healthd.mojom.TpmDictionaryAttack', [
      mojo.internal.StructField('arg_counter', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_threshold', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_lockout_seconds_remaining', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_lockout_in_effect', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TpmAttestation
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec, 'ash.cros_healthd.mojom.TpmAttestation', [
      mojo.internal.StructField('arg_prepared_for_enrollment', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enrolled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TpmSupportedFeatures
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec, 'ash.cros_healthd.mojom.TpmSupportedFeatures', [
      mojo.internal.StructField('arg_support_u2f', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_support_pinweaver', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_support_runtime_selection', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_allowed', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GraphicsInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec, 'ash.cros_healthd.mojom.GraphicsInfo', [
      mojo.internal.StructField('arg_gles_info', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_egl_info', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GLESInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec, 'ash.cros_healthd.mojom.GLESInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_shading_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_renderer', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_extensions', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: EGLInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec, 'ash.cros_healthd.mojom.EGLInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_api', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_extensions', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec, 'ash.cros_healthd.mojom.DisplayInfo', [
      mojo.internal.StructField('arg_embedded_display', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_external_displays', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec.$, false), null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

// Struct: EmbeddedDisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec, 'ash.cros_healthd.mojom.EmbeddedDisplayInfo', [
      mojo.internal.StructField('arg_privacy_screen_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_privacy_screen_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_display_width', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_display_height', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_resolution_horizontal', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_resolution_vertical', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_refresh_rate', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableDoubleSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_manufacturer', 48, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('arg_model_id', 56, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 2, undefined),
      mojo.internal.StructField('arg_serial_number', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 2, undefined),
      mojo.internal.StructField('arg_manufacture_week', 72, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint8Spec.$, null, true, 2, undefined),
      mojo.internal.StructField('arg_manufacture_year', 80, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 2, undefined),
      mojo.internal.StructField('arg_edid_version', 88, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('arg_input_type', 96, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputTypeSpec.$, null, false, 2, undefined),
      mojo.internal.StructField('arg_display_name', 104, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 16], [1, 56], [2, 120]]);

// Struct: ExternalDisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec, 'ash.cros_healthd.mojom.ExternalDisplayInfo', [
      mojo.internal.StructField('arg_display_width', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_height', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_resolution_horizontal', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_resolution_vertical', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_refresh_rate', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableDoubleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 40, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_model_id', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_serial_number', 56, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_manufacture_week', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint8Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_manufacture_year', 72, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_edid_version', 80, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_input_type', 88, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputTypeSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('arg_display_name', 96, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 48], [1, 112]]);

// Struct: ThunderboltBusInterfaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec, 'ash.cros_healthd.mojom.ThunderboltBusInterfaceInfo', [
      mojo.internal.StructField('arg_vendor_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_uuid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_fw_version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tx_speed_gbs', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rx_speed_gbs', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_authorized', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ThunderboltBusInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec, 'ash.cros_healthd.mojom.ThunderboltBusInfo', [
      mojo.internal.StructField('arg_security_level', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltSecurityLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_thunderbolt_interfaces', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InputInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec, 'ash.cros_healthd.mojom.InputInfo', [
      mojo.internal.StructField('arg_touchpad_library_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_touchscreen_devices', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_touchpad_devices', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec.$, false), null, true, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: TouchscreenDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec, 'ash.cros_healthd.mojom.TouchscreenDevice', [
      mojo.internal.StructField('arg_input_device', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_touch_points', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_stylus', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_stylus_garage_switch', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TouchpadDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec, 'ash.cros_healthd.mojom.TouchpadDevice', [
      mojo.internal.StructField('arg_input_device', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_driver_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 16, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_product_id', 24, 0, mojo.internal.String, null, true, 1, undefined),
    ],
    [[0, 24], [1, 40]]);

// Struct: InputDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec, 'ash.cros_healthd.mojom.InputDevice', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_kUnmappedEnumField', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SensorInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec, 'ash.cros_healthd.mojom.SensorInfo', [
      mojo.internal.StructField('arg_lid_angle', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_sensors', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec.$, false), null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

// Struct: Sensor
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec, 'ash.cros_healthd.mojom.Sensor', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_kUnmappedEnumField', 8, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, 5, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 64, 0, mojo.internal.Pointer, 6, false, 1, undefined),
    ],
    [[0, 72], [1, 80]]);

// Struct: ThermalInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec, 'ash.cros_healthd.mojom.ThermalInfo', [
      mojo.internal.StructField('arg_thermal_sensors', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ThermalSensorInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec, 'ash.cros_healthd.mojom.ThermalSensorInfo', [
      mojo.internal.StructField('arg_kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec, 'ash.cros_healthd.mojom.TelemetryInfo', [
      mojo.internal.StructField('arg_battery_result', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_block_device_result', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cpu_result', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_timezone_result', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_memory_result', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_backlight_result', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_fan_result', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_stateful_partition_result', 56, 0, mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bluetooth_result', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_system_result', 72, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_result', 80, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_audio_result', 88, 0, mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_boot_performance_result', 96, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bus_result', 104, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_system_result', 112, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tpm_result', 120, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_graphics_result', 128, 0, mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_result', 136, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_network_interface_result', 144, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec.$, null, true, 2, undefined),
      mojo.internal.StructField('arg_input_result', 152, 0, mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec.$, null, true, 3, undefined),
      mojo.internal.StructField('arg_audio_hardware_result', 160, 0, mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec.$, null, true, 4, undefined),
      mojo.internal.StructField('arg_sensor_result', 168, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec.$, null, true, 5, undefined),
      mojo.internal.StructField('arg_thermal_result', 176, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec.$, null, true, 6, undefined),
    ],
    [[0, 144], [1, 152], [2, 160], [3, 168], [4, 176], [5, 184], [6, 192]]);
