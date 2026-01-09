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
      packedSize: 64,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: mirroring.mojom.SessionTypeSpec, nullable: false },
        { name: 'receiver_address', packedOffset: 16, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false },
        { name: 'receiver_friendly_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'source_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'destination_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'target_playout_delay', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'is_remote_playback', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'force_letterboxing', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_rtcp_reporting', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
