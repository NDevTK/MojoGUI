// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_video_capture.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Enum: BufferFormatPreference
viz.mojom.BufferFormatPreference = {
  kDefault: 0,
  kPreferGpuMemoryBuffer: 1,
  kPreferSharedImageWithNativeHandle: 2,
};

// Interface: FrameSinkVideoConsumerFrameCallbacks
viz.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  done() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec.$,
      null,
      []);
  }

  provideFeedback(feedback) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec.$,
      null,
      [feedback]);
  }

};

viz.mojom.FrameSinkVideoConsumerFrameCallbacks.getRemote = function() {
  let remote = new viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoConsumerFrameCallbacks',
    'context');
  return remote.$;
};

// ParamsSpec for Done
viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks.Done_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ProvideFeedback
viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks.ProvideFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinkVideoConsumerFrameCallbacksPtr = viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemote;
viz.mojom.FrameSinkVideoConsumerFrameCallbacksRequest = viz.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver;


// Interface: FrameSinkVideoConsumer
viz.mojom.FrameSinkVideoConsumerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkVideoConsumerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoConsumer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkVideoConsumerPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkVideoConsumerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkVideoConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFrameCaptured(data, info, content_rect, callbacks) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec.$,
      null,
      [data, info, content_rect, callbacks]);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec.$,
      null,
      [capture_version]);
  }

  onFrameWithEmptyRegionCapture() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec.$,
      null,
      []);
  }

  onStopped() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec.$,
      null,
      []);
  }

  onLog(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec.$,
      null,
      [message]);
  }

};

viz.mojom.FrameSinkVideoConsumer.getRemote = function() {
  let remote = new viz.mojom.FrameSinkVideoConsumerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoConsumer',
    'context');
  return remote.$;
};

// ParamsSpec for OnFrameCaptured
viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnFrameCaptured_Params',
      packedSize: 40,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'content_rect', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'callbacks', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNewCaptureVersion
viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnNewCaptureVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'capture_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameWithEmptyRegionCapture
viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnFrameWithEmptyRegionCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStopped
viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLog
viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnLog_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinkVideoConsumerPtr = viz.mojom.FrameSinkVideoConsumerRemote;
viz.mojom.FrameSinkVideoConsumerRequest = viz.mojom.FrameSinkVideoConsumerPendingReceiver;


// Interface: FrameSinkVideoCapturer
viz.mojom.FrameSinkVideoCapturerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkVideoCapturerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoCapturer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkVideoCapturerPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkVideoCapturerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkVideoCapturerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFormat(format) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec.$,
      null,
      [format]);
  }

  setMinCapturePeriod(min_period) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec.$,
      null,
      [min_period]);
  }

  setMinSizeChangePeriod(min_period) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec.$,
      null,
      [min_period]);
  }

  setResolutionConstraints(min_size, max_size, use_fixed_aspect_ratio) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec.$,
      null,
      [min_size, max_size, use_fixed_aspect_ratio]);
  }

  setAutoThrottlingEnabled(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec.$,
      null,
      [enabled]);
  }

  setAnimationFpsLockIn(enabled, majority_damaged_pixel_min_ratio) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec.$,
      null,
      [enabled, majority_damaged_pixel_min_ratio]);
  }

  changeTarget(target, sub_capture_version) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec.$,
      null,
      [target, sub_capture_version]);
  }

  start(consumer, buffer_format_preference) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec.$,
      null,
      [consumer, buffer_format_preference]);
  }

  stop() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec.$,
      null,
      []);
  }

  requestRefreshFrame() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec.$,
      null,
      []);
  }

  createOverlay(stacking_index, receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec.$,
      null,
      [stacking_index, receiver]);
  }

};

viz.mojom.FrameSinkVideoCapturer.getRemote = function() {
  let remote = new viz.mojom.FrameSinkVideoCapturerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoCapturer',
    'context');
  return remote.$;
};

// ParamsSpec for SetFormat
viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetFormat_Params',
      packedSize: 16,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMinCapturePeriod
viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetMinCapturePeriod_Params',
      packedSize: 16,
      fields: [
        { name: 'min_period', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMinSizeChangePeriod
viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetMinSizeChangePeriod_Params',
      packedSize: 16,
      fields: [
        { name: 'min_period', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetResolutionConstraints
viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetResolutionConstraints_Params',
      packedSize: 32,
      fields: [
        { name: 'min_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'max_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'use_fixed_aspect_ratio', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAutoThrottlingEnabled
viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetAutoThrottlingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAnimationFpsLockIn
viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetAnimationFpsLockIn_Params',
      packedSize: 24,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'majority_damaged_pixel_min_ratio', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ChangeTarget
viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.ChangeTarget_Params',
      packedSize: 24,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'sub_capture_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Start
viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.Start_Params',
      packedSize: 24,
      fields: [
        { name: 'consumer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'buffer_format_preference', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Stop
viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestRefreshFrame
viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.RequestRefreshFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateOverlay
viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.CreateOverlay_Params',
      packedSize: 24,
      fields: [
        { name: 'stacking_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinkVideoCapturerPtr = viz.mojom.FrameSinkVideoCapturerRemote;
viz.mojom.FrameSinkVideoCapturerRequest = viz.mojom.FrameSinkVideoCapturerPendingReceiver;


// Interface: FrameSinkVideoCaptureOverlay
viz.mojom.FrameSinkVideoCaptureOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.FrameSinkVideoCaptureOverlayRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoCaptureOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.FrameSinkVideoCaptureOverlayPendingReceiver,
      handle);
    this.$ = new viz.mojom.FrameSinkVideoCaptureOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.FrameSinkVideoCaptureOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setImageAndBounds(image, bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec.$,
      null,
      [image, bounds]);
  }

  setBounds(bounds) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec.$,
      null,
      [bounds]);
  }

  onCapturedMouseEvent(coordinates) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec.$,
      null,
      [coordinates]);
  }

};

viz.mojom.FrameSinkVideoCaptureOverlay.getRemote = function() {
  let remote = new viz.mojom.FrameSinkVideoCaptureOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoCaptureOverlay',
    'context');
  return remote.$;
};

// ParamsSpec for SetImageAndBounds
viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCaptureOverlay.SetImageAndBounds_Params',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBounds
viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCaptureOverlay.SetBounds_Params',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnCapturedMouseEvent
viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCaptureOverlay.OnCapturedMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'coordinates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
viz.mojom.FrameSinkVideoCaptureOverlayPtr = viz.mojom.FrameSinkVideoCaptureOverlayRemote;
viz.mojom.FrameSinkVideoCaptureOverlayRequest = viz.mojom.FrameSinkVideoCaptureOverlayPendingReceiver;

