// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/audio_device_description.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Struct: AudioDeviceDescription
audio.mojom.mojom.AudioDeviceDescriptionSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioDeviceDescription',
      packedSize: 40,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'unique_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_system_default', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_communications_device', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
