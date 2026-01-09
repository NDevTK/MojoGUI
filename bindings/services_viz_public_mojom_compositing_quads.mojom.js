// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/quads.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: ProtectedVideoState
viz.mojom.ProtectedVideoState = {
  kClear: 0,
  kSoftwareProtected: 1,
  kHardwareProtected: 2,
};

// Enum: OverlayPriority
viz.mojom.OverlayPriority = {
  kLow: 0,
  kRegular: 1,
  kRequired: 2,
};

// Struct: RoundedDisplayMasksInfo
viz.mojom.RoundedDisplayMasksInfoSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RoundedDisplayMasksInfo',
      packedSize: 16,
      fields: [
        { name: 'radii', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DebugBorderQuadState
viz.mojom.DebugBorderQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DebugBorderQuadState',
      packedSize: 16,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CompositorRenderPassQuadState
viz.mojom.CompositorRenderPassQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorRenderPassQuadState',
      packedSize: 16,
      fields: [
        { name: 'intersects_damage_under', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SolidColorQuadState
viz.mojom.SolidColorQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SolidColorQuadState',
      packedSize: 16,
      fields: [
        { name: 'force_anti_aliasing_off', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SurfaceQuadState
viz.mojom.SurfaceQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceQuadState',
      packedSize: 16,
      fields: [
        { name: 'override_child_dynamic_range_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextureQuadState
viz.mojom.TextureQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TextureQuadState',
      packedSize: 16,
      fields: [
        { name: 'rounded_display_masks_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TileQuadState
viz.mojom.TileQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TileQuadState',
      packedSize: 16,
      fields: [
        { name: 'force_anti_aliasing_off', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoHoleQuadState
viz.mojom.VideoHoleQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VideoHoleQuadState',
      packedSize: 16,
      fields: [
        { name: 'overlay_plane_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedElementQuadState
viz.mojom.SharedElementQuadStateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SharedElementQuadState',
      packedSize: 16,
      fields: [
        { name: 'element_resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DrawQuad
viz.mojom.DrawQuadSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.DrawQuad',
      packedSize: 16,
      fields: [
        { name: 'draw_quad_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
