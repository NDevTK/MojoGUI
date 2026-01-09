// Auto-generated MojoJS binding
// Source: chromium_src/components/paint_preview/common/mojom/paint_preview_recorder.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};


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

// Interface: PaintPreviewRecorder
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
      paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_ParamsSpec.$,
      null,
      [params]);
  }

  getGeometryMetadata(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec.$,
      paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParamsSpec.$,
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
}};

// ParamsSpec for CapturePaintPreview
paint_preview.mojom.PaintPreviewRecorder_CapturePaintPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewRecorder.CapturePaintPreview_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for GetGeometryMetadata
paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewRecorder.GetGeometryMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

paint_preview.mojom.PaintPreviewRecorder_GetGeometryMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewRecorder.GetGeometryMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
paint_preview.mojom.PaintPreviewRecorderPtr = paint_preview.mojom.PaintPreviewRecorderRemote;
paint_preview.mojom.PaintPreviewRecorderRequest = paint_preview.mojom.PaintPreviewRecorderPendingReceiver;

