// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/shared_image_format.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: PlaneConfig
viz.mojom.mojom.PlaneConfig = {
  kY_U_V: 0,
  kY_V_U: 1,
  kY_UV: 2,
  kY_UV_A: 3,
  kY_U_V_A: 4,
};
viz.mojom.mojom.PlaneConfigSpec = { $: mojo.internal.Enum() };

// Enum: Subsampling
viz.mojom.mojom.Subsampling = {
  k420: 0,
  k422: 1,
  k444: 2,
};
viz.mojom.mojom.SubsamplingSpec = { $: mojo.internal.Enum() };

// Enum: ChannelFormat
viz.mojom.mojom.ChannelFormat = {
  k8: 0,
  k10: 1,
  k16: 2,
  k16F: 3,
};
viz.mojom.mojom.ChannelFormatSpec = { $: mojo.internal.Enum() };

// Union: SharedImageFormat
viz.mojom.mojom.SharedImageFormatSpec = { $: mojo.internal.Union(
    'viz.mojom.SharedImageFormat', {
      'singleplanar_format': {
        'ordinal': 0,
        'type': viz.mojom.SingleplanarFormatSpec,
      }},
      'multiplanar_format': {
        'ordinal': 1,
        'type': viz.mojom.MultiplanarFormatSpec,
      }},
    })
};

// Struct: MultiplanarFormat
viz.mojom.mojom.MultiplanarFormatSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.MultiplanarFormat',
      packedSize: 24,
      fields: [
        { name: 'plane_config', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.PlaneConfigSpec, nullable: false, minVersion: 0 },
        { name: 'subsampling', packedOffset: 4, packedBitOffset: 0, type: viz.mojom.SubsamplingSpec, nullable: false, minVersion: 0 },
        { name: 'channel_format', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.ChannelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'prefers_external_sampler', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
