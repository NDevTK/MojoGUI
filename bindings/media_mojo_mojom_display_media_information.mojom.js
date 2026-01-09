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
      packedSize: 48,
      fields: [
        { name: 'display_surface', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DisplayCaptureSurfaceTypeSpec, nullable: false },
        { name: 'cursor', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CursorCaptureTypeSpec, nullable: false },
        { name: 'capture_handle', packedOffset: 16, packedBitOffset: 0, type: media.mojom.CaptureHandleSpec, nullable: true },
        { name: 'initial_zoom_level', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'logical_surface', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
