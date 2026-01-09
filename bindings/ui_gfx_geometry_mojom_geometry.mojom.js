// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/geometry/mojom/geometry.mojom
// Module: gfx.mojom

'use strict';

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};


// Struct: Point
gfx.mojom.PointSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Point',
      packedSize: 16,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PointF
gfx.mojom.PointFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.PointF',
      packedSize: 16,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Point3F
gfx.mojom.Point3FSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Point3F',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'z', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Size
gfx.mojom.SizeSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Size',
      packedSize: 16,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SizeF
gfx.mojom.SizeFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.SizeF',
      packedSize: 16,
      fields: [
        { name: 'width', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Rect
gfx.mojom.RectSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Rect',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RectF
gfx.mojom.RectFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.RectF',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'width', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'height', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Insets
gfx.mojom.InsetsSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Insets',
      packedSize: 24,
      fields: [
        { name: 'top', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'left', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'bottom', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'right', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InsetsF
gfx.mojom.InsetsFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.InsetsF',
      packedSize: 24,
      fields: [
        { name: 'top', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'left', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'bottom', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'right', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Vector2d
gfx.mojom.Vector2dSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Vector2d',
      packedSize: 16,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Vector2dF
gfx.mojom.Vector2dFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Vector2dF',
      packedSize: 16,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Vector3dF
gfx.mojom.Vector3dFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Vector3dF',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'z', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Quaternion
gfx.mojom.QuaternionSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.Quaternion',
      packedSize: 40,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'z', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'w', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: QuadF
gfx.mojom.QuadFSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.QuadF',
      packedSize: 40,
      fields: [
        { name: 'p1', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'p2', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'p3', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'p4', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AxisTransform2d
gfx.mojom.AxisTransform2dSpec = {
  $: {
    structSpec: {
      name: 'gfx.mojom.AxisTransform2d',
      packedSize: 24,
      fields: [
        { name: 'scale', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
        { name: 'translation', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
