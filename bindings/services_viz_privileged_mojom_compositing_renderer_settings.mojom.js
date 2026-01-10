// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/renderer_settings.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


viz.mojom.kInvalidDisplayId = -1;

// Struct: OcclusionCullerSettings
viz.mojom.OcclusionCullerSettingsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.OcclusionCullerSettings',
      packedSize: 16,
      fields: [
        { name: 'quad_split_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'maximum_occluder_complexity', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'minimum_fragments_reduced', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'generate_complex_occluder_for_rounded_corners', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RendererSettings
viz.mojom.RendererSettingsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RendererSettings',
      packedSize: 48,
      fields: [
        { name: 'allow_antialiasing', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_antialiasing', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_blending_with_shaders', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'highp_threshold_min', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'partial_swap_enabled', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'release_overlay_resources_after_gpu_query', packedOffset: 32, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'should_clear_root_render_pass', packedOffset: 32, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'slow_down_compositing_scale_factor', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'auto_resize_output_surface', packedOffset: 32, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'requires_alpha_channel', packedOffset: 32, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'occlusion_culler_settings', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.OcclusionCullerSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'overlay_strategies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(viz.mojom.OverlayStrategySpec, false), nullable: false, minVersion: 0 },
        { name: 'display_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: DebugRendererSettings
viz.mojom.DebugRendererSettingsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DebugRendererSettings',
      packedSize: 16,
      fields: [
        { name: 'tint_composited_content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tint_composited_content_modulate', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_overdraw_feedback', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_dc_layer_debug_borders', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_aggregated_damage', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
