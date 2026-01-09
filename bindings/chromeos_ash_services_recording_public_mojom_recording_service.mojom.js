// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/recording/public/mojom/recording_service.mojom
// Module: recording.mojom

'use strict';

// Module namespace
var recording = recording || {};
recording.mojom = recording.mojom || {};


// Enum: RecordingStatus
recording.mojom.RecordingStatus = {
};

// Interface: DriveFsQuotaDelegate
recording.mojom.DriveFsQuotaDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'recording.mojom.DriveFsQuotaDelegate';
  }

  getDriveFsFreeSpaceBytes() {
    // Method: GetDriveFsFreeSpaceBytes
    return new Promise((resolve) => {
      // Call: GetDriveFsFreeSpaceBytes()
      resolve({});
    });
  }

};

recording.mojom.DriveFsQuotaDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RecordingServiceClient
recording.mojom.RecordingServiceClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'recording.mojom.RecordingServiceClient';
  }

  onRecordingEnded(status, thumbnail) {
    // Method: OnRecordingEnded
    // Call: OnRecordingEnded(status, thumbnail)
  }

};

recording.mojom.RecordingServiceClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RecordingService
recording.mojom.RecordingServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'recording.mojom.RecordingService';
  }

  recordFullscreen(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor) {
    // Method: RecordFullscreen
    // Call: RecordFullscreen(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor)
  }

  recordWindow(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, subtree_capture_id, window_size_dip) {
    // Method: RecordWindow
    // Call: RecordWindow(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, subtree_capture_id, window_size_dip)
  }

  recordRegion(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, crop_region_dip) {
    // Method: RecordRegion
    // Call: RecordRegion(client, video_capturer, microphone_stream_factory, system_audio_stream_factory, drive_fs_quota_delegate, output_file_path, frame_sink_id, frame_sink_size_dip, device_scale_factor, crop_region_dip)
  }

  stopRecording() {
    // Method: StopRecording
    // Call: StopRecording()
  }

  onRecordedWindowChangingRoot(new_frame_sink_id, new_frame_sink_size_dip, new_device_scale_factor) {
    // Method: OnRecordedWindowChangingRoot
    // Call: OnRecordedWindowChangingRoot(new_frame_sink_id, new_frame_sink_size_dip, new_device_scale_factor)
  }

  onRecordedWindowSizeChanged(new_window_size_dip) {
    // Method: OnRecordedWindowSizeChanged
    // Call: OnRecordedWindowSizeChanged(new_window_size_dip)
  }

  onFrameSinkSizeChanged(new_frame_sink_size_dip, new_device_scale_factor) {
    // Method: OnFrameSinkSizeChanged
    // Call: OnFrameSinkSizeChanged(new_frame_sink_size_dip, new_device_scale_factor)
  }

};

recording.mojom.RecordingServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
