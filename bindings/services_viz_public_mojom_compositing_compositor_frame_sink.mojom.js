// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositor_frame_sink.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: CompositorFrameSink
viz.mojom.CompositorFrameSink = {};

viz.mojom.CompositorFrameSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositorFrameSinkRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositorFrameSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositorFrameSinkPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositorFrameSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositorFrameSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setParams(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CompositorFrameSink_SetParams_ParamsSpec,
      null,
      null,
      [params],
      undefined,
      undefined
    );
  }

  setNeedsBeginFrame(needs_begin_frame) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec,
      null,
      null,
      [needs_begin_frame],
      undefined,
      undefined
    );
  }

  submitCompositorFrame(local_surface_id, frame, hit_test_region_list, submit_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec,
      null,
      null,
      [local_surface_id, frame, hit_test_region_list, submit_time],
      undefined,
      undefined
    );
  }

  didNotProduceFrame(ack) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec,
      null,
      null,
      [ack],
      undefined,
      undefined
    );
  }

  notifyNewLocalSurfaceIdExpectedWhilePaused() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  bindLayerContext(context, settings) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec,
      null,
      null,
      [context, settings],
      undefined,
      undefined
    );
  }

  setThreads(threads) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec,
      null,
      null,
      [threads],
      undefined,
      undefined
    );
  }

};

viz.mojom.CompositorFrameSink.getRemote = function() {
  let remote = new viz.mojom.CompositorFrameSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositorFrameSink',
    'context');
  return remote.$;
};

// ParamsSpec for SetParams
viz.mojom.CompositorFrameSink_SetParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.SetParams_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetNeedsBeginFrame
viz.mojom.CompositorFrameSink_SetNeedsBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.SetNeedsBeginFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'needs_begin_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubmitCompositorFrame
viz.mojom.CompositorFrameSink_SubmitCompositorFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.SubmitCompositorFrame_Params',
      packedSize: 40,
      fields: [
        { name: 'local_surface_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'hit_test_region_list', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'submit_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for DidNotProduceFrame
viz.mojom.CompositorFrameSink_DidNotProduceFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.DidNotProduceFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'ack', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyNewLocalSurfaceIdExpectedWhilePaused
viz.mojom.CompositorFrameSink_NotifyNewLocalSurfaceIdExpectedWhilePaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.NotifyNewLocalSurfaceIdExpectedWhilePaused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BindLayerContext
viz.mojom.CompositorFrameSink_BindLayerContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.BindLayerContext_Params',
      packedSize: 24,
      fields: [
        { name: 'context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetThreads
viz.mojom.CompositorFrameSink_SetThreads_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSink.SetThreads_Params',
      packedSize: 16,
      fields: [
        { name: 'threads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.CompositorFrameSinkPtr = viz.mojom.CompositorFrameSinkRemote;
viz.mojom.CompositorFrameSinkRequest = viz.mojom.CompositorFrameSinkPendingReceiver;


// Interface: CompositorFrameSinkClient
viz.mojom.CompositorFrameSinkClient = {};

viz.mojom.CompositorFrameSinkClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositorFrameSinkClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositorFrameSinkClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositorFrameSinkClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositorFrameSinkClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.CompositorFrameSinkClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didReceiveCompositorFrameAck(resources) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec,
      null,
      null,
      [resources],
      undefined,
      undefined
    );
  }

  onBeginFrame(args, details, resources) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec,
      null,
      null,
      [args, details, resources],
      undefined,
      undefined
    );
  }

  onBeginFramePausedChanged(paused) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      null,
      [paused],
      undefined,
      undefined
    );
  }

  reclaimResources(resources) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec,
      null,
      null,
      [resources],
      undefined,
      undefined
    );
  }

  onCompositorFrameTransitionDirectiveProcessed(sequence_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      null,
      [sequence_id],
      undefined,
      undefined
    );
  }

  onSurfaceEvicted(local_surface_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec,
      null,
      null,
      [local_surface_id],
      undefined,
      undefined
    );
  }

};

viz.mojom.CompositorFrameSinkClient.getRemote = function() {
  let remote = new viz.mojom.CompositorFrameSinkClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositorFrameSinkClient',
    'context');
  return remote.$;
};

// ParamsSpec for DidReceiveCompositorFrameAck
viz.mojom.CompositorFrameSinkClient_DidReceiveCompositorFrameAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.DidReceiveCompositorFrameAck_Params',
      packedSize: 16,
      fields: [
        { name: 'resources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBeginFrame
viz.mojom.CompositorFrameSinkClient_OnBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.OnBeginFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'resources', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnBeginFramePausedChanged
viz.mojom.CompositorFrameSinkClient_OnBeginFramePausedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.OnBeginFramePausedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'paused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReclaimResources
viz.mojom.CompositorFrameSinkClient_ReclaimResources_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.ReclaimResources_Params',
      packedSize: 16,
      fields: [
        { name: 'resources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCompositorFrameTransitionDirectiveProcessed
viz.mojom.CompositorFrameSinkClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.OnCompositorFrameTransitionDirectiveProcessed_Params',
      packedSize: 16,
      fields: [
        { name: 'sequence_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSurfaceEvicted
viz.mojom.CompositorFrameSinkClient_OnSurfaceEvicted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.CompositorFrameSinkClient.OnSurfaceEvicted_Params',
      packedSize: 16,
      fields: [
        { name: 'local_surface_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.CompositorFrameSinkClientPtr = viz.mojom.CompositorFrameSinkClientRemote;
viz.mojom.CompositorFrameSinkClientRequest = viz.mojom.CompositorFrameSinkClientPendingReceiver;

