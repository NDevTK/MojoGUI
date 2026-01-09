// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/session_parameters.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


// Enum: SessionType
mirroring.mojom.SessionType = {
  AUDIO_ONLY: 0,
  VIDEO_ONLY: 1,
  AUDIO_AND_VIDEO: 2,
};

// Struct: SessionParameters
mirroring.mojom.SessionParametersSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionParameters',
      packedSize: 16,
      fields: [
        { name: 'enable_rtcp_reporting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
