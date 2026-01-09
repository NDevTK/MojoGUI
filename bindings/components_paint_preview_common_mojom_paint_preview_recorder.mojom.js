// Auto-generated MojoJS binding
// Source: chromium_src/components/paint_preview/common/mojom/paint_preview_recorder.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};


// Enum: PaintPreviewStatus
paint_preview.mojom.PaintPreviewStatus = {
};

// Struct: PaintPreviewCaptureParams
paint_preview.mojom.PaintPreviewCaptureParams = class {
  constructor(values = {}) {
    this.max_decoded_image_size_bytes = values.max_decoded_image_size_bytes !== undefined ? values.max_decoded_image_size_bytes : 0;
    this.OOM = values.OOM !== undefined ? values.OOM : null;
    this.skip_accelerated_content = values.skip_accelerated_content !== undefined ? values.skip_accelerated_content : false;
  }
};

// Struct: LinkData
paint_preview.mojom.LinkData = class {
  constructor(values = {}) {
    this.rect = values.rect !== undefined ? values.rect : null;
  }
};

// Struct: PaintPreviewCaptureResponse
paint_preview.mojom.PaintPreviewCaptureResponse = class {
  constructor(values = {}) {
    this.skp = values.skp !== undefined ? values.skp : 0;
  }
};

// Struct: GeometryMetadataParams
paint_preview.mojom.GeometryMetadataParams = class {
  constructor(values = {}) {
    this.clip_rect = values.clip_rect !== undefined ? values.clip_rect : null;
    this.kNone = values.kNone !== undefined ? values.kNone : null;
    this.clip_rect_is_hint = values.clip_rect_is_hint !== undefined ? values.clip_rect_is_hint : false;
  }
};

// Struct: GeometryMetadataResponse
paint_preview.mojom.GeometryMetadataResponse = class {
  constructor(values = {}) {
    this.frame_offsets = values.frame_offsets !== undefined ? values.frame_offsets : 0;
  }
};

// Interface: PaintPreviewRecorder
paint_preview.mojom.PaintPreviewRecorderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'paint_preview.mojom.PaintPreviewRecorder';
  }

  capturePaintPreview(params) {
    // Method: CapturePaintPreview
    // Call: CapturePaintPreview(params)
  }

  getGeometryMetadata(params) {
    // Method: GetGeometryMetadata
    return new Promise((resolve) => {
      // Call: GetGeometryMetadata(params)
      resolve({});
    });
  }

};

paint_preview.mojom.PaintPreviewRecorderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
