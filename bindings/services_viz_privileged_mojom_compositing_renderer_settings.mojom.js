// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/renderer_settings.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: OcclusionCullerSettings
viz.mojom.OcclusionCullerSettingsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.OcclusionCullerSettings',
      packedSize: 24,
      fields: [
        { name: 'quad_split_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'maximum_occluder_complexity', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'minimum_fragments_reduced', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'generate_complex_occluder_for_rounded_corners', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RendererSettings
viz.mojom.RendererSettingsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RendererSettings',
      packedSize: 64,
      fields: [
        { name: 'allow_antialiasing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'force_antialiasing', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'force_blending_with_shaders', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'highp_threshold_min', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'partial_swap_enabled', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'release_overlay_resources_after_gpu_query', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'should_clear_root_render_pass', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'slow_down_compositing_scale_factor', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'auto_resize_output_surface', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'requires_alpha_channel', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'occlusion_culler_settings', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.OcclusionCullerSettingsSpec, nullable: false },
        { name: 'overlay_strategies', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'display_id', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'tint_composited_content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'tint_composited_content_modulate', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'show_overdraw_feedback', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'show_dc_layer_debug_borders', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'show_aggregated_damage', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
