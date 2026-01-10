// Auto-generated MojoJS binding
// Source: chromium_src/components/system_media_controls/mac/remote_cocoa/system_media_controls.mojom
// Module: system_media_controls.mojom

'use strict';

// Module namespace
var system_media_controls = system_media_controls || {};
system_media_controls.mojom = system_media_controls.mojom || {};


// Enum: PlaybackStatus
system_media_controls.mojom.mojom.PlaybackStatus = {
  kPlaying: 0,
  kPaused: 1,
  kStopped: 2,
};
system_media_controls.mojom.mojom.PlaybackStatusSpec = { $: mojo.internal.Enum() };

// Interface: SystemMediaControls
system_media_controls.mojom.mojom.SystemMediaControls = {};

system_media_controls.mojom.mojom.SystemMediaControlsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

system_media_controls.mojom.mojom.SystemMediaControlsRemote = class {
  static get $interfaceName() {
    return 'system_media_controls.mojom.SystemMediaControls';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      system_media_controls.mojom.mojom.SystemMediaControlsPendingReceiver,
      handle);
    this.$ = new system_media_controls.mojom.mojom.SystemMediaControlsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

system_media_controls.mojom.mojom.SystemMediaControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setIsNextEnabled(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setIsPreviousEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setIsPlayPauseEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setIsStopEnabled(enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setIsSeekToEnabled(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  setPlaybackStatus(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec,
      null,
      [status]);
  }

  setTitle(title) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetTitle_ParamsSpec,
      null,
      [title]);
  }

  setArtist(artist) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetArtist_ParamsSpec,
      null,
      [artist]);
  }

  setAlbum(album) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetAlbum_ParamsSpec,
      null,
      [album]);
  }

  setThumbnail(thumbnail) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetThumbnail_ParamsSpec,
      null,
      [thumbnail]);
  }

  setPosition(position) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_SetPosition_ParamsSpec,
      null,
      [position]);
  }

  clearMetadata() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControls_ClearMetadata_ParamsSpec,
      null,
      []);
  }

};

system_media_controls.mojom.mojom.SystemMediaControls.getRemote = function() {
  let remote = new system_media_controls.mojom.mojom.SystemMediaControlsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'system_media_controls.mojom.SystemMediaControls',
    'context');
  return remote.$;
};

// ParamsSpec for SetIsNextEnabled
system_media_controls.mojom.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsNextEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsPreviousEnabled
system_media_controls.mojom.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsPreviousEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsPlayPauseEnabled
system_media_controls.mojom.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsPlayPauseEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsStopEnabled
system_media_controls.mojom.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsStopEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsSeekToEnabled
system_media_controls.mojom.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsSeekToEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPlaybackStatus
system_media_controls.mojom.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetPlaybackStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: system_media_controls.mojom.PlaybackStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTitle
system_media_controls.mojom.mojom.SystemMediaControls_SetTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetTitle_Params',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetArtist
system_media_controls.mojom.mojom.SystemMediaControls_SetArtist_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetArtist_Params',
      packedSize: 16,
      fields: [
        { name: 'artist', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAlbum
system_media_controls.mojom.mojom.SystemMediaControls_SetAlbum_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetAlbum_Params',
      packedSize: 16,
      fields: [
        { name: 'album', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetThumbnail
system_media_controls.mojom.mojom.SystemMediaControls_SetThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetThumbnail_Params',
      packedSize: 16,
      fields: [
        { name: 'thumbnail', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaImageBitmapSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPosition
system_media_controls.mojom.mojom.SystemMediaControls_SetPosition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetPosition_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: media_session.mojom.MediaPositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearMetadata
system_media_controls.mojom.mojom.SystemMediaControls_ClearMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.ClearMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
system_media_controls.mojom.mojom.SystemMediaControlsPtr = system_media_controls.mojom.mojom.SystemMediaControlsRemote;
system_media_controls.mojom.mojom.SystemMediaControlsRequest = system_media_controls.mojom.mojom.SystemMediaControlsPendingReceiver;


// Interface: SystemMediaControlsObserver
system_media_controls.mojom.mojom.SystemMediaControlsObserver = {};

system_media_controls.mojom.mojom.SystemMediaControlsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

system_media_controls.mojom.mojom.SystemMediaControlsObserverRemote = class {
  static get $interfaceName() {
    return 'system_media_controls.mojom.SystemMediaControlsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      system_media_controls.mojom.mojom.SystemMediaControlsObserverPendingReceiver,
      handle);
    this.$ = new system_media_controls.mojom.mojom.SystemMediaControlsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

system_media_controls.mojom.mojom.SystemMediaControlsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec,
      null,
      []);
  }

  onPrevious() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec,
      null,
      []);
  }

  onPause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec,
      null,
      []);
  }

  onPlayPause() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec,
      null,
      []);
  }

  onStop() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec,
      null,
      []);
  }

  onPlay() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec,
      null,
      []);
  }

  onSeekTo(seek_time) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec,
      null,
      [seek_time]);
  }

  onBridgeCreatedForTesting() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec,
      null,
      []);
  }

  onMetadataClearedForTesting() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec,
      null,
      []);
  }

};

system_media_controls.mojom.mojom.SystemMediaControlsObserver.getRemote = function() {
  let remote = new system_media_controls.mojom.mojom.SystemMediaControlsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'system_media_controls.mojom.SystemMediaControlsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNext
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnNext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPrevious
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnPrevious_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPause
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnPause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPlayPause
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnPlayPause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStop
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnStop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPlay
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnPlay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSeekTo
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnSeekTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBridgeCreatedForTesting
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnBridgeCreatedForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnMetadataClearedForTesting
system_media_controls.mojom.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnMetadataClearedForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
system_media_controls.mojom.mojom.SystemMediaControlsObserverPtr = system_media_controls.mojom.mojom.SystemMediaControlsObserverRemote;
system_media_controls.mojom.mojom.SystemMediaControlsObserverRequest = system_media_controls.mojom.mojom.SystemMediaControlsObserverPendingReceiver;

