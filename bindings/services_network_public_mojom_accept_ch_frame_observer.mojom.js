// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/accept_ch_frame_observer.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.AcceptCHFrameObserver = {};
network.mojom.AcceptCHFrameObserver.$interfaceName = 'network.mojom.AcceptCHFrameObserver';
network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec = { $: {} };
network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec = { $: {} };
network.mojom.AcceptCHFrameObserver_Clone_ParamsSpec = { $: {} };

// Interface: AcceptCHFrameObserver
mojo.internal.Struct(
    network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec, 'network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accept_ch_frame', 8, 0, mojo.internal.Array(network.mojom.WebClientHintsTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec, 'network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.AcceptCHFrameObserver_Clone_ParamsSpec, 'network.mojom.AcceptCHFrameObserver_Clone_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.AcceptCHFrameObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.AcceptCHFrameObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.AcceptCHFrameObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.AcceptCHFrameObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.AcceptCHFrameObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.AcceptCHFrameObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAcceptCHFrameReceived(origin, accept_ch_frame) {
    return this.$.onAcceptCHFrameReceived(origin, accept_ch_frame);
  }
  clone(listener) {
    return this.$.clone(listener);
  }
};

network.mojom.AcceptCHFrameObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AcceptCHFrameObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAcceptCHFrameReceived(origin, accept_ch_frame) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec,
      network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec,
      [origin, accept_ch_frame],
      false);
  }

  clone(listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.AcceptCHFrameObserver_Clone_ParamsSpec,
      null,
      [listener],
      false);
  }

};

network.mojom.AcceptCHFrameObserver.getRemote = function() {
  let remote = new network.mojom.AcceptCHFrameObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.AcceptCHFrameObserver',
    'context');
  return remote.$;
};

network.mojom.AcceptCHFrameObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AcceptCHFrameObserver', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.AcceptCHFrameObserver_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec.$.structSpec);
          const result = this.impl.onAcceptCHFrameReceived(params.origin, params.accept_ch_frame);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.AcceptCHFrameObserver_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.listener);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.AcceptCHFrameObserverReceiver = network.mojom.AcceptCHFrameObserverReceiver;

network.mojom.AcceptCHFrameObserverPtr = network.mojom.AcceptCHFrameObserverRemote;
network.mojom.AcceptCHFrameObserverRequest = network.mojom.AcceptCHFrameObserverPendingReceiver;

