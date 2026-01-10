// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_video_capture.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};
var media = media || {};
var mojo_base = mojo_base || {};
var skia = skia || {};
var gfx = gfx || {};

viz.mojom.BufferFormatPreferenceSpec = { $: mojo.internal.Enum() };
viz.mojom.VideoCaptureSubTargetSpec = { $: {} };
viz.mojom.VideoCaptureTargetSpec = { $: {} };
viz.mojom.FrameSinkVideoConsumerFrameCallbacks = {};
viz.mojom.FrameSinkVideoConsumerFrameCallbacks.$interfaceName = 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks';
viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoConsumer = {};
viz.mojom.FrameSinkVideoConsumer.$interfaceName = 'viz.mojom.FrameSinkVideoConsumer';
viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer = {};
viz.mojom.FrameSinkVideoCapturer.$interfaceName = 'viz.mojom.FrameSinkVideoCapturer';
viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCaptureOverlay = {};
viz.mojom.FrameSinkVideoCaptureOverlay.$interfaceName = 'viz.mojom.FrameSinkVideoCaptureOverlay';
viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec = { $: {} };
viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec = { $: {} };

// Enum: BufferFormatPreference
viz.mojom.BufferFormatPreference = {
  kDefault: 0,
  kPreferGpuMemoryBuffer: 1,
  kPreferSharedImageWithNativeHandle: 2,
};

// Union: VideoCaptureSubTarget
mojo.internal.Union(
    viz.mojom.VideoCaptureSubTargetSpec, 'viz.mojom.VideoCaptureSubTarget', {
      'subtree_capture_id': {
        'ordinal': 0,
        'type': viz.mojom.SubtreeCaptureIdSpec.$,
        'nullable': false,
      },
      'region_capture_crop_id': {
        'ordinal': 1,
        'type': mojo_base.mojom.TokenSpec.$,
        'nullable': false,
      },
    });

// Struct: VideoCaptureTarget
mojo.internal.Struct(
    viz.mojom.VideoCaptureTargetSpec, 'viz.mojom.VideoCaptureTarget', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sub_target', 8, 0, viz.mojom.VideoCaptureSubTargetSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FrameSinkVideoConsumerFrameCallbacks
mojo.internal.Struct(
    viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, media.mojom.VideoCaptureFeedbackSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec,
      null,
      [],
      false);
  }

  provideFeedback(feedback) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec,
      null,
      [feedback],
      false);
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

viz.mojom.FrameSinkVideoConsumerFrameCallbacksReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.FrameSinkVideoConsumerFrameCallbacks_Done_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.done');
          const result = this.impl.done();
          break;
        }
        case 1: {
          const params = viz.mojom.FrameSinkVideoConsumerFrameCallbacks_ProvideFeedback_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.provideFeedback');
          const result = this.impl.provideFeedback(params.feedback);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinkVideoConsumerFrameCallbacksReceiver = viz.mojom.FrameSinkVideoConsumerFrameCallbacksReceiver;

viz.mojom.FrameSinkVideoConsumerFrameCallbacksPtr = viz.mojom.FrameSinkVideoConsumerFrameCallbacksRemote;
viz.mojom.FrameSinkVideoConsumerFrameCallbacksRequest = viz.mojom.FrameSinkVideoConsumerFrameCallbacksPendingReceiver;


// Interface: FrameSinkVideoConsumer
mojo.internal.Struct(
    viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_Params', [
      mojo.internal.StructField('data', 0, 0, media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_rect', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('callbacks', 24, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoConsumerFrameCallbacksSpec), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('capture_version', 0, 0, media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec, 'viz.mojom.FrameSinkVideoConsumer_OnLog_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec,
      null,
      [data, info, content_rect, callbacks],
      false);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version],
      false);
  }

  onFrameWithEmptyRegionCapture() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onLog(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec,
      null,
      [message],
      false);
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

viz.mojom.FrameSinkVideoConsumerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.FrameSinkVideoConsumer_OnFrameCaptured_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onFrameCaptured');
          const result = this.impl.onFrameCaptured(params.data, params.info, params.content_rect, params.callbacks);
          break;
        }
        case 1: {
          const params = viz.mojom.FrameSinkVideoConsumer_OnNewCaptureVersion_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onNewCaptureVersion');
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
        case 2: {
          const params = viz.mojom.FrameSinkVideoConsumer_OnFrameWithEmptyRegionCapture_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onFrameWithEmptyRegionCapture');
          const result = this.impl.onFrameWithEmptyRegionCapture();
          break;
        }
        case 3: {
          const params = viz.mojom.FrameSinkVideoConsumer_OnStopped_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onStopped');
          const result = this.impl.onStopped();
          break;
        }
        case 4: {
          const params = viz.mojom.FrameSinkVideoConsumer_OnLog_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onLog');
          const result = this.impl.onLog(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinkVideoConsumerReceiver = viz.mojom.FrameSinkVideoConsumerReceiver;

viz.mojom.FrameSinkVideoConsumerPtr = viz.mojom.FrameSinkVideoConsumerRemote;
viz.mojom.FrameSinkVideoConsumerRequest = viz.mojom.FrameSinkVideoConsumerPendingReceiver;


// Interface: FrameSinkVideoCapturer
mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetFormat_Params', [
      mojo.internal.StructField('format', 0, 0, media.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_Params', [
      mojo.internal.StructField('min_period', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_Params', [
      mojo.internal.StructField('min_period', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_Params', [
      mojo.internal.StructField('min_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('use_fixed_aspect_ratio', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_Params', [
      mojo.internal.StructField('majority_damaged_pixel_min_ratio', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('enabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_ChangeTarget_Params', [
      mojo.internal.StructField('target', 0, 0, viz.mojom.VideoCaptureTargetSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sub_capture_version', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_Start_Params', [
      mojo.internal.StructField('consumer', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoConsumerSpec), null, false, 0, undefined),
      mojo.internal.StructField('buffer_format_preference', 8, 0, viz.mojom.BufferFormatPreferenceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec, 'viz.mojom.FrameSinkVideoCapturer_CreateOverlay_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.FrameSinkVideoCaptureOverlaySpec), null, false, 0, undefined),
      mojo.internal.StructField('stacking_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec,
      null,
      [format],
      false);
  }

  setMinCapturePeriod(min_period) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec,
      null,
      [min_period],
      false);
  }

  setMinSizeChangePeriod(min_period) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec,
      null,
      [min_period],
      false);
  }

  setResolutionConstraints(min_size, max_size, use_fixed_aspect_ratio) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec,
      null,
      [min_size, max_size, use_fixed_aspect_ratio],
      false);
  }

  setAutoThrottlingEnabled(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setAnimationFpsLockIn(enabled, majority_damaged_pixel_min_ratio) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec,
      null,
      [enabled, majority_damaged_pixel_min_ratio],
      false);
  }

  changeTarget(target, sub_capture_version) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec,
      null,
      [target, sub_capture_version],
      false);
  }

  start(consumer, buffer_format_preference) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec,
      null,
      [consumer, buffer_format_preference],
      false);
  }

  stop() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  requestRefreshFrame() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec,
      null,
      [],
      false);
  }

  createOverlay(stacking_index, receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec,
      null,
      [stacking_index, receiver],
      false);
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

viz.mojom.FrameSinkVideoCapturerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.FrameSinkVideoCapturer_SetFormat_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setFormat');
          const result = this.impl.setFormat(params.format);
          break;
        }
        case 1: {
          const params = viz.mojom.FrameSinkVideoCapturer_SetMinCapturePeriod_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setMinCapturePeriod');
          const result = this.impl.setMinCapturePeriod(params.min_period);
          break;
        }
        case 2: {
          const params = viz.mojom.FrameSinkVideoCapturer_SetMinSizeChangePeriod_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setMinSizeChangePeriod');
          const result = this.impl.setMinSizeChangePeriod(params.min_period);
          break;
        }
        case 3: {
          const params = viz.mojom.FrameSinkVideoCapturer_SetResolutionConstraints_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setResolutionConstraints');
          const result = this.impl.setResolutionConstraints(params.min_size, params.max_size, params.use_fixed_aspect_ratio);
          break;
        }
        case 4: {
          const params = viz.mojom.FrameSinkVideoCapturer_SetAutoThrottlingEnabled_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setAutoThrottlingEnabled');
          const result = this.impl.setAutoThrottlingEnabled(params.enabled);
          break;
        }
        case 5: {
          const params = viz.mojom.FrameSinkVideoCapturer_SetAnimationFpsLockIn_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setAnimationFpsLockIn');
          const result = this.impl.setAnimationFpsLockIn(params.enabled, params.majority_damaged_pixel_min_ratio);
          break;
        }
        case 6: {
          const params = viz.mojom.FrameSinkVideoCapturer_ChangeTarget_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.changeTarget');
          const result = this.impl.changeTarget(params.target, params.sub_capture_version);
          break;
        }
        case 7: {
          const params = viz.mojom.FrameSinkVideoCapturer_Start_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.consumer, params.buffer_format_preference);
          break;
        }
        case 8: {
          const params = viz.mojom.FrameSinkVideoCapturer_Stop_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 9: {
          const params = viz.mojom.FrameSinkVideoCapturer_RequestRefreshFrame_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.requestRefreshFrame');
          const result = this.impl.requestRefreshFrame();
          break;
        }
        case 10: {
          const params = viz.mojom.FrameSinkVideoCapturer_CreateOverlay_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createOverlay');
          const result = this.impl.createOverlay(params.stacking_index, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinkVideoCapturerReceiver = viz.mojom.FrameSinkVideoCapturerReceiver;

viz.mojom.FrameSinkVideoCapturerPtr = viz.mojom.FrameSinkVideoCapturerRemote;
viz.mojom.FrameSinkVideoCapturerRequest = viz.mojom.FrameSinkVideoCapturerPendingReceiver;


// Interface: FrameSinkVideoCaptureOverlay
mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec, 'viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_Params', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec, 'viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec, 'viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_Params', [
      mojo.internal.StructField('coordinates', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec,
      null,
      [image, bounds],
      false);
  }

  setBounds(bounds) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec,
      null,
      [bounds],
      false);
  }

  onCapturedMouseEvent(coordinates) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec,
      null,
      [coordinates],
      false);
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

viz.mojom.FrameSinkVideoCaptureOverlayReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = viz.mojom.FrameSinkVideoCaptureOverlay_SetImageAndBounds_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setImageAndBounds');
          const result = this.impl.setImageAndBounds(params.image, params.bounds);
          break;
        }
        case 1: {
          const params = viz.mojom.FrameSinkVideoCaptureOverlay_SetBounds_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setBounds');
          const result = this.impl.setBounds(params.bounds);
          break;
        }
        case 2: {
          const params = viz.mojom.FrameSinkVideoCaptureOverlay_OnCapturedMouseEvent_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onCapturedMouseEvent');
          const result = this.impl.onCapturedMouseEvent(params.coordinates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

viz.mojom.FrameSinkVideoCaptureOverlayReceiver = viz.mojom.FrameSinkVideoCaptureOverlayReceiver;

viz.mojom.FrameSinkVideoCaptureOverlayPtr = viz.mojom.FrameSinkVideoCaptureOverlayRemote;
viz.mojom.FrameSinkVideoCaptureOverlayRequest = viz.mojom.FrameSinkVideoCaptureOverlayPendingReceiver;

