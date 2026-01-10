// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_protected_buffer_allocator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};

arc.mojom.VideoProtectedBufferAllocator = {};
arc.mojom.VideoProtectedBufferAllocator.$interfaceName = 'arc.mojom.VideoProtectedBufferAllocator';
arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec = { $: {} };
arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParamsSpec = { $: {} };
arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec = { $: {} };
arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ResponseParamsSpec = { $: {} };
arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec = { $: {} };

// Interface: VideoProtectedBufferAllocator
mojo.internal.Struct(
    arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec, 'arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_Params', [
      mojo.internal.StructField('handle_fd', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParamsSpec, 'arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec, 'arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_Params', [
      mojo.internal.StructField('handle_fd', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('pixel_format', 4, 0, arc.mojom.HalPixelFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('picture_size', 8, 0, arc.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ResponseParamsSpec, 'arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec, 'arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_Params', [
      mojo.internal.StructField('handle_fd', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VideoProtectedBufferAllocatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoProtectedBufferAllocatorRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoProtectedBufferAllocator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoProtectedBufferAllocatorPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoProtectedBufferAllocatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoProtectedBufferAllocatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  allocateProtectedSharedMemory(handle_fd, size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec,
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParamsSpec,
      [handle_fd, size],
      false);
  }

  allocateProtectedNativePixmap(handle_fd, pixel_format, picture_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec,
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ResponseParamsSpec,
      [handle_fd, pixel_format, picture_size],
      false);
  }

  releaseProtectedBuffer(handle_fd) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec,
      null,
      [handle_fd],
      false);
  }

};

arc.mojom.VideoProtectedBufferAllocator.getRemote = function() {
  let remote = new arc.mojom.VideoProtectedBufferAllocatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoProtectedBufferAllocator',
    'context');
  return remote.$;
};

arc.mojom.VideoProtectedBufferAllocatorPtr = arc.mojom.VideoProtectedBufferAllocatorRemote;
arc.mojom.VideoProtectedBufferAllocatorRequest = arc.mojom.VideoProtectedBufferAllocatorPendingReceiver;

