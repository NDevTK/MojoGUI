// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/recording/public/mojom/recording_service.mojom
// Module: recording.mojom

'use strict';

// Module namespace
var recording = recording || {};
recording.mojom = recording.mojom || {};
var services = services || {};
var services = services || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};

recording.mojom.RecordingStatusSpec = { $: mojo.internal.Enum() };
recording.mojom.DriveFsQuotaDelegate = {};
recording.mojom.DriveFsQuotaDelegate.$interfaceName = 'recording.mojom.DriveFsQuotaDelegate';
recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec = { $: {} };
recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec = { $: {} };
recording.mojom.RecordingServiceClient = {};
recording.mojom.RecordingServiceClient.$interfaceName = 'recording.mojom.RecordingServiceClient';
recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec = { $: {} };
recording.mojom.RecordingService = {};
recording.mojom.RecordingService.$interfaceName = 'recording.mojom.RecordingService';
recording.mojom.RecordingService_RecordFullscreen_ParamsSpec = { $: {} };
recording.mojom.RecordingService_RecordWindow_ParamsSpec = { $: {} };
recording.mojom.RecordingService_RecordRegion_ParamsSpec = { $: {} };
recording.mojom.RecordingService_StopRecording_ParamsSpec = { $: {} };
recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec = { $: {} };
recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec = { $: {} };
recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec = { $: {} };

// Enum: RecordingStatus
recording.mojom.RecordingStatus = {
  kSuccess: 0,
  kServiceClosing: 1,
  kVizVideoCapturerDisconnected: 2,
  kAudioEncoderInitializationFailure: 3,
  kVideoEncoderInitializationFailure: 4,
  kAudioEncodingError: 5,
  kVideoEncodingError: 6,
  kIoError: 7,
  kLowDiskSpace: 8,
  kLowDriveFsQuota: 9,
  kVideoEncoderReconfigurationFailure: 10,
};

// Interface: DriveFsQuotaDelegate
mojo.internal.Struct(
    recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec, 'recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec, 'recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParams', [
      mojo.internal.StructField('free_remaining_bytes', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

recording.mojom.DriveFsQuotaDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.DriveFsQuotaDelegateRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.DriveFsQuotaDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.DriveFsQuotaDelegatePendingReceiver,
      handle);
    this.$ = new recording.mojom.DriveFsQuotaDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.DriveFsQuotaDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDriveFsFreeSpaceBytes() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec,
      recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec,
      []);
  }

};

recording.mojom.DriveFsQuotaDelegate.getRemote = function() {
  let remote = new recording.mojom.DriveFsQuotaDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.DriveFsQuotaDelegate',
    'context');
  return remote.$;
};

recording.mojom.DriveFsQuotaDelegatePtr = recording.mojom.DriveFsQuotaDelegateRemote;
recording.mojom.DriveFsQuotaDelegateRequest = recording.mojom.DriveFsQuotaDelegatePendingReceiver;


// Interface: RecordingServiceClient
mojo.internal.Struct(
    recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec, 'recording.mojom.RecordingServiceClient_OnRecordingEnded_Params', [
      mojo.internal.StructField('status', 8, 0, recording.mojom.RecordingStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('thumbnail', 0, 0, gfx.mojom.ImageSkiaSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

recording.mojom.RecordingServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.RecordingServiceClientRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.RecordingServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.RecordingServiceClientPendingReceiver,
      handle);
    this.$ = new recording.mojom.RecordingServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.RecordingServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRecordingEnded(status, thumbnail) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec,
      null,
      [status, thumbnail]);
  }

};

recording.mojom.RecordingServiceClient.getRemote = function() {
  let remote = new recording.mojom.RecordingServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.RecordingServiceClient',
    'context');
  return remote.$;
};

recording.mojom.RecordingServiceClientPtr = recording.mojom.RecordingServiceClientRemote;
recording.mojom.RecordingServiceClientRequest = recording.mojom.RecordingServiceClientPendingReceiver;


// Interface: RecordingService
mojo.internal.Struct(
    recording.mojom.RecordingService_RecordFullscreen_ParamsSpec, 'recording.mojom.RecordingService_RecordFullscreen_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(recording.mojom.RecordingServiceClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('video_capturer', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(recording.mojom.DriveFsQuotaDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('output_file_path', 40, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 48, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_size_dip', 56, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_RecordWindow_ParamsSpec, 'recording.mojom.RecordingService_RecordWindow_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(recording.mojom.RecordingServiceClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('video_capturer', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(recording.mojom.DriveFsQuotaDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('output_file_path', 40, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 48, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_size_dip', 56, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 80, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('subtree_capture_id', 64, 0, viz.mojom.SubtreeCaptureIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('window_size_dip', 72, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 96]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_RecordRegion_ParamsSpec, 'recording.mojom.RecordingService_RecordRegion_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(recording.mojom.RecordingServiceClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('video_capturer', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('microphone_stream_factory', 16, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('system_audio_stream_factory', 24, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('drive_fs_quota_delegate', 32, 0, mojo.internal.InterfaceProxy(recording.mojom.DriveFsQuotaDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('output_file_path', 40, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_id', 48, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('frame_sink_size_dip', 56, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('device_scale_factor', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('crop_region_dip', 64, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_StopRecording_ParamsSpec, 'recording.mojom.RecordingService_StopRecording_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec, 'recording.mojom.RecordingService_OnRecordedWindowChangingRoot_Params', [
      mojo.internal.StructField('new_frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('new_frame_sink_size_dip', 8, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('new_device_scale_factor', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec, 'recording.mojom.RecordingService_OnRecordedWindowSizeChanged_Params', [
      mojo.internal.StructField('new_window_size_dip', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec, 'recording.mojom.RecordingService_OnFrameSinkSizeChanged_Params', [
      mojo.internal.StructField('new_frame_sink_size_dip', 0, 0, gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('new_device_scale_factor', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

recording.mojom.RecordingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.RecordingServiceRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.RecordingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.RecordingServicePendingReceiver,
      handle);
    this.$ = new recording.mojom.RecordingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.RecordingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordFullscreen(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.RecordingService_RecordFullscreen_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor]);
  }

  recordWindow(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, subtree_capture_id, window_size_dip) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      recording.mojom.RecordingService_RecordWindow_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, subtree_capture_id, window_size_dip]);
  }

  recordRegion(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, crop_region_dip) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      recording.mojom.RecordingService_RecordRegion_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, crop_region_dip]);
  }

  stopRecording() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      recording.mojom.RecordingService_StopRecording_ParamsSpec,
      null,
      []);
  }

  onRecordedWindowChangingRoot(new_frame_sink_id, new_frame_sink_size_dip, new_device_scale_factor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec,
      null,
      [new_frame_sink_id, new_frame_sink_size_dip, new_device_scale_factor]);
  }

  onRecordedWindowSizeChanged(new_window_size_dip) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec,
      null,
      [new_window_size_dip]);
  }

  onFrameSinkSizeChanged(new_frame_sink_size_dip, new_device_scale_factor) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec,
      null,
      [new_frame_sink_size_dip, new_device_scale_factor]);
  }

};

recording.mojom.RecordingService.getRemote = function() {
  let remote = new recording.mojom.RecordingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.RecordingService',
    'context');
  return remote.$;
};

recording.mojom.RecordingServicePtr = recording.mojom.RecordingServiceRemote;
recording.mojom.RecordingServiceRequest = recording.mojom.RecordingServicePendingReceiver;

