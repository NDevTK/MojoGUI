// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/render_message_filter.mojom
// Module: android_webview.mojom

'use strict';

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};
var blink = blink || {};


// Interface: RenderMessageFilter
android_webview.mojom.mojom.RenderMessageFilter = {};

android_webview.mojom.mojom.RenderMessageFilterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.mojom.RenderMessageFilterRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.RenderMessageFilter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.mojom.RenderMessageFilterPendingReceiver,
      handle);
    this.$ = new android_webview.mojom.mojom.RenderMessageFilterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

android_webview.mojom.mojom.RenderMessageFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  subFrameCreated(parent_frame_token, child_frame_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      android_webview.mojom.mojom.RenderMessageFilter_SubFrameCreated_ParamsSpec,
      null,
      [parent_frame_token, child_frame_token]);
  }

};

android_webview.mojom.mojom.RenderMessageFilter.getRemote = function() {
  let remote = new android_webview.mojom.mojom.RenderMessageFilterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.RenderMessageFilter',
    'context');
  return remote.$;
};

// ParamsSpec for SubFrameCreated
android_webview.mojom.mojom.RenderMessageFilter_SubFrameCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'android_webview.mojom.RenderMessageFilter.SubFrameCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'parent_frame_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
        { name: 'child_frame_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.LocalFrameTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
android_webview.mojom.mojom.RenderMessageFilterPtr = android_webview.mojom.mojom.RenderMessageFilterRemote;
android_webview.mojom.mojom.RenderMessageFilterRequest = android_webview.mojom.mojom.RenderMessageFilterPendingReceiver;

