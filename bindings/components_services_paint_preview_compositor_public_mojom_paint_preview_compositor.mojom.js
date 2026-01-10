// Auto-generated MojoJS binding
// Source: chromium_src/components/services/paint_preview_compositor/public/mojom/paint_preview_compositor.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};
var components = components || {};
var components = components || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

paint_preview.mojom.BeginCompositeStatusSpec = { $: mojo.internal.Enum() };
paint_preview.mojom.BitmapStatusSpec = { $: mojo.internal.Enum() };
paint_preview.mojom.PaintPreviewBeginCompositeRequestSpec = { $: {} };
paint_preview.mojom.SubframeClipRectSpec = { $: {} };
paint_preview.mojom.FrameDataSpec = { $: {} };
paint_preview.mojom.PaintPreviewBeginCompositeResponseSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor = {};
paint_preview.mojom.PaintPreviewCompositor.$interfaceName = 'paint_preview.mojom.PaintPreviewCompositor';
paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ResponseParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositorCollection = {};
paint_preview.mojom.PaintPreviewCompositorCollection.$interfaceName = 'paint_preview.mojom.PaintPreviewCompositorCollection';
paint_preview.mojom.PaintPreviewCompositorCollection_SetDiscardableSharedMemoryManager_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ParamsSpec = { $: {} };
paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParamsSpec = { $: {} };

// Enum: BeginCompositeStatus
paint_preview.mojom.BeginCompositeStatus = {
  kSuccess: 0,
  kPartialSuccess: 1,
  kDeserializingFailure: -1,
  kCompositingFailure: -2,
};

// Enum: BitmapStatus
paint_preview.mojom.BitmapStatus = {
  kSuccess: 0,
  kMissingFrame: 1,
  kAllocFailed: 2,
};

// Struct: PaintPreviewBeginCompositeRequest
mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewBeginCompositeRequestSpec, 'paint_preview.mojom.PaintPreviewBeginCompositeRequest', [
      mojo.internal.StructField('preview', 0, 0, mojo_base.mojom.ProtoWrapperSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recording_map', 8, 0, mojo.internal.Map(mojo_base.mojom.UnguessableTokenSpec.$, paint_preview.mojom.SerializedRecordingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SubframeClipRect
mojo.internal.Struct(
    paint_preview.mojom.SubframeClipRectSpec, 'paint_preview.mojom.SubframeClipRect', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('clip_rect', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FrameData
mojo.internal.Struct(
    paint_preview.mojom.FrameDataSpec, 'paint_preview.mojom.FrameData', [
      mojo.internal.StructField('scroll_extents', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scroll_offsets', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subframes', 16, 0, mojo.internal.Array(paint_preview.mojom.SubframeClipRectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PaintPreviewBeginCompositeResponse
mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewBeginCompositeResponseSpec, 'paint_preview.mojom.PaintPreviewBeginCompositeResponse', [
      mojo.internal.StructField('root_frame_guid', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frames', 8, 0, mojo.internal.Map(mojo_base.mojom.UnguessableTokenSpec.$, paint_preview.mojom.FrameDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PaintPreviewCompositor
mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_Params', [
      mojo.internal.StructField('request', 0, 0, paint_preview.mojom.PaintPreviewBeginCompositeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ResponseParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, paint_preview.mojom.BeginCompositeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, paint_preview.mojom.PaintPreviewBeginCompositeResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_Params', [
      mojo.internal.StructField('frame_guid', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('clip_rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, paint_preview.mojom.BitmapStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitmap', 8, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_Params', [
      mojo.internal.StructField('request', 0, 0, paint_preview.mojom.PaintPreviewBeginCompositeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, paint_preview.mojom.BeginCompositeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, paint_preview.mojom.PaintPreviewBeginCompositeResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_Params', [
      mojo.internal.StructField('clip_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, paint_preview.mojom.BitmapStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bitmap', 8, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_ParamsSpec, 'paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [request],
      false);
  }

  bitmapForSeparatedFrame(frame_guid, clip_rect, scale_factor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec,
      [frame_guid, clip_rect, scale_factor],
      false);
  }

  beginMainFrameComposite(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec,
      [request],
      false);
  }

  bitmapForMainFrame(clip_rect, scale_factor) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec,
      [clip_rect, scale_factor],
      false);
  }

  setRootFrameUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_ParamsSpec,
      null,
      [url],
      false);
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

paint_preview.mojom.PaintPreviewCompositorPtr = paint_preview.mojom.PaintPreviewCompositorRemote;
paint_preview.mojom.PaintPreviewCompositorRequest = paint_preview.mojom.PaintPreviewCompositorPendingReceiver;


// Interface: PaintPreviewCompositorCollection
mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositorCollection_SetDiscardableSharedMemoryManager_ParamsSpec, 'paint_preview.mojom.PaintPreviewCompositorCollection_SetDiscardableSharedMemoryManager_Params', [
      mojo.internal.StructField('manager', 0, 0, mojo.internal.InterfaceProxy(discardable_memory.mojom.DiscardableSharedMemoryManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ParamsSpec, 'paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_Params', [
      mojo.internal.StructField('compositor', 0, 0, mojo.internal.InterfaceRequest(paint_preview.mojom.PaintPreviewCompositorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec, 'paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParams', [
      mojo.internal.StructField('compositor_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ParamsSpec, 'paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParamsSpec, 'paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParams', [
      mojo.internal.StructField('compositor_ids', 0, 0, mojo.internal.Array(mojo_base.mojom.UnguessableTokenSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [manager],
      false);
  }

  createCompositor(compositor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec,
      [compositor],
      false);
  }

  listCompositors() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParamsSpec,
      [],
      false);
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

paint_preview.mojom.PaintPreviewCompositorCollectionPtr = paint_preview.mojom.PaintPreviewCompositorCollectionRemote;
paint_preview.mojom.PaintPreviewCompositorCollectionRequest = paint_preview.mojom.PaintPreviewCompositorCollectionPendingReceiver;

