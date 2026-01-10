// Auto-generated MojoJS binding
// Source: chromium_src/components/cast_streaming/common/public/mojom/renderer_controller.mojom
// Module: cast_streaming.mojom

'use strict';

// Module namespace
var cast_streaming = cast_streaming || {};
cast_streaming.mojom = cast_streaming.mojom || {};


// Interface: RendererController
cast_streaming.mojom.RendererController = {};

cast_streaming.mojom.RendererController_SetPlaybackController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.RendererController_SetPlaybackController_Params',
      packedSize: 16,
      fields: [
        { name: 'renderer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.RendererRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      null,
      [renderer]);
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

// ParamsSpec for SetPlaybackController
cast_streaming.mojom.RendererController_SetPlaybackController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'cast_streaming.mojom.RendererController.SetPlaybackController_Params',
      packedSize: 16,
      fields: [
        { name: 'renderer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.RendererRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
cast_streaming.mojom.RendererControllerPtr = cast_streaming.mojom.RendererControllerRemote;
cast_streaming.mojom.RendererControllerRequest = cast_streaming.mojom.RendererControllerPendingReceiver;

