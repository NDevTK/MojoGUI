// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_buffer_manager.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};
var services = services || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var ui = ui || {};

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
      mojo.internal.StructField('buffer_manager_gpu_associated', 0, 0, mojo.internal.AssociatedInterfaceProxy(ui.ozone.mojom.WaylandBufferManagerGpuRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_Params', [
      mojo.internal.StructField('dmabuf_fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('strides', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('offsets', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 32, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('format', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('planes_count', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('color_space', 40, 0, gfx.mojom.ColorSpaceSpec, null, false, 0, undefined),
      mojo.internal.StructField('hdr_metadata', 48, 0, gfx.mojom.HDRMetadataSpec, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_Params', [
      mojo.internal.StructField('shm_fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_Params', [
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColor4fSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, gfx.mojom.FrameDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('overlays', 16, 0, mojo.internal.Array(wl.mojom.WaylandOverlayConfigSpec, false), null, false, 0, undefined),
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
      [buffer_manager_gpu_associated]);
  }

  createDmabufBasedBuffer(dmabuf_fd, size, strides, offsets, modifiers, format, planes_count, color_space, hdr_metadata, buffer_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec,
      null,
      [dmabuf_fd, size, strides, offsets, modifiers, format, planes_count, color_space, hdr_metadata, buffer_id]);
  }

  createShmBasedBuffer(shm_fd, length, size, buffer_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec,
      null,
      [shm_fd, length, size, buffer_id]);
  }

  createSinglePixelBuffer(color, buffer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec,
      null,
      [color, buffer_id]);
  }

  destroyBuffer(buffer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec,
      null,
      [buffer_id]);
  }

  commitOverlays(widget, frame_id, data, overlays) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec,
      null,
      [widget, frame_id, data, overlays]);
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

ui.ozone.mojom.WaylandBufferManagerHostPtr = ui.ozone.mojom.WaylandBufferManagerHostRemote;
ui.ozone.mojom.WaylandBufferManagerHostRequest = ui.ozone.mojom.WaylandBufferManagerHostPendingReceiver;


// Interface: WaylandBufferManagerGpu
mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_Params', [
      mojo.internal.StructField('remote_host', 0, 0, mojo.internal.InterfaceProxy(ui.ozone.mojom.WaylandBufferManagerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('shared_image_formats_with_modifiers', 8, 0, mojo.internal.Map(viz.mojom.SharedImageFormatSpec, mojo.internal.Array(mojo.internal.Uint64, false), false), null, false, 0, undefined),
      mojo.internal.StructField('supports_dma_buf', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_viewporter', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_acquire_fence', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_overlays', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_single_pixel_buffer', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('swap_result', 28, 0, gfx.mojom.SwapResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('release_fence_handle', 8, 0, gfx.mojom.GpuFenceHandleSpec, null, true, 0, undefined),
      mojo.internal.StructField('presentation_infos', 16, 0, mojo.internal.Array(wl.mojom.WaylandPresentationInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_Params', [
      mojo.internal.StructField('widget', 0, 0, gfx.mojom.AcceleratedWidgetSpec, null, false, 0, undefined),
      mojo.internal.StructField('presentation_infos', 8, 0, mojo.internal.Array(wl.mojom.WaylandPresentationInfoSpec, false), null, false, 0, undefined),
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
      [remote_host, shared_image_formats_with_modifiers, supports_dma_buf, supports_viewporter, supports_acquire_fence, supports_overlays, supports_single_pixel_buffer]);
  }

  onSubmission(widget, frame_id, swap_result, release_fence_handle, presentation_infos) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec,
      null,
      [widget, frame_id, swap_result, release_fence_handle, presentation_infos]);
  }

  onPresentation(widget, presentation_infos) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec,
      null,
      [widget, presentation_infos]);
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

ui.ozone.mojom.WaylandBufferManagerGpuPtr = ui.ozone.mojom.WaylandBufferManagerGpuRemote;
ui.ozone.mojom.WaylandBufferManagerGpuRequest = ui.ozone.mojom.WaylandBufferManagerGpuPendingReceiver;

