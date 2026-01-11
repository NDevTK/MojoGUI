// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/shared_image_format.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.PlaneConfigSpec = { $: mojo.internal.Enum() };
viz.mojom.SubsamplingSpec = { $: mojo.internal.Enum() };
viz.mojom.ChannelFormatSpec = { $: mojo.internal.Enum() };
viz.mojom.SharedImageFormatSpec = { $: {} };
viz.mojom.MultiplanarFormatSpec = { $: {} };

// Enum: PlaneConfig
viz.mojom.PlaneConfig = {
  kY_U_V: 0,
  kY_V_U: 1,
  kY_UV: 2,
  kY_UV_A: 3,
  kY_U_V_A: 4,
};

// Enum: Subsampling
viz.mojom.Subsampling = {
  k420: 0,
  k422: 1,
  k444: 2,
};

// Enum: ChannelFormat
viz.mojom.ChannelFormat = {
  k8: 0,
  k10: 1,
  k16: 2,
  k16F: 3,
};

// Union: SharedImageFormat
mojo.internal.Union(
    viz.mojom.SharedImageFormatSpec, 'viz.mojom.SharedImageFormat', {
      'singleplanar_format': {
        'ordinal': 0,
        'type': viz.mojom.SingleplanarFormatSpec.$,
        'nullable': false,
      },
      'multiplanar_format': {
        'ordinal': 1,
        'type': viz.mojom.MultiplanarFormatSpec.$,
        'nullable': false,
      },
    });

// Struct: MultiplanarFormat
mojo.internal.Struct(
    viz.mojom.MultiplanarFormatSpec, 'viz.mojom.MultiplanarFormat', [
      mojo.internal.StructField('plane_config', 0, 0, viz.mojom.PlaneConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subsampling', 8, 0, viz.mojom.SubsamplingSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_format', 16, 0, viz.mojom.ChannelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prefers_external_sampler', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);
