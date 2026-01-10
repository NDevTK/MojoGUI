// Auto-generated MojoJS binding
// Source: chromium_src/components/services/paint_preview_compositor/public/mojom/paint_preview_compositor.mojom
// Module: paint_preview.mojom

'use strict';

// Module namespace
var paint_preview = paint_preview || {};
paint_preview.mojom = paint_preview.mojom || {};
var discardable_memory = discardable_memory || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};
var skia = skia || {};
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

paint_preview.mojom.PaintPreviewCompositorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BeginSeparatedFrameComposite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginSeparatedFrameComposite (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: BitmapForSeparatedFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BitmapForSeparatedFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: BeginMainFrameComposite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginMainFrameComposite (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: BitmapForMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BitmapForMainFrame (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: SetRootFrameUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRootFrameUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.beginSeparatedFrameComposite');
          const result = this.impl.beginSeparatedFrameComposite(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, paint_preview.mojom.PaintPreviewCompositor_BeginSeparatedFrameComposite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bitmapForSeparatedFrame');
          const result = this.impl.bitmapForSeparatedFrame(params.frame_guid, params.clip_rect, params.scale_factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, paint_preview.mojom.PaintPreviewCompositor_BitmapForSeparatedFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.beginMainFrameComposite');
          const result = this.impl.beginMainFrameComposite(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, paint_preview.mojom.PaintPreviewCompositor_BeginMainFrameComposite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bitmapForMainFrame');
          const result = this.impl.bitmapForMainFrame(params.clip_rect, params.scale_factor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, paint_preview.mojom.PaintPreviewCompositor_BitmapForMainFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositor_SetRootFrameUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setRootFrameUrl');
          const result = this.impl.setRootFrameUrl(params.url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

paint_preview.mojom.PaintPreviewCompositorReceiver = paint_preview.mojom.PaintPreviewCompositorReceiver;

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
      mojo.internal.StructField('compositor', 0, 0, mojo.internal.InterfaceRequest(paint_preview.mojom.PaintPreviewCompositorSpec), null, false, 0, undefined),
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

paint_preview.mojom.PaintPreviewCompositorCollectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetDiscardableSharedMemoryManager
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositorCollection_SetDiscardableSharedMemoryManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDiscardableSharedMemoryManager (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: CreateCompositor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCompositor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ListCompositors
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListCompositors (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositorCollection_SetDiscardableSharedMemoryManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDiscardableSharedMemoryManager');
          const result = this.impl.setDiscardableSharedMemoryManager(params.manager);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createCompositor');
          const result = this.impl.createCompositor(params.compositor);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, paint_preview.mojom.PaintPreviewCompositorCollection_CreateCompositor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.listCompositors');
          const result = this.impl.listCompositors();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, paint_preview.mojom.PaintPreviewCompositorCollection_ListCompositors_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

paint_preview.mojom.PaintPreviewCompositorCollectionReceiver = paint_preview.mojom.PaintPreviewCompositorCollectionReceiver;

paint_preview.mojom.PaintPreviewCompositorCollectionPtr = paint_preview.mojom.PaintPreviewCompositorCollectionRemote;
paint_preview.mojom.PaintPreviewCompositorCollectionRequest = paint_preview.mojom.PaintPreviewCompositorCollectionPendingReceiver;

