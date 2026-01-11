// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_snapshot.mojom
// Module: display.mojom

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

display.mojom.DisplaySnapshotColorInfoSpec = { $: {} };
display.mojom.DisplaySnapshotSpec = { $: {} };

// Struct: DisplaySnapshotColorInfo
mojo.internal.Struct(
    display.mojom.DisplaySnapshotColorInfoSpec, 'display.mojom.DisplaySnapshotColorInfo', [
      mojo.internal.StructField('color_space', 0, 0, gfx.mojom.ColorSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('edid_primaries', 8, 0, skia.mojom.SkColorSpacePrimariesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hdr_static_metadata', 16, 0, gfx.mojom.HDRStaticMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('edid_gamma', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('bits_per_channel', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('supports_color_temperature_adjustment', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DisplaySnapshot
mojo.internal.Struct(
    display.mojom.DisplaySnapshotSpec, 'display.mojom.DisplaySnapshot', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('port_display_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('edid_display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('origin', 24, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('physical_size', 32, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 40, 0, display.mojom.DisplayConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('base_connector_id', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('path_topology', 56, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('privacy_screen_state', 64, 0, display.mojom.PrivacyScreenStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_info', 72, 0, display.mojom.DisplaySnapshotColorInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sys_path', 88, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modes', 96, 0, mojo.internal.Array(display.mojom.DisplayModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('panel_orientation', 104, 0, display.mojom.PanelOrientationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('edid', 112, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('current_mode_index', 120, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('native_mode_index', 128, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('product_code', 136, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('maximum_cursor_size', 144, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('variable_refresh_rate_state', 152, 0, display.mojom.VariableRefreshRateStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drm_formats_and_modifiers', 160, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Array(mojo.internal.Uint64, false), false), null, false, 0, undefined),
      mojo.internal.StructField('year_of_manufacture', 168, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('connector_index', 172, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('is_aspect_preserving_scaling', 174, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_overscan', 174, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_content_protection_key', 174, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_current_mode', 174, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_native_mode', 174, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 184]]);
