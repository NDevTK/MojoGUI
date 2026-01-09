// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_frame_handler.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};


// Struct: ReadyFrameInBuffer
video_capture.mojom.ReadyFrameInBufferSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.ReadyFrameInBuffer',
      packedSize: 16,
      fields: [
        { name: 'frame_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: VideoFrameAccessHandler
video_capture.mojom.VideoFrameAccessHandler = {};

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
      [buffer_id]);
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

// ParamsSpec for OnFinishedConsumingBuffer
video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameAccessHandler.OnFinishedConsumingBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.VideoFrameAccessHandlerPtr = video_capture.mojom.VideoFrameAccessHandlerRemote;
video_capture.mojom.VideoFrameAccessHandlerRequest = video_capture.mojom.VideoFrameAccessHandlerPendingReceiver;


// Interface: VideoFrameHandler
video_capture.mojom.VideoFrameHandler = {};

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
      []);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle]);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler]);
  }

  onFrameReadyInBuffer(buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer]);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id]);
  }

  onError(error) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec,
      null,
      [error]);
  }

  onFrameDropped(reason) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec,
      null,
      [reason]);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version]);
  }

  onFrameWithEmptyRegionCapture() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      []);
  }

  onLog(message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec,
      null,
      [message]);
  }

  onStarted() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec,
      null,
      []);
  }

  onStartedUsingGpuDecode() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec,
      null,
      []);
  }

  onStopped() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnCaptureConfigurationChanged
video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnCaptureConfigurationChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNewBuffer
video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnNewBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'buffer_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameAccessHandlerReady
video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnFrameAccessHandlerReady_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_access_handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameReadyInBuffer
video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnFrameReadyInBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnBufferRetired
video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnBufferRetired_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnError
video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameDropped
video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnFrameDropped_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNewCaptureVersion
video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnNewCaptureVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'capture_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameWithEmptyRegionCapture
video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnFrameWithEmptyRegionCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLog
video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnLog_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStarted
video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStartedUsingGpuDecode
video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnStartedUsingGpuDecode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStopped
video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'video_capture.mojom.VideoFrameHandler.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
video_capture.mojom.VideoFrameHandlerPtr = video_capture.mojom.VideoFrameHandlerRemote;
video_capture.mojom.VideoFrameHandlerRequest = video_capture.mojom.VideoFrameHandlerPendingReceiver;

