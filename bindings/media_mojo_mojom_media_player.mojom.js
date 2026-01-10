// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_player.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};

media.mojom.MediaPlayer = {};
media.mojom.MediaPlayer.$interfaceName = 'media.mojom.MediaPlayer';
media.mojom.MediaPlayer_RequestPlay_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestPause_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestMute_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SetPersistentState_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestVisibility_ParamsSpec = { $: {} };
media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec = { $: {} };
media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserverClient = {};
media.mojom.MediaPlayerObserverClient.$interfaceName = 'media.mojom.MediaPlayerObserverClient';
media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver = {};
media.mojom.MediaPlayerObserver.$interfaceName = 'media.mojom.MediaPlayerObserver';
media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec = { $: {} };
media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec = { $: {} };
media.mojom.MediaPlayerHost = {};
media.mojom.MediaPlayerHost.$interfaceName = 'media.mojom.MediaPlayerHost';
media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec = { $: {} };

// Interface: MediaPlayer
mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestPlay_ParamsSpec, 'media.mojom.MediaPlayer_RequestPlay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestPause_ParamsSpec, 'media.mojom.MediaPlayer_RequestPause_Params', [
      mojo.internal.StructField('triggered_by_user', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekForward_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekBackward_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec, 'media.mojom.MediaPlayer_RequestSeekTo_Params', [
      mojo.internal.StructField('seek_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec, 'media.mojom.MediaPlayer_RequestEnterPictureInPicture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestMute_ParamsSpec, 'media.mojom.MediaPlayer_RequestMute_Params', [
      mojo.internal.StructField('mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec, 'media.mojom.MediaPlayer_SetVolumeMultiplier_Params', [
      mojo.internal.StructField('multiplier', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SetPersistentState_ParamsSpec, 'media.mojom.MediaPlayer_SetPersistentState_Params', [
      mojo.internal.StructField('persistent', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec, 'media.mojom.MediaPlayer_SetPowerExperimentState_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec, 'media.mojom.MediaPlayer_SetAudioSinkId_Params', [
      mojo.internal.StructField('sink_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec, 'media.mojom.MediaPlayer_SuspendForFrameClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec, 'media.mojom.MediaPlayer_RequestMediaRemoting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestVisibility_ParamsSpec, 'media.mojom.MediaPlayer_RequestVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec, 'media.mojom.MediaPlayer_RequestVisibility_ResponseParams', [
      mojo.internal.StructField('has_sufficiently_visible_video', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec, 'media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_Params', [
      mojo.internal.StructField('auto_picture_in_picture_info', 0, 0, media.mojom.AutoPipInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      media.mojom.MediaPlayer_RequestPlay_ParamsSpec,
      null,
      [],
      false);
  }

  requestPause(triggered_by_user) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaPlayer_RequestPause_ParamsSpec,
      null,
      [triggered_by_user],
      false);
  }

  requestSeekForward(seek_time) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaPlayer_RequestSeekForward_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestSeekBackward(seek_time) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaPlayer_RequestSeekBackward_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestSeekTo(seek_time) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaPlayer_RequestSeekTo_ParamsSpec,
      null,
      [seek_time],
      false);
  }

  requestEnterPictureInPicture() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.MediaPlayer_RequestEnterPictureInPicture_ParamsSpec,
      null,
      [],
      false);
  }

  requestMute(mute) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.MediaPlayer_RequestMute_ParamsSpec,
      null,
      [mute],
      false);
  }

  setVolumeMultiplier(multiplier) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.MediaPlayer_SetVolumeMultiplier_ParamsSpec,
      null,
      [multiplier],
      false);
  }

  setPersistentState(persistent) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.MediaPlayer_SetPersistentState_ParamsSpec,
      null,
      [persistent],
      false);
  }

  setPowerExperimentState(enabled) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.MediaPlayer_SetPowerExperimentState_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setAudioSinkId(sink_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media.mojom.MediaPlayer_SetAudioSinkId_ParamsSpec,
      null,
      [sink_id],
      false);
  }

  suspendForFrameClosed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media.mojom.MediaPlayer_SuspendForFrameClosed_ParamsSpec,
      null,
      [],
      false);
  }

  requestMediaRemoting() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media.mojom.MediaPlayer_RequestMediaRemoting_ParamsSpec,
      null,
      [],
      false);
  }

  requestVisibility() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      media.mojom.MediaPlayer_RequestVisibility_ParamsSpec,
      media.mojom.MediaPlayer_RequestVisibility_ResponseParamsSpec,
      [],
      false);
  }

  recordAutoPictureInPictureInfo(auto_picture_in_picture_info) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      media.mojom.MediaPlayer_RecordAutoPictureInPictureInfo_ParamsSpec,
      null,
      [auto_picture_in_picture_info],
      false);
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
};

media.mojom.MediaPlayerPtr = media.mojom.MediaPlayerRemote;
media.mojom.MediaPlayerRequest = media.mojom.MediaPlayerPendingReceiver;


// Interface: MediaPlayerObserverClient
mojo.internal.Struct(
    media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec, 'media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec, 'media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParams', [
      mojo.internal.StructField('has_played_before', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ParamsSpec,
      media.mojom.MediaPlayerObserverClient_GetHasPlayedBefore_ResponseParamsSpec,
      [],
      false);
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
};

media.mojom.MediaPlayerObserverClientPtr = media.mojom.MediaPlayerObserverClientRemote;
media.mojom.MediaPlayerObserverClientRequest = media.mojom.MediaPlayerObserverClientPendingReceiver;


// Interface: MediaPlayerObserver
mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPlaying_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPaused_Params', [
      mojo.internal.StructField('stream_ended', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMutedStatusChanged_Params', [
      mojo.internal.StructField('muted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_Params', [
      mojo.internal.StructField('has_audio', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_video', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('content_type', 8, 0, media.mojom.MediaContentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_Params', [
      mojo.internal.StructField('media_position', 0, 0, media_session.mojom.MediaPositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_Params', [
      mojo.internal.StructField('status', 0, 0, media.mojom.FullscreenVideoStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnMediaSizeChanged_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_Params', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_Params', [
      mojo.internal.StructField('hashed_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_Params', [
      mojo.internal.StructField('uses_audio_service', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_Params', [
      mojo.internal.StructField('remote_playback_metadata', 0, 0, media_session.mojom.RemotePlaybackMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec, 'media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_Params', [
      mojo.internal.StructField('meets_visibility_threshold', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      media.mojom.MediaPlayerObserver_OnMediaPlaying_ParamsSpec,
      null,
      [],
      false);
  }

  onMediaPaused(stream_ended) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPaused_ParamsSpec,
      null,
      [stream_ended],
      false);
  }

  onMutedStatusChanged(muted) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.MediaPlayerObserver_OnMutedStatusChanged_ParamsSpec,
      null,
      [muted],
      false);
  }

  onMediaMetadataChanged(has_audio, has_video, content_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaMetadataChanged_ParamsSpec,
      null,
      [has_audio, has_video, content_type],
      false);
  }

  onMediaPositionStateChanged(media_position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaPositionStateChanged_ParamsSpec,
      null,
      [media_position],
      false);
  }

  onMediaEffectivelyFullscreenChanged(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaEffectivelyFullscreenChanged_ParamsSpec,
      null,
      [status],
      false);
  }

  onMediaSizeChanged(size) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.MediaPlayerObserver_OnMediaSizeChanged_ParamsSpec,
      null,
      [size],
      false);
  }

  onPictureInPictureAvailabilityChanged(available) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.MediaPlayerObserver_OnPictureInPictureAvailabilityChanged_ParamsSpec,
      null,
      [available],
      false);
  }

  onAudioOutputSinkChanged(hashed_device_id) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      media.mojom.MediaPlayerObserver_OnAudioOutputSinkChanged_ParamsSpec,
      null,
      [hashed_device_id],
      false);
  }

  onUseAudioServiceChanged(uses_audio_service) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      media.mojom.MediaPlayerObserver_OnUseAudioServiceChanged_ParamsSpec,
      null,
      [uses_audio_service],
      false);
  }

  onAudioOutputSinkChangingDisabled() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      media.mojom.MediaPlayerObserver_OnAudioOutputSinkChangingDisabled_ParamsSpec,
      null,
      [],
      false);
  }

  onRemotePlaybackMetadataChange(remote_playback_metadata) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      media.mojom.MediaPlayerObserver_OnRemotePlaybackMetadataChange_ParamsSpec,
      null,
      [remote_playback_metadata],
      false);
  }

  onVideoVisibilityChanged(meets_visibility_threshold) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      media.mojom.MediaPlayerObserver_OnVideoVisibilityChanged_ParamsSpec,
      null,
      [meets_visibility_threshold],
      false);
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
};

media.mojom.MediaPlayerObserverPtr = media.mojom.MediaPlayerObserverRemote;
media.mojom.MediaPlayerObserverRequest = media.mojom.MediaPlayerObserverPendingReceiver;


// Interface: MediaPlayerHost
mojo.internal.Struct(
    media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec, 'media.mojom.MediaPlayerHost_OnMediaPlayerAdded_Params', [
      mojo.internal.StructField('player_remote', 0, 0, mojo.internal.AssociatedInterfaceProxy(media.mojom.MediaPlayerRemote), null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.AssociatedInterfaceRequest(media.mojom.MediaPlayerObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('player_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
      media.mojom.MediaPlayerHost_OnMediaPlayerAdded_ParamsSpec,
      null,
      [player_remote, observer, player_id],
      false);
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
};

media.mojom.MediaPlayerHostPtr = media.mojom.MediaPlayerHostRemote;
media.mojom.MediaPlayerHostRequest = media.mojom.MediaPlayerHostPendingReceiver;

