// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_frame_handler.mojom
// Module: video_capture.mojom

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var media = media || {};

video_capture.mojom.ReadyFrameInBufferSpec = { $: {} };
video_capture.mojom.VideoFrameAccessHandler = {};
video_capture.mojom.VideoFrameAccessHandler.$interfaceName = 'video_capture.mojom.VideoFrameAccessHandler';
video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler = {};
video_capture.mojom.VideoFrameHandler.$interfaceName = 'video_capture.mojom.VideoFrameHandler';
video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec = { $: {} };

// Struct: ReadyFrameInBuffer
mojo.internal.Struct(
    video_capture.mojom.ReadyFrameInBufferSpec, 'video_capture.mojom.ReadyFrameInBuffer', [
      mojo.internal.StructField('frame_info', 0, 0, media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_feedback_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: VideoFrameAccessHandler
mojo.internal.Struct(
    video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.VideoFrameAccessHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoFrameAccessHandlerRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoFrameAccessHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoFrameAccessHandlerPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoFrameAccessHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFinishedConsumingBuffer(buffer_id) {
    return this.$.onFinishedConsumingBuffer(buffer_id);
  }
};

video_capture.mojom.VideoFrameAccessHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoFrameAccessHandler', [
      { explicit: null },
    ]);
  }

  onFinishedConsumingBuffer(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

};

video_capture.mojom.VideoFrameAccessHandler.getRemote = function() {
  let remote = new video_capture.mojom.VideoFrameAccessHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoFrameAccessHandler',
    'context');
  return remote.$;
};

video_capture.mojom.VideoFrameAccessHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoFrameAccessHandler', [
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
             decoder.decodeStructInline(video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.onFinishedConsumingBuffer(params.buffer_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.VideoFrameAccessHandlerReceiver = video_capture.mojom.VideoFrameAccessHandlerReceiver;

video_capture.mojom.VideoFrameAccessHandlerPtr = video_capture.mojom.VideoFrameAccessHandlerRemote;
video_capture.mojom.VideoFrameAccessHandlerRequest = video_capture.mojom.VideoFrameAccessHandlerPendingReceiver;


// Interface: VideoFrameHandler
mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer_handle', 0, 0, media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_Params', [
      mojo.internal.StructField('frame_access_handler', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameAccessHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, video_capture.mojom.ReadyFrameInBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, media.mojom.VideoCaptureErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameDropped_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.VideoCaptureFrameDropReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('capture_version', 0, 0, media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnLog_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStopped_Params', [
    ],
    [[0, 8]]);

video_capture.mojom.VideoFrameHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoFrameHandlerRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoFrameHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoFrameHandlerPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoFrameHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCaptureConfigurationChanged() {
    return this.$.onCaptureConfigurationChanged();
  }
  onNewBuffer(buffer_id, buffer_handle) {
    return this.$.onNewBuffer(buffer_id, buffer_handle);
  }
  onFrameAccessHandlerReady(frame_access_handler) {
    return this.$.onFrameAccessHandlerReady(frame_access_handler);
  }
  onFrameReadyInBuffer(buffer) {
    return this.$.onFrameReadyInBuffer(buffer);
  }
  onBufferRetired(buffer_id) {
    return this.$.onBufferRetired(buffer_id);
  }
  onError(error) {
    return this.$.onError(error);
  }
  onFrameDropped(reason) {
    return this.$.onFrameDropped(reason);
  }
  onNewCaptureVersion(capture_version) {
    return this.$.onNewCaptureVersion(capture_version);
  }
  onFrameWithEmptyRegionCapture() {
    return this.$.onFrameWithEmptyRegionCapture();
  }
  onLog(message) {
    return this.$.onLog(message);
  }
  onStarted() {
    return this.$.onStarted();
  }
  onStartedUsingGpuDecode() {
    return this.$.onStartedUsingGpuDecode();
  }
  onStopped() {
    return this.$.onStopped();
  }
};

video_capture.mojom.VideoFrameHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoFrameHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onCaptureConfigurationChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle],
      false);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onBufferRetired(buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  onError(error) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  onFrameDropped(reason) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec,
      null,
      [reason],
      false);
  }

  onNewCaptureVersion(capture_version) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version],
      false);
  }

  onFrameWithEmptyRegionCapture() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      [],
      false);
  }

  onLog(message) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec,
      null,
      [message],
      false);
  }

  onStarted() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingGpuDecode() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

video_capture.mojom.VideoFrameHandler.getRemote = function() {
  let remote = new video_capture.mojom.VideoFrameHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoFrameHandler',
    'context');
  return remote.$;
};

video_capture.mojom.VideoFrameHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoFrameHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onCaptureConfigurationChanged();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameAccessHandlerReady(params.frame_access_handler);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameReadyInBuffer(params.buffer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec.$.structSpec);
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.error);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameDropped(params.reason);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec.$.structSpec);
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec.$.structSpec);
          const result = this.impl.onFrameWithEmptyRegionCapture();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec.$.structSpec);
          const result = this.impl.onLog(params.message);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onStarted();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec.$.structSpec);
          const result = this.impl.onStartedUsingGpuDecode();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec.$.structSpec);
          const result = this.impl.onStopped();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

video_capture.mojom.VideoFrameHandlerReceiver = video_capture.mojom.VideoFrameHandlerReceiver;

video_capture.mojom.VideoFrameHandlerPtr = video_capture.mojom.VideoFrameHandlerRemote;
video_capture.mojom.VideoFrameHandlerRequest = video_capture.mojom.VideoFrameHandlerPendingReceiver;

