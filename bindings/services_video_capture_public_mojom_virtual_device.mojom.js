// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/virtual_device.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var media = media || {};
var gfx = gfx || {};

video_capture.mojom.SharedMemoryVirtualDevice = {};
video_capture.mojom.SharedMemoryVirtualDevice.$interfaceName = 'video_capture.mojom.SharedMemoryVirtualDevice';
video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec = { $: {} };
video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec = { $: {} };
video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
video_capture.mojom.TextureVirtualDevice = {};
video_capture.mojom.TextureVirtualDevice.$interfaceName = 'video_capture.mojom.TextureVirtualDevice';
video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec = { $: {} };
video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec = { $: {} };
video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec = { $: {} };
video_capture.mojom.GpuMemoryBufferVirtualDevice = {};
video_capture.mojom.GpuMemoryBufferVirtualDevice.$interfaceName = 'video_capture.mojom.GpuMemoryBufferVirtualDevice';
video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec = { $: {} };
video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec = { $: {} };
video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec = { $: {} };

// Interface: SharedMemoryVirtualDevice
mojo.internal.Struct(
    video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec, 'video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_Params', [
      mojo.internal.StructField('dimension', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_format', 8, 0, media.mojom.VideoCapturePixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('strides', 16, 0, media.mojom.PlaneStridesSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec, 'video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParams', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('frame_info', 0, 0, media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

video_capture.mojom.SharedMemoryVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.SharedMemoryVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.SharedMemoryVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.SharedMemoryVirtualDevicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.SharedMemoryVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.SharedMemoryVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestFrameBuffer(dimension, pixel_format, strides) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec,
      video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec,
      [dimension, pixel_format, strides],
      false);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer_id, frame_info],
      false);
  }

};

video_capture.mojom.SharedMemoryVirtualDevice.getRemote = function() {
  let remote = new video_capture.mojom.SharedMemoryVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.SharedMemoryVirtualDevice',
    'context');
  return remote.$;
};

video_capture.mojom.SharedMemoryVirtualDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: RequestFrameBuffer
        try {
             decoder.decodeStruct(video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestFrameBuffer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnFrameReadyInBuffer
        try {
             decoder.decodeStruct(video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameReadyInBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestFrameBuffer');
          const result = this.impl.requestFrameBuffer(params.dimension, params.pixel_format, params.strides);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.buffer_id, params.frame_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.SharedMemoryVirtualDeviceReceiver = video_capture.mojom.SharedMemoryVirtualDeviceReceiver;

video_capture.mojom.SharedMemoryVirtualDevicePtr = video_capture.mojom.SharedMemoryVirtualDeviceRemote;
video_capture.mojom.SharedMemoryVirtualDeviceRequest = video_capture.mojom.SharedMemoryVirtualDevicePendingReceiver;


// Interface: TextureVirtualDevice
mojo.internal.Struct(
    video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec, 'video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_Params', [
      mojo.internal.StructField('shared_image_handle', 0, 0, media.mojom.SharedImageBufferHandleSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec, 'video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_Params', [
      mojo.internal.StructField('frame_access_handler', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameAccessHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('frame_info', 0, 0, media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec, 'video_capture.mojom.TextureVirtualDevice_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.TextureVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.TextureVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.TextureVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.TextureVirtualDevicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.TextureVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.TextureVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewSharedImageBufferHandle(buffer_id, shared_image_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec,
      null,
      [buffer_id, shared_image_handle],
      false);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer_id, frame_info],
      false);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

};

video_capture.mojom.TextureVirtualDevice.getRemote = function() {
  let remote = new video_capture.mojom.TextureVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.TextureVirtualDevice',
    'context');
  return remote.$;
};

video_capture.mojom.TextureVirtualDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: OnNewSharedImageBufferHandle
        try {
             decoder.decodeStruct(video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewSharedImageBufferHandle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnFrameAccessHandlerReady
        try {
             decoder.decodeStruct(video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameAccessHandlerReady (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnFrameReadyInBuffer
        try {
             decoder.decodeStruct(video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameReadyInBuffer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnBufferRetired
        try {
             decoder.decodeStruct(video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferRetired (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNewSharedImageBufferHandle');
          const result = this.impl.onNewSharedImageBufferHandle(params.buffer_id, params.shared_image_handle);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFrameAccessHandlerReady');
          const result = this.impl.onFrameAccessHandlerReady(params.frame_access_handler);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.buffer_id, params.frame_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.TextureVirtualDeviceReceiver = video_capture.mojom.TextureVirtualDeviceReceiver;

video_capture.mojom.TextureVirtualDevicePtr = video_capture.mojom.TextureVirtualDeviceRemote;
video_capture.mojom.TextureVirtualDeviceRequest = video_capture.mojom.TextureVirtualDevicePendingReceiver;


// Interface: GpuMemoryBufferVirtualDevice
mojo.internal.Struct(
    video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec, 'video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_Params', [
      mojo.internal.StructField('gmb_handle', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec, 'video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_Params', [
      mojo.internal.StructField('frame_access_handler', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameAccessHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('frame_info', 0, 0, media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec, 'video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.GpuMemoryBufferVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.GpuMemoryBufferVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.GpuMemoryBufferVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.GpuMemoryBufferVirtualDevicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.GpuMemoryBufferVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.GpuMemoryBufferVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewGpuMemoryBufferHandle(buffer_id, gmb_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec,
      null,
      [buffer_id, gmb_handle],
      false);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer_id, frame_info],
      false);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

};

video_capture.mojom.GpuMemoryBufferVirtualDevice.getRemote = function() {
  let remote = new video_capture.mojom.GpuMemoryBufferVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.GpuMemoryBufferVirtualDevice',
    'context');
  return remote.$;
};

video_capture.mojom.GpuMemoryBufferVirtualDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: OnNewGpuMemoryBufferHandle
        try {
             decoder.decodeStruct(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewGpuMemoryBufferHandle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnFrameAccessHandlerReady
        try {
             decoder.decodeStruct(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameAccessHandlerReady (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnFrameReadyInBuffer
        try {
             decoder.decodeStruct(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameReadyInBuffer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnBufferRetired
        try {
             decoder.decodeStruct(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferRetired (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNewGpuMemoryBufferHandle');
          const result = this.impl.onNewGpuMemoryBufferHandle(params.buffer_id, params.gmb_handle);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFrameAccessHandlerReady');
          const result = this.impl.onFrameAccessHandlerReady(params.frame_access_handler);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.buffer_id, params.frame_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.GpuMemoryBufferVirtualDeviceReceiver = video_capture.mojom.GpuMemoryBufferVirtualDeviceReceiver;

video_capture.mojom.GpuMemoryBufferVirtualDevicePtr = video_capture.mojom.GpuMemoryBufferVirtualDeviceRemote;
video_capture.mojom.GpuMemoryBufferVirtualDeviceRequest = video_capture.mojom.GpuMemoryBufferVirtualDevicePendingReceiver;

