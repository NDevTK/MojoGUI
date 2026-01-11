// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/audio_device_description.mojom
// Module: audio.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};

audio.mojom.AudioDeviceDescriptionSpec = { $: {} };

// Struct: AudioDeviceDescription
mojo.internal.Struct(
    audio.mojom.AudioDeviceDescriptionSpec, 'audio.mojom.AudioDeviceDescription', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('unique_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_system_default', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_communications_device', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);
