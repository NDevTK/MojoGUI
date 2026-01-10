// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_protected_buffer_allocator.mojom
// Module: arc.mojom

'use strict';

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

arc.mojom.VideoProtectedBufferAllocatorReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AllocateProtectedSharedMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllocateProtectedSharedMemory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AllocateProtectedNativePixmap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllocateProtectedNativePixmap (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReleaseProtectedBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseProtectedBuffer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedSharedMemory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.allocateProtectedSharedMemory');
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
          const params = decoder.decodeStruct(arc.mojom.VideoProtectedBufferAllocator_AllocateProtectedNativePixmap_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.allocateProtectedNativePixmap');
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
          const params = decoder.decodeStruct(arc.mojom.VideoProtectedBufferAllocator_ReleaseProtectedBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.releaseProtectedBuffer');
          const result = this.impl.releaseProtectedBuffer(params.handle_fd);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.VideoProtectedBufferAllocatorReceiver = arc.mojom.VideoProtectedBufferAllocatorReceiver;

arc.mojom.VideoProtectedBufferAllocatorPtr = arc.mojom.VideoProtectedBufferAllocatorRemote;
arc.mojom.VideoProtectedBufferAllocatorRequest = arc.mojom.VideoProtectedBufferAllocatorPendingReceiver;

