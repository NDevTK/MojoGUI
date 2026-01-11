// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/begin_frame_observer.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.BeginFrameObserver = {};
viz.mojom.BeginFrameObserver.$interfaceName = 'viz.mojom.BeginFrameObserver';
viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec = { $: {} };

// Interface: BeginFrameObserver
mojo.internal.Struct(
    viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec, 'viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_Params', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.BeginFrameObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.BeginFrameObserverRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.BeginFrameObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.BeginFrameObserverPendingReceiver,
      handle);
    this.$ = new viz.mojom.BeginFrameObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStandaloneBeginFrame(args) {
    return this.$.onStandaloneBeginFrame(args);
  }
};

viz.mojom.BeginFrameObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BeginFrameObserver', [
      { explicit: null },
    ]);
  }

  onStandaloneBeginFrame(args) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec,
      null,
      [args],
      false);
  }

};

viz.mojom.BeginFrameObserver.getRemote = function() {
  let remote = new viz.mojom.BeginFrameObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.BeginFrameObserver',
    'context');
  return remote.$;
};

viz.mojom.BeginFrameObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BeginFrameObserver', [
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
             decoder.decodeStructInline(viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.BeginFrameObserver_OnStandaloneBeginFrame_ParamsSpec.$.structSpec);
          const result = this.impl.onStandaloneBeginFrame(params.args);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.BeginFrameObserverReceiver = viz.mojom.BeginFrameObserverReceiver;

viz.mojom.BeginFrameObserverPtr = viz.mojom.BeginFrameObserverRemote;
viz.mojom.BeginFrameObserverRequest = viz.mojom.BeginFrameObserverPendingReceiver;

