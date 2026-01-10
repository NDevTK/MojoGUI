// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_snapshot.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var skia = skia || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: DisplaySnapshotColorInfo
display.mojom.mojom.DisplaySnapshotColorInfoSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplaySnapshotColorInfo',
      packedSize: 48,
      fields: [
        { name: 'color_space', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'edid_primaries', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpacePrimariesSpec, nullable: false, minVersion: 0 },
        { name: 'edid_gamma', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'hdr_static_metadata', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.HDRStaticMetadataSpec, nullable: true, minVersion: 0 },
        { name: 'supports_color_temperature_adjustment', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bits_per_channel', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: DisplaySnapshot
display.mojom.mojom.DisplaySnapshotSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplaySnapshot',
      packedSize: 168,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'port_display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'edid_display_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'connector_index', packedOffset: 156, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'physical_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 136, packedBitOffset: 0, type: display.mojom.DisplayConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'base_connector_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'path_topology', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'is_aspect_preserving_scaling', packedOffset: 158, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_overscan', packedOffset: 158, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'privacy_screen_state', packedOffset: 140, packedBitOffset: 0, type: display.mojom.PrivacyScreenStateSpec, nullable: false, minVersion: 0 },
        { name: 'has_content_protection_key', packedOffset: 158, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'color_info', packedOffset: 56, packedBitOffset: 0, type: display.mojom.DisplaySnapshotColorInfoSpec, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sys_path', packedOffset: 72, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'modes', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(display.mojom.DisplayModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'panel_orientation', packedOffset: 144, packedBitOffset: 0, type: display.mojom.PanelOrientationSpec, nullable: false, minVersion: 0 },
        { name: 'edid', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'current_mode_index', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'has_current_mode', packedOffset: 158, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'native_mode_index', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'has_native_mode', packedOffset: 158, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'product_code', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'year_of_manufacture', packedOffset: 148, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'maximum_cursor_size', packedOffset: 120, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'variable_refresh_rate_state', packedOffset: 152, packedBitOffset: 0, type: display.mojom.VariableRefreshRateStateSpec, nullable: false, minVersion: 0 },
        { name: 'drm_formats_and_modifiers', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(mojo.internal.Uint64, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 168}]
    }
  }
};
