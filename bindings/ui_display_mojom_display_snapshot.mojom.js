// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_snapshot.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Struct: DisplaySnapshotColorInfo
display.mojom.DisplaySnapshotColorInfoSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplaySnapshotColorInfo',
      packedSize: 48,
      fields: [
        { name: 'color_space', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false },
        { name: 'edid_primaries', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpacePrimariesSpec, nullable: false },
        { name: 'hdr_static_metadata', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.HDRStaticMetadataSpec, nullable: true },
        { name: 'edid_gamma', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'bits_per_channel', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'supports_color_temperature_adjustment', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DisplaySnapshot
display.mojom.DisplaySnapshotSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.DisplaySnapshot',
      packedSize: 192,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'port_display_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'edid_display_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'origin', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'physical_size', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'type', packedOffset: 40, packedBitOffset: 0, type: display.mojom.DisplayConnectionTypeSpec, nullable: false },
        { name: 'base_connector_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'path_topology', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'privacy_screen_state', packedOffset: 64, packedBitOffset: 0, type: display.mojom.PrivacyScreenStateSpec, nullable: false },
        { name: 'color_info', packedOffset: 72, packedBitOffset: 0, type: display.mojom.DisplaySnapshotColorInfoSpec, nullable: false },
        { name: 'display_name', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sys_path', packedOffset: 88, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'modes', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'panel_orientation', packedOffset: 104, packedBitOffset: 0, type: display.mojom.PanelOrientationSpec, nullable: false },
        { name: 'edid', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'current_mode_index', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'native_mode_index', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'product_code', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'maximum_cursor_size', packedOffset: 144, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'variable_refresh_rate_state', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'drm_formats_and_modifiers', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'year_of_manufacture', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'connector_index', packedOffset: 172, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'is_aspect_preserving_scaling', packedOffset: 174, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_overscan', packedOffset: 174, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'has_content_protection_key', packedOffset: 174, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'has_current_mode', packedOffset: 174, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'has_native_mode', packedOffset: 174, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
