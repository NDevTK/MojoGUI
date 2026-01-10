// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/mall/mall_ui.mojom
// Module: ash.mall.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mall = ash.mall || {};
ash.mall.mojom = ash.mall.mojom || {};
var url = url || {};

ash.mall.mojom.PageHandler = {};
ash.mall.mojom.PageHandler.$interfaceName = 'ash.mall.mojom.PageHandler';
ash.mall.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec = { $: {} };
ash.mall.mojom.PageHandler_GetMallEmbedUrl_ResponseParamsSpec = { $: {} };

// Interface: PageHandler
mojo.internal.Struct(
    ash.mall.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec, 'ash.mall.mojom.PageHandler_GetMallEmbedUrl_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mall.mojom.PageHandler_GetMallEmbedUrl_ResponseParamsSpec, 'ash.mall.mojom.PageHandler_GetMallEmbedUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.mall.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mall.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mall.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mall.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mall.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mall.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMallEmbedUrl(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mall.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec,
      ash.mall.mojom.PageHandler_GetMallEmbedUrl_ResponseParamsSpec,
      [path],
      false);
  }

};

ash.mall.mojom.PageHandler.getRemote = function() {
  let remote = new ash.mall.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mall.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.mall.mojom.PageHandlerReceiver = class {
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
        
        // Try Method 0: GetMallEmbedUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.mall.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMallEmbedUrl (0)');
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
          const params = decoder.decodeStruct(ash.mall.mojom.PageHandler_GetMallEmbedUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMallEmbedUrl');
          const result = this.impl.getMallEmbedUrl(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mall.mojom.PageHandler_GetMallEmbedUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mall.mojom.PageHandlerReceiver = ash.mall.mojom.PageHandlerReceiver;

ash.mall.mojom.PageHandlerPtr = ash.mall.mojom.PageHandlerRemote;
ash.mall.mojom.PageHandlerRequest = ash.mall.mojom.PageHandlerPendingReceiver;

