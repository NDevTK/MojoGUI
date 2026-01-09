// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_protected_buffer_allocator.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: VideoProtectedBufferAllocator
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

// Legacy compatibility
arc.mojom.VideoProtectedBufferAllocatorPtr = arc.mojom.VideoProtectedBufferAllocatorRemote;
arc.mojom.VideoProtectedBufferAllocatorRequest = arc.mojom.VideoProtectedBufferAllocatorPendingReceiver;

