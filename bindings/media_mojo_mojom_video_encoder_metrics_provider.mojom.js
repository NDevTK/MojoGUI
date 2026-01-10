// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encoder_metrics_provider.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gfx = gfx || {};

media.mojom.VideoEncoderUseCaseSpec = { $: mojo.internal.Enum() };
media.mojom.VideoEncoderMetricsProvider = {};
media.mojom.VideoEncoderMetricsProvider.$interfaceName = 'media.mojom.VideoEncoderMetricsProvider';
media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec = { $: {} };
media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec = { $: {} };
media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec = { $: {} };
media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec = { $: {} };

// Enum: VideoEncoderUseCase
media.mojom.VideoEncoderUseCase = {
  kCastMirroring: 0,
  kMediaRecorder: 1,
  kWebCodecs: 2,
  kWebRTC: 3,
};

// Interface: VideoEncoderMetricsProvider
mojo.internal.Struct(
    media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec, 'media.mojom.VideoEncoderMetricsProvider_Initialize_Params', [
      mojo.internal.StructField('encoder_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('encoder_use_case', 8, 0, media.mojom.VideoEncoderUseCaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('profile', 16, 0, media.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encode_size', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('svc_mode', 32, 0, media.mojom.SVCScalabilityModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_hardware_encoder', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec, 'media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_Params', [
      mojo.internal.StructField('encoder_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('num_encoded_frames', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec, 'media.mojom.VideoEncoderMetricsProvider_SetError_Params', [
      mojo.internal.StructField('encoder_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, media.mojom.EncoderStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec, 'media.mojom.VideoEncoderMetricsProvider_Complete_Params', [
      mojo.internal.StructField('encoder_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode],
      false);
  }

  setEncodedFrameCount(encoder_id, num_encoded_frames) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec,
      null,
      [encoder_id, num_encoded_frames],
      false);
  }

  setError(encoder_id, status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec,
      null,
      [encoder_id, status],
      false);
  }

  complete(encoder_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec,
      null,
      [encoder_id],
      false);
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

media.mojom.VideoEncoderMetricsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initialize(params.encoder_id, params.encoder_use_case, params.profile, params.encode_size, params.is_hardware_encoder, params.svc_mode);
          break;
        }
        case 1: {
          const params = media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setEncodedFrameCount(params.encoder_id, params.num_encoded_frames);
          break;
        }
        case 2: {
          const params = media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setError(params.encoder_id, params.status);
          break;
        }
        case 3: {
          const params = media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec.$.decode(message.payload);
          const result = this.impl.complete(params.encoder_id);
          break;
        }
      }
    });
  }
};

media.mojom.VideoEncoderMetricsProviderReceiver = media.mojom.VideoEncoderMetricsProviderReceiver;

media.mojom.VideoEncoderMetricsProviderPtr = media.mojom.VideoEncoderMetricsProviderRemote;
media.mojom.VideoEncoderMetricsProviderRequest = media.mojom.VideoEncoderMetricsProviderPendingReceiver;

