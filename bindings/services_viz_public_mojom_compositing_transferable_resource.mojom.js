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
      packedSize: 16,
      fields: [
        { name: 'alpha_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'metadata_override', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
