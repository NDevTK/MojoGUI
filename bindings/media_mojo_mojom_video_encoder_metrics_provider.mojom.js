// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/video_encoder_metrics_provider.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  initialize(encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode) {
    return this.$.initialize(encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode);
  }
  setEncodedFrameCount(encoder_id, num_encoded_frames) {
    return this.$.setEncodedFrameCount(encoder_id, num_encoded_frames);
  }
  setError(encoder_id, status) {
    return this.$.setError(encoder_id, status);
  }
  complete(encoder_id) {
    return this.$.complete(encoder_id);
  }
};

media.mojom.VideoEncoderMetricsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncoderMetricsProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec,
      null,
      [encoder_id, encoder_use_case, profile, encode_size, is_hardware_encoder, svc_mode],
      false);
  }

  setEncodedFrameCount(encoder_id, num_encoded_frames) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec,
      null,
      [encoder_id, num_encoded_frames],
      false);
  }

  setError(encoder_id, status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec,
      null,
      [encoder_id, status],
      false);
  }

  complete(encoder_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncoderMetricsProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.encoder_id, params.encoder_use_case, params.profile, params.encode_size, params.is_hardware_encoder, params.svc_mode);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec.$.structSpec);
          const result = this.impl.setEncodedFrameCount(params.encoder_id, params.num_encoded_frames);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec.$.structSpec);
          const result = this.impl.setError(params.encoder_id, params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec.$.structSpec);
          const result = this.impl.complete(params.encoder_id);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

media.mojom.VideoEncoderMetricsProviderReceiver = media.mojom.VideoEncoderMetricsProviderReceiver;

media.mojom.VideoEncoderMetricsProviderPtr = media.mojom.VideoEncoderMetricsProviderRemote;
media.mojom.VideoEncoderMetricsProviderRequest = media.mojom.VideoEncoderMetricsProviderPendingReceiver;

