// Auto-generated MojoJS binding
// Source: chromium_src/components/system_media_controls/mac/remote_cocoa/system_media_controls.mojom
// Module: system_media_controls.mojom

'use strict';

// Module namespace
var system_media_controls = system_media_controls || {};
system_media_controls.mojom = system_media_controls.mojom || {};


// Enum: PlaybackStatus
system_media_controls.mojom.PlaybackStatus = {
};

// Interface: SystemMediaControls
system_media_controls.mojom.SystemMediaControlsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'system_media_controls.mojom.SystemMediaControls';
  }

  setIsNextEnabled(enabled) {
    // Method: SetIsNextEnabled
    // Call: SetIsNextEnabled(enabled)
  }

  setIsPreviousEnabled(enabled) {
    // Method: SetIsPreviousEnabled
    // Call: SetIsPreviousEnabled(enabled)
  }

  setIsPlayPauseEnabled(enabled) {
    // Method: SetIsPlayPauseEnabled
    // Call: SetIsPlayPauseEnabled(enabled)
  }

  setIsStopEnabled(enabled) {
    // Method: SetIsStopEnabled
    // Call: SetIsStopEnabled(enabled)
  }

  setIsSeekToEnabled(enabled) {
    // Method: SetIsSeekToEnabled
    // Call: SetIsSeekToEnabled(enabled)
  }

  setPlaybackStatus(status) {
    // Method: SetPlaybackStatus
    // Call: SetPlaybackStatus(status)
  }

  setTitle(title) {
    // Method: SetTitle
    // Call: SetTitle(title)
  }

  setArtist(artist) {
    // Method: SetArtist
    // Call: SetArtist(artist)
  }

  setAlbum(album) {
    // Method: SetAlbum
    // Call: SetAlbum(album)
  }

  setThumbnail(thumbnail) {
    // Method: SetThumbnail
    // Call: SetThumbnail(thumbnail)
  }

  setPosition(position) {
    // Method: SetPosition
    // Call: SetPosition(position)
  }

  clearMetadata() {
    // Method: ClearMetadata
    // Call: ClearMetadata()
  }

};

system_media_controls.mojom.SystemMediaControlsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemMediaControlsObserver
system_media_controls.mojom.SystemMediaControlsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'system_media_controls.mojom.SystemMediaControlsObserver';
  }

  onNext() {
    // Method: OnNext
    // Call: OnNext()
  }

  onPrevious() {
    // Method: OnPrevious
    // Call: OnPrevious()
  }

  onPause() {
    // Method: OnPause
    // Call: OnPause()
  }

  onPlayPause() {
    // Method: OnPlayPause
    // Call: OnPlayPause()
  }

  onStop() {
    // Method: OnStop
    // Call: OnStop()
  }

  onPlay() {
    // Method: OnPlay
    // Call: OnPlay()
  }

  onSeekTo(seek_time) {
    // Method: OnSeekTo
    // Call: OnSeekTo(seek_time)
  }

  onBridgeCreatedForTesting() {
    // Method: OnBridgeCreatedForTesting
    // Call: OnBridgeCreatedForTesting()
  }

  onMetadataClearedForTesting() {
    // Method: OnMetadataClearedForTesting
    // Call: OnMetadataClearedForTesting()
  }

};

system_media_controls.mojom.SystemMediaControlsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
