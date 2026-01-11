// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/virtual_device.mojom
// Module: video_capture.mojom

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
  requestFrameBuffer(dimension, pixel_format, strides) {
    return this.$.requestFrameBuffer(dimension, pixel_format, strides);
  }
  onFrameReadyInBuffer(buffer_id, frame_info) {
    return this.$.onFrameReadyInBuffer(buffer_id, frame_info);
  }
};

video_capture.mojom.SharedMemoryVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedMemoryVirtualDevice', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestFrameBuffer(dimension, pixel_format, strides) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec,
      video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec,
      [dimension, pixel_format, strides],
      false);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SharedMemoryVirtualDevice', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameReadyInBuffer(params.buffer_id, params.frame_info);
          break;
        }
      }
      } catch (err) {}
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
  onNewSharedImageBufferHandle(buffer_id, shared_image_handle) {
    return this.$.onNewSharedImageBufferHandle(buffer_id, shared_image_handle);
  }
  onFrameAccessHandlerReady(frame_access_handler) {
    return this.$.onFrameAccessHandlerReady(frame_access_handler);
  }
  onFrameReadyInBuffer(buffer_id, frame_info) {
    return this.$.onFrameReadyInBuffer(buffer_id, frame_info);
  }
  onBufferRetired(buffer_id) {
    return this.$.onBufferRetired(buffer_id);
  }
};

video_capture.mojom.TextureVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextureVirtualDevice', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNewSharedImageBufferHandle(buffer_id, shared_image_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec,
      null,
      [buffer_id, shared_image_handle],
      false);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer_id, frame_info],
      false);
  }

  onBufferRetired(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('TextureVirtualDevice', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec.$.structSpec);
          const result = this.impl.onNewSharedImageBufferHandle(params.buffer_id, params.shared_image_handle);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameAccessHandlerReady(params.frame_access_handler);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameReadyInBuffer(params.buffer_id, params.frame_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec.$.structSpec);
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
      }
      } catch (err) {}
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
  onNewGpuMemoryBufferHandle(buffer_id, gmb_handle) {
    return this.$.onNewGpuMemoryBufferHandle(buffer_id, gmb_handle);
  }
  onFrameAccessHandlerReady(frame_access_handler) {
    return this.$.onFrameAccessHandlerReady(frame_access_handler);
  }
  onFrameReadyInBuffer(buffer_id, frame_info) {
    return this.$.onFrameReadyInBuffer(buffer_id, frame_info);
  }
  onBufferRetired(buffer_id) {
    return this.$.onBufferRetired(buffer_id);
  }
};

video_capture.mojom.GpuMemoryBufferVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GpuMemoryBufferVirtualDevice', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNewGpuMemoryBufferHandle(buffer_id, gmb_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec,
      null,
      [buffer_id, gmb_handle],
      false);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(buffer_id, frame_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer_id, frame_info],
      false);
  }

  onBufferRetired(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('GpuMemoryBufferVirtualDevice', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec.$.structSpec);
          const result = this.impl.onNewGpuMemoryBufferHandle(params.buffer_id, params.gmb_handle);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameAccessHandlerReady(params.frame_access_handler);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameReadyInBuffer(params.buffer_id, params.frame_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec.$.structSpec);
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.GpuMemoryBufferVirtualDeviceReceiver = video_capture.mojom.GpuMemoryBufferVirtualDeviceReceiver;

video_capture.mojom.GpuMemoryBufferVirtualDevicePtr = video_capture.mojom.GpuMemoryBufferVirtualDeviceRemote;
video_capture.mojom.GpuMemoryBufferVirtualDeviceRequest = video_capture.mojom.GpuMemoryBufferVirtualDevicePendingReceiver;

