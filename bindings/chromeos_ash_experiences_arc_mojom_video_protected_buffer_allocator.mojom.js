// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_protected_buffer_allocator.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var sandbox = sandbox || {};

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
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('handle_fd', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParamsSpec, 'arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec, 'arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_Params', [
      mojo.internal.StructField('pixel_format', 0, 0, arc.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('picture_size', 8, 0, arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('handle_fd', 16, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
  allocateProtectedSharedMemory(handle_fd, size) {
    return this.$.allocateProtectedSharedMemory(handle_fd, size);
  }
  allocateProtectedNativePixmap(handle_fd, pixel_format, picture_size) {
    return this.$.allocateProtectedNativePixmap(handle_fd, pixel_format, picture_size);
  }
  releaseProtectedBuffer(handle_fd) {
    return this.$.releaseProtectedBuffer(handle_fd);
  }
};

arc.mojom.VideoProtectedBufferAllocatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoProtectedBufferAllocator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  allocateProtectedSharedMemory(handle_fd, size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec,
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParamsSpec,
      [handle_fd, size],
      false);
  }

  allocateProtectedNativePixmap(handle_fd, pixel_format, picture_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec,
      arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ResponseParamsSpec,
      [handle_fd, pixel_format, picture_size],
      false);
  }

  releaseProtectedBuffer(handle_fd) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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

arc.mojom.VideoProtectedBufferAllocatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoProtectedBufferAllocator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec.$.structSpec);
          const result = this.impl.allocateProtectedSharedMemory(params.handle_fd, params.size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec.$.structSpec);
          const result = this.impl.allocateProtectedNativePixmap(params.handle_fd, params.pixel_format, params.picture_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.releaseProtectedBuffer(params.handle_fd);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.VideoProtectedBufferAllocatorReceiver = arc.mojom.VideoProtectedBufferAllocatorReceiver;

arc.mojom.VideoProtectedBufferAllocatorPtr = arc.mojom.VideoProtectedBufferAllocatorRemote;
arc.mojom.VideoProtectedBufferAllocatorRequest = arc.mojom.VideoProtectedBufferAllocatorPendingReceiver;

