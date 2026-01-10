// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/display_media_information.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: DisplayCaptureSurfaceType
media.mojom.mojom.DisplayCaptureSurfaceType = {
  MONITOR: 0,
  WINDOW: 1,
  BROWSER: 2,
};
media.mojom.mojom.DisplayCaptureSurfaceTypeSpec = { $: mojo.internal.Enum() };

// Enum: CursorCaptureType
media.mojom.mojom.CursorCaptureType = {
  NEVER: 0,
  ALWAYS: 1,
  MOTION: 2,
};
media.mojom.mojom.CursorCaptureTypeSpec = { $: mojo.internal.Enum() };

// Struct: DisplayMediaInformation
media.mojom.mojom.DisplayMediaInformationSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.DisplayMediaInformation',
      packedSize: 32,
      fields: [
        { name: 'display_surface', packedOffset: 8, packedBitOffset: 0, type: media.mojom.DisplayCaptureSurfaceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'logical_surface', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cursor', packedOffset: 12, packedBitOffset: 0, type: media.mojom.CursorCaptureTypeSpec, nullable: false, minVersion: 0 },
        { name: 'capture_handle', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CaptureHandleSpec, nullable: true, minVersion: 0 },
        { name: 'initial_zoom_level', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
