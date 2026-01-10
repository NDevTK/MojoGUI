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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = cast_streaming.mojom.RendererController_SetPlaybackController_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

cast_streaming.mojom.RendererControllerReceiver = cast_streaming.mojom.RendererControllerReceiver;

cast_streaming.mojom.RendererControllerPtr = cast_streaming.mojom.RendererControllerRemote;
cast_streaming.mojom.RendererControllerRequest = cast_streaming.mojom.RendererControllerPendingReceiver;

