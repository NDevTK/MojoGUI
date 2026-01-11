// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/renderer_settings.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gfx = gfx || {};

viz.mojom.OcclusionCullerSettingsSpec = { $: {} };
viz.mojom.RendererSettingsSpec = { $: {} };
viz.mojom.DebugRendererSettingsSpec = { $: {} };

viz.mojom.kInvalidDisplayId = -1;

// Struct: OcclusionCullerSettings
mojo.internal.Struct(
    viz.mojom.OcclusionCullerSettingsSpec, 'viz.mojom.OcclusionCullerSettings', [
      mojo.internal.StructField('quad_split_limit', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('maximum_occluder_complexity', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('minimum_fragments_reduced', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('generate_complex_occluder_for_rounded_corners', 6, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RendererSettings
mojo.internal.Struct(
    viz.mojom.RendererSettingsSpec, 'viz.mojom.RendererSettings', [
      mojo.internal.StructField('occlusion_culler_settings', 0, 0, viz.mojom.OcclusionCullerSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('overlay_strategies', 8, 0, mojo.internal.Array(viz.mojom.OverlayStrategySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('display_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('highp_threshold_min', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('slow_down_compositing_scale_factor', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('allow_antialiasing', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_antialiasing', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_blending_with_shaders', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('partial_swap_enabled', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('release_overlay_resources_after_gpu_query', 32, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_clear_root_render_pass', 32, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('auto_resize_output_surface', 32, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('requires_alpha_channel', 32, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DebugRendererSettings
mojo.internal.Struct(
    viz.mojom.DebugRendererSettingsSpec, 'viz.mojom.DebugRendererSettings', [
      mojo.internal.StructField('tint_composited_content', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tint_composited_content_modulate', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_overdraw_feedback', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_dc_layer_debug_borders', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_aggregated_damage', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
