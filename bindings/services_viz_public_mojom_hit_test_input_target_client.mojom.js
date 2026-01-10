// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/input_target_client.mojom
// Module: viz.mojom

'use strict';

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
};

viz.mojom.InputTargetClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  frameSinkIdAt(point, trace_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

viz.mojom.InputTargetClientReceiver = viz.mojom.InputTargetClientReceiver;

viz.mojom.InputTargetClientPtr = viz.mojom.InputTargetClientRemote;
viz.mojom.InputTargetClientRequest = viz.mojom.InputTargetClientPendingReceiver;

