// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_exception.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};

ash.cros_healthd.mojom.ReasonSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.SupportStatusSpec = { $: {} };
ash.cros_healthd.mojom.UnsupportedReasonSpec = { $: {} };
ash.cros_healthd.mojom.ExceptionSpec = { $: {} };
ash.cros_healthd.mojom.SupportedSpec = { $: {} };
ash.cros_healthd.mojom.UnsupportedSpec = { $: {} };

// Enum: Reason
ash.cros_healthd.mojom.Reason = {
  kUnmappedEnumField: 1,
  kMojoDisconnectWithoutReason: 0,
  kUnexpected: 2,
  kUnsupported: 3,
  MinVersion: 3,
};

// Union: SupportStatus
mojo.internal.Union(
    ash.cros_healthd.mojom.SupportStatusSpec, 'ash.cros_healthd.mojom.SupportStatus', {
      'unmapped_union_field': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
      'exception': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ExceptionSpec,
        'nullable': false,
      },
      'supported': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.SupportedSpec,
        'nullable': false,
      },
      'unsupported': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.UnsupportedSpec,
        'nullable': false,
      },
    });

// Union: UnsupportedReason
mojo.internal.Union(
    ash.cros_healthd.mojom.UnsupportedReasonSpec, 'ash.cros_healthd.mojom.UnsupportedReason', {
      'unmapped_union_field': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
    });

// Struct: Exception
mojo.internal.Struct(
    ash.cros_healthd.mojom.ExceptionSpec, 'ash.cros_healthd.mojom.Exception', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 1, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Supported
mojo.internal.Struct(
    ash.cros_healthd.mojom.SupportedSpec, 'ash.cros_healthd.mojom.Supported', [
    ],
    [[0, 8]]);

// Struct: Unsupported
mojo.internal.Struct(
    ash.cros_healthd.mojom.UnsupportedSpec, 'ash.cros_healthd.mojom.Unsupported', [
      mojo.internal.StructField('debug_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, ash.cros_healthd.mojom.UnsupportedReasonSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);
