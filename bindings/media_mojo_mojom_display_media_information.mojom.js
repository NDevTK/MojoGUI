// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/display_media_information.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: DisplayCaptureSurfaceType
media.mojom.DisplayCaptureSurfaceType = {
  MONITOR: 0,
  WINDOW: 1,
  BROWSER: 2,
};

// Enum: CursorCaptureType
media.mojom.CursorCaptureType = {
  NEVER: 0,
  ALWAYS: 1,
  MOTION: 2,
};

// Struct: DisplayMediaInformation
media.mojom.DisplayMediaInformationSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DisplayMediaInformation',
      packedSize: 16,
      fields: [
        { name: 'initial_zoom_level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
