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
      mojo.internal.StructField('parent_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
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
      [parent_frame_token, child_frame_token],
      false);
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

android_webview.mojom.RenderMessageFilterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = android_webview.mojom.RenderMessageFilter_SubFrameCreated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.subFrameCreated(params.parent_frame_token, params.child_frame_token);
          break;
        }
      }
    }});
  }
};

android_webview.mojom.RenderMessageFilterReceiver = android_webview.mojom.RenderMessageFilterReceiver;

android_webview.mojom.RenderMessageFilterPtr = android_webview.mojom.RenderMessageFilterRemote;
android_webview.mojom.RenderMessageFilterRequest = android_webview.mojom.RenderMessageFilterPendingReceiver;

