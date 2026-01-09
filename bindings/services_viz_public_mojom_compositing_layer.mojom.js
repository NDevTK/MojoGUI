// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/layer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: RareProperties
viz.mojom.RarePropertiesSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.RareProperties',
      packedSize: 16,
      fields: [
        { name: 'capture_bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MirrorLayerExtra
viz.mojom.MirrorLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.MirrorLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'mirrored_layer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SurfaceLayerExtra
viz.mojom.SurfaceLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SurfaceLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'override_child_paint_flags', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextureLayerExtra
viz.mojom.TextureLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TextureLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'transferable_resource', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UIResourceLayerExtra
viz.mojom.UIResourceLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.UIResourceLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'uv_bottom_right', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TileDisplayLayerExtra
viz.mojom.TileDisplayLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TileDisplayLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'proposed_tiling_scales_for_deletion', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollbarLayerBaseExtra
viz.mojom.ScrollbarLayerBaseExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ScrollbarLayerBaseExtra',
      packedSize: 16,
      fields: [
        { name: 'has_find_in_page_tickmarks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NinePatchThumbScrollbarLayerExtra
viz.mojom.NinePatchThumbScrollbarLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.NinePatchThumbScrollbarLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'track_and_buttons_ui_resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaintedScrollbarLayerExtra
viz.mojom.PaintedScrollbarLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.PaintedScrollbarLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'thumb_ui_resource_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SolidColorScrollbarLayerExtra
viz.mojom.SolidColorScrollbarLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.SolidColorScrollbarLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ViewTransitionContentLayerExtra
viz.mojom.ViewTransitionContentLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ViewTransitionContentLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'max_extents_rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NinePatchLayerExtra
viz.mojom.NinePatchLayerExtraSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.NinePatchLayerExtra',
      packedSize: 16,
      fields: [
        { name: 'uv_bottom_right', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Layer
viz.mojom.LayerSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.Layer',
      packedSize: 16,
      fields: [
        { name: 'layer_extra', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AnchorPositionScrollData
viz.mojom.AnchorPositionScrollDataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.AnchorPositionScrollData',
      packedSize: 16,
      fields: [
        { name: 'needs_scroll_adjustment_in_y', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StickyPositionNodeData
viz.mojom.StickyPositionNodeDataSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.StickyPositionNodeData',
      packedSize: 16,
      fields: [
        { name: 'total_containing_block_sticky_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TransformTreeUpdate
viz.mojom.TransformTreeUpdateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransformTreeUpdate',
      packedSize: 16,
      fields: [
        { name: 'drawn_elastic_overscroll', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TransformNode
viz.mojom.TransformNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransformNode',
      packedSize: 16,
      fields: [
        { name: 'moved_by_safe_area_bottom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ClipNode
viz.mojom.ClipNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ClipNode',
      packedSize: 16,
      fields: [
        { name: 'pixel_moving_filter_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: EffectNode
viz.mojom.EffectNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.EffectNode',
      packedSize: 16,
      fields: [
        { name: 'copy_output_requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollTreeUpdate
viz.mojom.ScrollTreeUpdateSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ScrollTreeUpdate',
      packedSize: 16,
      fields: [
        { name: 'elastic_overscroll', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ScrollNode
viz.mojom.ScrollNodeSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.ScrollNode',
      packedSize: 16,
      fields: [
        { name: 'is_composited', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
