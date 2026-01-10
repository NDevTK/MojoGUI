// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_metrics_provider.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

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
      mojo.internal.StructField('is_mse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('url_scheme', 8, 0, media.mojom.MediaURLSchemeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('stream_type', 16, 0, media.mojom.MediaStreamTypeSpec.$, null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'media.mojom.MediaMetricsProvider',
    'context');
  return remote.$;
};

media.mojom.MediaMetricsProviderPtr = media.mojom.MediaMetricsProviderRemote;
media.mojom.MediaMetricsProviderRequest = media.mojom.MediaMetricsProviderPendingReceiver;

