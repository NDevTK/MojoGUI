// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/frame.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

android_webview.mojom.HitTestDataTypeSpec = { $: mojo.internal.Enum() };
android_webview.mojom.HitTestDataSpec = { $: {} };
android_webview.mojom.LocalMainFrame = {};
android_webview.mojom.LocalMainFrame.$interfaceName = 'android_webview.mojom.LocalMainFrame';
android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec = { $: {} };
android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost = {};
android_webview.mojom.FrameHost.$interfaceName = 'android_webview.mojom.FrameHost';
android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec = { $: {} };
android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec = { $: {} };

// Enum: HitTestDataType
android_webview.mojom.HitTestDataType = {
  kUnknown: 0,
  kPhone: 2,
  kGeo: 3,
  kEmail: 4,
  kImage: 5,
  kSrcLink: 7,
  kSrcImageLink: 8,
  kEditText: 9,
};

// Struct: HitTestData
mojo.internal.Struct(
    android_webview.mojom.HitTestDataSpec, 'android_webview.mojom.HitTestData', [
      mojo.internal.StructField('type', 32, 0, android_webview.mojom.HitTestDataTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('extra_data_for_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('href', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('anchor_text', 16, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('img_src', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: LocalMainFrame
mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SetInitialPageScale_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SetInitialPageScale_Params', [
      mojo.internal.StructField('page_scale_factor', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SetTextZoomFactor_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SetTextZoomFactor_Params', [
      mojo.internal.StructField('zoom_factor', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_DocumentHasImage_ParamsSpec, 'android_webview.mojom.LocalMainFrame_DocumentHasImage_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParamsSpec, 'android_webview.mojom.LocalMainFrame_DocumentHasImage_ResponseParams', [
      mojo.internal.StructField('has_images', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_ParamsSpec, 'android_webview.mojom.LocalMainFrame_ResetScrollAndScaleState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    android_webview.mojom.LocalMainFrame_SmoothScroll_ParamsSpec, 'android_webview.mojom.LocalMainFrame_SmoothScroll_Params', [
      mojo.internal.StructField('target_x', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('target_y', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('duration', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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

android_webview.mojom.LocalMainFramePtr = android_webview.mojom.LocalMainFrameRemote;
android_webview.mojom.LocalMainFrameRequest = android_webview.mojom.LocalMainFramePendingReceiver;


// Interface: FrameHost
mojo.internal.Struct(
    android_webview.mojom.FrameHost_UpdateHitTestData_ParamsSpec, 'android_webview.mojom.FrameHost_UpdateHitTestData_Params', [
      mojo.internal.StructField('data', 0, 0, android_webview.mojom.HitTestDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ContentsSizeChanged_ParamsSpec, 'android_webview.mojom.FrameHost_ContentsSizeChanged_Params', [
      mojo.internal.StructField('contents_size', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ParamsSpec, 'android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_Params', [
      mojo.internal.StructField('url', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('has_user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_redirect', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_outermost_main_frame', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParamsSpec, 'android_webview.mojom.FrameHost_ShouldOverrideUrlLoading_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

android_webview.mojom.FrameHostPtr = android_webview.mojom.FrameHostRemote;
android_webview.mojom.FrameHostRequest = android_webview.mojom.FrameHostPendingReceiver;

