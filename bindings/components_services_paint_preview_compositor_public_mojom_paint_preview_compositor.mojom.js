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
      paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ResponseParamsSpec,
      [request],
      undefined,
      undefined
    );
  }

  bitmapForSeparatedFrame(frame_guid, clip_rect, scale_factor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec,
      [frame_guid, clip_rect, scale_factor],
      undefined,
      undefined
    );
  }

  beginMainFrameComposite(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec,
      [request],
      undefined,
      undefined
    );
  }

  bitmapForMainFrame(clip_rect, scale_factor) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec,
      paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec,
      [clip_rect, scale_factor],
      undefined,
      undefined
    );
  }

  setRootFrameUrl(url) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_ParamsSpec,
      null,
      null,
      [url],
      undefined,
      undefined
    );
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
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BeginSeparatedFrameComposite_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'frame_guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'clip_rect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BitmapForSeparatedFrame_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bitmap', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BeginMainFrameComposite_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'clip_rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositor.BitmapForMainFrame_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'bitmap', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      null,
      [manager],
      undefined,
      undefined
    );
  }

  createCompositor(compositor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec,
      paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec,
      [compositor],
      undefined,
      undefined
    );
  }

  listCompositors() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ParamsSpec,
      paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParamsSpec,
      paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'paint_preview.mojom.PaintPreviewCompositorCollection.CreateCompositor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'compositor_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
paint_preview.mojom.PaintPreviewCompositorCollectionPtr = paint_preview.mojom.PaintPreviewCompositorCollectionRemote;
paint_preview.mojom.PaintPreviewCompositorCollectionRequest = paint_preview.mojom.PaintPreviewCompositorCollectionPendingReceiver;

