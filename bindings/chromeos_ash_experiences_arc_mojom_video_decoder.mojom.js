// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decoder.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};

arc.mojom.DecoderStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.DecoderBufferSpec = { $: {} };
arc.mojom.BufferSpec = { $: {} };
arc.mojom.VideoDecoderConfigSpec = { $: {} };
arc.mojom.VideoDecoder = {};
arc.mojom.VideoDecoder.$interfaceName = 'arc.mojom.VideoDecoder';
arc.mojom.VideoDecoder_Initialize_ParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Decode_ParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Decode_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Reset_ParamsSpec = { $: {} };
arc.mojom.VideoDecoder_Reset_ResponseParamsSpec = { $: {} };
arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec = { $: {} };
arc.mojom.VideoDecoderClient = {};
arc.mojom.VideoDecoderClient.$interfaceName = 'arc.mojom.VideoDecoderClient';
arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = { $: {} };
arc.mojom.VideoDecoderClient_OnError_ParamsSpec = { $: {} };

// Enum: DecoderStatus
arc.mojom.DecoderStatus = {
  OK: 0,
  ABORTED: 1,
  FAILED: 2,
  INVALID_ARGUMENT: 3,
  CREATION_FAILED: 4,
};

// Union: DecoderBuffer
mojo.internal.Union(
    arc.mojom.DecoderBufferSpec, 'arc.mojom.DecoderBuffer', {
      'buffer': {
        'ordinal': 0,
        'type': arc.mojom.BufferSpec,
        'nullable': false,
      },
      'end_of_stream': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
    });

// Struct: Buffer
mojo.internal.Struct(
    arc.mojom.BufferSpec, 'arc.mojom.Buffer', [
      mojo.internal.StructField('timestamp', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('handle_fd', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('offset', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoDecoderConfig
mojo.internal.Struct(
    arc.mojom.VideoDecoderConfigSpec, 'arc.mojom.VideoDecoderConfig', [
      mojo.internal.StructField('profile', 0, 0, arc.mojom.VideoCodecProfileSpec, null, false, 0, undefined),
      mojo.internal.StructField('coded_size', 8, 0, arc.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: VideoDecoder
mojo.internal.Struct(
    arc.mojom.VideoDecoder_Initialize_ParamsSpec, 'arc.mojom.VideoDecoder_Initialize_Params', [
      mojo.internal.StructField('config', 0, 0, arc.mojom.VideoDecoderConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoDecoderClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('video_frame_pool', 16, 0, mojo.internal.AssociatedInterfaceRequest(arc.mojom.VideoFramePoolRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Initialize_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.DecoderStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Decode_ParamsSpec, 'arc.mojom.VideoDecoder_Decode_Params', [
      mojo.internal.StructField('buffer', 0, 0, arc.mojom.DecoderBufferSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Decode_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Decode_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.DecoderStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Reset_ParamsSpec, 'arc.mojom.VideoDecoder_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_Reset_ResponseParamsSpec, 'arc.mojom.VideoDecoder_Reset_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec, 'arc.mojom.VideoDecoder_ReleaseVideoFrame_Params', [
      mojo.internal.StructField('video_frame_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VideoDecoderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoDecoderRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecoder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoDecoderPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoDecoderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoDecoderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(config, client, video_frame_pool) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.VideoDecoder_Initialize_ParamsSpec,
      arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec,
      [config, client, video_frame_pool],
      false);
  }

  decode(buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoDecoder_Decode_ParamsSpec,
      arc.mojom.VideoDecoder_Decode_ResponseParamsSpec,
      [buffer],
      false);
  }

  reset() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoDecoder_Reset_ParamsSpec,
      arc.mojom.VideoDecoder_Reset_ResponseParamsSpec,
      [],
      false);
  }

  releaseVideoFrame(video_frame_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec,
      null,
      [video_frame_id],
      false);
  }

};

arc.mojom.VideoDecoder.getRemote = function() {
  let remote = new arc.mojom.VideoDecoderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecoder',
    'context');
  return remote.$;
};

arc.mojom.VideoDecoderPtr = arc.mojom.VideoDecoderRemote;
arc.mojom.VideoDecoderRequest = arc.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
mojo.internal.Struct(
    arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec, 'arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_Params', [
      mojo.internal.StructField('video_frame_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('visible_rect', 8, 0, arc.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.VideoDecoderClient_OnError_ParamsSpec, 'arc.mojom.VideoDecoderClient_OnError_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.DecoderStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VideoDecoderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoDecoderClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecoderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoDecoderClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoDecoderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.VideoDecoderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVideoFrameDecoded(video_frame_id, visible_rect, timestamp) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec,
      null,
      [video_frame_id, visible_rect, timestamp],
      false);
  }

  onError(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoDecoderClient_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

};

arc.mojom.VideoDecoderClient.getRemote = function() {
  let remote = new arc.mojom.VideoDecoderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecoderClient',
    'context');
  return remote.$;
};

arc.mojom.VideoDecoderClientPtr = arc.mojom.VideoDecoderClientRemote;
arc.mojom.VideoDecoderClientRequest = arc.mojom.VideoDecoderClientPendingReceiver;

