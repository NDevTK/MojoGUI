// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/audio_device_description.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Struct: AudioDeviceDescription
audio.mojom.AudioDeviceDescriptionSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.AudioDeviceDescription',
      packedSize: 40,
      fields: [
        { name: 'device_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'unique_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'group_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_system_default', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_communications_device', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
