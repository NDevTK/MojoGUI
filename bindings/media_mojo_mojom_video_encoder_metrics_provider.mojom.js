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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetEncodedFrameCount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEncodedFrameCount (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Complete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Complete (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.VideoEncoderMetricsProvider_Initialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.encoder_id, params.encoder_use_case, params.profile, params.encode_size, params.is_hardware_encoder, params.svc_mode);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.VideoEncoderMetricsProvider_SetEncodedFrameCount_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setEncodedFrameCount');
          const result = this.impl.setEncodedFrameCount(params.encoder_id, params.num_encoded_frames);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.VideoEncoderMetricsProvider_SetError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setError');
          const result = this.impl.setError(params.encoder_id, params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.VideoEncoderMetricsProvider_Complete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.complete');
          const result = this.impl.complete(params.encoder_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.VideoEncoderMetricsProviderReceiver = media.mojom.VideoEncoderMetricsProviderReceiver;

media.mojom.VideoEncoderMetricsProviderPtr = media.mojom.VideoEncoderMetricsProviderRemote;
media.mojom.VideoEncoderMetricsProviderRequest = media.mojom.VideoEncoderMetricsProviderPendingReceiver;

