// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_metrics_provider.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


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
media.mojom.MediaMetricsProvider = {};

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
      null,
      [is_mse, url_scheme, stream_type],
      undefined,
      undefined
    );
  }

  onStarted(status) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec,
      null,
      null,
      [status],
      undefined,
      undefined
    );
  }

  onError(status) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaMetricsProvider_OnError_ParamsSpec,
      null,
      null,
      [status],
      undefined,
      undefined
    );
  }

  onFallback(status) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec,
      null,
      null,
      [status],
      undefined,
      undefined
    );
  }

  setHasPlayed() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setHaveEnough() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setIsEME() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setTimeToMetadata(elapsed) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec,
      null,
      null,
      [elapsed],
      undefined,
      undefined
    );
  }

  setTimeToFirstFrame(elapsed) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec,
      null,
      null,
      [elapsed],
      undefined,
      undefined
    );
  }

  setTimeToPlayReady(elapsed) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec,
      null,
      null,
      [elapsed],
      undefined,
      undefined
    );
  }

  setRendererType(renderer_type) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec,
      null,
      null,
      [renderer_type],
      undefined,
      undefined
    );
  }

  setDemuxerType(demuxer_type) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec,
      null,
      null,
      [demuxer_type],
      undefined,
      undefined
    );
  }

  setKeySystem(key_system) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec,
      null,
      null,
      [key_system],
      undefined,
      undefined
    );
  }

  setHasWaitingForKey() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setIsHardwareSecure() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setHasTrackChange() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setContainerName(container_name) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec,
      null,
      null,
      [container_name],
      undefined,
      undefined
    );
  }

  acquireWatchTimeRecorder(properties, recorder) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec,
      null,
      null,
      [properties, recorder],
      undefined,
      undefined
    );
  }

  acquireVideoDecodeStatsRecorder(recorder) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec,
      null,
      null,
      [recorder],
      undefined,
      undefined
    );
  }

  acquirePlaybackEventsRecorder(receiver) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec,
      null,
      null,
      [receiver],
      undefined,
      undefined
    );
  }

  setHasAudio(codec) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec,
      null,
      null,
      [codec],
      undefined,
      undefined
    );
  }

  setHasVideo(codec) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec,
      null,
      null,
      [codec],
      undefined,
      undefined
    );
  }

  setVideoPipelineInfo(info) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec,
      null,
      null,
      [info],
      undefined,
      undefined
    );
  }

  setAudioPipelineInfo(info) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec,
      null,
      null,
      [info],
      undefined,
      undefined
    );
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

// ParamsSpec for Initialize
media.mojom.MediaMetricsProvider_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'is_mse', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'url_scheme', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'stream_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OnStarted
media.mojom.MediaMetricsProvider_OnStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.OnStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnError
media.mojom.MediaMetricsProvider_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.OnError_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFallback
media.mojom.MediaMetricsProvider_OnFallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.OnFallback_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetHasPlayed
media.mojom.MediaMetricsProvider_SetHasPlayed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetHasPlayed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetHaveEnough
media.mojom.MediaMetricsProvider_SetHaveEnough_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetHaveEnough_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetIsEME
media.mojom.MediaMetricsProvider_SetIsEME_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetIsEME_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetTimeToMetadata
media.mojom.MediaMetricsProvider_SetTimeToMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetTimeToMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'elapsed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTimeToFirstFrame
media.mojom.MediaMetricsProvider_SetTimeToFirstFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetTimeToFirstFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'elapsed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTimeToPlayReady
media.mojom.MediaMetricsProvider_SetTimeToPlayReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetTimeToPlayReady_Params',
      packedSize: 16,
      fields: [
        { name: 'elapsed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetRendererType
media.mojom.MediaMetricsProvider_SetRendererType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetRendererType_Params',
      packedSize: 16,
      fields: [
        { name: 'renderer_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDemuxerType
media.mojom.MediaMetricsProvider_SetDemuxerType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetDemuxerType_Params',
      packedSize: 16,
      fields: [
        { name: 'demuxer_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetKeySystem
media.mojom.MediaMetricsProvider_SetKeySystem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetKeySystem_Params',
      packedSize: 16,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetHasWaitingForKey
media.mojom.MediaMetricsProvider_SetHasWaitingForKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetHasWaitingForKey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetIsHardwareSecure
media.mojom.MediaMetricsProvider_SetIsHardwareSecure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetIsHardwareSecure_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetHasTrackChange
media.mojom.MediaMetricsProvider_SetHasTrackChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetHasTrackChange_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetContainerName
media.mojom.MediaMetricsProvider_SetContainerName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetContainerName_Params',
      packedSize: 16,
      fields: [
        { name: 'container_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AcquireWatchTimeRecorder
media.mojom.MediaMetricsProvider_AcquireWatchTimeRecorder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.AcquireWatchTimeRecorder_Params',
      packedSize: 24,
      fields: [
        { name: 'properties', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'recorder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AcquireVideoDecodeStatsRecorder
media.mojom.MediaMetricsProvider_AcquireVideoDecodeStatsRecorder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.AcquireVideoDecodeStatsRecorder_Params',
      packedSize: 16,
      fields: [
        { name: 'recorder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AcquirePlaybackEventsRecorder
media.mojom.MediaMetricsProvider_AcquirePlaybackEventsRecorder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.AcquirePlaybackEventsRecorder_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetHasAudio
media.mojom.MediaMetricsProvider_SetHasAudio_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetHasAudio_Params',
      packedSize: 16,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetHasVideo
media.mojom.MediaMetricsProvider_SetHasVideo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetHasVideo_Params',
      packedSize: 16,
      fields: [
        { name: 'codec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVideoPipelineInfo
media.mojom.MediaMetricsProvider_SetVideoPipelineInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetVideoPipelineInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAudioPipelineInfo
media.mojom.MediaMetricsProvider_SetAudioPipelineInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaMetricsProvider.SetAudioPipelineInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaMetricsProviderPtr = media.mojom.MediaMetricsProviderRemote;
media.mojom.MediaMetricsProviderRequest = media.mojom.MediaMetricsProviderPendingReceiver;

