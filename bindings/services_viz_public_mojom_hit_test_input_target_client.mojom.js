// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/hit_test/input_target_client.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: InputTargetClient
viz.mojom.mojom.InputTargetClient = {};

viz.mojom.mojom.InputTargetClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.InputTargetClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.InputTargetClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.InputTargetClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.InputTargetClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.InputTargetClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  frameSinkIdAt(point, trace_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec,
      viz.mojom.mojom.InputTargetClient_FrameSinkIdAt_ResponseParamsSpec,
      [point, trace_id]);
  }

};

viz.mojom.mojom.InputTargetClient.getRemote = function() {
  let remote = new viz.mojom.mojom.InputTargetClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.InputTargetClient',
    'context');
  return remote.$;
};

// ParamsSpec for FrameSinkIdAt
viz.mojom.mojom.InputTargetClient_FrameSinkIdAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.InputTargetClient.FrameSinkIdAt_Params',
      packedSize: 24,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'trace_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

viz.mojom.mojom.InputTargetClient_FrameSinkIdAt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.InputTargetClient.FrameSinkIdAt_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'local_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.InputTargetClientPtr = viz.mojom.mojom.InputTargetClientRemote;
viz.mojom.mojom.InputTargetClientRequest = viz.mojom.mojom.InputTargetClientPendingReceiver;

