// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_player.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MediaPlayer
media.mojom.MediaPlayerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaPlayerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaPlayerPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaPlayerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaPlayerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestPlay() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaPlayer_RequestPlay_ParamsSpec.$,
      null,
      []);
  }

  requestPause(triggered_by_user) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaPlayer_RequestPause_ParamsSpec.$,
      null,
      [triggered_by_user]);
  }

  requestSeekForward(seek_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec.$,
      null,
      [seek_time]);
  }

  requestSeekBackward(seek_time) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec.$,
      null,
      [seek_time]);
  }

  requestSeekTo(seek_time) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec.$,
      null,
      [seek_time]);
  }

  requestEnterPictureInPicture() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec.$,
      null,
      []);
  }

  requestMute(mute) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.MediaPlayer_RequestMute_ParamsSpec.$,
      null,
      [mute]);
  }

  setVolumeMultiplier(multiplier) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec.$,
      null,
      [multiplier]);
  }

  setPersistentState(persistent) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.MediaPlayer_SetPersistentState_ParamsSpec.$,
      null,
      [persistent]);
  }

  setPowerExperimentState(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec.$,
      null,
      [enabled]);
  }

  setAudioSinkId(sink_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec.$,
      null,
      [sink_id]);
  }

  suspendForFrameClosed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec.$,
      null,
      []);
  }

  requestMediaRemoting() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec.$,
      null,
      []);
  }

  requestVisibility() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media.mojom.MediaPlayer_RequestVisibility_ParamsSpec.$,
      media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec.$,
      []);
  }

  recordAutoPictureInPictureInfo(auto_picture_in_picture_info) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec.$,
      null,
      [auto_picture_in_picture_info]);
  }

};

media.mojom.MediaPlayer.getRemote = function() {
  let remote = new media.mojom.MediaPlayerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayer',
    'context');
  return remote.$;
}};

// ParamsSpec for RequestPlay
media.mojom.MediaPlayer_RequestPlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestPlay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestPause
media.mojom.MediaPlayer_RequestPause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestPause_Params',
      packedSize: 16,
      fields: [
        { name: 'triggered_by_user', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestSeekForward
media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestSeekForward_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestSeekBackward
media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestSeekBackward_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestSeekTo
media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestSeekTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestEnterPictureInPicture
media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestEnterPictureInPicture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestMute
media.mojom.MediaPlayer_RequestMute_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestMute_Params',
      packedSize: 16,
      fields: [
        { name: 'mute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetVolumeMultiplier
media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.SetVolumeMultiplier_Params',
      packedSize: 16,
      fields: [
        { name: 'multiplier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPersistentState
media.mojom.MediaPlayer_SetPersistentState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.SetPersistentState_Params',
      packedSize: 16,
      fields: [
        { name: 'persistent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetPowerExperimentState
media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.SetPowerExperimentState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetAudioSinkId
media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.SetAudioSinkId_Params',
      packedSize: 16,
      fields: [
        { name: 'sink_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SuspendForFrameClosed
media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.SuspendForFrameClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestMediaRemoting
media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestMediaRemoting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RequestVisibility
media.mojom.MediaPlayer_RequestVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RequestVisibility_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_sufficiently_visible_video', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RecordAutoPictureInPictureInfo
media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayer.RecordAutoPictureInPictureInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'auto_picture_in_picture_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
media.mojom.MediaPlayerPtr = media.mojom.MediaPlayerRemote;
media.mojom.MediaPlayerRequest = media.mojom.MediaPlayerPendingReceiver;


// Interface: MediaPlayerObserverClient
media.mojom.MediaPlayerObserverClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaPlayerObserverClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerObserverClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaPlayerObserverClientPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaPlayerObserverClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaPlayerObserverClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getHasPlayedBefore() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec.$,
      media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec.$,
      []);
  }

};

media.mojom.MediaPlayerObserverClient.getRemote = function() {
  let remote = new media.mojom.MediaPlayerObserverClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerObserverClient',
    'context');
  return remote.$;
}};

// ParamsSpec for GetHasPlayedBefore
media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserverClient.GetHasPlayedBefore_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserverClient.GetHasPlayedBefore_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_played_before', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
media.mojom.MediaPlayerObserverClientPtr = media.mojom.MediaPlayerObserverClientRemote;
media.mojom.MediaPlayerObserverClientRequest = media.mojom.MediaPlayerObserverClientPendingReceiver;


// Interface: MediaPlayerObserver
media.mojom.MediaPlayerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaPlayerObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaPlayerObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaPlayerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaPlayerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMediaPlaying() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec.$,
      null,
      []);
  }

  onMediaPaused(stream_ended) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec.$,
      null,
      [stream_ended]);
  }

  onMutedStatusChanged(muted) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec.$,
      null,
      [muted]);
  }

  onMediaMetadataChanged(has_audio, has_video, content_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec.$,
      null,
      [has_audio, has_video, content_type]);
  }

  onMediaPositionStateChanged(media_position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec.$,
      null,
      [media_position]);
  }

  onMediaEffectivelyFullscreenChanged(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec.$,
      null,
      [status]);
  }

  onMediaSizeChanged(size) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec.$,
      null,
      [size]);
  }

  onPictureInPictureAvailabilityChanged(available) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec.$,
      null,
      [available]);
  }

  onAudioOutputSinkChanged(hashed_device_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec.$,
      null,
      [hashed_device_id]);
  }

  onUseAudioServiceChanged(uses_audio_service) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec.$,
      null,
      [uses_audio_service]);
  }

  onAudioOutputSinkChangingDisabled() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec.$,
      null,
      []);
  }

  onRemotePlaybackMetadataChange(remote_playback_metadata) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec.$,
      null,
      [remote_playback_metadata]);
  }

  onVideoVisibilityChanged(meets_visibility_threshold) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec.$,
      null,
      [meets_visibility_threshold]);
  }

};

media.mojom.MediaPlayerObserver.getRemote = function() {
  let remote = new media.mojom.MediaPlayerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerObserver',
    'context');
  return remote.$;
}};

// ParamsSpec for OnMediaPlaying
media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnMediaPlaying_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnMediaPaused
media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnMediaPaused_Params',
      packedSize: 16,
      fields: [
        { name: 'stream_ended', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnMutedStatusChanged
media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnMutedStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'muted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnMediaMetadataChanged
media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnMediaMetadataChanged_Params',
      packedSize: 32,
      fields: [
        { name: 'has_audio', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'has_video', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'content_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnMediaPositionStateChanged
media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnMediaPositionStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'media_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnMediaEffectivelyFullscreenChanged
media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnMediaEffectivelyFullscreenChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnMediaSizeChanged
media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnMediaSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnPictureInPictureAvailabilityChanged
media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnPictureInPictureAvailabilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnAudioOutputSinkChanged
media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnAudioOutputSinkChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'hashed_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnUseAudioServiceChanged
media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnUseAudioServiceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'uses_audio_service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnAudioOutputSinkChangingDisabled
media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnAudioOutputSinkChangingDisabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnRemotePlaybackMetadataChange
media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnRemotePlaybackMetadataChange_Params',
      packedSize: 16,
      fields: [
        { name: 'remote_playback_metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnVideoVisibilityChanged
media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerObserver.OnVideoVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'meets_visibility_threshold', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
media.mojom.MediaPlayerObserverPtr = media.mojom.MediaPlayerObserverRemote;
media.mojom.MediaPlayerObserverRequest = media.mojom.MediaPlayerObserverPendingReceiver;


// Interface: MediaPlayerHost
media.mojom.MediaPlayerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaPlayerHostRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaPlayerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaPlayerHostPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaPlayerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaPlayerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMediaPlayerAdded(player_remote, observer, player_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec.$,
      null,
      [player_remote, observer, player_id]);
  }

};

media.mojom.MediaPlayerHost.getRemote = function() {
  let remote = new media.mojom.MediaPlayerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaPlayerHost',
    'context');
  return remote.$;
}};

// ParamsSpec for OnMediaPlayerAdded
media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaPlayerHost.OnMediaPlayerAdded_Params',
      packedSize: 32,
      fields: [
        { name: 'player_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'player_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
media.mojom.MediaPlayerHostPtr = media.mojom.MediaPlayerHostRemote;
media.mojom.MediaPlayerHostRequest = media.mojom.MediaPlayerHostPendingReceiver;

