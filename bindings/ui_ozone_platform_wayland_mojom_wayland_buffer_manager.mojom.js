// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_buffer_manager.mojom
// Module: ui.ozone.mojom

'use strict';

// Module namespace
var ui = ui || {};
ui.ozone = ui.ozone || {};
ui.ozone.mojom = ui.ozone.mojom || {};


// Interface: WaylandBufferManagerHost
ui.ozone.mojom.WaylandBufferManagerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ui.ozone.mojom.WaylandBufferManagerHost';
  }

  setWaylandBufferManagerGpu(buffer_manager_gpu_associated) {
    // Method: SetWaylandBufferManagerGpu
    // Call: SetWaylandBufferManagerGpu(buffer_manager_gpu_associated)
  }

  format(gfx::BufferFormat) {
    // Method: format
    // Call: format(gfx::BufferFormat)
  }

  createDmabufBasedBuffer(dmabuf_fd, size, strides, offsets, modifiers, format, planes_count, color_space, hdr_metadata, buffer_id) {
    // Method: CreateDmabufBasedBuffer
    // Call: CreateDmabufBasedBuffer(dmabuf_fd, size, strides, offsets, modifiers, format, planes_count, color_space, hdr_metadata, buffer_id)
  }

  createShmBasedBuffer(shm_fd, length, size, buffer_id) {
    // Method: CreateShmBasedBuffer
    // Call: CreateShmBasedBuffer(shm_fd, length, size, buffer_id)
  }

  createSinglePixelBuffer(color, buffer_id) {
    // Method: CreateSinglePixelBuffer
    // Call: CreateSinglePixelBuffer(color, buffer_id)
  }

  destroyBuffer(buffer_id) {
    // Method: DestroyBuffer
    // Call: DestroyBuffer(buffer_id)
  }

  commitOverlays(widget, frame_id, data, overlays) {
    // Method: CommitOverlays
    // Call: CommitOverlays(widget, frame_id, data, overlays)
  }

};

ui.ozone.mojom.WaylandBufferManagerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WaylandBufferManagerGpu
ui.ozone.mojom.WaylandBufferManagerGpuPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ui.ozone.mojom.WaylandBufferManagerGpu';
  }

  initialize(remote_host, shared_image_formats_with_modifiers, supports_dma_buf, supports_viewporter, supports_acquire_fence, supports_overlays, supports_single_pixel_buffer) {
    // Method: Initialize
    // Call: Initialize(remote_host, shared_image_formats_with_modifiers, supports_dma_buf, supports_viewporter, supports_acquire_fence, supports_overlays, supports_single_pixel_buffer)
  }

  onSubmission(widget, frame_id, swap_result, release_fence_handle, presentation_infos) {
    // Method: OnSubmission
    // Call: OnSubmission(widget, frame_id, swap_result, release_fence_handle, presentation_infos)
  }

  onSubmission() {
    // Method: OnSubmission
    // Call: OnSubmission()
  }

  onPresentation(widget, presentation_infos) {
    // Method: OnPresentation
    // Call: OnPresentation(widget, presentation_infos)
  }

};

ui.ozone.mojom.WaylandBufferManagerGpuRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
