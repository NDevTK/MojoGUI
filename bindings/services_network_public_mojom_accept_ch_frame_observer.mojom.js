// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/accept_ch_frame_observer.mojom
// Module: network.mojom

'use strict';

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
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceRequest(network.mojom.AcceptCHFrameObserverSpec), null, false, 0, undefined),
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
};

network.mojom.AcceptCHFrameObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAcceptCHFrameReceived(origin, accept_ch_frame) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec,
      network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ResponseParamsSpec,
      [origin, accept_ch_frame],
      false);
  }

  clone(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.AcceptCHFrameObserver_OnAcceptCHFrameReceived_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onAcceptCHFrameReceived');
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
          const params = network.mojom.AcceptCHFrameObserver_Clone_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.listener);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

network.mojom.AcceptCHFrameObserverReceiver = network.mojom.AcceptCHFrameObserverReceiver;

network.mojom.AcceptCHFrameObserverPtr = network.mojom.AcceptCHFrameObserverRemote;
network.mojom.AcceptCHFrameObserverRequest = network.mojom.AcceptCHFrameObserverPendingReceiver;

