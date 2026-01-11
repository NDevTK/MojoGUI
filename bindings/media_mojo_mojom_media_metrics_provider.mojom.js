// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_metrics_provider.mojom
// Module: media.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  initialize(is_mse, url_scheme, stream_type) {
    return this.$.initialize(is_mse, url_scheme, stream_type);
  }
  onStarted(status) {
    return this.$.onStarted(status);
  }
  onError(status) {
    return this.$.onError(status);
  }
  onFallback(status) {
    return this.$.onFallback(status);
  }
  setHasPlayed() {
    return this.$.setHasPlayed();
  }
  setHaveEnough() {
    return this.$.setHaveEnough();
  }
  setIsEME() {
    return this.$.setIsEME();
  }
  setTimeToMetadata(elapsed) {
    return this.$.setTimeToMetadata(elapsed);
  }
  setTimeToFirstFrame(elapsed) {
    return this.$.setTimeToFirstFrame(elapsed);
  }
  setTimeToPlayReady(elapsed) {
    return this.$.setTimeToPlayReady(elapsed);
  }
  setRendererType(renderer_type) {
    return this.$.setRendererType(renderer_type);
  }
  setDemuxerType(demuxer_type) {
    return this.$.setDemuxerType(demuxer_type);
  }
  setKeySystem(key_system) {
    return this.$.setKeySystem(key_system);
  }
  setHasWaitingForKey() {
    return this.$.setHasWaitingForKey();
  }
  setIsHardwareSecure() {
    return this.$.setIsHardwareSecure();
  }
  setHasTrackChange() {
    return this.$.setHasTrackChange();
  }
  setContainerName(container_name) {
    return this.$.setContainerName(container_name);
  }
  acquireWatchTimeRecorder(properties, recorder) {
    return this.$.acquireWatchTimeRecorder(properties, recorder);
  }
  acquireVideoDecodeStatsRecorder(recorder) {
    return this.$.acquireVideoDecodeStatsRecorder(recorder);
  }
  acquirePlaybackEventsRecorder(receiver) {
    return this.$.acquirePlaybackEventsRecorder(receiver);
  }
  setHasAudio(codec) {
    return this.$.setHasAudio(codec);
  }
  setHasVideo(codec) {
    return this.$.setHasVideo(codec);
  }
  setVideoPipelineInfo(info) {
    return this.$.setVideoPipelineInfo(info);
  }
  setAudioPipelineInfo(info) {
    return this.$.setAudioPipelineInfo(info);
  }
};

media.mojom.MediaMetricsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MediaMetricsProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(is_mse, url_scheme, stream_type) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.MediaMetricsProvider_Initialize_ParamsSpec,
      null,
      [is_mse, url_scheme, stream_type],
      false);
  }

  onStarted(status) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec,
      null,
      [status],
      false);
  }

  onError(status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      media.mojom.MediaMetricsProvider_OnError_ParamsSpec,
      null,
      [status],
      false);
  }

  onFallback(status) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec,
      null,
      [status],
      false);
  }

  setHasPlayed() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec,
      null,
      [],
      false);
  }

  setHaveEnough() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec,
      null,
      [],
      false);
  }

  setIsEME() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec,
      null,
      [],
      false);
  }

  setTimeToMetadata(elapsed) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec,
      null,
      [elapsed],
      false);
  }

  setTimeToFirstFrame(elapsed) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec,
      null,
      [elapsed],
      false);
  }

  setTimeToPlayReady(elapsed) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec,
      null,
      [elapsed],
      false);
  }

  setRendererType(renderer_type) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec,
      null,
      [renderer_type],
      false);
  }

  setDemuxerType(demuxer_type) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec,
      null,
      [demuxer_type],
      false);
  }

  setKeySystem(key_system) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec,
      null,
      [key_system],
      false);
  }

  setHasWaitingForKey() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec,
      null,
      [],
      false);
  }

  setIsHardwareSecure() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec,
      null,
      [],
      false);
  }

  setHasTrackChange() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec,
      null,
      [],
      false);
  }

  setContainerName(container_name) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec,
      null,
      [container_name],
      false);
  }

  acquireWatchTimeRecorder(properties, recorder) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec,
      null,
      [properties, recorder],
      false);
  }

  acquireVideoDecodeStatsRecorder(recorder) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec,
      null,
      [recorder],
      false);
  }

  acquirePlaybackEventsRecorder(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec,
      null,
      [receiver],
      false);
  }

  setHasAudio(codec) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec,
      null,
      [codec],
      false);
  }

  setHasVideo(codec) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec,
      null,
      [codec],
      false);
  }

  setVideoPipelineInfo(info) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec,
      null,
      [info],
      false);
  }

  setAudioPipelineInfo(info) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MediaMetricsProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.is_mse, params.url_scheme, params.stream_type);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onStarted(params.status);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError(params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec.$.structSpec);
          const result = this.impl.onFallback(params.status);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec.$.structSpec);
          const result = this.impl.setHasPlayed();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec.$.structSpec);
          const result = this.impl.setHaveEnough();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec.$.structSpec);
          const result = this.impl.setIsEME();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec.$.structSpec);
          const result = this.impl.setTimeToMetadata(params.elapsed);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec.$.structSpec);
          const result = this.impl.setTimeToFirstFrame(params.elapsed);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec.$.structSpec);
          const result = this.impl.setTimeToPlayReady(params.elapsed);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec.$.structSpec);
          const result = this.impl.setRendererType(params.renderer_type);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec.$.structSpec);
          const result = this.impl.setDemuxerType(params.demuxer_type);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec.$.structSpec);
          const result = this.impl.setKeySystem(params.key_system);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec.$.structSpec);
          const result = this.impl.setHasWaitingForKey();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec.$.structSpec);
          const result = this.impl.setIsHardwareSecure();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec.$.structSpec);
          const result = this.impl.setHasTrackChange();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec.$.structSpec);
          const result = this.impl.setContainerName(params.container_name);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec.$.structSpec);
          const result = this.impl.acquireWatchTimeRecorder(params.properties, params.recorder);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec.$.structSpec);
          const result = this.impl.acquireVideoDecodeStatsRecorder(params.recorder);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec.$.structSpec);
          const result = this.impl.acquirePlaybackEventsRecorder(params.receiver);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec.$.structSpec);
          const result = this.impl.setHasAudio(params.codec);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec.$.structSpec);
          const result = this.impl.setHasVideo(params.codec);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec.$.structSpec);
          const result = this.impl.setVideoPipelineInfo(params.info);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec.$.structSpec);
          const result = this.impl.setAudioPipelineInfo(params.info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.MediaMetricsProviderReceiver = media.mojom.MediaMetricsProviderReceiver;

media.mojom.MediaMetricsProviderPtr = media.mojom.MediaMetricsProviderRemote;
media.mojom.MediaMetricsProviderRequest = media.mojom.MediaMetricsProviderPendingReceiver;

