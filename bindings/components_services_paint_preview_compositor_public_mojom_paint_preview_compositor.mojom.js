// Auto-generated MojoJS binding
// Source: chromium_src/components/services/paint_preview_compositor/public/mojom/paint_preview_compositor.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};


// Enum: BeginCompositeStatus
paint_preview.mojom.BeginCompositeStatus = {
  but: 0,
};

// Enum: BitmapStatus
paint_preview.mojom.BitmapStatus = {
};

// Struct: PaintPreviewBeginCompositeRequest
paint_preview.mojom.PaintPreviewBeginCompositeRequest = class {
  constructor(values = {}) {
    this.recording_map = values.recording_map !== undefined ? values.recording_map : {};
  }
};

// Struct: SubframeClipRect
paint_preview.mojom.SubframeClipRect = class {
  constructor(values = {}) {
    this.clip_rect = values.clip_rect !== undefined ? values.clip_rect : null;
  }
};

// Struct: FrameData
paint_preview.mojom.FrameData = class {
  constructor(values = {}) {
    this.scroll_offsets = values.scroll_offsets !== undefined ? values.scroll_offsets : null;
    this.theory = values.theory !== undefined ? values.theory : null;
    this.subframes = values.subframes !== undefined ? values.subframes : [];
  }
};

// Struct: PaintPreviewBeginCompositeResponse
paint_preview.mojom.PaintPreviewBeginCompositeResponse = class {
  constructor(values = {}) {
    this.frames = values.frames !== undefined ? values.frames : {};
  }
};

// Interface: PaintPreviewCompositor
paint_preview.mojom.PaintPreviewCompositorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'paint_preview.mojom.PaintPreviewCompositor';
  }

  beginSeparatedFrameComposite(request) {
    // Method: BeginSeparatedFrameComposite
    return new Promise((resolve) => {
      // Call: BeginSeparatedFrameComposite(request)
      resolve({});
    });
  }

  bitmapForSeparatedFrame(frame_guid, clip_rect, scale_factor) {
    // Method: BitmapForSeparatedFrame
    return new Promise((resolve) => {
      // Call: BitmapForSeparatedFrame(frame_guid, clip_rect, scale_factor)
      resolve({});
    });
  }

  beginMainFrameComposite(request) {
    // Method: BeginMainFrameComposite
    return new Promise((resolve) => {
      // Call: BeginMainFrameComposite(request)
      resolve({});
    });
  }

  bitmapForMainFrame(clip_rect, scale_factor) {
    // Method: BitmapForMainFrame
    return new Promise((resolve) => {
      // Call: BitmapForMainFrame(clip_rect, scale_factor)
      resolve({});
    });
  }

  setRootFrameUrl(url) {
    // Method: SetRootFrameUrl
    // Call: SetRootFrameUrl(url)
  }

};

paint_preview.mojom.PaintPreviewCompositorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PaintPreviewCompositorCollection
paint_preview.mojom.PaintPreviewCompositorCollectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'paint_preview.mojom.PaintPreviewCompositorCollection';
  }

  setDiscardableSharedMemoryManager(manager) {
    // Method: SetDiscardableSharedMemoryManager
    // Call: SetDiscardableSharedMemoryManager(manager)
  }

  createCompositor(compositor) {
    // Method: CreateCompositor
    return new Promise((resolve) => {
      // Call: CreateCompositor(compositor)
      resolve({});
    });
  }

  listCompositors() {
    // Method: ListCompositors
    return new Promise((resolve) => {
      // Call: ListCompositors()
      resolve({});
    });
  }

};

paint_preview.mojom.PaintPreviewCompositorCollectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
