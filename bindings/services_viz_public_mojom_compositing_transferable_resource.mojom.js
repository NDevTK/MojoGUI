// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/transferable_resource.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var services = services || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var skia = skia || {};
var skia = skia || {};

viz.mojom.SynchronizationTypeSpec = { $: mojo.internal.Enum() };
viz.mojom.ResourceSourceSpec = { $: mojo.internal.Enum() };
viz.mojom.MetadataOverrideSpec = { $: {} };
viz.mojom.TransferableResourceSpec = { $: {} };

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
mojo.internal.Struct(
    viz.mojom.MetadataOverrideSpec, 'viz.mojom.MetadataOverride', [
      mojo.internal.StructField('is_overlay_candidate_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'is_overlay_candidate_$value', originalFieldName: 'is_overlay_candidate' }),
      mojo.internal.StructField('is_overlay_candidate_$value', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'is_overlay_candidate_$flag', originalFieldName: 'is_overlay_candidate' }),
      mojo.internal.StructField('color_space', 0, 0, gfx.mojom.ColorSpaceSpec, null, true, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, skia.mojom.SurfaceOriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('alpha_type', 12, 0, skia.mojom.AlphaTypeSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TransferableResource
mojo.internal.Struct(
    viz.mojom.TransferableResourceSpec, 'viz.mojom.TransferableResource', [
      mojo.internal.StructField('id', 0, 0, viz.mojom.ResourceIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('shared_image', 8, 0, gpu.mojom.ExportedSharedImageSpec, null, false, 0, undefined),
      mojo.internal.StructField('sync_token', 16, 0, gpu.mojom.SyncTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('synchronization_type', 48, 0, viz.mojom.SynchronizationTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_low_latency_rendering', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_backed_by_surface_view', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('wants_promotion_hint', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hdr_metadata', 24, 0, gfx.mojom.HDRMetadataSpec, null, false, 0, undefined),
      mojo.internal.StructField('needs_detiling', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ycbcr_info', 32, 0, gpu.mojom.VulkanYCbCrInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('resource_source', 52, 0, viz.mojom.ResourceSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('metadata_override', 40, 0, viz.mojom.MetadataOverrideSpec, null, false, 0, undefined),
    ],
    [[0, 72]]);
