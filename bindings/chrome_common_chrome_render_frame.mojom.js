// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/chrome_render_frame.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: ImageFormat
chrome.mojom.ImageFormat = {
  JPEG: 0,
  PNG: 1,
  WEBP: 2,
  JPG: 3,
  if: 4,
  encode: 5,
};

// Interface: ChromeRenderFrame
chrome.mojom.ChromeRenderFramePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.ChromeRenderFrame';
  }

  setWindowFeatures(window_features) {
    // Method: SetWindowFeatures
    // Call: SetWindowFeatures(window_features)
  }

  requestReloadImageForContextNode() {
    // Method: RequestReloadImageForContextNode
    // Call: RequestReloadImageForContextNode()
  }

  requestBitmapForContextNode() {
    // Method: RequestBitmapForContextNode
    return new Promise((resolve) => {
      // Call: RequestBitmapForContextNode()
      resolve({});
    });
  }

  requestBitmapForContextNodeWithBoundsHint() {
    // Method: RequestBitmapForContextNodeWithBoundsHint
    return new Promise((resolve) => {
      // Call: RequestBitmapForContextNodeWithBoundsHint()
      resolve({});
    });
  }

  requestBoundsHintForAllImages() {
    // Method: RequestBoundsHintForAllImages
    return new Promise((resolve) => {
      // Call: RequestBoundsHintForAllImages()
      resolve({});
    });
  }

  requestImageForContextNode(image_min_area_pixels, image_max_size_pixels, image_format, quality) {
    // Method: RequestImageForContextNode
    return new Promise((resolve) => {
      // Call: RequestImageForContextNode(image_min_area_pixels, image_max_size_pixels, image_format, quality)
      resolve({});
    });
  }

  executeWebUIJavaScript(javascript) {
    // Method: ExecuteWebUIJavaScript
    // Call: ExecuteWebUIJavaScript(javascript)
  }

  setCCTClientHeader(header) {
    // Method: SetCCTClientHeader
    // Call: SetCCTClientHeader(header)
  }

  getMediaFeedURL() {
    // Method: GetMediaFeedURL
    return new Promise((resolve) => {
      // Call: GetMediaFeedURL()
      resolve({});
    });
  }

  loadBlockedPlugins(identifier) {
    // Method: LoadBlockedPlugins
    // Call: LoadBlockedPlugins(identifier)
  }

  setShouldDeferMediaLoad(should_defer) {
    // Method: SetShouldDeferMediaLoad
    // Call: SetShouldDeferMediaLoad(should_defer)
  }

  invokeTool(request) {
    // Method: InvokeTool
    return new Promise((resolve) => {
      // Call: InvokeTool(request)
      resolve({});
    });
  }

  cancelTool(task_id) {
    // Method: CancelTool
    // Call: CancelTool(task_id)
  }

  startActorJournal(client) {
    // Method: StartActorJournal
    // Call: StartActorJournal(client)
  }

  createPageStabilityMonitor(monitor, task_id, supports_paint_stability) {
    // Method: CreatePageStabilityMonitor
    // Call: CreatePageStabilityMonitor(monitor, task_id, supports_paint_stability)
  }

};

chrome.mojom.ChromeRenderFrameRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
