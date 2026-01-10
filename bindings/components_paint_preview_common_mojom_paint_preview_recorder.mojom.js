// Auto-generated MojoJS binding
// Source: chromium_src/components/paint_preview/common/mojom/paint_preview_recorder.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: PaintPreviewStatus
paint_preview.mojom.PaintPreviewStatus = {
  kOk: 0,
  kAlreadyCapturing: 1,
  kCaptureFailed: 2,
  kGuidCollision: 3,
  kFileCreationError: 4,
  kPartialSuccess: 5,
  kFailed: 6,
};
paint_preview.mojom.PaintPreviewStatusSpec = { $: mojo.internal.Enum() };

// Struct: PaintPreviewCaptureParams
paint_preview.mojom.PaintPreviewCaptureParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCaptureParams',
      packedSize: 56,
      fields: [
        { name: 'persistence', packedOffset: 40, packedBitOffset: 0, type: paint_preview.mojom.RecordingPersistenceSpec, nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'geometry_metadata_params', packedOffset: 8, packedBitOffset: 0, type: paint_preview.mojom.GeometryMetadataParamsSpec, nullable: false, minVersion: 0 },
        { name: 'is_main_frame', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'capture_links', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'file', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: true, minVersion: 0 },
        { name: 'max_capture_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'max_decoded_image_size_bytes', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'skip_accelerated_content', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: LinkData
paint_preview.mojom.LinkDataSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.LinkData',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PaintPreviewCaptureResponse
paint_preview.mojom.PaintPreviewCaptureResponseSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCaptureResponse',
      packedSize: 72,
      fields: [
        { name: 'embedding_token', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'content_id_to_embedding_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo_base.mojom.UnguessableTokenSpec, false), nullable: false, minVersion: 0 },
        { name: 'links', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(paint_preview.mojom.LinkDataSpec, false), nullable: false, minVersion: 0 },
        { name: 'blink_recording_time', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'serialized_size', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'geometry_metadata', packedOffset: 56, packedBitOffset: 0, type: paint_preview.mojom.GeometryMetadataResponseSpec, nullable: false, minVersion: 0 },
        { name: 'skp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: GeometryMetadataParams
paint_preview.mojom.GeometryMetadataParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.GeometryMetadataParams',
      packedSize: 32,
      fields: [
        { name: 'clip_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'clip_x_coord_override', packedOffset: 8, packedBitOffset: 0, type: paint_preview.mojom.ClipCoordOverrideSpec, nullable: false, minVersion: 0 },
        { name: 'clip_y_coord_override', packedOffset: 12, packedBitOffset: 0, type: paint_preview.mojom.ClipCoordOverrideSpec, nullable: false, minVersion: 0 },
        { name: 'clip_rect_is_hint', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GeometryMetadataResponse
paint_preview.mojom.GeometryMetadataResponseSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.GeometryMetadataResponse',
      packedSize: 24,
      fields: [
        { name: 'scroll_offsets', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'frame_offsets', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PaintPreviewRecorder
paint_preview.mojom.PaintPreviewRecorder = {};

paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.PaintPreviewCaptureParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.GeometryMetadataParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

paint_preview.mojom.PaintPreviewRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

paint_preview.mojom.PaintPreviewRecorderRemote = class {
  static get $interfaceName() {
    return 'paint_preview.mojom.PaintPreviewRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      paint_preview.mojom.PaintPreviewRecorderPendingReceiver,
      handle);
    this.$ = new paint_preview.mojom.PaintPreviewRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

paint_preview.mojom.PaintPreviewRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  capturePaintPreview(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_ParamsSpec,
      null,
      [params]);
  }

  getGeometryMetadata(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec,
      paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParamsSpec,
      [params]);
  }

};

paint_preview.mojom.PaintPreviewRecorder.getRemote = function() {
  let remote = new paint_preview.mojom.PaintPreviewRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'paint_preview.mojom.PaintPreviewRecorder',
    'context');
  return remote.$;
};

// ParamsSpec for CapturePaintPreview
paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewRecorder.CapturePaintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.PaintPreviewCaptureParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetGeometryMetadata
paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewRecorder.GetGeometryMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.GeometryMetadataParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewRecorder.GetGeometryMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.GeometryMetadataResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
paint_preview.mojom.PaintPreviewRecorderPtr = paint_preview.mojom.PaintPreviewRecorderRemote;
paint_preview.mojom.PaintPreviewRecorderRequest = paint_preview.mojom.PaintPreviewRecorderPendingReceiver;

