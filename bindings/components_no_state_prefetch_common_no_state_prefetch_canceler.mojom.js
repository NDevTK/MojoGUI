// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/no_state_prefetch_canceler.mojom
// Module: prerender.mojom

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};

prerender.mojom.NoStatePrefetchCanceler = {};
prerender.mojom.NoStatePrefetchCanceler.$interfaceName = 'prerender.mojom.NoStatePrefetchCanceler';
prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec = { $: {} };
prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec = { $: {} };

// Interface: NoStatePrefetchCanceler
mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec, 'prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec, 'prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_Params', [
    ],
    [[0, 8]]);

prerender.mojom.NoStatePrefetchCancelerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prerender.mojom.NoStatePrefetchCancelerRemote = class {
  static get $interfaceName() {
    return 'prerender.mojom.NoStatePrefetchCanceler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prerender.mojom.NoStatePrefetchCancelerPendingReceiver,
      handle);
    this.$ = new prerender.mojom.NoStatePrefetchCancelerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  cancelNoStatePrefetchForUnsupportedScheme() {
    return this.$.cancelNoStatePrefetchForUnsupportedScheme();
  }
  cancelNoStatePrefetchAfterSubresourcesDiscovered() {
    return this.$.cancelNoStatePrefetchAfterSubresourcesDiscovered();
  }
};

prerender.mojom.NoStatePrefetchCancelerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NoStatePrefetchCanceler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  cancelNoStatePrefetchForUnsupportedScheme() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec,
      null,
      [],
      false);
  }

  cancelNoStatePrefetchAfterSubresourcesDiscovered() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec,
      null,
      [],
      false);
  }

};

prerender.mojom.NoStatePrefetchCanceler.getRemote = function() {
  let remote = new prerender.mojom.NoStatePrefetchCancelerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prerender.mojom.NoStatePrefetchCanceler',
    'context');
  return remote.$;
};

prerender.mojom.NoStatePrefetchCancelerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NoStatePrefetchCanceler', [
      { explicit: null },
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
             decoder.decodeStructInline(prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec.$.structSpec);
          const result = this.impl.cancelNoStatePrefetchForUnsupportedScheme();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec.$.structSpec);
          const result = this.impl.cancelNoStatePrefetchAfterSubresourcesDiscovered();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

prerender.mojom.NoStatePrefetchCancelerReceiver = prerender.mojom.NoStatePrefetchCancelerReceiver;

prerender.mojom.NoStatePrefetchCancelerPtr = prerender.mojom.NoStatePrefetchCancelerRemote;
prerender.mojom.NoStatePrefetchCancelerRequest = prerender.mojom.NoStatePrefetchCancelerPendingReceiver;

