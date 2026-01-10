// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/chrome_render_frame.mojom
// Module: chrome.mojom

'use strict';

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
};

chrome.mojom.ChromeRenderFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setWindowFeatures(window_features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec,
      null,
      [window_features],
      false);
  }

  requestReloadImageForContextNode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec,
      null,
      [],
      false);
  }

  requestBitmapForContextNode() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec,
      [],
      false);
  }

  requestBitmapForContextNodeWithBoundsHint() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec,
      [],
      false);
  }

  requestBoundsHintForAllImages() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec,
      [],
      false);
  }

  requestImageForContextNode(image_min_area_pixels, image_max_size_pixels, image_format, quality) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec,
      [image_min_area_pixels, image_max_size_pixels, image_format, quality],
      false);
  }

  executeWebUIJavaScript(javascript) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec,
      null,
      [javascript],
      false);
  }

  setCCTClientHeader(header) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec,
      null,
      [header],
      false);
  }

  getMediaFeedURL() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec,
      [],
      false);
  }

  loadBlockedPlugins(identifier) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec,
      null,
      [identifier],
      false);
  }

  setShouldDeferMediaLoad(should_defer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec,
      null,
      [should_defer],
      false);
  }

  invokeTool(request) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec,
      [request],
      false);
  }

  cancelTool(task_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec,
      null,
      [task_id],
      false);
  }

  startActorJournal(client) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec,
      null,
      [client],
      false);
  }

  createPageStabilityMonitor(monitor, task_id, supports_paint_stability) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWindowFeatures(params.window_features);
          break;
        }
        case 1: {
          const params = chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestReloadImageForContextNode();
          break;
        }
        case 2: {
          const params = chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec.$.decode(message.payload);
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
          const params = chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec.$.decode(message.payload);
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
          const params = chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec.$.decode(message.payload);
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
          const params = chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec.$.decode(message.payload);
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
          const params = chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeWebUIJavaScript(params.javascript);
          break;
        }
        case 7: {
          const params = chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCCTClientHeader(params.header);
          break;
        }
        case 8: {
          const params = chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec.$.decode(message.payload);
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
          const params = chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadBlockedPlugins(params.identifier);
          break;
        }
        case 10: {
          const params = chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setShouldDeferMediaLoad(params.should_defer);
          break;
        }
        case 11: {
          const params = chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec.$.decode(message.payload);
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
          const params = chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelTool(params.task_id);
          break;
        }
        case 13: {
          const params = chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startActorJournal(params.client);
          break;
        }
        case 14: {
          const params = chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createPageStabilityMonitor(params.monitor, params.task_id, params.supports_paint_stability);
          break;
        }
      }
    });
  }
};

chrome.mojom.ChromeRenderFrameReceiver = chrome.mojom.ChromeRenderFrameReceiver;

chrome.mojom.ChromeRenderFramePtr = chrome.mojom.ChromeRenderFrameRemote;
chrome.mojom.ChromeRenderFrameRequest = chrome.mojom.ChromeRenderFramePendingReceiver;

