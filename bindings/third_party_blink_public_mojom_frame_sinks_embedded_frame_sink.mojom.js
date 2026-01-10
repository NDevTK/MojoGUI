// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame_sinks/embedded_frame_sink.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};
var services = services || {};

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
      mojo.internal.StructField('local_surface_id', 0, 0, viz.mojom.LocalSurfaceIdSpec, null, false, 0, undefined),
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
};

blink.mojom.SurfaceEmbedderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLocalSurfaceId(local_surface_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec,
      null,
      [local_surface_id],
      false);
  }

  onOpacityChanged(is_opaque) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
};

blink.mojom.EmbeddedFrameSinkClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSurfaceEmbedder(embedder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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

blink.mojom.EmbeddedFrameSinkClientPtr = blink.mojom.EmbeddedFrameSinkClientRemote;
blink.mojom.EmbeddedFrameSinkClientRequest = blink.mojom.EmbeddedFrameSinkClientPendingReceiver;


// Interface: EmbeddedFrameSinkProvider
mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_Params', [
      mojo.internal.StructField('parent_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.EmbeddedFrameSinkClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_Params', [
      mojo.internal.StructField('bundle_id', 0, 0, viz.mojom.FrameSinkBundleIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkBundleRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkBundleClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('sink', 16, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('bundle_id', 8, 0, viz.mojom.FrameSinkBundleIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('client', 16, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('sink', 24, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_Params', [
      mojo.internal.StructField('parent_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 8, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('surface_client', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.EmbeddedFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('sink', 32, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('embedder', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.SurfaceEmbedderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
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
};

blink.mojom.EmbeddedFrameSinkProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerEmbeddedFrameSink(parent_frame_sink_id, frame_sink_id, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec,
      null,
      [parent_frame_sink_id, frame_sink_id, client],
      false);
  }

  registerEmbeddedFrameSinkBundle(bundle_id, receiver, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec,
      null,
      [bundle_id, receiver, client],
      false);
  }

  createCompositorFrameSink(frame_sink_id, client, sink) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, client, sink],
      false);
  }

  createBundledCompositorFrameSink(frame_sink_id, bundle_id, client, sink) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, bundle_id, client, sink],
      false);
  }

  createSimpleCompositorFrameSink(parent_frame_sink_id, frame_sink_id, surface_client, client, sink) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec,
      null,
      [parent_frame_sink_id, frame_sink_id, surface_client, client, sink],
      false);
  }

  connectToEmbedder(frame_sink_id, embedder) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec,
      null,
      [frame_sink_id, embedder],
      false);
  }

  registerFrameSinkHierarchy(frame_sink_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec,
      null,
      [frame_sink_id],
      false);
  }

  unregisterFrameSinkHierarchy(frame_sink_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
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

blink.mojom.EmbeddedFrameSinkProviderPtr = blink.mojom.EmbeddedFrameSinkProviderRemote;
blink.mojom.EmbeddedFrameSinkProviderRequest = blink.mojom.EmbeddedFrameSinkProviderPendingReceiver;

