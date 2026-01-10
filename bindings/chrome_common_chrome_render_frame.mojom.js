// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/chrome_render_frame.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var components = components || {};
var skia = skia || {};
var blink = blink || {};
var ui = ui || {};
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
      mojo.internal.StructField('window_features', 0, 0, blink.mojom.WindowFeaturesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParams', [
      mojo.internal.StructField('bitmap', 0, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParams', [
      mojo.internal.StructField('all_bounds', 0, 0, mojo.internal.Array(gfx.mojom.RectSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_Params', [
      mojo.internal.StructField('image_min_area_pixels', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('image_max_size_pixels', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('image_format', 12, 0, chrome.mojom.ImageFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('quality', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParams', [
      mojo.internal.StructField('image_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('original_size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('downscaled_size', 16, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('log_data', 32, 0, mojo.internal.Array(lens.mojom.LatencyLogSpec, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_Params', [
      mojo.internal.StructField('javascript', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
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
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, true, 0, undefined),
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
      mojo.internal.StructField('request', 0, 0, actor.mojom.ToolInvocationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec, 'chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, actor.mojom.ActionResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_CancelTool_Params', [
      mojo.internal.StructField('task_id', 0, 0, actor.mojom.TaskIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_StartActorJournal_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.AssociatedInterfaceProxy(actor.mojom.JournalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec, 'chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_Params', [
      mojo.internal.StructField('monitor', 0, 0, mojo.internal.InterfaceRequest(actor.mojom.PageStabilityMonitorRemote), null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, actor.mojom.TaskIdSpec, null, false, 0, undefined),
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
      [window_features]);
  }

  requestReloadImageForContextNode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec,
      null,
      []);
  }

  requestBitmapForContextNode() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec,
      []);
  }

  requestBitmapForContextNodeWithBoundsHint() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec,
      []);
  }

  requestBoundsHintForAllImages() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec,
      []);
  }

  requestImageForContextNode(image_min_area_pixels, image_max_size_pixels, image_format, quality) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec,
      [image_min_area_pixels, image_max_size_pixels, image_format, quality]);
  }

  executeWebUIJavaScript(javascript) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec,
      null,
      [javascript]);
  }

  setCCTClientHeader(header) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec,
      null,
      [header]);
  }

  getMediaFeedURL() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec,
      []);
  }

  loadBlockedPlugins(identifier) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec,
      null,
      [identifier]);
  }

  setShouldDeferMediaLoad(should_defer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec,
      null,
      [should_defer]);
  }

  invokeTool(request) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec,
      chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec,
      [request]);
  }

  cancelTool(task_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec,
      null,
      [task_id]);
  }

  startActorJournal(client) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec,
      null,
      [client]);
  }

  createPageStabilityMonitor(monitor, task_id, supports_paint_stability) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec,
      null,
      [monitor, task_id, supports_paint_stability]);
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

chrome.mojom.ChromeRenderFramePtr = chrome.mojom.ChromeRenderFrameRemote;
chrome.mojom.ChromeRenderFrameRequest = chrome.mojom.ChromeRenderFramePendingReceiver;

