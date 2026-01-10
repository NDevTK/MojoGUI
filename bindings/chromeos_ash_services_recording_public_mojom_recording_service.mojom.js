// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/recording/public/mojom/recording_service.mojom
// Module: recording.mojom

'use strict';

// Module namespace
var recording = recording || {};
recording.mojom = recording.mojom || {};


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
recording.mojom.RecordingStatusSpec = { $: mojo.internal.Enum() };

// Interface: DriveFsQuotaDelegate
recording.mojom.DriveFsQuotaDelegate = {};

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

// ParamsSpec for GetDriveFsFreeSpaceBytes
recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ParamsSpec = {
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

recording.mojom.DriveFsQuotaDelegate_GetDriveFsFreeSpaceBytes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'free_remaining_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
recording.mojom.DriveFsQuotaDelegatePtr = recording.mojom.DriveFsQuotaDelegateRemote;
recording.mojom.DriveFsQuotaDelegateRequest = recording.mojom.DriveFsQuotaDelegatePendingReceiver;


// Interface: RecordingServiceClient
recording.mojom.RecordingServiceClient = {};

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

// ParamsSpec for OnRecordingEnded
recording.mojom.RecordingServiceClient_OnRecordingEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingServiceClient.OnRecordingEnded_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: recording.mojom.RecordingStatusSpec, nullable: false, minVersion: 0 },
        { name: 'thumbnail', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
recording.mojom.RecordingServiceClientPtr = recording.mojom.RecordingServiceClientRemote;
recording.mojom.RecordingServiceClientRequest = recording.mojom.RecordingServiceClientPendingReceiver;


// Interface: RecordingService
recording.mojom.RecordingService = {};

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

// ParamsSpec for RecordFullscreen
recording.mojom.RecordingService_RecordFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.RecordFullscreen_Params',
      packedSize: 56,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'video_capturer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'microphone_stream_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'system_audio_stream_factory', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'drive_fs_quota_delegate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'output_file_path', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_id', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_size_dip', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for RecordWindow
recording.mojom.RecordingService_RecordWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.RecordWindow_Params',
      packedSize: 72,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'video_capturer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'microphone_stream_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'system_audio_stream_factory', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'drive_fs_quota_delegate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'output_file_path', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_id', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_size_dip', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'subtree_capture_id', packedOffset: 48, packedBitOffset: 0, type: viz.mojom.SubtreeCaptureIdSpec, nullable: false, minVersion: 0 },
        { name: 'window_size_dip', packedOffset: 56, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// ParamsSpec for RecordRegion
recording.mojom.RecordingService_RecordRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'recording.mojom.RecordingService.RecordRegion_Params',
      packedSize: 64,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'video_capturer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'microphone_stream_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'system_audio_stream_factory', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'drive_fs_quota_delegate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'output_file_path', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_id', packedOffset: 32, packedBitOffset: 0, type: viz.mojom.FrameSinkIdSpec, nullable: false, minVersion: 0 },
        { name: 'frame_sink_size_dip', packedOffset: 40, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'crop_region_dip', packedOffset: 48, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// ParamsSpec for StopRecording
recording.mojom.RecordingService_StopRecording_ParamsSpec = {
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
recording.mojom.RecordingService_OnRecordedWindowChangingRoot_ParamsSpec = {
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
recording.mojom.RecordingService_OnRecordedWindowSizeChanged_ParamsSpec = {
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
recording.mojom.RecordingService_OnFrameSinkSizeChanged_ParamsSpec = {
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
recording.mojom.RecordingServicePtr = recording.mojom.RecordingServiceRemote;
recording.mojom.RecordingServiceRequest = recording.mojom.RecordingServicePendingReceiver;

