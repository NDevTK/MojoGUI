// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_extension_exception.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.ReasonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryExtensionSupportStatusSpec = { $: {} };
crosapi.mojom.TelemetryExtensionUnsupportedReasonSpec = { $: {} };
crosapi.mojom.TelemetryExtensionExceptionSpec = { $: {} };
crosapi.mojom.TelemetryExtensionSupportedSpec = { $: {} };
crosapi.mojom.TelemetryExtensionUnsupportedSpec = { $: {} };

// Enum: Reason
crosapi.mojom.Reason = {
  kUnmappedEnumField: 1,
  kMojoDisconnectWithoutReason: 0,
  kUnexpected: 2,
  kUnsupported: 3,
  MinVersion: 3,
};

// Union: TelemetryExtensionSupportStatus
mojo.internal.Union(
    crosapi.mojom.TelemetryExtensionSupportStatusSpec, 'crosapi.mojom.TelemetryExtensionSupportStatus', {
      'unmapped_union_field': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
      'exception': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryExtensionExceptionSpec,
        'nullable': false,
      },
      'supported': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryExtensionSupportedSpec,
        'nullable': false,
      },
      'unsupported': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryExtensionUnsupportedSpec,
        'nullable': false,
      },
    });

// Union: TelemetryExtensionUnsupportedReason
mojo.internal.Union(
    crosapi.mojom.TelemetryExtensionUnsupportedReasonSpec, 'crosapi.mojom.TelemetryExtensionUnsupportedReason', {
      'unmapped_union_field': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
    });

// Struct: TelemetryExtensionException
mojo.internal.Struct(
    crosapi.mojom.TelemetryExtensionExceptionSpec, 'crosapi.mojom.TelemetryExtensionException', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 1, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryExtensionSupported
mojo.internal.Struct(
    crosapi.mojom.TelemetryExtensionSupportedSpec, 'crosapi.mojom.TelemetryExtensionSupported', [
    ],
    [[0, 8]]);

// Struct: TelemetryExtensionUnsupported
mojo.internal.Struct(
    crosapi.mojom.TelemetryExtensionUnsupportedSpec, 'crosapi.mojom.TelemetryExtensionUnsupported', [
      mojo.internal.StructField('debug_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, crosapi.mojom.TelemetryExtensionUnsupportedReasonSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);
