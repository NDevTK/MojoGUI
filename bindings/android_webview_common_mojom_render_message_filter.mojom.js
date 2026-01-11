// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/render_message_filter.mojom
// Module: android_webview.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  subFrameCreated(parent_frame_token, child_frame_token) {
    return this.$.subFrameCreated(parent_frame_token, child_frame_token);
  }
};

android_webview.mojom.RenderMessageFilterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderMessageFilter', [
      { explicit: null },
    ]);
  }

  subFrameCreated(parent_frame_token, child_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderMessageFilter', [
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
             decoder.decodeStructInline(android_webview.mojom.RenderMessageFilter_SubFrameCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.RenderMessageFilter_SubFrameCreated_ParamsSpec.$.structSpec);
          const result = this.impl.subFrameCreated(params.parent_frame_token, params.child_frame_token);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

android_webview.mojom.RenderMessageFilterReceiver = android_webview.mojom.RenderMessageFilterReceiver;

android_webview.mojom.RenderMessageFilterPtr = android_webview.mojom.RenderMessageFilterRemote;
android_webview.mojom.RenderMessageFilterRequest = android_webview.mojom.RenderMessageFilterPendingReceiver;

