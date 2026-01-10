// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_video_capture.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: BufferFormatPreference
viz.mojom.mojom.BufferFormatPreference = {
  kDefault: 0,
  kPreferGpuMemoryBuffer: 1,
  kPreferSharedImageWithNativeHandle: 2,
};
viz.mojom.mojom.BufferFormatPreferenceSpec = { $: mojo.internal.Enum() };

// Union: VideoCaptureSubTarget
viz.mojom.mojom.VideoCaptureSubTargetSpec = { $: mojo.internal.Union(
    'viz.mojom.VideoCaptureSubTarget', {
      'subtree_capture_id': {
        'ordinal': 0,
        'type': viz.mojom.SubtreeCaptureIdSpec,
      }},
      'region_capture_crop_id': {
        'ordinal': 1,
        'type': mojo_base.mojom.TokenSpec,
      }},
    })
};

// Struct: VideoCaptureTarget
viz.mojom.mojom.VideoCaptureTargetSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.VideoCaptureTarget',
      packedSize: 32,
      fields: [
        { name: 'frame_sink_id', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'sub_target', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.VideoCaptureSubTargetSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: FrameSinkVideoConsumerFrameCallbacks
viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacks = {};

viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  done() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec,
      null,
      []);
  }

  provideFeedback(feedback) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec,
      null,
      [feedback]);
  }

};

viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacks.getRemote = function() {
  let remote = new viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoConsumerFrameCallbacks',
    'context');
  return remote.$;
};

// ParamsSpec for Done
viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks.Done_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ProvideFeedback
viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks.ProvideFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'feedback', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureFeedbackSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksPtr = viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksRemote;
viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksRequest = viz.mojom.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver;


// Interface: FrameSinkVideoConsumer
viz.mojom.mojom.FrameSinkVideoConsumer = {};

viz.mojom.mojom.FrameSinkVideoConsumerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.FrameSinkVideoConsumerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoConsumer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.FrameSinkVideoConsumerPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.FrameSinkVideoConsumerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.FrameSinkVideoConsumerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFrameCaptured(data, info, content_rect, callbacks) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec,
      null,
      [data, info, content_rect, callbacks]);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version]);
  }

  onFrameWithEmptyRegionCapture() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      []);
  }

  onStopped() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec,
      null,
      []);
  }

  onLog(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec,
      null,
      [message]);
  }

};

viz.mojom.mojom.FrameSinkVideoConsumer.getRemote = function() {
  let remote = new viz.mojom.mojom.FrameSinkVideoConsumerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoConsumer',
    'context');
  return remote.$;
};

// ParamsSpec for OnFrameCaptured
viz.mojom.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnFrameCaptured_Params',
      packedSize: 48,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoBufferHandleSpec, nullable: false, minVersion: 0 },
        { name: 'info', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoFrameInfoSpec, nullable: false, minVersion: 0 },
        { name: 'content_rect', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'callbacks', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for OnNewCaptureVersion
viz.mojom.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnNewCaptureVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'capture_version', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CaptureVersionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFrameWithEmptyRegionCapture
viz.mojom.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnFrameWithEmptyRegionCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStopped
viz.mojom.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnLog
viz.mojom.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoConsumer.OnLog_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.FrameSinkVideoConsumerPtr = viz.mojom.mojom.FrameSinkVideoConsumerRemote;
viz.mojom.mojom.FrameSinkVideoConsumerRequest = viz.mojom.mojom.FrameSinkVideoConsumerPendingReceiver;


// Interface: FrameSinkVideoCapturer
viz.mojom.mojom.FrameSinkVideoCapturer = {};

viz.mojom.mojom.FrameSinkVideoCapturerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.FrameSinkVideoCapturerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoCapturer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.FrameSinkVideoCapturerPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.FrameSinkVideoCapturerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.FrameSinkVideoCapturerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFormat(format) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec,
      null,
      [format]);
  }

  setMinCapturePeriod(min_period) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec,
      null,
      [min_period]);
  }

  setMinSizeChangePeriod(min_period) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec,
      null,
      [min_period]);
  }

  setResolutionConstraints(min_size, max_size, use_fixed_aspect_ratio) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec,
      null,
      [min_size, max_size, use_fixed_aspect_ratio]);
  }

  setAutoThrottlingEnabled(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setAnimationFpsLockIn(enabled, majority_damaged_pixel_min_ratio) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec,
      null,
      [enabled, majority_damaged_pixel_min_ratio]);
  }

  changeTarget(target, sub_capture_version) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec,
      null,
      [target, sub_capture_version]);
  }

  start(consumer, buffer_format_preference) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_Start_ParamsSpec,
      null,
      [consumer, buffer_format_preference]);
  }

  stop() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec,
      null,
      []);
  }

  requestRefreshFrame() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec,
      null,
      []);
  }

  createOverlay(stacking_index, receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec,
      null,
      [stacking_index, receiver]);
  }

};

viz.mojom.mojom.FrameSinkVideoCapturer.getRemote = function() {
  let remote = new viz.mojom.mojom.FrameSinkVideoCapturerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoCapturer',
    'context');
  return remote.$;
};

// ParamsSpec for SetFormat
viz.mojom.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetFormat_Params',
      packedSize: 16,
      fields: [
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoPixelFormatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMinCapturePeriod
viz.mojom.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetMinCapturePeriod_Params',
      packedSize: 16,
      fields: [
        { name: 'min_period', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetMinSizeChangePeriod
viz.mojom.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetMinSizeChangePeriod_Params',
      packedSize: 16,
      fields: [
        { name: 'min_period', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetResolutionConstraints
viz.mojom.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetResolutionConstraints_Params',
      packedSize: 32,
      fields: [
        { name: 'min_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'max_size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'use_fixed_aspect_ratio', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetAutoThrottlingEnabled
viz.mojom.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetAutoThrottlingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAnimationFpsLockIn
viz.mojom.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.SetAnimationFpsLockIn_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'majority_damaged_pixel_min_ratio', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ChangeTarget
viz.mojom.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.ChangeTarget_Params',
      packedSize: 24,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.VideoCaptureTargetSpec, nullable: true, minVersion: 0 },
        { name: 'sub_capture_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Start
viz.mojom.mojom.FrameSinkVideoCapturer_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.Start_Params',
      packedSize: 24,
      fields: [
        { name: 'consumer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoConsumerRemote), nullable: false, minVersion: 0 },
        { name: 'buffer_format_preference', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.BufferFormatPreferenceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Stop
viz.mojom.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RequestRefreshFrame
viz.mojom.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.RequestRefreshFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CreateOverlay
viz.mojom.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCapturer.CreateOverlay_Params',
      packedSize: 24,
      fields: [
        { name: 'stacking_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(viz.mojom.FrameSinkVideoCaptureOverlayRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.FrameSinkVideoCapturerPtr = viz.mojom.mojom.FrameSinkVideoCapturerRemote;
viz.mojom.mojom.FrameSinkVideoCapturerRequest = viz.mojom.mojom.FrameSinkVideoCapturerPendingReceiver;


// Interface: FrameSinkVideoCaptureOverlay
viz.mojom.mojom.FrameSinkVideoCaptureOverlay = {};

viz.mojom.mojom.FrameSinkVideoCaptureOverlayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.mojom.FrameSinkVideoCaptureOverlayRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkVideoCaptureOverlay';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.mojom.FrameSinkVideoCaptureOverlayPendingReceiver,
      handle);
    this.$ = new viz.mojom.mojom.FrameSinkVideoCaptureOverlayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

viz.mojom.mojom.FrameSinkVideoCaptureOverlayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setImageAndBounds(image, bounds) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec,
      null,
      [image, bounds]);
  }

  setBounds(bounds) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec,
      null,
      [bounds]);
  }

  onCapturedMouseEvent(coordinates) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec,
      null,
      [coordinates]);
  }

};

viz.mojom.mojom.FrameSinkVideoCaptureOverlay.getRemote = function() {
  let remote = new viz.mojom.mojom.FrameSinkVideoCaptureOverlayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkVideoCaptureOverlay',
    'context');
  return remote.$;
};

// ParamsSpec for SetImageAndBounds
viz.mojom.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCaptureOverlay.SetImageAndBounds_Params',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetBounds
viz.mojom.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCaptureOverlay.SetBounds_Params',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCapturedMouseEvent
viz.mojom.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'viz.mojom.FrameSinkVideoCaptureOverlay.OnCapturedMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'coordinates', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
viz.mojom.mojom.FrameSinkVideoCaptureOverlayPtr = viz.mojom.mojom.FrameSinkVideoCaptureOverlayRemote;
viz.mojom.mojom.FrameSinkVideoCaptureOverlayRequest = viz.mojom.mojom.FrameSinkVideoCaptureOverlayPendingReceiver;

