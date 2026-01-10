// Auto-generated MojoJS binding
// Source: chromium_src/components/mirroring/mojom/session_parameters.mojom
// Module: mirroring.mojom

'use strict';

// Module namespace
var mirroring = mirroring || {};
mirroring.mojom = mirroring.mojom || {};
var network = network || {};
var mojo_base = mojo_base || {};

mirroring.mojom.SessionTypeSpec = { $: mojo.internal.Enum() };
mirroring.mojom.SessionParametersSpec = { $: {} };

// Enum: SessionType
mirroring.mojom.SessionType = {
  AUDIO_ONLY: 0,
  VIDEO_ONLY: 1,
  AUDIO_AND_VIDEO: 2,
};

// Struct: SessionParameters
mojo.internal.Struct(
    mirroring.mojom.SessionParametersSpec, 'mirroring.mojom.SessionParameters', [
      mojo.internal.StructField('type', 0, 0, mirroring.mojom.SessionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver_address', 8, 0, network.mojom.IPAddressSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver_friendly_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('destination_id', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_playout_delay', 40, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_remote_playback', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_letterboxing', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_rtcp_reporting', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);
