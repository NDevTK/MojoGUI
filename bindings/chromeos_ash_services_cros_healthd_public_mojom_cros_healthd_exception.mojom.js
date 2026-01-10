// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_exception.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.cros_healthd.mojom = ash.cros_healthd.cros_healthd.mojom || {};


// Enum: Reason
ash.cros_healthd.cros_healthd.mojom.mojom.Reason = {
  kMojoDisconnectWithoutReason: 0,
  kUnexpected: 1,
  kUnsupported: 2,
};
ash.cros_healthd.cros_healthd.mojom.mojom.ReasonSpec = { $: mojo.internal.Enum() };

// Union: SupportStatus
ash.cros_healthd.cros_healthd.mojom.mojom.SupportStatusSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.SupportStatus', {
      'unmapped_union_field': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
      }},
      'exception': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.ExceptionSpec,
      }},
      'supported': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.SupportedSpec,
      }},
      'unsupported': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.UnsupportedSpec,
      }},
    })
};

// Union: UnsupportedReason
ash.cros_healthd.cros_healthd.mojom.mojom.UnsupportedReasonSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.UnsupportedReason', {
      'unmapped_union_field': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
      }},
    })
};

// Struct: Exception
ash.cros_healthd.cros_healthd.mojom.mojom.ExceptionSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.Exception',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Supported
ash.cros_healthd.cros_healthd.mojom.mojom.SupportedSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.Supported',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: Unsupported
ash.cros_healthd.cros_healthd.mojom.mojom.UnsupportedSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.Unsupported',
      packedSize: 32,
      fields: [
        { name: 'debug_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.UnsupportedReasonSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
