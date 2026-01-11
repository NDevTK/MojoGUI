// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/dxgi_info.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};
var mojo_base = mojo_base || {};
var skia = skia || {};

gfx.mojom.DXGIOutputDescSpec = { $: {} };
gfx.mojom.DXGIInfoSpec = { $: {} };

// Struct: DXGIOutputDesc
mojo.internal.Struct(
    gfx.mojom.DXGIOutputDescSpec, 'gfx.mojom.DXGIOutputDesc', [
      mojo.internal.StructField('device_name', 0, 0, mojo_base.mojom.WStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primaries', 8, 0, skia.mojom.SkColorSpacePrimariesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_luminance', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_luminance', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_full_frame_luminance', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('hdr_enabled', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DXGIInfo
mojo.internal.Struct(
    gfx.mojom.DXGIInfoSpec, 'gfx.mojom.DXGIInfo', [
      mojo.internal.StructField('output_descs', 0, 0, mojo.internal.Array(gfx.mojom.DXGIOutputDescSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
