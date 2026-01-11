// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/input_target_client.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var gfx = gfx || {};

viz.mojom.InputTargetClient = {};
viz.mojom.InputTargetClient.$interfaceName = 'viz.mojom.InputTargetClient';
viz.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec = { $: {} };
viz.mojom.InputTargetClient_FrameSinkIdAt_ResponseParamsSpec = { $: {} };

// Interface: InputTargetClient
mojo.internal.Struct(
    viz.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec, 'viz.mojom.InputTargetClient_FrameSinkIdAt_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.InputTargetClient_FrameSinkIdAt_ResponseParamsSpec, 'viz.mojom.InputTargetClient_FrameSinkIdAt_ResponseParams', [
      mojo.internal.StructField('id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

viz.mojom.InputTargetClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.InputTargetClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.InputTargetClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.InputTargetClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.InputTargetClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  frameSinkIdAt(point, trace_id) {
    return this.$.frameSinkIdAt(point, trace_id);
  }
};

viz.mojom.InputTargetClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputTargetClient', [
      { explicit: null },
    ]);
  }

  frameSinkIdAt(point, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec,
      viz.mojom.InputTargetClient_FrameSinkIdAt_ResponseParamsSpec,
      [point, trace_id],
      false);
  }

};

viz.mojom.InputTargetClient.getRemote = function() {
  let remote = new viz.mojom.InputTargetClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.InputTargetClient',
    'context');
  return remote.$;
};

viz.mojom.InputTargetClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputTargetClient', [
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
             decoder.decodeStructInline(viz.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec.$.structSpec);
          const result = this.impl.frameSinkIdAt(params.point, params.trace_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, viz.mojom.InputTargetClient_FrameSinkIdAt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.InputTargetClientReceiver = viz.mojom.InputTargetClientReceiver;

viz.mojom.InputTargetClientPtr = viz.mojom.InputTargetClientRemote;
viz.mojom.InputTargetClientRequest = viz.mojom.InputTargetClientPendingReceiver;

