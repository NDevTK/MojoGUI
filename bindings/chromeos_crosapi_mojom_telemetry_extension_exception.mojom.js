// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_extension_exception.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: Reason
crosapi.mojom.Reason = {
  kMojoDisconnectWithoutReason: 0,
  kUnexpected: 1,
  kUnsupported: 2,
};
crosapi.mojom.ReasonSpec = { $: mojo.internal.Enum() };

// Union: TelemetryExtensionSupportStatus
crosapi.mojom.TelemetryExtensionSupportStatusSpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryExtensionSupportStatus', {
      'unmapped_union_field': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
      }},
      'exception': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryExtensionExceptionSpec,
      }},
      'supported': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryExtensionSupportedSpec,
      }},
      'unsupported': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryExtensionUnsupportedSpec,
      }},
    })
};

// Union: TelemetryExtensionUnsupportedReason
crosapi.mojom.TelemetryExtensionUnsupportedReasonSpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryExtensionUnsupportedReason', {
      'unmapped_union_field': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
      }},
    })
};

// Struct: TelemetryExtensionException
crosapi.mojom.TelemetryExtensionExceptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryExtensionException',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryExtensionSupported
crosapi.mojom.TelemetryExtensionSupportedSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryExtensionSupported',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: TelemetryExtensionUnsupported
crosapi.mojom.TelemetryExtensionUnsupportedSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryExtensionUnsupported',
      packedSize: 32,
      fields: [
        { name: 'debug_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.TelemetryExtensionUnsupportedReasonSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
