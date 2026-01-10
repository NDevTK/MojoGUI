// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/session_parameters.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};


// Enum: SessionType
mirroring.mojom.mojom.SessionType = {
  AUDIO_ONLY: 0,
  VIDEO_ONLY: 1,
  AUDIO_AND_VIDEO: 2,
};
mirroring.mojom.mojom.SessionTypeSpec = { $: mojo.internal.Enum() };

// Struct: SessionParameters
mirroring.mojom.mojom.SessionParametersSpec = {
  $: {
    structSpec: {
      name: 'mirroring.mojom.SessionParameters',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 40, packedBitOffset: 0, type: mirroring.mojom.SessionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'receiver_address', packedOffset: 0, packedBitOffset: 0, type: network.mojom.IPAddressSpec, nullable: false, minVersion: 0 },
        { name: 'receiver_friendly_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'destination_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_playout_delay', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'is_remote_playback', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_letterboxing', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_rtcp_reporting', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};
