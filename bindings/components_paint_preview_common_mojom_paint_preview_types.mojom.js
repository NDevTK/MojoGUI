// Auto-generated MojoJS binding
// Source: chromium_src/components/paint_preview/common/mojom/paint_preview_types.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};

paint_preview.mojom.RecordingPersistenceSpec = { $: mojo.internal.Enum() };
paint_preview.mojom.ClipCoordOverrideSpec = { $: mojo.internal.Enum() };
paint_preview.mojom.SerializedRecordingSpec = { $: {} };

// Enum: RecordingPersistence
paint_preview.mojom.RecordingPersistence = {
  kFileSystem: 0,
  kMemoryBuffer: 1,
};

// Enum: ClipCoordOverride
paint_preview.mojom.ClipCoordOverride = {
  kNone: 0,
  kCenterOnScrollOffset: 1,
  kScrollOffset: 2,
};

// Union: SerializedRecording
mojo.internal.Union(
    paint_preview.mojom.SerializedRecordingSpec, 'paint_preview.mojom.SerializedRecording', {
      'file': {
        'ordinal': 0,
        'type': mojo_base.mojom.FileSpec.$,
        'nullable': false,
      },
      'buffer': {
        'ordinal': 1,
        'type': mojo_base.mojom.BigBufferSpec.$,
        'nullable': false,
      },
    });
