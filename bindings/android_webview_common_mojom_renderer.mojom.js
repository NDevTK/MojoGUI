// Auto-generated MojoJS binding
// Source: chromium_src/android_webview/common/mojom/renderer.mojom
// Module: android_webview.mojom

'use strict';

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
};

android_webview.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clearCache() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      android_webview.mojom.Renderer_ClearCache_ParamsSpec,
      null,
      [],
      false);
  }

  setJsOnlineProperty(network_up) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ClearCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.Renderer_ClearCache_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearCache (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetJsOnlineProperty
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetJsOnlineProperty (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.Renderer_ClearCache_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.clearCache');
          const result = this.impl.clearCache();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(android_webview.mojom.Renderer_SetJsOnlineProperty_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setJsOnlineProperty');
          const result = this.impl.setJsOnlineProperty(params.network_up);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

android_webview.mojom.RendererReceiver = android_webview.mojom.RendererReceiver;

android_webview.mojom.RendererPtr = android_webview.mojom.RendererRemote;
android_webview.mojom.RendererRequest = android_webview.mojom.RendererPendingReceiver;

