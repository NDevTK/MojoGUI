// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/shared_image_format.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


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

// Struct: MultiplanarFormat
viz.mojom.MultiplanarFormatSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.MultiplanarFormat',
      packedSize: 40,
      fields: [
        { name: 'plane_config', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.PlaneConfigSpec, nullable: false },
        { name: 'subsampling', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.SubsamplingSpec, nullable: false },
        { name: 'channel_format', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.ChannelFormatSpec, nullable: false },
        { name: 'prefers_external_sampler', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
