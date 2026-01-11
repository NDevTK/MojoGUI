// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/renderer.mojom
// Module: android_webview.mojom

// Module namespace
var android_webview = android_webview || {};
android_webview.mojom = android_webview.mojom || {};

android_webview.mojom.Renderer = {};
android_webview.mojom.Renderer.$interfaceName = 'android_webview.mojom.Renderer';
android_webview.mojom.Renderer_ClearCache_ParamsSpec = { $: {} };
android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec = { $: {} };

// Interface: Renderer
mojo.internal.Struct(
    android_webview.mojom.Renderer_ClearCache_ParamsSpec, 'android_webview.mojom.Renderer_ClearCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec, 'android_webview.mojom.Renderer_SetJsOnlineProperty_Params', [
      mojo.internal.StructField('network_up', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

android_webview.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

android_webview.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'android_webview.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      android_webview.mojom.RendererPendingReceiver,
      handle);
    this.$ = new android_webview.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  clearCache() {
    return this.$.clearCache();
  }
  setJsOnlineProperty(network_up) {
    return this.$.setJsOnlineProperty(network_up);
  }
};

android_webview.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Renderer', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  clearCache() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      android_webview.mojom.Renderer_ClearCache_ParamsSpec,
      null,
      [],
      false);
  }

  setJsOnlineProperty(network_up) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec,
      null,
      [network_up],
      false);
  }

};

android_webview.mojom.Renderer.getRemote = function() {
  let remote = new android_webview.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'android_webview.mojom.Renderer',
    'context');
  return remote.$;
};

android_webview.mojom.RendererReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Renderer', [
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(android_webview.mojom.Renderer_ClearCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.Renderer_ClearCache_ParamsSpec.$.structSpec);
          const result = this.impl.clearCache();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec.$.structSpec);
          const result = this.impl.setJsOnlineProperty(params.network_up);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

android_webview.mojom.RendererReceiver = android_webview.mojom.RendererReceiver;

android_webview.mojom.RendererPtr = android_webview.mojom.RendererRemote;
android_webview.mojom.RendererRequest = android_webview.mojom.RendererPendingReceiver;

