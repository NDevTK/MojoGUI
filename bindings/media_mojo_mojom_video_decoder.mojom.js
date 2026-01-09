// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: SupportedVideoDecoderConfig
media.mojom.SupportedVideoDecoderConfig = class {
  constructor(values = {}) {
    this.profile_max = values.profile_max !== undefined ? values.profile_max : null;
    this.require_encrypted = values.require_encrypted !== undefined ? values.require_encrypted : false;
  }
};

// Struct: CommandBufferId
media.mojom.CommandBufferId = class {
  constructor(values = {}) {
    this.route_id = values.route_id !== undefined ? values.route_id : 0;
  }
};

// Interface: VideoFrameHandleReleaser
media.mojom.VideoFrameHandleReleaserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoFrameHandleReleaser';
  }

  releaseVideoFrame(release_token, release_sync_token) {
    // Method: ReleaseVideoFrame
    // Call: ReleaseVideoFrame(release_token, release_sync_token)
  }

};

media.mojom.VideoFrameHandleReleaserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoDecoder
media.mojom.VideoDecoderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoDecoder';
  }

  getSupportedConfigs() {
    // Method: GetSupportedConfigs
    return new Promise((resolve) => {
      // Call: GetSupportedConfigs()
      resolve({});
    });
  }

  construct(client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space) {
    // Method: Construct
    // Call: Construct(client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space)
  }

  initialize(config, low_delay, cdm) {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize(config, low_delay, cdm)
      resolve({});
    });
  }

  decode(buffer) {
    // Method: Decode
    return new Promise((resolve) => {
      // Call: Decode(buffer)
      resolve({});
    });
  }

  reset() {
    // Method: Reset
    // Call: Reset()
  }

  onOverlayInfoChanged(overlay_info) {
    // Method: OnOverlayInfoChanged
    // Call: OnOverlayInfoChanged(overlay_info)
  }

};

media.mojom.VideoDecoderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: VideoDecoderClient
media.mojom.VideoDecoderClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.VideoDecoderClient';
  }

  onVideoFrameDecoded(frame, can_read_without_stalling, release_token) {
    // Method: OnVideoFrameDecoded
    // Call: OnVideoFrameDecoded(frame, can_read_without_stalling, release_token)
  }

  onWaiting(reason) {
    // Method: OnWaiting
    // Call: OnWaiting(reason)
  }

  requestOverlayInfo() {
    // Method: RequestOverlayInfo
    // Call: RequestOverlayInfo()
  }

};

media.mojom.VideoDecoderClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
