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

// Struct: TelemetryExtensionException
crosapi.mojom.TelemetryExtensionExceptionSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryExtensionException',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryExtensionUnsupported
crosapi.mojom.TelemetryExtensionUnsupportedSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryExtensionUnsupported',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
