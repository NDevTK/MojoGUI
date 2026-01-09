// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/transferable_resource.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: SynchronizationType
viz.mojom.SynchronizationType = {
  kSyncToken: 0,
  kGpuCommandsCompleted: 1,
  kReleaseFence: 2,
};

// Enum: ResourceSource
viz.mojom.ResourceSource = {
  kUnknown: 0,
  kAR: 1,
  kCanvas: 2,
  kDrawingBuffer: 3,
  kExoBuffer: 4,
  kHeadsUpDisplay: 5,
  kImageLayerBridge: 6,
  kPPBGraphics3D: 7,
  kPepperGraphics2D: 8,
  kViewTransition: 9,
  kStaleContent: 10,
  kTest: 11,
  kTileRasterTask: 12,
  kUI: 13,
  kVideo: 14,
  kWebGPUSwapBuffer: 15,
};

// Struct: MetadataOverride
viz.mojom.MetadataOverrideSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.MetadataOverride',
      packedSize: 40,
      fields: [
        { name: 'color_space', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: true },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SurfaceOriginSpec, nullable: true },
        { name: 'alpha_type', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.AlphaTypeSpec, nullable: true },
        { name: 'is_overlay_candidate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TransferableResource
viz.mojom.TransferableResourceSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransferableResource',
      packedSize: 96,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false },
        { name: 'shared_image', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false },
        { name: 'sync_token', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
        { name: 'synchronization_type', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.SynchronizationTypeSpec, nullable: false },
        { name: 'is_backed_by_surface_view', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'wants_promotion_hint', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hdr_metadata', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false },
        { name: 'ycbcr_info', packedOffset: 56, packedBitOffset: 0, type: [EnableIf=is_android] gpu.mojom.VulkanYCbCrInfoSpec, nullable: true },
        { name: 'resource_source', packedOffset: 64, packedBitOffset: 0, type: viz.mojom.ResourceSourceSpec, nullable: false },
        { name: 'metadata_override', packedOffset: 72, packedBitOffset: 0, type: viz.mojom.MetadataOverrideSpec, nullable: false },
        { name: 'is_low_latency_rendering', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'needs_detiling', packedOffset: 80, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
