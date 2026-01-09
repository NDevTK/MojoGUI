// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/frame.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};


// Enum: HitTestDataType
android_webview.mojom.HitTestDataType = {
  kUnknown: 0,
  kPhone: 1,
  kGeo: 2,
  kEmail: 3,
  kImage: 4,
  kSrcLink: 5,
  kSrcImageLink: 6,
  kEditText: 7,
};

// Interface: LocalMainFrame
android_webview.mojom.LocalMainFrame = {};

android_webview.mojom.LocalMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.LocalMainFrameRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.LocalMainFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.LocalMainFramePendingReceiver,
      handle);
    this.$ = new android_webview.mojom.LocalMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.LocalMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInitialPageScale(page_scale_factor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec,
      null,
      [page_scale_factor]);
  }

  setTextZoomFactor(zoom_factor) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec,
      null,
      [zoom_factor]);
  }

  documentHasImage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec,
      android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec,
      []);
  }

  resetScrollAndScaleState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec,
      null,
      []);
  }

  smoothScroll(target_x, target_y, duration) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec,
      null,
      [target_x, target_y, duration]);
  }

};

android_webview.mojom.LocalMainFrame.getRemote = function() {
  let remote = new android_webview.mojom.LocalMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.LocalMainFrame',
    'context');
  return remote.$;
};

// ParamsSpec for SetInitialPageScale
android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.LocalMainFrame.SetInitialPageScale_Params',
      packedSize: 16,
      fields: [
        { name: 'page_scale_factor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTextZoomFactor
android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.LocalMainFrame.SetTextZoomFactor_Params',
      packedSize: 16,
      fields: [
        { name: 'zoom_factor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DocumentHasImage
android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.LocalMainFrame.DocumentHasImage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.LocalMainFrame.DocumentHasImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_images', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResetScrollAndScaleState
android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.LocalMainFrame.ResetScrollAndScaleState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SmoothScroll
android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.LocalMainFrame.SmoothScroll_Params',
      packedSize: 32,
      fields: [
        { name: 'target_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'target_y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'duration', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
android_webview.mojom.LocalMainFramePtr = android_webview.mojom.LocalMainFrameRemote;
android_webview.mojom.LocalMainFrameRequest = android_webview.mojom.LocalMainFramePendingReceiver;


// Interface: FrameHost
android_webview.mojom.FrameHost = {};

android_webview.mojom.FrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.FrameHostRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.FrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.FrameHostPendingReceiver,
      handle);
    this.$ = new android_webview.mojom.FrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.FrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateHitTestData(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec,
      null,
      [data]);
  }

  contentsSizeChanged(contents_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec,
      null,
      [contents_size]);
  }

  shouldOverrideUrlLoading(url, has_user_gesture, is_redirect, is_outermost_main_frame) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec,
      android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec,
      [url, has_user_gesture, is_redirect, is_outermost_main_frame]);
  }

};

android_webview.mojom.FrameHost.getRemote = function() {
  let remote = new android_webview.mojom.FrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.FrameHost',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateHitTestData
android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.FrameHost.UpdateHitTestData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ContentsSizeChanged
android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.FrameHost.ContentsSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'contents_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShouldOverrideUrlLoading
android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.FrameHost.ShouldOverrideUrlLoading_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'has_user_gesture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_redirect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_outermost_main_frame', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.FrameHost.ShouldOverrideUrlLoading_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
android_webview.mojom.FrameHostPtr = android_webview.mojom.FrameHostRemote;
android_webview.mojom.FrameHostRequest = android_webview.mojom.FrameHostPendingReceiver;

