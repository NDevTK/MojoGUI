// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_metrics_provider.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: MediaURLScheme
media.mojom.MediaURLScheme = {
};

// Interface: MediaMetricsProvider
media.mojom.MediaMetricsProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaMetricsProvider';
  }

  initialize(is_mse, url_scheme, stream_type) {
    // Method: Initialize
    // Call: Initialize(is_mse, url_scheme, stream_type)
  }

  onStarted(status) {
    // Method: OnStarted
    // Call: OnStarted(status)
  }

  onError(status) {
    // Method: OnError
    // Call: OnError(status)
  }

  onFallback(status) {
    // Method: OnFallback
    // Call: OnFallback(status)
  }

  setHasPlayed() {
    // Method: SetHasPlayed
    // Call: SetHasPlayed()
  }

  setHaveEnough() {
    // Method: SetHaveEnough
    // Call: SetHaveEnough()
  }

  setIsEME() {
    // Method: SetIsEME
    // Call: SetIsEME()
  }

  setTimeToMetadata(elapsed) {
    // Method: SetTimeToMetadata
    // Call: SetTimeToMetadata(elapsed)
  }

  setTimeToFirstFrame(elapsed) {
    // Method: SetTimeToFirstFrame
    // Call: SetTimeToFirstFrame(elapsed)
  }

  setTimeToPlayReady(elapsed) {
    // Method: SetTimeToPlayReady
    // Call: SetTimeToPlayReady(elapsed)
  }

  setRendererType(renderer_type) {
    // Method: SetRendererType
    // Call: SetRendererType(renderer_type)
  }

  setDemuxerType(demuxer_type) {
    // Method: SetDemuxerType
    // Call: SetDemuxerType(demuxer_type)
  }

  setKeySystem(key_system) {
    // Method: SetKeySystem
    // Call: SetKeySystem(key_system)
  }

  setHasWaitingForKey() {
    // Method: SetHasWaitingForKey
    // Call: SetHasWaitingForKey()
  }

  setIsHardwareSecure() {
    // Method: SetIsHardwareSecure
    // Call: SetIsHardwareSecure()
  }

  setHasTrackChange() {
    // Method: SetHasTrackChange
    // Call: SetHasTrackChange()
  }

  setContainerName(container_name) {
    // Method: SetContainerName
    // Call: SetContainerName(container_name)
  }

  acquireWatchTimeRecorder(properties, recorder) {
    // Method: AcquireWatchTimeRecorder
    // Call: AcquireWatchTimeRecorder(properties, recorder)
  }

  acquireVideoDecodeStatsRecorder(recorder) {
    // Method: AcquireVideoDecodeStatsRecorder
    // Call: AcquireVideoDecodeStatsRecorder(recorder)
  }

  acquirePlaybackEventsRecorder(receiver) {
    // Method: AcquirePlaybackEventsRecorder
    // Call: AcquirePlaybackEventsRecorder(receiver)
  }

  setHasAudio(codec) {
    // Method: SetHasAudio
    // Call: SetHasAudio(codec)
  }

  setHasVideo(codec) {
    // Method: SetHasVideo
    // Call: SetHasVideo(codec)
  }

  setVideoPipelineInfo(info) {
    // Method: SetVideoPipelineInfo
    // Call: SetVideoPipelineInfo(info)
  }

  setAudioPipelineInfo(info) {
    // Method: SetAudioPipelineInfo
    // Call: SetAudioPipelineInfo(info)
  }

};

media.mojom.MediaMetricsProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
