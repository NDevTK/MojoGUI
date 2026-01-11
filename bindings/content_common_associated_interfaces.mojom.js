// Auto-generated MojoJS binding
// Source: chromium_src/content/common/associated_interfaces.mojom
// Module: content.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var blink = blink || {};

content.mojom.RouteProvider = {};
content.mojom.RouteProvider.$interfaceName = 'content.mojom.RouteProvider';
content.mojom.RouteProvider_GetRoute_ParamsSpec = { $: {} };

// Interface: RouteProvider
mojo.internal.Struct(
    content.mojom.RouteProvider_GetRoute_ParamsSpec, 'content.mojom.RouteProvider_GetRoute_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, pending_associated_receiver<blink.mojom.AssociatedInterfaceProvider>Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.RouteProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RouteProviderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RouteProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RouteProviderPendingReceiver,
      handle);
    this.$ = new content.mojom.RouteProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getRoute(frame_token, receiver) {
    return this.$.getRoute(frame_token, receiver);
  }
};

content.mojom.RouteProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RouteProvider', [
      { explicit: null },
    ]);
  }

  getRoute(frame_token, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.RouteProvider_GetRoute_ParamsSpec,
      null,
      [frame_token, receiver],
      false);
  }

};

content.mojom.RouteProvider.getRemote = function() {
  let remote = new content.mojom.RouteProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RouteProvider',
    'context');
  return remote.$;
};

content.mojom.RouteProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RouteProvider', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RouteProvider_GetRoute_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RouteProvider_GetRoute_ParamsSpec.$.structSpec);
          const result = this.impl.getRoute(params.frame_token, params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.RouteProviderReceiver = content.mojom.RouteProviderReceiver;

content.mojom.RouteProviderPtr = content.mojom.RouteProviderRemote;
content.mojom.RouteProviderRequest = content.mojom.RouteProviderPendingReceiver;

