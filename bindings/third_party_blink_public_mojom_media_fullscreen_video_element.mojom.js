// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/fullscreen_video_element.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: FullscreenVideoElementHandler
blink.mojom.FullscreenVideoElementHandler = {};

blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.FullscreenVideoElementHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FullscreenVideoElementHandlerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FullscreenVideoElementHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FullscreenVideoElementHandlerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FullscreenVideoElementHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FullscreenVideoElementHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestFullscreenVideoElement() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.FullscreenVideoElementHandler.getRemote = function() {
  let remote = new blink.mojom.FullscreenVideoElementHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FullscreenVideoElementHandler',
    'context');
  return remote.$;
};

// ParamsSpec for RequestFullscreenVideoElement
blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FullscreenVideoElementHandler.RequestFullscreenVideoElement_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.FullscreenVideoElementHandlerPtr = blink.mojom.FullscreenVideoElementHandlerRemote;
blink.mojom.FullscreenVideoElementHandlerRequest = blink.mojom.FullscreenVideoElementHandlerPendingReceiver;

