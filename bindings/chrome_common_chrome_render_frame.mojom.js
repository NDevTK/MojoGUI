// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/chrome_render_frame.mojom
// Module: chrome.mojom

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var actor = actor || {};
var lens = lens || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var blink = blink || {};
var gfx = gfx || {};
var url = url || {};

chrome.mojom.ImageFormatSpec = { $: mojo.internal.Enum() };
chrome.mojom.ChromeRenderFrame = {};
chrome.mojom.ChromeRenderFrame.$interfaceName = 'chrome.mojom.ChromeRenderFrame';
chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec = { $: {} };
chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec = { $: {} };

chrome.mojom.kDefaultQuality = 90;

// Enum: ImageFormat
chrome.mojom.ImageFormat = {
  JPEG: 0,
  PNG: 1,
  WEBP: 2,
  ORIGINAL: 3,
};

// Interface: ChromeRenderFrame
mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_SetWindowFeatures_Params', [
      mojo.internal.StructField('window_features', 0, 0, blink.mojom.WindowFeaturesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParams', [
      mojo.internal.StructField('all_bounds', 0, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_Params', [
      mojo.internal.StructField('image_max_size_pixels', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_format', 8, 0, chrome.mojom.ImageFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_min_area_pixels', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('quality', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParams', [
      mojo.internal.StructField('image_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('original_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('downscaled_size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('log_data', 32, 0, mojo.internal.Array(lens.mojom.LatencyLogSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_Params', [
      mojo.internal.StructField('header', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_Params', [
      mojo.internal.StructField('identifier', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_Params', [
      mojo.internal.StructField('should_defer', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_InvokeTool_Params', [
      mojo.internal.StructField('request', 0, 0, actor.mojom.ToolInvocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, actor.mojom.ActionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_CancelTool_Params', [
      mojo.internal.StructField('task_id', 0, 0, actor.mojom.TaskIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_StartActorJournal_Params', [
      mojo.internal.StructField('client', 0, 0, pending_associated_remote<actor.mojom.JournalClient>Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceRequest(actor.mojom.PageStabilityMonitorRemote), null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, actor.mojom.TaskIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supports_paint_stability', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

chrome.mojom.ChromeRenderFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ChromeRenderFrameRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ChromeRenderFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ChromeRenderFramePendingReceiver,
      handle);
    this.$ = new chrome.mojom.ChromeRenderFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setWindowFeatures(window_features) {
    return this.$.setWindowFeatures(window_features);
  }
  requestReloadImageForContextNode() {
    return this.$.requestReloadImageForContextNode();
  }
  requestBitmapForContextNode() {
    return this.$.requestBitmapForContextNode();
  }
  requestBitmapForContextNodeWithBoundsHint() {
    return this.$.requestBitmapForContextNodeWithBoundsHint();
  }
  requestBoundsHintForAllImages() {
    return this.$.requestBoundsHintForAllImages();
  }
  requestImageForContextNode(image_min_area_pixels, image_max_size_pixels, image_format, quality) {
    return this.$.requestImageForContextNode(image_min_area_pixels, image_max_size_pixels, image_format, quality);
  }
  executeWebUIJavaScript(javascript) {
    return this.$.executeWebUIJavaScript(javascript);
  }
  setCCTClientHeader(header) {
    return this.$.setCCTClientHeader(header);
  }
  getMediaFeedURL() {
    return this.$.getMediaFeedURL();
  }
  loadBlockedPlugins(identifier) {
    return this.$.loadBlockedPlugins(identifier);
  }
  setShouldDeferMediaLoad(should_defer) {
    return this.$.setShouldDeferMediaLoad(should_defer);
  }
  invokeTool(request) {
    return this.$.invokeTool(request);
  }
  cancelTool(task_id) {
    return this.$.cancelTool(task_id);
  }
  startActorJournal(client) {
    return this.$.startActorJournal(client);
  }
  createPageStabilityMonitor(monitor, task_id, supports_paint_stability) {
    return this.$.createPageStabilityMonitor(monitor, task_id, supports_paint_stability);
  }
};

chrome.mojom.ChromeRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChromeRenderFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setWindowFeatures(window_features) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec,
      null,
      [window_features],
      false);
  }

  requestReloadImageForContextNode() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec,
      null,
      [],
      false);
  }

  requestBitmapForContextNode() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec,
      [],
      false);
  }

  requestBitmapForContextNodeWithBoundsHint() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec,
      [],
      false);
  }

  requestBoundsHintForAllImages() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec,
      [],
      false);
  }

  requestImageForContextNode(image_min_area_pixels, image_max_size_pixels, image_format, quality) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec,
      [image_min_area_pixels, image_max_size_pixels, image_format, quality],
      false);
  }

  executeWebUIJavaScript(javascript) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec,
      null,
      [javascript],
      false);
  }

  setCCTClientHeader(header) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec,
      null,
      [header],
      false);
  }

  getMediaFeedURL() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec,
      [],
      false);
  }

  loadBlockedPlugins(identifier) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec,
      null,
      [identifier],
      false);
  }

  setShouldDeferMediaLoad(should_defer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec,
      null,
      [should_defer],
      false);
  }

  invokeTool(request) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec,
      [request],
      false);
  }

  cancelTool(task_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec,
      null,
      [task_id],
      false);
  }

  startActorJournal(client) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec,
      null,
      [client],
      false);
  }

  createPageStabilityMonitor(monitor, task_id, supports_paint_stability) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec,
      null,
      [monitor, task_id, supports_paint_stability],
      false);
  }

};

chrome.mojom.ChromeRenderFrame.getRemote = function() {
  let remote = new chrome.mojom.ChromeRenderFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ChromeRenderFrame',
    'context');
  return remote.$;
};

chrome.mojom.ChromeRenderFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChromeRenderFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec.$.structSpec);
          const result = this.impl.setWindowFeatures(params.window_features);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec.$.structSpec);
          const result = this.impl.requestReloadImageForContextNode();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec.$.structSpec);
          const result = this.impl.requestBitmapForContextNode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec.$.structSpec);
          const result = this.impl.requestBitmapForContextNodeWithBoundsHint();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec.$.structSpec);
          const result = this.impl.requestBoundsHintForAllImages();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec.$.structSpec);
          const result = this.impl.requestImageForContextNode(params.image_min_area_pixels, params.image_max_size_pixels, params.image_format, params.quality);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec.$.structSpec);
          const result = this.impl.executeWebUIJavaScript(params.javascript);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec.$.structSpec);
          const result = this.impl.setCCTClientHeader(params.header);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec.$.structSpec);
          const result = this.impl.getMediaFeedURL();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec.$.structSpec);
          const result = this.impl.loadBlockedPlugins(params.identifier);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec.$.structSpec);
          const result = this.impl.setShouldDeferMediaLoad(params.should_defer);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec.$.structSpec);
          const result = this.impl.invokeTool(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec.$.structSpec);
          const result = this.impl.cancelTool(params.task_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec.$.structSpec);
          const result = this.impl.startActorJournal(params.client);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec.$.structSpec);
          const result = this.impl.createPageStabilityMonitor(params.monitor, params.task_id, params.supports_paint_stability);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.ChromeRenderFrameReceiver = chrome.mojom.ChromeRenderFrameReceiver;

chrome.mojom.ChromeRenderFramePtr = chrome.mojom.ChromeRenderFrameRemote;
chrome.mojom.ChromeRenderFrameRequest = chrome.mojom.ChromeRenderFramePendingReceiver;

