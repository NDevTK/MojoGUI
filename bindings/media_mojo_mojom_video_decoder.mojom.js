// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};


// Union: Cdm
media.mojom.mojom.CdmSpec = { $: mojo.internal.Union(
    'media.mojom.Cdm', {
      'cdm_id': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnguessableTokenSpec,
      }},
      'cdm_context': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy,
      }},
    })
};

// Struct: SupportedVideoDecoderConfig
media.mojom.mojom.SupportedVideoDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SupportedVideoDecoderConfig',
      packedSize: 48,
      fields: [
        { name: 'profile_min', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'profile_max', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size_min', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size_max', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'allow_encrypted', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'require_encrypted', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: CommandBufferId
media.mojom.mojom.CommandBufferIdSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CommandBufferId',
      packedSize: 24,
      fields: [
        { name: 'channel_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'route_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: VideoFrameHandleReleaser
media.mojom.mojom.VideoFrameHandleReleaser = {};

media.mojom.mojom.VideoFrameHandleReleaserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoFrameHandleReleaserRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoFrameHandleReleaser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoFrameHandleReleaserPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoFrameHandleReleaserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoFrameHandleReleaserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  releaseVideoFrame(release_token, release_sync_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec,
      null,
      [release_token, release_sync_token]);
  }

};

media.mojom.mojom.VideoFrameHandleReleaser.getRemote = function() {
  let remote = new media.mojom.mojom.VideoFrameHandleReleaserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoFrameHandleReleaser',
    'context');
  return remote.$;
};

// ParamsSpec for ReleaseVideoFrame
media.mojom.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoFrameHandleReleaser.ReleaseVideoFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'release_token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'release_sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoFrameHandleReleaserPtr = media.mojom.mojom.VideoFrameHandleReleaserRemote;
media.mojom.mojom.VideoFrameHandleReleaserRequest = media.mojom.mojom.VideoFrameHandleReleaserPendingReceiver;


// Interface: VideoDecoder
media.mojom.mojom.VideoDecoder = {};

media.mojom.mojom.VideoDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoDecoderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoDecoderPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportedConfigs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec,
      media.mojom.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec,
      []);
  }

  construct(client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.VideoDecoder_Construct_ParamsSpec,
      null,
      [client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space]);
  }

  initialize(config, low_delay, cdm) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.VideoDecoder_Initialize_ParamsSpec,
      media.mojom.mojom.VideoDecoder_Initialize_ResponseParamsSpec,
      [config, low_delay, cdm]);
  }

  decode(buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.VideoDecoder_Decode_ParamsSpec,
      media.mojom.mojom.VideoDecoder_Decode_ResponseParamsSpec,
      [buffer]);
  }

  reset() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.VideoDecoder_Reset_ParamsSpec,
      null,
      []);
  }

  onOverlayInfoChanged(overlay_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec,
      null,
      [overlay_info]);
  }

};

media.mojom.mojom.VideoDecoder.getRemote = function() {
  let remote = new media.mojom.mojom.VideoDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoder',
    'context');
  return remote.$;
};

// ParamsSpec for GetSupportedConfigs
media.mojom.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.GetSupportedConfigs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.GetSupportedConfigs_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'supported_configs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.SupportedVideoDecoderConfigSpec, false), nullable: false, minVersion: 0 },
        { name: 'decoder_type', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoDecoderTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Construct
media.mojom.mojom.VideoDecoder_Construct_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Construct_Params',
      packedSize: 48,
      fields: [
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'media_log', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'video_frame_handle_releaser', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'decoder_buffer_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'command_buffer_id', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CommandBufferIdSpec, nullable: true, minVersion: 0 },
        { name: 'target_color_space', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.ColorSpaceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for Initialize
media.mojom.mojom.VideoDecoder_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Initialize_Params',
      packedSize: 40,
      fields: [
        { name: 'config', packedOffset: 16, packedBitOffset: 0, type: media.mojom.VideoDecoderConfigSpec, nullable: false, minVersion: 0 },
        { name: 'low_delay', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cdm', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

media.mojom.mojom.VideoDecoder_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Initialize_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderStatusSpec, nullable: false, minVersion: 0 },
        { name: 'needs_bitstream_conversion', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'max_decode_requests', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'decoder_type', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoDecoderTypeSpec, nullable: false, minVersion: 0 },
        { name: 'needs_transcryption', packedOffset: 20, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Decode
media.mojom.mojom.VideoDecoder_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Decode_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.mojom.VideoDecoder_Decode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Decode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: media.mojom.DecoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reset
media.mojom.mojom.VideoDecoder_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.Reset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnOverlayInfoChanged
media.mojom.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoder.OnOverlayInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'overlay_info', packedOffset: 0, packedBitOffset: 0, type: media.mojom.OverlayInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoDecoderPtr = media.mojom.mojom.VideoDecoderRemote;
media.mojom.mojom.VideoDecoderRequest = media.mojom.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
media.mojom.mojom.VideoDecoderClient = {};

media.mojom.mojom.VideoDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.VideoDecoderClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.VideoDecoderClientPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.VideoDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.VideoDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVideoFrameDecoded(frame, can_read_without_stalling, release_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec,
      null,
      [frame, can_read_without_stalling, release_token]);
  }

  onWaiting(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.VideoDecoderClient_OnWaiting_ParamsSpec,
      null,
      [reason]);
  }

  requestOverlayInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec,
      null,
      []);
  }

};

media.mojom.mojom.VideoDecoderClient.getRemote = function() {
  let remote = new media.mojom.mojom.VideoDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoDecoderClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnVideoFrameDecoded
media.mojom.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderClient.OnVideoFrameDecoded_Params',
      packedSize: 32,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoFrameSpec, nullable: false, minVersion: 0 },
        { name: 'can_read_without_stalling', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'release_token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnWaiting
media.mojom.mojom.VideoDecoderClient_OnWaiting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderClient.OnWaiting_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: media.mojom.WaitingReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestOverlayInfo
media.mojom.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoDecoderClient.RequestOverlayInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.VideoDecoderClientPtr = media.mojom.mojom.VideoDecoderClientRemote;
media.mojom.mojom.VideoDecoderClientRequest = media.mojom.mojom.VideoDecoderClientPendingReceiver;

