// Auto-generated MojoJS binding
// Source: chromium_src/components/paint_preview/common/mojom/paint_preview_recorder.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var url = url || {};

paint_preview.mojom.PaintPreviewStatusSpec = { $: mojo.internal.Enum() };
paint_preview.mojom.PaintPreviewCaptureParamsSpec = { $: {} };
paint_preview.mojom.LinkDataSpec = { $: {} };
paint_preview.mojom.PaintPreviewCaptureResponseSpec = { $: {} };
paint_preview.mojom.GeometryMetadataParamsSpec = { $: {} };
paint_preview.mojom.GeometryMetadataResponseSpec = { $: {} };
paint_preview.mojom.PaintPreviewRecorder = {};
paint_preview.mojom.PaintPreviewRecorder.$interfaceName = 'paint_preview.mojom.PaintPreviewRecorder';
paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParamsSpec = { $: {} };

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

// Struct: PaintPreviewCaptureParams
mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCaptureParamsSpec, 'paint_preview.mojom.PaintPreviewCaptureParams', [
      mojo.internal.StructField('persistence', 0, 0, paint_preview.mojom.RecordingPersistenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('geometry_metadata_params', 16, 0, paint_preview.mojom.GeometryMetadataParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file', 24, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('max_capture_size', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('max_decoded_image_size_bytes', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('is_main_frame', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('capture_links', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('skip_accelerated_content', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: LinkData
mojo.internal.Struct(
    paint_preview.mojom.LinkDataSpec, 'paint_preview.mojom.LinkData', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaintPreviewCaptureResponse
mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCaptureResponseSpec, 'paint_preview.mojom.PaintPreviewCaptureResponse', [
      mojo.internal.StructField('embedding_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('content_id_to_embedding_token', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo_base.mojom.UnguessableTokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('links', 16, 0, mojo.internal.Array(paint_preview.mojom.LinkDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('blink_recording_time', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('serialized_size', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('geometry_metadata', 40, 0, paint_preview.mojom.GeometryMetadataResponseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('skp', 48, 0, mojo_base.mojom.BigBufferSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: GeometryMetadataParams
mojo.internal.Struct(
    paint_preview.mojom.GeometryMetadataParamsSpec, 'paint_preview.mojom.GeometryMetadataParams', [
      mojo.internal.StructField('clip_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('clip_x_coord_override', 8, 0, paint_preview.mojom.ClipCoordOverrideSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('clip_y_coord_override', 16, 0, paint_preview.mojom.ClipCoordOverrideSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('clip_rect_is_hint', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GeometryMetadataResponse
mojo.internal.Struct(
    paint_preview.mojom.GeometryMetadataResponseSpec, 'paint_preview.mojom.GeometryMetadataResponse', [
      mojo.internal.StructField('scroll_offsets', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_offsets', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PaintPreviewRecorder
mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_ParamsSpec, 'paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_Params', [
      mojo.internal.StructField('params', 0, 0, paint_preview.mojom.PaintPreviewCaptureParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec, 'paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_Params', [
      mojo.internal.StructField('params', 0, 0, paint_preview.mojom.GeometryMetadataParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParamsSpec, 'paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, paint_preview.mojom.GeometryMetadataResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [params],
      false);
  }

  getGeometryMetadata(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec,
      paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParamsSpec,
      [params],
      false);
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

paint_preview.mojom.PaintPreviewRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_ParamsSpec.$.decode(message.payload);
          const result = this.impl.capturePaintPreview(params.params);
          break;
        }
        case 1: {
          const params = paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getGeometryMetadata(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

paint_preview.mojom.PaintPreviewRecorderReceiver = paint_preview.mojom.PaintPreviewRecorderReceiver;

paint_preview.mojom.PaintPreviewRecorderPtr = paint_preview.mojom.PaintPreviewRecorderRemote;
paint_preview.mojom.PaintPreviewRecorderRequest = paint_preview.mojom.PaintPreviewRecorderPendingReceiver;

