// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/media/fullscreen_video_element.mojom
// Module: blink.mojom

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
  requestFullscreenVideoElement() {
    return this.$.requestFullscreenVideoElement();
  }
};

blink.mojom.FullscreenVideoElementHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FullscreenVideoElementHandler', [
      { explicit: null },
    ]);
  }

  requestFullscreenVideoElement() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FullscreenVideoElementHandler', [
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
             decoder.decodeStructInline(blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FullscreenVideoElementHandler_RequestFullscreenVideoElement_ParamsSpec.$.structSpec);
          const result = this.impl.requestFullscreenVideoElement();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.FullscreenVideoElementHandlerReceiver = blink.mojom.FullscreenVideoElementHandlerReceiver;

blink.mojom.FullscreenVideoElementHandlerPtr = blink.mojom.FullscreenVideoElementHandlerRemote;
blink.mojom.FullscreenVideoElementHandlerRequest = blink.mojom.FullscreenVideoElementHandlerPendingReceiver;

