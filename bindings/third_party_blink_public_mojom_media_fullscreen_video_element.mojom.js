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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
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
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestFullscreenVideoElement();
          break;
        }
      }
    }});
  }
};

blink.mojom.FullscreenVideoElementHandlerReceiver = blink.mojom.FullscreenVideoElementHandlerReceiver;

blink.mojom.FullscreenVideoElementHandlerPtr = blink.mojom.FullscreenVideoElementHandlerRemote;
blink.mojom.FullscreenVideoElementHandlerRequest = blink.mojom.FullscreenVideoElementHandlerPendingReceiver;

