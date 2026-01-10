// Auto-generated MojoJS binding
// Source: chromium_src/components/paint_preview/common/mojom/paint_preview_types.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};


// Enum: RecordingPersistence
paint_preview.mojom.mojom.RecordingPersistence = {
  kFileSystem: 0,
  kMemoryBuffer: 1,
};
paint_preview.mojom.mojom.RecordingPersistenceSpec = { $: mojo.internal.Enum() };

// Enum: ClipCoordOverride
paint_preview.mojom.mojom.ClipCoordOverride = {
  kNone: 0,
  kCenterOnScrollOffset: 1,
  kScrollOffset: 2,
};
paint_preview.mojom.mojom.ClipCoordOverrideSpec = { $: mojo.internal.Enum() };

// Union: SerializedRecording
paint_preview.mojom.mojom.SerializedRecordingSpec = { $: mojo.internal.Union(
    'paint_preview.mojom.SerializedRecording', {
      'file': {
        'ordinal': 0,
        'type': mojo_base.mojom.FileSpec,
      }},
      'buffer': {
        'ordinal': 1,
        'type': mojo_base.mojom.BigBufferSpec,
      }},
    })
};
