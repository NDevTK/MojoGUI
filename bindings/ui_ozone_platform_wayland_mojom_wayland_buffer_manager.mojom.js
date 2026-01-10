// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_buffer_manager.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};
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


// Interface: WaylandBufferManagerHost
ui.ozone.mojom.WaylandBufferManagerHost = {};

ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_manager_gpu_associated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(ui.ozone.mojom.WaylandBufferManagerGpuRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_Params',
      packedSize: 80,
      fields: [
        { name: 'dmabuf_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'strides', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'offsets', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'modifiers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'planes_count', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'color_space', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'hdr_metadata', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_Params',
      packedSize: 40,
      fields: [
        { name: 'shm_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_Params',
      packedSize: 40,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.FrameDataSpec, nullable: false, minVersion: 0 },
        { name: 'overlays', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(wl.mojom.WaylandOverlayConfigSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

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

// ParamsSpec for SetWaylandBufferManagerGpu
ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost.SetWaylandBufferManagerGpu_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_manager_gpu_associated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(ui.ozone.mojom.WaylandBufferManagerGpuRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDmabufBasedBuffer
ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost.CreateDmabufBasedBuffer_Params',
      packedSize: 80,
      fields: [
        { name: 'dmabuf_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'strides', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'offsets', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'modifiers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint64, false), nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'planes_count', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'color_space', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false, minVersion: 0 },
        { name: 'hdr_metadata', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.HDRMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_id', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// ParamsSpec for CreateShmBasedBuffer
ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost.CreateShmBasedBuffer_Params',
      packedSize: 40,
      fields: [
        { name: 'shm_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for CreateSinglePixelBuffer
ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost.CreateSinglePixelBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.SkColor4fSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DestroyBuffer
ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost.DestroyBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CommitOverlays
ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerHost.CommitOverlays_Params',
      packedSize: 40,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.FrameDataSpec, nullable: false, minVersion: 0 },
        { name: 'overlays', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(wl.mojom.WaylandOverlayConfigSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
ui.ozone.mojom.WaylandBufferManagerHostPtr = ui.ozone.mojom.WaylandBufferManagerHostRemote;
ui.ozone.mojom.WaylandBufferManagerHostRequest = ui.ozone.mojom.WaylandBufferManagerHostPendingReceiver;


// Interface: WaylandBufferManagerGpu
ui.ozone.mojom.WaylandBufferManagerGpu = {};

ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'remote_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ui.ozone.mojom.WaylandBufferManagerHostRemote), nullable: false, minVersion: 0 },
        { name: 'shared_image_formats_with_modifiers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(viz.mojom.SharedImageFormatSpec, mojo.internal.Array(mojo.internal.Uint64, false), false), nullable: false, minVersion: 0 },
        { name: 'supports_dma_buf', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_viewporter', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_acquire_fence', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_overlays', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_single_pixel_buffer', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_Params',
      packedSize: 40,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'swap_result', packedOffset: 28, packedBitOffset: 0, type: gfx.mojom.SwapResultSpec, nullable: false, minVersion: 0 },
        { name: 'release_fence_handle', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true, minVersion: 0 },
        { name: 'presentation_infos', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(wl.mojom.WaylandPresentationInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_Params',
      packedSize: 24,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'presentation_infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(wl.mojom.WaylandPresentationInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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

// ParamsSpec for Initialize
ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerGpu.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'remote_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ui.ozone.mojom.WaylandBufferManagerHostRemote), nullable: false, minVersion: 0 },
        { name: 'shared_image_formats_with_modifiers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(viz.mojom.SharedImageFormatSpec, mojo.internal.Array(mojo.internal.Uint64, false), false), nullable: false, minVersion: 0 },
        { name: 'supports_dma_buf', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_viewporter', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_acquire_fence', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_overlays', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_single_pixel_buffer', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnSubmission
ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerGpu.OnSubmission_Params',
      packedSize: 40,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'swap_result', packedOffset: 28, packedBitOffset: 0, type: gfx.mojom.SwapResultSpec, nullable: false, minVersion: 0 },
        { name: 'release_fence_handle', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true, minVersion: 0 },
        { name: 'presentation_infos', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(wl.mojom.WaylandPresentationInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for OnPresentation
ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ui.ozone.mojom.WaylandBufferManagerGpu.OnPresentation_Params',
      packedSize: 24,
      fields: [
        { name: 'widget', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.AcceleratedWidgetSpec, nullable: false, minVersion: 0 },
        { name: 'presentation_infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(wl.mojom.WaylandPresentationInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ui.ozone.mojom.WaylandBufferManagerGpuPtr = ui.ozone.mojom.WaylandBufferManagerGpuRemote;
ui.ozone.mojom.WaylandBufferManagerGpuRequest = ui.ozone.mojom.WaylandBufferManagerGpuPendingReceiver;

