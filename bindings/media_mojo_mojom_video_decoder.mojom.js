// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: VideoFrameHandleReleaser
media.mojom.VideoFrameHandleReleaserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoFrameHandleReleaserRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoFrameHandleReleaser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoFrameHandleReleaserPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoFrameHandleReleaserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoFrameHandleReleaserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  releaseVideoFrame(release_token, release_sync_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec.$,
      null,
      [release_token, release_sync_token]);
  }

};

media.mojom.VideoFrameHandleReleaser.getRemote = function() {
  let remote = new media.mojom.VideoFrameHandleReleaserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoFrameHandleReleaser',
    'context');
  return remote.$;
};

// ParamsSpec for ReleaseVideoFrame
media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoFrameHandleReleaser.ReleaseVideoFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'release_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'release_sync_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoFrameHandleReleaserPtr = media.mojom.VideoFrameHandleReleaserRemote;
media.mojom.VideoFrameHandleReleaserRequest = media.mojom.VideoFrameHandleReleaserPendingReceiver;


// Interface: VideoDecoder
media.mojom.VideoDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecoderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecoderPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportedConfigs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec.$,
      media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec.$,
      []);
  }

  construct(client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoDecoder_Construct_ParamsSpec.$,
      null,
      [client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space]);
  }

  initialize(config, low_delay, cdm) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoDecoder_Initialize_ParamsSpec.$,
      media.mojom.VideoDecoder_Initialize_ResponseParamsSpec.$,
      [config, low_delay, cdm]);
  }

  decode(buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoDecoder_Decode_ParamsSpec.$,
      media.mojom.VideoDecoder_Decode_ResponseParamsSpec.$,
      [buffer]);
  }

  reset() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.VideoDecoder_Reset_ParamsSpec.$,
      null,
      []);
  }

  onOverlayInfoChanged(overlay_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec.$,
      null,
      [overlay_info]);
  }

};

media.mojom.VideoDecoder.getRemote = function() {
  let remote = new media.mojom.VideoDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoder',
    'context');
  return remote.$;
};

// ParamsSpec for GetSupportedConfigs
media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.GetSupportedConfigs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.GetSupportedConfigs_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'supported_configs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'decoder_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Construct
media.mojom.VideoDecoder_Construct_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Construct_Params',
      packedSize: 56,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'media_log', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'video_frame_handle_releaser', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'decoder_buffer_pipe', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'command_buffer_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'target_color_space', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Initialize
media.mojom.VideoDecoder_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'low_delay', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cdm', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoDecoder_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Initialize_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'needs_bitstream_conversion', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'max_decode_requests', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'decoder_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'needs_transcryption', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Decode
media.mojom.VideoDecoder_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Decode_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.VideoDecoder_Decode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Decode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Reset
media.mojom.VideoDecoder_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Reset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnOverlayInfoChanged
media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.OnOverlayInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'overlay_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoDecoderPtr = media.mojom.VideoDecoderRemote;
media.mojom.VideoDecoderRequest = media.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
media.mojom.VideoDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoDecoderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoDecoderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVideoFrameDecoded(frame, can_read_without_stalling, release_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec.$,
      null,
      [frame, can_read_without_stalling, release_token]);
  }

  onWaiting(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec.$,
      null,
      [reason]);
  }

  requestOverlayInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec.$,
      null,
      []);
  }

};

media.mojom.VideoDecoderClient.getRemote = function() {
  let remote = new media.mojom.VideoDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnVideoFrameDecoded
media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderClient.OnVideoFrameDecoded_Params',
      packedSize: 32,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'can_read_without_stalling', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'release_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWaiting
media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderClient.OnWaiting_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestOverlayInfo
media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderClient.RequestOverlayInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoDecoderClientPtr = media.mojom.VideoDecoderClientRemote;
media.mojom.VideoDecoderClientRequest = media.mojom.VideoDecoderClientPendingReceiver;

