// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/fullscreen_video_element.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.FullscreenVideoElementHandler = {};
blink.mojom.FullscreenVideoElementHandler.$interfaceName = 'blink.mojom.FullscreenVideoElementHandler';
blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec = { $: {} };

// Interface: FullscreenVideoElementHandler
mojo.internal.Struct(
    blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec, 'blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

blink.mojom.FullscreenVideoElementHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestFullscreenVideoElement();
          break;
        }
      }
    });
  }
};

blink.mojom.FullscreenVideoElementHandlerReceiver = blink.mojom.FullscreenVideoElementHandlerReceiver;

blink.mojom.FullscreenVideoElementHandlerPtr = blink.mojom.FullscreenVideoElementHandlerRemote;
blink.mojom.FullscreenVideoElementHandlerRequest = blink.mojom.FullscreenVideoElementHandlerPendingReceiver;

