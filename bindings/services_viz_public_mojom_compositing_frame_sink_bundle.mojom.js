// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_sink_bundle.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Struct: BundledFrameSubmission
viz.mojom.BundledFrameSubmissionSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BundledFrameSubmission',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BundledFrameSubmissionDataSpec, nullable: false },
        { name: 'sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BundledCompositorFrame
viz.mojom.BundledCompositorFrameSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BundledCompositorFrame',
      packedSize: 40,
      fields: [
        { name: 'local_surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.CompositorFrameSpec, nullable: false },
        { name: 'hit_test_region_list', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.HitTestRegionListSpec, nullable: true },
        { name: 'submit_time', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BundledReturnedResources
viz.mojom.BundledReturnedResourcesSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BundledReturnedResources',
      packedSize: 24,
      fields: [
        { name: 'resources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BeginFrameInfo
viz.mojom.BeginFrameInfoSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.BeginFrameInfo',
      packedSize: 40,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.BeginFrameArgsSpec, nullable: false },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'resources', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sink_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FrameSinkBundle
viz.mojom.FrameSinkBundle = {};

viz.mojom.FrameSinkBundlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkBundleRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkBundle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkBundlePendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkBundleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkBundleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setNeedsBeginFrame(sink_id, needs_begin_frame) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec,
      null,
      [sink_id, needs_begin_frame]);
  }

  submit(submissions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkBundle_Submit_ParamsSpec,
      null,
      [submissions]);
  }

  setThreads(sink_id, threads) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec,
      null,
      [sink_id, threads]);
  }

};

viz.mojom.FrameSinkBundle.getRemote = function() {
  let remote = new viz.mojom.FrameSinkBundleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkBundle',
    'context');
  return remote.$;
};

// ParamsSpec for SetNeedsBeginFrame
viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkBundle.SetNeedsBeginFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'needs_begin_frame', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Submit
viz.mojom.FrameSinkBundle_Submit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkBundle.Submit_Params',
      packedSize: 16,
      fields: [
        { name: 'submissions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetThreads
viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkBundle.SetThreads_Params',
      packedSize: 24,
      fields: [
        { name: 'threads', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'sink_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinkBundlePtr = viz.mojom.FrameSinkBundleRemote;
viz.mojom.FrameSinkBundleRequest = viz.mojom.FrameSinkBundlePendingReceiver;


// Interface: FrameSinkBundleClient
viz.mojom.FrameSinkBundleClient = {};

viz.mojom.FrameSinkBundleClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkBundleClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkBundleClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkBundleClientPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkBundleClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkBundleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  flushNotifications(acks, begin_frames, reclaimed_resources) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec,
      null,
      [acks, begin_frames, reclaimed_resources]);
  }

  onBeginFramePausedChanged(sink_id, paused) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      [sink_id, paused]);
  }

  onCompositorFrameTransitionDirectiveProcessed(sink_id, sequence_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [sink_id, sequence_id]);
  }

};

viz.mojom.FrameSinkBundleClient.getRemote = function() {
  let remote = new viz.mojom.FrameSinkBundleClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkBundleClient',
    'context');
  return remote.$;
};

// ParamsSpec for FlushNotifications
viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkBundleClient.FlushNotifications_Params',
      packedSize: 32,
      fields: [
        { name: 'acks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'begin_frames', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'reclaimed_resources', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBeginFramePausedChanged
viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkBundleClient.OnBeginFramePausedChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'paused', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCompositorFrameTransitionDirectiveProcessed
viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkBundleClient.OnCompositorFrameTransitionDirectiveProcessed_Params',
      packedSize: 16,
      fields: [
        { name: 'sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sequence_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinkBundleClientPtr = viz.mojom.FrameSinkBundleClientRemote;
viz.mojom.FrameSinkBundleClientRequest = viz.mojom.FrameSinkBundleClientPendingReceiver;

