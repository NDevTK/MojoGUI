// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame_sinks/embedded_frame_sink.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SurfaceEmbedder
blink.mojom.SurfaceEmbedder = {};

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
      [local_surface_id]);
  }

  onOpacityChanged(is_opaque) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec,
      null,
      [is_opaque]);
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

// ParamsSpec for SetLocalSurfaceId
blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SurfaceEmbedder.SetLocalSurfaceId_Params',
      packedSize: 16,
      fields: [
        { name: 'local_surface_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.LocalSurfaceIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnOpacityChanged
blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SurfaceEmbedder.OnOpacityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_opaque', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SurfaceEmbedderPtr = blink.mojom.SurfaceEmbedderRemote;
blink.mojom.SurfaceEmbedderRequest = blink.mojom.SurfaceEmbedderPendingReceiver;


// Interface: EmbeddedFrameSinkClient
blink.mojom.EmbeddedFrameSinkClient = {};

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
      [embedder]);
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

// ParamsSpec for BindSurfaceEmbedder
blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkClient.BindSurfaceEmbedder_Params',
      packedSize: 16,
      fields: [
        { name: 'embedder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.EmbeddedFrameSinkClientPtr = blink.mojom.EmbeddedFrameSinkClientRemote;
blink.mojom.EmbeddedFrameSinkClientRequest = blink.mojom.EmbeddedFrameSinkClientPendingReceiver;


// Interface: EmbeddedFrameSinkProvider
blink.mojom.EmbeddedFrameSinkProvider = {};

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
      [parent_frame_sink_id, frame_sink_id, client]);
  }

  registerEmbeddedFrameSinkBundle(bundle_id, receiver, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec,
      null,
      [bundle_id, receiver, client]);
  }

  createCompositorFrameSink(frame_sink_id, client, sink) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, client, sink]);
  }

  createBundledCompositorFrameSink(frame_sink_id, bundle_id, client, sink) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec,
      null,
      [frame_sink_id, bundle_id, client, sink]);
  }

  createSimpleCompositorFrameSink(parent_frame_sink_id, frame_sink_id, surface_client, client, sink) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec,
      null,
      [parent_frame_sink_id, frame_sink_id, surface_client, client, sink]);
  }

  connectToEmbedder(frame_sink_id, embedder) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec,
      null,
      [frame_sink_id, embedder]);
  }

  registerFrameSinkHierarchy(frame_sink_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec,
      null,
      [frame_sink_id]);
  }

  unregisterFrameSinkHierarchy(frame_sink_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec,
      null,
      [frame_sink_id]);
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

// ParamsSpec for RegisterEmbeddedFrameSink
blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkProvider.RegisterEmbeddedFrameSink_Params',
      packedSize: 32,
      fields: [
        { name: 'parent_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
        { name: 'frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterEmbeddedFrameSinkBundle
blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkProvider.RegisterEmbeddedFrameSinkBundle_Params',
      packedSize: 24,
      fields: [
        { name: 'bundle_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkBundleIdSpec, nullable: false },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateCompositorFrameSink
blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkProvider.CreateCompositorFrameSink_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'sink', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateBundledCompositorFrameSink
blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkProvider.CreateBundledCompositorFrameSink_Params',
      packedSize: 32,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
        { name: 'bundle_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.FrameSinkBundleIdSpec, nullable: false },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'sink', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSimpleCompositorFrameSink
blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkProvider.CreateSimpleCompositorFrameSink_Params',
      packedSize: 40,
      fields: [
        { name: 'parent_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
        { name: 'frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
        { name: 'surface_client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'client', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'sink', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToEmbedder
blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkProvider.ConnectToEmbedder_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
        { name: 'embedder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterFrameSinkHierarchy
blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkProvider.RegisterFrameSinkHierarchy_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnregisterFrameSinkHierarchy
blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.EmbeddedFrameSinkProvider.UnregisterFrameSinkHierarchy_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.EmbeddedFrameSinkProviderPtr = blink.mojom.EmbeddedFrameSinkProviderRemote;
blink.mojom.EmbeddedFrameSinkProviderRequest = blink.mojom.EmbeddedFrameSinkProviderPendingReceiver;

