// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/display_media_information.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.DisplayCaptureSurfaceTypeSpec = { $: mojo.internal.Enum() };
media.mojom.CursorCaptureTypeSpec = { $: mojo.internal.Enum() };
media.mojom.DisplayMediaInformationSpec = { $: {} };

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
mojo.internal.Struct(
    media.mojom.DisplayMediaInformationSpec, 'media.mojom.DisplayMediaInformation', [
      mojo.internal.StructField('display_surface', 0, 0, media.mojom.DisplayCaptureSurfaceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('logical_surface', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cursor', 16, 0, media.mojom.CursorCaptureTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_handle', 24, 0, media.mojom.CaptureHandleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('initial_zoom_level', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);
