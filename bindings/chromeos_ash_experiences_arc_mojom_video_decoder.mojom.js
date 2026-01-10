// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decoder.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: DecoderStatus
arc.mojom.DecoderStatus = {
  OK: 0,
  ABORTED: 1,
  FAILED: 2,
  INVALID_ARGUMENT: 3,
  CREATION_FAILED: 4,
};
arc.mojom.DecoderStatusSpec = { $: mojo.internal.Enum() };

// Union: DecoderBuffer
arc.mojom.DecoderBufferSpec = { $: mojo.internal.Union(
    'arc.mojom.DecoderBuffer', {
      'buffer': {
        'ordinal': 0,
        'type': arc.mojom.BufferSpec,
      }},
      'end_of_stream': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
      }},
    })
};

// Struct: Buffer
arc.mojom.BufferSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.Buffer',
      packedSize: 32,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'handle_fd', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: VideoDecoderConfig
arc.mojom.VideoDecoderConfigSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoderConfig',
      packedSize: 24,
      fields: [
        { name: 'profile', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.VideoCodecProfileSpec, nullable: false, minVersion: 0 },
        { name: 'coded_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: VideoDecoder
arc.mojom.VideoDecoder = {};

arc.mojom.VideoDecoder_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder_Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoDecoderConfigSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.VideoDecoderClientRemote), nullable: false, minVersion: 0 },
        { name: 'video_frame_pool', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(arc.mojom.VideoFramePoolRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.VideoDecoder_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder_Decode_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.VideoDecoder_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder_Reset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder_ReleaseVideoFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'video_frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [config, client, video_frame_pool]);
  }

  decode(buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoDecoder_Decode_ParamsSpec,
      arc.mojom.VideoDecoder_Decode_ResponseParamsSpec,
      [buffer]);
  }

  reset() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.VideoDecoder_Reset_ParamsSpec,
      null,
      []);
  }

  releaseVideoFrame(video_frame_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec,
      null,
      [video_frame_id]);
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

// ParamsSpec for Initialize
arc.mojom.VideoDecoder_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.VideoDecoderConfigSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.VideoDecoderClientRemote), nullable: false, minVersion: 0 },
        { name: 'video_frame_pool', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(arc.mojom.VideoFramePoolRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.VideoDecoder_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DecoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Decode
arc.mojom.VideoDecoder_Decode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder.Decode_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DecoderBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.VideoDecoder_Decode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder.Decode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DecoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reset
arc.mojom.VideoDecoder_Reset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder.Reset_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ReleaseVideoFrame
arc.mojom.VideoDecoder_ReleaseVideoFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoder.ReleaseVideoFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'video_frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoDecoderPtr = arc.mojom.VideoDecoderRemote;
arc.mojom.VideoDecoderRequest = arc.mojom.VideoDecoderPendingReceiver;


// Interface: VideoDecoderClient
arc.mojom.VideoDecoderClient = {};

arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_Params',
      packedSize: 32,
      fields: [
        { name: 'video_frame_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.VideoDecoderClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoderClient_OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DecoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [video_frame_id, visible_rect, timestamp]);
  }

  onError(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VideoDecoderClient_OnError_ParamsSpec,
      null,
      [status]);
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

// ParamsSpec for OnVideoFrameDecoded
arc.mojom.VideoDecoderClient_OnVideoFrameDecoded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoderClient.OnVideoFrameDecoded_Params',
      packedSize: 32,
      fields: [
        { name: 'video_frame_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'visible_rect', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnError
arc.mojom.VideoDecoderClient_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VideoDecoderClient.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DecoderStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.VideoDecoderClientPtr = arc.mojom.VideoDecoderClientRemote;
arc.mojom.VideoDecoderClientRequest = arc.mojom.VideoDecoderClientPendingReceiver;

