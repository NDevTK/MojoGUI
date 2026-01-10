// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/render_message_filter.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};
var blink = blink || {};

android_webview.mojom.RenderMessageFilter = {};
android_webview.mojom.RenderMessageFilter.$interfaceName = 'android_webview.mojom.RenderMessageFilter';
android_webview.mojom.RenderMessageFilter_SubFrameCreated_ParamsSpec = { $: {} };

// Interface: RenderMessageFilter
mojo.internal.Struct(
    android_webview.mojom.RenderMessageFilter_SubFrameCreated_ParamsSpec, 'android_webview.mojom.RenderMessageFilter_SubFrameCreated_Params', [
      mojo.internal.StructField('parent_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

android_webview.mojom.RenderMessageFilterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.RenderMessageFilterRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.RenderMessageFilter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.RenderMessageFilterPendingReceiver,
      handle);
    this.$ = new android_webview.mojom.RenderMessageFilterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.RenderMessageFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subFrameCreated(parent_frame_token, child_frame_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      android_webview.mojom.RenderMessageFilter_SubFrameCreated_ParamsSpec,
      null,
      [parent_frame_token, child_frame_token]);
  }

};

android_webview.mojom.RenderMessageFilter.getRemote = function() {
  let remote = new android_webview.mojom.RenderMessageFilterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.RenderMessageFilter',
    'context');
  return remote.$;
};

android_webview.mojom.RenderMessageFilterPtr = android_webview.mojom.RenderMessageFilterRemote;
android_webview.mojom.RenderMessageFilterRequest = android_webview.mojom.RenderMessageFilterPendingReceiver;

