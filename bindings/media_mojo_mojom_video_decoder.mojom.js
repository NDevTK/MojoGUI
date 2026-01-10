// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_decoder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gpu = gpu || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

media.mojom.CdmSpec = { $: {} };
media.mojom.SupportedVideoDecoderConfigSpec = { $: {} };
media.mojom.CommandBufferIdSpec = { $: {} };
media.mojom.VideoFrameHandleReleaser = {};
media.mojom.VideoFrameHandleReleaser.$interfaceName = 'media.mojom.VideoFrameHandleReleaser';
media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec = { $: {} };
media.mojom.VideoDecoder = {};
media.mojom.VideoDecoder.$interfaceName = 'media.mojom.VideoDecoder';
media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec = { $: {} };
media.mojom.VideoDecoder_Construct_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_Initialize_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_Initialize_ResponseParamsSpec = { $: {} };
media.mojom.VideoDecoder_Decode_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_Decode_ResponseParamsSpec = { $: {} };
media.mojom.VideoDecoder_Reset_ParamsSpec = { $: {} };
media.mojom.VideoDecoder_Reset_ResponseParamsSpec = { $: {} };
media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec = { $: {} };
media.mojom.VideoDecoderClient = {};
media.mojom.VideoDecoderClient.$interfaceName = 'media.mojom.VideoDecoderClient';
media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = { $: {} };
media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec = { $: {} };
media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec = { $: {} };

// Union: Cdm
mojo.internal.Union(
    media.mojom.CdmSpec, 'media.mojom.Cdm', {
      'cdm_id': {
        'ordinal': 0,
        'type': mojo_base.mojom.UnguessableTokenSpec.$,
        'nullable': false,
      },
      'cdm_context': {
        'ordinal': 1,
        'type': mojo.internal.InterfaceProxy(media.mojom.CdmContextForOOPVDRemote),
        'nullable': false,
      },
    });

// Struct: SupportedVideoDecoderConfig
mojo.internal.Struct(
    media.mojom.SupportedVideoDecoderConfigSpec, 'media.mojom.SupportedVideoDecoderConfig', [
      mojo.internal.StructField('profile_min', 0, 0, gpu.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile_max', 8, 0, gpu.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coded_size_min', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coded_size_max', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_encrypted', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_encrypted', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CommandBufferId
mojo.internal.Struct(
    media.mojom.CommandBufferIdSpec, 'media.mojom.CommandBufferId', [
      mojo.internal.StructField('channel_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('route_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: VideoFrameHandleReleaser
mojo.internal.Struct(
    media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec, 'media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_Params', [
      mojo.internal.StructField('release_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('release_sync_token', 8, 0, gpu.mojom.SyncTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

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
      media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec,
      null,
      [release_token, release_sync_token],
      false);
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

media.mojom.VideoFrameHandleReleaserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoFrameHandleReleaser_ReleaseVideoFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.releaseVideoFrame(params.release_token, params.release_sync_token);
          break;
        }
      }
    });
  }
};

media.mojom.VideoFrameHandleReleaserReceiver = media.mojom.VideoFrameHandleReleaserReceiver;

media.mojom.VideoFrameHandleReleaserPtr = media.mojom.VideoFrameHandleReleaserRemote;
media.mojom.VideoFrameHandleReleaserRequest = media.mojom.VideoFrameHandleReleaserPendingReceiver;


// Interface: VideoDecoder
mojo.internal.Struct(
    media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec, 'media.mojom.VideoDecoder_GetSupportedConfigs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec, 'media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParams', [
      mojo.internal.StructField('supported_configs', 0, 0, mojo.internal.Array(media.mojom.SupportedVideoDecoderConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('decoder_type', 8, 0, media.mojom.VideoDecoderTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Construct_ParamsSpec, 'media.mojom.VideoDecoder_Construct_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('media_log', 8, 0, mojo.internal.InterfaceProxy(media.mojom.MediaLogRemote), null, false, 0, undefined),
      mojo.internal.StructField('video_frame_handle_releaser', 16, 0, mojo.internal.InterfaceRequest(media.mojom.VideoFrameHandleReleaserSpec), null, false, 0, undefined),
      mojo.internal.StructField('decoder_buffer_pipe', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('command_buffer_id', 32, 0, media.mojom.CommandBufferIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('target_color_space', 40, 0, gfx.mojom.ColorSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Initialize_ParamsSpec, 'media.mojom.VideoDecoder_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, media.mojom.VideoDecoderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cdm', 8, 0, media.mojom.CdmSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('low_delay', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Initialize_ResponseParamsSpec, 'media.mojom.VideoDecoder_Initialize_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decoder_type', 8, 0, media.mojom.VideoDecoderTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_decode_requests', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('needs_bitstream_conversion', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('needs_transcryption', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Decode_ParamsSpec, 'media.mojom.VideoDecoder_Decode_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Decode_ResponseParamsSpec, 'media.mojom.VideoDecoder_Decode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.DecoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Reset_ParamsSpec, 'media.mojom.VideoDecoder_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_Reset_ResponseParamsSpec, 'media.mojom.VideoDecoder_Reset_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec, 'media.mojom.VideoDecoder_OnOverlayInfoChanged_Params', [
      mojo.internal.StructField('overlay_info', 0, 0, gpu.mojom.OverlayInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec,
      media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec,
      [],
      false);
  }

  construct(client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoDecoder_Construct_ParamsSpec,
      null,
      [client, media_log, video_frame_handle_releaser, decoder_buffer_pipe, command_buffer_id, target_color_space],
      false);
  }

  initialize(config, low_delay, cdm) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoDecoder_Initialize_ParamsSpec,
      media.mojom.VideoDecoder_Initialize_ResponseParamsSpec,
      [config, low_delay, cdm],
      false);
  }

  decode(buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoDecoder_Decode_ParamsSpec,
      media.mojom.VideoDecoder_Decode_ResponseParamsSpec,
      [buffer],
      false);
  }

  reset() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.VideoDecoder_Reset_ParamsSpec,
      media.mojom.VideoDecoder_Reset_ResponseParamsSpec,
      [],
      false);
  }

  onOverlayInfoChanged(overlay_info) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec,
      null,
      [overlay_info],
      false);
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

media.mojom.VideoDecoderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoDecoder_GetSupportedConfigs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSupportedConfigs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecoder_GetSupportedConfigs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = media.mojom.VideoDecoder_Construct_ParamsSpec.$.decode(message.payload);
          const result = this.impl.construct(params.client, params.media_log, params.video_frame_handle_releaser, params.decoder_buffer_pipe, params.command_buffer_id, params.target_color_space);
          break;
        }
        case 2: {
          const params = media.mojom.VideoDecoder_Initialize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initialize(params.config, params.low_delay, params.cdm);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecoder_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = media.mojom.VideoDecoder_Decode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.decode(params.buffer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecoder_Decode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = media.mojom.VideoDecoder_Reset_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reset();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.VideoDecoder_Reset_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = media.mojom.VideoDecoder_OnOverlayInfoChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onOverlayInfoChanged(params.overlay_info);
          break;
        }
      }
    });
  }
};

media.mojom.VideoDecoderReceiver = media.mojom.VideoDecoderReceiver;

media.mojom.VideoDecoderPtr = media.mojom.VideoDecoderRemote;
media.mojom.VideoDecoderRequest = media.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
mojo.internal.Struct(
    media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec, 'media.mojom.VideoDecoderClient_OnVideoFrameDecoded_Params', [
      mojo.internal.StructField('frame', 0, 0, media.mojom.VideoFrameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('release_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('can_read_without_stalling', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec, 'media.mojom.VideoDecoderClient_OnWaiting_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.WaitingReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec, 'media.mojom.VideoDecoderClient_RequestOverlayInfo_Params', [
    ],
    [[0, 8]]);

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
      media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec,
      null,
      [frame, can_read_without_stalling, release_token],
      false);
  }

  onWaiting(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec,
      null,
      [reason],
      false);
  }

  requestOverlayInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec,
      null,
      [],
      false);
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

media.mojom.VideoDecoderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVideoFrameDecoded(params.frame, params.can_read_without_stalling, params.release_token);
          break;
        }
        case 1: {
          const params = media.mojom.VideoDecoderClient_OnWaiting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWaiting(params.reason);
          break;
        }
        case 2: {
          const params = media.mojom.VideoDecoderClient_RequestOverlayInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestOverlayInfo();
          break;
        }
      }
    });
  }
};

media.mojom.VideoDecoderClientReceiver = media.mojom.VideoDecoderClientReceiver;

media.mojom.VideoDecoderClientPtr = media.mojom.VideoDecoderClientRemote;
media.mojom.VideoDecoderClientRequest = media.mojom.VideoDecoderClientPendingReceiver;

