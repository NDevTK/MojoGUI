// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame_sinks/embedded_frame_sink.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SurfaceEmbedder
blink.mojom.SurfaceEmbedderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.SurfaceEmbedder';
  }

  setLocalSurfaceId(local_surface_id) {
    // Method: SetLocalSurfaceId
    // Call: SetLocalSurfaceId(local_surface_id)
  }

  onOpacityChanged(is_opaque) {
    // Method: OnOpacityChanged
    // Call: OnOpacityChanged(is_opaque)
  }

};

blink.mojom.SurfaceEmbedderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EmbeddedFrameSinkClient
blink.mojom.EmbeddedFrameSinkClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.EmbeddedFrameSinkClient';
  }

  bindSurfaceEmbedder(embedder) {
    // Method: BindSurfaceEmbedder
    // Call: BindSurfaceEmbedder(embedder)
  }

};

blink.mojom.EmbeddedFrameSinkClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EmbeddedFrameSinkProvider
blink.mojom.EmbeddedFrameSinkProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.EmbeddedFrameSinkProvider';
  }

  registerEmbeddedFrameSink(parent_frame_sink_id, frame_sink_id, client) {
    // Method: RegisterEmbeddedFrameSink
    // Call: RegisterEmbeddedFrameSink(parent_frame_sink_id, frame_sink_id, client)
  }

  registerEmbeddedFrameSinkBundle(bundle_id, receiver, client) {
    // Method: RegisterEmbeddedFrameSinkBundle
    // Call: RegisterEmbeddedFrameSinkBundle(bundle_id, receiver, client)
  }

  createCompositorFrameSink(frame_sink_id, client, sink) {
    // Method: CreateCompositorFrameSink
    // Call: CreateCompositorFrameSink(frame_sink_id, client, sink)
  }

  createBundledCompositorFrameSink(frame_sink_id, bundle_id, client, sink) {
    // Method: CreateBundledCompositorFrameSink
    // Call: CreateBundledCompositorFrameSink(frame_sink_id, bundle_id, client, sink)
  }

  createSimpleCompositorFrameSink(parent_frame_sink_id, frame_sink_id, surface_client, client, sink) {
    // Method: CreateSimpleCompositorFrameSink
    // Call: CreateSimpleCompositorFrameSink(parent_frame_sink_id, frame_sink_id, surface_client, client, sink)
  }

  connectToEmbedder(frame_sink_id, embedder) {
    // Method: ConnectToEmbedder
    // Call: ConnectToEmbedder(frame_sink_id, embedder)
  }

  registerFrameSinkHierarchy(frame_sink_id) {
    // Method: RegisterFrameSinkHierarchy
    // Call: RegisterFrameSinkHierarchy(frame_sink_id)
  }

  unregisterFrameSinkHierarchy(frame_sink_id) {
    // Method: UnregisterFrameSinkHierarchy
    // Call: UnregisterFrameSinkHierarchy(frame_sink_id)
  }

};

blink.mojom.EmbeddedFrameSinkProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
