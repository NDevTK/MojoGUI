// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_metrics_provider.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.MediaURLSchemeSpec = { $: mojo.internal.Enum() };
media.mojom.MediaMetricsProvider = {};
media.mojom.MediaMetricsProvider.$interfaceName = 'media.mojom.MediaMetricsProvider';
media.mojom.MediaMetricsProvider_Initialize_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_OnError_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec = { $: {} };
media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec = { $: {} };

// Enum: MediaURLScheme
media.mojom.MediaURLScheme = {
  kUnknown: 0,
  kMissing: 1,
  kHttp: 2,
  kHttps: 3,
  kFtp: 4,
  kChromeExtension: 5,
  kJavascript: 6,
  kFile: 7,
  kBlob: 8,
  kData: 9,
  kFileSystem: 10,
  kChrome: 11,
  kContent: 12,
  kContentId: 13,
};

// Interface: MediaMetricsProvider
mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_Initialize_ParamsSpec, 'media.mojom.MediaMetricsProvider_Initialize_Params', [
      mojo.internal.StructField('url_scheme', 0, 0, media.mojom.MediaURLSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('stream_type', 8, 0, media.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_mse', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec, 'media.mojom.MediaMetricsProvider_OnStarted_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_OnError_ParamsSpec, 'media.mojom.MediaMetricsProvider_OnError_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec, 'media.mojom.MediaMetricsProvider_OnFallback_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.PipelineStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasPlayed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHaveEnough_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetIsEME_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetTimeToMetadata_Params', [
      mojo.internal.StructField('elapsed', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_Params', [
      mojo.internal.StructField('elapsed', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetTimeToPlayReady_Params', [
      mojo.internal.StructField('elapsed', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetRendererType_Params', [
      mojo.internal.StructField('renderer_type', 0, 0, media.mojom.RendererTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetDemuxerType_Params', [
      mojo.internal.StructField('demuxer_type', 0, 0, media.mojom.DemuxerTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetKeySystem_Params', [
      mojo.internal.StructField('key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasWaitingForKey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetIsHardwareSecure_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasTrackChange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetContainerName_Params', [
      mojo.internal.StructField('container_name', 0, 0, media.mojom.MediaContainerNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec, 'media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_Params', [
      mojo.internal.StructField('properties', 0, 0, media.mojom.PlaybackPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('recorder', 8, 0, mojo.internal.InterfaceRequest(media.mojom.WatchTimeRecorderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec, 'media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_Params', [
      mojo.internal.StructField('recorder', 0, 0, mojo.internal.InterfaceRequest(media.mojom.VideoDecodeStatsRecorderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec, 'media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.PlaybackEventsRecorderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasAudio_Params', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.AudioCodecSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetHasVideo_Params', [
      mojo.internal.StructField('codec', 0, 0, media.mojom.VideoCodecSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_Params', [
      mojo.internal.StructField('info', 0, 0, media.mojom.VideoPipelineInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec, 'media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_Params', [
      mojo.internal.StructField('info', 0, 0, media.mojom.AudioPipelineInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaMetricsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaMetricsProviderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaMetricsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaMetricsProviderPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaMetricsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaMetricsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize(is_mse, url_scheme, stream_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaMetricsProvider_Initialize_ParamsSpec,
      null,
      [is_mse, url_scheme, stream_type],
      false);
  }

  onStarted(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec,
      null,
      [status],
      false);
  }

  onError(status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaMetricsProvider_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

  onFallback(status) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec,
      null,
      [status],
      false);
  }

  setHasPlayed() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec,
      null,
      [],
      false);
  }

  setHaveEnough() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec,
      null,
      [],
      false);
  }

  setIsEME() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec,
      null,
      [],
      false);
  }

  setTimeToMetadata(elapsed) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec,
      null,
      [elapsed],
      false);
  }

  setTimeToFirstFrame(elapsed) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec,
      null,
      [elapsed],
      false);
  }

  setTimeToPlayReady(elapsed) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec,
      null,
      [elapsed],
      false);
  }

  setRendererType(renderer_type) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec,
      null,
      [renderer_type],
      false);
  }

  setDemuxerType(demuxer_type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec,
      null,
      [demuxer_type],
      false);
  }

  setKeySystem(key_system) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec,
      null,
      [key_system],
      false);
  }

  setHasWaitingForKey() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec,
      null,
      [],
      false);
  }

  setIsHardwareSecure() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec,
      null,
      [],
      false);
  }

  setHasTrackChange() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec,
      null,
      [],
      false);
  }

  setContainerName(container_name) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec,
      null,
      [container_name],
      false);
  }

  acquireWatchTimeRecorder(properties, recorder) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec,
      null,
      [properties, recorder],
      false);
  }

  acquireVideoDecodeStatsRecorder(recorder) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec,
      null,
      [recorder],
      false);
  }

  acquirePlaybackEventsRecorder(receiver) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setHasAudio(codec) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec,
      null,
      [codec],
      false);
  }

  setHasVideo(codec) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec,
      null,
      [codec],
      false);
  }

  setVideoPipelineInfo(info) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec,
      null,
      [info],
      false);
  }

  setAudioPipelineInfo(info) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec,
      null,
      [info],
      false);
  }

};

media.mojom.MediaMetricsProvider.getRemote = function() {
  let remote = new media.mojom.MediaMetricsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaMetricsProvider',
    'context');
  return remote.$;
};

media.mojom.MediaMetricsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
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
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_Initialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStarted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnFallback
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFallback (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetHasPlayed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasPlayed (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetHaveEnough
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHaveEnough (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetIsEME
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsEME (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetTimeToMetadata
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTimeToMetadata (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetTimeToFirstFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTimeToFirstFrame (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetTimeToPlayReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTimeToPlayReady (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetRendererType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRendererType (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetDemuxerType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDemuxerType (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetKeySystem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeySystem (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetHasWaitingForKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasWaitingForKey (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetIsHardwareSecure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsHardwareSecure (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetHasTrackChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasTrackChange (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetContainerName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetContainerName (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: AcquireWatchTimeRecorder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireWatchTimeRecorder (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: AcquireVideoDecodeStatsRecorder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireVideoDecodeStatsRecorder (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: AcquirePlaybackEventsRecorder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquirePlaybackEventsRecorder (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: SetHasAudio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasAudio (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: SetHasVideo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasVideo (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: SetVideoPipelineInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVideoPipelineInfo (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SetAudioPipelineInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAudioPipelineInfo (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
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
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_Initialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.is_mse, params.url_scheme, params.stream_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStarted');
          const result = this.impl.onStarted(params.status);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFallback');
          const result = this.impl.onFallback(params.status);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasPlayed');
          const result = this.impl.setHasPlayed();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHaveEnough');
          const result = this.impl.setHaveEnough();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsEME');
          const result = this.impl.setIsEME();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTimeToMetadata');
          const result = this.impl.setTimeToMetadata(params.elapsed);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTimeToFirstFrame');
          const result = this.impl.setTimeToFirstFrame(params.elapsed);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTimeToPlayReady');
          const result = this.impl.setTimeToPlayReady(params.elapsed);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setRendererType');
          const result = this.impl.setRendererType(params.renderer_type);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDemuxerType');
          const result = this.impl.setDemuxerType(params.demuxer_type);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setKeySystem');
          const result = this.impl.setKeySystem(params.key_system);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasWaitingForKey');
          const result = this.impl.setHasWaitingForKey();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsHardwareSecure');
          const result = this.impl.setIsHardwareSecure();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasTrackChange');
          const result = this.impl.setHasTrackChange();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setContainerName');
          const result = this.impl.setContainerName(params.container_name);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acquireWatchTimeRecorder');
          const result = this.impl.acquireWatchTimeRecorder(params.properties, params.recorder);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acquireVideoDecodeStatsRecorder');
          const result = this.impl.acquireVideoDecodeStatsRecorder(params.recorder);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acquirePlaybackEventsRecorder');
          const result = this.impl.acquirePlaybackEventsRecorder(params.receiver);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasAudio');
          const result = this.impl.setHasAudio(params.codec);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasVideo');
          const result = this.impl.setHasVideo(params.codec);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVideoPipelineInfo');
          const result = this.impl.setVideoPipelineInfo(params.info);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAudioPipelineInfo');
          const result = this.impl.setAudioPipelineInfo(params.info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.MediaMetricsProviderReceiver = media.mojom.MediaMetricsProviderReceiver;

media.mojom.MediaMetricsProviderPtr = media.mojom.MediaMetricsProviderRemote;
media.mojom.MediaMetricsProviderRequest = media.mojom.MediaMetricsProviderPendingReceiver;

