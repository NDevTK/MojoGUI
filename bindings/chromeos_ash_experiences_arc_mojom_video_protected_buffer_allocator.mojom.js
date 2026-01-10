// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_protected_buffer_allocator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: VideoProtectedBufferAllocator
arc.mojom.VideoProtectedBufferAllocator = {};

arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_Params',
      packedSize: 24,
      fields: [
        { name: 'handle_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_Params',
      packedSize: 24,
      fields: [
        { name: 'handle_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'pixel_format', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.HalPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'picture_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'handle_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [handle_fd, size]);
  }

  allocateProtectedNativePixmap(handle_fd, pixel_format, picture_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec,
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ResponseParamsSpec,
      [handle_fd, pixel_format, picture_size]);
  }

  releaseProtectedBuffer(handle_fd) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec,
      null,
      [handle_fd]);
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

// ParamsSpec for AllocateProtectedSharedMemory
arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoProtectedBufferAllocator.AllocateProtectedSharedMemory_Params',
      packedSize: 24,
      fields: [
        { name: 'handle_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoProtectedBufferAllocator.AllocateProtectedSharedMemory_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AllocateProtectedNativePixmap
arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoProtectedBufferAllocator.AllocateProtectedNativePixmap_Params',
      packedSize: 24,
      fields: [
        { name: 'handle_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
        { name: 'pixel_format', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.HalPixelFormatSpec, nullable: false, minVersion: 0 },
        { name: 'picture_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoProtectedBufferAllocator.AllocateProtectedNativePixmap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReleaseProtectedBuffer
arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoProtectedBufferAllocator.ReleaseProtectedBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'handle_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoProtectedBufferAllocatorPtr = arc.mojom.VideoProtectedBufferAllocatorRemote;
arc.mojom.VideoProtectedBufferAllocatorRequest = arc.mojom.VideoProtectedBufferAllocatorPendingReceiver;

