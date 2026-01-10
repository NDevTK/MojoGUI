// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_frame_handler.mojom
// Module: video_capture.mojom

'use strict';

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
};

video_capture.mojom.VideoFrameAccessHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFinishedConsumingBuffer(buffer_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFinishedConsumingBuffer(params.buffer_id);
          break;
        }
      }
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
      mojo.internal.StructField('frame_access_handler', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameAccessHandlerSpec), null, false, 0, undefined),
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
};

video_capture.mojom.VideoFrameHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCaptureConfigurationChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle],
      false);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  onError(error) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  onFrameDropped(reason) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec,
      null,
      [reason],
      false);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version],
      false);
  }

  onFrameWithEmptyRegionCapture() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      [],
      false);
  }

  onLog(message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec,
      null,
      [message],
      false);
  }

  onStarted() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingGpuDecode() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCaptureConfigurationChanged();
          break;
        }
        case 1: {
          const params = video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          break;
        }
        case 2: {
          const params = video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFrameAccessHandlerReady(params.frame_access_handler);
          break;
        }
        case 3: {
          const params = video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFrameReadyInBuffer(params.buffer);
          break;
        }
        case 4: {
          const params = video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
        case 5: {
          const params = video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError(params.error);
          break;
        }
        case 6: {
          const params = video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFrameDropped(params.reason);
          break;
        }
        case 7: {
          const params = video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
        case 8: {
          const params = video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFrameWithEmptyRegionCapture();
          break;
        }
        case 9: {
          const params = video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onLog(params.message);
          break;
        }
        case 10: {
          const params = video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStarted();
          break;
        }
        case 11: {
          const params = video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStartedUsingGpuDecode();
          break;
        }
        case 12: {
          const params = video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStopped();
          break;
        }
      }
    }});
  }
};

video_capture.mojom.VideoFrameHandlerReceiver = video_capture.mojom.VideoFrameHandlerReceiver;

video_capture.mojom.VideoFrameHandlerPtr = video_capture.mojom.VideoFrameHandlerRemote;
video_capture.mojom.VideoFrameHandlerRequest = video_capture.mojom.VideoFrameHandlerPendingReceiver;

