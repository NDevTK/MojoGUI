// Auto-generated MojoJS binding
// Source: chromium_src/components/cast_streaming/common/public/mojom/renderer_controller.mojom
// Module: cast_streaming.mojom

'use strict';

// Module namespace
var cast_streaming = cast_streaming || {};
cast_streaming.mojom = cast_streaming.mojom || {};
var media = media || {};

cast_streaming.mojom.RendererController = {};
cast_streaming.mojom.RendererController.$interfaceName = 'cast_streaming.mojom.RendererController';
cast_streaming.mojom.RendererController_SetPlaybackController_ParamsSpec = { $: {} };
cast_streaming.mojom.RendererController_SetPlaybackController_ResponseParamsSpec = { $: {} };

// Interface: RendererController
mojo.internal.Struct(
    cast_streaming.mojom.RendererController_SetPlaybackController_ParamsSpec, 'cast_streaming.mojom.RendererController_SetPlaybackController_Params', [
      mojo.internal.StructField('renderer', 0, 0, mojo.internal.InterfaceRequest(media.mojom.RendererRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    cast_streaming.mojom.RendererController_SetPlaybackController_ResponseParamsSpec, 'cast_streaming.mojom.RendererController_SetPlaybackController_ResponseParams', [
    ],
    [[0, 8]]);

cast_streaming.mojom.RendererControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

cast_streaming.mojom.RendererControllerRemote = class {
  static get $interfaceName() {
    return 'cast_streaming.mojom.RendererController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      cast_streaming.mojom.RendererControllerPendingReceiver,
      handle);
    this.$ = new cast_streaming.mojom.RendererControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

cast_streaming.mojom.RendererControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPlaybackController(renderer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      cast_streaming.mojom.RendererController_SetPlaybackController_ParamsSpec,
      cast_streaming.mojom.RendererController_SetPlaybackController_ResponseParamsSpec,
      [renderer],
      false);
  }

};

cast_streaming.mojom.RendererController.getRemote = function() {
  let remote = new cast_streaming.mojom.RendererControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'cast_streaming.mojom.RendererController',
    'context');
  return remote.$;
};

cast_streaming.mojom.RendererControllerReceiver = class {
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
        
        // Try Method 0: SetPlaybackController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(cast_streaming.mojom.RendererController_SetPlaybackController_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPlaybackController (0)');
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
          const params = decoder.decodeStruct(cast_streaming.mojom.RendererController_SetPlaybackController_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPlaybackController');
          const result = this.impl.setPlaybackController(params.renderer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, cast_streaming.mojom.RendererController_SetPlaybackController_ResponseParamsSpec);
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

cast_streaming.mojom.RendererControllerReceiver = cast_streaming.mojom.RendererControllerReceiver;

cast_streaming.mojom.RendererControllerPtr = cast_streaming.mojom.RendererControllerRemote;
cast_streaming.mojom.RendererControllerRequest = cast_streaming.mojom.RendererControllerPendingReceiver;

