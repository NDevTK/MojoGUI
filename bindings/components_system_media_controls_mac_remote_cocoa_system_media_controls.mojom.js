// Auto-generated MojoJS binding
// Source: chromium_src/components/system_media_controls/mac/remote_cocoa/system_media_controls.mojom
// Module: system_media_controls.mojom

'use strict';

// Module namespace
var system_media_controls = system_media_controls || {};
system_media_controls.mojom = system_media_controls.mojom || {};


// Enum: PlaybackStatus
system_media_controls.mojom.PlaybackStatus = {
  kPlaying: 0,
  kPaused: 1,
  kStopped: 2,
};

// Interface: SystemMediaControls
system_media_controls.mojom.SystemMediaControls = {};

system_media_controls.mojom.SystemMediaControlsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

system_media_controls.mojom.SystemMediaControlsRemote = class {
  static get $interfaceName() {
    return 'system_media_controls.mojom.SystemMediaControls';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      system_media_controls.mojom.SystemMediaControlsPendingReceiver,
      handle);
    this.$ = new system_media_controls.mojom.SystemMediaControlsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

system_media_controls.mojom.SystemMediaControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setIsNextEnabled(enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setIsPreviousEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setIsPlayPauseEnabled(enabled) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setIsStopEnabled(enabled) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setIsSeekToEnabled(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setPlaybackStatus(status) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec,
      null,
      null,
      [status],
      undefined,
      undefined
    );
  }

  setTitle(title) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec,
      null,
      null,
      [title],
      undefined,
      undefined
    );
  }

  setArtist(artist) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec,
      null,
      null,
      [artist],
      undefined,
      undefined
    );
  }

  setAlbum(album) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec,
      null,
      null,
      [album],
      undefined,
      undefined
    );
  }

  setThumbnail(thumbnail) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec,
      null,
      null,
      [thumbnail],
      undefined,
      undefined
    );
  }

  setPosition(position) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec,
      null,
      null,
      [position],
      undefined,
      undefined
    );
  }

  clearMetadata() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

system_media_controls.mojom.SystemMediaControls.getRemote = function() {
  let remote = new system_media_controls.mojom.SystemMediaControlsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'system_media_controls.mojom.SystemMediaControls',
    'context');
  return remote.$;
};

// ParamsSpec for SetIsNextEnabled
system_media_controls.mojom.SystemMediaControls_SetIsNextEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsNextEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsPreviousEnabled
system_media_controls.mojom.SystemMediaControls_SetIsPreviousEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsPreviousEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsPlayPauseEnabled
system_media_controls.mojom.SystemMediaControls_SetIsPlayPauseEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsPlayPauseEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsStopEnabled
system_media_controls.mojom.SystemMediaControls_SetIsStopEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsStopEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsSeekToEnabled
system_media_controls.mojom.SystemMediaControls_SetIsSeekToEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetIsSeekToEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPlaybackStatus
system_media_controls.mojom.SystemMediaControls_SetPlaybackStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetPlaybackStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTitle
system_media_controls.mojom.SystemMediaControls_SetTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetTitle_Params',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetArtist
system_media_controls.mojom.SystemMediaControls_SetArtist_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetArtist_Params',
      packedSize: 16,
      fields: [
        { name: 'artist', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAlbum
system_media_controls.mojom.SystemMediaControls_SetAlbum_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetAlbum_Params',
      packedSize: 16,
      fields: [
        { name: 'album', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetThumbnail
system_media_controls.mojom.SystemMediaControls_SetThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetThumbnail_Params',
      packedSize: 16,
      fields: [
        { name: 'thumbnail', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPosition
system_media_controls.mojom.SystemMediaControls_SetPosition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControls.SetPosition_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearMetadata
system_media_controls.mojom.SystemMediaControls_ClearMetadata_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsPtr = system_media_controls.mojom.SystemMediaControlsRemote;
system_media_controls.mojom.SystemMediaControlsRequest = system_media_controls.mojom.SystemMediaControlsPendingReceiver;


// Interface: SystemMediaControlsObserver
system_media_controls.mojom.SystemMediaControlsObserver = {};

system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

system_media_controls.mojom.SystemMediaControlsObserverRemote = class {
  static get $interfaceName() {
    return 'system_media_controls.mojom.SystemMediaControlsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver,
      handle);
    this.$ = new system_media_controls.mojom.SystemMediaControlsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

system_media_controls.mojom.SystemMediaControlsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onPrevious() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onPause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onPlayPause() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onStop() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onPlay() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onSeekTo(seek_time) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec,
      null,
      null,
      [seek_time],
      undefined,
      undefined
    );
  }

  onBridgeCreatedForTesting() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onMetadataClearedForTesting() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

system_media_controls.mojom.SystemMediaControlsObserver.getRemote = function() {
  let remote = new system_media_controls.mojom.SystemMediaControlsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'system_media_controls.mojom.SystemMediaControlsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNext
system_media_controls.mojom.SystemMediaControlsObserver_OnNext_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsObserver_OnPrevious_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsObserver_OnPause_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsObserver_OnPlayPause_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsObserver_OnStop_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsObserver_OnPlay_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsObserver_OnSeekTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'system_media_controls.mojom.SystemMediaControlsObserver.OnSeekTo_Params',
      packedSize: 16,
      fields: [
        { name: 'seek_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBridgeCreatedForTesting
system_media_controls.mojom.SystemMediaControlsObserver_OnBridgeCreatedForTesting_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsObserver_OnMetadataClearedForTesting_ParamsSpec = {
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
system_media_controls.mojom.SystemMediaControlsObserverPtr = system_media_controls.mojom.SystemMediaControlsObserverRemote;
system_media_controls.mojom.SystemMediaControlsObserverRequest = system_media_controls.mojom.SystemMediaControlsObserverPendingReceiver;

