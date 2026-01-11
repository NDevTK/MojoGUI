// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/render_frame_prerender_messages.mojom
// Module: prerender.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};

prerender.mojom.NoStatePrefetchMessages = {};
prerender.mojom.NoStatePrefetchMessages.$interfaceName = 'prerender.mojom.NoStatePrefetchMessages';
prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec = { $: {} };

// Interface: NoStatePrefetchMessages
mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec, 'prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_Params', [
      mojo.internal.StructField('histogram_prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

prerender.mojom.NoStatePrefetchMessagesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prerender.mojom.NoStatePrefetchMessagesRemote = class {
  static get $interfaceName() {
    return 'prerender.mojom.NoStatePrefetchMessages';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prerender.mojom.NoStatePrefetchMessagesPendingReceiver,
      handle);
    this.$ = new prerender.mojom.NoStatePrefetchMessagesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setIsNoStatePrefetching(histogram_prefix) {
    return this.$.setIsNoStatePrefetching(histogram_prefix);
  }
};

prerender.mojom.NoStatePrefetchMessagesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NoStatePrefetchMessages', [
      { explicit: null },
    ]);
  }

  setIsNoStatePrefetching(histogram_prefix) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec,
      null,
      [histogram_prefix],
      false);
  }

};

prerender.mojom.NoStatePrefetchMessages.getRemote = function() {
  let remote = new prerender.mojom.NoStatePrefetchMessagesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prerender.mojom.NoStatePrefetchMessages',
    'context');
  return remote.$;
};

prerender.mojom.NoStatePrefetchMessagesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NoStatePrefetchMessages', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec.$.structSpec);
          const result = this.impl.setIsNoStatePrefetching(params.histogram_prefix);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

prerender.mojom.NoStatePrefetchMessagesReceiver = prerender.mojom.NoStatePrefetchMessagesReceiver;

prerender.mojom.NoStatePrefetchMessagesPtr = prerender.mojom.NoStatePrefetchMessagesRemote;
prerender.mojom.NoStatePrefetchMessagesRequest = prerender.mojom.NoStatePrefetchMessagesPendingReceiver;

