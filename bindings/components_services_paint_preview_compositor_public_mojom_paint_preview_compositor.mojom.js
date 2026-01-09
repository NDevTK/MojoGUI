// Auto-generated MojoJS binding
// Source: chromium_src/components/services/paint_preview_compositor/public/mojom/paint_preview_compositor.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};


// Enum: BeginCompositeStatus
paint_preview.mojom.BeginCompositeStatus = {
  kSuccess: 0,
  kPartialSuccess: 1,
  kDeserializingFailure: 2,
  kCompositingFailure: 3,
};

// Enum: BitmapStatus
paint_preview.mojom.BitmapStatus = {
  kSuccess: 0,
  kMissingFrame: 1,
  kAllocFailed: 2,
};

// Struct: PaintPreviewBeginCompositeRequest
paint_preview.mojom.PaintPreviewBeginCompositeRequestSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewBeginCompositeRequest',
      packedSize: 24,
      fields: [
        { name: 'preview', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProtoWrapperSpec, nullable: false },
        { name: 'recording_map', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SubframeClipRect
paint_preview.mojom.SubframeClipRectSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.SubframeClipRect',
      packedSize: 24,
      fields: [
        { name: 'frame_guid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'clip_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FrameData
paint_preview.mojom.FrameDataSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.FrameData',
      packedSize: 32,
      fields: [
        { name: 'scroll_extents', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'scroll_offsets', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'subframes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaintPreviewBeginCompositeResponse
paint_preview.mojom.PaintPreviewBeginCompositeResponseSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewBeginCompositeResponse',
      packedSize: 24,
      fields: [
        { name: 'root_frame_guid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'frames', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PaintPreviewCompositor
paint_preview.mojom.PaintPreviewCompositor = {};

paint_preview.mojom.PaintPreviewCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

paint_preview.mojom.PaintPreviewCompositorRemote = class {
  static get $interfaceName() {
    return 'paint_preview.mojom.PaintPreviewCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      paint_preview.mojom.PaintPreviewCompositorPendingReceiver,
      handle);
    this.$ = new paint_preview.mojom.PaintPreviewCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

paint_preview.mojom.PaintPreviewCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  beginSeparatedFrameComposite(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ResponseParamsSpec,
      [request]);
  }

  bitmapForSeparatedFrame(frame_guid, clip_rect, scale_factor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec,
      [frame_guid, clip_rect, scale_factor]);
  }

  beginMainFrameComposite(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec,
      [request]);
  }

  bitmapForMainFrame(clip_rect, scale_factor) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec,
      [clip_rect, scale_factor]);
  }

  setRootFrameUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_ParamsSpec,
      null,
      [url]);
  }

};

paint_preview.mojom.PaintPreviewCompositor.getRemote = function() {
  let remote = new paint_preview.mojom.PaintPreviewCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'paint_preview.mojom.PaintPreviewCompositor',
    'context');
  return remote.$;
};

// ParamsSpec for BeginSeparatedFrameComposite
paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BeginSeparatedFrameComposite_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.PaintPreviewBeginCompositeRequestSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BeginSeparatedFrameComposite_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.BeginCompositeStatusSpec, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: paint_preview.mojom.PaintPreviewBeginCompositeResponseSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BitmapForSeparatedFrame
paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BitmapForSeparatedFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'frame_guid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
        { name: 'clip_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BitmapForSeparatedFrame_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.BitmapStatusSpec, nullable: false },
        { name: 'bitmap', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BeginMainFrameComposite
paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BeginMainFrameComposite_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.PaintPreviewBeginCompositeRequestSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BeginMainFrameComposite_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.BeginCompositeStatusSpec, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: paint_preview.mojom.PaintPreviewBeginCompositeResponseSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BitmapForMainFrame
paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BitmapForMainFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'clip_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
        { name: 'scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BitmapForMainFrame_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: paint_preview.mojom.BitmapStatusSpec, nullable: false },
        { name: 'bitmap', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetRootFrameUrl
paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.SetRootFrameUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
paint_preview.mojom.PaintPreviewCompositorPtr = paint_preview.mojom.PaintPreviewCompositorRemote;
paint_preview.mojom.PaintPreviewCompositorRequest = paint_preview.mojom.PaintPreviewCompositorPendingReceiver;


// Interface: PaintPreviewCompositorCollection
paint_preview.mojom.PaintPreviewCompositorCollection = {};

paint_preview.mojom.PaintPreviewCompositorCollectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

paint_preview.mojom.PaintPreviewCompositorCollectionRemote = class {
  static get $interfaceName() {
    return 'paint_preview.mojom.PaintPreviewCompositorCollection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      paint_preview.mojom.PaintPreviewCompositorCollectionPendingReceiver,
      handle);
    this.$ = new paint_preview.mojom.PaintPreviewCompositorCollectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

paint_preview.mojom.PaintPreviewCompositorCollectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setDiscardableSharedMemoryManager(manager) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      paint_preview.mojom.PaintPreviewCompositorCollection_SetDiscardableSharedMemoryManager_ParamsSpec,
      null,
      [manager]);
  }

  createCompositor(compositor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec,
      [compositor]);
  }

  listCompositors() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParamsSpec,
      []);
  }

};

paint_preview.mojom.PaintPreviewCompositorCollection.getRemote = function() {
  let remote = new paint_preview.mojom.PaintPreviewCompositorCollectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'paint_preview.mojom.PaintPreviewCompositorCollection',
    'context');
  return remote.$;
};

// ParamsSpec for SetDiscardableSharedMemoryManager
paint_preview.mojom.PaintPreviewCompositorCollection_SetDiscardableSharedMemoryManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositorCollection.SetDiscardableSharedMemoryManager_Params',
      packedSize: 16,
      fields: [
        { name: 'manager', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateCompositor
paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositorCollection.CreateCompositor_Params',
      packedSize: 16,
      fields: [
        { name: 'compositor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositorCollection.CreateCompositor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'compositor_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListCompositors
paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositorCollection.ListCompositors_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositorCollection.ListCompositors_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'compositor_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
paint_preview.mojom.PaintPreviewCompositorCollectionPtr = paint_preview.mojom.PaintPreviewCompositorCollectionRemote;
paint_preview.mojom.PaintPreviewCompositorCollectionRequest = paint_preview.mojom.PaintPreviewCompositorCollectionPendingReceiver;

