// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/wallpaper.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};


// Enum: WallpaperLayout
ash.mojom.mojom.WallpaperLayout = {
  kStretch: 0,
  kCenter: 1,
  kCenterCropped: 2,
};
ash.mojom.mojom.WallpaperLayoutSpec = { $: mojo.internal.Enum() };

// Union: SetWallpaperResult
ash.mojom.mojom.SetWallpaperResultSpec = { $: mojo.internal.Union(
    'ash.mojom.SetWallpaperResult', {
      'thumbnail_data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'error_message': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: WallpaperSettings
ash.mojom.mojom.WallpaperSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.WallpaperSettings',
      packedSize: 32,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'layout', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.WallpaperLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'filename', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
