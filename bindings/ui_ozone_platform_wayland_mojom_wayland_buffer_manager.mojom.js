// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_buffer_manager.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};
var viz = viz || {};
var skia = skia || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var wl = wl || {};

ui.ozone.mojom.WaylandBufferManagerHost = {};
ui.ozone.mojom.WaylandBufferManagerHost.$interfaceName = 'ui.ozone.mojom.WaylandBufferManagerHost';
ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec = { $: {} };
ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec = { $: {} };
ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec = { $: {} };
ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec = { $: {} };
ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec = { $: {} };
ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec = { $: {} };
ui.ozone.mojom.WaylandBufferManagerGpu = {};
ui.ozone.mojom.WaylandBufferManagerGpu.$interfaceName = 'ui.ozone.mojom.WaylandBufferManagerGpu';
ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec = { $: {} };
ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec = { $: {} };
ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec = { $: {} };

// Interface: WaylandBufferManagerHost
mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_Params', [
      mojo.internal.StructField('buffer_manager_gpu_associated', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_Params', [
      mojo.internal.StructField('dmabuf_fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('strides', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('offsets', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 32, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('color_space', 40, 0, gfx.mojom.ColorSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hdr_metadata', 48, 0, gfx.mojom.HDRMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('format', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('planes_count', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_Params', [
      mojo.internal.StructField('shm_fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_Params', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, gfx.mojom.FrameDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('overlays', 16, 0, mojo.internal.Array(wl.mojom.WaylandOverlayConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

ui.ozone.mojom.WaylandBufferManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.ozone.mojom.WaylandBufferManagerHostRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.WaylandBufferManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.ozone.mojom.WaylandBufferManagerHostPendingReceiver,
      handle);
    this.$ = new ui.ozone.mojom.WaylandBufferManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.ozone.mojom.WaylandBufferManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setWaylandBufferManagerGpu(buffer_manager_gpu_associated) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec,
      null,
      [buffer_manager_gpu_associated],
      false);
  }

  createDmabufBasedBuffer(dmabuf_fd, size, strides, offsets, modifiers, format, planes_count, color_space, hdr_metadata, buffer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec,
      null,
      [dmabuf_fd, size, strides, offsets, modifiers, format, planes_count, color_space, hdr_metadata, buffer_id],
      false);
  }

  createShmBasedBuffer(shm_fd, length, size, buffer_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec,
      null,
      [shm_fd, length, size, buffer_id],
      false);
  }

  createSinglePixelBuffer(color, buffer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec,
      null,
      [color, buffer_id],
      false);
  }

  destroyBuffer(buffer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  commitOverlays(widget, frame_id, data, overlays) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec,
      null,
      [widget, frame_id, data, overlays],
      false);
  }

};

ui.ozone.mojom.WaylandBufferManagerHost.getRemote = function() {
  let remote = new ui.ozone.mojom.WaylandBufferManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.WaylandBufferManagerHost',
    'context');
  return remote.$;
};

ui.ozone.mojom.WaylandBufferManagerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setWaylandBufferManagerGpu');
          const result = this.impl.setWaylandBufferManagerGpu(params.buffer_manager_gpu_associated);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createDmabufBasedBuffer');
          const result = this.impl.createDmabufBasedBuffer(params.dmabuf_fd, params.size, params.strides, params.offsets, params.modifiers, params.format, params.planes_count, params.color_space, params.hdr_metadata, params.buffer_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createShmBasedBuffer');
          const result = this.impl.createShmBasedBuffer(params.shm_fd, params.length, params.size, params.buffer_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createSinglePixelBuffer');
          const result = this.impl.createSinglePixelBuffer(params.color, params.buffer_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.destroyBuffer');
          const result = this.impl.destroyBuffer(params.buffer_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.commitOverlays');
          const result = this.impl.commitOverlays(params.widget, params.frame_id, params.data, params.overlays);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ui.ozone.mojom.WaylandBufferManagerHostReceiver = ui.ozone.mojom.WaylandBufferManagerHostReceiver;

ui.ozone.mojom.WaylandBufferManagerHostPtr = ui.ozone.mojom.WaylandBufferManagerHostRemote;
ui.ozone.mojom.WaylandBufferManagerHostRequest = ui.ozone.mojom.WaylandBufferManagerHostPendingReceiver;


// Interface: WaylandBufferManagerGpu
mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_Params', [
      mojo.internal.StructField('remote_host', 0, 0, mojo.internal.InterfaceProxy(ui.ozone.mojom.WaylandBufferManagerHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('shared_image_formats_with_modifiers', 8, 0, mojo.internal.Map(viz.mojom.SharedImageFormatSpec.$, mojo.internal.Array(mojo.internal.Uint64, false), false), null, false, 0, undefined),
      mojo.internal.StructField('supports_dma_buf', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_viewporter', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_acquire_fence', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_overlays', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_single_pixel_buffer', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('swap_result', 8, 0, gfx.mojom.SwapResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('release_fence_handle', 16, 0, gfx.mojom.GpuFenceHandleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('presentation_infos', 24, 0, mojo.internal.Array(wl.mojom.WaylandPresentationInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('presentation_infos', 8, 0, mojo.internal.Array(wl.mojom.WaylandPresentationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

ui.ozone.mojom.WaylandBufferManagerGpuPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ui.ozone.mojom.WaylandBufferManagerGpuRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.WaylandBufferManagerGpu';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ui.ozone.mojom.WaylandBufferManagerGpuPendingReceiver,
      handle);
    this.$ = new ui.ozone.mojom.WaylandBufferManagerGpuRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ui.ozone.mojom.WaylandBufferManagerGpuRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(remote_host, shared_image_formats_with_modifiers, supports_dma_buf, supports_viewporter, supports_acquire_fence, supports_overlays, supports_single_pixel_buffer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec,
      null,
      [remote_host, shared_image_formats_with_modifiers, supports_dma_buf, supports_viewporter, supports_acquire_fence, supports_overlays, supports_single_pixel_buffer],
      false);
  }

  onSubmission(widget, frame_id, swap_result, release_fence_handle, presentation_infos) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec,
      null,
      [widget, frame_id, swap_result, release_fence_handle, presentation_infos],
      false);
  }

  onPresentation(widget, presentation_infos) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec,
      null,
      [widget, presentation_infos],
      false);
  }

};

ui.ozone.mojom.WaylandBufferManagerGpu.getRemote = function() {
  let remote = new ui.ozone.mojom.WaylandBufferManagerGpuRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.WaylandBufferManagerGpu',
    'context');
  return remote.$;
};

ui.ozone.mojom.WaylandBufferManagerGpuReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.remote_host, params.shared_image_formats_with_modifiers, params.supports_dma_buf, params.supports_viewporter, params.supports_acquire_fence, params.supports_overlays, params.supports_single_pixel_buffer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSubmission');
          const result = this.impl.onSubmission(params.widget, params.frame_id, params.swap_result, params.release_fence_handle, params.presentation_infos);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPresentation');
          const result = this.impl.onPresentation(params.widget, params.presentation_infos);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ui.ozone.mojom.WaylandBufferManagerGpuReceiver = ui.ozone.mojom.WaylandBufferManagerGpuReceiver;

ui.ozone.mojom.WaylandBufferManagerGpuPtr = ui.ozone.mojom.WaylandBufferManagerGpuRemote;
ui.ozone.mojom.WaylandBufferManagerGpuRequest = ui.ozone.mojom.WaylandBufferManagerGpuPendingReceiver;

