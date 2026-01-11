// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame_sinks/embedded_frame_sink.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var viz = viz || {};

blink.mojom.SurfaceEmbedder = {};
blink.mojom.SurfaceEmbedder.$interfaceName = 'blink.mojom.SurfaceEmbedder';
blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec = { $: {} };
blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkClient = {};
blink.mojom.EmbeddedFrameSinkClient.$interfaceName = 'blink.mojom.EmbeddedFrameSinkClient';
blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkProvider = {};
blink.mojom.EmbeddedFrameSinkProvider.$interfaceName = 'blink.mojom.EmbeddedFrameSinkProvider';
blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec = { $: {} };
blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec = { $: {} };

// Interface: SurfaceEmbedder
mojo.internal.Struct(
    blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec, 'blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_Params', [
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec, 'blink.mojom.SurfaceEmbedder_OnOpacityChanged_Params', [
      mojo.internal.StructField('is_opaque', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SurfaceEmbedderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SurfaceEmbedderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SurfaceEmbedder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SurfaceEmbedderPendingReceiver,
      handle);
    this.$ = new blink.mojom.SurfaceEmbedderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setLocalSurfaceId(local_surface_id) {
    return this.$.setLocalSurfaceId(local_surface_id);
  }
  onOpacityChanged(is_opaque) {
    return this.$.onOpacityChanged(is_opaque);
  }
};

blink.mojom.SurfaceEmbedderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SurfaceEmbedder', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setLocalSurfaceId(local_surface_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec,
      null,
      [local_surface_id],
      false);
  }

  onOpacityChanged(is_opaque) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec,
      null,
      [is_opaque],
      false);
  }

};

blink.mojom.SurfaceEmbedder.getRemote = function() {
  let remote = new blink.mojom.SurfaceEmbedderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SurfaceEmbedder',
    'context');
  return remote.$;
};

blink.mojom.SurfaceEmbedderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SurfaceEmbedder', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec.$.structSpec);
          const result = this.impl.setLocalSurfaceId(params.local_surface_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onOpacityChanged(params.is_opaque);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.SurfaceEmbedderReceiver = blink.mojom.SurfaceEmbedderReceiver;

blink.mojom.SurfaceEmbedderPtr = blink.mojom.SurfaceEmbedderRemote;
blink.mojom.SurfaceEmbedderRequest = blink.mojom.SurfaceEmbedderPendingReceiver;


// Interface: EmbeddedFrameSinkClient
mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_Params', [
      mojo.internal.StructField('embedder', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.SurfaceEmbedderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.EmbeddedFrameSinkClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.EmbeddedFrameSinkClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedFrameSinkClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.EmbeddedFrameSinkClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.EmbeddedFrameSinkClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindSurfaceEmbedder(embedder) {
    return this.$.bindSurfaceEmbedder(embedder);
  }
};

blink.mojom.EmbeddedFrameSinkClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedFrameSinkClient', [
      { explicit: null },
    ]);
  }

  bindSurfaceEmbedder(embedder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec,
      null,
      [embedder],
      false);
  }

};

blink.mojom.EmbeddedFrameSinkClient.getRemote = function() {
  let remote = new blink.mojom.EmbeddedFrameSinkClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedFrameSinkClient',
    'context');
  return remote.$;
};

blink.mojom.EmbeddedFrameSinkClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedFrameSinkClient', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec.$.structSpec);
          const result = this.impl.bindSurfaceEmbedder(params.embedder);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.EmbeddedFrameSinkClientReceiver = blink.mojom.EmbeddedFrameSinkClientReceiver;

blink.mojom.EmbeddedFrameSinkClientPtr = blink.mojom.EmbeddedFrameSinkClientRemote;
blink.mojom.EmbeddedFrameSinkClientRequest = blink.mojom.EmbeddedFrameSinkClientPendingReceiver;


// Interface: EmbeddedFrameSinkProvider
mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_Params', [
      mojo.internal.StructField('parent_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.EmbeddedFrameSinkClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_Params', [
      mojo.internal.StructField('bundle_id', 0, 0, viz.mojom.FrameSinkBundleIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkBundleRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkBundleClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('sink', 16, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bundle_id', 8, 0, viz.mojom.FrameSinkBundleIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('sink', 24, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_Params', [
      mojo.internal.StructField('parent_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('surface_client', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.EmbeddedFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('sink', 32, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('embedder', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.SurfaceEmbedderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.EmbeddedFrameSinkProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.EmbeddedFrameSinkProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedFrameSinkProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.EmbeddedFrameSinkProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.EmbeddedFrameSinkProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerEmbeddedFrameSink(parent_frame_sink_id, frame_sink_id, client) {
    return this.$.registerEmbeddedFrameSink(parent_frame_sink_id, frame_sink_id, client);
  }
  registerEmbeddedFrameSinkBundle(bundle_id, receiver, client) {
    return this.$.registerEmbeddedFrameSinkBundle(bundle_id, receiver, client);
  }
  createCompositorFrameSink(frame_sink_id, client, sink) {
    return this.$.createCompositorFrameSink(frame_sink_id, client, sink);
  }
  createBundledCompositorFrameSink(frame_sink_id, bundle_id, client, sink) {
    return this.$.createBundledCompositorFrameSink(frame_sink_id, bundle_id, client, sink);
  }
  createSimpleCompositorFrameSink(parent_frame_sink_id, frame_sink_id, surface_client, client, sink) {
    return this.$.createSimpleCompositorFrameSink(parent_frame_sink_id, frame_sink_id, surface_client, client, sink);
  }
  connectToEmbedder(frame_sink_id, embedder) {
    return this.$.connectToEmbedder(frame_sink_id, embedder);
  }
  registerFrameSinkHierarchy(frame_sink_id) {
    return this.$.registerFrameSinkHierarchy(frame_sink_id);
  }
  unregisterFrameSinkHierarchy(frame_sink_id) {
    return this.$.unregisterFrameSinkHierarchy(frame_sink_id);
  }
};

blink.mojom.EmbeddedFrameSinkProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedFrameSinkProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  registerEmbeddedFrameSink(parent_frame_sink_id, frame_sink_id, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec,
      null,
      [parent_frame_sink_id, frame_sink_id, client],
      false);
  }

  registerEmbeddedFrameSinkBundle(bundle_id, receiver, client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec,
      null,
      [bundle_id, receiver, client],
      false);
  }

  createCompositorFrameSink(frame_sink_id, client, sink) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, client, sink],
      false);
  }

  createBundledCompositorFrameSink(frame_sink_id, bundle_id, client, sink) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, bundle_id, client, sink],
      false);
  }

  createSimpleCompositorFrameSink(parent_frame_sink_id, frame_sink_id, surface_client, client, sink) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec,
      null,
      [parent_frame_sink_id, frame_sink_id, surface_client, client, sink],
      false);
  }

  connectToEmbedder(frame_sink_id, embedder) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec,
      null,
      [frame_sink_id, embedder],
      false);
  }

  registerFrameSinkHierarchy(frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec,
      null,
      [frame_sink_id],
      false);
  }

  unregisterFrameSinkHierarchy(frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec,
      null,
      [frame_sink_id],
      false);
  }

};

blink.mojom.EmbeddedFrameSinkProvider.getRemote = function() {
  let remote = new blink.mojom.EmbeddedFrameSinkProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedFrameSinkProvider',
    'context');
  return remote.$;
};

blink.mojom.EmbeddedFrameSinkProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedFrameSinkProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec.$.structSpec);
          const result = this.impl.registerEmbeddedFrameSink(params.parent_frame_sink_id, params.frame_sink_id, params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec.$.structSpec);
          const result = this.impl.registerEmbeddedFrameSinkBundle(params.bundle_id, params.receiver, params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec.$.structSpec);
          const result = this.impl.createCompositorFrameSink(params.frame_sink_id, params.client, params.sink);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec.$.structSpec);
          const result = this.impl.createBundledCompositorFrameSink(params.frame_sink_id, params.bundle_id, params.client, params.sink);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec.$.structSpec);
          const result = this.impl.createSimpleCompositorFrameSink(params.parent_frame_sink_id, params.frame_sink_id, params.surface_client, params.client, params.sink);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec.$.structSpec);
          const result = this.impl.connectToEmbedder(params.frame_sink_id, params.embedder);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec.$.structSpec);
          const result = this.impl.registerFrameSinkHierarchy(params.frame_sink_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec.$.structSpec);
          const result = this.impl.unregisterFrameSinkHierarchy(params.frame_sink_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.EmbeddedFrameSinkProviderReceiver = blink.mojom.EmbeddedFrameSinkProviderReceiver;

blink.mojom.EmbeddedFrameSinkProviderPtr = blink.mojom.EmbeddedFrameSinkProviderRemote;
blink.mojom.EmbeddedFrameSinkProviderRequest = blink.mojom.EmbeddedFrameSinkProviderPendingReceiver;

