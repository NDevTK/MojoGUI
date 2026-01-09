// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_exception.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Enum: Reason
ash.cros_healthd.mojom.Reason = {
  kMojoDisconnectWithoutReason: 0,
  kUnexpected: 1,
  kUnsupported: 2,
};

// Struct: Exception
ash.cros_healthd.mojom.ExceptionSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.Exception',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Supported
ash.cros_healthd.mojom.SupportedSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.Supported',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Unsupported
ash.cros_healthd.mojom.UnsupportedSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.Unsupported',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
