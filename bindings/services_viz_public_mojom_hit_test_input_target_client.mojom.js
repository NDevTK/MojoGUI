// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/input_target_client.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: InputTargetClient
viz.mojom.InputTargetClient = {};

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
      [point, trace_id]);
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

// ParamsSpec for FrameSinkIdAt
viz.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.InputTargetClient.FrameSinkIdAt_Params',
      packedSize: 24,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

viz.mojom.InputTargetClient_FrameSinkIdAt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.InputTargetClient.FrameSinkIdAt_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'local_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.InputTargetClientPtr = viz.mojom.InputTargetClientRemote;
viz.mojom.InputTargetClientRequest = viz.mojom.InputTargetClientPendingReceiver;

