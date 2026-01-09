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
  ORIGINAL: 3,
};

// Interface: ChromeRenderFrame
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
      chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec.$,
      null,
      [window_features]);
  }

  requestReloadImageForContextNode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec.$,
      null,
      []);
  }

  requestBitmapForContextNode() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec.$,
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec.$,
      []);
  }

  requestBitmapForContextNodeWithBoundsHint() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec.$,
      chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec.$,
      []);
  }

  requestBoundsHintForAllImages() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec.$,
      chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec.$,
      []);
  }

  requestImageForContextNode(image_min_area_pixels, image_max_size_pixels, image_format, quality) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec.$,
      chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec.$,
      [image_min_area_pixels, image_max_size_pixels, image_format, quality]);
  }

  executeWebUIJavaScript(javascript) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec.$,
      null,
      [javascript]);
  }

  setCCTClientHeader(header) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec.$,
      null,
      [header]);
  }

  getMediaFeedURL() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec.$,
      chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec.$,
      []);
  }

  loadBlockedPlugins(identifier) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec.$,
      null,
      [identifier]);
  }

  setShouldDeferMediaLoad(should_defer) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec.$,
      null,
      [should_defer]);
  }

  invokeTool(request) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec.$,
      chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec.$,
      [request]);
  }

  cancelTool(task_id) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec.$,
      null,
      [task_id]);
  }

  startActorJournal(client) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec.$,
      null,
      [client]);
  }

  createPageStabilityMonitor(monitor, task_id, supports_paint_stability) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec.$,
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

// ParamsSpec for SetWindowFeatures
chrome.mojom.ChromeRenderFrame_SetWindowFeatures_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.SetWindowFeatures_Params',
      packedSize: 16,
      fields: [
        { name: 'window_features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestReloadImageForContextNode
chrome.mojom.ChromeRenderFrame_RequestReloadImageForContextNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestReloadImageForContextNode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestBitmapForContextNode
chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestBitmapForContextNode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestBitmapForContextNode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestBitmapForContextNodeWithBoundsHint
chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestBitmapForContextNodeWithBoundsHint_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.ChromeRenderFrame_RequestBitmapForContextNodeWithBoundsHint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestBitmapForContextNodeWithBoundsHint_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'bitmap', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestBoundsHintForAllImages
chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestBoundsHintForAllImages_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.ChromeRenderFrame_RequestBoundsHintForAllImages_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestBoundsHintForAllImages_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'all_bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestImageForContextNode
chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestImageForContextNode_Params',
      packedSize: 40,
      fields: [
        { name: 'image_min_area_pixels', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'image_max_size_pixels', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'image_format', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'quality', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.ChromeRenderFrame_RequestImageForContextNode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.RequestImageForContextNode_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'image_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'original_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'downscaled_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mime_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'log_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExecuteWebUIJavaScript
chrome.mojom.ChromeRenderFrame_ExecuteWebUIJavaScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.ExecuteWebUIJavaScript_Params',
      packedSize: 16,
      fields: [
        { name: 'javascript', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCCTClientHeader
chrome.mojom.ChromeRenderFrame_SetCCTClientHeader_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.SetCCTClientHeader_Params',
      packedSize: 16,
      fields: [
        { name: 'header', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetMediaFeedURL
chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.GetMediaFeedURL_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.ChromeRenderFrame_GetMediaFeedURL_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.GetMediaFeedURL_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LoadBlockedPlugins
chrome.mojom.ChromeRenderFrame_LoadBlockedPlugins_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.LoadBlockedPlugins_Params',
      packedSize: 16,
      fields: [
        { name: 'identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetShouldDeferMediaLoad
chrome.mojom.ChromeRenderFrame_SetShouldDeferMediaLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.SetShouldDeferMediaLoad_Params',
      packedSize: 16,
      fields: [
        { name: 'should_defer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InvokeTool
chrome.mojom.ChromeRenderFrame_InvokeTool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.InvokeTool_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.ChromeRenderFrame_InvokeTool_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.InvokeTool_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelTool
chrome.mojom.ChromeRenderFrame_CancelTool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.CancelTool_Params',
      packedSize: 16,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartActorJournal
chrome.mojom.ChromeRenderFrame_StartActorJournal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.StartActorJournal_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreatePageStabilityMonitor
chrome.mojom.ChromeRenderFrame_CreatePageStabilityMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeRenderFrame.CreatePageStabilityMonitor_Params',
      packedSize: 32,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'supports_paint_stability', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.ChromeRenderFramePtr = chrome.mojom.ChromeRenderFrameRemote;
chrome.mojom.ChromeRenderFrameRequest = chrome.mojom.ChromeRenderFramePendingReceiver;

