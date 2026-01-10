// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/wallpaper.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};

ash.mojom.WallpaperLayoutSpec = { $: mojo.internal.Enum() };
ash.mojom.SetWallpaperResultSpec = { $: {} };
ash.mojom.WallpaperSettingsSpec = { $: {} };

// Enum: WallpaperLayout
ash.mojom.WallpaperLayout = {
  kNone: 0,
  kStretch: 1,
  kCenter: 2,
  kCenterCropped: 3,
};

// Union: SetWallpaperResult
mojo.internal.Union(
    ash.mojom.SetWallpaperResultSpec, 'ash.mojom.SetWallpaperResult', {
      'thumbnail_data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'error_message': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: WallpaperSettings
mojo.internal.Struct(
    ash.mojom.WallpaperSettingsSpec, 'ash.mojom.WallpaperSettings', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('layout', 8, 0, ash.mojom.WallpaperLayoutSpec, null, false, 0, undefined),
      mojo.internal.StructField('filename', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);
