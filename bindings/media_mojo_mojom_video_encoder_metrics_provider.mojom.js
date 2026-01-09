// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encoder_metrics_provider.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: VideoEncoderUseCase
media.mojom.VideoEncoderUseCase = {
  kCastMirroring: 0,
  kMediaRecorder: 1,
  kWebCodecs: 2,
  kWebRTC: 3,
};

// Interface: VideoEncoderMetricsProvider
media.mojom.VideoEncoderMetricsProvider = {};

media.mojom.VideoEncoderMetricsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.VideoEncoderMetricsProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.VideoEncoderMetricsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.VideoEncoderMetricsProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.VideoEncoderMetricsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.VideoEncoderMetricsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec,
      null,
      [encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode]);
  }

  setEncodedFrameCount(encoder_id, num_encoded_frames) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec,
      null,
      [encoder_id, num_encoded_frames]);
  }

  setError(encoder_id, status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec,
      null,
      [encoder_id, status]);
  }

  complete(encoder_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec,
      null,
      [encoder_id]);
  }

};

media.mojom.VideoEncoderMetricsProvider.getRemote = function() {
  let remote = new media.mojom.VideoEncoderMetricsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.VideoEncoderMetricsProvider',
    'context');
  return remote.$;
};

// ParamsSpec for Initialize
media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncoderMetricsProvider.Initialize_Params',
      packedSize: 56,
      fields: [
        { name: 'encoder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'encoder_use_case', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'profile', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'encode_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_hardware_encoder', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'svc_mode', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEncodedFrameCount
media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncoderMetricsProvider.SetEncodedFrameCount_Params',
      packedSize: 24,
      fields: [
        { name: 'encoder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'num_encoded_frames', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetError
media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncoderMetricsProvider.SetError_Params',
      packedSize: 24,
      fields: [
        { name: 'encoder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Complete
media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoEncoderMetricsProvider.Complete_Params',
      packedSize: 16,
      fields: [
        { name: 'encoder_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.VideoEncoderMetricsProviderPtr = media.mojom.VideoEncoderMetricsProviderRemote;
media.mojom.VideoEncoderMetricsProviderRequest = media.mojom.VideoEncoderMetricsProviderPendingReceiver;

