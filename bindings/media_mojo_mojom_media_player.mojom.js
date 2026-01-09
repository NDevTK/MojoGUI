// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_player.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MediaPlayer
media.mojom.MediaPlayerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaPlayer';
  }

  requestPlay() {
    // Method: RequestPlay
    // Call: RequestPlay()
  }

  requestPause(triggered_by_user) {
    // Method: RequestPause
    // Call: RequestPause(triggered_by_user)
  }

  requestSeekForward(seek_time) {
    // Method: RequestSeekForward
    // Call: RequestSeekForward(seek_time)
  }

  requestSeekBackward(seek_time) {
    // Method: RequestSeekBackward
    // Call: RequestSeekBackward(seek_time)
  }

  requestSeekTo(seek_time) {
    // Method: RequestSeekTo
    // Call: RequestSeekTo(seek_time)
  }

  requestEnterPictureInPicture() {
    // Method: RequestEnterPictureInPicture
    // Call: RequestEnterPictureInPicture()
  }

  requestMute(mute) {
    // Method: RequestMute
    // Call: RequestMute(mute)
  }

  normal() {
    // Method: normal
    // Call: normal()
  }

  setVolumeMultiplier(multiplier) {
    // Method: SetVolumeMultiplier
    // Call: SetVolumeMultiplier(multiplier)
  }

  setPersistentState(persistent) {
    // Method: SetPersistentState
    // Call: SetPersistentState(persistent)
  }

  setPowerExperimentState(enabled) {
    // Method: SetPowerExperimentState
    // Call: SetPowerExperimentState(enabled)
  }

  setAudioSinkId(sink_id) {
    // Method: SetAudioSinkId
    // Call: SetAudioSinkId(sink_id)
  }

  suspendForFrameClosed() {
    // Method: SuspendForFrameClosed
    // Call: SuspendForFrameClosed()
  }

  requestMediaRemoting() {
    // Method: RequestMediaRemoting
    // Call: RequestMediaRemoting()
  }

  requestVisibility() {
    // Method: RequestVisibility
    return new Promise((resolve) => {
      // Call: RequestVisibility()
      resolve({});
    });
  }

  recordAutoPictureInPictureInfo(auto_picture_in_picture_info) {
    // Method: RecordAutoPictureInPictureInfo
    // Call: RecordAutoPictureInPictureInfo(auto_picture_in_picture_info)
  }

};

media.mojom.MediaPlayerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaPlayerObserverClient
media.mojom.MediaPlayerObserverClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaPlayerObserverClient';
  }

  getHasPlayedBefore() {
    // Method: GetHasPlayedBefore
    return new Promise((resolve) => {
      // Call: GetHasPlayedBefore()
      resolve({});
    });
  }

};

media.mojom.MediaPlayerObserverClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaPlayerObserver
media.mojom.MediaPlayerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaPlayerObserver';
  }

  onMediaPlaying() {
    // Method: OnMediaPlaying
    // Call: OnMediaPlaying()
  }

  onMediaPaused(stream_ended) {
    // Method: OnMediaPaused
    // Call: OnMediaPaused(stream_ended)
  }

  onMutedStatusChanged(muted) {
    // Method: OnMutedStatusChanged
    // Call: OnMutedStatusChanged(muted)
  }

  onMediaMetadataChanged(has_audio, has_video, content_type) {
    // Method: OnMediaMetadataChanged
    // Call: OnMediaMetadataChanged(has_audio, has_video, content_type)
  }

  onMediaPositionStateChanged(media_position) {
    // Method: OnMediaPositionStateChanged
    // Call: OnMediaPositionStateChanged(media_position)
  }

  onMediaEffectivelyFullscreenChanged(status) {
    // Method: OnMediaEffectivelyFullscreenChanged
    // Call: OnMediaEffectivelyFullscreenChanged(status)
  }

  onMediaSizeChanged(size) {
    // Method: OnMediaSizeChanged
    // Call: OnMediaSizeChanged(size)
  }

  onPictureInPictureAvailabilityChanged(available) {
    // Method: OnPictureInPictureAvailabilityChanged
    // Call: OnPictureInPictureAvailabilityChanged(available)
  }

  onAudioOutputSinkChanged(hashed_device_id) {
    // Method: OnAudioOutputSinkChanged
    // Call: OnAudioOutputSinkChanged(hashed_device_id)
  }

  onUseAudioServiceChanged(uses_audio_service) {
    // Method: OnUseAudioServiceChanged
    // Call: OnUseAudioServiceChanged(uses_audio_service)
  }

  onAudioOutputSinkChangingDisabled() {
    // Method: OnAudioOutputSinkChangingDisabled
    // Call: OnAudioOutputSinkChangingDisabled()
  }

  onRemotePlaybackMetadataChange(remote_playback_metadata) {
    // Method: OnRemotePlaybackMetadataChange
    // Call: OnRemotePlaybackMetadataChange(remote_playback_metadata)
  }

  onVideoVisibilityChanged(meets_visibility_threshold) {
    // Method: OnVideoVisibilityChanged
    // Call: OnVideoVisibilityChanged(meets_visibility_threshold)
  }

};

media.mojom.MediaPlayerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaPlayerHost
media.mojom.MediaPlayerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.MediaPlayerHost';
  }

  remote(`player_remote`) {
    // Method: remote
    // Call: remote(`player_remote`)
  }

  onMediaPlayerAdded(player_remote, observer, player_id) {
    // Method: OnMediaPlayerAdded
    // Call: OnMediaPlayerAdded(player_remote, observer, player_id)
  }

};

media.mojom.MediaPlayerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
