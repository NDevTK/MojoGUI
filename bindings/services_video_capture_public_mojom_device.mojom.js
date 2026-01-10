// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/device.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var services = services || {};

video_capture.mojom.Device = {};
video_capture.mojom.Device.$interfaceName = 'video_capture.mojom.Device';
video_capture.mojom.Device_Start_ParamsSpec = { $: {} };
video_capture.mojom.Device_MaybeSuspend_ParamsSpec = { $: {} };
video_capture.mojom.Device_Resume_ParamsSpec = { $: {} };
video_capture.mojom.Device_GetPhotoState_ParamsSpec = { $: {} };
video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec = { $: {} };
video_capture.mojom.Device_SetPhotoOptions_ParamsSpec = { $: {} };
video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec = { $: {} };
video_capture.mojom.Device_TakePhoto_ParamsSpec = { $: {} };
video_capture.mojom.Device_TakePhoto_ResponseParamsSpec = { $: {} };
video_capture.mojom.Device_ProcessFeedback_ParamsSpec = { $: {} };
video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec = { $: {} };

// Interface: Device
mojo.internal.Struct(
    video_capture.mojom.Device_Start_ParamsSpec, 'video_capture.mojom.Device_Start_Params', [
      mojo.internal.StructField('requested_settings', 0, 0, media.mojom.VideoCaptureParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.Device_MaybeSuspend_ParamsSpec, 'video_capture.mojom.Device_MaybeSuspend_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    video_capture.mojom.Device_Resume_ParamsSpec, 'video_capture.mojom.Device_Resume_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    video_capture.mojom.Device_GetPhotoState_ParamsSpec, 'video_capture.mojom.Device_GetPhotoState_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec, 'video_capture.mojom.Device_GetPhotoState_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, media.mojom.PhotoStateSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_SetPhotoOptions_ParamsSpec, 'video_capture.mojom.Device_SetPhotoOptions_Params', [
      mojo.internal.StructField('settings', 0, 0, media.mojom.PhotoSettingsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec, 'video_capture.mojom.Device_SetPhotoOptions_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_TakePhoto_ParamsSpec, 'video_capture.mojom.Device_TakePhoto_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    video_capture.mojom.Device_TakePhoto_ResponseParamsSpec, 'video_capture.mojom.Device_TakePhoto_ResponseParams', [
      mojo.internal.StructField('blob', 0, 0, media.mojom.BlobSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_ProcessFeedback_ParamsSpec, 'video_capture.mojom.Device_ProcessFeedback_Params', [
      mojo.internal.StructField('feedback', 0, 0, media.mojom.VideoCaptureFeedbackSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec, 'video_capture.mojom.Device_RequestRefreshFrame_Params', [
    ],
    [{version: 0, packedSize: 8}]);

video_capture.mojom.DevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.DeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.Device';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.DevicePendingReceiver,
      handle);
    this.$ = new video_capture.mojom.DeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.DeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(requested_settings, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.Device_Start_ParamsSpec,
      null,
      [requested_settings, handler]);
  }

  maybeSuspend() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.Device_MaybeSuspend_ParamsSpec,
      null,
      []);
  }

  resume() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.Device_Resume_ParamsSpec,
      null,
      []);
  }

  getPhotoState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.Device_GetPhotoState_ParamsSpec,
      video_capture.mojom.Device_GetPhotoState_ResponseParamsSpec,
      []);
  }

  setPhotoOptions(settings) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.Device_SetPhotoOptions_ParamsSpec,
      video_capture.mojom.Device_SetPhotoOptions_ResponseParamsSpec,
      [settings]);
  }

  takePhoto() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.Device_TakePhoto_ParamsSpec,
      video_capture.mojom.Device_TakePhoto_ResponseParamsSpec,
      []);
  }

  processFeedback(feedback) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.Device_ProcessFeedback_ParamsSpec,
      null,
      [feedback]);
  }

  requestRefreshFrame() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      video_capture.mojom.Device_RequestRefreshFrame_ParamsSpec,
      null,
      []);
  }

};

video_capture.mojom.Device.getRemote = function() {
  let remote = new video_capture.mojom.DeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.Device',
    'context');
  return remote.$;
};

video_capture.mojom.DevicePtr = video_capture.mojom.DeviceRemote;
video_capture.mojom.DeviceRequest = video_capture.mojom.DevicePendingReceiver;

