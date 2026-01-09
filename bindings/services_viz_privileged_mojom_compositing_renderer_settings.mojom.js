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
      packedSize: 16,
      fields: [
        { name: 'generate_complex_occluder_for_rounded_corners', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'kInvalidDisplayId', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'show_aggregated_damage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
