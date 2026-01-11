// Auto-generated MojoJS binding
// Source: chromium_src/ui/gfx/mojom/ca_layer_result.mojom
// Module: gfx.mojom

// Module namespace
var gfx = gfx || {};
gfx.mojom = gfx.mojom || {};

gfx.mojom.CALayerResultSpec = { $: mojo.internal.Enum() };

// Enum: CALayerResult
gfx.mojom.CALayerResult = {
  kCALayerSuccess: 0,
  kCALayerFailedUnknown: 1,
  kCALayerFailedTextureNotCandidate: 5,
  kCALayerFailedTileNotCandidate: 7,
  kCALayerFailedQuadBlendMode: 8,
  kCALayerFailedQuadClipping: 10,
  kCALayerFailedDebugBoarder: 11,
  kCALayerFailedPictureContent: 12,
  kCALayerFailedSurfaceContent: 14,
  kCALayerFailedDifferentClipSettings: 16,
  kCALayerFailedRenderPassBackdropFilters: 19,
  kCALayerFailedRenderPassPassMask: 20,
  kCALayerFailedRenderPassFilterOperation: 21,
  kCALayerFailedRenderPassSortingContextId: 22,
  kCALayerFailedTooManyRenderPassDrawQuads: 23,
  kCALayerFailedQuadRoundedCornerNotUniform: 26,
  kCALayerFailedTooManyQuads: 27,
  kCALayerFailedCopyRequests: 31,
  kCALayerFailedOverlayDisabled: 32,
  kCALayerFailedVideoCaptureEnabled: 33,
};
