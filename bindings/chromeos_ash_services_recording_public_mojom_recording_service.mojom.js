// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/recording/public/mojom/recording_service.mojom
// Module: recording.mojom

'use strict';

// Module namespace
var recording = recording || {};
recording.mojom = recording.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: RecordingStatus
recording.mojom.mojom.RecordingStatus = {
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
recording.mojom.mojom.RecordingStatusSpec = { $: mojo.internal.Enum() };

// Interface: DriveFsQuotaDelegate
recording.mojom.mojom.DriveFsQuotaDelegate = {};

recording.mojom.mojom.DriveFsQuotaDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.mojom.DriveFsQuotaDelegateRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.DriveFsQuotaDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.mojom.DriveFsQuotaDelegatePendingReceiver,
      handle);
    this.$ = new recording.mojom.mojom.DriveFsQuotaDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.mojom.DriveFsQuotaDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDriveFsFreeSpaceBytes() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec,
      recording.mojom.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec,
      []);
  }

};

recording.mojom.mojom.DriveFsQuotaDelegate.getRemote = function() {
  let remote = new recording.mojom.mojom.DriveFsQuotaDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.DriveFsQuotaDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for GetDriveFsFreeSpaceBytes
recording.mojom.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.DriveFsQuotaDelegate.GetDriveFsFreeSpaceBytes_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

recording.mojom.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.DriveFsQuotaDelegate.GetDriveFsFreeSpaceBytes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'free_remaining_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
recording.mojom.mojom.DriveFsQuotaDelegatePtr = recording.mojom.mojom.DriveFsQuotaDelegateRemote;
recording.mojom.mojom.DriveFsQuotaDelegateRequest = recording.mojom.mojom.DriveFsQuotaDelegatePendingReceiver;


// Interface: RecordingServiceClient
recording.mojom.mojom.RecordingServiceClient = {};

recording.mojom.mojom.RecordingServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.mojom.RecordingServiceClientRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.RecordingServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.mojom.RecordingServiceClientPendingReceiver,
      handle);
    this.$ = new recording.mojom.mojom.RecordingServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.mojom.RecordingServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRecordingEnded(status, thumbnail) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec,
      null,
      [status, thumbnail]);
  }

};

recording.mojom.mojom.RecordingServiceClient.getRemote = function() {
  let remote = new recording.mojom.mojom.RecordingServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.RecordingServiceClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnRecordingEnded
recording.mojom.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingServiceClient.OnRecordingEnded_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: recording.mojom.RecordingStatusSpec, nullable: false, minVersion: 0 },
        { name: 'thumbnail', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
recording.mojom.mojom.RecordingServiceClientPtr = recording.mojom.mojom.RecordingServiceClientRemote;
recording.mojom.mojom.RecordingServiceClientRequest = recording.mojom.mojom.RecordingServiceClientPendingReceiver;


// Interface: RecordingService
recording.mojom.mojom.RecordingService = {};

recording.mojom.mojom.RecordingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

recording.mojom.mojom.RecordingServiceRemote = class {
  static get $interfaceName() {
    return 'recording.mojom.RecordingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      recording.mojom.mojom.RecordingServicePendingReceiver,
      handle);
    this.$ = new recording.mojom.mojom.RecordingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

recording.mojom.mojom.RecordingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordFullscreen(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      recording.mojom.mojom.RecordingService_RecordFullscreen_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor]);
  }

  recordWindow(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, subtree_capture_id, window_size_dip) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      recording.mojom.mojom.RecordingService_RecordWindow_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, subtree_capture_id, window_size_dip]);
  }

  recordRegion(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, crop_region_dip) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      recording.mojom.mojom.RecordingService_RecordRegion_ParamsSpec,
      null,
      [client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, crop_region_dip]);
  }

  stopRecording() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      recording.mojom.mojom.RecordingService_StopRecording_ParamsSpec,
      null,
      []);
  }

  onRecordedWindowChangingRoot(new_frame_sink_id, new_frame_sink_size_dip, new_device_scale_factor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      recording.mojom.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec,
      null,
      [new_frame_sink_id, new_frame_sink_size_dip, new_device_scale_factor]);
  }

  onRecordedWindowSizeChanged(new_window_size_dip) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      recording.mojom.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec,
      null,
      [new_window_size_dip]);
  }

  onFrameSinkSizeChanged(new_frame_sink_size_dip, new_device_scale_factor) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      recording.mojom.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec,
      null,
      [new_frame_sink_size_dip, new_device_scale_factor]);
  }

};

recording.mojom.mojom.RecordingService.getRemote = function() {
  let remote = new recording.mojom.mojom.RecordingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'recording.mojom.RecordingService',
    'context');
  return remote.$;
};

// ParamsSpec for RecordFullscreen
recording.mojom.mojom.RecordingService_RecordFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.RecordFullscreen_Params',
      packedSize: 56,
      fields: [
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'video_capturer', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'microphone_stream_factory', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'system_audio_stream_factory', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'drive_fs_quota_delegate', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'output_file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_size_dip', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for RecordWindow
recording.mojom.mojom.RecordingService_RecordWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.RecordWindow_Params',
      packedSize: 72,
      fields: [
        { name: 'client', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'video_capturer', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'microphone_stream_factory', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'system_audio_stream_factory', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'drive_fs_quota_delegate', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'output_file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_size_dip', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'subtree_capture_id', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.SubtreeCaptureIdSpec, nullable: false, minVersion: 0 },
        { name: 'window_size_dip', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// ParamsSpec for RecordRegion
recording.mojom.mojom.RecordingService_RecordRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.RecordRegion_Params',
      packedSize: 64,
      fields: [
        { name: 'client', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'video_capturer', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'microphone_stream_factory', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'system_audio_stream_factory', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'drive_fs_quota_delegate', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'output_file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_id', packedOffset: 8, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_size_dip', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'crop_region_dip', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for StopRecording
recording.mojom.mojom.RecordingService_StopRecording_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.StopRecording_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnRecordedWindowChangingRoot
recording.mojom.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.OnRecordedWindowChangingRoot_Params',
      packedSize: 32,
      fields: [
        { name: 'new_frame_sink_id', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'new_frame_sink_size_dip', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'new_device_scale_factor', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnRecordedWindowSizeChanged
recording.mojom.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.OnRecordedWindowSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_window_size_dip', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFrameSinkSizeChanged
recording.mojom.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.OnFrameSinkSizeChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'new_frame_sink_size_dip', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'new_device_scale_factor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
recording.mojom.mojom.RecordingServicePtr = recording.mojom.mojom.RecordingServiceRemote;
recording.mojom.mojom.RecordingServiceRequest = recording.mojom.mojom.RecordingServicePendingReceiver;

