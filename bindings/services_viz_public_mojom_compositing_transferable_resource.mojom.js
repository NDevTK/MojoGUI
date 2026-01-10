// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/transferable_resource.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var skia = skia || {};
var skia = skia || {};


// Enum: SynchronizationType
viz.mojom.SynchronizationType = {
  kSyncToken: 0,
  kGpuCommandsCompleted: 1,
  kReleaseFence: 2,
};
viz.mojom.SynchronizationTypeSpec = { $: mojo.internal.Enum() };

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
viz.mojom.ResourceSourceSpec = { $: mojo.internal.Enum() };

// Struct: MetadataOverride
viz.mojom.MetadataOverrideSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.MetadataOverride',
      packedSize: 32,
      fields: [
        { name: 'is_overlay_candidate_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'is_overlay_candidate_$value', originalFieldName: 'is_overlay_candidate' } },
        { name: 'is_overlay_candidate_$value', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'is_overlay_candidate_$flag', originalFieldName: 'is_overlay_candidate' } },
        { name: 'color_space', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: true, minVersion: 0 },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SurfaceOriginSpec, nullable: true, minVersion: 0 },
        { name: 'alpha_type', packedOffset: 12, packedBitOffset: 0, type: skia.mojom.AlphaTypeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TransferableResource
viz.mojom.TransferableResourceSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.TransferableResource',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.ResourceIdSpec, nullable: false, minVersion: 0 },
        { name: 'shared_image', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ExportedSharedImageSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'synchronization_type', packedOffset: 48, packedBitOffset: 0, type: viz.mojom.SynchronizationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_low_latency_rendering', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_backed_by_surface_view', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'wants_promotion_hint', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hdr_metadata', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'needs_detiling', packedOffset: 56, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ycbcr_info', packedOffset: 32, packedBitOffset: 0, type: gpu.mojom.VulkanYCbCrInfoSpec, nullable: true, minVersion: 0 },
        { name: 'resource_source', packedOffset: 52, packedBitOffset: 0, type: viz.mojom.ResourceSourceSpec, nullable: false, minVersion: 0 },
        { name: 'metadata_override', packedOffset: 40, packedBitOffset: 0, type: viz.mojom.MetadataOverrideSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};
