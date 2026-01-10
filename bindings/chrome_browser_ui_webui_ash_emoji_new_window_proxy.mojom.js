// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/emoji/new_window_proxy.mojom
// Module: new_window_proxy.mojom

'use strict';

// Module namespace
var new_window_proxy = new_window_proxy || {};
new_window_proxy.mojom = new_window_proxy.mojom || {};
var url = url || {};

new_window_proxy.mojom.NewWindowProxy = {};
new_window_proxy.mojom.NewWindowProxy.$interfaceName = 'new_window_proxy.mojom.NewWindowProxy';
new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec = { $: {} };

// Interface: NewWindowProxy
mojo.internal.Struct(
    new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec, 'new_window_proxy.mojom.NewWindowProxy_OpenUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

new_window_proxy.mojom.NewWindowProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_window_proxy.mojom.NewWindowProxyRemote = class {
  static get $interfaceName() {
    return 'new_window_proxy.mojom.NewWindowProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_window_proxy.mojom.NewWindowProxyPendingReceiver,
      handle);
    this.$ = new new_window_proxy.mojom.NewWindowProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_window_proxy.mojom.NewWindowProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec,
      null,
      [url],
      false);
  }

};

new_window_proxy.mojom.NewWindowProxy.getRemote = function() {
  let remote = new new_window_proxy.mojom.NewWindowProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_window_proxy.mojom.NewWindowProxy',
    'context');
  return remote.$;
};

new_window_proxy.mojom.NewWindowProxyReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OpenUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openUrl');
          const result = this.impl.openUrl(params.url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

new_window_proxy.mojom.NewWindowProxyReceiver = new_window_proxy.mojom.NewWindowProxyReceiver;

new_window_proxy.mojom.NewWindowProxyPtr = new_window_proxy.mojom.NewWindowProxyRemote;
new_window_proxy.mojom.NewWindowProxyRequest = new_window_proxy.mojom.NewWindowProxyPendingReceiver;

