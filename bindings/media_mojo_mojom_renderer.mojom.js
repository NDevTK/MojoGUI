// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/renderer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: Renderer
media.mojom.RendererPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.Renderer';
  }

  initialize(client, streams) {
    // Method: Initialize
    return new Promise((resolve) => {
      // Call: Initialize(client, streams)
      resolve({});
    });
  }

  flush() {
    // Method: Flush
    // Call: Flush()
  }

  startPlayingFrom(time) {
    // Method: StartPlayingFrom
    // Call: StartPlayingFrom(time)
  }

  setPlaybackRate(playback_rate) {
    // Method: SetPlaybackRate
    // Call: SetPlaybackRate(playback_rate)
  }

  setVolume(volume) {
    // Method: SetVolume
    // Call: SetVolume(volume)
  }

  setCdm(cdm_id) {
    // Method: SetCdm
    return new Promise((resolve) => {
      // Call: SetCdm(cdm_id)
      resolve({});
    });
  }

  setLatencyHint(latency_hint) {
    // Method: SetLatencyHint
    // Call: SetLatencyHint(latency_hint)
  }

};

media.mojom.RendererRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RendererClient
media.mojom.RendererClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.RendererClient';
  }

  onTimeUpdate(time, max_time, capture_time) {
    // Method: OnTimeUpdate
    // Call: OnTimeUpdate(time, max_time, capture_time)
  }

  onBufferingStateChange(state, reason) {
    // Method: OnBufferingStateChange
    // Call: OnBufferingStateChange(state, reason)
  }

  onEnded() {
    // Method: OnEnded
    // Call: OnEnded()
  }

  onError(status) {
    // Method: OnError
    // Call: OnError(status)
  }

  onAudioConfigChange(config) {
    // Method: OnAudioConfigChange
    // Call: OnAudioConfigChange(config)
  }

  onVideoConfigChange(config) {
    // Method: OnVideoConfigChange
    // Call: OnVideoConfigChange(config)
  }

  onVideoNaturalSizeChange(size) {
    // Method: OnVideoNaturalSizeChange
    // Call: OnVideoNaturalSizeChange(size)
  }

  onVideoOpacityChange(opaque) {
    // Method: OnVideoOpacityChange
    // Call: OnVideoOpacityChange(opaque)
  }

  onStatisticsUpdate(stats) {
    // Method: OnStatisticsUpdate
    // Call: OnStatisticsUpdate(stats)
  }

  onWaiting(reason) {
    // Method: OnWaiting
    // Call: OnWaiting(reason)
  }

};

media.mojom.RendererClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
