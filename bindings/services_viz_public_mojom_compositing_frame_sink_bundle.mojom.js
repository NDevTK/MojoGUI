// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/frame_sink_bundle.mojom
// Module: viz.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var mojo_base = mojo_base || {};

viz.mojom.BundledFrameSubmissionDataSpec = { $: {} };
viz.mojom.BundledFrameSubmissionSpec = { $: {} };
viz.mojom.BundledCompositorFrameSpec = { $: {} };
viz.mojom.BundledReturnedResourcesSpec = { $: {} };
viz.mojom.BeginFrameInfoSpec = { $: {} };
viz.mojom.FrameSinkBundle = {};
viz.mojom.FrameSinkBundle.$interfaceName = 'viz.mojom.FrameSinkBundle';
viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundle_Submit_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundleClient = {};
viz.mojom.FrameSinkBundleClient.$interfaceName = 'viz.mojom.FrameSinkBundleClient';
viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec = { $: {} };
viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec = { $: {} };

// Union: BundledFrameSubmissionData
mojo.internal.Union(
    viz.mojom.BundledFrameSubmissionDataSpec, 'viz.mojom.BundledFrameSubmissionData', {
      'frame': {
        'ordinal': 0,
        'type': viz.mojom.BundledCompositorFrameSpec.$,
        'nullable': false,
      },
      'did_not_produce_frame': {
        'ordinal': 1,
        'type': viz.mojom.BeginFrameAckSpec.$,
        'nullable': false,
      },
    });

// Struct: BundledFrameSubmission
mojo.internal.Struct(
    viz.mojom.BundledFrameSubmissionSpec, 'viz.mojom.BundledFrameSubmission', [
      mojo.internal.StructField('data', 0, 0, viz.mojom.BundledFrameSubmissionDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BundledCompositorFrame
mojo.internal.Struct(
    viz.mojom.BundledCompositorFrameSpec, 'viz.mojom.BundledCompositorFrame', [
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame', 8, 0, viz.mojom.CompositorFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_test_region_list', 16, 0, viz.mojom.HitTestRegionListSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('submit_time', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BundledReturnedResources
mojo.internal.Struct(
    viz.mojom.BundledReturnedResourcesSpec, 'viz.mojom.BundledReturnedResources', [
      mojo.internal.StructField('resources', 0, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BeginFrameInfo
mojo.internal.Struct(
    viz.mojom.BeginFrameInfoSpec, 'viz.mojom.BeginFrameInfo', [
      mojo.internal.StructField('args', 0, 0, viz.mojom.BeginFrameArgsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.Map(mojo.internal.Uint32, viz.mojom.FrameTimingDetailsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resources', 16, 0, mojo.internal.Array(viz.mojom.ReturnedResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: FrameSinkBundle
mojo.internal.Struct(
    viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec, 'viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('needs_begin_frame', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkBundle_Submit_ParamsSpec, 'viz.mojom.FrameSinkBundle_Submit_Params', [
      mojo.internal.StructField('submissions', 0, 0, mojo.internal.Array(viz.mojom.BundledFrameSubmissionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec, 'viz.mojom.FrameSinkBundle_SetThreads_Params', [
      mojo.internal.StructField('threads', 0, 0, mojo.internal.Array(viz.mojom.ThreadSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('sink_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
  setNeedsBeginFrame(sink_id, needs_begin_frame) {
    return this.$.setNeedsBeginFrame(sink_id, needs_begin_frame);
  }
  submit(submissions) {
    return this.$.submit(submissions);
  }
  setThreads(sink_id, threads) {
    return this.$.setThreads(sink_id, threads);
  }
};

viz.mojom.FrameSinkBundleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkBundle', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setNeedsBeginFrame(sink_id, needs_begin_frame) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec,
      null,
      [sink_id, needs_begin_frame],
      false);
  }

  submit(submissions) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.FrameSinkBundle_Submit_ParamsSpec,
      null,
      [submissions],
      false);
  }

  setThreads(sink_id, threads) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec,
      null,
      [sink_id, threads],
      false);
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

viz.mojom.FrameSinkBundleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkBundle', [
      { explicit: null },
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
             decoder.decodeStructInline(viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundle_Submit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundle_SetNeedsBeginFrame_ParamsSpec.$.structSpec);
          const result = this.impl.setNeedsBeginFrame(params.sink_id, params.needs_begin_frame);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundle_Submit_ParamsSpec.$.structSpec);
          const result = this.impl.submit(params.submissions);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundle_SetThreads_ParamsSpec.$.structSpec);
          const result = this.impl.setThreads(params.sink_id, params.threads);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.FrameSinkBundleReceiver = viz.mojom.FrameSinkBundleReceiver;

viz.mojom.FrameSinkBundlePtr = viz.mojom.FrameSinkBundleRemote;
viz.mojom.FrameSinkBundleRequest = viz.mojom.FrameSinkBundlePendingReceiver;


// Interface: FrameSinkBundleClient
mojo.internal.Struct(
    viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_FlushNotifications_Params', [
      mojo.internal.StructField('acks', 0, 0, mojo.internal.Array(viz.mojom.BundledReturnedResourcesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('begin_frames', 8, 0, mojo.internal.Array(viz.mojom.BeginFrameInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reclaimed_resources', 16, 0, mojo.internal.Array(viz.mojom.BundledReturnedResourcesSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('paused', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec, 'viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sequence_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
  flushNotifications(acks, begin_frames, reclaimed_resources) {
    return this.$.flushNotifications(acks, begin_frames, reclaimed_resources);
  }
  onBeginFramePausedChanged(sink_id, paused) {
    return this.$.onBeginFramePausedChanged(sink_id, paused);
  }
  onCompositorFrameTransitionDirectiveProcessed(sink_id, sequence_id) {
    return this.$.onCompositorFrameTransitionDirectiveProcessed(sink_id, sequence_id);
  }
};

viz.mojom.FrameSinkBundleClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkBundleClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  flushNotifications(acks, begin_frames, reclaimed_resources) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec,
      null,
      [acks, begin_frames, reclaimed_resources],
      false);
  }

  onBeginFramePausedChanged(sink_id, paused) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec,
      null,
      [sink_id, paused],
      false);
  }

  onCompositorFrameTransitionDirectiveProcessed(sink_id, sequence_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec,
      null,
      [sink_id, sequence_id],
      false);
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

viz.mojom.FrameSinkBundleClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkBundleClient', [
      { explicit: null },
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
             decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_FlushNotifications_ParamsSpec.$.structSpec);
          const result = this.impl.flushNotifications(params.acks, params.begin_frames, params.reclaimed_resources);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_OnBeginFramePausedChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onBeginFramePausedChanged(params.sink_id, params.paused);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.FrameSinkBundleClient_OnCompositorFrameTransitionDirectiveProcessed_ParamsSpec.$.structSpec);
          const result = this.impl.onCompositorFrameTransitionDirectiveProcessed(params.sink_id, params.sequence_id);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

viz.mojom.FrameSinkBundleClientReceiver = viz.mojom.FrameSinkBundleClientReceiver;

viz.mojom.FrameSinkBundleClientPtr = viz.mojom.FrameSinkBundleClientRemote;
viz.mojom.FrameSinkBundleClientRequest = viz.mojom.FrameSinkBundleClientPendingReceiver;

